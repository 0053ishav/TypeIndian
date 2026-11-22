import { describe, expect, it } from "vitest";

import { tamil } from "@/data/language/tamil/language";

describe("Tamil learning curriculum", () => {
  it("keeps the 12 uyir vowels and 18 native mei consonants distinct", () => {
    expect(tamil.alphabet.vowels.map(({ letter }) => letter)).toEqual([
      "அ", "ஆ", "இ", "ஈ", "உ", "ஊ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "ஔ",
    ]);
    expect(tamil.alphabet.consonants).toHaveLength(18);
    expect(tamil.alphabet.consonants.map(({ letter }) => letter)).toContain("ழ");
    expect(tamil.alphabet.consonants.map(({ letter }) => letter)).toContain("ற");
    expect(tamil.alphabet.consonants.map(({ letter }) => letter)).toContain("ன");
  });

  it("includes dependent vowel signs, aytham, pulli, Grantha letters, and digits", () => {
    expect(tamil.alphabet.vowelSigns).toHaveLength(11);
    expect(tamil.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ெ");
    expect(tamil.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ை");
    expect(tamil.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ௌ");
    expect(tamil.alphabet.symbols?.map(({ letter }) => letter)).toContain("்");
    expect(tamil.alphabet.symbols?.map(({ letter }) => letter)).toContain("ஃ");
    expect(tamil.alphabet.extensions?.map(({ letter }) => letter)).toContain("ஜ");
    expect(tamil.alphabet.extensions?.map(({ letter }) => letter)).toContain("ஷ");
    expect(tamil.alphabet.numerals.map(({ native }) => native)).toEqual([
      "௦", "௧", "௨", "௩", "௪", "௫", "௬", "௭", "௮", "௯",
    ]);
  });

  it("provides all researched curriculum sections", () => {
    const curriculum = tamil.learn.curriculum;
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

  it("links curriculum sections only to existing research references", () => {
    const curriculum = tamil.learn.curriculum;
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

  it("documents Tamil Unicode block, inherent vowel, and pulli", () => {
    const writing = tamil.learn.curriculum?.writingSystem?.paragraphs.join(" ") ?? "";
    expect(writing).toMatch(/U\+0B80–U\+0BFF/);
    expect(writing).toMatch(/inherent vowel/i);
    expect(writing).toMatch(/pulli/i);
    expect(writing).toContain("க்ஷ");
  });

  it("explains Tamil vowel sign rendering and logical Unicode order", () => {
    const content = tamil.learn.curriculum?.vowelSigns?.paragraphs.join(" ") ?? "";
    expect(content).toMatch(/logical Unicode order/i);
    expect(content).toMatch(/render to the left/i);
    expect(content).toContain("ௌ");
  });

  it("distinguishes Tamil native consonants from Grantha extensions", () => {
    const content = tamil.learn.curriculum?.consonantClassification?.paragraphs.join(" ") ?? "";
    expect(content).toMatch(/18 native consonant/i);
    expect(content).toMatch(/Grantha letters/i);
    expect(content).toMatch(/does not have separate native letters for aspirated consonants/i);
    expect(tamil.alphabet.consonants.map(({ letter }) => letter)).not.toContain("ஷ");
  });

  it("explains transliteration and Tamil diglossia without promising fixed suggestions", () => {
    const guide = tamil.learn.curriculum?.typingGuide?.paragraphs.join(" ") ?? "";
    expect(guide).toMatch(/transliteration/i);
    expect(guide).toMatch(/do not guarantee/i);
    expect(guide).toMatch(/formal written and colloquial spoken/i);
    expect(tamil.faq.find(({ question }) => question.includes("translation"))?.answer).toMatch(/does not translate/i);
  });

  it("treats aytham as a Tamil-specific letter and identifies conventional ligatures", () => {
    const content = tamil.learn.curriculum?.specialCharacters?.paragraphs.join(" ") ?? "";
    expect(content).toMatch(/Aytham \(ஃ\)/);
    expect(content).toMatch(/not be taught as simply the Sanskrit visarga/i);
    expect(content).toContain("க்ஷ");
    expect(content).toContain("ஸ்ரீ");
  });
});
