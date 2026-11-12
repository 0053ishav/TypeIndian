"use client";

import { useEffect, useRef, useState } from "react";
import { fetchSuggestions } from "@/lib/transliteration/googleHttpTransliterate";
import SessionBoard from "./SessionBoard";
import { Language } from "@/types/language";
import VirtualKeyboard from "./VirtualKeyboard";
import ExportDropdown from "./ExportDropdown";
import { createTypingExport, type TypingExportFormat } from "@/lib/typing/export";
import { toast } from "sonner";
import { copyToClipboard } from "@/lib/clipboard";

type HistoryKind = "typing" | "deletion" | "virtual-keyboard" | "atomic";

type EditorSnapshot = {
  text: string;
  selectionStart: number;
  selectionEnd: number;
  kind?: HistoryKind;
  timestamp?: number;
  editStart?: number;
};

function getLocalDateStamp() {
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${date.getFullYear()}-${month}-${day}`;
}

function previousGraphemeStart(value: string, cursor: number) {
  if (cursor <= 0) return 0;

  if (typeof Intl.Segmenter === "function") {
    const segments = new Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(value);
    let previous = 0;
    for (const segment of segments) {
      if (segment.index + segment.segment.length >= cursor) return segment.index;
      previous = segment.index + segment.segment.length;
    }
    return previous;
  }

  const codePoint = value.codePointAt(cursor - 1);
  return Math.max(0, cursor - (codePoint && codePoint > 0xffff ? 2 : 1));
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");

  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();

  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function downloadTextFile(content: string, filename: string) {
  downloadBlob(new Blob([content], { type: "text/plain;charset=utf-8" }), filename);
}

export default function TypingTool({ language }: { language: Language }) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentWord, setCurrentWord] = useState("");
  const [boardLines, setBoardLines] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const historyRef = useRef<EditorSnapshot[]>([
    { text: "", selectionStart: 0, selectionEnd: 0 },
  ]);
  const historyIndexRef = useRef(0);
  const [historyIndex, setHistoryIndex] = useState(0);
  const suggestionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const suggestionRequestRef = useRef<AbortController | null>(null);
  const suggestionRequestIdRef = useRef(0);
  const wordRangeRef = useRef<{ start: number; end: number } | null>(null);
  const editorOperationIdRef = useRef(0);
  const selectionBeforeInputRef = useRef<{ start: number; end: number } | null>(null);

  const STORAGE_KEY = `typeindian-session-board-${language.transliteration.languageCode}`;

  /* ------------------------------------
     Load board from localStorage
  ------------------------------------ */
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setBoardLines(JSON.parse(saved));
      }
    } catch (err) {
      console.error("Failed to load session board:", err);
    }
  }, [STORAGE_KEY]);

  /* ------------------------------------
     Save board to localStorage
  ------------------------------------ */
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(boardLines));
    } catch (err) {
      console.error("Failed to save session board:", err);
    }
  }, [boardLines, STORAGE_KEY]);

  /* ---------------- lifecycle ---------------- */

  useEffect(() => {
    editorOperationIdRef.current += 1;
    setText("");
    historyRef.current = [{ text: "", selectionStart: 0, selectionEnd: 0 }];
    historyIndexRef.current = 0;
    setHistoryIndex(0);
    setCurrentWord("");
    suggestionRequestIdRef.current += 1;
    suggestionRequestRef.current?.abort();
    suggestionRequestRef.current = null;
    if (suggestionTimerRef.current) clearTimeout(suggestionTimerRef.current);
    suggestionTimerRef.current = null;
    setLoading(false);
    setSuggestions([]);
    setActiveSuggestionIndex(-1);
    wordRangeRef.current = null;
  }, [language.transliteration.languageCode]);

  useEffect(() => {
    return () => {
      suggestionRequestRef.current?.abort();
      if (suggestionTimerRef.current) clearTimeout(suggestionTimerRef.current);
    };
  }, []);

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      // Ignore shortcuts
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      const active = document.activeElement as HTMLElement | null;

      // Do not steal focus from interactive elements
      if (
        active &&
        (active.tagName === "INPUT" ||
          active.tagName === "TEXTAREA" ||
          active.tagName === "SELECT" ||
          active.tagName === "BUTTON" ||
          active.isContentEditable)
      ) {
        return;
      }

      // Only printable characters
      if (e.key.length === 1) {
        if (document.activeElement !== textarea) {
          textarea.focus();
        }

        // Move cursor to end
        const len = textarea.value.length;
        textarea.setSelectionRange(len, len);
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);

    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, []);

  /* ---------------- editor history ---------------- */

  const commitText = (
    value: string,
    selectionStart = value.length,
    selectionEnd = selectionStart,
    kind: HistoryKind = "atomic",
  ) => {
    const nextHistory = historyRef.current.slice(0, historyIndexRef.current + 1);
    const previous = nextHistory[nextHistory.length - 1];

    if (
      previous?.text !== value ||
      previous.selectionStart !== selectionStart ||
      previous.selectionEnd !== selectionEnd
    ) {
      const now = Date.now();
      let editStart = 0;
      let oldEnd = previous?.text.length ?? 0;
      let newEnd = value.length;

      if (previous) {
        while (
          editStart < previous.text.length &&
          editStart < value.length &&
          previous.text[editStart] === value[editStart]
        ) editStart++;

        while (
          oldEnd > editStart &&
          newEnd > editStart &&
          previous.text[oldEnd - 1] === value[newEnd - 1]
        ) {
          oldEnd--;
          newEnd--;
        }
      }

      const removedLength = oldEnd - editStart;
      const insertedLength = newEnd - editStart;
      const groupable = kind === "typing" || kind === "deletion" || kind === "virtual-keyboard";
      const previousCursor = previous?.selectionStart;
      const adjacent =
        previousCursor === editStart ||
        previousCursor === oldEnd ||
        (kind === "virtual-keyboard" && previousCursor === previous?.selectionEnd);

      const canGroup =
        groupable &&
        previous?.kind === kind &&
        typeof previous.timestamp === "number" &&
        now - previous.timestamp <= (kind === "virtual-keyboard" ? 1200 : 750) &&
        previous.selectionStart === previous.selectionEnd &&
        selectionStart === selectionEnd &&
        adjacent &&
        ((kind === "typing" && removedLength === 0 && insertedLength > 0) ||
          (kind === "deletion" && insertedLength === 0 && removedLength > 0) ||
          kind === "virtual-keyboard");

      const snapshot: EditorSnapshot = {
        text: value,
        selectionStart,
        selectionEnd,
        kind,
        timestamp: now,
        editStart,
      };

      if (canGroup) {
        nextHistory[nextHistory.length - 1] = snapshot;
      } else {
        nextHistory.push(snapshot);
      }

      if (nextHistory.length > 100) nextHistory.shift();

      historyRef.current = nextHistory;
      historyIndexRef.current = nextHistory.length - 1;
      setHistoryIndex(nextHistory.length - 1);
    }

    setText(value);
  };

  const updateCurrentHistorySelection = (start: number, end: number) => {
    const current = historyRef.current[historyIndexRef.current];
    if (!current) return;
    historyRef.current[historyIndexRef.current] = {
      ...current,
      selectionStart: start,
      selectionEnd: end,
    };
  };

  const restoreHistorySnapshot = (nextIndex: number) => {
    const snapshot = historyRef.current[nextIndex];
    if (!snapshot) return;

    // Undo/redo is a hard grouping boundary: the next edit starts a new operation.
    historyRef.current[nextIndex] = {
      ...snapshot,
      kind: undefined,
      timestamp: undefined,
      editStart: undefined,
    };

    editorOperationIdRef.current += 1;
    historyIndexRef.current = nextIndex;
    setHistoryIndex(nextIndex);
    setText(snapshot.text);
    cancelPendingSuggestions();
    setSuggestions([]);
    setActiveSuggestionIndex(-1);
    setCurrentWord("");
    wordRangeRef.current = null;

    requestAnimationFrame(() => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      textarea.focus();
      const start = Math.min(snapshot.selectionStart, snapshot.text.length);
      const end = Math.min(snapshot.selectionEnd, snapshot.text.length);
      textarea.setSelectionRange(start, end);
    });
  };

  const handleUndo = () => {
    if (historyIndexRef.current > 0) {
      restoreHistorySnapshot(historyIndexRef.current - 1);
    }
  };

  const handleRedo = () => {
    if (historyIndexRef.current < historyRef.current.length - 1) {
      restoreHistorySnapshot(historyIndexRef.current + 1);
    }
  };

  /* ---------------- helpers ---------------- */

  const processInput = (value: string, cursor = value.length) => {
    const prefix = value.slice(0, cursor);
    const match = prefix.match(/(\S+)$/);
    const lastWord = match?.[1] ?? "";

    suggestionRequestRef.current?.abort();
    if (suggestionTimerRef.current) clearTimeout(suggestionTimerRef.current);
    const requestId = ++suggestionRequestIdRef.current;

    setCurrentWord(lastWord);
    setSuggestions([]);
    setActiveSuggestionIndex(-1);
    wordRangeRef.current = lastWord
      ? { start: cursor - lastWord.length, end: cursor }
      : null;

    if (!lastWord) {
      setLoading(false);
      return;
    }

    setLoading(true);
    suggestionTimerRef.current = setTimeout(async () => {
      const controller = new AbortController();
      suggestionRequestRef.current = controller;

      try {
        const suggs = await fetchSuggestions(
          lastWord,
          language.transliteration.languageCode,
          5,
          controller.signal,
        );
        if (requestId === suggestionRequestIdRef.current) {
          setSuggestions(suggs);
          setActiveSuggestionIndex(-1);
        }
      } catch {
        if (requestId === suggestionRequestIdRef.current) {
          setSuggestions([]);
          setActiveSuggestionIndex(-1);
        }
      } finally {
        if (requestId === suggestionRequestIdRef.current) {
          setLoading(false);
        }
      }
    }, 180);
  };

  const cancelPendingSuggestions = () => {
    suggestionRequestIdRef.current += 1;
    suggestionRequestRef.current?.abort();
    suggestionRequestRef.current = null;
    if (suggestionTimerRef.current) clearTimeout(suggestionTimerRef.current);
    suggestionTimerRef.current = null;
    setLoading(false);
  };

  const transliterateWords = async (words: string[]) => {
    const results: string[] = [];

    // Keep large pastes from opening an unbounded number of requests at once.
    for (let index = 0; index < words.length; index += 4) {
      const batch = await Promise.all(
        words.slice(index, index + 4).map(async (word) => {
          try {
            const suggestions = await fetchSuggestions(
              word,
              language.transliteration.languageCode,
              1,
            );
            return suggestions[0] || word;
          } catch {
            return word;
          }
        }),
      );
      results.push(...batch);
    }

    return results;
  };

  /* ---------------- textarea events ---------------- */

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    editorOperationIdRef.current += 1;
    const inputType = (e.nativeEvent as InputEvent).inputType ?? "";
    const historyKind: HistoryKind =
      inputType.startsWith("delete")
        ? "deletion"
        : inputType === "insertText" || inputType === "insertCompositionText"
          ? "typing"
          : "atomic";
    commitText(value, e.target.selectionStart, e.target.selectionEnd, historyKind);
    processInput(value, e.target.selectionStart);
  };

  const handleWordCompletion = () => {
    if (!currentWord) return;
    if (!suggestions.length) return;

    insertSuggestion(suggestions[0]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") {
      e.preventDefault();
      if (e.shiftKey) handleRedo();
      else handleUndo();
      return;
    }

    if (e.ctrlKey && !e.metaKey && e.key.toLowerCase() === "y") {
      e.preventDefault();
      handleRedo();
      return;
    }

    if (e.key === "ArrowDown" && suggestions.length > 0) {
      e.preventDefault();
      setActiveSuggestionIndex((current) =>
        current < 0 ? 0 : Math.min(current + 1, suggestions.length - 1),
      );
      return;
    }

    if (e.key === "ArrowUp" && suggestions.length > 0) {
      e.preventDefault();
      setActiveSuggestionIndex((current) =>
        current < 0 ? suggestions.length - 1 : Math.max(current - 1, 0),
      );
      return;
    }

    if (e.key === "Enter" && activeSuggestionIndex >= 0) {
      e.preventDefault();
      insertSuggestion(suggestions[activeSuggestionIndex]);
      return;
    }

    if (e.key === "Escape" && (suggestions.length > 0 || loading)) {
      e.preventDefault();
      cancelPendingSuggestions();
      setSuggestions([]);
      setActiveSuggestionIndex(-1);
      return;
    }

    // Space → accept first suggestion
    if (e.key === " " && currentWord && suggestions.length > 0) {
      e.preventDefault();
      handleWordCompletion();
      return;
    }
    // 🔥 Ctrl/Cmd + Enter → Add to Session Board
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      handleAddToBoard();
    }
  };

  const handleBeforeInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    selectionBeforeInputRef.current = {
      start: e.currentTarget.selectionStart,
      end: e.currentTarget.selectionEnd,
    };
    const nativeEvent = e.nativeEvent as InputEvent;
    if (nativeEvent.data === " ") {
      if (currentWord && suggestions.length) {
        e.preventDefault();
        handleWordCompletion();
      }
    }
  };

  const insertSuggestion = (word: string) => {
    const range = wordRangeRef.current;
    if (!range) return;
    const textarea = textareaRef.current;
    if (textarea) {
      updateCurrentHistorySelection(textarea.selectionStart, textarea.selectionEnd);
    }
    selectionBeforeInputRef.current = null;

    const next =
      text.slice(0, range.start) +
      word +
      " " +
      text.slice(range.end);
    const cursor = range.start + word.length + 1;

    editorOperationIdRef.current += 1;
    commitText(next, cursor, cursor, "atomic");
    setCurrentWord("");
    cancelPendingSuggestions();
    setSuggestions([]);
    setActiveSuggestionIndex(-1);
    wordRangeRef.current = null;

    requestAnimationFrame(() => {
      const textarea = textareaRef.current;
      if (!textarea) return;
      textarea.focus();
      textarea.setSelectionRange(cursor, cursor);
    });
  };

  const handlePaste = async (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const pastedText = e.clipboardData.getData("text");
    if (!pastedText.trim()) return;

    e.preventDefault();
    const textarea = e.currentTarget;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    updateCurrentHistorySelection(start, end);
    selectionBeforeInputRef.current = null;
    const words = pastedText.split(/\s+/).filter(Boolean);
    const operationId = ++editorOperationIdRef.current;
    cancelPendingSuggestions();
    setLoading(true);

    try {
      const results = await transliterateWords(words);
      if (operationId !== editorOperationIdRef.current) return;

      const translated = results.join(" ");
      const next = text.slice(0, start) + translated + text.slice(end);
      const cursor = start + translated.length;
      commitText(next, cursor, cursor, "atomic");
      setSuggestions([]);
      setActiveSuggestionIndex(-1);
      setCurrentWord("");
      wordRangeRef.current = null;

      requestAnimationFrame(() => {
        const currentTextarea = textareaRef.current;
        if (!currentTextarea) return;
        currentTextarea.focus();
        currentTextarea.setSelectionRange(cursor, cursor);
      });
    } finally {
      if (operationId === editorOperationIdRef.current) setLoading(false);
    }
  };

  const handleDrop = async (e: React.DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    const droppedText =
      e.dataTransfer.getData("text/plain") || e.dataTransfer.getData("text");

    if (!droppedText.trim()) return;

    const textarea = e.currentTarget;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    updateCurrentHistorySelection(start, end);
    selectionBeforeInputRef.current = null;
    const words = droppedText.split(/\s+/).filter(Boolean);
    const operationId = ++editorOperationIdRef.current;
    cancelPendingSuggestions();
    setLoading(true);

    try {
      const results = await transliterateWords(words);
      if (operationId !== editorOperationIdRef.current) return;

      const translated = results.join(" ");
      const next = text.slice(0, start) + translated + text.slice(end);
      const cursor = start + translated.length;
      commitText(next, cursor, cursor);
      setSuggestions([]);
      setActiveSuggestionIndex(-1);
      setCurrentWord("");
      wordRangeRef.current = null;

      requestAnimationFrame(() => {
        const currentTextarea = textareaRef.current;
        if (!currentTextarea) return;
        currentTextarea.focus();
        currentTextarea.setSelectionRange(cursor, cursor);
      });
    } finally {
      if (operationId === editorOperationIdRef.current) setLoading(false);
    }
  };

  /* ---------------- letters click ---------------- */

  const insertChar = (char: string) => {
    const textarea = textareaRef.current;
    const start = textarea?.selectionStart ?? text.length;
    const end = textarea?.selectionEnd ?? start;
    updateCurrentHistorySelection(start, end);
    selectionBeforeInputRef.current = null;
    const next = text.slice(0, start) + char + text.slice(end);
    const cursor = start + char.length;

    editorOperationIdRef.current += 1;
    cancelPendingSuggestions();
    commitText(next, cursor, cursor, "virtual-keyboard");
    setCurrentWord("");
    setSuggestions([]);
    setActiveSuggestionIndex(-1);
    wordRangeRef.current = null;

    requestAnimationFrame(() => {
      const currentTextarea = textareaRef.current;
      if (!currentTextarea) return;

      currentTextarea.focus();
      currentTextarea.setSelectionRange(cursor, cursor);
    });
  };

  const handleVirtualBackspace = () => {
    const textarea = textareaRef.current;
    const start = textarea?.selectionStart ?? text.length;
    const end = textarea?.selectionEnd ?? start;
    if (start === 0 && end === 0) return;
    updateCurrentHistorySelection(start, end);
    selectionBeforeInputRef.current = null;

    const deleteStart = start === end ? previousGraphemeStart(text, start) : start;
    const next = text.slice(0, deleteStart) + text.slice(end);

    editorOperationIdRef.current += 1;
    cancelPendingSuggestions();
    commitText(next, deleteStart, deleteStart, "virtual-keyboard");
    setCurrentWord("");
    setSuggestions([]);
    setActiveSuggestionIndex(-1);
    wordRangeRef.current = null;

    requestAnimationFrame(() => {
      const currentTextarea = textareaRef.current;
      if (!currentTextarea) return;
      currentTextarea.focus();
      currentTextarea.setSelectionRange(deleteStart, deleteStart);
    });
  };

  /* ---------------- board ---------------- */

  const handleAddToBoard = () => {
    if (!text.trim()) return;
    const textarea = textareaRef.current;
    if (textarea) updateCurrentHistorySelection(textarea.selectionStart, textarea.selectionEnd);
    selectionBeforeInputRef.current = null;
    editorOperationIdRef.current += 1;
    cancelPendingSuggestions();
    setBoardLines((prev) => [...prev, text.trim()]);
    commitText("", 0, 0);
    setSuggestions([]);
    setActiveSuggestionIndex(-1);
    setCurrentWord("");
  };

  const handleCopyText = async () => {
    if (!text.trim()) return;

    try {
      const copied = await copyToClipboard(text);
      if (!copied) throw new Error("Clipboard write failed");

      toast.success("Copied to clipboard.");
    } catch {
      toast.error("Unable to copy text");
    }
  };

  const handleExport = async (format: TypingExportFormat) => {
    if (!text.trim()) return;

    try {
      const blob = await createTypingExport(text, language, format);
      downloadBlob(
        blob,
        `${language.slug}-typing-${getLocalDateStamp()}.${format}`,
      );
      toast.success(`${format.toUpperCase()} document downloaded.`);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Unable to export this document.",
      );
    }
  };

  const handleClearText = () => {
    if (!text.trim()) return;

    const confirmed = window.confirm(
      "Clear the current editor? This won't affect your Session Board.",
    );

    if (!confirmed) return;

    const textarea = textareaRef.current;
    if (textarea) updateCurrentHistorySelection(textarea.selectionStart, textarea.selectionEnd);
    selectionBeforeInputRef.current = null;
    editorOperationIdRef.current += 1;
    cancelPendingSuggestions();
    commitText("", 0, 0);
    setSuggestions([]);
    setActiveSuggestionIndex(-1);
    setCurrentWord("");

    requestAnimationFrame(() => {
      const textarea = textareaRef.current;

      if (!textarea) return;

      textarea.focus();
      textarea.setSelectionRange(0, 0);
    });

    toast.success("🗑 Editor cleared.");
  };

  const handleMoveToEditor = (index: number) => {
    const line = boardLines[index] + " ";
    const textarea = textareaRef.current;
    if (textarea) updateCurrentHistorySelection(textarea.selectionStart, textarea.selectionEnd);
    selectionBeforeInputRef.current = null;
    editorOperationIdRef.current += 1;
    cancelPendingSuggestions();

    setBoardLines((prev) => prev.filter((_, i) => i !== index));

    commitText(line, line.length, line.length);
    setSuggestions([]);
    setActiveSuggestionIndex(-1);
    setCurrentWord("");

    requestAnimationFrame(() => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      textarea.focus();

      const end = line.length;
      textarea.setSelectionRange(end, end);
    });
  };

  const handleUpdateLine = (index: number, value: string) => {
    setBoardLines((prev) =>
      prev.map((line, i) => (i === index ? value : line)),
    );
  };

  const handleCopyLine = async (line: string) => {
    try {
      const copied = await copyToClipboard(line);
      if (!copied) throw new Error("Clipboard write failed");
      toast.success("Sentence copied.");
    } catch {
      toast.error("Unable to copy sentence.");
    }
  };

  const handleDeleteLine = (index: number) => {
    setBoardLines((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCopyAll = async () => {
    if (boardLines.length === 0) return;

    try {
      const copied = await copyToClipboard(boardLines.join("\n"));
      if (!copied) throw new Error("Clipboard write failed");
      toast.success("Session Board copied.");
    } catch {
      toast.error("Unable to copy Session Board.");
    }
  };

  const handleDownloadBoard = () => {
    if (boardLines.length === 0) return;

    downloadTextFile(
      boardLines.join("\n"),
      `${language.slug}-session-board-${getLocalDateStamp()}.txt`,
    );

    toast.success("Session Board downloaded.");
  };

  const handleReorder = (from: number, to: number) => {
    setBoardLines((prev) => {
      if (
        !Number.isInteger(from) ||
        !Number.isInteger(to) ||
        from < 0 ||
        to < 0 ||
        from >= prev.length ||
        to >= prev.length ||
        from === to
      ) {
        return prev;
      }

      const copy = [...prev];
      const [moved] = copy.splice(from, 1);
      copy.splice(to, 0, moved);
      return copy;
    });
  };

  /* ---------------- render ---------------- */

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6">
      <h1 className="text-3xl font-bold mb-2 text-[--color-text-heading]">
        {language.typing.title}
      </h1>
      <p className="mb-4 text-[--color-text-body]">
        {language.typing.subtitle}
      </p>
      <div className="card p-4 sm:p-6">
        <div className="mb-3 flex justify-end">
          <ExportDropdown disabled={!text.trim()} onExport={handleExport} />
        </div>
        <textarea
          ref={textareaRef}
          role="combobox"
          aria-label={`Typing input for ${language.name}`}
          aria-autocomplete="list"
          aria-haspopup="listbox"
          aria-expanded={loading || suggestions.length > 0}
          aria-controls="typing-suggestions"
          aria-activedescendant={
            activeSuggestionIndex >= 0
              ? `typing-suggestion-${activeSuggestionIndex}`
              : undefined
          }
          rows={9}
          dir={language.direction}
          className="input-base min-h-48 resize-y"
          placeholder="Type here in English..."
          value={text}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          onBeforeInput={handleBeforeInput}
          onPaste={handlePaste}
          onDrop={handleDrop}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
        />

        {/* Suggestions */}
        <div
          id="typing-suggestions"
          className="suggestion-bar"
          role="listbox"
          aria-label="Transliteration suggestions"
        >
          {loading &&
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="skeleton-chip" />
            ))}

          {!loading &&
            suggestions.map((s, i) => (
              <button
                key={i}
                id={`typing-suggestion-${i}`}
                role="option"
                aria-selected={i === activeSuggestionIndex}
                dir={language.direction}
                type="button"
                onClick={() => insertSuggestion(s)}
                className={`suggestion-chip ${i === activeSuggestionIndex ? "ring-2 ring-blue-500" : ""}`}
              >
                {s}
              </button>
            ))}
        </div>
        <p className="sr-only" role="status" aria-live="polite">
          {loading
            ? "Loading transliteration suggestions"
            : suggestions.length > 0
              ? `${suggestions.length} suggestions available`
              : ""}
        </p>
      </div>

      <div className="mt-4 grid md:grid-cols-[1fr_auto] gap-4 items-start">
        {/* Desktop Actions */}
        <div className="hidden sm:flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleUndo}
            className="btn-secondary"
            disabled={historyIndex === 0}
            aria-label="Undo"
          >
            ↶ Undo
          </button>

          <button
            type="button"
            onClick={handleRedo}
            className="btn-secondary"
            disabled={historyIndex >= historyRef.current.length - 1}
            aria-label="Redo"
          >
            ↷ Redo
          </button>

          <button onClick={handleAddToBoard} className="btn-primary">
            ➕ Add to Board
          </button>

          <button
            onClick={handleCopyText}
            className="btn-secondary"
            disabled={!text.trim()}
          >
            📋 Copy
          </button>

          <button
            onClick={handleClearText}
            className="btn-secondary"
            disabled={!text.trim()}
          >
            🗑 Clear
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex sm:hidden flex-wrap gap-2">
          <button
            type="button"
            onClick={handleUndo}
            className="btn-secondary min-h-11 flex-1"
            disabled={historyIndex === 0}
            aria-label="Undo"
          >
            ↶
          </button>

          <button
            type="button"
            onClick={handleRedo}
            className="btn-secondary min-h-11 flex-1"
            disabled={historyIndex >= historyRef.current.length - 1}
            aria-label="Redo"
          >
            ↷
          </button>

          <button
            type="button"
            onClick={handleAddToBoard}
            className="btn-primary min-h-11 flex-1"
            aria-label="Add to Board"
          >
            ➕
          </button>

          <button
            type="button"
            onClick={handleCopyText}
            className="btn-secondary min-h-11 flex-1"
            disabled={!text.trim()}
            aria-label="Copy"
          >
            📋
          </button>

          <button
            type="button"
            onClick={handleClearText}
            className="btn-secondary min-h-11 flex-1"
            disabled={!text.trim()}
            aria-label="Clear"
          >
            🗑
          </button>
        </div>

        {/* Shortcuts */}
        <div className="hidden md:block text-sm text-[--color-text-muted] bg-gray-50 border rounded-lg p-3">
          <div className="font-semibold mb-2 text-[--color-text-heading]">
            Keyboard shortcuts
          </div>

          <ul className="space-y-1">
            <li>
              <kbd className="font-mono">Space</kbd> → convert word
            </li>
            <li>
              <kbd className="font-mono">Ctrl/Cmd + Z</kbd> → undo
            </li>
            <li>
              <kbd className="font-mono">Ctrl/Cmd + Shift + Z</kbd> → redo
            </li>
            <li>
              <kbd className="font-mono">↑ / ↓</kbd> → navigate suggestions
            </li>
            <li>
              <kbd className="font-mono">Enter</kbd> → accept selected suggestion
            </li>
            <li>
              <kbd className="font-mono">Escape</kbd> → dismiss suggestions
            </li>
            <li>
              <kbd className="font-mono">Tab</kbd> → move to next control
            </li>
            <li>
              <kbd className="font-mono">Ctrl + Y</kbd> → redo
            </li>
            <li>
              <kbd className="font-mono">Ctrl/Cmd + C</kbd> → copy
            </li>
            <li>
              <kbd className="font-mono">Ctrl/Cmd + X</kbd> → cut
            </li>
            <li>
              <kbd className="font-mono">Ctrl/Cmd + Enter</kbd> → add to board
            </li>
          </ul>
        </div>
      </div>

      <SessionBoard
        lines={boardLines}
        direction={language.direction}
        onUpdateLine={handleUpdateLine}
        onMoveToEditor={handleMoveToEditor}
        onCopyLine={handleCopyLine}
        onDeleteLine={handleDeleteLine}
        onCopyAll={handleCopyAll}
        onDownloadAll={handleDownloadBoard}
        onReorder={handleReorder}
      />

      <div className="mt-8">
        <button
          type="button"
          aria-expanded={isKeyboardOpen}
          aria-controls="typing-virtual-keyboard"
          onClick={() => setIsKeyboardOpen((open) => !open)}
          className="btn-secondary min-h-11 w-full sm:w-auto"
        >
          {isKeyboardOpen ? "Close virtual keyboard" : "Open virtual keyboard"}
        </button>
        {isKeyboardOpen && (
          <div id="typing-virtual-keyboard">
            <VirtualKeyboard
              language={language}
              onInsert={insertChar}
              onBackspace={handleVirtualBackspace}
            />
          </div>
        )}
      </div>
    </div>
  );
}
