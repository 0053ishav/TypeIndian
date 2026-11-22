import type { Language } from "@/types/language";

import { malayalamAlphabet } from "./alphabet";
import { malayalamResearch } from "./research";
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
    subtitle: "Type in English and convert instantly to മലയാളം",
    intro:
      "Write Malayalam naturally using English letters with TypeIndian's Malayalam typing tool. Type Malayalam words phonetically in Roman letters, then choose the matching Malayalam-script suggestion. No keyboard installation or login is required.",
    learnLink: {
      href: "/learn/malayalam",
      label: "Learn Malayalam Typing (Malayalam Script)",
      description:
        "Understand Malayalam letters, pronunciation, script, and typing fundamentals.",
    },
    seo: {
      title: "Malayalam Typing Tool (English to Malayalam)",
      description:
        "Free English-letter-to-Malayalam typing tool. Type Malayalam words phonetically in Roman letters and choose Malayalam-script suggestions in your browser.",
      keywords: [
        "English to Malayalam typing",
        "Malayalam typing",
        "Malayalam typing online",
        "Malayalam transliteration",
        "phonetic Malayalam typing",
        "Malayalam keyboard",
        "Malayalam typing tool",
        "Roman to Malayalam",
        "TypeIndian Malayalam",
      ],
      openGraph: {
        title: "Malayalam Typing Tool - TypeIndian",
        description:
          "Type Malayalam words with Roman letters and choose Malayalam-script suggestions.",
        locale: "ml_IN",
      },
      twitter: {
        title: "Malayalam Typing Tool - TypeIndian",
        description: "Free browser-based Roman-to-Malayalam typing.",
      },
    },
  },

  learn: {
    meta: {
      title: "Learn Malayalam Typing",
      description:
        "Learn Malayalam typing with a beginner-friendly guide to the Malayalam script, vowels, consonants, vowel signs, chillu forms, numerals, and phonetic input.",
      cta: "Start Typing in Malayalam →",
    },
    seo: {
      title: "Learn Malayalam Typing – Script, Alphabet and Beginner Guide",
      description:
        "Learn the Malayalam alphabet and script, understand vowels, consonants, candrakkala, chillu forms, numerals, and Roman-letter typing.",
      keywords: [
        "learn Malayalam typing",
        "Malayalam alphabet",
        "Malayalam script",
        "Malayalam vowels",
        "Malayalam consonants",
        "Malayalam chillu letters",
        "Malayalam vowel signs",
        "English to Malayalam typing guide",
        "TypeIndian Malayalam",
      ],
      openGraph: {
        title: "Learn Malayalam Typing - Beginner Guide | TypeIndian",
        description:
          "A researched beginner guide to Malayalam letters, script behaviour, and phonetic typing.",
        locale: "ml_IN",
      },
      twitter: {
        title: "Learn Malayalam Typing - TypeIndian",
        description:
          "Learn Malayalam letters, script behaviour, and Roman-letter typing.",
      },
    },

    about: {
      title: "About Malayalam Language",
      paragraphs: [
        "Malayalam (മലയാളം) is a Dravidian language spoken primarily in Kerala and also in Lakshadweep and the Mahé region of Puducherry. Malayalam-speaking communities are found around the world.",
        "Malayalam has a long literary history and was recognized by the Government of India as a Classical Language in 2013. It is included in the Eighth Schedule of the Constitution of India.",
        "Malayalam is written in its own Brahmic script, known for rounded letterforms, a rich system of consonant conjuncts, and distinctive sounds represented by letters such as ഴ.",
      ],
    },

    script: {
      title: "Malayalam Script",
      paragraphs: [
        "The Malayalam script is a left-to-right abugida. A consonant normally carries an inherent vowel unless a dependent vowel sign or the virama (്), called candrakkala in Malayalam, changes it.",
        "The script includes independent vowels, consonants, dependent vowel signs, anusvara and visarga, conjuncts, chillu forms, and native digits. Some vowel signs render to the left or on both sides of a consonant even though they follow it in logical Unicode order.",
      ],
      bullets: [
        "Written from left to right",
        "Uses the Malayalam Unicode block U+0D00–U+0D7F",
        "Consonants normally carry an inherent vowel",
        "Uses dependent vowel signs and candrakkala",
        "Has dedicated chillu forms for certain pure consonants",
      ],
    },

    alphabet: {
      vowels: {
        title: "Vowels (സ്വരാക്ഷരങ്ങൾ)",
        description:
          "This learner chart presents 13 commonly taught core independent vowels. Sanskrit vocalic letters and historical forms are listed separately because chart conventions vary.",
        resourceIds: ["MAL-R01", "MAL-R02", "MAL-R07"],
      },
      consonants: {
        title: "Consonants (വ്യഞ്ജനാക്ഷരങ്ങൾ)",
        description:
          "The basic learner inventory contains 36 consonant letters, including the distinctive റ, ള, and ഴ. This orthographic chart should not be confused with a complete phoneme inventory.",
        resourceIds: ["MAL-R01", "MAL-R06", "MAL-R07"],
      },
      extensions: {
        title: "Chillu, Sanskrit, and Specialist Letters",
        description:
          "These include common chillu forms, Sanskrit-related vocalic letters, historical characters, and specialist scholarly consonants. They are not all part of the everyday core alphabet.",
        resourceIds: ["MAL-R01", "MAL-R02", "MAL-R06"],
      },
      vowelSigns: {
        title: "Vowel Signs (സ്വരചിഹ്നങ്ങൾ)",
        description:
          "Dependent vowel signs modify the inherent vowel of a consonant. Some have multiple visible parts or appear before the consonant while following it in logical text order.",
        resourceIds: ["MAL-R01", "MAL-R02"],
      },
      symbols: {
        title: "Special Signs and Symbols",
        description:
          "Anusvara, visarga, candrabindu, avagraha, and candrakkala have distinct roles. Historical and Sanskrit-specific signs should not be mistaken for everyday Malayalam letters.",
        resourceIds: ["MAL-R01", "MAL-R02"],
      },
      numerals: {
        title: "Malayalam Numerals",
        description:
          "Malayalam has native digits, although Western digits are also widely used in contemporary digital writing.",
        resourceIds: ["MAL-R02"],
      },
    },

    curriculum: {
      research: malayalamResearch,
      history: {
        title: "Malayalam Language and Its History",
        resourceIds: ["MAL-R03", "MAL-R04", "MAL-R07"],
        paragraphs: [
          "Malayalam is a Dravidian language spoken mainly in Kerala, with established communities in Lakshadweep, the Mahé region of Puducherry, and elsewhere. Its vocabulary and literary history reflect long contact with neighbouring languages and with Sanskrit, Arabic, and English.",
          "Malayalam is included in the Eighth Schedule of the Constitution of India and was recognized as a Classical Language in 2013. The Kerala Official Languages Act, 1969 adopts both Malayalam and English for official purposes in the State.",
          "Malayalam has a substantial literary and inscriptional history. The script developed over centuries and should be understood as a living writing system rather than as a fixed alphabet frozen at one historical point.",
        ],
      },
      writingSystem: {
        title: "How the Malayalam Script Works",
        resourceIds: ["MAL-R01", "MAL-R02", "MAL-R06"],
        paragraphs: [
          "Malayalam is a left-to-right Brahmic abugida. A consonant normally carries the inherent vowel അ. A dependent vowel sign changes that vowel, while the virama (്), called candrakkala in Malayalam, suppresses or modifies the inherent vowel according to its orthographic context.",
          "The Malayalam script occupies Unicode block U+0D00–U+0D7F. Unicode encodes certain vowels as single characters even where their visual history might suggest a combination; do not replace an encoded vowel with a visually reconstructed sequence.",
          "Consonant clusters are written with sequences involving the virama. Familiar forms such as ക്ഷ and ജ്ഞ are conjuncts, not independent basic consonant letters. Malayalam conjuncts may be horizontal, vertical, ligated, or juxtaposed depending on the sequence and font.",
          "Unicode stores characters in logical order. Some dependent vowel signs render to the left or on both sides of the consonant they modify, but their encoded order follows the consonant. Applications should preserve the logical sequence and rely on correct script shaping.",
        ],
        bullets: [
          "Independent vowel: ആ",
          "Consonant with inherent vowel: ക",
          "Dependent vowel sign: കാ",
          "A left-positioned vowel sign: കി",
          "Candrakkala / virama: ക്",
          "Conjunct examples: ക്ഷ and ജ്ഞ",
          "Chillu examples: ൻ, ർ, ൽ, ൾ",
        ],
      },
      consonantClassification: {
        title: "Malayalam Consonants and Their Traditional Groups",
        resourceIds: ["MAL-R01", "MAL-R06", "MAL-R07"],
        paragraphs: [
          "A common basic Malayalam alphabet chart lists 36 consonants. The first 25 are arranged in five traditional varga groups, followed by a set of ungrouped consonants. This is a conventional orthographic inventory; phonetic descriptions may classify Malayalam sounds differently.",
          "The five varga groups are velar, palatal, retroflex, dental, and bilabial. Each group traditionally contains five letters, arranged by articulation and aspiration contrasts.",
          "The ungrouped series includes യ ര റ ല ള ഴ വ ശ ഷ സ ഹ. Pay particular attention to റ, ള, and ഴ: they represent distinct Malayalam consonant letters and are not interchangeable spellings.",
          "Special scholarly letters such as ഩ and ഺ are not included in the everyday 36-letter learner chart. Chillu forms are also treated separately because they encode consonants without an inherent vowel.",
        ],
        bullets: [
          "Velar: ക ഖ ഗ ഘ ങ",
          "Palatal: ച ഛ ജ ഝ ഞ",
          "Retroflex: ട ഠ ഡ ഢ ണ",
          "Dental: ത ഥ ദ ധ ന",
          "Bilabial: പ ഫ ബ ഭ മ",
          "Ungrouped: യ ര റ ല ള ഴ വ ശ ഷ സ ഹ",
        ],
      },
      vowelSigns: {
        title: "Independent Vowels and Malayalam Vowel Signs",
        resourceIds: ["MAL-R01", "MAL-R02"],
        paragraphs: [
          "A practical modern learner chart commonly presents 13 core independent vowels: അ, ആ, ഇ, ഈ, ഉ, ഊ, ഋ, എ, ഏ, ഐ, ഒ, ഓ, and ഔ. The Sanskrit vocalic letter ഌ and its dependent forms are specialist characters and are best studied separately.",
          "When a vowel follows a consonant, Malayalam usually writes it with a dependent vowel sign rather than a separate independent vowel. The sign changes the consonant's inherent vowel അ.",
          "Several signs have non-linear visual placement. The signs െ, േ, and ൈ appear to the left of the consonant; the o and ō signs have visible components on both sides. They nevertheless follow the consonant in logical Unicode order.",
          "Modern Malayalam commonly uses the au length mark ൗ as the dependent au sign. The older form ൌ is retained for historical text compatibility and should not be presented as the default modern spelling.",
        ],
        bullets: [
          "ക + ാ → കാ",
          "ക + ി → കി",
          "ക + ീ → കീ",
          "ക + ു → കു",
          "ക + ൂ → കൂ",
          "ക + ൃ → കൃ",
          "ക + െ → കെ",
          "ക + േ → കേ",
          "ക + ൈ → കൈ",
          "ക + ൊ → കൊ",
          "ക + ോ → കോ",
          "ക + ൗ → കൗ",
        ],
      },
      numerals: {
        title: "Malayalam Numerals",
        resourceIds: ["MAL-R02"],
        paragraphs: [
          "Malayalam has ten native digits: ൦ ൧ ൨ ൩ ൪ ൫ ൬ ൭ ൮ ൯. They correspond to Western digits 0 through 9.",
          "Western digits are widely used in modern digital writing. A typing tool should preserve the user's chosen numeral system unless conversion is explicitly requested.",
        ],
      },
      specialCharacters: {
        title: "Candrakkala, Chillus, and Other Signs",
        resourceIds: ["MAL-R01", "MAL-R02", "MAL-R06"],
        paragraphs: [
          "The sign ് is named MALAYALAM SIGN VIRAMA in Unicode and is called candrakkala in Malayalam. It participates in consonant conjuncts and also has context-sensitive word-final behaviour; it should not be explained only as a generic dead-consonant mark.",
          "Chillu forms are dedicated pure-consonant characters. Common modern forms include ൺ, ൻ, ർ, ൽ, ൾ, and ൿ. They are encoded separately from ordinary consonant-plus-virama sequences, and legacy text may use older sequences for some chillus.",
          "Anusvara (ം) and visarga (ഃ) are common signs. Candrabindu (ഁ) and avagraha (ഽ) have more restricted or specialist uses. The Unicode block also contains historical virama variants and Sanskrit-specific characters.",
          "Malayalam has a traditional numeral system and specialist numeric symbols. The everyday digits ൦ through ൯ are distinct from historic fractions and date or measurement marks.",
        ],
      },
      examples: {
        title: "Everyday Malayalam Words",
        introduction: "These examples pair common Malayalam words with readable Roman learner cues. Roman spellings are illustrative and are not a single formal transliteration scheme.",
        items: [
          { native: "മലയാളം", roman: "malayāḷam", meaning: "Malayalam" },
          { native: "നമസ്കാരം", roman: "namaskāram", meaning: "hello / greetings" },
          { native: "നന്ദി", roman: "nandi", meaning: "thank you" },
          { native: "വെള്ളം", roman: "veḷḷam", meaning: "water" },
          { native: "വീട്", roman: "vīṭŭ", meaning: "house / home" },
          { native: "സുഖമാണോ?", roman: "sukhamāṇō?", meaning: "How are you?" },
          { native: "ഞാൻ", roman: "ñān", meaning: "I" },
        ],
      },
      typingGuide: {
        title: "Typing Malayalam with Roman Letters",
        paragraphs: [
          "Type Malayalam words using Roman letters and select the Malayalam-script suggestion that matches the word you intend. This is transliteration: it changes the script, not the language or meaning.",
          "Informal Roman input is flexible. It may represent long vowels, retroflex consonants, the contrast between റ and ര, and the sound ഴ in several ways. Formal Library of Congress or ISO 15919 romanization uses scholarly conventions and is not the same as casual typing.",
          "The same Roman input can be ambiguous, and dialect, pronunciation, and word context matter. Use the surrounding sentence to select the intended suggestion and proofread names, grammatical endings, and formal writing.",
          "TypeIndian uses its configured Google Input Tools provider for Malayalam suggestions. The examples in this guide are language-learning examples and do not guarantee the provider's exact suggestion order.",
        ],
        examples: [
          { input: "malayalam", output: "മലയാളം", explanation: "The name of the language." },
          { input: "namaskaram", output: "നമസ്കാരം", explanation: "A common greeting." },
          { input: "nandi", output: "നന്ദി", explanation: "A common expression of thanks." },
          { input: "vellam", output: "വെള്ളം", explanation: "The word for water." },
        ],
        notes: [
          "Choose suggestions by meaning and sentence context.",
          "Roman input is not a one-to-one spelling standard.",
          "Learn to distinguish ര, റ, ള, and ഴ when proofreading.",
          "The typing tool transliterates Malayalam words; it does not translate English sentences.",
        ],
      },
      commonMistakes: {
        title: "Common Malayalam Writing and Typing Mistakes",
        introduction: "These mistakes come from mixing up core letters, specialist Sanskrit forms, chillu characters, dependent vowel signs, and informal transliteration.",
        items: [
          {
            incorrect: "Counting every Sanskrit or historical vowel character as an everyday Malayalam vowel",
            correct: "Learn the core learner chart first and study specialist forms separately.",
            explanation: "Unicode contains characters that are not part of ordinary modern Malayalam spelling.",
          },
          {
            incorrect: "Treating ക്ഷ and ജ്ഞ as independent alphabet letters",
            correct: "Learn them as conjunct sequences formed with consonants and virama.",
            explanation: "They are not separately encoded basic consonant letters.",
          },
          {
            incorrect: "Writing every word-final pure consonant as an ordinary consonant plus virama",
            correct: "Learn the appropriate chillu forms and their Unicode representation.",
            explanation: "Malayalam has dedicated chillu characters and legacy encodings that require care.",
          },
          {
            incorrect: "Reordering a vowel sign because it appears to the left of a consonant",
            correct: "Preserve logical Unicode order and let shaping render the visible form.",
            explanation: "Visual placement does not necessarily match encoded character order.",
          },
          {
            incorrect: "Assuming casual Roman input follows ISO 15919",
            correct: "Treat consumer transliteration input as flexible and select suggestions by context.",
            explanation: "Formal romanization and practical phonetic typing serve different purposes.",
          },
          {
            incorrect: "Confusing ര and റ or ള and ഴ",
            correct: "Recognize each as a distinct letter and proofread the selected suggestion.",
            explanation: "These distinctions can change pronunciation and meaning.",
          },
        ],
      },
    },

    cta: {
      title: "Ready to start typing in Malayalam?",
      description:
        "Type Malayalam words with Roman letters and choose the correct Malayalam-script suggestion in the TypeIndian editor.",
      button: "Open Malayalam Typing Tool →",
    },
    faq: LEARN_MALAYALAM_FAQ,
  },

  alphabet: malayalamAlphabet,

  labels: {
    alphabet: {
      title: "Learn Malayalam Letters",
      description:
        "Explore core Malayalam letters, vowel signs, specialist forms, and numerals. Select a character to insert it into the typing editor.",
      vowels: "Vowels (സ്വരാക്ഷരങ്ങൾ)",
      consonants: "Consonants (വ്യഞ്ജനാക്ഷരങ്ങൾ)",
      extensions: "Chillu, Sanskrit, and Specialist Letters",
      vowelSigns: "Vowel Signs (സ്വരചിഹ്നങ്ങൾ)",
      symbols: "Special Signs and Symbols",
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
