import type { Language } from "@/types/language";

import { nepaliAlphabet } from "./alphabet";
import { nepaliResearch } from "./research";
import { LEARN_NEPALI_FAQ, NEPALI_FAQ } from "./faq";

export const nepali: Language = {
  id: "nepali",
  slug: "nepali",
  name: "Nepali",
  nativeName: "नेपाली",
  locale: "ne-IN",
  direction: "ltr",
  script: "Devanagari",

  transliteration: {
    engine: "google",
    languageCode: "ne",
  },

  typing: {
    title: "Nepali Typing Tool",
    subtitle: "Type in English and convert instantly to नेपाली",
    intro:
      "Write Nepali naturally using English letters with TypeIndian's Nepali typing tool. Type Nepali words phonetically in Roman letters, then choose the matching Devanagari suggestion. No keyboard installation or login is required.",
    learnLink: {
      href: "/learn/nepali",
      label: "Learn Nepali Typing (Devanagari Script)",
      description:
        "Understand Nepali letters, pronunciation, Devanagari, and phonetic typing basics.",
    },
    seo: {
      title: "Nepali Typing Tool (English to Nepali)",
      description:
        "Free English-letter-to-Nepali typing tool. Type Nepali words phonetically in Roman letters and choose Devanagari suggestions in your browser.",
      keywords: [
        "English to Nepali typing",
        "Nepali typing",
        "Nepali typing online",
        "Nepali transliteration",
        "phonetic Nepali typing",
        "Nepali keyboard",
        "Nepali typing tool",
        "Roman to Nepali",
        "TypeIndian Nepali",
      ],
      openGraph: {
        title: "Nepali Typing Tool - TypeIndian",
        description:
          "Type Nepali words with Roman letters and choose Devanagari suggestions.",
        locale: "ne_IN",
      },
      twitter: {
        title: "Nepali Typing Tool - TypeIndian",
        description: "Free browser-based Roman-to-Nepali typing.",
      },
    },
  },

  learn: {
    meta: {
      title: "Learn Nepali Typing",
      description:
        "Learn Nepali typing with a beginner-friendly guide to Devanagari, vowels, consonants, vowel signs, conjuncts, nasal marks, numerals, and phonetic input.",
      cta: "Start Typing in Nepali →",
    },
    seo: {
      title: "Learn Nepali Typing – Devanagari Script, Alphabet and Beginner Guide",
      description:
        "Learn the Nepali alphabet and Devanagari script, understand vowels, consonants, matras, hal, conjuncts, raswa-dirgha spelling, numerals, and Roman-letter typing.",
      keywords: [
        "learn Nepali typing",
        "Nepali alphabet",
        "Nepali script",
        "Devanagari Nepali",
        "Nepali vowels",
        "Nepali consonants",
        "Nepali matras",
        "Nepali conjunct consonants",
        "raswa dirgha Nepali",
        "English to Nepali typing guide",
        "TypeIndian Nepali",
      ],
      openGraph: {
        title: "Learn Nepali Typing - Beginner Guide | TypeIndian",
        description:
          "A researched beginner guide to Nepali Devanagari, spelling, and phonetic typing.",
        locale: "ne_IN",
      },
      twitter: {
        title: "Learn Nepali Typing - TypeIndian",
        description: "Learn Nepali script, spelling, and Roman-letter typing.",
      },
    },

    about: {
      title: "About Nepali Language",
      paragraphs: [
        "Nepali (नेपाली) is an Indo-Aryan language and the primary language of Nepal. It is also spoken in India, including Sikkim and parts of the Darjeeling region, and by Nepali-speaking communities around the world.",
        "Nepali has a long literary history and is written primarily in Devanagari. It is a distinct language from Hindi even though the two languages share a writing system.",
        "Nepali spelling has language-specific conventions. In particular, raswa-dirgha distinctions and the treatment of Sanskrit loanwords require attention; the same Devanagari character inventory does not mean that every language follows identical orthographic rules.",
      ],
    },

    script: {
      title: "Devanagari Script for Nepali",
      paragraphs: [
        "Nepali is written in Devanagari, a left-to-right Brahmic abugida. The writing system combines independent vowel letters, consonant letters, dependent vowel signs, and combining marks to form written syllable units called akshara.",
        "A consonant normally carries an inherent vowel. A dependent vowel sign changes that vowel, while hal (्) suppresses it and participates in conjunct formation. Nepali spelling conventions determine when the inherent vowel is written or omitted; do not assume every spoken short vowel is represented by an explicit hal.",
        "Devanagari is shared by several languages, but Nepali has its own vocabulary, pronunciation, and spelling conventions. In particular, Nepali raswa-dirgha spelling should not be reduced to a generic Hindi or Sanskrit chart.",
      ],
      bullets: [
        "Written from left to right",
        "Uses the Devanagari Unicode block U+0900–U+097F",
        "A consonant normally carries an inherent vowel",
        "Uses dependent vowel signs (matras)",
        "Uses hal / virama to suppress the inherent vowel",
        "Uses conjunct consonant forms and nasalization marks",
      ],
    },

    alphabet: {
      vowels: {
        title: "Vowels (स्वर)",
        description:
          "This common Nepali learner chart presents 11 independent vowels. Sanskrit-related vocalic letters such as ॠ, ऌ, and ॡ are treated separately.",
        resourceIds: ["NEP-R01", "NEP-R02", "NEP-R04"],
      },
      consonants: {
        title: "Consonants (व्यञ्जन)",
        description:
          "The Nepali Language Resource Center lists 33 primary consonant letters. They are traditionally arranged into five varga groups and an ungrouped series.",
        resourceIds: ["NEP-R01", "NEP-R02"],
      },
      extensions: {
        title: "Common Conjuncts and Sanskrit-Related Forms",
        description:
          "क्ष, त्र, and ज्ञ are commonly taught conjuncts made from consonant sequences, not independent basic consonant letters. Specialist Sanskrit vocalic letters are also listed separately.",
        resourceIds: ["NEP-R01", "NEP-R02"],
      },
      vowelSigns: {
        title: "Vowel Signs (मात्रा)",
        description:
          "Dependent vowel signs attach to consonants. Their visual placement does not always match their logical Unicode order.",
        resourceIds: ["NEP-R01", "NEP-R02", "NEP-R03", "NEP-R04"],
      },
      symbols: {
        title: "Hal, Nasal Marks, and Punctuation",
        description:
          "Hal, chandrabindu, anusvara, visarga, and purna viram have distinct orthographic roles.",
        resourceIds: ["NEP-R01", "NEP-R02", "NEP-R04"],
      },
      numerals: {
        title: "Nepali Devanagari Numerals",
        description:
          "Nepali uses the Devanagari digits ०–९, while Western digits are also common in contemporary digital writing.",
        resourceIds: ["NEP-R02", "NEP-R04"],
      },
    },

    curriculum: {
      research: nepaliResearch,
      history: {
        title: "Nepali Language and Its Writing Tradition",
        resourceIds: ["NEP-R01", "NEP-R02", "NEP-R06"],
        paragraphs: [
          "Nepali is an Indo-Aryan language spoken primarily in Nepal and by communities in India and elsewhere. It is written in Devanagari, a script also used for Hindi, Marathi, Sanskrit, and other languages.",
          "The shared script reflects a broader Brahmic writing tradition; it does not make Nepali and Hindi the same language. Nepali has its own grammatical system, vocabulary, pronunciation, and orthographic conventions.",
          "Nepali orthography distinguishes native Nepali spelling conventions from conventions used for Sanskrit loanwords. A learner should therefore study Nepali spelling rules rather than assuming every Sanskrit or Hindi chart is a complete guide to Nepali.",
        ],
      },
      writingSystem: {
        title: "How Nepali Devanagari Works",
        resourceIds: ["NEP-R01", "NEP-R02", "NEP-R06"],
        paragraphs: [
          "Nepali uses Devanagari as an abugida. Its practical reading unit is the akshara: a written syllable built from a consonant-vowel core and, where needed, preceding consonants. A consonant normally includes an inherent vowel, while a dependent vowel sign writes a different vowel.",
          "The Devanagari block occupies Unicode range U+0900–U+097F. Independent vowels, consonants, vowel signs, combining marks, virama, punctuation, and digits have distinct encoded roles. Some vowel signs, such as ि, render to the left of the consonant even though they follow it in logical Unicode order.",
          "The hal or virama (्) suppresses the inherent vowel and helps form conjuncts. However, Nepali spelling does not normally write hal in every position where the inherent short vowel is absent. Pronunciation and word-specific spelling conventions matter.",
          "Commonly taught forms such as क्ष, त्र, and ज्ञ are conjunct sequences, not independent basic consonant letters. A chart may list them alongside consonants for teaching convenience, but their construction is different from a single consonant character.",
        ],
        bullets: [
          "Independent vowel: आ",
          "Consonant with inherent vowel: क",
          "Dependent vowel sign: का",
          "Left-positioned vowel sign: कि",
          "Hal / virama: क्",
          "Common conjuncts: क्ष, त्र, ज्ञ",
          "Sentence mark: । (purna viram)",
        ],
      },
      consonantClassification: {
        title: "Nepali Consonants and Traditional Groups",
        resourceIds: ["NEP-R01", "NEP-R02"],
        paragraphs: [
          "A commonly used Nepali inventory contains 33 primary consonant letters. The first 25 are arranged into five varga groups of five letters each, traditionally classified by place of articulation and aspiration.",
          "The five groups are velar, palatal, retroflex, dental, and bilabial. Each group follows a conventional order: unaspirated voiceless, aspirated voiceless, unaspirated voiced, aspirated voiced, and nasal.",
          "The remaining ungrouped series is य र ल व श ष स ह. Nepali writing uses these letters within its own pronunciation and spelling conventions; transliteration labels are only approximations for learners.",
          "Some popular alphabet charts add क्ष, त्र, and ज्ञ to the consonant list. These are useful forms to recognize, but they are conjuncts built from consonant sequences rather than independent basic consonant letters.",
        ],
        bullets: [
          "Velar: क ख ग घ ङ",
          "Palatal: च छ ज झ ञ",
          "Retroflex: ट ठ ड ढ ण",
          "Dental: त थ द ध न",
          "Bilabial: प फ ब भ म",
          "Ungrouped: य र ल व श ष स ह",
        ],
      },
      vowelSigns: {
        title: "Independent Vowels, Matras, and Raswa-Dirgha",
        resourceIds: ["NEP-R01", "NEP-R02", "NEP-R03", "NEP-R04"],
        paragraphs: [
          "The common Nepali learner inventory has 11 independent vowels: अ, आ, इ, ई, उ, ऊ, ऋ, ए, ऐ, ओ, and औ. Sanskrit-related vocalic letters such as ॠ, ऌ, and ॡ belong in a specialist extension rather than the everyday core chart.",
          "When a vowel follows a consonant, Nepali generally writes it with a dependent vowel sign (मात्रा). The sign modifies the consonant's inherent vowel. For example, क + ि forms कि and क + ा forms का.",
          "The signs ि, ी, ु, and ू are central to the Nepali raswa-dirgha distinction: raswa refers to short इ/ि and उ/ु forms, while dirgha refers to long ई/ी and ऊ/ू forms. Correct spelling depends on Nepali orthographic conventions and cannot always be inferred from a simplified pronunciation rule.",
          "Nepali native-word spelling and Sanskrit loanword spelling may follow different conventions. When writing a Sanskrit-derived word, check its established Nepali spelling instead of mechanically applying a generic short/long vowel rule.",
          "The sign ि appears visually before its consonant, but it follows the consonant in logical Unicode order. Preserve logical text order and let the shaping engine render the glyph correctly.",
        ],
        bullets: [
          "क + ा → का",
          "क + ि → कि",
          "क + ी → की",
          "क + ु → कु",
          "क + ू → कू",
          "क + ृ → कृ",
          "क + े → के",
          "क + ै → कै",
          "क + ो → को",
          "क + ौ → कौ",
        ],
      },
      numerals: {
        title: "Nepali Devanagari Numerals",
        resourceIds: ["NEP-R02", "NEP-R04"],
        paragraphs: [
          "Nepali uses the Devanagari digit set: ० १ २ ३ ४ ५ ६ ७ ८ ९. These correspond to Western digits 0 through 9.",
          "Western digits are also widely used in digital contexts. A typing tool should preserve the user's chosen numeral style unless a conversion is explicitly requested.",
        ],
      },
      specialCharacters: {
        title: "Hal, Nasalization, and Punctuation",
        resourceIds: ["NEP-R01", "NEP-R02", "NEP-R04"],
        paragraphs: [
          "Hal or virama (्) suppresses the inherent vowel of a consonant. It is used in conjunct formation and in specific orthographic contexts, but ordinary Nepali spelling does not normally display it every time a short inherent vowel is absent.",
          "Chandrabindu (ँ) marks vowel nasalization. Anusvara or shirbindu (ं) can represent a nasal consonant whose place of articulation is influenced by the following consonant. Do not assume the two marks are interchangeable.",
          "Visarga (ः) occurs in some Sanskrit-derived words and may have a restricted or variable pronunciation in Nepali. It should not be presented as an everyday equivalent of a normal consonant.",
          "The danda (।), called purna viram, is a traditional sentence-ending mark. Modern Nepali writing also uses punctuation marks familiar from Latin-script text.",
        ],
      },
      examples: {
        title: "Everyday Nepali Words",
        introduction: "These examples pair common Nepali words with readable Roman learner cues. Roman spellings are illustrative, not a single formal romanization scheme.",
        items: [
          { native: "नेपाली", roman: "nepālī", meaning: "Nepali" },
          { native: "नमस्ते", roman: "namaste", meaning: "hello / greetings" },
          { native: "धन्यवाद", roman: "dhanyavād", meaning: "thank you" },
          { native: "पानी", roman: "pānī", meaning: "water" },
          { native: "घर", roman: "ghar", meaning: "house / home" },
          { native: "तपाईंलाई कस्तो छ?", roman: "tapāīnlāī kasto cha?", meaning: "How are you?" },
          { native: "म", roman: "ma", meaning: "I" },
        ],
      },
      typingGuide: {
        title: "Typing Nepali with Roman Letters",
        paragraphs: [
          "Type Nepali words with Roman letters and select the Devanagari suggestion that matches the word you intend. This is transliteration: it changes the writing system, not the language or meaning.",
          "Casual Roman input is flexible and often omits scholarly diacritics. Formal geographical-name romanization systems use consistent conventions, but those conventions are not the same as everyday phonetic typing or guaranteed Google Input Tools suggestion order.",
          "Nepali spelling is not always a direct letter-for-sound conversion. Pay attention to raswa-dirgha spelling, word-specific inherent-vowel behaviour, nasal marks, and the established spelling of Sanskrit-derived vocabulary.",
          "TypeIndian uses its configured Google Input Tools provider for Nepali suggestions. The examples in this guide are learning examples and do not guarantee the provider's exact suggestion order.",
        ],
        examples: [
          { input: "namaste", output: "नमस्ते", explanation: "A common greeting." },
          { input: "dhanyabad", output: "धन्यवाद", explanation: "A common expression of thanks; Roman spellings vary." },
          { input: "pani", output: "पानी", explanation: "The word for water." },
          { input: "nepali", output: "नेपाली", explanation: "The name of the language." },
        ],
        notes: [
          "Choose suggestions by meaning and sentence context.",
          "Casual Roman input is not a formal romanization standard.",
          "Check raswa-dirgha spelling rather than relying only on sound.",
          "The tool transliterates Nepali words; it does not translate English sentences.",
        ],
      },
      commonMistakes: {
        title: "Common Nepali Writing and Typing Mistakes",
        introduction: "These mistakes come from confusing shared Devanagari script conventions with Nepali-specific spelling, conjunct formation, and Roman input.",
        items: [
          {
            incorrect: "Assuming Nepali and Hindi are the same because both use Devanagari",
            correct: "Learn Nepali vocabulary, grammar, pronunciation, and spelling as a distinct language.",
            explanation: "A shared script does not make two languages identical.",
          },
          {
            incorrect: "Treating क्ष, त्र, and ज्ञ as independent basic consonants",
            correct: "Learn them as conjunct sequences formed from consonants and virama.",
            explanation: "They are common written forms but not independent basic consonant letters.",
          },
          {
            incorrect: "Ignoring raswa-dirgha spelling",
            correct: "Learn the established spelling of short and long इ/उ forms in Nepali words.",
            explanation: "Nepali orthography has conventions that cannot always be inferred from pronunciation alone.",
          },
          {
            incorrect: "Using chandrabindu and anusvara interchangeably",
            correct: "Recognize chandrabindu as a vowel-nasalization mark and anusvara as a nasal consonant marker in relevant contexts.",
            explanation: "The marks have different orthographic roles.",
          },
          {
            incorrect: "Adding hal wherever a consonant sounds like it has no vowel",
            correct: "Follow Nepali word spelling conventions and learn where the inherent vowel is conventionally omitted.",
            explanation: "The hal is not written in every context where the inherent short vowel is absent in pronunciation.",
          },
          {
            incorrect: "Assuming casual Roman input follows a formal romanization scheme",
            correct: "Use suggestions and context to choose the intended Nepali spelling.",
            explanation: "Formal romanization and consumer phonetic typing serve different purposes.",
          },
        ],
      },
    },

    cta: {
      title: "Ready to start typing in Nepali?",
      description:
        "Type Nepali words with Roman letters and choose the correct Devanagari suggestion in the TypeIndian editor.",
      button: "Open Nepali Typing Tool →",
    },
    faq: LEARN_NEPALI_FAQ,
  },

  alphabet: nepaliAlphabet,

  labels: {
    alphabet: {
      title: "Learn Nepali Letters",
      description:
        "Explore core Nepali vowels, consonants, vowel signs, conjuncts, and Devanagari numerals. Select a character to insert it into the typing editor.",
      vowels: "Vowels (स्वर)",
      consonants: "Consonants (व्यञ्जन)",
      extensions: "Common Conjuncts and Sanskrit-Related Forms",
      vowelSigns: "Vowel Signs (मात्रा)",
      symbols: "Hal, Nasal Marks, and Punctuation",
      numerals: "Nepali Devanagari Numerals",
    },
  },

  faq: NEPALI_FAQ,

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
