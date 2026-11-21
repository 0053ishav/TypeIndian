import type { Language } from "@/types/language";

import { panjabiAlphabet } from "./alphabet";
import { LEARN_PANJABI_FAQ, PANJABI_FAQ } from "./faq";

export const panjabi: Language = {
  id: "panjabi",
  slug: "panjabi",

  name: "Panjabi",
  nativeName: "ਪੰਜਾਬੀ",

  locale: "pa-IN",
  direction: "ltr",

  script: "Gurmukhi",

  transliteration: {
    engine: "google",
    languageCode: "pa",
  },

  typing: {
    title: "Panjabi Typing Tool",

    subtitle:
      "Type in English and convert instantly to ਪੰਜਾਬੀ",

    intro:
      "This Panjabi typing tool lets you write Panjabi (Punjabi) using English letters. Type naturally in English and get instant output in ਪੰਜਾਬੀ (Gurmukhi script). No downloads, no login - a fast and accurate English to Panjabi transliteration tool.",

    learnLink: {
      href: "/learn/panjabi",

      label: "Learn Panjabi Typing (Gurmukhi)",

      description:
        "Understand Panjabi letters, sounds, and typing basic",
    },


    seo: {
      title: "Panjabi Typing Tool (English to Panjabi)",

      description:
        "Free English to Panjabi (Punjabi) typing tool. Type in English and instantly write in Panjabi (Punjabi) using the Gurmukhi script. No login. Fast, accurate, and browser-based transliteration.",

      keywords: [
        "English to Panjabi typing",
        "English to Punjabi typing",
        "Panjabi typing",
        "Punjabi typing",
        "Panjabi typing online",
        "Punjabi typing online",
        "Panjabi transliteration",
        "Punjabi transliteration",
        "phonetic Panjabi typing",
        "phonetic Punjabi typing",
        "Gurmukhi typing tool",
        "Punjabi keyboard",
        "Panjabi keyboard",
        "TypeIndian Panjabi",
      ],

      openGraph: {
        title: "Panjabi Typing Tool - TypeIndian",

        description:
          "Type in English and write in Panjabi (Punjabi) instantly. Free Gurmukhi typing tool with real-time transliteration.",

        locale: "pa_IN",
      },

      twitter: {
        title: "Panjabi Typing Tool - TypeIndian",

        description:
          "English to Panjabi (Punjabi) typing made simple. Free, fast, and browser-based.",
      },
    },
  },

  learn: {
    meta: {
      title: "Learn Panjabi Typing",

      description:
        "A beginner-friendly guide to typing Panjabi (Punjabi) using English letters. Learn about the Panjabi language, Gurmukhi script, alphabets, pronunciation, and typing basics.",

      cta: "Start Typing in Panjabi →",
    },

    seo: {
      title: "Learn Panjabi Typing (English to Gurmukhi) – Beginner Guide",

      description:
        "Learn how to type Panjabi (Punjabi) using English letters. Understand the Panjabi language, Gurmukhi script, vowels, consonants, numerals, and phonetic typing with examples.",

      keywords: [
        "learn Panjabi typing",
        "learn Punjabi typing",
        "Panjabi typing tutorial",
        "Punjabi typing tutorial",
        "English to Panjabi typing guide",
        "English to Punjabi typing guide",
        "Panjabi alphabet",
        "Punjabi alphabet",
        "Gurmukhi alphabet",
        "Gurmukhi script",
        "Panjabi vowels",
        "Punjabi vowels",
        "Panjabi consonants",
        "Punjabi consonants",
        "Panjabi typing for beginners",
        "Punjabi typing for beginners",
        "TypeIndian Panjabi",
      ],

      openGraph: {
        title: "Learn Panjabi Typing - Beginner Guide | TypeIndian",

        description:
          "Learn Panjabi (Punjabi) typing with a beginner-friendly guide covering the Gurmukhi script, alphabet, pronunciation, and phonetic typing.",

        locale: "pa_IN",
      },

      twitter: {
        title: "Learn Panjabi Typing - TypeIndian",

        description:
          "Master Panjabi (Punjabi) typing using English letters with our complete beginner guide.",
      },
    },

     about: {
    title: "About Panjabi Language",

    paragraphs: [
      "Panjabi (ਪੰਜਾਬੀ) is the official language of Panjab in India and is also widely spoken across Pakistan and by Panjabi communities around the world. More than 130 million people speak Panjabi globally.",
      "Panjabi belongs to the Indo-Aryan language family and is unique among major Indo-Aryan languages because it uses lexical tone to distinguish words.",
      "What we speak is the Panjabi language. What we write is the Gurmukhi script, which is the standard script used for Panjabi in India.",
    ],
  },

  script: {
    title: "Gurmukhi Script",

    paragraphs: [
      "The Gurmukhi script is an abugida writing system developed from the historic Landa script. It is written from left to right and is used primarily for writing Panjabi in India.",
      "Gurmukhi consists of vowel holders, consonants, vowel signs (matras), and additional letters used for sounds borrowed from Persian, Arabic, and modern vocabulary.",
    ],

    bullets: [
      "Written from left to right",
      "Uses Gurmukhi script",
      "Contains vowel holders and consonants",
      "Uses vowel signs (matras)",
    ],
  },

  alphabet: {
    vowels: {
      title: "Vowels (ਸਵਰ)",
      description:
        "Panjabi vowels form the foundation of pronunciation in the Gurmukhi writing system.",
    },

    consonants: {
      title: "Consonants (ਵਿਆਂਜਨ)",
      description:
        "The primary Gurmukhi consonants are used to write most native Panjabi words.",
    },

    extensions: {
      title: "Additional Letters (ਵਿਸ਼ੇਸ਼ ਅੱਖਰ)",
      description:
        "These letters are mainly used for sounds borrowed from Persian, Arabic, and modern loanwords.",
    },

    numerals: {
      title: "Gurmukhi (Panjabi) Numerals",
      description:
        "Gurmukhi has its own native numeral system used for writing numbers.",
    },
  },

  cta: {
    title: "Ready to start typing in Panjabi?",

    description:
      "You don't need to memorize keyboard layouts. Simply type naturally in English and TypeIndian converts your words into Gurmukhi instantly.",

    button: "Open Panjabi Typing Tool →",
  },

  
    faq: LEARN_PANJABI_FAQ,
  },
  alphabet: panjabiAlphabet,

  labels: {
    alphabet: {
      title: "Learn Panjabi Letters (Gurmukhi)",

      description:
        "These are the core Panjabi (Gurmukhi) letters. Click any letter to insert it directly into the typing editor above.",

      vowels: "Vowels (ਸਵਰ)",

      consonants: "Consonants (ਵਿਆਂਜਨ)",

      extensions: "Additional Letters (ਵਿਸ਼ੇਸ਼ ਅੱਖਰ)",

      numerals: "Gurmukhi (Panjabi) Numerals",
    },
  },

  faq: PANJABI_FAQ,

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