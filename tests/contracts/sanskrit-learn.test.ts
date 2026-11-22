import { describe, expect, it } from "vitest";

import { sanskrit } from "@/data/language/sanskrit/language";

describe("Sanskrit learning curriculum", () => {
  it("keeps the traditional vowel and primary consonant inventories explicit", () => {
    expect(sanskrit.alphabet.vowels.map(({ letter }) => letter)).toEqual([
      "अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ॠ", "ऌ", "ॡ", "ए", "ऐ", "ओ", "औ",
    ]);
    expect(sanskrit.alphabet.consonants).toHaveLength(33);
    expect(sanskrit.alphabet.consonants.map(({ letter }) => letter)).toContain("ङ");
    expect(sanskrit.alphabet.consonants.map(({ letter }) => letter)).toContain("ण");
    expect(sanskrit.alphabet.extensions?.map(({ letter }) => letter)).toContain("क्ष");
    expect(sanskrit.alphabet.extensions?.map(({ letter }) => letter)).toContain("श्र");
  });

  it("includes dependent vowel signs, Sanskrit marks, Vedic accents, and digits", () => {
    expect(sanskrit.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ृ");
    expect(sanskrit.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ॄ");
    expect(sanskrit.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ॢ");
    expect(sanskrit.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ॣ");
    expect(sanskrit.alphabet.symbols?.map(({ letter }) => letter)).toContain("ं");
    expect(sanskrit.alphabet.symbols?.map(({ letter }) => letter)).toContain("ः");
    expect(sanskrit.alphabet.symbols?.map(({ letter }) => letter)).toContain("ऽ");
    expect(sanskrit.alphabet.symbols?.map(({ letter }) => letter)).toContain("॑");
    expect(sanskrit.alphabet.symbols?.map(({ letter }) => letter)).toContain("॒");
    expect(sanskrit.alphabet.numerals.map(({ native }) => native)).toEqual([
      "०", "१", "२", "३", "४", "५", "६", "७", "८", "९",
    ]);
  });

  it("provides the full Sanskrit curriculum, including advanced Vedic content", () => {
    const curriculum = sanskrit.learn.curriculum;
    expect(curriculum?.research?.length).toBeGreaterThanOrEqual(6);
    expect(curriculum?.history?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.writingSystem?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.consonantClassification?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.vowelSigns?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.numerals?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.specialCharacters?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.vedicRecitation?.paragraphs.length).toBeGreaterThan(0);
    expect(curriculum?.examples?.items.length).toBeGreaterThan(0);
    expect(curriculum?.typingGuide?.examples.length).toBeGreaterThan(0);
    expect(curriculum?.commonMistakes?.items.length).toBeGreaterThan(0);
  });

  it("links curriculum sections only to defined research resources", () => {
    const curriculum = sanskrit.learn.curriculum;
    const ids = new Set(curriculum?.research?.map(({ id }) => id));
    [
      curriculum?.history,
      curriculum?.writingSystem,
      curriculum?.consonantClassification,
      curriculum?.vowelSigns,
      curriculum?.numerals,
      curriculum?.specialCharacters,
      curriculum?.vedicRecitation,
    ].forEach((section) => {
      section?.resourceIds?.forEach((id) => expect(ids.has(id)).toBe(true));
    });
  });

  it("explains inherent vowels, virama, and conjunct formation", () => {
    const writing = sanskrit.learn.curriculum?.writingSystem?.paragraphs.join(" ") ?? "";
    expect(writing).toMatch(/inherent vowel/i);
    expect(writing).toMatch(/virama/i);
    expect(writing).toMatch(/conjunct/i);
  });

  it("distinguishes Sanskrit phonetic classes and sibilants", () => {
    const content = sanskrit.learn.curriculum?.consonantClassification?.paragraphs.join(" ") ?? "";
    expect(content).toMatch(/five groups/i);
    expect(content).toContain("श ष स");
    expect(content).toMatch(/distinct/i);
  });

  it("distinguishes IAST from casual phonetic typing", () => {
    const guide = sanskrit.learn.curriculum?.typingGuide?.paragraphs.join(" ") ?? "";
    expect(guide).toMatch(/IAST/);
    expect(guide).toMatch(/casual phonetic typing/i);
    expect(guide).toMatch(/not translation/i);
  });

  it("documents anusvara, candrabindu, visarga, and avagraha separately", () => {
    const content = sanskrit.learn.curriculum?.specialCharacters?.paragraphs.join(" ") ?? "";
    expect(content).toMatch(/Anusvāra/i);
    expect(content).toMatch(/candrabindu/i);
    expect(content).toMatch(/Visarga/i);
    expect(content).toMatch(/Avagraha/i);
  });

  it("treats Vedic accents as advanced notation, not ordinary typing decoration", () => {
    const content = sanskrit.learn.curriculum?.vedicRecitation?.paragraphs.join(" ") ?? "";
    expect(content).toMatch(/udātta/i);
    expect(content).toMatch(/anudātta/i);
    expect(content).toMatch(/svarita/i);
    expect(content).toMatch(/not be advertised as a complete Vedic/i);
  });
});
