"use client";

import { useEffect, useRef, useState } from "react";
import { fetchSuggestions } from "@/lib/transliteration/googleHttpTransliterate";
import SessionBoard from "./SessionBoard";
import { Language } from "@/types/language";
import AlphabetGrid from "@/components/ui/AlphabetGrid";
import { toast } from "sonner";
import { copyToClipboard } from "@/lib/clipboard";

export default function TypingTool({ language }: { language: Language }) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentWord, setCurrentWord] = useState("");
  const [boardLines, setBoardLines] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const suggestionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const suggestionRequestRef = useRef<AbortController | null>(null);
  const suggestionRequestIdRef = useRef(0);
  const wordRangeRef = useRef<{ start: number; end: number } | null>(null);
  const editorOperationIdRef = useRef(0);

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
    setText("");
    setCurrentWord("");
    setSuggestions([]);
    setActiveSuggestionIndex(-1);
    setLoading(false);
    wordRangeRef.current = null;
    suggestionRequestRef.current?.abort();
    if (suggestionTimerRef.current) clearTimeout(suggestionTimerRef.current);
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
    setText(value);
    processInput(value, e.target.selectionStart);
  };

  const handleWordCompletion = () => {
    if (!currentWord) return;
    if (!suggestions.length) return;

    insertSuggestion(suggestions[0]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
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

    const next =
      text.slice(0, range.start) +
      word +
      " " +
      text.slice(range.end);
    const cursor = range.start + word.length + 1;

    editorOperationIdRef.current += 1;
    setText(next);
    setCurrentWord("");
    setSuggestions([]);
    setActiveSuggestionIndex(-1);
    setLoading(false);
    wordRangeRef.current = null;
    suggestionRequestRef.current?.abort();
    if (suggestionTimerRef.current) clearTimeout(suggestionTimerRef.current);

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
      setText(next);
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
      setText(next);
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
    const next = text + char;

    editorOperationIdRef.current += 1;
    setText(next);
    processInput(next, next.length);

    requestAnimationFrame(() => {
      textareaRef.current?.focus();

      const end = next.length;
      textareaRef.current?.setSelectionRange(end, end);
    });
  };

  /* ---------------- board ---------------- */

  const handleAddToBoard = () => {
    if (!text.trim()) return;
    editorOperationIdRef.current += 1;
    cancelPendingSuggestions();
    setBoardLines((prev) => [...prev, text.trim()]);
    setText("");
    setSuggestions([]);
    setActiveSuggestionIndex(-1);
    setCurrentWord("");
  };

  const handleCopyText = async () => {
    if (!text.trim()) return;

    try {
      await copyToClipboard(text);

      toast.success("Copied to clipboard.");
    } catch {
      toast.error("Unable to copy text");
    }
  };

  const handleDownloadText = () => {
    if (!text.trim()) return;

    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    const date = new Date().toISOString().slice(0, 10);

    anchor.href = url;
    anchor.download = `${language.slug}-typing-${date}.txt`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);

    toast.success("Text file downloaded.");
  };

  const handleClearText = () => {
    if (!text.trim()) return;

    const confirmed = window.confirm(
      "Clear the current editor? This won't affect your Session Board.",
    );

    if (!confirmed) return;

    editorOperationIdRef.current += 1;
    cancelPendingSuggestions();
    setText("");
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
    editorOperationIdRef.current += 1;
    cancelPendingSuggestions();

    setBoardLines((prev) => prev.filter((_, i) => i !== index));

    setText(line);
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
    await navigator.clipboard.writeText(line);
  };

  const handleDeleteLine = (index: number) => {
    setBoardLines((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCopyAll = async () => {
    await navigator.clipboard.writeText(boardLines.join("\n"));
  };

  const handleReorder = (from: number, to: number) => {
    setBoardLines((prev) => {
      const copy = [...prev];
      const [moved] = copy.splice(from, 1);
      copy.splice(to, 0, moved);
      return copy;
    });
  };

  /* ---------------- render ---------------- */

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2 text-[--color-text-heading]">
        {language.typing.title}
      </h1>
      <p className="mb-4 text-[--color-text-body]">
        {language.typing.subtitle}
      </p>
      <div className="card p-6">
        <textarea
          ref={textareaRef}
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={suggestions.length > 0}
          aria-controls="typing-suggestions"
          aria-activedescendant={
            activeSuggestionIndex >= 0
              ? `typing-suggestion-${activeSuggestionIndex}`
              : undefined
          }
          rows={9}
          dir={language.direction}
          className="input-base"
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
      </div>

      <div className="mt-4 grid md:grid-cols-[1fr_auto] gap-4 items-start">
        {/* Desktop Actions */}
        <div className="hidden sm:flex flex-wrap gap-3">
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
            onClick={handleDownloadText}
            className="btn-secondary"
            disabled={!text.trim()}
          >
            ↓ Download TXT
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
        <div className="flex sm:hidden gap-2">
          <button
            onClick={handleAddToBoard}
            className="btn-primary flex-1"
            aria-label="Add to Board"
          >
            ➕
          </button>

          <button
            onClick={handleCopyText}
            className="btn-secondary flex-1"
            disabled={!text.trim()}
            aria-label="Copy"
          >
            📋
          </button>

          <button
            onClick={handleDownloadText}
            className="btn-secondary flex-1"
            disabled={!text.trim()}
            aria-label="Download text file"
          >
            ↓
          </button>

          <button
            onClick={handleClearText}
            className="btn-secondary flex-1"
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
              <kbd className="font-mono">Tab</kbd> → select word
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
        onReorder={handleReorder}
      />

      <div className="mt-24">
        <AlphabetGrid language={language} interactive onInsert={insertChar} />{" "}
      </div>
    </div>
  );
}
