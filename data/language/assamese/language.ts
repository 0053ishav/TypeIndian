import type { Language } from "@/types/language";

import { assameseAlphabet } from "./alphabet";
import { ASSAMESE_FAQ, LEARN_ASSAMESE_FAQ } from "./faq";

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
      "Type in English and convert instantly to অসমীয়া",

    intro:
      "Write Assamese naturally using English letters with TypeIndian's Assamese typing tool. Simply type phonetically in English and instantly convert your words into the Assamese script. No keyboard installation, no login - fast, accurate, and browser-based Assamese transliteration directly in your browser.",

    learnLink: {
      href: "/learn/assamese",

      label: "Learn Assamese Typing (Assamese Script)",

      description:
        "Understand Assamese letters, pronunciation, script, and typing fundamentals.",
    },

    seo: {
      title: "Assamese Typing Tool (English to Assamese)",

      description:
        "Free English to Assamese typing tool. Type using English letters and instantly convert your text into the Assamese script. Fast, accurate phonetic transliteration with no login or installation required.",

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
          "Type in English and instantly write in Assamese using accurate phonetic transliteration.",

        locale: "as_IN",
      },

      twitter: {
        title: "Assamese Typing Tool - TypeIndian",

        description:
          "Fast, free, and browser-based English to Assamese typing.",
      },
    },
  },

  learn: {
    meta: {
      title: "Learn Assamese Typing",

      description:
        "Learn how to type Assamese using English letters with this beginner-friendly guide. Explore the Assamese language, Assamese script, vowels, consonants, pronunciation, and phonetic typing.",

      cta: "Start Typing in Assamese →",
    },

    seo: {
      title:
        "Learn Assamese Typing (English to Assamese) – Beginner Guide",

      description:
        "Learn Assamese typing with an easy beginner guide. Understand the Assamese script, vowels, consonants, numerals, and English to Assamese phonetic typing.",

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
          "Master Assamese typing with a beginner-friendly guide covering the Assamese script, pronunciation, alphabet, and phonetic typing.",

        locale: "as_IN",
      },

      twitter: {
        title: "Learn Assamese Typing - TypeIndian",

        description:
          "Learn to type Assamese naturally using English letters with our complete beginner guide.",
      },
    },

    about: {
      title: "About Assamese Language",

      paragraphs: [
        "Assamese (অসমীয়া) is the official language of Assam and one of the major Indo-Aryan languages spoken in northeastern India. More than 15 million people speak Assamese worldwide.",
        "Assamese has a literary tradition spanning several centuries and is closely associated with the works of Srimanta Sankardeva, whose writings and cultural contributions greatly influenced Assamese literature.",
        "Assamese is written using the Assamese (Eastern Nagari) script. Although it shares many characters with the Bengali script, Assamese has its own pronunciation, vocabulary, and distinctive letters such as 'ৰ' and 'ৱ'.",
      ],
    },

    script: {
      title: "Assamese Script",

      paragraphs: [
        "The Assamese script is an abugida writing system where every consonant carries an inherent vowel unless modified by a vowel sign or the virama (্).",
        "The script includes independent vowels, consonants, vowel signs (matras), numerals, and conjunct letters. It belongs to the Eastern Nagari writing tradition.",
      ],

      bullets: [
        "Written from left to right",
        "Uses the Assamese (Eastern Nagari) script",
        "Contains vowels and consonants",
        "Uses vowel signs (matras)",
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