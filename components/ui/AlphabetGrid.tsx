"use client";

import type { Language } from "@/types/language";

interface Props {
  language: Language;

  interactive?: boolean;

  compact?: boolean;

  onInsert?: (char: string) => void;
}

export default function AlphabetGrid({
  language,
  interactive = false,
  compact = false,
  onInsert,
}: Props) {
  const { alphabet, labels } = language;

  const renderCharacters = (
    title: string,
    items?: { letter: string; sound: string }[]
  ) => {
    if (!items?.length) return null;

    return (
      <section className={compact ? "mb-6" : "mb-10"}>
        <h3 className={`font-semibold mb-3 ${compact ? "text-lg" : "text-xl"}`}>{title}</h3>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 sm:gap-3">
          {items.map(({ letter, sound }) => (
            <button
              key={letter}
              dir={language.direction}
              type="button"
              disabled={!interactive}
              onClick={() => onInsert?.(letter)}
              className={`card text-center hover-lift disabled:cursor-default ${compact ? "min-h-11 p-2 sm:p-3" : "p-4"}`}
            >
              <div className={`font-bold ${compact ? "text-xl sm:text-2xl" : "text-2xl"}`}>{letter}</div>

              <div className="text-xs text-(--color-text-muted) mt-1">
                {sound}
              </div>
            </button>
          ))}
        </div>
      </section>
    );
  };

  return (
    <section className={`mx-auto ${compact ? "mt-4 max-w-full" : "mt-24 max-w-5xl"}`}>
      <h2 className={`font-bold text-(--color-text-heading) mb-3 ${compact ? "text-xl" : "text-3xl"}`}>
        {labels.alphabet.title}
      </h2>

      <p className={`text-(--color-text-body) mb-6 max-w-3xl ${compact ? "text-sm" : ""}`}>
        {labels.alphabet.description}
      </p>

      {renderCharacters(labels.alphabet.vowels, alphabet.vowels)}

      {renderCharacters(labels.alphabet.consonants, alphabet.consonants)}

      {alphabet.extensions &&
        renderCharacters(
          labels.alphabet.extensions ?? "",
          alphabet.extensions
        )}

      {alphabet.vowelSigns &&
        renderCharacters(
          labels.alphabet.vowelSigns ?? "",
          alphabet.vowelSigns
        )}

      {alphabet.symbols &&
        renderCharacters(
          labels.alphabet.symbols ?? "",
          alphabet.symbols
        )}

      <section>
        <h3 className={`font-semibold mb-3 ${compact ? "text-lg" : "text-xl"}`}>
          {labels.alphabet.numerals}
        </h3>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {alphabet.numerals.map(({ latin, native }) => (
            <button
              key={latin}
              type="button"
              dir={language.direction}
              disabled={!interactive}
              onClick={() => onInsert?.(native)}
              className={`card text-center hover-lift disabled:cursor-default ${compact ? "min-h-11 p-2 sm:p-3" : "p-4"}`}
            >
              <div className={`font-bold ${compact ? "text-xl sm:text-2xl" : "text-2xl"}`}>{native}</div>

              <div className="text-xs text-(--color-text-muted) mt-1">
                {latin}
              </div>
            </button>
          ))}
        </div>
      </section>
    </section>
  );
}