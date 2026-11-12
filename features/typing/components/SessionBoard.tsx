"use client";

import { LanguageDirection } from "@/types/language";
import { useState } from "react";

export default function SessionBoard({
  lines,
  direction,
  onUpdateLine,
  onMoveToEditor,
  onCopyLine,
  onDeleteLine,
  onCopyAll,
  onDownloadAll,
  onReorder,
}: {
  lines: string[];
  direction: LanguageDirection;
  onUpdateLine: (index: number, newLine: string) => void;
  onMoveToEditor: (index: number) => void;
  onCopyLine: (line: string) => void;
  onDeleteLine: (index: number) => void;
  onCopyAll: () => void;
  onDownloadAll: () => void;
  onReorder: (from: number, to: number) => void;
}) {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [draft, setDraft] = useState("");
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [overIndex, setOverIndex] = useState<number | null>(null);

  const startEditing = (index: number, line: string) => {
    setEditingIndex(index);
    setDraft(line);
  };

  const cancelEditing = () => {
    setEditingIndex(null);
    setDraft("");
  };

  const saveEditing = () => {
    if (editingIndex === null) return;

    const clean = draft.trim();
    if (!clean) return;

    onUpdateLine(editingIndex, clean);
    cancelEditing();
  };

  const handleDrop = () => {
    if (dragIndex === null || overIndex === null || dragIndex === overIndex) {
      setDragIndex(null);
      setOverIndex(null);
      return;
    }

    onReorder(dragIndex, overIndex);
    setDragIndex(null);
    setOverIndex(null);
  };

  return (
    <div className="mt-8 border-t pt-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-[--color-text-heading]">
          Session Board
        </h2>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={onCopyAll}
            disabled={lines.length === 0}
            className="text-sm px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-40 cursor-pointer"
          >
            Copy All
          </button>
          <button
            type="button"
            onClick={onDownloadAll}
            disabled={lines.length === 0}
            className="text-sm px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-40 cursor-pointer"
          >
            Download TXT
          </button>
        </div>
      </div>

      {lines.length === 0 && (
        <div className="text-sm text-[--color-text-muted] py-6 border rounded bg-gray-50 text-center">
          Saved sentences will appear here.
        </div>
      )}

      <div className="space-y-2" role="list" aria-label="Saved sentences">
        {lines.map((line, i) => (
          <div
            key={i}
            role="listitem"
            draggable={editingIndex === null}
            onDragStart={() => setDragIndex(i)}
            onDragOver={(e) => {
              e.preventDefault();
              setOverIndex(i);
            }}
            onDrop={handleDrop}
            onDragEnd={() => {
              setDragIndex(null);
              setOverIndex(null);
            }}
            className={`
              flex items-start justify-between gap-3 p-3 border rounded bg-white
              transition
              ${dragIndex === i ? "opacity-40" : ""}
              ${overIndex === i && dragIndex !== i ? "ring-2 ring-orange-300" : ""}
            `}
          >
            <div className="flex-1 min-w-0">
              {editingIndex === i ? (
                <>
                  <textarea
                    dir={direction}
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    rows={2}
                    aria-label={`Edit saved sentence ${i + 1}`}
                    className="w-full border rounded p-2 text-sm focus:outline-none focus:ring"
                  />

                  <div className="flex gap-2 mt-2">
                    <button type="button" onClick={saveEditing} className="btn-primary">
                      Save
                    </button>

                    <button type="button" onClick={cancelEditing} className="btn-secondary">
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <div dir={direction} className="text-[--color-text-body] break-words">
                  {line}
                </div>
              )}
            </div>

            {editingIndex !== i && (
              <div className="flex flex-wrap items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => onReorder(i, i - 1)}
                  disabled={i === 0}
                  aria-label={`Move sentence ${i + 1} up`}
                  title="Move up"
                  className="min-h-[44px] min-w-[44px] text-sm px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  ↑
                </button>

                <button
                  type="button"
                  onClick={() => onReorder(i, i + 1)}
                  disabled={i === lines.length - 1}
                  aria-label={`Move sentence ${i + 1} down`}
                  title="Move down"
                  className="min-h-[44px] min-w-[44px] text-sm px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  ↓
                </button>

                <button
                  type="button"
                  onClick={() => startEditing(i, line)}
                  aria-label={`Edit sentence ${i + 1}`}
                  title="Edit inline"
                  className="min-h-[44px] min-w-[44px] text-sm px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer"
                >
                  ✏️
                </button>

                <button
                  type="button"
                  onClick={() => onMoveToEditor(i)}
                  aria-label={`Move sentence ${i + 1} to editor`}
                  title="Move to editor"
                  className="min-h-[44px] min-w-[44px] text-sm px-2 py-1 rounded bg-blue-100 hover:bg-blue-200 cursor-pointer"
                >
                  ↗
                </button>

                <button
                  type="button"
                  onClick={() => onCopyLine(line)}
                  aria-label={`Copy sentence ${i + 1}`}
                  title="Copy"
                  className="min-h-[44px] min-w-[44px] text-sm px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer"
                >
                  📋
                </button>

                <button
                  type="button"
                  onClick={() => onDeleteLine(i)}
                  aria-label={`Delete sentence ${i + 1}`}
                  title="Delete"
                  className="min-h-[44px] min-w-[44px] text-sm px-2 py-1 rounded bg-red-100 hover:bg-red-200 text-red-700 cursor-pointer"
                >
                  ✕
                </button>

                <span
                  aria-hidden="true"
                  title="Drag to reorder"
                  className="cursor-grab text-gray-400 px-2"
                >
                  ⠿
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
