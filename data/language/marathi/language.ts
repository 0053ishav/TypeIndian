import type { Language } from "@/types/language";

import { marathiAlphabet } from "./alphabet";
import { LEARN_MARATHI_FAQ, MARATHI_FAQ } from "./faq";

export const marathi: Language = {
  id: "marathi",
  slug: "marathi",

  name: "Marathi",
  nativeName: "मराठी",

  locale: "mr-IN",
  direction: "ltr",

  script: "Devanagari",

  transliteration: {
    engine: "google",
    languageCode: "mr",
  },

  typing: {
    title: "Marathi Typing Tool",

    subtitle:
      "Type in English and convert instantly to मराठी",

    intro:
      "Write Marathi naturally using English letters with TypeIndian's Marathi typing tool. Simply type phonetically in English and instantly convert your words into the Devanagari script. No keyboard installation, no login - fast, accurate, and browser-based Marathi transliteration directly in your browser.",

    learnLink: {
      href: "/learn/marathi",

      label: "Learn Marathi Typing (Devanagari)",

      description:
        "Understand Marathi letters, pronunciation, script, and typing fundamentals.",
    },

    seo: {
      title: "Marathi Typing Tool (English to Marathi)",

      description:
        "Free English to Marathi typing tool. Type using English letters and instantly convert your text into Marathi (Devanagari script). Fast, accurate phonetic transliteration with no login or installation required.",

      keywords: [
        "English to Marathi typing",
        "Marathi typing",
        "Marathi typing online",
        "Marathi transliteration",
        "phonetic Marathi typing",
        "Marathi keyboard",
        "Marathi typing tool",
        "English to Marathi converter",
        "Devanagari Marathi typing",
        "TypeIndian Marathi",
      ],

      openGraph: {
        title: "Marathi Typing Tool - TypeIndian",

        description:
          "Type in English and instantly write in Marathi using accurate phonetic transliteration.",

        locale: "mr_IN",
      },

      twitter: {
        title: "Marathi Typing Tool - TypeIndian",

        description:
          "Fast, free, and browser-based English to Marathi typing.",
      },
    },
  },

  learn: {
    meta: {
      title: "Learn Marathi Typing",

      description:
        "Learn how to type Marathi using English letters with this beginner-friendly guide. Explore the Marathi language, Devanagari script, vowels, consonants, pronunciation, and phonetic typing.",

      cta: "Start Typing in Marathi →",
    },

    seo: {
      title: "Learn Marathi Typing (English to Devanagari) – Beginner Guide",

      description:
        "Learn Marathi typing with an easy beginner guide. Understand the Marathi language, Devanagari script, vowels, consonants, numerals, and English to Marathi phonetic typing.",

      keywords: [
        "learn Marathi typing",
        "Marathi typing tutorial",
        "Marathi alphabet",
        "Devanagari alphabet",
        "Marathi script",
        "Marathi vowels",
        "Marathi consonants",
        "English to Marathi typing guide",
        "Marathi typing for beginners",
        "TypeIndian Marathi",
      ],

      openGraph: {
        title: "Learn Marathi Typing - Beginner Guide | TypeIndian",

        description:
          "Master Marathi typing with a beginner-friendly guide covering the Devanagari script, pronunciation, alphabet, and phonetic typing.",

        locale: "mr_IN",
      },

      twitter: {
        title: "Learn Marathi Typing - TypeIndian",

        description:
          "Learn to type Marathi naturally using English letters with our complete beginner guide.",
      },
    },

    about: {
      title: "About Marathi Language",

      paragraphs: [
        "Marathi (मराठी) is the official language of Maharashtra and one of the most widely spoken languages in India. More than 80 million people speak Marathi worldwide.",
        "Marathi belongs to the Indo-Aryan language family and has a rich literary tradition dating back several centuries. It is the language of renowned saints and poets such as Dnyaneshwar, Tukaram, and Namdev.",
        "Marathi is written using the Devanagari script. Although it shares the script with Hindi, Marathi has its own pronunciation, grammar, vocabulary, and unique letters such as 'ळ'.",
      ],
    },

    script: {
      title: "Devanagari Script",

      paragraphs: [
        "Marathi is written using the Devanagari script, an abugida writing system where every consonant carries an inherent vowel unless modified by a vowel sign or the virama (्).",
        "The script contains vowels, consonants, vowel signs (matras), numerals, and additional letters used in Sanskrit-derived and borrowed words.",
      ],

      bullets: [
        "Written from left to right",
        "Uses the Devanagari script",
        "Contains vowels and consonants",
        "Uses vowel signs (matras)",
      ],
    },

    alphabet: {
      vowels: {
        title: "Vowels (स्वर)",

        description:
          "Marathi vowels represent independent vowel sounds and form the foundation of pronunciation in the Devanagari writing system.",
      },

      consonants: {
        title: "Consonants (व्यंजन)",

        description:
          "Marathi consonants represent the primary sounds used to write native Marathi words and combine with vowel signs to form syllables.",
      },

      extensions: {
        title: "Additional Letters",

        description:
          "These additional letters include Nukta characters and common conjuncts used in borrowed words and traditional writing.",
      },

      numerals: {
        title: "Marathi Numerals",

        description:
          "Marathi has its own native numeral system written using the Devanagari script, although Arabic numerals are commonly used today.",
      },
    },

    cta: {
      title: "Ready to start typing in Marathi?",

      description:
        "Skip complicated keyboard layouts. Type naturally in English and TypeIndian instantly converts your words into Marathi.",

      button: "Open Marathi Typing Tool →",
    },

    faq: LEARN_MARATHI_FAQ,
  },

  alphabet: marathiAlphabet,

  labels: {
    alphabet: {
      title: "Learn Marathi Letters (Devanagari)",

      description:
        "These are the core Marathi letters. Click any letter to insert it directly into the typing editor above.",

      vowels: "Vowels (स्वर)",

      consonants: "Consonants (व्यंजन)",

      extensions: "Additional Letters",

      numerals: "Marathi Numerals",
    },
  },

  faq: MARATHI_FAQ,

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