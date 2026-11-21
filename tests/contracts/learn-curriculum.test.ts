import { describe, expect, it } from "vitest";

import type {
  LearnCurriculum,
  LearnExample,
  LearnMistake,
  LearnTypingExample,
} from "@/types/language";

describe("learn curriculum contracts", () => {
  it("supports language-specific script history and writing-system lessons", () => {
    const curriculum: LearnCurriculum = {
      history: { title: "Script history", paragraphs: ["A script-specific account."] },
      writingSystem: { title: "Writing system", paragraphs: ["How the orthography works."] },
    };

    expect(curriculum.history?.paragraphs).toHaveLength(1);
    expect(curriculum.writingSystem?.title).toBe("Writing system");
  });

  it("supports native word examples with Roman forms and meanings", () => {
    const example: LearnExample = {
      native: "नमस्ते",
      roman: "namaste",
      meaning: "hello",
    };

    expect(example.native).not.toBe(example.roman);
    expect(example.meaning).toBe("hello");
  });

  it("supports typing input/output examples and common mistakes", () => {
    const typingExample: LearnTypingExample = {
      input: "namaste",
      output: "नमस्ते",
      explanation: "Roman input converted to Devanagari.",
    };
    const mistake: LearnMistake = {
      incorrect: "Example spelling A",
      correct: "Example spelling B",
      explanation: "A verified language-specific distinction.",
    };

    expect(typingExample.input).toBe("namaste");
    expect(mistake.explanation).toContain("verified");
  });

  it("allows partial curriculum data while languages are researched incrementally", () => {
    const curriculum: LearnCurriculum = {
      numerals: { title: "Numerals", paragraphs: ["A researched section."] },
    };

    expect(curriculum.history).toBeUndefined();
    expect(curriculum.numerals?.paragraphs).toHaveLength(1);
  });
});
