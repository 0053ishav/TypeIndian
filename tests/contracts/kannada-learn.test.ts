import { describe, expect, it } from "vitest";

import { kannada } from "@/data/language/kannada/language";

describe("Kannada learning curriculum", () => {
  it("keeps the modern vowel and consonant inventory distinct from historical forms and conjuncts", () => {
    expect(kannada.alphabet.vowels.map(({ letter }) => letter)).toEqual([
      "ಅ", "ಆ", "ಇ", "ಈ", "ಉ", "ಊ", "ಋ", "ಎ", "ಏ", "ಐ", "ಒ", "ಓ", "ಔ",
    ]);
    expect(kannada.alphabet.consonants).toHaveLength(34);
    expect(kannada.alphabet.consonants.map(({ letter }) => letter)).toContain("ಳ");
    expect(kannada.alphabet.consonants.map(({ letter }) => letter)).not.toContain("ಕ್ಷ");
    expect(kannada.alphabet.consonants.map(({ letter }) => letter)).not.toContain("ಜ್ಞ");
    expect(kannada.alphabet.extensions?.map(({ letter }) => letter)).toContain("ಌ");
    expect(kannada.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ಿ");
    expect(kannada.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ೌ");
    expect(kannada.alphabet.symbols?.map(({ letter }) => letter)).toContain("್");
    expect(kannada.alphabet.symbols?.map(({ letter }) => letter)).toContain("ಂ");
    expect(kannada.alphabet.symbols?.map(({ letter }) => letter)).toContain("ಃ");
    expect(kannada.alphabet.numerals.map(({ native }) => native)).toEqual([
      "೦", "೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯",
    ]);
  });

  it("provides the complete Kannada learning curriculum", () => {
    const curriculum = kannada.learn.curriculum;
    expect(curriculum?.history?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.writingSystem?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.consonantClassification?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.vowelSigns?.bullets).toContain("ಕ + ಿ → ಕಿ");
    expect(curriculum?.numerals?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.specialCharacters?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.examples?.items.length).toBeGreaterThan(0);
    expect(curriculum?.typingGuide?.examples.length).toBeGreaterThan(0);
    expect(curriculum?.commonMistakes?.items.length).toBeGreaterThan(0);
  });

  it("links curriculum sections only to existing research resources", () => {
    const curriculum = kannada.learn.curriculum;
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

  it("explains the inherent vowel, virama, Unicode block, and conjuncts", () => {
    const writing = kannada.learn.curriculum?.writingSystem?.paragraphs.join(" ") ?? "";
    expect(writing).toMatch(/inherent vowel/i);
    expect(writing).toMatch(/virama/i);
    expect(writing).toMatch(/U\+0C80–U\+0CFF/);
    expect(writing).toMatch(/ಕ್ಷ/);
    expect(writing).toMatch(/ಜ್ಞ/);
  });

  it("describes transliteration accurately and does not promise English translation", () => {
    const typingFaq = kannada.faq.find(({ question }) => question.includes("paste English text"));
    expect(typingFaq?.answer).toMatch(/does not translate English sentences/i);
    expect(kannada.learn.curriculum?.typingGuide?.paragraphs.join(" ")).toMatch(/transliteration/i);
    expect(kannada.learn.curriculum?.typingGuide?.paragraphs.join(" ")).toMatch(/ISO 15919/i);
  });

  it("does not classify conjuncts as independent basic consonants", () => {
    const writing = kannada.learn.curriculum?.writingSystem?.paragraphs.join(" ") ?? "";
    expect(writing).toMatch(/ಕ್ಷ/);
    expect(writing).toMatch(/ಜ್ಞ/);
    expect(writing).toMatch(/not independent basic consonant letters/i);
    expect(kannada.alphabet.consonants.map(({ letter }) => letter)).not.toContain("ಕ್ಷ");
  });
});
