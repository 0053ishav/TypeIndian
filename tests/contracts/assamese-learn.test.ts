import { describe, expect, it } from "vitest";

import { assamese } from "@/data/language/assamese/language";

describe("Assamese learning curriculum", () => {
  it("keeps independent vowels, consonants, modified letters, signs, symbols, and numerals distinct", () => {
    expect(assamese.alphabet.vowels.map(({ letter }) => letter)).toEqual([
      "অ", "আ", "ই", "ঈ", "উ", "ঊ", "ঋ", "এ", "ঐ", "ও", "ঔ",
    ]);
    expect(assamese.alphabet.consonants.map(({ letter }) => letter)).toContain("ৰ");
    expect(assamese.alphabet.consonants.map(({ letter }) => letter)).toContain("ৱ");
    expect(assamese.alphabet.extensions?.map(({ letter }) => letter)).toEqual(["ড়", "ঢ়", "য়"]);
    expect(assamese.alphabet.extensions?.map(({ letter }) => letter)).not.toContain("ক্ষ");
    expect(assamese.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ি");
    expect(assamese.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ৌ");
    expect(assamese.alphabet.symbols?.map(({ letter }) => letter)).toContain("ৎ");
    expect(assamese.alphabet.symbols?.map(({ letter }) => letter)).toContain("্");
    expect(assamese.alphabet.numerals.map(({ native }) => native)).toEqual([
      "০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯",
    ]);
  });

  it("provides the complete Assamese learning curriculum", () => {
    const curriculum = assamese.learn.curriculum;

    expect(curriculum?.history?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.writingSystem?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.consonantClassification?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.vowelSigns?.bullets).toContain("ক + ি → কি");
    expect(curriculum?.numerals?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.specialCharacters?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.examples?.items.length).toBeGreaterThan(0);
    expect(curriculum?.typingGuide?.examples.length).toBeGreaterThan(0);
    expect(curriculum?.commonMistakes?.items.length).toBeGreaterThan(0);
  });

  it("links curriculum sections only to resources that exist", () => {
    const curriculum = assamese.learn.curriculum;
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

  it("explains the shared Unicode block without conflating Assamese and Bangla", () => {
    const writing = assamese.learn.curriculum?.writingSystem?.paragraphs.join(" ") ?? "";

    expect(writing).toMatch(/U\+0980–U\+09FF/);
    expect(writing).toMatch(/ৰ/);
    expect(writing).toMatch(/ৱ/);
    expect(writing).toMatch(/same language/i);
  });

  it("describes transliteration accurately and does not promise English translation", () => {
    const typingFaq = assamese.faq.find(({ question }) => question.includes("paste English text"));

    expect(typingFaq?.answer).toMatch(/does not translate English sentences/i);
    expect(assamese.learn.curriculum?.typingGuide?.paragraphs.join(" ")).toMatch(/transliteration/i);
    expect(assamese.learn.curriculum?.typingGuide?.paragraphs.join(" ")).toMatch(/Library of Congress/i);
  });

  it("does not treat the conjunct kssa as a separately encoded letter", () => {
    const writing = assamese.learn.curriculum?.writingSystem?.paragraphs.join(" ") ?? "";

    expect(writing).toMatch(/ক্ষ/);
    expect(writing).toMatch(/ক \+ ্ \+ ষ/);
    expect(writing).toMatch(/rather than a separately encoded independent consonant/i);
  });
});
