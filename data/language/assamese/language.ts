import type { Language } from "@/types/language";

import { assameseAlphabet } from "./alphabet";
import { ASSAMESE_FAQ, LEARN_ASSAMESE_FAQ } from "./faq";
import { assameseResearch } from "./research";

export const assamese: Language = {
  id: "assamese",
  slug: "assamese",

  name: "Assamese",
  nativeName: "অসমীয়া",

  locale: "as-IN",
  direction: "ltr",

  script: "Assamese (Eastern Nagari)",

  transliteration: {
    engine: "google",
    languageCode: "as",
  },

  typing: {
    title: "Assamese Typing Tool",

    subtitle:
      "Type Assamese words using English letters",

    intro:
      "Write Assamese words with Roman letters and choose Assamese-script suggestions. This is transliteration, not English-to-Assamese translation. No Assamese keyboard layout is required.",

    learnLink: {
      href: "/learn/assamese",

      label: "Learn Assamese Typing (Assamese Script)",

      description:
        "Understand Assamese letters, pronunciation, script, and typing fundamentals.",
    },

    seo: {
      title: "Assamese Typing Tool (English to Assamese)",

      description:
        "Type Assamese words using English letters and convert them to the Assamese script with transliteration suggestions. No keyboard installation is required.",

      keywords: [
        "English to Assamese typing",
        "Assamese typing",
        "Assamese typing online",
        "Assamese transliteration",
        "phonetic Assamese typing",
        "Assamese keyboard",
        "English to Assamese converter",
        "TypeIndian Assamese",
      ],

      openGraph: {
        title: "Assamese Typing Tool - TypeIndian",

        description:
          "Type Assamese words with Roman letters and choose Assamese-script transliteration suggestions.",

        locale: "as_IN",
      },

      twitter: {
        title: "Assamese Typing Tool - TypeIndian",

        description:
          "A free browser-based tool for typing Assamese with Roman-letter input.",
      },
    },
  },

  learn: {
    meta: {
      title: "Learn Assamese Typing",

      description:
        "Learn Assamese writing in the Eastern Nagari tradition: independent vowels, consonants, vowel signs, Assamese-specific letters, conjuncts, numerals, and Roman-to-Assamese typing.",

      cta: "Start Typing in Assamese →",
    },

    seo: {
      title:
        "Learn Assamese Typing (English to Assamese) – Beginner Guide",

      description:
        "A practical Assamese guide to Eastern Nagari writing, vowels, consonants, vowel signs, special letters, numerals, and Roman-to-Assamese transliteration.",

      keywords: [
        "learn Assamese typing",
        "Assamese typing tutorial",
        "Assamese alphabet",
        "Assamese script",
        "Assamese vowels",
        "Assamese consonants",
        "English to Assamese typing guide",
        "Assamese typing for beginners",
        "TypeIndian Assamese",
      ],

      openGraph: {
        title:
          "Learn Assamese Typing - Beginner Guide | TypeIndian",

        description:
          "Learn the Assamese writing system, alphabet, vowel signs, Assamese-specific letters, numerals, and Roman-input typing.",

        locale: "as_IN",
      },

      twitter: {
        title: "Learn Assamese Typing - TypeIndian",

        description:
          "Learn Assamese letters and type Assamese words using Roman-letter transliteration.",
      },
    },

    about: {
      title: "About Assamese Language",

      paragraphs: [
        "Assamese (অসমীয়া) is an Indo-Aryan language spoken primarily in Assam and by Assamese-speaking communities elsewhere. The Assam Official Language Act, 1960 provides for Assamese to be used for official purposes of the state, subject to safeguards and provisions for other language communities and regions.",
        "Assamese has a long literary tradition. Srimanta Sankardeva (15th–16th century) was a major religious, literary, and cultural figure whose works helped shape Assamese literature and performance traditions. The Government of India announced Classical Language status for Assamese in October 2024.",
        "Assamese is written using the Assamese (Eastern Nagari) script. Although it shares many characters with the Bengali script, Assamese has its own pronunciation, vocabulary, and distinctive letters such as 'ৰ' and 'ৱ'.",
      ],
    },

    script: {
      title: "Assamese Script",

      paragraphs: [
        "Assamese uses an abugida writing system written from left to right. A consonant normally carries an inherent vowel; dependent vowel signs modify that vowel and the virama or hasanta (্) suppresses it.",
        "The writing system includes independent vowels, consonants, dependent vowel signs, combining marks, conjuncts, and Eastern Nagari digits. The traditional chart is an orthographic inventory, not a direct count of modern Assamese phonemes.",
      ],

      bullets: [
        "Written from left to right",
        "Uses the Assamese (Eastern Nagari) script",
        "Uses independent vowels and dependent vowel signs",
        "Includes the Assamese letters ৰ and ৱ",
        "Forms conjuncts using the virama (্)",
        "Uses Eastern Nagari digits (০–৯)",
      ],
    },

    alphabet: {
      vowels: {
        title: "Vowels (স্বৰবৰ্ণ)",

        description:
          "Assamese vowels represent independent vowel sounds and form the foundation of pronunciation in the Assamese writing system.",
      },

      consonants: {
        title: "Consonants (ব্যঞ্জনবৰ্ণ)",

        description:
          "Assamese consonants represent the primary sounds used to write native Assamese words and combine with vowel signs to form syllables.",
      },

      extensions: {
        title: "Additional Letters",

        description:
          "These additional letters include traditional Assamese characters and conjunct letters used in classical and Sanskrit-derived words.",
      },

      numerals: {
        title: "Assamese Numerals",

        description:
          "Assamese uses the traditional Eastern Nagari numeral system, which is shared with the Bengali script.",
      },
    },

    cta: {
      title: "Ready to start typing in Assamese?",

      description:
        "Skip complicated keyboard layouts. Type naturally in English and TypeIndian instantly converts your words into the Assamese script.",

      button: "Open Assamese Typing Tool →",
    },

    faq: LEARN_ASSAMESE_FAQ,
  },

  alphabet: assameseAlphabet,

  labels: {
    alphabet: {
      title: "Learn Assamese Letters",

      description:
        "These are the core Assamese letters. Click any letter to insert it directly into the typing editor above.",

      vowels: "Vowels (স্বৰবৰ্ণ)",

      consonants: "Consonants (ব্যঞ্জনবৰ্ণ)",

      extensions: "Additional Letters",

      numerals: "Assamese Numerals",
    },
  },

  faq: ASSAMESE_FAQ,

  capabilities: {
    typing: true,
    learn: true,
    translation: false,
    speechToText: false,
    textToSpeech: false,
    ocr: false,
    ai: false,
  },
};