import { describe, expect, it } from "vitest";

import { bengali } from "@/data/language/bengali/language";

describe("Bengali learning curriculum", () => {
  it("keeps vowels, consonants, modified letters, signs, marks, and numerals distinct", () => {
    expect(bengali.alphabet.vowels.map(({ letter }) => letter)).toEqual(["অ", "আ", "ই", "ঈ", "উ", "ঊ", "ঋ", "এ", "ঐ", "ও", "ঔ"]);
    expect(bengali.alphabet.consonants).toHaveLength(32);
    expect(bengali.alphabet.extensions?.map(({ letter }) => letter)).toEqual(["ড়", "ঢ়", "য়"]);
    expect(bengali.alphabet.extensions?.map(({ letter }) => letter)).not.toContain("ক্ষ");
    expect(bengali.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ি");
    expect(bengali.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ৌ");
    expect(bengali.alphabet.symbols?.map(({ letter }) => letter)).toContain("ঁ");
    expect(bengali.alphabet.symbols?.map(({ letter }) => letter)).toContain("্");
    expect(bengali.alphabet.numerals.map(({ native }) => native)).toEqual(["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"]);
  });

  it("provides the complete Bengali learning curriculum", () => {
    const curriculum = bengali.learn.curriculum;
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

  it("links curriculum sections only to existing research resources", () => {
    const curriculum = bengali.learn.curriculum;
    const ids = new Set(curriculum?.research?.map(({ id }) => id));
    [curriculum?.history, curriculum?.writingSystem, curriculum?.consonantClassification, curriculum?.vowelSigns, curriculum?.numerals, curriculum?.specialCharacters]
      .forEach((section) => section?.resourceIds?.forEach((id) => expect(ids.has(id)).toBe(true)));
  });

  it("distinguishes Bengali from Assamese while explaining shared script encoding", () => {
    const writing = bengali.learn.curriculum?.writingSystem?.paragraphs.join(" ") ?? "";
    expect(writing).toMatch(/Unicode Bengali block/i);
    expect(writing).toMatch(/Assamese/);
    expect(writing).toMatch(/does not make the languages identical/i);
  });

  it("describes transliteration accurately and does not promise English translation", () => {
    const typingFaq = bengali.faq.find(({ question }) => question.includes("paste English text"));
    expect(typingFaq?.answer).toMatch(/does not translate English sentences/i);
    expect(bengali.learn.curriculum?.typingGuide?.paragraphs.join(" ")).toMatch(/transliteration/i);
    expect(bengali.learn.curriculum?.typingGuide?.paragraphs.join(" ")).toMatch(/Library of Congress/i);
  });

  it("does not treat conjuncts as independent alphabet letters", () => {
    const writing = bengali.learn.curriculum?.writingSystem?.paragraphs.join(" ") ?? "";
    expect(writing).toMatch(/ক্ষ/);
    expect(writing).toMatch(/ক \+ ্ \+ ষ/);
    expect(writing).toMatch(/not a separately encoded basic consonant/i);
  });
});
