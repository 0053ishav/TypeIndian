"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";
import type { TypingExportFormat } from "@/lib/typing/export";

const FORMATS: { id: TypingExportFormat; label: string; description: string }[] = [
  { id: "txt", label: "TXT", description: "Plain text" },
  { id: "docx", label: "DOCX", description: "Word document" },
  { id: "pdf", label: "PDF", description: "PDF document" },
];

export default function ExportDropdown({
  disabled,
  onExport,
}: {
  disabled: boolean;
  onExport: (format: TypingExportFormat) => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    if (open) itemRefs.current[0]?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handlePointerDown = (event: globalThis.PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
      triggerRef.current?.focus();
      return;
    }

    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const current = itemRefs.current.findIndex((item) => item === document.activeElement);
    const direction = event.key === "ArrowDown" ? 1 : -1;
    const next = current < 0
      ? 0
      : (current + direction + FORMATS.length) % FORMATS.length;
    itemRefs.current[next]?.focus();
  };

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setOpen(false);
    }
  };

  const handleSelect = (format: TypingExportFormat) => {
    setOpen(false);
    onExport(format);
  };

  return (
    <div ref={rootRef} className="relative flex justify-end" onKeyDown={handleKeyDown} onBlur={handleBlur}>
      <button
        ref={triggerRef}
        type="button"
        disabled={disabled}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="typing-export-menu"
        onClick={() => setOpen((value) => !value)}
        className="btn-secondary min-h-11 px-4 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Export <span aria-hidden="true">▾</span>
      </button>

      {open && (
        <div
          id="typing-export-menu"
          role="menu"
          aria-label="Export format"
          className="absolute right-0 top-full z-20 mt-2 min-w-52 overflow-hidden rounded-lg border border-[--color-border] bg-white p-1 shadow-lg"
        >
          {FORMATS.map((format, index) => (
            <button
              key={format.id}
              ref={(node) => { itemRefs.current[index] = node; }}
              type="button"
              role="menuitem"
              onClick={() => handleSelect(format.id)}
              className="flex min-h-12 w-full items-center justify-between gap-4 rounded-md px-3 py-2 text-left hover:bg-slate-50 focus:bg-slate-50 focus:outline-none"
            >
              <span className="font-semibold text-[--color-text-heading]">{format.label}</span>
              <span className="text-xs text-[--color-text-muted]">{format.description}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
