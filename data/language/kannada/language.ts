import type { Language } from "@/types/language";

import { kannadaAlphabet } from "./alphabet";
import { KANNADA_FAQ, LEARN_KANNADA_FAQ } from "./faq";

export const kannada: Language = {
  id: "kannada",
  slug: "kannada",

  name: "Kannada",
  nativeName: "ಕನ್ನಡ",

  locale: "kn-IN",
  direction: "ltr",

  script: "Kannada",

  transliteration: {
    engine: "google",
    languageCode: "kn",
  },

  typing: {
    title: "Kannada Typing Tool",

    subtitle:
      "Type in English and convert instantly to ಕನ್ನಡ",

    intro:
      "Write Kannada naturally using English letters with TypeIndian's Kannada typing tool. Simply type phonetically in English and instantly convert your words into the Kannada script. No keyboard installation, no login - fast, accurate, and browser-based Kannada transliteration directly in your browser.",

    learnLink: {
      href: "/learn/kannada",

      label: "Learn Kannada Typing (Kannada Script)",

      description:
        "Understand Kannada letters, pronunciation, script, and typing fundamentals.",
    },

    seo: {
      title: "Kannada Typing Tool (English to Kannada)",

      description:
        "Free English to Kannada typing tool. Type using English letters and instantly convert your text into the Kannada script. Fast, accurate phonetic transliteration with no login or installation required.",

      keywords: [
        "English to Kannada typing",
        "Kannada typing",
        "Kannada typing online",
        "Kannada transliteration",
        "phonetic Kannada typing",
        "Kannada keyboard",
        "Kannada typing tool",
        "English to Kannada converter",
        "TypeIndian Kannada",
      ],

      openGraph: {
        title: "Kannada Typing Tool - TypeIndian",

        description:
          "Type in English and instantly write in Kannada using accurate phonetic transliteration.",

        locale: "kn_IN",
      },

      twitter: {
        title: "Kannada Typing Tool - TypeIndian",

        description:
          "Fast, free, and browser-based English to Kannada typing.",
      },
    },
  },

  learn: {
    meta: {
      title: "Learn Kannada Typing",

      description:
        "Learn how to type Kannada using English letters with this beginner-friendly guide. Explore the Kannada language, Kannada script, vowels, consonants, pronunciation, and phonetic typing.",

      cta: "Start Typing in Kannada →",
    },

    seo: {
      title:
        "Learn Kannada Typing (English to Kannada) – Beginner Guide",

      description:
        "Learn Kannada typing with an easy beginner guide. Understand the Kannada script, vowels, consonants, numerals, and English to Kannada phonetic typing.",

      keywords: [
        "learn Kannada typing",
        "Kannada typing tutorial",
        "Kannada alphabet",
        "Kannada script",
        "Kannada vowels",
        "Kannada consonants",
        "English to Kannada typing guide",
        "Kannada typing for beginners",
        "TypeIndian Kannada",
      ],

      openGraph: {
        title:
          "Learn Kannada Typing - Beginner Guide | TypeIndian",

        description:
          "Master Kannada typing with a beginner-friendly guide covering the Kannada script, pronunciation, alphabet, and phonetic typing.",

        locale: "kn_IN",
      },

      twitter: {
        title: "Learn Kannada Typing - TypeIndian",

        description:
          "Learn to type Kannada naturally using English letters with our complete beginner guide.",
      },
    },

    about: {
      title: "About Kannada Language",

      paragraphs: [
        "Kannada (ಕನ್ನಡ) is the official language of Karnataka and one of the oldest continuously spoken languages in India. More than 45 million people speak Kannada worldwide.",
        "Kannada belongs to the Dravidian language family and has a literary tradition spanning over 1,500 years. It is recognized as one of the Classical Languages of India.",
        "Kannada is written using the Kannada script, a Brahmic writing system known for its rounded letterforms and rich literary heritage.",
      ],
    },

    script: {
      title: "Kannada Script",

      paragraphs: [
        "The Kannada script is an abugida writing system in which every consonant carries an inherent vowel unless modified by a vowel sign or the virama (್).",
        "The script contains independent vowels, consonants, vowel signs (matras), numerals, and conjunct letters. Its rounded appearance developed from centuries of writing on palm leaves.",
      ],

      bullets: [
        "Written from left to right",
        "Uses the Kannada script",
        "Contains vowels and consonants",
        "Uses vowel signs (matras)",
      ],
    },

    alphabet: {
      vowels: {
        title: "Vowels (ಸ್ವರಗಳು)",

        description:
          "Kannada vowels represent independent vowel sounds and form the foundation of pronunciation in the Kannada writing system.",
      },

      consonants: {
        title: "Consonants (ವ್ಯಂಜನಗಳು)",

        description:
          "Kannada consonants represent the primary sounds used to write native Kannada words and combine with vowel signs to form syllables.",
      },

      extensions: {
        title: "Additional Letters",

        description:
          "These additional characters include common conjunct letters used in Sanskrit-derived words and traditional Kannada writing.",
      },

      numerals: {
        title: "Kannada Numerals",

        description:
          "Kannada has its own traditional numeral system, although Arabic numerals are commonly used in everyday writing.",
      },
    },

    cta: {
      title: "Ready to start typing in Kannada?",

      description:
        "Skip complicated keyboard layouts. Type naturally in English and TypeIndian instantly converts your words into the Kannada script.",

      button: "Open Kannada Typing Tool →",
    },

    faq: LEARN_KANNADA_FAQ,
  },

  alphabet: kannadaAlphabet,

  labels: {
    alphabet: {
      title: "Learn Kannada Letters",

      description:
        "These are the core Kannada letters. Click any letter to insert it directly into the typing editor above.",

      vowels: "Vowels (ಸ್ವರಗಳು)",

      consonants: "Consonants (ವ್ಯಂಜನಗಳು)",

      extensions: "Additional Letters",

      numerals: "Kannada Numerals",
    },
  },

  faq: KANNADA_FAQ,

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