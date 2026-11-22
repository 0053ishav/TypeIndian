import type { Language } from "@/types/language";

import { kannadaAlphabet } from "./alphabet";
import { kannadaResearch } from "./research";
import { KANNADA_FAQ, LEARN_KANNADA_FAQ } from "./faq";

export const kannada: Language = {
  id: "kannada",
  slug: "kannada",

  name: "Kannada",
  nativeName: "ಕನ್ನಡ",

  locale: "kn-IN",
  direction: "ltr",

  script: "Kannada",

  transliteration: {
    engine: "google",
    languageCode: "kn",
  },

  typing: {
    title: "Kannada Typing Tool",

    subtitle:
      "Type in English and convert instantly to ಕನ್ನಡ",

    intro:
      "Write Kannada naturally using English letters with TypeIndian's Kannada typing tool. Simply type phonetically in English and instantly convert your words into the Kannada script. No keyboard installation, no login - fast, accurate, and browser-based Kannada transliteration directly in your browser.",

    learnLink: {
      href: "/learn/kannada",

      label: "Learn Kannada Typing (Kannada Script)",

      description:
        "Understand Kannada letters, pronunciation, script, and typing fundamentals.",
    },

    seo: {
      title: "Kannada Typing Tool (English to Kannada)",

      description:
        "Free English to Kannada typing tool. Type using English letters and instantly convert your text into the Kannada script. Fast, accurate phonetic transliteration with no login or installation required.",

      keywords: [
        "English to Kannada typing",
        "Kannada typing",
        "Kannada typing online",
        "Kannada transliteration",
        "phonetic Kannada typing",
        "Kannada keyboard",
        "Kannada typing tool",
        "English to Kannada converter",
        "TypeIndian Kannada",
      ],

      openGraph: {
        title: "Kannada Typing Tool - TypeIndian",

        description:
          "Type in English and instantly write in Kannada using accurate phonetic transliteration.",

        locale: "kn_IN",
      },

      twitter: {
        title: "Kannada Typing Tool - TypeIndian",

        description:
          "Fast, free, and browser-based English to Kannada typing.",
      },
    },
  },

  learn: {
    meta: {
      title: "Learn Kannada Typing",

      description:
        "Learn how to type Kannada using English letters with this beginner-friendly guide. Explore the Kannada language, Kannada script, vowels, consonants, pronunciation, and phonetic typing.",

      cta: "Start Typing in Kannada →",
    },

    seo: {
      title:
        "Learn Kannada Typing (English to Kannada) – Beginner Guide",

      description:
        "Learn Kannada typing with an easy beginner guide. Understand the Kannada script, vowels, consonants, numerals, and English to Kannada phonetic typing.",

      keywords: [
        "learn Kannada typing",
        "Kannada typing tutorial",
        "Kannada alphabet",
        "Kannada script",
        "Kannada vowels",
        "Kannada consonants",
        "English to Kannada typing guide",
        "Kannada typing for beginners",
        "TypeIndian Kannada",
      ],

      openGraph: {
        title:
          "Learn Kannada Typing - Beginner Guide | TypeIndian",

        description:
          "Master Kannada typing with a beginner-friendly guide covering the Kannada script, pronunciation, alphabet, and phonetic typing.",

        locale: "kn_IN",
      },

      twitter: {
        title: "Learn Kannada Typing - TypeIndian",

        description:
          "Learn to type Kannada naturally using English letters with our complete beginner guide.",
      },
    },

    about: {
      title: "About Kannada Language",
      paragraphs: [
        "Kannada (ಕನ್ನಡ) is a major Dravidian language spoken primarily in Karnataka and by communities across India and the world. It is one of the languages listed in the Eighth Schedule of the Constitution of India.",
        "Kannada has a long documented literary history. The Government of India recognized Kannada as a Classical Language in 2008.",
        "Kannada is written using the Kannada script, a Brahmic writing system closely related to Telugu in letter shapes and conjunct behaviour.",
      ],
    },

    script: {
      title: "Kannada Script",
      paragraphs: [
        "The Kannada script is a left-to-right abugida. A consonant normally carries the inherent vowel ಅ; dependent vowel signs replace that vowel, while the virama (್) suppresses it.",
        "The script contains independent vowels, consonants, dependent vowel signs, yogavahas such as anusvara and visarga, conjuncts, and native digits. Its letterforms evolved through historical writing and manuscript traditions.",
      ],
      bullets: [
        "Written from left to right",
        "Uses the Kannada script (U+0C80–U+0CFF)",
        "Consonants carry an inherent vowel ಅ",
        "Uses dependent vowel signs and virama",
      ],
    },

    alphabet: {
      vowels: {
        title: "Vowels (ಸ್ವರಗಳು)",
        description: "The modern Kannada learner chart commonly presents 13 independent vowels. Historical and Sanskrit-related vocalic letters are shown separately.",
      },
      consonants: {
        title: "Consonants (ವ್ಯಂಜನಗಳು)",
        description: "Kannada consonants are traditionally organized into five groups of five and a further nine ungrouped consonants. This is an orthographic chart, not a complete inventory of spoken sounds.",
      },
      extensions: {
        title: "Historical and Sanskrit Letters",
        description: "These specialist or historical characters are separate from the modern core vowel and consonant chart. Conjuncts such as ಕ್ಷ and ಜ್ಞ are sequences, not independent letters.",
      },
      vowelSigns: {
        title: "Vowel Signs (ಮಾತ್ರೆಗಳು)",
        description: "Dependent vowel signs attach to consonants to replace the inherent vowel. Their logical Unicode order and visible glyph placement are handled by script shaping.",
      },
      symbols: {
        title: "Special Signs and Symbols",
        description: "Anusvara, visarga, virama, nukta, avagraha, and length marks have distinct functions and are not independent vowels.",
      },
      numerals: {
        title: "Kannada Numerals",
        description: "Kannada has ten native digits, although Western digits are also widely used in modern digital text.",
      },
    },

    curriculum: {
      research: kannadaResearch,
      history: {
        title: "Kannada Language and Its History",
        resourceIds: ["KAN-R03", "KAN-R06", "KAN-R07"],
        paragraphs: [
          "Kannada (ಕನ್ನಡ) is a Dravidian language spoken primarily in Karnataka and by communities in other parts of India and abroad. It has a substantial literary tradition and a long history of inscriptional and manuscript use.",
          "Kannada is one of the languages in the Eighth Schedule of the Constitution of India. The Karnataka Official Language Act, 1963 adopts Kannada as the official language of the State while allowing continued use of English for specified official purposes.",
          "The Government of India recognized Kannada as a Classical Language in 2008. This recognition relates to its historical literary record and does not mean that modern Kannada is no longer a living language.",
        ],
      },
      writingSystem: {
        title: "How the Kannada Script Works",
        resourceIds: ["KAN-R01", "KAN-R02", "KAN-R03"],
        paragraphs: [
          "Kannada is a left-to-right abugida. A consonant normally carries an inherent vowel ಅ. A dependent vowel sign changes that vowel, while the virama (್), also called halant, suppresses it.",
          "The Kannada script occupies the Unicode block U+0C80–U+0CFF. Kannada is closely related to Telugu in letter shapes and conjunct behaviour, while retaining its own orthographic conventions.",
          "Consonant clusters are written using sequences of consonants and virama. The familiar forms ಕ್ಷ and ಜ್ಞ are conjuncts, not independent basic consonant letters. Their visible shapes depend on shaping rules and fonts.",
          "Unicode stores text in logical character order. Rendering software shapes consonants, vowel signs, and conjuncts into their visible forms; do not manually reorder characters based only on how a glyph appears.",
        ],
        bullets: ["Independent vowel: ಆ", "Consonant with inherent vowel: ಕ", "Dependent vowel sign: ಕಾ", "Another vowel sign: ಕಿ", "Virama: ಕ್", "Conjunct examples: ಕ್ಷ and ಜ್ಞ", "Native digits: ೦ ೧ ೨ ೩ ೪ ೫ ೬ ೭ ೮ ೯"],
      },
      consonantClassification: {
        title: "Kannada Consonants and Their Traditional Groups",
        resourceIds: ["KAN-R03", "KAN-R07"],
        paragraphs: [
          "A commonly used modern Kannada alphabet chart lists 34 consonants: 25 grouped consonants arranged in five varga rows, followed by 9 ungrouped consonants. This is a traditional orthographic inventory, not a count of every consonant sound in contemporary speech.",
          "The five varga groups are velar, palatal, retroflex, dental, and bilabial. Each row is traditionally arranged by voicing and aspiration, ending with a nasal consonant.",
          "The ungrouped series includes ಯ ರ ಲ ವ ಶ ಷ ಸ ಹ ಳ. The letter ಳ is a distinct retroflex lateral consonant and should not be confused with ಲ.",
          "Conjuncts such as ಕ್ಷ and ಜ್ಞ are combinations of consonants with virama. They should not be counted as additional independent consonants.",
        ],
        bullets: ["Velar: ಕ ಖ ಗ ಘ ಙ", "Palatal: ಚ ಛ ಜ ಝ ಞ", "Retroflex: ಟ ಠ ಡ ಢ ಣ", "Dental: ತ ಥ ದ ಧ ನ", "Bilabial: ಪ ಫ ಬ ಭ ಮ", "Ungrouped: ಯ ರ ಲ ವ ಶ ಷ ಸ ಹ ಳ"],
      },
      vowelSigns: {
        title: "Independent Vowels and Kannada Matras",
        resourceIds: ["KAN-R01", "KAN-R02", "KAN-R03"],
        paragraphs: [
          "A commonly taught modern independent-vowel series contains 13 letters: ಅ, ಆ, ಇ, ಈ, ಉ, ಊ, ಋ, ಎ, ಏ, ಐ, ಒ, ಓ, and ಔ. The historical letter ಌ and Sanskrit vocalic extensions such as ೠ and ೡ should be distinguished from this modern core set.",
          "When a vowel follows a consonant, it is usually written as a dependent vowel sign rather than as a separate independent letter. The sign replaces the consonant's inherent ಅ.",
          "Kannada has signs for ā, i, ī, u, ū, vocalic r, e, ē, ai, o, ō, and au. Some signs have multi-code-point canonical decompositions in Unicode; applications should preserve normalized text and rely on proper shaping.",
        ],
        bullets: ["ಕ + ಾ → ಕಾ", "ಕ + ಿ → ಕಿ", "ಕ + ೀ → ಕೀ", "ಕ + ು → ಕು", "ಕ + ೂ → ಕೂ", "ಕ + ೃ → ಕೃ", "ಕ + ೆ → ಕೆ", "ಕ + ೇ → ಕೇ", "ಕ + ೈ → ಕೈ", "ಕ + ೊ → ಕೊ", "ಕ + ೋ → ಕೋ", "ಕ + ೌ → ಕೌ"],
      },
      numerals: {
        title: "Kannada Numerals",
        resourceIds: ["KAN-R02", "KAN-R03"],
        paragraphs: [
          "Kannada has ten native digits: ೦ ೧ ೨ ೩ ೪ ೫ ೬ ೭ ೮ ೯. They correspond to Western digits 0 through 9.",
          "Western digits are also widely used in modern digital contexts. A typing tool should preserve the user's chosen numeral system unless conversion is explicitly requested.",
        ],
      },
      specialCharacters: {
        title: "Virama, Yogavahas, and Other Signs",
        resourceIds: ["KAN-R01", "KAN-R02"],
        paragraphs: [
          "The virama (್) suppresses the inherent vowel and helps form consonant clusters. A conjunct is a sequence of encoded consonants and virama, even when the font displays a compact ligature.",
          "Anusvara (ಂ) and visarga (ಃ) are called yogavahas in traditional Kannada teaching. They are not independent vowels or ordinary consonants.",
          "The nukta (಼) and avagraha (ಽ) are encoded signs with specialized uses. The length marks (ೕ and ೖ) participate in vowel representation and should not be confused with standalone vowel letters.",
          "The Unicode block also contains historical and specialist characters, including archaic forms. Their presence in Unicode does not make them part of everyday modern Kannada spelling.",
        ],
      },
      examples: {
        title: "Everyday Kannada Words",
        introduction: "These examples pair common Kannada words with practical Roman learner cues. Roman spellings are illustrative rather than a single formal transliteration scheme.",
        items: [
          { native: "ಕನ್ನಡ", roman: "kannaḍa", meaning: "Kannada" },
          { native: "ನಮಸ್ಕಾರ", roman: "namaskāra", meaning: "hello / greetings" },
          { native: "ಧನ್ಯವಾದ", roman: "dhanyavāda", meaning: "thank you" },
          { native: "ನೀರು", roman: "nīru", meaning: "water" },
          { native: "ಮನೆ", roman: "mane", meaning: "house / home" },
          { native: "ಹೇಗಿದ್ದೀರಾ?", roman: "hēgiddīrā?", meaning: "How are you? (polite)" },
          { native: "ನಾನು", roman: "nānu", meaning: "I" },
        ],
      },
      typingGuide: {
        title: "Typing Kannada with Roman Letters",
        paragraphs: [
          "Type Kannada words using Roman letters and select the Kannada-script suggestion that matches the word you intend. This is transliteration: it changes the script, not the language or meaning.",
          "Informal Roman input is flexible and may represent long vowels, retroflex consonants, and aspirated consonants in several ways. Formal Library of Congress and ISO 15919 romanization use scholarly conventions and are not the same as casual typing.",
          "The same Roman input can be ambiguous. Use the surrounding sentence to select the intended suggestion and proofread names, grammatical endings, and formal writing.",
          "TypeIndian uses its configured Google Input Tools provider for Kannada suggestions. The examples in this guide are language-learning examples and do not guarantee the provider's exact suggestion order.",
        ],
        examples: [
          { input: "namaskara", output: "ನಮಸ್ಕಾರ", explanation: "A common greeting." },
          { input: "kannada", output: "ಕನ್ನಡ", explanation: "The name of the language." },
          { input: "neeru", output: "ನೀರು", explanation: "The word for water." },
          { input: "dhanyavada", output: "ಧನ್ಯವಾದ", explanation: "A common expression of thanks." },
        ],
        notes: ["Choose suggestions by meaning and sentence context.", "Roman input is not a one-to-one spelling standard.", "Use the virama and vowel signs correctly when editing Kannada script directly.", "The typing tool transliterates Kannada words; it does not translate English sentences."],
      },
      commonMistakes: {
        title: "Common Kannada Writing and Typing Mistakes",
        introduction: "These mistakes come from mixing up the modern core alphabet, dependent signs, conjuncts, and transliteration conventions.",
        items: [
          { incorrect: "Counting ಌ, ೠ, and ೡ as ordinary modern core vowels", correct: "Learn the 13-vowel modern chart first and study historical or Sanskrit forms separately.", explanation: "The Unicode repertoire includes characters beyond the everyday core alphabet." },
          { incorrect: "Counting ಕ್ಷ and ಜ್ಞ as independent consonants", correct: "Learn them as conjunct sequences formed with consonants and virama.", explanation: "They are not separately encoded basic consonant letters." },
          { incorrect: "Confusing ಲ and ಳ", correct: "Recognize them as distinct letters with different articulation.", explanation: "The retroflex lateral ಳ is not interchangeable with ಲ." },
          { incorrect: "Treating vowel signs as independent vowel letters", correct: "Learn each dependent sign in combination with a consonant.", explanation: "A sign modifies the inherent vowel of the consonant it attaches to." },
          { incorrect: "Assuming casual Roman input follows ISO 15919", correct: "Treat consumer transliteration input as flexible and select suggestions by context.", explanation: "Formal romanization and practical phonetic typing serve different purposes." },
        ],
      },
    },

    cta: {
      title: "Ready to start typing in Kannada?",

      description:
        "Skip complicated keyboard layouts. Type naturally in English and TypeIndian instantly converts your words into the Kannada script.",

      button: "Open Kannada Typing Tool →",
    },

    faq: LEARN_KANNADA_FAQ,
  },

  alphabet: kannadaAlphabet,

  labels: {
    alphabet: {
      title: "Learn Kannada Letters",

      description:
        "These are the core Kannada letters. Click any letter to insert it directly into the typing editor above.",

      vowels: "Vowels (ಸ್ವರಗಳು)",

      consonants: "Consonants (ವ್ಯಂಜನಗಳು)",

      extensions: "Historical and Sanskrit Letters",

      vowelSigns: "Vowel Signs (ಮಾತ್ರೆಗಳು)",

      symbols: "Special Signs and Symbols",

      numerals: "Kannada Numerals",
    },
  },

  faq: KANNADA_FAQ,

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