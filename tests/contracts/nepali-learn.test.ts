import { describe, expect, it } from "vitest";

import { nepali } from "@/data/language/nepali/language";

describe("Nepali learning curriculum", () => {
  it("keeps Nepali core vowels and consonants distinct from conjuncts and Sanskrit extensions", () => {
    expect(nepali.alphabet.vowels.map(({ letter }) => letter)).toEqual([
      "अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ए", "ऐ", "ओ", "औ",
    ]);
    expect(nepali.alphabet.consonants).toHaveLength(33);
    expect(nepali.alphabet.consonants.map(({ letter }) => letter)).toContain("ङ");
    expect(nepali.alphabet.consonants.map(({ letter }) => letter)).toContain("ष");
    expect(nepali.alphabet.consonants.map(({ letter }) => letter)).not.toContain("क्ष");
    expect(nepali.alphabet.extensions?.map(({ letter }) => letter)).toContain("क्ष");
    expect(nepali.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ि");
    expect(nepali.alphabet.vowelSigns?.map(({ letter }) => letter)).toContain("ौ");
    expect(nepali.alphabet.symbols?.map(({ letter }) => letter)).toContain("्");
    expect(nepali.alphabet.symbols?.map(({ letter }) => letter)).toContain("ँ");
    expect(nepali.alphabet.symbols?.map(({ letter }) => letter)).toContain("ं");
    expect(nepali.alphabet.numerals.map(({ native }) => native)).toEqual([
      "०", "१", "२", "३", "४", "५", "६", "७", "८", "९",
    ]);
  });

  it("provides the complete Nepali learning curriculum", () => {
    const curriculum = nepali.learn.curriculum;
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
    const curriculum = nepali.learn.curriculum;
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

  it("explains Devanagari, the inherent vowel, hal, and conjuncts", () => {
    const writing = nepali.learn.curriculum?.writingSystem?.paragraphs.join(" ") ?? "";
    expect(writing).toMatch(/Devanagari/i);
    expect(writing).toMatch(/inherent vowel/i);
    expect(writing).toMatch(/hal/i);
    expect(writing).toMatch(/U\+0900–U\+097F/);
    expect(writing).toMatch(/क्ष/);
  });

  it("describes transliteration accurately and does not promise English translation", () => {
    const typingFaq = nepali.faq.find(({ question }) => question.includes("paste English text"));
    expect(typingFaq?.answer).toMatch(/does not translate English sentences/i);
    expect(nepali.learn.curriculum?.typingGuide?.paragraphs.join(" ")).toMatch(/transliteration/i);
    expect(nepali.learn.curriculum?.typingGuide?.paragraphs.join(" ")).toMatch(/romanization/i);
  });

  it("documents Nepali-specific raswa-dirgha spelling and nasal marks", () => {
    const content = [
      ...(nepali.learn.curriculum?.vowelSigns?.paragraphs ?? []),
      ...(nepali.learn.curriculum?.specialCharacters?.paragraphs ?? []),
    ].join(" ");
    expect(content).toMatch(/raswa/i);
    expect(content).toMatch(/dirgha/i);
    expect(content).toMatch(/chandrabindu/i);
    expect(content).toMatch(/shirbindu/i);
  });

  it("does not classify conjuncts as independent basic consonants", () => {
    const writing = nepali.learn.curriculum?.writingSystem?.paragraphs.join(" ") ?? "";
    expect(writing).toMatch(/not independent basic consonant letters/i);
    expect(nepali.alphabet.consonants.map(({ letter }) => letter)).not.toContain("ज्ञ");
  });
});
