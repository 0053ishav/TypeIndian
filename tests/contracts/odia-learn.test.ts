import { describe, expect, it } from "vitest";

import { odia } from "@/data/language/odia/language";

describe("Odia learning curriculum", () => {
  it("keeps the common vowel inventory separate from specialist extensions", () => {
    expect(odia.alphabet.vowels.map(({ letter }) => letter)).toEqual([
      "ଅ", "ଆ", "ଇ", "ଈ", "ଉ", "ଊ", "ଋ", "ଏ", "ଐ", "ଓ", "ଔ",
    ]);
    expect(odia.alphabet.extensions?.map(({ letter }) => letter)).toContain("ୠ");
    expect(odia.alphabet.extensions?.map(({ letter }) => letter)).toContain("ଵ");
  });

  it("contains the established working consonant inventory, signs, marks, and digits", () => {
    expect(odia.alphabet.consonants).toHaveLength(34);
    expect(odia.alphabet.consonants.map(({ letter }) => letter)).toContain("ଙ");
    expect(odia.alphabet.extensions?.map(({ letter }) => letter)).toContain("କ୍ଷ");
    expect(odia.alphabet.extensions?.map(({ letter }) => letter)).toContain("ଜ୍ଞ");
    expect(odia.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ି");
    expect(odia.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ୌ");
    expect(odia.alphabet.symbols?.map(({ letter }) => letter)).toContain("୍");
    expect(odia.alphabet.symbols?.map(({ letter }) => letter)).toContain("ଂ");
    expect(odia.alphabet.symbols?.map(({ letter }) => letter)).toContain("ଁ");
    expect(odia.alphabet.numerals.map(({ native }) => native)).toEqual([
      "୦", "୧", "୨", "୩", "୪", "୫", "୬", "୭", "୮", "୯",
    ]);
  });

  it("provides all language-specific curriculum sections", () => {
    const curriculum = odia.learn.curriculum;
    expect(curriculum?.research?.length).toBeGreaterThanOrEqual(5);
    expect(curriculum?.history?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.writingSystem?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.consonantClassification?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.vowelSigns?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.numerals?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.specialCharacters?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.examples?.items.length).toBeGreaterThan(0);
    expect(curriculum?.typingGuide?.examples.length).toBeGreaterThan(0);
    expect(curriculum?.commonMistakes?.items.length).toBeGreaterThan(0);
  });

  it("links curriculum sections only to defined research resources", () => {
    const curriculum = odia.learn.curriculum;
    const ids = new Set(curriculum?.research?.map(({ id }) => id));
    [
      curriculum?.history,
      curriculum?.writingSystem,
      curriculum?.consonantClassification,
      curriculum?.vowelSigns,
      curriculum?.numerals,
      curriculum?.specialCharacters,
    ].forEach((section) => {
      section?.resourceIds?.forEach((id) => expect(ids.has(id)).toBe(true));
    });
  });

  it("documents Odia Unicode encoding, inherent vowels, virama, and conjuncts", () => {
    const writing = odia.learn.curriculum?.writingSystem?.paragraphs.join(" ") ?? "";
    expect(writing).toMatch(/U\+0B00–U\+0B7F/);
    expect(writing).toMatch(/inherent vowel/i);
    expect(writing).toMatch(/virama/i);
    expect(writing).toContain("କ୍ଷ");
  });

  it("distinguishes dependent vowel signs from independent vowel letters", () => {
    const content = odia.learn.curriculum?.vowelSigns?.paragraphs.join(" ") ?? "";
    expect(content).toMatch(/dependent vowel signs/i);
    expect(content).toMatch(/atomic encoding/i);
    expect(odia.alphabet.vowels.map(({ letter }) => letter)).not.toContain("ା");
  });

  it("explains transliteration accurately without promising translation or fixed suggestions", () => {
    const guide = odia.learn.curriculum?.typingGuide;
    expect(guide?.paragraphs.join(" ")).toMatch(/transliteration/i);
    expect(guide?.paragraphs.join(" ")).toMatch(/does not promise/i);
    expect(odia.faq.find(({ question }) => question.includes("translation"))?.answer).toMatch(/does not translate/i);
    expect(odia.faq.find(({ question }) => question.includes("accurate"))?.answer).toMatch(/depend on the input/i);
  });

  it("distinguishes anusvara and candrabindu", () => {
    const content = odia.learn.curriculum?.specialCharacters?.paragraphs.join(" ") ?? "";
    expect(content).toMatch(/Anusvara \(ଂ\)/);
    expect(content).toMatch(/candrabindu \(ଁ\)/);
    expect(content).toMatch(/not be taught as interchangeable/i);
  });
});
