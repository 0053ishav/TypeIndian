import type { Language } from "@/types/language";

import { panjabiAlphabet } from "./alphabet";
import { LEARN_PANJABI_FAQ, PANJABI_FAQ } from "./faq";
import { panjabiResearch } from "./research";

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
      "Panjabi belongs to the Indo-Aryan language family. It is one of the relatively few Indo-Aryan languages with lexical tone: pitch can distinguish words, and the details vary across dialects and prosodic contexts.",
      "What we speak is the Panjabi language. What we write is the Gurmukhi script, which is the standard script used for Panjabi in India.",
    ],
  },

  script: {
    title: "Gurmukhi Script",

    paragraphs: [
      "Gurmukhi is an Indic abugida written from left to right and used as the standard script for Panjabi in India. Its development is historically associated with the Sikh tradition and the standardization of scripture and spelling; it is related to earlier scripts of the north-western Brahmi family.",
      "Gurmukhi has three vowel carriers, consonant letters, dependent vowel signs (lagā̃-mātrā̃), and signs such as bindi, tippi, addak, and pairī̃-bindī. Gurmukhi is not a direct phonetic transcript of every spoken feature: Punjabi tone, for example, has no dedicated tone mark.",
    ],

    bullets: [
      "Written from left to right",
      "Uses Gurmukhi script",
      "Uses three vowel carriers and consonant letters",
      "Uses dependent vowel signs (lagā̃-mātrā̃)",
      "Uses bindi, tippi, addak, and pairī̃-bindī",
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

    vowelSigns: {
      title: "Vowel Signs (ਲਗਾਂ-ਮਾਤਰਾਂ)",
      description: "Gurmukhi uses dependent vowel signs to modify the inherent vowel of a consonant. Their placement and combination are central to reading and typing accurately.",
    },

    symbols: {
      title: "Special Marks (ਲਗਾਖਰ)",
      description: "Learn the distinct roles of bindi, tippi, addak, pairī̃-bindī forms, and the virama used in specific conjunct formations.",
    },

    numerals: {
      title: "Gurmukhi (Panjabi) Numerals",
      description:
        "Gurmukhi has its own native numeral system used for writing numbers.",
    },
  },


    curriculum: {
      research: panjabiResearch,

      history: {
        resourceIds: ["PAN-R04", "PAN-R05", "PAN-R06", "PAN-R01"],
        title: "A Short History of Panjabi and Gurmukhi",
        paragraphs: [
          "Panjabi is an Indo-Aryan language spoken across the Punjab region and by communities around the world. Its varieties are diverse; broad descriptions often distinguish eastern varieties associated with Indian Punjab from western varieties associated with Pakistani Punjab, while local dialect continua do not always fit neatly into two boxes.",
          "The language is written in more than one script. Gurmukhi is the standard script for Panjabi in Indian Punjab, while Shahmukhi, based on the Perso-Arabic script, is widely used for Panjabi in Pakistan. These are different writing systems used for the same broad language continuum, not separate languages.",
          "Gurmukhi's history should not be reduced to the claim that one person invented it. Earlier north-western Indic writing traditions existed before the script's association with Sikh scripture. Guru Angad's role is traditionally and historically important in the standardization and propagation of Gurmukhi, while the precise development of its forms is more gradual and complex.",
          "Panjabi has been shaped by long contact with Persian, Arabic, Urdu, Hindi, and English, among other languages. Its literary traditions and vocabulary reflect the region's layered religious, political, and cultural history."
        ],
      },

      writingSystem: {
        resourceIds: ["PAN-R01", "PAN-R02", "PAN-R03", "PAN-R04"],
        title: "How Gurmukhi Works",
        paragraphs: [
          "Gurmukhi is an abugida. A consonant letter normally represents a consonant together with an inherent vowel, while a dependent vowel sign changes that vowel. The basic written unit is often described as an akhar.",
          "The three traditional vowel carriers are ੳ, ਅ, and ੲ. They participate in writing independent vowel forms together with vowel signs. They are not simply three extra spoken vowels.",
          "Gurmukhi is written from left to right. Vowel signs can appear before, after, above, or below the consonant they belong to. The visible position of a sign and its encoded Unicode order are not always the same.",
          "Unlike Devanagari, the Gurmukhi virama is not used as a general-purpose vowel killer in ordinary spelling. It appears in specific conjunct formations, including forms with ਹ, ਰ, or ਵ as the second element."
        ],
        bullets: [
          "Independent vowel form: ਆ",
          "Consonant with inherent vowel: ਕ",
          "Consonant with a dependent vowel sign: ਕਾ",
          "A pre-base vowel sign: ਕਿ",
          "A conjunct form can use a subjoined consonant, as in ਪ੍ਰ"
        ],
      },

      consonantClassification: {
        resourceIds: ["PAN-R03", "PAN-P01", "PAN-P02", "PAN-R07"],
        title: "Panjabi Consonants, Aspiration, and Tone",
        paragraphs: [
          "The traditional Gurmukhi consonant chart groups many consonants by place of articulation: velar, palatal, retroflex, dental, and bilabial. Within the traditional varga rows, letters contrast in voicing and aspiration. This chart is a useful spelling and articulation framework, but it should not be treated as a complete description of every modern speaker's phonetic realization.",
          "Panjabi is a tonal language. Pitch can contribute to lexical meaning, but There is no dedicated tone diacritic in Gurmukhi. In Indian Panjabi, some tone patterns are historically connected with the loss or change of voiced aspirated (murmured) consonants. The relationship between historical spelling and present-day pronunciation is therefore not always one-to-one.",
          "Tone is not simply a fixed high, low, or rising mark attached to every syllable. Acoustic research on Indian Panjabi finds that tone realization interacts with stress and syllable structure. Dialect and speaker variation matter, so learners should use spoken examples and reliable audio alongside spelling charts.",
          "The consonant ੜ is an established Panjabi consonant, not merely a borrowed-sound extension. Additional pairī̃-bindī forms such as ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, and ਲ਼ represent further distinctions in particular vocabulary and registers."
        ],
        bullets: [
          "Velar: ਕ ਖ ਗ ਘ ਙ",
          "Palatal: ਚ ਛ ਜ ਝ ਞ",
          "Retroflex: ਟ ਠ ਡ ਢ ਣ",
          "Dental: ਤ ਥ ਦ ਧ ਨ",
          "Bilabial: ਪ ਫ ਬ ਭ ਮ",
          "Other core consonants include ਯ ਰ ਲ ਵ ੜ, ਸ, and ਹ"
        ],
      },

      vowelSigns: {
        resourceIds: ["PAN-R01", "PAN-R02", "PAN-R03", "PAN-R04"],
        title: "Independent Vowels and Vowel Signs",
        paragraphs: [
          "The familiar independent vowel forms are ਅ, ਆ, ਇ, ਈ, ਉ, ਊ, ਏ, ਐ, ਓ, and ਔ. In Gurmukhi these forms are built using the three vowel carriers ੳ, ਅ, and ੲ together with vowel signs; the carriers and the resulting vowel letters serve different roles.",
          "A vowel sign, or lagā̃-mātrā̃, modifies the inherent vowel of a consonant. The main dependent signs are ਾ, ਿ, ੀ, ੁ, ੂ, ੇ, ੈ, ੋ, and ੌ. The inherent vowel associated with a bare consonant is not written with a separate sign.",
          "Some vowel signs are positioned visually before the consonant, such as ਿ in ਕਿ, even though the sign follows the consonant in the logical character sequence. Correct shaping depends on Unicode-aware text rendering."
        ],
        bullets: [
          "ਕ + ਾ → ਕਾ",
          "ਕ + ਿ → ਕਿ",
          "ਕ + ੀ → ਕੀ",
          "ਕ + ੁ → ਕੁ",
          "ਕ + ੂ → ਕੂ",
          "ਕ + ੇ → ਕੇ",
          "ਕ + ੈ → ਕੈ",
          "ਕ + ੋ → ਕੋ",
          "ਕ + ੌ → ਕੌ"
        ],
      },

      numerals: {
        resourceIds: ["PAN-R01", "PAN-R02"],
        title: "Gurmukhi Numerals",
        paragraphs: [
          "Gurmukhi has its own digit forms: ੦ ੧ ੨ ੩ ੪ ੫ ੬ ੭ ੮ ੯. Modern Panjabi text also frequently uses Western digits (0–9), especially in websites, forms, addresses, dates, and mixed-language content. Readers should recognize both systems."
        ],
        bullets: [
          "੦ = 0, ੧ = 1, ੨ = 2, ੩ = 3, ੪ = 4",
          "੫ = 5, ੬ = 6, ੭ = 7, ੮ = 8, ੯ = 9"
        ],
      },

      specialCharacters: {
        resourceIds: ["PAN-R01", "PAN-R02", "PAN-R03", "PAN-R04"],
        title: "Bindi, Tippi, Addak, Pairī̃-Bindī, and Punctuation",
        paragraphs: [
          "Bindi (ਂ) and tippi (ੰ) are distinct nasal signs with distribution patterns shaped by the vowel and spelling context. They are not interchangeable decorations. Bindi commonly appears with several long-vowel contexts, while tippi is used in other nasalization environments. Exact spelling should be learned from standard words and examples.",
          "Addak (ੱ) marks gemination: the following consonant is pronounced longer or doubled. It is written before the consonant it affects, as in ਪੱਕਾ. It does not mean that the addak itself is pronounced as a consonant.",
          "Additional forms commonly grouped under pairī̃-bindī include ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, and ਲ਼. Their Unicode representation is not identical in every case: some letters have dedicated code points rather than being encoded as a base consonant plus a combining nukta. Usage varies by word, register, and speaker; not every speaker maintains every distinction in the same way.",
          "The virama (੍) has a more restricted role in Gurmukhi than in some related Indic scripts. It is used in specific conjuncts, including subjoined ਰ, ਹ, and ਵ forms. Visarga (ਃ) exists in the encoded script but is uncommon in ordinary contemporary Panjabi prose.",
          "The danda (।) and double danda (॥) occur in Indic textual traditions, while modern Panjabi prose also uses familiar punctuation such as commas, full stops, question marks, and quotation marks."
        ],
        bullets: [
          "Bindi: ਂ",
          "Tippi: ੰ",
          "Addak: ੱ",
          "Pairī̃-bindī examples: ਸ਼ ਖ਼ ਗ਼ ਜ਼ ਫ਼ ਲ਼",
          "Virama: ੍",
          "Visarga: ਃ"
        ],
      },

      examples: {
        title: "Everyday Panjabi Words and Phrases",
        introduction: "Roman forms are practical learner cues, not a single official transliteration standard. Pronunciation and vocabulary can vary by region.",
        items: [
          { native: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ", roman: "sat srī akāl", meaning: "A widely used greeting" },
          { native: "ਪੰਜਾਬ", roman: "Panjāb", meaning: "Punjab" },
          { native: "ਪੰਜਾਬੀ", roman: "Panjābī", meaning: "Panjabi / Punjabi" },
          { native: "ਪਾਣੀ", roman: "pāṇī", meaning: "Water" },
          { native: "ਘਰ", roman: "ghar", meaning: "Home / house" },
          { native: "ਕਿਤਾਬ", roman: "kitāb", meaning: "Book" },
          { native: "ਧੰਨਵਾਦ", roman: "dhanvād", meaning: "Thank you" },
          { native: "ਚੰਗਾ", roman: "changā", meaning: "Good / well (masculine form)" },
          { native: "ਕੰਮ", roman: "kamm", meaning: "Work" },
          { native: "ਮਿੱਤਰ", roman: "mittar", meaning: "Friend" }
        ],
      },

      typingGuide: {
        title: "Typing Panjabi with English Letters",
        paragraphs: [
          "Type the Panjabi word as you pronounce it using Roman letters. The transliteration service suggests Gurmukhi spellings; choose the intended word when more than one suggestion appears. Roman input is a practical phonetic aid, not a one-to-one replacement alphabet for Gurmukhi.",
          "Panjabi has sounds and contrasts that can be difficult to represent consistently with ordinary English spelling. Tone, aspiration, vowel length, nasalization, and gemination may not be obvious from a short Roman input. Review the Gurmukhi suggestion and use the context of the sentence to select the intended form.",
          "This tool transliterates sounds into Gurmukhi; it does not translate English meaning into Panjabi. For example, typing a Romanized Panjabi phrase is different from entering an English sentence and asking for its translation."
        ],
        examples: [
          { input: "sat sri akaal", output: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ", explanation: "A common greeting; spacing and word segmentation matter." },
          { input: "panjaab", output: "ਪੰਜਾਬ", explanation: "Punjab; transliteration spelling can vary by input convention." },
          { input: "paani", output: "ਪਾਣੀ", explanation: "Water." },
          { input: "ghar", output: "ਘਰ", explanation: "Home or house." },
          { input: "kamm", output: "ਕੰਮ", explanation: "Work; nasal spelling is important." },
          { input: "pakka", output: "ਪੱਕਾ", explanation: "Addak marks the doubled consonant." },
          { input: "changa", output: "ਚੰਗਾ", explanation: "Good; agreement and context can affect the form." },
          { input: "dhanvaad", output: "ਧੰਨਵਾਦ", explanation: "Thank you." }
        ],
      },

      commonMistakes: {
        title: "Common Gurmukhi Writing and Typing Mistakes",
        introduction: "These are common areas where Roman input, spelling conventions, and pronunciation can diverge.",
        items: [
          {
            incorrect: "Treating Gurmukhi and Panjabi as names for the same thing",
            correct: "Panjabi is the language; Gurmukhi is one script used to write it",
            explanation: "Panjabi is also written in Shahmukhi, especially in Pakistan."
          },
          {
            incorrect: "Assuming every letter has one fixed sound in every dialect",
            correct: "Treat the alphabet chart as a starting point, then learn actual pronunciation and tone",
            explanation: "Panjabi has dialect variation, and tone interacts with consonant history and prosody."
          },
          {
            incorrect: "Treating Punjabi as a language without lexical tone",
            correct: "Listen for pitch patterns as part of word pronunciation",
            explanation: "Tone can distinguish words, even though Gurmukhi has no dedicated tone mark."
          },
          {
            incorrect: "Using bindi and tippi interchangeably",
            correct: "Learn their conventional distribution in standard spellings",
            explanation: "The two nasal signs have different usage patterns."
          },
          {
            incorrect: "Ignoring addak",
            correct: "Recognize addak as a marker of the following doubled consonant",
            explanation: "It changes consonant length and can distinguish words."
          },
          {
            incorrect: "Treating ੜ as a borrowed Persian or Arabic letter",
            correct: "Learn ੜ as a core Panjabi consonant",
            explanation: "Unicode distinguishes ੜ from the pairī̃-bindī extensions."
          },
          {
            incorrect: "Assuming Gurmukhi is perfectly phonetic",
            correct: "Learn spelling conventions alongside pronunciation",
            explanation: "Tone, historical consonant changes, dialect variation, and orthographic conventions mean spelling is not a direct phonetic transcript."
          },
          {
            incorrect: "Using virama as a general-purpose vowel killer in every consonant cluster",
            correct: "Learn the specific Gurmukhi conjunct forms and subjoined letters",
            explanation: "Gurmukhi virama usage differs from Devanagari and is restricted in ordinary spelling."
          }
        ],
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