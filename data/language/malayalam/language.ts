import type { Language } from "@/types/language";

import { malayalamAlphabet } from "./alphabet";
import {
  LEARN_MALAYALAM_FAQ,
  MALAYALAM_FAQ,
} from "./faq";

export const malayalam: Language = {
  id: "malayalam",
  slug: "malayalam",

  name: "Malayalam",
  nativeName: "മലയാളം",

  locale: "ml-IN",
  direction: "ltr",

  script: "Malayalam",

  transliteration: {
    engine: "google",
    languageCode: "ml",
  },

  typing: {
    title: "Malayalam Typing Tool",

    subtitle:
      "Type in English and convert instantly to മലയാളം",

    intro:
      "Write Malayalam naturally using English letters with TypeIndian's Malayalam typing tool. Simply type phonetically in English and instantly convert your words into the Malayalam script. No keyboard installation, no login - fast, accurate, and browser-based Malayalam transliteration directly in your browser.",

    learnLink: {
      href: "/learn/malayalam",

      label: "Learn Malayalam Typing (Malayalam Script)",

      description:
        "Understand Malayalam letters, pronunciation, script, and typing fundamentals.",
    },

    seo: {
      title: "Malayalam Typing Tool (English to Malayalam)",

      description:
        "Free English to Malayalam typing tool. Type using English letters and instantly convert your text into the Malayalam script. Fast, accurate phonetic transliteration with no login or installation required.",

      keywords: [
        "English to Malayalam typing",
        "Malayalam typing",
        "Malayalam typing online",
        "Malayalam transliteration",
        "phonetic Malayalam typing",
        "Malayalam keyboard",
        "Malayalam typing tool",
        "English to Malayalam converter",
        "TypeIndian Malayalam",
      ],

      openGraph: {
        title: "Malayalam Typing Tool - TypeIndian",

        description:
          "Type in English and instantly write in Malayalam using accurate phonetic transliteration.",

        locale: "ml_IN",
      },

      twitter: {
        title: "Malayalam Typing Tool - TypeIndian",

        description:
          "Fast, free, and browser-based English to Malayalam typing.",
      },
    },
  },

  learn: {
    meta: {
      title: "Learn Malayalam Typing",

      description:
        "Learn how to type Malayalam using English letters with this beginner-friendly guide. Explore the Malayalam language, Malayalam script, vowels, consonants, pronunciation, and phonetic typing.",

      cta: "Start Typing in Malayalam →",
    },

    seo: {
      title:
        "Learn Malayalam Typing (English to Malayalam) – Beginner Guide",

      description:
        "Learn Malayalam typing with an easy beginner guide. Understand the Malayalam script, vowels, consonants, numerals, and English to Malayalam phonetic typing.",

      keywords: [
        "learn Malayalam typing",
        "Malayalam typing tutorial",
        "Malayalam alphabet",
        "Malayalam script",
        "Malayalam vowels",
        "Malayalam consonants",
        "English to Malayalam typing guide",
        "Malayalam typing for beginners",
        "TypeIndian Malayalam",
      ],

      openGraph: {
        title:
          "Learn Malayalam Typing - Beginner Guide | TypeIndian",

        description:
          "Master Malayalam typing with a beginner-friendly guide covering the Malayalam script, pronunciation, alphabet, and phonetic typing.",

        locale: "ml_IN",
      },

      twitter: {
        title: "Learn Malayalam Typing - TypeIndian",

        description:
          "Learn to type Malayalam naturally using English letters with our complete beginner guide.",
      },
    },

    about: {
      title: "About Malayalam Language",

      paragraphs: [
        "Malayalam (മലയാളം) is the official language of Kerala and is also spoken in Lakshadweep and the Mahé region of Puducherry. More than 38 million people speak Malayalam worldwide.",
        "Malayalam belongs to the Dravidian language family and has a literary tradition spanning more than a thousand years. It is recognized as one of the Classical Languages of India.",
        "Malayalam is written using the Malayalam script, which is known for its rounded letterforms and unique sounds such as 'ഴ', making it one of the most distinctive writing systems in India.",
      ],
    },

    script: {
      title: "Malayalam Script",

      paragraphs: [
        "The Malayalam script is an abugida writing system where every consonant carries an inherent vowel unless modified by a vowel sign or the virama (്).",
        "The script contains independent vowels, consonants, vowel signs (matras), numerals, and conjunct letters. Its rounded appearance developed from centuries of writing on palm leaves.",
      ],

      bullets: [
        "Written from left to right",
        "Uses the Malayalam script",
        "Contains vowels and consonants",
        "Uses vowel signs (matras)",
      ],
    },

    alphabet: {
      vowels: {
        title: "Vowels (സ്വരങ്ങൾ)",

        description:
          "Malayalam vowels represent independent vowel sounds and form the foundation of pronunciation in the Malayalam writing system.",
      },

      consonants: {
        title: "Consonants (വ്യഞ്ജനങ്ങൾ)",

        description:
          "Malayalam consonants represent the primary sounds used to write native Malayalam words and combine with vowel signs to form syllables.",
      },

      extensions: {
        title: "Additional Letters",

        description:
          "These additional characters include common conjunct letters used in Sanskrit-derived words and traditional Malayalam writing.",
      },

      numerals: {
        title: "Malayalam Numerals",

        description:
          "Malayalam has its own traditional numeral system, although Arabic numerals are commonly used in everyday writing.",
      },
    },

    cta: {
      title: "Ready to start typing in Malayalam?",

      description:
        "Skip complicated keyboard layouts. Type naturally in English and TypeIndian instantly converts your words into the Malayalam script.",

      button: "Open Malayalam Typing Tool →",
    },

    faq: LEARN_MALAYALAM_FAQ,
  },

  alphabet: malayalamAlphabet,

  labels: {
    alphabet: {
      title: "Learn Malayalam Letters",

      description:
        "These are the core Malayalam letters. Click any letter to insert it directly into the typing editor above.",

      vowels: "Vowels (സ്വരങ്ങൾ)",

      consonants: "Consonants (വ്യഞ്ജനങ്ങൾ)",

      extensions: "Additional Letters",

      numerals: "Malayalam Numerals",
    },
  },

  faq: MALAYALAM_FAQ,

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