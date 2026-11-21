import type { Language } from "@/types/language";

import { bengaliAlphabet } from "./alphabet";
import { BENGALI_FAQ, LEARN_BENGALI_FAQ } from "./faq";

export const bengali: Language = {
  id: "bengali",
  slug: "bengali",

  name: "Bengali",
  nativeName: "বাংলা",

  locale: "bn-IN",
  direction: "ltr",

  script: "Bengali",

  transliteration: {
    engine: "google",
    languageCode: "bn",
  },

  typing: {
    title: "Bengali Typing Tool",

    subtitle:
      "Type in English and convert instantly to বাংলা",

    intro:
      "Write Bengali naturally using English letters with TypeIndian's Bengali typing tool. Simply type phonetically in English and instantly convert your words into the Bengali script. No keyboard installation, no login - fast, accurate, and browser-based Bengali transliteration directly in your browser.",

    learnLink: {
      href: "/learn/bengali",

      label: "Learn Bengali Typing (Bengali Script)",

      description:
        "Understand Bengali letters, pronunciation, script, and typing fundamentals.",
    },

    seo: {
      title: "Bengali Typing Tool (English to Bengali)",

      description:
        "Free English to Bengali typing tool. Type using English letters and instantly convert your text into the Bengali script. Fast, accurate phonetic transliteration with no login or installation required.",

      keywords: [
        "English to Bengali typing",
        "Bengali typing",
        "Bangla typing",
        "Bengali typing online",
        "Bangla typing online",
        "Bengali transliteration",
        "Bangla transliteration",
        "phonetic Bengali typing",
        "Bengali keyboard",
        "Bangla keyboard",
        "TypeIndian Bengali",
      ],

      openGraph: {
        title: "Bengali Typing Tool - TypeIndian",

        description:
          "Type in English and instantly write in Bengali using accurate phonetic transliteration.",

        locale: "bn_IN",
      },

      twitter: {
        title: "Bengali Typing Tool - TypeIndian",

        description:
          "Fast, free, and browser-based English to Bengali typing.",
      },
    },
  },

  learn: {
    meta: {
      title: "Learn Bengali Typing",

      description:
        "Learn how to type Bengali using English letters with this beginner-friendly guide. Explore the Bengali language, Bengali script, vowels, consonants, pronunciation, and phonetic typing.",

      cta: "Start Typing in Bengali →",
    },

    seo: {
      title: "Learn Bengali Typing (English to Bengali) – Beginner Guide",

      description:
        "Learn Bengali typing with an easy beginner guide. Understand the Bengali script, vowels, consonants, conjunct letters, numerals, and English to Bengali phonetic typing.",

      keywords: [
        "learn Bengali typing",
        "learn Bangla typing",
        "Bengali typing tutorial",
        "Bangla typing tutorial",
        "Bengali alphabet",
        "Bangla alphabet",
        "Bengali script",
        "Bengali vowels",
        "Bengali consonants",
        "Bengali typing for beginners",
        "TypeIndian Bengali",
      ],

      openGraph: {
        title: "Learn Bengali Typing - Beginner Guide | TypeIndian",

        description:
          "Master Bengali typing with a beginner-friendly guide covering the Bengali script, pronunciation, alphabet, and phonetic typing.",

        locale: "bn_IN",
      },

      twitter: {
        title: "Learn Bengali Typing - TypeIndian",

        description:
          "Learn to type Bengali naturally using English letters with our complete beginner guide.",
      },
    },

    about: {
      title: "About Bengali Language",

      paragraphs: [
        "Bengali (বাংলা) is one of the most widely spoken languages in the world and is the official language of the Indian state of West Bengal as well as the national language of Bangladesh. More than 250 million people speak Bengali globally.",
        "Bengali belongs to the Indo-Aryan language family and has a rich literary tradition spanning centuries. It is the language of Nobel Prize-winning poet Rabindranath Tagore and many other renowned writers.",
        "Bengali is written using the Bengali script, a Brahmic writing system recognized for its elegant letterforms and extensive use of conjunct consonants (যুক্তাক্ষর).",
      ],
    },

    script: {
      title: "Bengali Script",

      paragraphs: [
        "The Bengali script is an abugida writing system in which every consonant contains an inherent vowel unless modified by a vowel sign or the Hasanta (্).",
        "The script includes independent vowels, consonants, vowel signs (matras), numerals, and conjunct letters that combine multiple consonants into a single written form.",
      ],

      bullets: [
        "Written from left to right",
        "Uses the Bengali script",
        "Contains vowels and consonants",
        "Uses vowel signs (matras) and conjunct letters",
      ],
    },

    alphabet: {
      vowels: {
        title: "Vowels (স্বরবর্ণ)",

        description:
          "Bengali vowels represent independent vowel sounds and form the foundation of pronunciation in the Bengali writing system.",
      },

      consonants: {
        title: "Consonants (ব্যঞ্জনবর্ণ)",

        description:
          "Bengali consonants represent the primary sounds used to write native Bengali words and combine with vowel signs to form syllables.",
      },

      extensions: {
        title: "Additional Letters",

        description:
          "These additional letters are mainly used for traditional Bengali spelling and Sanskrit-derived words.",
      },

      numerals: {
        title: "Bengali Numerals",

        description:
          "Bengali has its own native numeral system, although Arabic numerals are commonly used in everyday writing.",
      },
    },

    cta: {
      title: "Ready to start typing in Bengali?",

      description:
        "Skip complicated keyboard layouts. Type naturally in English and TypeIndian instantly converts your words into the Bengali script.",

      button: "Open Bengali Typing Tool →",
    },

    faq: LEARN_BENGALI_FAQ,
  },

  alphabet: bengaliAlphabet,

  labels: {
    alphabet: {
      title: "Learn Bengali Letters",

      description:
        "These are the core Bengali letters. Click any letter to insert it directly into the typing editor above.",

      vowels: "Vowels (স্বরবর্ণ)",

      consonants: "Consonants (ব্যঞ্জনবর্ণ)",

      extensions: "Additional Letters",

      numerals: "Bengali Numerals",
    },
  },

  faq: BENGALI_FAQ,

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