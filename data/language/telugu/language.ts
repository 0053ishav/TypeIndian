import type { Language } from "@/types/language";

import { teluguAlphabet } from "./alphabet";
import { teluguResearch } from "./research";
import { LEARN_TELUGU_FAQ, TELUGU_FAQ } from "./faq";

export const telugu: Language = {
  id: "telugu",
  slug: "telugu",

  name: "Telugu",
  nativeName: "తెలుగు",

  locale: "te-IN",
  direction: "ltr",

  script: "Telugu",

  transliteration: {
    engine: "google",
    languageCode: "te",
  },

  typing: {
    title: "Telugu Typing Tool",

    subtitle:
      "Type in English and convert instantly to తెలుగు",

    intro:
      "Write Telugu naturally using English letters with TypeIndian's Telugu typing tool. Simply type phonetically in English and instantly convert your words into the Telugu script. No keyboard installation, no login - fast and accurate Telugu transliteration directly in your browser.",

    learnLink: {
      href: "/learn/telugu",

      label: "Learn Telugu Typing (Telugu Script)",

      description:
        "Understand Telugu letters, pronunciation, script, and typing fundamentals.",
    },

    seo: {
      title: "Telugu Typing Tool (English to Telugu)",

      description:
        "Free English to Telugu typing tool. Type using English letters and instantly convert your text into the Telugu script. Fast, accurate phonetic transliteration with no login or installation required.",

      keywords: [
        "English to Telugu typing",
        "Telugu typing",
        "Telugu typing online",
        "Telugu transliteration",
        "phonetic Telugu typing",
        "Telugu typing tool",
        "English to Telugu converter",
        "Telugu keyboard online",
        "Telugu script typing",
        "TypeIndian Telugu",
      ],

      openGraph: {
        title: "Telugu Typing Tool - TypeIndian",

        description:
          "Type in English and instantly write in Telugu using accurate phonetic transliteration.",

        locale: "te_IN",
      },

      twitter: {
        title: "Telugu Typing Tool - TypeIndian",

        description:
          "Fast, free, and browser-based English to Telugu typing.",
      },
    },
  },
  learn: {
    meta: {
      title: "Learn Telugu Typing",

      description:
        "Learn Telugu typing with a researched beginner guide to the Telugu script, vowels, consonants, vowel signs, virama, conjuncts, numerals, and Roman-letter input.",

      cta: "Start Typing in Telugu →",
    },

    seo: {
      title:
        "Learn Telugu Typing (English to Telugu) – Beginner Guide",

      description:
        "Learn Telugu writing and typing: explore the Telugu alphabet, vowel signs, consonant groups, virama, conjuncts, native digits, and Roman-letter transliteration.",

      keywords: [
        "learn Telugu typing",
        "Telugu typing tutorial",
        "Telugu alphabet",
        "Telugu script",
        "Telugu vowels",
        "Telugu consonants",
        "English to Telugu typing guide",
        "Telugu typing for beginners",
        "TypeIndian Telugu",
      ],

      openGraph: {
        title:
          "Learn Telugu Typing - Beginner Guide | TypeIndian",

        description:
          "A researched beginner guide to Telugu script structure, alphabet, vowel signs, and phonetic typing.",

        locale: "te_IN",
      },

      twitter: {
        title: "Learn Telugu Typing - TypeIndian",

        description:
          "Learn Telugu script, alphabet, and Roman-letter typing with TypeIndian.",
      },
    },

    about: {
      title: "About Telugu Language",
      paragraphs: [
        "Telugu (తెలుగు) is a Dravidian language spoken primarily in Andhra Pradesh and Telangana and by communities throughout India and the world. It is one of the 22 languages in the Eighth Schedule of the Constitution of India and is recognized as a Classical Language.",
        "Telugu has a long literary tradition and is written in the Telugu script, a left-to-right Brahmic-derived abugida. The Telugu and Kannada scripts share historical ancestry, but each has its own letterforms and orthographic conventions.",
        "Telugu's script is known for rounded forms and the characteristic talakattu headstroke found on many consonants. Its written tradition includes a modern everyday inventory as well as historical and Sanskrit-related characters."
      ],
    },

    script: {
      title: "Telugu Script",
      paragraphs: [
        "Telugu is a left-to-right abugida. A consonant normally carries an inherent vowel /a/. A dependent vowel sign replaces that vowel, while the virama (్), also called pollu or halant, suppresses it.",
        "The Telugu script occupies Unicode block U+0C00–U+0C7F. It includes independent vowels, consonants, dependent vowel signs, combining signs, virama, and native digits.",
        "Telugu consonant clusters are encoded as sequences of consonants and virama. Depending on the font and shaping engine, the second consonant may appear below or in a transformed conjunct form. Store characters in logical Unicode order rather than manually rearranging them to match their visible shape."
      ],
      bullets: [
        "Written from left to right",
        "Uses the Telugu Unicode block U+0C00–U+0C7F",
        "Consonants normally carry an inherent /a/ vowel",
        "Dependent vowel signs replace the inherent vowel",
        "Virama (్) suppresses the inherent vowel and participates in clusters"
      ],
    },

    alphabet: {
      vowels: {
        title: "Vowels (అచ్చులు)",
        description: "A common Telugu vowel inventory contains 14 independent vowel letters. ఌ is rare in everyday Telugu; extended Sanskrit vocalic forms are shown separately."
      },
      consonants: {
        title: "Consonants (హల్లులు)",
        description: "The traditional chart presents 36 consonants: five varga groups of five letters each, followed by 11 additional consonants. This is an orthographic chart, not a count of distinct speech sounds."
      },
      extensions: {
        title: "Historical and Extended Characters",
        description: "Rare historical forms, extended Sanskrit vocalic letters, and familiar conjunct sequences are separated from the core alphabet. A conjunct is a sequence, not an independent basic letter."
      },
      vowelSigns: {
        title: "Dependent Vowel Signs (గుణింతాలు)",
        description: "These signs attach to a consonant and replace its inherent vowel. Unicode encodes certain visually composite signs as single characters."
      },
      symbols: {
        title: "Special Signs",
        description: "Virama, anusvara, visarga, candrabindu, nukta, avagraha, and vowel length marks have different functions and should not be confused with ordinary letters."
      },
      numerals: {
        title: "Telugu Numerals",
        description: "Telugu has ten native decimal digits, ౦ through ౯. Western digits are also widely used in modern digital writing."
      },
    },

    curriculum: {
      research: teluguResearch,
      history: {
        title: "Telugu Language and Its History",
        resourceIds: ["TEL-R03", "TEL-R06"],
        paragraphs: [
          "Telugu (తెలుగు) belongs to the Dravidian language family and is spoken primarily in Andhra Pradesh and Telangana, with speaker communities across India and abroad.",
          "Telugu is included in the Eighth Schedule of the Constitution of India and is recognized by the Government of India as a Classical Language. Its literary history is extensive and continues as a living modern language.",
          "The Telugu script became distinct by the thirteenth century CE and shares historical ancestry with Kannada. Similar ancestry does not make the two scripts interchangeable."
        ],
      },
      writingSystem: {
        title: "How the Telugu Script Works",
        resourceIds: ["TEL-R01", "TEL-R02", "TEL-R03"],
        paragraphs: [
          "Telugu is an abugida: a consonant normally includes the inherent vowel /a/. For example, క represents ka. A dependent vowel sign changes that vowel, as in కా (kā), కి (ki), and కు (ku).",
          "The script is encoded in Unicode block U+0C00–U+0C7F. Unicode stores Telugu vowel letters and several vowel signs atomically, even when their visual construction might suggest multiple parts. Use the encoded character rather than decomposing it into look-alike pieces.",
          "The virama (్) removes the inherent vowel. Consonant clusters are represented through consonant-plus-virama sequences, and shaping software determines the visible conjunct or subscript form.",
          "Many Telugu consonants have a headstroke known as talakattu. The appearance of this stroke can change when a virama or certain vowel signs are attached. Rendering should be left to a Unicode-aware shaping engine."
        ],
        bullets: [
          "Independent vowel: ఆ",
          "Consonant with inherent vowel: క",
          "Consonant plus dependent vowel sign: క + ా → కా",
          "Consonant plus virama: క + ్ → క్",
          "Consonant cluster: గ + ్ + గ → గ్గ",
          "Native digits: ౦ ౧ ౨ ౩ ౪ ౫ ౬ ౭ ౮ ౯"
        ],
      },
      consonantClassification: {
        title: "Telugu Consonants and Varga Groups",
        resourceIds: ["TEL-R02", "TEL-R03"],
        paragraphs: [
          "The traditional Telugu consonant chart has 35 letters. The first 25 are arranged into five varga groups of five, followed by 10 additional consonants. The chart describes conventional orthography and Sanskrit-derived distinctions; it should not be read as a direct inventory of every contrast in everyday pronunciation.",
          "The five varga rows are velar, palatal, retroflex, dental, and bilabial. Each row traditionally orders unaspirated and aspirated voiceless stops, voiced and voiced aspirated stops, and a nasal.",
          "The additional letters are య ర ఱ ల ళ వ శ ష స హ. ఱ is retained in traditional charts but is uncommon in much contemporary standard usage. ళ is a distinct retroflex lateral and should not be confused with ల.",
          "Clusters such as క్ష and జ్ఞ are formed from consonant sequences and virama. They are familiar written forms, not additional independent basic consonants."
        ],
        bullets: [
          "Velar: క ఖ గ ఘ ఙ",
          "Palatal: చ ఛ జ ఝ ఞ",
          "Retroflex: ట ఠ డ ఢ ణ",
          "Dental: త థ ద ధ న",
          "Bilabial: ప ఫ బ భ మ",
          "Additional: య ర ఱ ల ళ వ శ ష స హ"
        ],
      },
      vowelSigns: {
        title: "Independent Vowels and Telugu Gunింతాలు",
        resourceIds: ["TEL-R01", "TEL-R02", "TEL-R03"],
        paragraphs: [
          "The common independent-vowel inventory has 14 letters: అ, ఆ, ఇ, ఈ, ఉ, ఊ, ఋ, ఌ, ఎ, ఏ, ఐ, ఒ, ఓ, and ఔ. ఌ is rare in everyday Telugu. The obsolete or extended Sanskrit vocalic letters ౠ and ౡ are treated separately.",
          "A vowel following a consonant is usually written with a dependent sign rather than as a separate independent vowel. The sign replaces the consonant's inherent /a/ vowel.",
          "Telugu has dependent signs for ā, i, ī, u, ū, vocalic r, vocalic rr, e, ē, ai, o, ō, and au. The sign ై is encoded as one character; do not manually replace it with visually similar component signs.",
          "Unicode defines logical character sequences. Some vowel signs have visible parts around the consonant, but their encoded order must not be rearranged to imitate the rendered glyph."
        ],
        bullets: [
          "క + ా → కా",
          "క + ి → కి",
          "క + ీ → కీ",
          "క + ు → కు",
          "క + ూ → కూ",
          "క + ృ → కృ",
          "క + ౄ → కౄ",
          "క + ె → కె",
          "క + ే → కే",
          "క + ై → కై",
          "క + ొ → కొ",
          "క + ో → కో",
          "క + ౌ → కౌ"
        ],
      },
      numerals: {
        title: "Telugu Numerals",
        resourceIds: ["TEL-R02"],
        paragraphs: [
          "Telugu has ten native decimal digits: ౦ ౧ ౨ ౩ ౪ ౫ ౬ ౭ ౮ ౯, corresponding to Western digits 0 through 9.",
          "Western digits are also common in modern websites, forms, prices, and digital documents. Preserve the user's numeral style unless conversion is explicitly requested."
        ],
      },
      specialCharacters: {
        title: "Virama, Nasal Signs, and Other Marks",
        resourceIds: ["TEL-R01", "TEL-R02"],
        paragraphs: [
          "The virama (్), called pollu or halant, suppresses the inherent vowel of a consonant and participates in consonant clusters. A displayed conjunct is still based on an encoded sequence; it is not necessarily a separate Unicode letter.",
          "Anusvara (ం, sunna) and visarga (ః) are common signs. Candrabindu forms such as ఁ (arasunna) also occur. Their pronunciation and use depend on linguistic and orthographic context.",
          "The nukta (఼) and avagraha (ఽ) have specialized uses. Telugu length marks ౕ and ౖ are encoded separately and should not be confused with the ordinary dependent vowel signs.",
          "The Unicode block also includes historical phonetic letters and other specialist signs. Unicode availability does not mean every encoded character belongs in a beginner's everyday alphabet chart."
        ],
      },
      examples: {
        title: "Everyday Telugu Words and Phrases",
        introduction: "These are common Telugu examples. Roman forms are practical learner cues, not a promise of one fixed transliteration standard or provider suggestion.",
        items: [
          { native: "తెలుగు", roman: "telugu", meaning: "Telugu" },
          { native: "నమస్కారం", roman: "namaskāram", meaning: "hello / greetings" },
          { native: "ధన్యవాదాలు", roman: "dhanyavādālu", meaning: "thank you" },
          { native: "నీళ్లు", roman: "nīḷḷu", meaning: "water" },
          { native: "ఇల్లు", roman: "illu", meaning: "house / home" },
          { native: "మీరు ఎలా ఉన్నారు?", roman: "mīru elā unnāru?", meaning: "How are you? (polite)" },
          { native: "నేను", roman: "nēnu", meaning: "I" }
        ],
      },
      typingGuide: {
        title: "Typing Telugu with Roman Letters",
        paragraphs: [
          "Type a Telugu word using Roman letters and choose the Telugu-script suggestion that matches the word you intend. This is transliteration: it changes the script, not the language or meaning.",
          "Casual Roman input is not a strict one-to-one standard. Long vowels, retroflex sounds, aspirated consonants, and nasal sounds may be typed in more than one way. Context and the available suggestions matter.",
          "Formal systems such as ISO 15919 and the Library of Congress Telugu romanization table use scholarly conventions and diacritics. They are useful references, but they are not the same as everyday phonetic typing.",
          "TypeIndian uses its configured Google Input Tools provider for Telugu suggestions. The examples in this guide explain Telugu words and input patterns; they do not guarantee the provider's exact suggestion order or support for every name and specialist spelling."
        ],
        examples: [
          { input: "telugu", output: "తెలుగు", explanation: "The name of the language." },
          { input: "namaskaram", output: "నమస్కారం", explanation: "A common greeting." },
          { input: "dhanyavadalu", output: "ధన్యవాదాలు", explanation: "Thank you." },
          { input: "illu", output: "ఇల్లు", explanation: "House or home." }
        ],
        notes: [
          "Choose suggestions using word meaning and sentence context.",
          "Use doubled consonants where they are needed, as in ఇల్లు.",
          "Formal romanization and casual phonetic input are different systems.",
          "The tool transliterates Telugu input; it does not translate English sentences."
        ],
      },
      commonMistakes: {
        title: "Common Telugu Writing and Typing Mistakes",
        introduction: "These points focus on vowel inventories, dependent signs, consonant clusters, and Roman-letter ambiguity.",
        items: [
          {
            incorrect: "Counting ౠ and ౡ as ordinary modern Telugu vowels",
            correct: "Learn the common 14-vowel inventory, including rare ఌ, and study extended Sanskrit vocalic letters separately.",
            explanation: "The Unicode repertoire contains historical and extended characters beyond the common vowel inventory."
          },
          {
            incorrect: "Treating క్ష and జ్ఞ as independent basic consonants",
            correct: "Understand them as consonant-plus-virama sequences shaped by the rendering engine.",
            explanation: "Their familiar forms do not make them separate basic consonant letters."
          },
          {
            incorrect: "Treating every vowel sign as an independent vowel letter",
            correct: "Learn how each dependent sign changes the inherent vowel of a consonant.",
            explanation: "A dependent sign attaches to a consonant rather than standing as an independent vowel."
          },
          {
            incorrect: "Manually splitting or reordering a vowel sign to match its visible shape",
            correct: "Use the encoded Telugu character and preserve logical Unicode order.",
            explanation: "Unicode encodes several Telugu vowel forms atomically and shaping software handles their display."
          },
          {
            incorrect: "Assuming Roman input has one universally correct spelling",
            correct: "Choose transliteration suggestions using pronunciation, meaning, and sentence context.",
            explanation: "Informal Roman spellings vary and can be ambiguous."
          },
          {
            incorrect: "Confusing ల and ళ",
            correct: "Learn the distinct dental/alveolar and retroflex lateral letters.",
            explanation: "They are separate Telugu characters and are not interchangeable in spelling."
          }
        ],
      },
    },

    cta: {
      title: "Ready to start typing in Telugu?",

      description:
        "Type Telugu words with Roman letters and select the Telugu-script suggestion that matches your intended word.",

      button: "Open Telugu Typing Tool →",
    },

    faq: LEARN_TELUGU_FAQ,
  },

  alphabet: teluguAlphabet,

  labels: {
    alphabet: {
      title: "Learn Telugu Letters",

      description:
        "Explore Telugu vowels, consonants, dependent vowel signs, special signs, extended characters, and native numerals. Select a character to insert it into the typing editor.",

      vowels: "Vowels (అచ్చులు)",

      consonants: "Consonants (హల్లులు)",

      extensions: "Historical and Extended Characters",
      vowelSigns: "Dependent Vowel Signs (గుణింతాలు)",
      symbols: "Special Signs",

      numerals: "Telugu Numerals",
    },
  },

  faq: TELUGU_FAQ,

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