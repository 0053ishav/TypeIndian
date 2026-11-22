import { describe, expect, it } from "vitest";

import { urdu } from "@/data/language/urdu/language";

describe("Urdu learning curriculum", () => {
  it("models Urdu as right-to-left Arabic-script text with Nastaliq as a style", () => {
    expect(urdu.direction).toBe("rtl");
    expect(urdu.script).toMatch(/Perso-Arabic/);
    const writing = urdu.learn.curriculum?.writingSystem?.paragraphs.join(" ") ?? "";
    expect(writing).toMatch(/right to left/i);
    expect(writing).toMatch(/Nastaliq/i);
    expect(writing).toMatch(/not simply a string that should be reversed/i);
  });

  it("keeps the five principal vowel letters distinct from short-vowel marks", () => {
    expect(urdu.alphabet.vowels.map(({ letter }) => letter)).toEqual([
      "ا", "آ", "و", "ی", "ے",
    ]);
    expect(urdu.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("َ");
    expect(urdu.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ِ");
    expect(urdu.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ُ");
  });

  it("includes South Asian consonants and important auxiliary characters", () => {
    const consonants = urdu.alphabet.consonants.map(({ letter }) => letter);
    const extensions = urdu.alphabet.extensions?.map(({ letter }) => letter) ?? [];
    expect(consonants).toContain("ٹ");
    expect(consonants).toContain("ڈ");
    expect(consonants).toContain("ڑ");
    expect(extensions).toContain("ں");
    expect(extensions).toContain("ھ");
    expect(extensions).toContain("ء");
  });

  it("includes Urdu pronunciation marks and Eastern Arabic-Indic digits", () => {
    const marks = [
      ...(urdu.alphabet.vowelSigns ?? []),
      ...(urdu.alphabet.symbols ?? []),
    ].map(({ letter }) => letter);
    expect(marks).toContain("ْ");
    expect(marks).toContain("ّ");
    expect(urdu.alphabet.numerals.map(({ native }) => native)).toEqual([
      "۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹",
    ]);
  });

  it("provides a complete researched curriculum", () => {
    const curriculum = urdu.learn.curriculum;
    expect(curriculum?.research?.length).toBeGreaterThanOrEqual(4);
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

  it("links curriculum resource IDs to existing research records", () => {
    const curriculum = urdu.learn.curriculum;
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

  it("explains joining behavior, omitted short vowels, aspiration, and nasalization", () => {
    const content = [
      ...(urdu.learn.curriculum?.writingSystem?.paragraphs ?? []),
      ...(urdu.learn.curriculum?.consonantClassification?.paragraphs ?? []),
      ...(urdu.learn.curriculum?.specialCharacters?.paragraphs ?? []),
    ].join(" ");
    expect(content).toMatch(/connectors and non-connectors/i);
    expect(content).toMatch(/short vowels are usually omitted/i);
    expect(content).toMatch(/aspiration/i);
    expect(content).toMatch(/nasalization/i);
  });

  it("distinguishes transliteration from translation and avoids fixed provider promises", () => {
    const guide = urdu.learn.curriculum?.typingGuide?.paragraphs.join(" ") ?? "";
    expect(guide).toMatch(/transliteration, not translation/i);
    expect(guide).toMatch(/do not guarantee/i);
    expect(urdu.faq.find(({ question }) => question.includes("translation"))?.answer).toMatch(/does not translate/i);
  });
});
