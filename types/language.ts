import type { FAQItem } from "./faq";

export interface LearnExample {
  /** A real word or short phrase in the target language. */
  native: string;
  /** Roman input or a readable transliteration for learners. */
  roman: string;
  /** English meaning, where useful. */
  meaning?: string;
  /** A short note explaining the script or typing point. */
  note?: string;
}

export interface LearnContentSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface LearnTypingExample {
  input: string;
  output: string;
  explanation?: string;
}

export interface LearnTypingGuide {
  title: string;
  paragraphs: string[];
  examples: LearnTypingExample[];
  notes?: string[];
}

export interface LearnMistake {
  incorrect: string;
  correct: string;
  explanation: string;
}

/**
 * Script-specific learning content.
 *
 * Every field is optional initially so existing language configurations remain
 * valid while educational content is researched and added language by language.
 * Do not populate these sections with generic placeholder claims.
 */
export interface LearnCurriculum {
  history?: LearnContentSection;
  writingSystem?: LearnContentSection;
  vowelSigns?: LearnContentSection;
  consonantClassification?: LearnContentSection;
  numerals?: LearnContentSection;
  specialCharacters?: LearnContentSection;
  examples?: {
    title: string;
    introduction?: string;
    items: LearnExample[];
  };
  typingGuide?: LearnTypingGuide;
  commonMistakes?: {
    title: string;
    introduction?: string;
    items: LearnMistake[];
  };
}

export interface LanguageLearn {
  meta: {
    title: string;
    description: string;
    cta: string;
  };

  seo: {
    title: string;
    description: string;
    keywords: string[];
    openGraph: { title: string; description: string; locale: string };
    twitter: { title: string; description: string };
  };

  about: { title: string; paragraphs: string[] };
  script: { title: string; paragraphs: string[]; bullets?: string[] };

  alphabet: {
    vowels: { title: string; description: string };
    consonants: { title: string; description?: string };
    extensions?: { title: string; description?: string };
    vowelSigns?: { title: string; description?: string };
    symbols?: { title: string; description?: string };
    numerals: { title: string; description: string };
  };

  /** Detailed modules unique to each language and writing system. */
  curriculum?: LearnCurriculum;

  cta: { title: string; description: string; button: string };
  faq: FAQItem[];
}
