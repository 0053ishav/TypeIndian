"use client";

import { useEffect, useMemo, useState } from "react";

type ScriptCharacter = {
  letter: string;
  sound: string;
};

type Props = {
  letters: ScriptCharacter[];
  nativeName: string;
  script: string;
};

export default function ScriptPreview({
  letters,
  nativeName,
  script,
}: Props) {
  const chunks = useMemo(() => {
    const size = 6;

    const result: ScriptCharacter[][] = [];

    for (let i = 0; i < letters.length; i += size) {
      result.push(letters.slice(i, i + size));
    }

    return result;
  }, [letters]);

  const [activeChunk, setActiveChunk] = useState(0);

  useEffect(() => {
    if (chunks.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveChunk((current) => (current + 1) % chunks.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, [chunks]);

  const visibleLetters = chunks[activeChunk] ?? [];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-(--color-border) surface-glass p-6">
      {/* Decorative glow */}
      <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-radial-orange opacity-20 pointer-events-none" />

      <div className="relative">
        {/* Script metadata */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-(--color-text-muted)">
              {script} script
            </p>

            <p className="mt-1 text-sm font-semibold text-(--color-text-heading)">
              English → {nativeName}
            </p>
          </div>

          <div className="h-9 w-9 rounded-full border border-(--color-border) flex items-center justify-center text-sm text-(--color-text-muted)">
            Aa
          </div>
        </div>

        {/* Animated characters */}
        <div className="min-h-24 flex items-center justify-center gap-2 sm:gap-4">
          {visibleLetters.map(({ letter }, index) => (
            <span
              key={`${letter}-${activeChunk}`}
              className="
                inline-flex
                h-12
                min-w-10
                items-center
                justify-center
                rounded-xl
                surface-panel-muted
                border
                border-(--color-border)
                px-2
                text-2xl
                sm:text-3xl
                font-bold
                text-(--color-text-heading)
                animate-pulse
                transition-transform
                duration-300
                hover:-translate-y-2
                hover:scale-110
              "
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="mt-6 flex justify-center gap-1.5">
          {chunks.slice(0, Math.min(chunks.length, 8)).map((_, index) => (
            <span
              key={index}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === activeChunk
                  ? "w-6 bg-(--color-primary)"
                  : "w-1.5 bg-(--color-border)"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}