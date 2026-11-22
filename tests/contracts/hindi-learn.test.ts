import { describe, expect, it } from "vitest";

import { hindi } from "@/data/language/hindi/language";

describe("Hindi learning curriculum", () => {
  it("keeps the traditional core independent vowels separate from marks", () => {
    expect(hindi.alphabet.vowels.map(({ letter }) => letter)).toEqual([
      "अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ए", "ऐ", "ओ", "औ",
    ]);
    expect(hindi.alphabet.vowels.map(({ letter }) => letter)).not.toContain("अं");
    expect(hindi.alphabet.vowels.map(({ letter }) => letter)).not.toContain("अः");
  });

  it("keeps extended letters, vowel signs, special marks, and numerals in distinct groups", () => {
    expect(hindi.alphabet.extensions?.map(({ letter }) => letter)).toEqual([
      "क़", "ख़", "ग़", "ज़", "ड़", "ढ़", "फ़", "ऍ", "ऑ",
    ]);
    expect(hindi.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ि");
    expect(hindi.alphabet.symbols?.map(({ letter }) => letter)).toContain("ँ");
    expect(hindi.alphabet.numerals).toHaveLength(10);
  });

  it("provides the complete Hindi curriculum modules", () => {
    const curriculum = hindi.learn.curriculum;

    expect(curriculum?.history?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.writingSystem?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.consonantClassification?.bullets).toHaveLength(6);
    expect(curriculum?.vowelSigns?.bullets).toContain("क + ि → कि");
    expect(curriculum?.numerals?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.specialCharacters?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.examples?.items.length).toBeGreaterThan(0);
    expect(curriculum?.typingGuide?.examples).toHaveLength(10);
    expect(curriculum?.commonMistakes?.items.length).toBeGreaterThan(0);
  });

  it("uses the live-verified Hindi typing examples without claiming translation", () => {
    const examples = hindi.learn.curriculum?.typingGuide?.examples ?? [];

    expect(examples).toContainEqual({
      input: "namaste",
      output: "नमस्ते",
      explanation: "A common greeting.",
    });
    expect(examples).toContainEqual({
      input: "namaste dosto",
      output: "नमस्ते दोस्तों",
      explanation: "Hello, friends.",
    });
    expect(
      hindi.learn.faq.some(
        ({ question, answer }) =>
          question.includes("paste English text") && /does not translate English prose/i.test(answer),
      ),
    ).toBe(true);
  });
});
