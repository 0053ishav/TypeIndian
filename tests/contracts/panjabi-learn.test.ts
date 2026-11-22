import { describe, expect, it } from "vitest";

import { panjabi } from "@/data/language/panjabi/language";

describe("Panjabi learning curriculum", () => {
  it("keeps independent vowels, consonants, extensions, signs, symbols, and numerals separate", () => {
    expect(panjabi.alphabet.vowels.map(({ letter }) => letter)).toEqual([
      "ਅ", "ਆ", "ਇ", "ਈ", "ਉ", "ਊ", "ਏ", "ਐ", "ਓ", "ਔ",
    ]);
    expect(panjabi.alphabet.consonants.map(({ letter }) => letter)).toContain("ੜ");
    expect(panjabi.alphabet.extensions?.map(({ letter }) => letter)).toContain("ਸ਼");
    expect(panjabi.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ਿ");
    expect(panjabi.alphabet.symbols?.map(({ letter }) => letter)).toContain("ੱ");
    expect(panjabi.alphabet.numerals).toHaveLength(10);
  });

  it("provides the full Panjabi curriculum", () => {
    const curriculum = panjabi.learn.curriculum;

    expect(curriculum?.history?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.writingSystem?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.consonantClassification?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.vowelSigns?.bullets).toContain("ਕ + ਿ → ਕਿ");
    expect(curriculum?.numerals?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.specialCharacters?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.examples?.items.length).toBeGreaterThan(0);
    expect(curriculum?.typingGuide?.examples.length).toBeGreaterThan(0);
    expect(curriculum?.commonMistakes?.items.length).toBeGreaterThan(0);
  });

  it("links every curriculum resource ID to an existing research source", () => {
    const curriculum = panjabi.learn.curriculum;
    const resourceIds = new Set(curriculum?.research?.map(({ id }) => id));

    [
      curriculum?.history,
      curriculum?.writingSystem,
      curriculum?.consonantClassification,
      curriculum?.vowelSigns,
      curriculum?.numerals,
      curriculum?.specialCharacters,
    ].forEach((section) => {
      section?.resourceIds?.forEach((id) => expect(resourceIds.has(id)).toBe(true));
    });
  });

  it("documents tone without claiming Gurmukhi has a dedicated tone mark", () => {
    const content = [
      ...(panjabi.learn.curriculum?.consonantClassification?.paragraphs ?? []),
      ...(panjabi.learn.curriculum?.writingSystem?.paragraphs ?? []),
    ].join(" ");

    expect(content).toMatch(/tonal language/i);
    expect(content).toMatch(/no dedicated tone diacritic/i);
    expect(panjabi.learn.faq.some(({ answer }) => /one of the relatively few Indo-Aryan languages with lexical tone/i.test(answer))).toBe(true);
  });

  it("keeps transliteration examples distinct from translation", () => {
    const examples = panjabi.learn.curriculum?.typingGuide?.examples ?? [];

    expect(examples).toContainEqual({
      input: "sat sri akaal",
      output: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ",
      explanation: "A common greeting; spacing and word segmentation matter.",
    });
    expect(panjabi.learn.curriculum?.typingGuide?.paragraphs.join(" ")).toMatch(/does not translate English meaning/i);
  });
});
