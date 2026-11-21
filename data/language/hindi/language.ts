import type { Language } from "@/types/language";

import { HINDI_FAQ, LEARN_HINDI_FAQ } from "./faq";
import { hindiAlphabet } from "./alphabet";

export const hindi: Language = {
  id: "hindi",
  slug: "hindi",

  name: "Hindi",
  nativeName: "हिन्दी",

  locale: "hi-IN",
  direction: "ltr",

  script: "Devanagari",

  transliteration: {
    engine: "google",
    languageCode: "hi",
  },

  typing: {
    title: "Hindi Typing Tool",
    subtitle: "Type in English and convert instantly to हिन्दी",

    intro:
      "This Hindi typing tool helps you write Hindi using English letters. Simply type words phonetically in English and they instantly convert into हिन्दी (Devanagari script). No keyboard installation, no login - fast, accurate, and browser-based Hindi transliteration.",

    learnLink: {
      href: "/learn/hindi",
      label: "Learn Hindi Typing (Devanagari)",
      description:
        "Understand Hindi letters, sounds, and typing basics",
    },

    seo: {
      title: "Hindi Typing Tool (English to Hindi)",

      description:
        "Free English to Hindi typing tool. Type in English and instantly write in Hindi (Devanagari script). No login. Accurate phonetic typing.",

      keywords: [
        "English to Hindi typing",
        "Hindi typing online",
        "Hindi transliteration",
        "phonetic Hindi typing",
        "TypeIndian Hindi",
        "Hindi typing",
        "Devanagari typing tool",
      ],

      openGraph: {
        title: "Hindi Typing Tool - TypeIndian",

        description:
          "Type in English and write in Hindi instantly. Free Hindi (Devanagari) typing tool with real-time conversion.",

        locale: "hi_IN",
      },

      twitter: {
        title: "Hindi Typing Tool - TypeIndian",

        description:
          "English to Hindi typing made easy. Free, fast, and browser-based.",
      },
    },
  },

  learn: {
    meta: {
      title: "Learn Hindi Typing",

      description:
        "A beginner-friendly guide to typing Hindi using English letters. Learn about the Hindi language, Devanagari script, alphabets, pronunciation, and typing basics.",

      cta: "Start Typing in Hindi →",
    },

    seo: {
      title: "Learn Hindi Typing (English to Devanagari) – Beginner Guide",

      description:
        "Learn how to type Hindi using English letters. Understand the Hindi language, Devanagari script, vowels, consonants, numerals, and phonetic typing with examples.",

      keywords: [
        "learn Hindi typing",
        "Hindi typing tutorial",
        "Hindi alphabet",
        "Devanagari alphabet",
        "Hindi vowels",
        "Hindi consonants",
        "Hindi script",
        "English to Hindi typing guide",
        "Hindi typing for beginners",
        "TypeIndian Hindi",
      ],

      openGraph: {
        title: "Learn Hindi Typing - Beginner Guide | TypeIndian",

        description:
          "Learn Hindi typing with a beginner-friendly guide covering the Devanagari script, alphabets, pronunciation, and phonetic typing.",

        locale: "hi_IN",
      },

      twitter: {
        title: "Learn Hindi Typing - TypeIndian",

        description:
          "Master Hindi typing using English letters with our complete beginner guide.",
      },
    },


    about: {
      title: "About Hindi Language",

      paragraphs: [
        "Hindi (हिन्दी) is one of the most widely spoken languages in India and serves as one of the official languages of the Government of India. More than 600 million people speak Hindi worldwide.",
        "Hindi belongs to the Indo-Aryan language family and evolved from Sanskrit through the Prakrit and Apabhraṃśa languages.",
        "What we speak is the Hindi language. What we write is the Devanagari script, which is used for Hindi as well as several other Indian languages.",
      ],
    },

    script: {
      title: "Devanagari Script",

      paragraphs: [
        "The Devanagari (देवनागरी) script is an abugida writing system used for Hindi, Sanskrit, Marathi, Nepali, and several other Indian languages.",
        "Devanagari is written from left to right and is recognized by its distinctive horizontal headline (Shirorekha). It contains vowels, consonants, vowel signs (matras), and additional symbols.",
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
          "Hindi vowels represent independent vowel sounds and form the foundation of pronunciation in the Devanagari writing system.",
      },

      consonants: {
        title: "Consonants (व्यंजन)",

        description:
          "Hindi consonants represent the primary sounds used to write native Hindi words.",
      },

      extensions: {
        title: "Additional Letters (नुक्ता)",

        description:
          "These additional letters are mainly used for sounds borrowed from Persian, Arabic, and English in modern Hindi.",
      },

      numerals: {
        title: "Devanagari (Hindi) Numerals",

        description:
          "Hindi has its own native numeral system written using the Devanagari script.",
      },
    },

    cta: {
      title: "Ready to start typing in Hindi?",

      description:
        "You don't need to learn keyboard layouts. Simply type naturally in English and TypeIndian instantly converts your words into Devanagari.",

      button: "Open Hindi Typing Tool →",
    },

    faq: LEARN_HINDI_FAQ,
  },

  alphabet: hindiAlphabet,

  labels: {
    alphabet: {
      title: "Learn Hindi Letters (Devanagari)",

      description:
        "These are the core Hindi (Devanagari) letters. Click any letter to insert it directly into the typing editor above.",

      vowels: "Vowels (स्वर)",

      consonants: "Consonants (व्यंजन)",

      extensions: "Additional Letters (नुक्ता)",

      numerals: "Devanagari (Hindi) Numerals",
    },
  },

  faq: HINDI_FAQ,

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