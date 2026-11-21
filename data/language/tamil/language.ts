import type { Language } from "@/types/language";
import { LEARN_TAMIL_FAQ, TAMIL_FAQ } from "./faq";
import { tamilAlphabet } from "./alphabet";

export const tamil: Language = {
  id: "tamil",
  slug: "tamil",

  name: "Tamil",
  nativeName: "தமிழ்",

  locale: "ta-IN",
  direction: "ltr",

  script: "Tamil",

  transliteration: {
    engine: "google",
    languageCode: "ta",
  },

  typing: {
    title: "Tamil Typing Tool",

    subtitle:
      "Type in English and convert instantly to தமிழ்",

    intro:
      "Write Tamil naturally using English letters with TypeIndian's Tamil typing tool. Simply type phonetically in English and instantly convert your words into the Tamil script. No keyboard installation, no login - fast and accurate Tamil transliteration directly in your browser.",

    learnLink: {
      href: "/learn/tamil",

      label: "Learn Tamil Typing (Tamil Script)",

      description:
        "Explore Tamil letters, pronunciation, script, and typing fundamentals.",
    },

    seo: {
      title: "Tamil Typing Tool (English to Tamil)",

      description:
        "Free English to Tamil typing tool. Type using English letters and instantly convert your text into Tamil script. Fast, accurate phonetic transliteration with no login or installation required.",

      keywords: [
        "English to Tamil typing",
        "Translate English to Tamil typing",
        "Tamil typing",
        "Tamil typing Keyboard",
        "Tamil typing online",
        "Tamil transliteration",
        "phonetic Tamil typing",
        "Tamil typing tool",
        "Tamil keyboard online",
        "English to Tamil converter",
        "Tamil script typing",
        "TypeIndian Tamil",
        "Google Input Tools",
        "Englist to Tamil Learning",
        "Englist to Tamil Language",
      ],

      openGraph: {
        title: "Tamil Typing Tool - TypeIndian",

        description:
          "Type in English and instantly write in Tamil using accurate phonetic transliteration.",

        locale: "ta_IN",
      },

      twitter: {
        title: "Tamil Typing Tool - TypeIndian",

        description:
          "Fast, free, and browser-based English to Tamil typing.",
      },
    },
  },

  learn: {
    meta: {
      title: "Learn Tamil Typing",

      description:
        "Learn how to type Tamil using English letters with this beginner-friendly guide. Explore the Tamil language, Tamil script, vowels, consonants, pronunciation, and phonetic typing.",

      cta: "Start Typing in Tamil →",
    },

    seo: {
      title: "Learn Tamil Typing (English to Tamil) – Beginner Guide",

      description:
        "Learn Tamil typing with an easy beginner guide. Understand the Tamil script, vowels, consonants, special letters, numerals, and English to Tamil phonetic typing.",

      keywords: [
        "learn Tamil typing",
        "Tamil typing tutorial",
        "Tamil alphabet",
        "Tamil script",
        "Tamil vowels",
        "Tamil consonants",
        "English to Tamil typing guide",
        "Tamil typing for beginners",
        "Tamil letters",
        "TypeIndian Tamil",
      ],

      openGraph: {
        title: "Learn Tamil Typing - Beginner Guide | TypeIndian",

        description:
          "Master Tamil typing with a beginner-friendly guide covering the Tamil script, pronunciation, alphabet, and phonetic typing.",

        locale: "ta_IN",
      },

      twitter: {
        title: "Learn Tamil Typing - TypeIndian",

        description:
          "Learn to type Tamil naturally using English letters with our complete beginner guide.",
      },
    },

    about: {
      title: "About Tamil Language",

      paragraphs: [
        "Tamil (தமிழ்) is one of the world's oldest continuously spoken and written languages, with a literary tradition spanning more than two thousand years. It is recognized as one of the Classical Languages of India.",
        "Tamil belongs to the Dravidian language family and is spoken by millions of people across Tamil Nadu, Puducherry, Sri Lanka, Singapore, Malaysia, and Tamil communities around the world.",
        "Tamil is written using the Tamil script, an ancient Brahmic writing system with its own unique letters and writing conventions. The script is known for distinctive characters such as ழ (zha), one of the most recognizable sounds in the language.",
      ],
    },

    script: {
      title: "Tamil Script",

      paragraphs: [
        "The Tamil script is an abugida writing system derived from the ancient Brahmi script. Every consonant carries an inherent vowel unless modified by a vowel sign or the Pulli (்).",
        "Modern Tamil uses 12 independent vowels, 18 native consonants, one special character (ஆய்த எழுத்து), and several Grantha letters for writing Sanskrit loanwords and foreign names.",
      ],

      bullets: [
        "Written from left to right",
        "Uses the Tamil script",
        "Contains vowels, consonants, and Grantha letters",
        "Uses vowel signs (matras) and the Pulli (்)",
      ],
    },

    alphabet: {
      vowels: {
        title: "Vowels (உயிரெழுத்துகள்)",

        description:
          "Tamil vowels represent independent vowel sounds and form the foundation of pronunciation in the Tamil writing system.",
      },

      consonants: {
        title: "Consonants (மெய்யெழுத்துகள்)",

        description:
          "Tamil consonants represent the primary sounds used to write native Tamil words and combine with vowel signs to form syllables.",
      },

      extensions: {
        title: "Additional Letters",

        description:
          "These letters include the Aytham character and Grantha letters used for Sanskrit loanwords, foreign names, and modern borrowed sounds.",
      },

      numerals: {
        title: "Tamil Numerals",

        description:
          "Tamil has its own traditional numeral system, although Arabic numerals are commonly used in everyday writing today.",
      },
    },

    cta: {
      title: "Ready to start typing in Tamil?",

      description:
        "Skip complicated keyboard layouts. Type naturally in English and TypeIndian instantly converts your words into the Tamil script.",

      button: "Open Tamil Typing Tool →",
    },

    faq: LEARN_TAMIL_FAQ,
  },
  alphabet: tamilAlphabet,

  labels: {
    alphabet: {
      title: "Learn Tamil Letters",

      description:
        "These are the core Tamil letters. Click any letter to insert it directly into the typing editor above.",

      vowels: "Vowels (உயிரெழுத்துகள்)",

      consonants: "Consonants (மெய்யெழுத்துகள்)",

      extensions: "Additional Letters",

      numerals: "Tamil Numerals",
    },
  },

  faq: TAMIL_FAQ,

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