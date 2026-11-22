import { describe, expect, it } from "vitest";

import { telugu } from "@/data/language/telugu/language";

describe("Telugu learning curriculum", () => {
  it("keeps the common 14-vowel inventory distinct from extended Sanskrit forms", () => {
    expect(telugu.alphabet.vowels.map(({ letter }) => letter)).toEqual([
      "అ", "ఆ", "ఇ", "ఈ", "ఉ", "ఊ", "ఋ", "ఌ", "ఎ", "ఏ", "ఐ", "ఒ", "ఓ", "ఔ",
    ]);
    expect(telugu.alphabet.extensions?.map(({ letter }) => letter)).toContain("ౠ");
    expect(telugu.alphabet.extensions?.map(({ letter }) => letter)).toContain("ౡ");
  });

  it("keeps the 35-letter consonant chart and conjunct sequences distinct", () => {
    expect(telugu.alphabet.consonants).toHaveLength(35);
    expect(telugu.alphabet.consonants.map(({ letter }) => letter)).toContain("ఱ");
    expect(telugu.alphabet.consonants.map(({ letter }) => letter)).toContain("ళ");
    expect(telugu.alphabet.consonants.map(({ letter }) => letter)).not.toContain("క్ష");
    expect(telugu.alphabet.extensions?.map(({ letter }) => letter)).toContain("క్ష");
    expect(telugu.alphabet.extensions?.map(({ letter }) => letter)).toContain("జ్ఞ");
  });

  it("includes Telugu vowel signs, special signs, and native digits", () => {
    expect(telugu.alphabet.vowelSigns).toHaveLength(15);
    expect(telugu.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ై");
    expect(telugu.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ృ");
    expect(telugu.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ౢ");
    expect(telugu.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ౣ");
    expect(telugu.alphabet.symbols?.map(({ letter }) => letter)).toContain("్");
    expect(telugu.alphabet.symbols?.map(({ letter }) => letter)).toContain("ం");
    expect(telugu.alphabet.symbols?.map(({ letter }) => letter)).toContain("ః");
    expect(telugu.alphabet.symbols?.map(({ letter }) => letter)).toContain("ఁ");
    expect(telugu.alphabet.numerals.map(({ native }) => native)).toEqual([
      "౦", "౧", "౨", "౩", "౪", "౫", "౬", "౭", "౮", "౯",
    ]);
  });

  it("provides a complete curriculum with researched sources", () => {
    const curriculum = telugu.learn.curriculum;
    expect(curriculum?.research?.length).toBeGreaterThanOrEqual(6);
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

  it("links every curriculum resource ID to a real research reference", () => {
    const curriculum = telugu.learn.curriculum;
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

  it("documents the Telugu Unicode block, inherent vowel, and virama", () => {
    const writing = telugu.learn.curriculum?.writingSystem?.paragraphs.join(" ") ?? "";
    expect(writing).toMatch(/U\+0C00–U\+0C7F/);
    expect(writing).toMatch(/inherent vowel/i);
    expect(writing).toMatch(/virama/i);
    expect(writing).toContain("తలకట్టు");
  });

  it("explains atomic vowel encoding and logical character order", () => {
    const content = telugu.learn.curriculum?.vowelSigns?.paragraphs.join(" ") ?? "";
    expect(content).toMatch(/Unicode encodes/i);
    expect(content).toMatch(/logical Unicode order/i);
    expect(content).toContain("ై");
  });

  it("distinguishes transliteration from translation and avoids fixed suggestion promises", () => {
    const guide = telugu.learn.curriculum?.typingGuide?.paragraphs.join(" ") ?? "";
    expect(guide).toMatch(/transliteration/i);
    expect(guide).toMatch(/do not guarantee/i);
    expect(guide).toMatch(/ISO 15919/i);
    expect(telugu.faq.find(({ question }) => question.includes("translation"))?.answer).toMatch(/does not translate/i);
  });
});
