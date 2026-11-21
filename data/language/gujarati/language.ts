import type { Language } from "@/types/language";

import { GUJARATI_FAQ, LEARN_GUJARATI_FAQ } from "./faq";
import { gujaratiAlphabet } from "./alphabet";

export const gujarati: Language = {
  id: "gujarati",
  slug: "gujarati",

  name: "Gujarati",
  nativeName: "ગુજરાતી",

  locale: "gu-IN",
  direction: "ltr",

  script: "Gujarati",

  transliteration: {
    engine: "google",
    languageCode: "gu",
  },

  typing: {
    title: "Gujarati Typing Tool",
    subtitle: "Type in English and convert instantly to ગુજરાતી",

    intro:
      "This Gujarati typing tool helps you write Gujarati using English letters. Simply type words phonetically in English and they instantly convert into ગુજરાતી (Gujarati script). No keyboard installation, no login - fast, accurate, and browser-based Gujarati transliteration.",

    learnLink: {
      href: "/learn/gujarati",
      label: "Learn Gujarati Typing (Gujarati Script)",
      description:
        "Understand Gujarati letters, sounds, and typing basics",
    },

    seo: {
      title: "Gujarati Typing Tool (English to Gujarati)",

      description:
        "Free English to Gujarati typing tool. Type in English and instantly write in Gujarati (ગુજરાતી script). No login. Accurate phonetic typing.",

      keywords: [
        "English to Gujarati typing",
        "Gujarati typing online",
        "Gujarati transliteration",
        "phonetic Gujarati typing",
        "TypeIndian Gujarati",
        "Gujarati typing",
        "Gujarati typing tool",
      ],

      openGraph: {
        title: "Gujarati Typing Tool - TypeIndian",

        description:
          "Type in English and write in Gujarati instantly. Free Gujarati typing tool with real-time conversion.",

        locale: "gu_IN",
      },

      twitter: {
        title: "Gujarati Typing Tool - TypeIndian",

        description:
          "English to Gujarati typing made easy. Free, fast, and browser-based.",
      },
    },
  },

  learn: {
    meta: {
      title: "Learn Gujarati Typing",

      description:
        "A beginner-friendly guide to typing Gujarati using English letters. Learn about the Gujarati language, Gujarati script, alphabets, pronunciation, and typing basics.",

      cta: "Start Typing in Gujarati →",
    },

    seo: {
      title:
        "Learn Gujarati Typing (English to Gujarati) – Beginner Guide",

      description:
        "Learn how to type Gujarati using English letters. Understand the Gujarati language, Gujarati script, vowels, consonants, numerals, and phonetic typing with examples.",

      keywords: [
        "learn Gujarati typing",
        "Gujarati typing tutorial",
        "Gujarati alphabet",
        "Gujarati vowels",
        "Gujarati consonants",
        "Gujarati script",
        "English to Gujarati typing guide",
        "Gujarati typing for beginners",
        "TypeIndian Gujarati",
      ],

      openGraph: {
        title: "Learn Gujarati Typing - Beginner Guide | TypeIndian",

        description:
          "Learn Gujarati typing with a beginner-friendly guide covering the Gujarati script, alphabets, pronunciation, and phonetic typing.",

        locale: "gu_IN",
      },

      twitter: {
        title: "Learn Gujarati Typing - TypeIndian",

        description:
          "Master Gujarati typing using English letters with our complete beginner guide.",
      },
    },

    about: {
      title: "About Gujarati Language",

      paragraphs: [
        "Gujarati (ગુજરાતી) is an Indo-Aryan language spoken primarily in the Indian state of Gujarat and by millions of people worldwide. It is one of the 22 Scheduled Languages of India.",
        "Gujarati evolved from Old Gujarati and shares historical roots with Sanskrit through the Prakrit languages. It has a rich literary tradition spanning centuries.",
        "Gujarati is written using the Gujarati script, a writing system derived from Devanagari but distinguished by the absence of the horizontal headline (Shirorekha).",
      ],
    },

    script: {
      title: "Gujarati Script",

      paragraphs: [
        "The Gujarati script is an abugida writing system derived from Devanagari and used primarily for writing the Gujarati language.",
        "Gujarati is written from left to right and consists of vowels, consonants, vowel signs (matras), numerals, and additional symbols. Unlike Devanagari, Gujarati letters do not have a continuous horizontal headline.",
      ],

      bullets: [
        "Written from left to right",
        "Uses the Gujarati script",
        "Contains vowels and consonants",
        "Uses vowel signs (matras)",
      ],
    },

    alphabet: {
      vowels: {
        title: "Vowels (સ્વર)",

        description:
          "Gujarati vowels represent independent vowel sounds and form the foundation of pronunciation in the Gujarati writing system.",
      },

      consonants: {
        title: "Consonants (વ્યંજન)",

        description:
          "Gujarati consonants represent the primary sounds used to write native Gujarati words.",
      },

      extensions: {
        title: "Additional Letters",

        description:
          "These additional letters are mainly used for sounds borrowed from Persian, Arabic, English, and Sanskrit loanwords.",
      },

      numerals: {
        title: "Gujarati Numerals (અંકો)",

        description:
          "Gujarati has its own native numeral (અંકો) system written using the Gujarati script.",
      },
    },

    cta: {
      title: "Ready to start typing in Gujarati?",

      description:
        "You don't need to learn keyboard layouts. Simply type naturally in English and TypeIndian instantly converts your words into Gujarati.",

      button: "Open Gujarati Typing Tool →",
    },

    faq: LEARN_GUJARATI_FAQ,
  },

  alphabet: gujaratiAlphabet,

  labels: {
    alphabet: {
      title: "Learn Gujarati Letters",

      description:
        "These are the core Gujarati letters. Click any letter to insert it directly into the typing editor above.",

      vowels: "Vowels (સ્વર)",

      consonants: "Consonants (વ્યંજન)",

      extensions: "Additional Letters",

      numerals: "Gujarati Numerals (અંકો)",
    },
  },

  faq: GUJARATI_FAQ,

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