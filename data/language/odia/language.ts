import type { Language } from "@/types/language";

import { odiaAlphabet } from "./alphabet";
import { odiaResearch } from "./research";
import { LEARN_ODIA_FAQ, ODIA_FAQ } from "./faq";

export const odia: Language = {
  id: "odia",
  slug: "odia",
  name: "Odia",
  nativeName: "ଓଡ଼ିଆ",
  locale: "or-IN",
  direction: "ltr",
  script: "Odia",

  transliteration: {
    engine: "google",
    languageCode: "or",
  },

  typing: {
    title: "Odia Typing Tool",
    subtitle: "Type in English and convert to ଓଡ଼ିଆ",
    intro:
      "Write Odia naturally using Roman letters with TypeIndian. Type a word phonetically, then choose the Odia-script suggestion that matches your meaning. No keyboard installation or login is required.",
    learnLink: {
      href: "/learn/odia",
      label: "Learn Odia Typing (Odia Script)",
      description:
        "Understand Odia letters, pronunciation, script structure, and phonetic typing.",
    },
    seo: {
      title: "Odia Typing Tool (English to Odia)",
      description:
        "Free Roman-to-Odia typing tool. Type Odia words with English letters and choose Odia-script suggestions in your browser.",
      keywords: [
        "English to Odia typing",
        "Odia typing",
        "Odia typing online",
        "Odia transliteration",
        "phonetic Odia typing",
        "Odia keyboard",
        "Roman to Odia",
        "Odia typing tool",
        "TypeIndian Odia",
      ],
      openGraph: {
        title: "Odia Typing Tool - TypeIndian",
        description:
          "Type Odia words with Roman letters and choose Odia-script suggestions.",
        locale: "or_IN",
      },
      twitter: {
        title: "Odia Typing Tool - TypeIndian",
        description: "Free browser-based Roman-to-Odia typing.",
      },
    },
  },

  learn: {
    meta: {
      title: "Learn Odia Typing",
      description:
        "Learn Odia typing with a beginner guide to the Odia script, vowels, consonants, matras, conjuncts, numerals, and phonetic input.",
      cta: "Start Typing in Odia →",
    },
    seo: {
      title: "Learn Odia Typing – Odia Script, Alphabet and Beginner Guide",
      description:
        "Learn the Odia alphabet and writing system, understand vowels, consonants, matras, virama, conjuncts, numerals, and Roman-letter typing.",
      keywords: [
        "learn Odia typing",
        "Odia alphabet",
        "Odia script",
        "Odia vowels",
        "Odia consonants",
        "Odia matras",
        "Odia conjunct consonants",
        "Odia numerals",
        "English to Odia typing guide",
        "TypeIndian Odia",
      ],
      openGraph: {
        title: "Learn Odia Typing - Beginner Guide | TypeIndian",
        description:
          "A researched beginner guide to Odia script, writing conventions, and phonetic typing.",
        locale: "or_IN",
      },
      twitter: {
        title: "Learn Odia Typing - TypeIndian",
        description: "Learn Odia script, alphabet, and Roman-letter typing.",
      },
    },

    about: {
      title: "About Odia Language",
      paragraphs: [
        "Odia (ଓଡ଼ିଆ) is an Indo-Aryan language spoken primarily in Odisha and by communities in neighbouring parts of India and around the world.",
        "Odia has a long literary and manuscript tradition and is recognized as a Classical Language of India. It has its own language identity and writing system within the wider Brahmic script family.",
        "The Odia script is encoded separately from Devanagari. Its rounded letterforms are often discussed in connection with Odisha's palm-leaf manuscript tradition, in which letters were inscribed with a stylus.",
      ],
    },

    script: {
      title: "The Odia Writing System",
      paragraphs: [
        "Odia is written in the Odia script, a left-to-right Brahmic abugida. Its Unicode block is U+0B00–U+0B7F. The script contains independent vowels, consonants, dependent vowel signs, combining marks, numerals, and punctuation.",
        "A consonant normally carries an inherent vowel. A dependent vowel sign changes that vowel, while the virama (୍) suppresses it and participates in conjunct formation.",
        "Odia vowel signs do not all appear after the consonant in visual layout. For example, the sign ি-like placement in other scripts should not be generalized: Odia rendering follows its own shaping rules, so store characters in logical Unicode order and let the shaping engine render them.",
      ],
      bullets: [
        "Written from left to right",
        "Uses the Odia Unicode block U+0B00–U+0B7F",
        "A consonant normally carries an inherent vowel",
        "Uses dependent vowel signs (matras)",
        "Uses virama / halanta (୍) to suppress the inherent vowel",
        "Uses conjunct consonant forms and nasal marks",
      ],
    },

    alphabet: {
      vowels: {
        title: "Independent Vowels (ସ୍ୱରବର୍ଣ୍ଣ)",
        description:
          "This learner chart presents 11 commonly taught independent vowels. Specialist Sanskrit-related vocalic letters are separated into extensions.",
        resourceIds: ["OD-R01", "OD-R02"],
      },
      consonants: {
        title: "Core Consonants (ବ୍ୟଞ୍ଜନବର୍ଣ୍ଣ)",
        description:
          "The working inventory presents 34 core consonant letters. Counts and chart contents can vary depending on teaching tradition and whether extensions are included.",
        resourceIds: ["OD-R01", "OD-R02"],
      },
      extensions: {
        title: "Conjuncts and Specialist Extensions",
        description:
          "Common conjuncts such as କ୍ଷ and ଜ୍ଞ are formed from consonant sequences. Sanskrit-related vocalic letters and the specialist VA character are shown separately from the core inventory.",
        resourceIds: ["OD-R01", "OD-R02"],
      },
      vowelSigns: {
        title: "Dependent Vowel Signs (ମାତ୍ରା)",
        description:
          "Matras combine with consonants or consonant clusters to represent dependent vowels. Their glyph placement is controlled by Odia shaping rules.",
        resourceIds: ["OD-R01", "OD-R02"],
      },
      symbols: {
        title: "Virama, Nasal Marks, and Punctuation",
        description:
          "Virama, anusvara, candrabindu, visarga, nukta, and danda have distinct encoding and orthographic functions.",
        resourceIds: ["OD-R01", "OD-R02"],
      },
      numerals: {
        title: "Odia Numerals",
        description:
          "Odia has native digits ୦–୯. Western digits are also widely used in contemporary digital contexts.",
        resourceIds: ["OD-R01"],
      },
    },

    curriculum: {
      research: odiaResearch,
      history: {
        title: "Odia Language and Its Writing Tradition",
        resourceIds: ["OD-R03", "OD-R04", "OD-R05"],
        paragraphs: [
          "Odia is an Indo-Aryan language spoken primarily in Odisha and in neighbouring regions. The Odia script developed within the Brahmic writing tradition and has also been used historically to write Sanskrit and some regional languages.",
          "Odisha has a substantial palm-leaf manuscript tradition. Manuscripts were commonly inscribed with an iron stylus, and historical accounts connect the rounded and linear forms of Odia writing with the practical conditions of writing on palm leaves. This is an important influence, not a complete explanation of the script's development.",
          "Odia has a long literary history and is recognized as a Classical Language of India. Its language history, phonology, morphology, script, and modern language technology are active subjects in university-level study.",
        ],
      },
      writingSystem: {
        title: "How the Odia Script Works",
        resourceIds: ["OD-R01", "OD-R02", "OD-R03"],
        paragraphs: [
          "Odia is an abugida: a consonant normally includes an inherent vowel, while independent vowel letters are used when a vowel begins a syllable. Dependent vowel signs, or matras, modify the inherent vowel of a consonant or consonant cluster.",
          "The Odia block occupies Unicode range U+0B00–U+0B7F. Unicode encodes independent vowel letters as atomic characters. Do not replace a precomposed vowel letter with a visually similar sequence of another vowel and a matra.",
          "The virama (୍) suppresses the inherent vowel. It is also used to build conjuncts. For example, କ + ୍ + ଷ forms କ୍ଷ. Conjunct rendering is a shaping behaviour of the script and font, not a separate basic consonant inventory.",
          "Odia is written from left to right. Dependent vowel signs may render around the base consonant, so text should be stored in logical Unicode order rather than manually rearranged according to visual placement.",
        ],
        bullets: [
          "Independent vowel: ଆ",
          "Consonant with inherent vowel: କ",
          "Dependent vowel sign: କ + ା → କା",
          "Virama: କ + ୍ → କ୍",
          "Conjunct: କ + ୍ + ଷ → କ୍ଷ",
          "Unicode block: U+0B00–U+0B7F",
        ],
      },
      consonantClassification: {
        title: "Odia Consonants and Traditional Groups",
        resourceIds: ["OD-R01", "OD-R02", "OD-R05"],
        paragraphs: [
          "The core chart groups consonants by traditional varga rows. The first five groups contain five letters each and are commonly taught by place and manner of articulation.",
          "The five rows are velar, palatal, retroflex, dental, and bilabial. Within each row, the traditional sequence moves through voiceless unaspirated, voiceless aspirated, voiced unaspirated, voiced aspirated, and nasal sounds.",
          "The remaining consonants are commonly taught as an ungrouped series. Their exact chart membership can differ across school and reference traditions, so this guide labels its 34-character working inventory explicitly rather than claiming a universal count.",
          "Odia pronunciation and spelling should be learned as Odia, not inferred mechanically from Hindi or another language that uses a related Brahmic script.",
        ],
        bullets: [
          "Velar: କ ଖ ଗ ଘ ଙ",
          "Palatal: ଚ ଛ ଜ ଝ ଞ",
          "Retroflex: ଟ ଠ ଡ ଢ ଣ",
          "Dental: ତ ଥ ଦ ଧ ନ",
          "Bilabial: ପ ଫ ବ ଭ ମ",
          "Other core letters in this chart: ଯ ର ଲ ୱ ଶ ଷ ସ ହ ଳ",
        ],
      },
      vowelSigns: {
        title: "Vowel Signs (ମାତ୍ରା)",
        resourceIds: ["OD-R01", "OD-R02"],
        paragraphs: [
          "Odia uses dependent vowel signs when a vowel follows a consonant within the same written syllable. The sign changes the consonant's inherent vowel; it is not an independent letter.",
          "The common signs include ା, ି, ୀ, ୁ, ୂ, ୃ, େ, ୈ, ୋ, and ୌ. Some signs visually combine around a consonant, but Unicode stores the logical sequence and the rendering system shapes it.",
          "Independent vowel letters and dependent vowel signs are not interchangeable. For example, ଆ is an independent vowel letter, while ା is a sign that attaches to a consonant.",
          "Unicode specifies atomic encoding for Odia vowel letters such as ଆ, ଐ, and ଔ. Do not construct these as sequences of another vowel plus a sign when entering or storing text.",
        ],
        bullets: [
          "କ + ା → କା",
          "କ + ି → କି",
          "କ + ୀ → କୀ",
          "କ + ୁ → କୁ",
          "କ + ୂ → କୂ",
          "କ + ୃ → କୃ",
          "କ + େ → କେ",
          "କ + ୈ → କୈ",
          "କ + ୋ → କୋ",
          "କ + ୌ → କୌ",
        ],
      },
      numerals: {
        title: "Odia Numerals",
        resourceIds: ["OD-R01"],
        paragraphs: [
          "The Odia digit set is ୦ ୧ ୨ ୩ ୪ ୫ ୬ ୭ ୮ ୯, corresponding to Western digits 0 through 9.",
          "Western digits are also common in modern digital writing. A typing interface should preserve the numeral style entered by the user unless the user explicitly asks for conversion.",
        ],
      },
      specialCharacters: {
        title: "Virama, Nasal Marks, and Other Signs",
        resourceIds: ["OD-R01", "OD-R02"],
        paragraphs: [
          "The virama (୍), also called halanta, suppresses the inherent vowel of a consonant and participates in conjunct formation. A visible virama may appear in the written result depending on the consonant sequence and shaping.",
          "Anusvara (ଂ) and candrabindu (ଁ) are separate marks. Unicode identifies candrabindu as a nasal-vowel mark; anusvara is used in nasal contexts and may interact with the following consonant. They should not be taught as interchangeable symbols.",
          "Visarga (ଃ) occurs in Sanskrit-derived and other learned forms. Nukta (଼) is an additional combining mark used in particular extended orthographic or transliteration contexts; neither should be presented as a routine replacement for a core consonant.",
          "The danda (।) is a traditional sentence-ending punctuation mark. The double danda (॥) is also used in some literary and verse contexts.",
        ],
      },
      examples: {
        title: "Everyday Odia Words and Phrases",
        introduction: "These examples demonstrate common Odia writing. Roman forms are learner-friendly cues, not a formal romanization standard.",
        items: [
          { native: "ଓଡ଼ିଆ", roman: "oḍiā", meaning: "Odia" },
          { native: "ନମସ୍କାର", roman: "namaskāra", meaning: "hello / greetings" },
          { native: "ଧନ୍ୟବାଦ", roman: "dhanyabāda", meaning: "thank you" },
          { native: "ପାଣି", roman: "pāṇi", meaning: "water" },
          { native: "ଘର", roman: "ghara", meaning: "house / home" },
          { native: "ଆପଣ କେମିତି ଅଛନ୍ତି?", roman: "āpaṇa kemiti achhanti?", meaning: "How are you?" },
          { native: "ମୁଁ", roman: "mũ", meaning: "I" },
        ],
      },
      typingGuide: {
        title: "Typing Odia with Roman Letters",
        paragraphs: [
          "Type Odia words with Roman letters and choose the Odia-script suggestion that matches your intended word. This is transliteration: it changes the writing system, not the language or meaning.",
          "Everyday Roman input is flexible and may use different spellings for the same Odia sound. Formal transliteration systems are more systematic, but they are not identical to casual phonetic typing.",
          "Use the surrounding sentence to select the correct suggestion. Similar Roman inputs can produce different Odia words, and automated suggestions should be reviewed before publishing important text.",
          "TypeIndian uses its configured Google Input Tools provider for Odia suggestions. The examples in this guide are illustrative and do not promise a particular provider suggestion order.",
        ],
        examples: [
          { input: "namaskar", output: "ନମସ୍କାର", explanation: "A common greeting." },
          { input: "dhanyabad", output: "ଧନ୍ୟବାଦ", explanation: "A common expression of thanks." },
          { input: "pani", output: "ପାଣି", explanation: "The word for water." },
          { input: "odia", output: "ଓଡ଼ିଆ", explanation: "The name of the language." },
        ],
        notes: [
          "Choose a suggestion based on meaning and sentence context.",
          "Casual Roman input is not a formal transliteration standard.",
          "Check spelling before using generated text in formal or public material.",
          "The tool transliterates Odia; it does not translate English sentences.",
        ],
      },
      commonMistakes: {
        title: "Common Odia Writing and Typing Mistakes",
        introduction: "These points help distinguish letters, dependent signs, conjuncts, and the roles of combining marks.",
        items: [
          {
            incorrect: "Treating a vowel sign as an independent vowel letter",
            correct: "Use independent vowels at the beginning of a syllable and matras with consonants.",
            explanation: "Independent letters and dependent signs have different roles and Unicode encodings.",
          },
          {
            incorrect: "Typing a conjunct as if it were a single basic consonant",
            correct: "Understand conjuncts as consonant sequences joined with virama.",
            explanation: "For example, କ୍ଷ is formed from କ + ୍ + ଷ.",
          },
          {
            incorrect: "Confusing anusvara and candrabindu",
            correct: "Learn the separate orthographic roles of ଂ and ଁ.",
            explanation: "They are distinct Unicode characters and are not interchangeable.",
          },
          {
            incorrect: "Rebuilding an independent vowel from a visually similar sequence",
            correct: "Use the atomic Odia vowel character defined by Unicode.",
            explanation: "Unicode explicitly specifies atomic encoding for several Odia vowel letters.",
          },
          {
            incorrect: "Assuming every Roman spelling has only one Odia output",
            correct: "Choose suggestions using word meaning and sentence context.",
            explanation: "Phonetic input is ambiguous and provider suggestions can vary.",
          },
          {
            incorrect: "Assuming Odia and Hindi share the same spelling rules because both are Brahmic scripts",
            correct: "Learn Odia-specific letters, pronunciation, and orthographic conventions.",
            explanation: "Related writing-system structures do not make language rules interchangeable.",
          },
        ],
      },
    },

    cta: {
      title: "Ready to start typing in Odia?",
      description:
        "Type Odia words with Roman letters and select the matching Odia-script suggestion in the TypeIndian editor.",
      button: "Open Odia Typing Tool →",
    },
    faq: LEARN_ODIA_FAQ,
  },

  alphabet: odiaAlphabet,

  labels: {
    alphabet: {
      title: "Learn Odia Letters",
      description:
        "Explore Odia vowels, consonants, vowel signs, conjuncts, special marks, and native numerals. Select a character to insert it into the typing editor.",
      vowels: "Independent Vowels (ସ୍ୱରବର୍ଣ୍ଣ)",
      consonants: "Core Consonants (ବ୍ୟଞ୍ଜନବର୍ଣ୍ଣ)",
      extensions: "Conjuncts and Specialist Extensions",
      vowelSigns: "Dependent Vowel Signs (ମାତ୍ରା)",
      symbols: "Virama, Nasal Marks, and Punctuation",
      numerals: "Odia Numerals",
    },
  },

  faq: ODIA_FAQ,

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
