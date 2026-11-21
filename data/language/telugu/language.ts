import type { Language } from "@/types/language";

import { teluguAlphabet } from "./alphabet";
import { LEARN_TELUGU_FAQ, TELUGU_FAQ } from "./faq";

export const telugu: Language = {
  id: "telugu",
  slug: "telugu",

  name: "Telugu",
  nativeName: "తెలుగు",

  locale: "te-IN",
  direction: "ltr",

  script: "Telugu",

  transliteration: {
    engine: "google",
    languageCode: "te",
  },

  typing: {
    title: "Telugu Typing Tool",

    subtitle:
      "Type in English and convert instantly to తెలుగు",

    intro:
      "Write Telugu naturally using English letters with TypeIndian's Telugu typing tool. Simply type phonetically in English and instantly convert your words into the Telugu script. No keyboard installation, no login - fast and accurate Telugu transliteration directly in your browser.",

    learnLink: {
      href: "/learn/telugu",

      label: "Learn Telugu Typing (Telugu Script)",

      description:
        "Understand Telugu letters, pronunciation, script, and typing fundamentals.",
    },

    seo: {
      title: "Telugu Typing Tool (English to Telugu)",

      description:
        "Free English to Telugu typing tool. Type using English letters and instantly convert your text into the Telugu script. Fast, accurate phonetic transliteration with no login or installation required.",

      keywords: [
        "English to Telugu typing",
        "Telugu typing",
        "Telugu typing online",
        "Telugu transliteration",
        "phonetic Telugu typing",
        "Telugu typing tool",
        "English to Telugu converter",
        "Telugu keyboard online",
        "Telugu script typing",
        "TypeIndian Telugu",
      ],

      openGraph: {
        title: "Telugu Typing Tool - TypeIndian",

        description:
          "Type in English and instantly write in Telugu using accurate phonetic transliteration.",

        locale: "te_IN",
      },

      twitter: {
        title: "Telugu Typing Tool - TypeIndian",

        description:
          "Fast, free, and browser-based English to Telugu typing.",
      },
    },
  },
  learn: {
    meta: {
      title: "Learn Telugu Typing",

      description:
        "Learn how to type Telugu using English letters with this beginner-friendly guide. Explore the Telugu language, Telugu script, vowels, consonants, pronunciation, and phonetic typing.",

      cta: "Start Typing in Telugu →",
    },

    seo: {
      title:
        "Learn Telugu Typing (English to Telugu) – Beginner Guide",

      description:
        "Learn Telugu typing with an easy beginner guide. Understand the Telugu script, vowels, consonants, numerals, and English to Telugu phonetic typing.",

      keywords: [
        "learn Telugu typing",
        "Telugu typing tutorial",
        "Telugu alphabet",
        "Telugu script",
        "Telugu vowels",
        "Telugu consonants",
        "English to Telugu typing guide",
        "Telugu typing for beginners",
        "TypeIndian Telugu",
      ],

      openGraph: {
        title:
          "Learn Telugu Typing - Beginner Guide | TypeIndian",

        description:
          "Master Telugu typing with a beginner-friendly guide covering the Telugu script, pronunciation, alphabet, and phonetic typing.",

        locale: "te_IN",
      },

      twitter: {
        title: "Learn Telugu Typing - TypeIndian",

        description:
          "Learn to type Telugu naturally using English letters with our complete beginner guide.",
      },
    },

    about: {
      title: "About Telugu Language",

      paragraphs: [
        "Telugu (తెలుగు) is one of the most widely spoken Dravidian languages in the world and is the official language of Andhra Pradesh and Telangana. More than 80 million people speak Telugu worldwide.",
        "Telugu belongs to the Dravidian language family and has a literary tradition spanning over a thousand years. It is recognized as one of the Classical Languages of India.",
        "Telugu is written using the Telugu script, a Brahmic writing system known for its elegant rounded letters that developed historically from writing on palm leaves.",
      ],
    },

    script: {
      title: "Telugu Script",

      paragraphs: [
        "The Telugu script is an abugida writing system in which every consonant carries an inherent vowel unless modified by a vowel sign or the virama (్).",
        "The script contains independent vowels, consonants, vowel signs (matras), numerals, and additional symbols. Its rounded appearance makes it one of the most visually distinctive Indian writing systems.",
      ],

      bullets: [
        "Written from left to right",
        "Uses the Telugu script",
        "Contains vowels and consonants",
        "Uses vowel signs (matras)",
      ],
    },

    alphabet: {
      vowels: {
        title: "Vowels (అచ్చులు)",

        description:
          "Telugu vowels represent independent vowel sounds and form the foundation of pronunciation in the Telugu writing system.",
      },

      consonants: {
        title: "Consonants (హల్లులు)",

        description:
          "Telugu consonants represent the primary sounds used to write native Telugu words and combine with vowel signs to form complete syllables.",
      },

      extensions: {
        title: "Additional Letters",

        description:
          "These additional characters are mainly used for Sanskrit-derived words and traditional conjunct forms.",
      },

      numerals: {
        title: "Telugu Numerals",

        description:
          "Telugu has its own traditional numeral system, although Arabic numerals are commonly used in everyday writing.",
      },
    },

    cta: {
      title: "Ready to start typing in Telugu?",

      description:
        "Skip complicated keyboard layouts. Type naturally in English and TypeIndian instantly converts your words into the Telugu script.",

      button: "Open Telugu Typing Tool →",
    },

    faq: LEARN_TELUGU_FAQ,
  },

  alphabet: teluguAlphabet,

  labels: {
    alphabet: {
      title: "Learn Telugu Letters",

      description:
        "These are the core Telugu letters. Click any letter to insert it directly into the typing editor above.",

      vowels: "Vowels (అచ్చులు)",

      consonants: "Consonants (హల్లులు)",

      extensions: "Additional Letters",

      numerals: "Telugu Numerals",
    },
  },

  faq: TELUGU_FAQ,

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