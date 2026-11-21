import type { Language } from "@/types/language";

import { urduAlphabet } from "./alphabet";
import { LEARN_URDU_FAQ, URDU_FAQ } from "./faq";

export const urdu: Language = {
  id: "urdu",
  slug: "urdu",

  name: "Urdu",
  nativeName: "اردو",

  locale: "ur-IN",
  direction: "rtl",

  script: "Perso-Arabic (Nastaliq)",

  transliteration: {
    engine: "google",
    languageCode: "ur",
  },

  typing: {
    title: "Urdu Typing Tool",

    subtitle:
      "Type in English and convert instantly to اردو",

    intro:
      "Write Urdu naturally using English letters with TypeIndian's Urdu typing tool. Type words phonetically in Roman Urdu and convert them into اردو using the Perso-Arabic script. No keyboard installation, no login - a fast, convenient, and browser-based Urdu transliteration tool.",

    learnLink: {
      href: "/learn/urdu",

      label: "Learn Urdu Typing (Urdu Script)",

      description:
        "Understand Urdu letters, pronunciation, Nastaliq writing, and RTL typing basics.",
    },

    seo: {
      title: "Urdu Typing Tool (English to Urdu)",

      description:
        "Free English to Urdu typing tool. Type Urdu phonetically using English letters and instantly convert your text into اردو. Supports right-to-left Urdu typing without requiring an Urdu keyboard.",

      keywords: [
        "English to Urdu typing",
        "Urdu typing",
        "Urdu typing online",
        "Roman Urdu typing",
        "Urdu transliteration",
        "English to Urdu converter",
        "Urdu keyboard",
        "Urdu typing tool",
        "Nastaliq typing",
        "RTL Urdu typing",
        "TypeIndian Urdu",
      ],

      openGraph: {
        title: "Urdu Typing Tool - TypeIndian",

        description:
          "Type Urdu using English letters and instantly convert your words into اردو with RTL support.",

        locale: "ur_IN",
      },

      twitter: {
        title: "Urdu Typing Tool - TypeIndian",

        description:
          "Free English to Urdu phonetic typing with right-to-left support.",
      },
    },
  },

  learn: {
    meta: {
      title: "Learn Urdu Typing",

      description:
        "Learn how to type Urdu using English letters with this beginner-friendly guide. Explore Urdu, the Perso-Arabic script, Nastaliq, letters, pronunciation, and right-to-left typing.",

      cta: "Start Typing in Urdu →",
    },

    seo: {
      title:
        "Learn Urdu Typing (English to Urdu) – Beginner Guide",

      description:
        "Learn Urdu typing using English letters. Understand the Urdu alphabet, Perso-Arabic script, Nastaliq writing style, pronunciation, numerals, and RTL phonetic typing.",

      keywords: [
        "learn Urdu typing",
        "Urdu typing tutorial",
        "Urdu alphabet",
        "Urdu script",
        "Perso-Arabic script",
        "Nastaliq",
        "Roman Urdu typing",
        "Urdu vowels",
        "Urdu consonants",
        "English to Urdu typing guide",
        "Urdu typing for beginners",
        "RTL Urdu typing",
        "TypeIndian Urdu",
      ],

      openGraph: {
        title:
          "Learn Urdu Typing - Beginner Guide | TypeIndian",

        description:
          "Learn Urdu typing with a beginner-friendly guide covering the Urdu script, Nastaliq, alphabet, pronunciation, and RTL phonetic typing.",

        locale: "ur_IN",
      },

      twitter: {
        title: "Learn Urdu Typing - TypeIndian",

        description:
          "Learn to type Urdu naturally using English letters with our beginner-friendly guide.",
      },
    },

    about: {
      title: "About Urdu Language",

      paragraphs: [
        "Urdu (اردو) is an Indo-Aryan language with a long literary and cultural history in South Asia. It is one of the 22 Scheduled Languages recognized by the Constitution of India.",
        "Urdu developed in the Indian subcontinent through interaction among different linguistic traditions and has a vocabulary influenced by Sanskrit-derived Indo-Aryan languages as well as Persian, Arabic, and Turkic languages.",
        "Urdu is written from right to left using a Perso-Arabic script. Nastaliq is the distinctive calligraphic style traditionally associated with Urdu writing and gives the language its characteristic flowing appearance.",
      ],
    },

    script: {
      title: "Urdu Script",

      paragraphs: [
        "Urdu uses a Perso-Arabic writing system and is written from right to left. Unlike Devanagari and other Brahmic scripts, it is an alphabet rather than an abugida.",
        "Urdu letters can change their visual form depending on their position within a word. Short vowels are generally not written in ordinary text, while optional diacritics can be used to clarify pronunciation.",
      ],

      bullets: [
        "Written from right to left",
        "Uses a Perso-Arabic script",
        "Traditionally associated with Nastaliq typography",
        "Uses contextual letter forms",
        "Short vowels are usually omitted in ordinary writing",
      ],
    },

    alphabet: {
      vowels: {
        title: "Vowel Letters (حروفِ علت)",

        description:
          "Urdu does not represent short vowels as separate letters in the same way as Indic scripts. Letters such as ا, و, and ی can represent different long-vowel and semivowel sounds depending on context.",
      },

      consonants: {
        title: "Urdu Letters (حروف)",

        description:
          "Urdu uses letters derived from Arabic and Persian together with additional characters developed to represent sounds found in South Asian languages.",
      },

      extensions: {
        title: "Additional Urdu Letters",

        description:
          "These include letters such as پ, چ, ژ, ٹ, ڈ, ڑ, ں, and ھ, which are important for representing sounds and writing conventions used in Urdu.",
      },

      numerals: {
        title: "Urdu Numerals",

        description:
          "Urdu commonly uses Eastern Arabic numerals such as ۰, ۱, ۲, and ۳, although Western Arabic numerals are also widely used.",
      },
    },

    cta: {
      title: "Ready to start typing in Urdu?",

      description:
        "You don't need to memorize an Urdu keyboard layout. Type naturally using English letters and TypeIndian converts your phonetic input into Urdu script.",

      button: "Open Urdu Typing Tool →",
    },

    faq: LEARN_URDU_FAQ,
  },

  alphabet: urduAlphabet,

  labels: {
    alphabet: {
      title: "Learn Urdu Letters",

      description:
        "Explore common Urdu letters and numerals. Click a character to insert it directly into the typing editor.",

      vowels: "Vowel Letters (حروفِ علت)",

      consonants: "Urdu Letters (حروف)",

      extensions: "Additional Urdu Letters",

      numerals: "Urdu Numerals",
    },
  },

  faq: URDU_FAQ,

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