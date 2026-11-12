"use client";

import { useMemo, useRef, useState } from "react";
import type { PointerEvent } from "react";
import type { Language } from "@/types/language";
import {
  getVirtualKeyboardLayout,
  type KeyboardLayer,
} from "../keyboard-layouts";

const LAYER_LABELS: Record<KeyboardLayer, string> = {
  base: "Base",
  shift: "Shift",
  altGr: "AltGr",
  altGrShift: "AltGr + Shift",
};

type Position = { x: number; y: number };
type Dimensions = { width: number; height: number };

export default function VirtualKeyboard({
  language,
  onInsert,
  onBackspace,
  onClose,
}: {
  language: Language;
  onInsert: (value: string) => void;
  onBackspace: () => void;
  onClose: () => void;
}) {
  const layout = useMemo(() => getVirtualKeyboardLayout(language), [language]);
  const [layer, setLayer] = useState<KeyboardLayer>("base");
  const [position, setPosition] = useState<Position | null>(null);
  const [dimensions, setDimensions] = useState<Dimensions | null>(null);
  const keyboardRef = useRef<HTMLElement>(null);
  const resizeRef = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    startWidth: number;
    startHeight: number;
  } | null>(null);
  const dragRef = useRef<{
    pointerId: number;
    offsetX: number;
    offsetY: number;
  } | null>(null);

  const startDragging = (event: PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("button")) return;
    event.preventDefault();
    const bounds = keyboardRef.current?.getBoundingClientRect();
    dragRef.current = {
      pointerId: event.pointerId,
      offsetX: event.clientX - (bounds?.left ?? 12),
      offsetY: event.clientY - (bounds?.top ?? window.innerHeight - 420),
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const moveKeyboard = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current || dragRef.current.pointerId !== event.pointerId) return;
    const width = keyboardRef.current?.offsetWidth ?? 720;
    const height = keyboardRef.current?.offsetHeight ?? 420;
    const x = Math.max(8, Math.min(window.innerWidth - width - 8, event.clientX - dragRef.current.offsetX));
    const y = Math.max(8, Math.min(window.innerHeight - Math.min(height, window.innerHeight - 16) - 8, event.clientY - dragRef.current.offsetY));
    setPosition({ x, y });
  };

  const startResizing = (event: PointerEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const bounds = keyboardRef.current?.getBoundingClientRect();
    if (!bounds) return;
    resizeRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startWidth: bounds.width,
      startHeight: bounds.height,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const resizeKeyboard = (event: PointerEvent<HTMLButtonElement>) => {
    const start = resizeRef.current;
    if (!start || start.pointerId !== event.pointerId) return;
    const width = Math.max(320, Math.min(window.innerWidth - 16, start.startWidth + event.clientX - start.startX));
    const height = Math.max(240, Math.min(window.innerHeight - 16, start.startHeight + event.clientY - start.startY));
    setDimensions({ width, height });
  };

  const stopResizing = (event: PointerEvent<HTMLButtonElement>) => {
    if (resizeRef.current?.pointerId !== event.pointerId) return;
    resizeRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    if (dragRef.current?.pointerId !== event.pointerId) return;
    dragRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section
      ref={keyboardRef}
      id="typing-virtual-keyboard"
      className="fixed z-[1000] flex w-[min(760px,calc(100vw-24px))] flex-col overflow-hidden rounded-2xl border border-slate-300 bg-slate-100 shadow-[0_24px_80px_rgba(15,23,42,0.35)] ring-1 ring-black/10"
      style={{
        ...(position
          ? { left: position.x, top: position.y }
          : { left: 12, bottom: 16 }),
        ...(dimensions ? { width: dimensions.width, height: dimensions.height } : {}),
        maxHeight: "calc(100dvh - 16px)",
      }}
      aria-label={`${language.name} on-screen keyboard`}
      dir="ltr"
    >
      <div
        className="flex min-h-12 cursor-grab touch-none items-center justify-between gap-3 border-b border-slate-300 bg-gradient-to-r from-slate-800 to-slate-700 px-3 py-2 text-white active:cursor-grabbing"
        onPointerDown={startDragging}
        onPointerMove={moveKeyboard}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        title="Drag to move keyboard"
      >
        <div className="flex min-w-0 items-center gap-2">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0 text-orange-300" stroke="currentColor" strokeWidth="1.8">
            <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
            <path d="M6 9h1.5M10 9h1.5M14 9h1.5M18 9h.1M6 12h1.5M10 12h1.5M14 12h1.5M18 12h.1M8 15.5h8" strokeLinecap="round" />
          </svg>
          <div className="min-w-0">
            <h3 className="truncate text-sm font-bold">{language.name} keyboard</h3>
            <p className="truncate text-[10px] text-slate-300">{layout.name} · {layout.standard} · Drag to move · Resize corner</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close virtual keyboard"
          title="Close keyboard"
          className="inline-flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-white/20 bg-white/10 text-lg text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
        >
          ×
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-300 bg-slate-200 px-3 py-2">
        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">Keyboard layer</span>
        <div className="flex flex-wrap gap-1" role="group" aria-label="Keyboard layer">
          {layout.layers.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={layer === item}
              onClick={() => setLayer(item)}
              className={`min-h-8 cursor-pointer rounded-md border px-2.5 text-[11px] font-semibold transition ${layer === item ? "border-orange-600 bg-orange-600 text-white shadow-sm" : "border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50"}`}
            >
              {LAYER_LABELS[item]}
            </button>
          ))}
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-auto p-2.5 pb-8 sm:p-3" role="group" aria-label="Virtual typing keys">
        <div className="min-w-[440px] space-y-2">
          {layout.rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-1.5">
              {row.map((key) => {
                const output = key.outputs[layer];
                const active = Boolean(output);
                return (
                  <button
                    key={key.code}
                    type="button"
                    disabled={!active}
                    title={active ? `${key.label} → ${output}` : key.label}
                    aria-label={active ? `${output} from ${key.label}` : `${key.label}, unavailable`}
                    onClick={() => output && onInsert(output)}
                    className="group flex min-h-14 min-w-[30px] flex-1 cursor-pointer flex-col items-center justify-center rounded-lg border border-slate-300 border-b-[4px] border-b-slate-400 bg-gradient-to-b from-white to-slate-50 px-1 py-1 text-center text-slate-800 shadow-[0_2px_3px_rgba(15,23,42,0.12)] transition-all hover:-translate-y-0.5 hover:border-orange-300 hover:border-b-orange-400 hover:from-orange-50 hover:to-white hover:shadow-md active:translate-y-[2px] active:border-b-2 active:border-b-slate-400 disabled:cursor-not-allowed disabled:opacity-30 sm:min-h-[60px]"
                  >
                    <span className="text-[9px] font-semibold uppercase leading-none tracking-wide text-slate-400 group-hover:text-orange-600">
                      {key.label.toUpperCase()}
                    </span>
                    <span
                      dir={language.direction}
                      className="mt-1 min-h-6 text-lg font-bold leading-tight text-slate-900 sm:text-xl"
                    >
                      {output ?? " "}
                    </span>
                  </button>
                );
              })}
            </div>
          ))}

          {layout.specialKeys && (
            <div className="flex flex-wrap items-center gap-1.5 rounded-lg border border-dashed border-slate-300 bg-slate-200/70 p-2" role="group" aria-label={layout.specialKeys.label}>
              <span className="mr-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">{layout.specialKeys.label}</span>
              {layout.specialKeys.keys.map((key) => (
                <button
                  key={key.label}
                  type="button"
                  onClick={() => onInsert(key.output)}
                  aria-label={`${key.label} special character`}
                  className="min-h-10 min-w-10 cursor-pointer rounded-lg border border-slate-300 border-b-[3px] border-b-slate-400 bg-white px-3 text-lg font-bold text-slate-800 shadow-sm transition hover:border-orange-300 hover:bg-orange-50 active:translate-y-px"
                >
                  {key.label}
                </button>
              ))}
            </div>
          )}

          <div className="flex gap-1.5 pt-1">
            <button
              type="button"
              onClick={onBackspace}
              aria-label="Backspace"
              className="min-h-12 flex-1 cursor-pointer rounded-lg border border-slate-400 border-b-[4px] border-b-slate-500 bg-gradient-to-b from-slate-200 to-slate-300 px-2 text-xs font-bold text-slate-800 shadow-sm transition hover:from-slate-300 hover:to-slate-200 active:translate-y-[2px] active:border-b-2"
            >
              ← Backspace
            </button>
            <button
              type="button"
              onClick={() => onInsert(" ")}
              className="min-h-12 flex-[3] cursor-pointer rounded-lg border border-slate-300 border-b-[4px] border-b-slate-400 bg-gradient-to-b from-white to-slate-100 px-2 text-xs font-bold text-slate-700 shadow-sm transition hover:border-orange-300 hover:from-orange-50 hover:to-white active:translate-y-[2px] active:border-b-2"
            >
              Space
            </button>
            <button
              type="button"
              onClick={() => onInsert("\n")}
              className="min-h-12 flex-1 cursor-pointer rounded-lg border border-slate-400 border-b-[4px] border-b-slate-500 bg-gradient-to-b from-slate-200 to-slate-300 px-2 text-xs font-bold text-slate-800 shadow-sm transition hover:from-slate-300 hover:to-slate-200 active:translate-y-[2px] active:border-b-2"
            >
              Enter ↵
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Resize virtual keyboard"
        title="Drag to resize keyboard"
        onPointerDown={startResizing}
        onPointerMove={resizeKeyboard}
        onPointerUp={stopResizing}
        onPointerCancel={stopResizing}
        className="absolute bottom-0 right-0 z-10 flex h-7 w-7 cursor-nwse-resize touch-none items-center justify-center rounded-tl-lg bg-slate-300/90 text-slate-600 transition hover:bg-orange-200 hover:text-orange-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-600"
      >
        <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2v12H2M14 8 8 14M14 2 2 14" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </section>
  );
}
