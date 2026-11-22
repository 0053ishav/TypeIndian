import type { Alphabet } from "./alphabet";
import type { FAQItem } from "./faq";

export type LanguageDirection = "ltr" | "rtl";
export type TransliterationEngine = "google" | "internal";

export interface LanguageTransliteration {
  engine: TransliterationEngine;
  languageCode: string;
}

export interface LanguageLearnLink {
  href: string;
  label: string;
  description: string;
}

export interface LanguagePageSEO {
  title: string;
  description: string;
  keywords: string[];
  openGraph: { title: string; description: string; locale: string };
  twitter: { title: string; description: string };
}

export interface LanguageTyping {
  title: string;
  subtitle: string;
  intro: string;
  learnLink: LanguageLearnLink;
  seo: LanguagePageSEO;
}

export interface LanguageCapabilities {
  typing: boolean;
  learn: boolean;
  translation: boolean;
  speechToText: boolean;
  textToSpeech: boolean;
  ocr: boolean;
  ai: boolean;
}

export interface LanguageLabels {
  alphabet: {
    title: string;
    description: string;
    vowels: string;
    consonants: string;
    extensions?: string;
    vowelSigns?: string;
    symbols?: string;
    numerals: string;
  };
}

/** Complete configuration consumed by the language registry and app routes. */
export interface Language {
  id: string;
  slug: string;
  name: string;
  nativeName: string;
  locale: string;
  direction: LanguageDirection;
  script: string;
  transliteration: LanguageTransliteration;
  typing: LanguageTyping;
  learn: LanguageLearn;
  alphabet: Alphabet;
  labels: LanguageLabels;
  faq: FAQItem[];
  capabilities: LanguageCapabilities;
}

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
  /** Research sources that support or deepen this curriculum section. */
  resourceIds?: string[];
}

export interface LearnResource {
  id: string;
  title: string;
  type: "paper" | "article" | "standard" | "institutional-reference" | "book-chapter" | "book";
  authors?: string[];
  year?: number;
  publisher?: string;
  url: string;
  doi?: string;
  summary: string;
  /** Curriculum section keys this source is relevant to; not citation edges. */
  topics: string[];
  metadataStatus?: "reviewed" | "verify";
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
  /** Language-specific research library; sources are linked to curriculum topics. */
  research?: LearnResource[];
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
    vowels: { title: string; description: string; resourceIds?: string[] };
    consonants: { title: string; description?: string; resourceIds?: string[] };
    extensions?: { title: string; description?: string; resourceIds?: string[] };
    vowelSigns?: { title: string; description?: string; resourceIds?: string[] };
    symbols?: { title: string; description?: string; resourceIds?: string[] };
    numerals: { title: string; description: string; resourceIds?: string[] };
  };

  /** Detailed modules unique to each language and writing system. */
  curriculum?: LearnCurriculum;

  cta: { title: string; description: string; button: string };
  faq: FAQItem[];
}
