import { describe, expect, it } from "vitest";

import { marathi } from "@/data/language/marathi/language";

describe("Marathi learning curriculum", () => {
  it("keeps Marathi core vowels, extended vowels, consonants, signs, marks, and numerals distinct", () => {
    expect(marathi.alphabet.vowels.map(({ letter }) => letter)).toContain("ॲ");
    expect(marathi.alphabet.vowels.map(({ letter }) => letter)).toContain("ऑ");
    expect(marathi.alphabet.vowels.map(({ letter }) => letter)).not.toContain("ॠ");
    expect(marathi.alphabet.vowels.map(({ letter }) => letter)).not.toContain("अं");
    expect(marathi.alphabet.consonants.map(({ letter }) => letter)).toContain("ळ");
    expect(marathi.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ॅ");
    expect(marathi.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ि");
    expect(marathi.alphabet.symbols?.map(({ letter }) => letter)).toContain("ं");
    expect(marathi.alphabet.numerals).toHaveLength(10);
  });

  it("provides the complete Marathi learning curriculum", () => {
    const curriculum = marathi.learn.curriculum;

    expect(curriculum?.history?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.writingSystem?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.consonantClassification?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.vowelSigns?.bullets).toContain("क + ि → कि");
    expect(curriculum?.numerals?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.specialCharacters?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.examples?.items.length).toBeGreaterThan(0);
    expect(curriculum?.typingGuide?.examples.length).toBeGreaterThan(0);
    expect(curriculum?.commonMistakes?.items.length).toBeGreaterThan(0);
  });

  it("links curriculum sections only to resources that exist", () => {
    const curriculum = marathi.learn.curriculum;
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

  it("describes transliteration accurately and does not promise English translation", () => {
    const typingFaq = marathi.faq.find(({ question }) => question.includes("paste English text"));

    expect(typingFaq?.answer).toMatch(/does not translate English sentences/i);
    expect(marathi.learn.curriculum?.typingGuide?.paragraphs.join(" ")).toMatch(/transliteration/i);
    expect(marathi.learn.curriculum?.typingGuide?.paragraphs.join(" ")).toMatch(/ISO 15919/i);
  });

  it("documents Marathi-specific distinctions without treating conjuncts as basic letters", () => {
    const content = [
      ...(marathi.learn.curriculum?.consonantClassification?.paragraphs ?? []),
      ...(marathi.learn.curriculum?.vowelSigns?.paragraphs ?? []),
    ].join(" ");

    expect(content).toMatch(/ळ/);
    expect(content).toMatch(/conjuncts/i);
    expect(content).toMatch(/ॲ and ऑ/);
  });
});
