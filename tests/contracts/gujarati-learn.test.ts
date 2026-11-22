import { describe, expect, it } from "vitest";

import { gujarati } from "@/data/language/gujarati/language";

describe("Gujarati learning curriculum", () => {
  it("keeps core vowels, consonants, extensions, vowel signs, symbols, and digits distinct", () => {
    expect(gujarati.alphabet.vowels.map(({ letter }) => letter)).toEqual([
      "અ", "આ", "ઇ", "ઈ", "ઉ", "ઊ", "ઋ", "એ", "ઐ", "ઓ", "ઔ",
    ]);
    expect(gujarati.alphabet.consonants).toHaveLength(34);
    expect(gujarati.alphabet.consonants.map(({ letter }) => letter)).toContain("ળ");
    expect(gujarati.alphabet.consonants.map(({ letter }) => letter)).not.toContain("ક્ષ");
    expect(gujarati.alphabet.consonants.map(({ letter }) => letter)).not.toContain("જ્ઞ");
    expect(gujarati.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("િ");
    expect(gujarati.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ૅ");
    expect(gujarati.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ૉ");
    expect(gujarati.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ૄ");
    expect(gujarati.alphabet.symbols?.map(({ letter }) => letter)).toContain("્");
    expect(gujarati.alphabet.symbols?.map(({ letter }) => letter)).toContain("ં");
    expect(gujarati.alphabet.symbols?.map(({ letter }) => letter)).toContain("ઃ");
    expect(gujarati.alphabet.numerals.map(({ native }) => native)).toEqual([
      "૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯",
    ]);
  });

  it("provides a complete Gujarati learning curriculum", () => {
    const curriculum = gujarati.learn.curriculum;
    expect(curriculum?.history?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.writingSystem?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.consonantClassification?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.vowelSigns?.bullets).toContain("ક + િ → કિ");
    expect(curriculum?.numerals?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.specialCharacters?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.examples?.items.length).toBeGreaterThan(0);
    expect(curriculum?.typingGuide?.examples.length).toBeGreaterThan(0);
    expect(curriculum?.commonMistakes?.items.length).toBeGreaterThan(0);
  });

  it("links curriculum sections only to existing research resources", () => {
    const curriculum = gujarati.learn.curriculum;
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

  it("explains the inherent vowel, no headline, and Gujarati-specific shaping", () => {
    const writing = gujarati.learn.curriculum?.writingSystem?.paragraphs.join(" ") ?? "";
    expect(writing).toMatch(/inherent vowel/i);
    expect(writing).toMatch(/headline/i);
    expect(writing).toMatch(/left/i);
    expect(writing).toMatch(/virama/i);
  });

  it("describes transliteration accurately and does not promise English translation", () => {
    const typingFaq = gujarati.faq.find(({ question }) => question.includes("paste English text"));
    expect(typingFaq?.answer).toMatch(/does not translate English/i);
    expect(gujarati.learn.curriculum?.typingGuide?.paragraphs.join(" ")).toMatch(/transliteration/i);
    expect(gujarati.learn.curriculum?.typingGuide?.paragraphs.join(" ")).toMatch(/Library of Congress/i);
  });

  it("does not classify conjuncts as independent basic consonants", () => {
    const writing = gujarati.learn.curriculum?.writingSystem?.paragraphs.join(" ") ?? "";
    expect(writing).toMatch(/ક્ષ/);
    expect(writing).toMatch(/consonants and a virama/i);
    expect(gujarati.alphabet.consonants.map(({ letter }) => letter)).not.toContain("જ્ઞ");
  });
});
