"use client";

import { useMemo, useState } from "react";
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

export default function VirtualKeyboard({
  language,
  onInsert,
  onBackspace,
}: {
  language: Language;
  onInsert: (value: string) => void;
  onBackspace: () => void;
}) {
  const layout = useMemo(() => getVirtualKeyboardLayout(language), [language]);
  const [layer, setLayer] = useState<KeyboardLayer>("base");

  const changeLayer = (next: KeyboardLayer) => setLayer(next);

  return (
    <section
      className="mt-4 rounded-xl border border-[--color-border] bg-[--color-surface] p-3 sm:p-4"
      aria-label={`${language.name} on-screen keyboard`}
      dir="ltr"
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <h3 className="font-semibold text-[--color-text-heading]">
            {language.name} keyboard
          </h3>
          <p className="text-xs text-[--color-text-muted]">
            {layout.name} · {layout.standard}
          </p>
        </div>
        <div className="flex flex-wrap gap-1" role="group" aria-label="Keyboard layer">
          {layout.layers.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={layer === item}
              onClick={() => changeLayer(item)}
              className={`min-h-10 rounded-md border px-2 text-xs font-medium ${layer === item ? "border-blue-600 bg-blue-50 text-blue-800" : "border-[--color-border] bg-white text-[--color-text-body]"}`}
            >
              {LAYER_LABELS[item]}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto pb-1" role="group" aria-label="Virtual typing keys">
        <div className="min-w-[464px] space-y-1.5 sm:min-w-0">
        {layout.rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-1">
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
                  className="flex min-h-11 min-w-[32px] flex-1 flex-col items-center justify-center rounded-md border border-[--color-border] bg-white px-1 py-1 text-center shadow-sm disabled:cursor-default disabled:opacity-25 active:translate-y-px sm:min-h-12"
                >
                  <span className="text-[9px] leading-none text-[--color-text-muted]">
                    {key.label.toUpperCase()}
                  </span>
                  <span
                    dir={language.direction}
                    className="mt-0.5 min-h-5 text-base font-semibold leading-tight text-[--color-text-heading] sm:text-lg"
                  >
                    {output ?? " "}
                  </span>
                </button>
              );
            })}
          </div>
        ))}

        {layout.specialKeys && (
          <div
            className="flex flex-wrap items-center gap-1 pt-2"
            role="group"
            aria-label={layout.specialKeys.label}
          >
            <span className="mr-1 text-xs font-medium text-[--color-text-muted]">
              {layout.specialKeys.label}
            </span>
            {layout.specialKeys.keys.map((key) => (
              <button
                key={key.label}
                type="button"
                onClick={() => onInsert(key.output)}
                aria-label={`${key.label} chillu`}
                className="min-h-11 min-w-11 rounded-md border border-[--color-border] bg-white px-3 text-base font-semibold text-[--color-text-heading] active:translate-y-px"
              >
                {key.label}
              </button>
            ))}
          </div>
        )}

        <div className="flex gap-1 pt-1">
          <button
            type="button"
            onClick={onBackspace}
            className="min-h-11 flex-1 rounded-md border border-[--color-border] bg-slate-100 px-2 text-xs font-semibold text-[--color-text-body] active:translate-y-px"
          >
            Backspace
          </button>
          <button
            type="button"
            onClick={() => onInsert(" ")}
            className="min-h-11 flex-[3] rounded-md border border-[--color-border] bg-white px-2 text-xs font-semibold text-[--color-text-body] active:translate-y-px"
          >
            Space
          </button>
          <button
            type="button"
            onClick={() => onInsert("\n")}
            className="min-h-11 flex-1 rounded-md border border-[--color-border] bg-slate-100 px-2 text-xs font-semibold text-[--color-text-body] active:translate-y-px"
          >
            Enter
          </button>
        </div>
        </div>
      </div>
    </section>
  );
}
