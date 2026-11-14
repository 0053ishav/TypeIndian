"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import type { TypingExportFormat } from "@/lib/typing/export";

const FORMATS: { id: TypingExportFormat; label: string; description: string; accent: string }[] = [
  { id: "txt", label: "TXT", description: "Plain text", accent: "bg-sky-100 text-sky-800" },
  { id: "docx", label: "DOCX", description: "Word document", accent: "bg-blue-100 text-blue-800" },
  { id: "pdf", label: "PDF", description: "PDF document", accent: "bg-rose-100 text-rose-800" },
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
    triggerRef.current?.focus();
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
        className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border border-orange-700 bg-gradient-to-r from-orange-600 to-amber-500 px-4 text-sm font-bold text-white shadow-md shadow-orange-900/15 transition-all hover:-translate-y-0.5 hover:from-orange-700 hover:to-amber-600 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3v11m0 0 4-4m-4 4-4-4M5 17v3h14v-3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Export
        <span aria-hidden="true" className={`text-xs transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
      </button>

      {open && (
        <div
          id="typing-export-menu"
          role="menu"
          aria-label="Export format"
          className="absolute right-0 top-full z-30 mt-2 min-w-56 overflow-hidden rounded-xl border border-orange-200 bg-white p-1.5 shadow-[0_16px_40px_rgba(124,45,18,0.18)] ring-1 ring-orange-100"
        >
          <div className="px-3 pb-1.5 pt-2 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Download as</div>
          {FORMATS.map((format, index) => (
            <button
              key={format.id}
              ref={(node) => { itemRefs.current[index] = node; }}
              type="button"
              role="menuitem"
              onClick={() => handleSelect(format.id)}
              className="flex min-h-12 w-full cursor-pointer items-center justify-between gap-4 rounded-lg px-3 py-2 text-left transition-colors hover:bg-orange-50 focus:bg-orange-50 focus:outline-none"
            >
              <span className={`rounded-md px-2 py-1 text-xs font-extrabold tracking-wide ${format.accent}`}>{format.label}</span>
              <span className="text-xs font-medium text-slate-500">{format.description}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
