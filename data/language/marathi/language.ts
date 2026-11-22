import type { Language } from "@/types/language";

import { marathiAlphabet } from "./alphabet";
import { LEARN_MARATHI_FAQ, MARATHI_FAQ } from "./faq";
import { marathiResearch } from "./research";

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

    curriculum: {
      research: marathiResearch,
      history: {
        resourceIds: ["MAR-R02", "MAR-R06"],
        title: "Marathi Language and Its Writing History",
        paragraphs: [
          "Marathi is an Indo-Aryan language with a long regional and literary history. Historical accounts connect its development with Middle Indo-Aryan varieties, including Maharashtri Prakrit, and later regional forms. These stages form a complex history rather than a simple one-step transformation.",
          "Modern Marathi is conventionally written in Balbodh, the Marathi form of Devanagari. Modi was also historically used for Marathi, especially in administrative records. Modi is important historical context, but it is not the script used by this modern typing guide.",
          "Marathi is the official language of Maharashtra under the Maharashtra Official Languages Act, which identifies Marathi in Devanagari script.",
        ],
      },
      writingSystem: {
        resourceIds: ["MAR-R01", "MAR-R04", "MAR-R05", "MAR-P01"],
        title: "How Balbodh Devanagari Works",
        paragraphs: [
          "Balbodh is the standard modern form of Devanagari used for Marathi. It is written from left to right and is an abugida: a consonant normally includes an inherent vowel unless a dependent vowel sign changes it or the virama (्) suppresses it.",
          "An independent vowel is used when a syllable begins with a vowel. When a vowel follows a consonant, a dependent sign (मात्रा) is generally used. For example, क has its inherent vowel, का uses ा, and कि uses ि.",
          "Devanagari is shaped by orthographic syllables (aksharas). Consonant sequences may form half-forms or conjunct glyphs. The visible placement of a vowel sign may differ from its logical Unicode order: ि is encoded after its consonant but displayed to its left.",
          "Marathi also has a historical association with Modi script. Modi and modern Balbodh Devanagari are distinct writing traditions; this guide covers modern Balbodh.",
        ],
        bullets: ["Independent vowel: आ", "Consonant with inherent vowel: क", "Dependent vowel sign: का", "Pre-base vowel sign: कि", "Consonant with virama: क्", "Conjunct example: क्ष"],
      },
      consonantClassification: {
        resourceIds: ["MAR-P01", "MAR-P02", "MAR-R01"],
        title: "Marathi Consonants and Their Groups",
        paragraphs: [
          "The traditional consonant chart groups stops by place of articulation: velar, palatal, retroflex, dental, and bilabial. Within each group, the familiar sequence contrasts voiceless, aspirated, voiced, and voiced-aspirated forms. This is a useful orthographic and pronunciation framework, not a complete phonemic analysis of every Marathi variety.",
          "Marathi includes the retroflex lateral ळ, an important distinguishing letter in Marathi spelling and pronunciation. It is not interchangeable with ल.",
          "The letters ङ and ञ occur in the traditional chart, but their distribution in everyday Marathi words is limited and often connected with Sanskrit-derived forms or predictable nasal place assimilation. Scholarly phonemic inventories distinguish common phonemes from marginal sounds.",
          "Conjuncts such as क्ष, त्र, and ज्ञ are formed from consonant sequences and should be taught as joined orthographic forms, not as additional basic consonant letters.",
        ],
        bullets: ["Velar: क ख ग घ ङ", "Palatal: च छ ज झ ञ", "Retroflex: ट ठ ड ढ ण", "Dental: त थ द ध न", "Bilabial: प फ ब भ म", "Other consonants include य र ल व श ष स ह and ळ"],
      },
      vowelSigns: {
        resourceIds: ["MAR-R01", "MAR-R04", "MAR-P01"],
        title: "Independent Vowels and Matras",
        paragraphs: [
          "Independent vowels include अ, आ, इ, ई, उ, ऊ, ऋ, ए, ऐ, ओ, and औ. ऋ is especially associated with Sanskrit-derived vocabulary in modern Marathi. The extended vowels ॲ and ऑ are used for additional vowel qualities, particularly in loanwords.",
          "The common dependent vowel signs are ा, ि, ी, ु, ू, ृ, े, ै, ो, and ौ. Marathi also uses ॅ and ॉ in forms associated with ॲ and ऑ. The inherent vowel अ has no separate dependent sign.",
          "The sign ि illustrates the difference between encoding order and visual placement: it follows the consonant in the character sequence but appears before the consonant glyph. Unicode-aware rendering handles this shaping.",
          "Traditional Sanskrit vowel letters such as ॠ, ऌ, and ॡ should not be presented as ordinary core Marathi vowels. Their presence in the wider Devanagari repertoire does not make them part of an everyday Marathi learner chart.",
        ],
        bullets: ["क + ा → का", "क + ि → कि", "क + ी → की", "क + ु → कु", "क + ू → कू", "क + े → के", "क + ै → कै", "क + ो → को", "क + ौ → कौ"],
      },
      numerals: {
        resourceIds: ["MAR-R01", "MAR-R05"],
        title: "Devanagari Numerals",
        paragraphs: [
          "The Devanagari block encodes ten native digits: ० १ २ ३ ४ ५ ६ ७ ८ ९. They are available for Marathi writing, although Western digits (0–9) are common in modern digital and administrative text.",
          "A typing tool should preserve the digits a user enters unless a deliberate numeral-conversion feature is provided. Script availability alone does not mean users always prefer native digits.",
        ],
      },
      specialCharacters: {
        resourceIds: ["MAR-R01", "MAR-R04", "MAR-R05"],
        title: "Special Marks, Halant, and Conjuncts",
        paragraphs: [
          "Anusvara (ं) marks nasal-related information in spelling; candrabindu (ँ) marks vowel nasalization in contexts where it is used. They are related but should not be taught as interchangeable in every word.",
          "Visarga (ः) occurs mainly in Sanskrit-derived or formal forms. The virama or halant (्) suppresses the inherent vowel and participates in forming consonant clusters.",
          "Nukta (़) is part of the broader Devanagari repertoire and can modify letters for certain sounds in borrowed words. Do not present every possible nukta combination as a core Marathi letter.",
          "Daṇḍa (।) and double daṇḍa (॥) are encoded Devanagari punctuation marks, though contemporary Marathi prose commonly uses familiar punctuation such as the comma and full stop. Conjuncts such as क्ष, त्र, and ज्ञ are sequences, not separate basic letters.",
        ],
      },
      examples: {
        title: "Everyday Marathi Words",
        introduction: "These examples show Marathi spelling with scholarly-style Roman cues. Roman input is practical typing input, not a claim that every word has one standardized Latin form.",
        items: [
          { native: "नमस्कार", roman: "namaskār", meaning: "greetings" },
          { native: "मराठी", roman: "marāṭhī", meaning: "Marathi" },
          { native: "महाराष्ट्र", roman: "mahārāṣṭra", meaning: "Maharashtra" },
          { native: "पाणी", roman: "pāṇī", meaning: "water" },
          { native: "शाळा", roman: "śāḷā", meaning: "school" },
          { native: "मुलगा", roman: "mulagā", meaning: "boy / son" },
          { native: "धन्यवाद", roman: "dhanyavād", meaning: "thank you" },
        ],
      },
      typingGuide: {
        title: "Typing Marathi with Roman Letters",
        paragraphs: [
          "Type Marathi words using familiar Roman spellings and choose the Devanagari suggestion that matches your intended word. This process is transliteration: it changes the writing system, not the language or meaning.",
          "Roman input is not a single universal spelling standard. Long vowels, retroflex sounds, ळ, nasalization, and consonant clusters may be represented in more than one way. Suggestions and sentence context help resolve ambiguity.",
          "ISO 15919 is a formal transliteration standard for scholarly and information exchange. Everyday phonetic typing is more flexible and should not be described as ISO 15919 unless the input system actually implements that standard.",
          "The tool sends transliteration input to its configured third-party provider. Review the output before using it in names, formal writing, or important documents.",
        ],
        examples: [
          { input: "namaskar", output: "नमस्कार", explanation: "A common greeting; select the intended suggestion if alternatives appear." },
          { input: "marathi", output: "मराठी", explanation: "The language name includes the retroflex lateral ळ." },
          { input: "paani", output: "पाणी", explanation: "The retroflex ण is distinct from dental न." },
          { input: "shala", output: "शाळा", explanation: "This word contains ळ, not ल." },
        ],
        notes: ["Do not assume Roman spellings map one-to-one to Devanagari.", "Check ळ versus ल and ण versus न in the final output.", "Use context to choose among transliteration suggestions."],
      },
      commonMistakes: {
        title: "Common Marathi Writing and Typing Mistakes",
        introduction: "These are frequent learning traps involving Marathi-specific distinctions and Devanagari shaping.",
        items: [
          { incorrect: "ल used where ळ is required", correct: "Use the letter that matches the Marathi word, such as ळ in शाळा.", explanation: "ल and ळ represent distinct lateral sounds and are not interchangeable." },
          { incorrect: "ण replaced with न", correct: "Preserve retroflex ण where the word requires it, as in पाणी.", explanation: "Dental न and retroflex ण are distinct consonants." },
          { incorrect: "Typing ि before its consonant", correct: "The logical sequence is क followed by ि; shaping displays the sign to the left.", explanation: "Unicode character order and visual placement are not always identical." },
          { incorrect: "Counting क्ष and ज्ञ as basic single consonant letters", correct: "Teach them as conjunct forms made from consonant sequences.", explanation: "Their rendered forms may look like single units, but their underlying spelling is a sequence." },
          { incorrect: "Using anusvara and candrabindu interchangeably", correct: "Follow the spelling of the specific word and distinguish ं from ँ.", explanation: "The marks have related but distinct orthographic functions." },
        ],
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