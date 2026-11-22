import { describe, expect, it } from "vitest";

import { malayalam } from "@/data/language/malayalam/language";

describe("Malayalam learning curriculum", () => {
  it("keeps core vowels and consonants distinct from specialist letters and conjuncts", () => {
    expect(malayalam.alphabet.vowels.map(({ letter }) => letter)).toEqual([
      "അ", "ആ", "ഇ", "ഈ", "ഉ", "ഊ", "ഋ", "എ", "ഏ", "ഐ", "ഒ", "ഓ", "ഔ",
    ]);
    expect(malayalam.alphabet.consonants).toHaveLength(36);
    expect(malayalam.alphabet.consonants.map(({ letter }) => letter)).toContain("ഴ");
    expect(malayalam.alphabet.consonants.map(({ letter }) => letter)).not.toContain("ക്ഷ");
    expect(malayalam.alphabet.extensions?.map(({ letter }) => letter)).toContain("ഌ");
    expect(malayalam.alphabet.extensions?.map(({ letter }) => letter)).toContain("ൺ");
    expect(malayalam.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ി");
    expect(malayalam.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ൗ");
    expect(malayalam.alphabet.symbols?.map(({ letter }) => letter)).toContain("്");
    expect(malayalam.alphabet.symbols?.map(({ letter }) => letter)).toContain("ം");
    expect(malayalam.alphabet.symbols?.map(({ letter }) => letter)).toContain("ഃ");
    expect(malayalam.alphabet.numerals.map(({ native }) => native)).toEqual([
      "൦", "൧", "൨", "൩", "൪", "൫", "൬", "൭", "൮", "൯",
    ]);
  });

  it("provides the complete Malayalam learning curriculum", () => {
    const curriculum = malayalam.learn.curriculum;
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

  it("links curriculum sections only to existing research resources", () => {
    const curriculum = malayalam.learn.curriculum;
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

  it("explains the Unicode block, inherent vowel, candrakkala, and conjuncts", () => {
    const writing = malayalam.learn.curriculum?.writingSystem?.paragraphs.join(" ") ?? "";
    expect(writing).toMatch(/inherent vowel/i);
    expect(writing).toMatch(/candrakkala/i);
    expect(writing).toMatch(/U\+0D00–U\+0D7F/);
    expect(writing).toMatch(/ക്ഷ/);
    expect(writing).toMatch(/ജ്ഞ/);
  });

  it("describes transliteration accurately and does not promise English translation", () => {
    const typingFaq = malayalam.faq.find(({ question }) => question.includes("paste English text"));
    expect(typingFaq?.answer).toMatch(/does not translate English sentences/i);
    expect(malayalam.learn.curriculum?.typingGuide?.paragraphs.join(" ")).toMatch(/transliteration/i);
    expect(malayalam.learn.curriculum?.typingGuide?.paragraphs.join(" ")).toMatch(/ISO 15919/i);
  });

  it("explains chillu forms separately from ordinary consonants and conjuncts", () => {
    const special = malayalam.learn.curriculum?.specialCharacters?.paragraphs.join(" ") ?? "";
    expect(special).toMatch(/chillu/i);
    expect(special).toMatch(/Unicode/i);
    const writing = malayalam.learn.curriculum?.writingSystem?.paragraphs.join(" ") ?? "";
    expect(writing).toMatch(/not independent basic consonant letters/i);
  });
});
