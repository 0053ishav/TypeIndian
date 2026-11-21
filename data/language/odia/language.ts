import type { Language } from "@/types/language";

import { odiaAlphabet } from "./alphabet";
import { LEARN_ODIA_FAQ, ODIA_FAQ } from "./faq";

export const odia: Language = {
  id: "odia",
  slug: "odia",

  name: "Odia",
  nativeName: "ଓଡ଼ିଆ",

  locale: "or-IN",
  direction: "ltr",

  script: "Odia",

  transliteration: {
    engine: "google",
    languageCode: "or",
  },

  typing: {
    title: "Odia Typing Tool",

    subtitle:
      "Type in English and convert instantly to ଓଡ଼ିଆ",

    intro:
      "Write Odia naturally using English letters with TypeIndian's Odia typing tool. Simply type phonetically in English and instantly convert your words into the Odia script. No keyboard installation, no login - fast and accurate Odia transliteration directly in your browser.",

    learnLink: {
      href: "/learn/odia",

      label: "Learn Odia Typing (Odia Script)",

      description:
        "Understand Odia letters, pronunciation, script, and typing fundamentals.",
    },

    seo: {
      title: "Odia Typing Tool (English to Odia)",

      description:
        "Free English to Odia typing tool. Type using English letters and instantly convert your text into the Odia script. Fast, accurate phonetic transliteration with no login or installation required.",

      keywords: [
        "English to Odia typing",
        "Odia typing",
        "Odia typing online",
        "Odia transliteration",
        "phonetic Odia typing",
        "Odia keyboard",
        "English to Odia converter",
        "TypeIndian Odia",
      ],

      openGraph: {
        title: "Odia Typing Tool - TypeIndian",

        description:
          "Type in English and instantly write in Odia using accurate phonetic transliteration.",

        locale: "or_IN",
      },

      twitter: {
        title: "Odia Typing Tool - TypeIndian",

        description:
          "Fast, free, and browser-based English to Odia typing.",
      },
    },
  },

  learn: {
    meta: {
      title: "Learn Odia Typing",

      description:
        "Learn how to type Odia using English letters with this beginner-friendly guide. Explore the Odia language, Odia script, vowels, consonants, pronunciation, and phonetic typing.",

      cta: "Start Typing in Odia →",
    },

    seo: {
      title:
        "Learn Odia Typing (English to Odia) – Beginner Guide",

      description:
        "Learn Odia typing with an easy beginner guide. Understand the Odia script, vowels, consonants, numerals, and English to Odia phonetic typing.",

      keywords: [
        "learn Odia typing",
        "Odia typing tutorial",
        "Odia alphabet",
        "Odia script",
        "Odia vowels",
        "Odia consonants",
        "English to Odia typing guide",
        "Odia typing for beginners",
        "TypeIndian Odia",
      ],

      openGraph: {
        title:
          "Learn Odia Typing - Beginner Guide | TypeIndian",

        description:
          "Master Odia typing with a beginner-friendly guide covering the Odia script, pronunciation, alphabet, and phonetic typing.",

        locale: "or_IN",
      },

      twitter: {
        title: "Learn Odia Typing - TypeIndian",

        description:
          "Learn to type Odia naturally using English letters with our complete beginner guide.",
      },
    },

    about: {
      title: "About Odia Language",

      paragraphs: [
        "Odia (ଓଡ଼ିଆ) is the official language of Odisha and one of India's oldest literary languages. More than 35 million people speak Odia worldwide.",
        "Odia belongs to the Indo-Aryan language family and has a rich literary tradition spanning over a thousand years. It is recognized as one of the Classical Languages of India.",
        "Odia is written using the Odia script, a Brahmic writing system known for its rounded letterforms that evolved through centuries of writing on palm leaves.",
      ],
    },

    script: {
      title: "Odia Script",

      paragraphs: [
        "The Odia script is an abugida writing system where every consonant carries an inherent vowel unless modified by a vowel sign or the virama (୍).",
        "The script includes independent vowels, consonants, vowel signs (matras), numerals, and conjunct letters. Its rounded appearance makes it one of the most recognizable Indian writing systems.",
      ],

      bullets: [
        "Written from left to right",
        "Uses the Odia script",
        "Contains vowels and consonants",
        "Uses vowel signs (matras)",
      ],
    },

    alphabet: {
      vowels: {
        title: "Vowels (ସ୍ୱରବର୍ଣ୍ଣ)",

        description:
          "Odia vowels represent independent vowel sounds and form the foundation of pronunciation in the Odia writing system.",
      },

      consonants: {
        title: "Consonants (ବ୍ୟଞ୍ଜନବର୍ଣ୍ଣ)",

        description:
          "Odia consonants represent the primary sounds used to write native Odia words and combine with vowel signs to form syllables.",
      },

      extensions: {
        title: "Additional Letters",

        description:
          "These additional characters include common conjunct letters used in Sanskrit-derived words and traditional Odia writing.",
      },

      numerals: {
        title: "Odia Numerals",

        description:
          "Odia has its own native numeral system, although Arabic numerals are commonly used in modern writing.",
      },
    },

    cta: {
      title: "Ready to start typing in Odia?",

      description:
        "Skip complicated keyboard layouts. Type naturally in English and TypeIndian instantly converts your words into the Odia script.",

      button: "Open Odia Typing Tool →",
    },

    faq: LEARN_ODIA_FAQ,
  },

  alphabet: odiaAlphabet,

  labels: {
    alphabet: {
      title: "Learn Odia Letters",

      description:
        "These are the core Odia letters. Click any letter to insert it directly into the typing editor above.",

      vowels: "Vowels (ସ୍ୱରବର୍ଣ୍ଣ)",

      consonants: "Consonants (ବ୍ୟଞ୍ଜନବର୍ଣ୍ଣ)",

      extensions: "Additional Letters",

      numerals: "Odia Numerals",
    },
  },

  faq: ODIA_FAQ,

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