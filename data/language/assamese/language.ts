import type { Language } from "@/types/language";

import { assameseAlphabet } from "./alphabet";
import { ASSAMESE_FAQ, LEARN_ASSAMESE_FAQ } from "./faq";
import { assameseResearch } from "./research";

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
      "Type Assamese words using English letters",

    intro:
      "Write Assamese words with Roman letters and choose Assamese-script suggestions. This is transliteration, not English-to-Assamese translation. No Assamese keyboard layout is required.",

    learnLink: {
      href: "/learn/assamese",

      label: "Learn Assamese Typing (Assamese Script)",

      description:
        "Understand Assamese letters, pronunciation, script, and typing fundamentals.",
    },

    seo: {
      title: "Assamese Typing Tool (English to Assamese)",

      description:
        "Type Assamese words using English letters and convert them to the Assamese script with transliteration suggestions. No keyboard installation is required.",

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
          "Type Assamese words with Roman letters and choose Assamese-script transliteration suggestions.",

        locale: "as_IN",
      },

      twitter: {
        title: "Assamese Typing Tool - TypeIndian",

        description:
          "A free browser-based tool for typing Assamese with Roman-letter input.",
      },
    },
  },

  learn: {
    meta: {
      title: "Learn Assamese Typing",

      description:
        "Learn Assamese writing in the Eastern Nagari tradition: independent vowels, consonants, vowel signs, Assamese-specific letters, conjuncts, numerals, and Roman-to-Assamese typing.",

      cta: "Start Typing in Assamese →",
    },

    seo: {
      title:
        "Learn Assamese Typing (English to Assamese) – Beginner Guide",

      description:
        "A practical Assamese guide to Eastern Nagari writing, vowels, consonants, vowel signs, special letters, numerals, and Roman-to-Assamese transliteration.",

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
          "Learn the Assamese writing system, alphabet, vowel signs, Assamese-specific letters, numerals, and Roman-input typing.",

        locale: "as_IN",
      },

      twitter: {
        title: "Learn Assamese Typing - TypeIndian",

        description:
          "Learn Assamese letters and type Assamese words using Roman-letter transliteration.",
      },
    },

    about: {
      title: "About Assamese Language",

      paragraphs: [
        "Assamese (অসমীয়া) is an Indo-Aryan language spoken primarily in Assam and by Assamese-speaking communities elsewhere. The Assam Official Language Act, 1960 provides for Assamese to be used for official purposes of the state, subject to safeguards and provisions for other language communities and regions.",
        "Assamese has a long literary tradition. Srimanta Sankardeva (15th–16th century) was a major religious, literary, and cultural figure whose works helped shape Assamese literature and performance traditions. The Government of India announced Classical Language status for Assamese in October 2024.",
        "Assamese is written using the Assamese (Eastern Nagari) script. Although it shares many characters with the Bengali script, Assamese has its own pronunciation, vocabulary, and distinctive letters such as 'ৰ' and 'ৱ'.",
      ],
    },

    script: {
      title: "Assamese Script",

      paragraphs: [
        "Assamese uses an abugida writing system written from left to right. A consonant normally carries an inherent vowel; dependent vowel signs modify that vowel and the virama or hasanta (্) suppresses it.",
        "The writing system includes independent vowels, consonants, dependent vowel signs, combining marks, conjuncts, and Eastern Nagari digits. The traditional chart is an orthographic inventory, not a direct count of modern Assamese phonemes.",
      ],

      bullets: [
        "Written from left to right",
        "Uses the Assamese (Eastern Nagari) script",
        "Uses independent vowels and dependent vowel signs",
        "Includes the Assamese letters ৰ and ৱ",
        "Forms conjuncts using the virama (্)",
        "Uses Eastern Nagari digits (০–৯)",
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
        resourceIds: ["ASM-R01", "ASM-R05"],
        title: "Modified Letters and Special Forms",
        description:
          "Modified forms such as ড়, ঢ়, and য় appear in Assamese orthography. The Assamese letters ৰ and ৱ are part of the main consonant chart. ক্ষ is a conjunct sequence, not an extra independently encoded letter.",
      },

      vowelSigns: {
        resourceIds: ["ASM-R01", "ASM-R02", "ASM-R05"],
        title: "Vowel Signs (কাৰ)",
        description:
          "Dependent vowel signs attach to consonants or consonant clusters. Their visual position does not always match their logical Unicode order.",
      },

      symbols: {
        resourceIds: ["ASM-R01", "ASM-R02"],
        title: "Special Signs and Marks",
        description:
          "Assamese writing uses candrabindu, anusvara, visarga, virama (hasanta), khanda ta, and other marks. These have distinct roles and should not be grouped as ordinary consonants.",
      },

      numerals: {
        resourceIds: ["ASM-R01", "ASM-R02"],
        title: "Assamese Numerals",
        description:
          "The Eastern Nagari digit forms are ০ ১ ২ ৩ ৪ ৫ ৬ ৭ ৮ ৯. Western digits are also common in modern digital text.",
      },
    },

    curriculum: {
      research: assameseResearch,
      history: {
        resourceIds: ["ASM-R03", "ASM-R04", "ASM-R08"],
        title: "Assamese Language and Literary History",
        paragraphs: [
          "Assamese is an Indo-Aryan language with a long history in the Brahmaputra valley. Historical accounts describe its development through eastern Indo-Aryan stages and regional language traditions; its history should not be reduced to a simple direct derivation from one modern language.",
          "Assamese literature includes medieval devotional and performance traditions associated with Srimanta Sankardeva and Madhavdeva, as well as later prose, print, and modern literary movements.",
          "The Assam Official Language Act, 1960 provides for Assamese to be used for official purposes of the state. The Act also contains safeguards for autonomous regions and districts and provisions relating to Bengali in Cachar. Assamese was granted Classical Language status in 2024.",
        ],
      },
      writingSystem: {
        resourceIds: ["ASM-R01", "ASM-R02", "ASM-R05"],
        title: "The Assamese Writing System",
        paragraphs: [
          "Modern Assamese is written in the Assamese form of the Eastern Nagari writing tradition. It is written from left to right and is an abugida: a consonant letter normally carries an inherent vowel unless a dependent vowel sign changes it or the virama (্), also called hasanta, suppresses it.",
          "Unicode uses the name Bengali for the shared encoded script block U+0980–U+09FF. That block supports modern Assamese orthography as well as Bangla and other languages. The encoding label does not mean that Assamese and Bangla are the same language or that their spelling conventions are identical.",
          "Two particularly important Assamese letters are ৰ (Assamese ra) and ৱ (Assamese wa). They are encoded at U+09F0 and U+09F1 respectively. Assamese also uses conjunct forms and special character combinations that must be rendered by a Unicode-aware text engine.",
          "The conjunct ক্ষ is often taught as a letter in traditional alphabet charts, but Unicode represents it as the sequence ক + ্ + ষ. It is therefore best explained as a conjunct rather than a separately encoded independent consonant.",
        ],
        bullets: [
          "Independent vowel: আ",
          "Consonant with inherent vowel: ক",
          "Consonant with a dependent sign: কা",
          "Consonant with virama: ক্",
          "Assamese ra: ৰ",
          "Assamese wa: ৱ",
          "Conjunct sequence: ক্ষ (ক্ + ষ)",
        ],
      },
      consonantClassification: {
        resourceIds: ["ASM-R05", "ASM-R06", "ASM-R07", "ASM-R08"],
        title: "Assamese Consonants and Pronunciation",
        paragraphs: [
          "Traditional Assamese alphabet charts arrange consonant letters in familiar rows: velar, palatal, retroflex, dental, and labial stops, followed by semivowels and fricatives. This chart is useful for learning spellings and historical relationships, but it is not a direct map of the modern spoken sound system.",
          "Modern phonetic descriptions of Assamese show important differences between orthography and pronunciation. For example, the traditional retroflex and dental series do not necessarily represent contrasting retroflex and dental places of articulation in contemporary standard speech. Some historical spellings are maintained even where sounds have merged or shifted.",
          "The pronunciation of খ and other aspirated sounds can vary by speaker and context; খ may be realized with frication ranging toward [x] or [χ]. The letter য also has a history and pronunciation that should not be reduced to a simple English y sound in every word.",
          "The letters ৰ and ৱ are essential Assamese distinctions. Use ৰ for the Assamese ra letter and ৱ for the Assamese wa letter; do not silently substitute the visually related Bangla letters র and ব in Assamese examples.",
        ],
        bullets: [
          "Velar series: ক খ গ ঘ ঙ",
          "Palatal series: চ ছ জ ঝ ঞ",
          "Traditional retroflex series: ট ঠ ড ঢ ণ",
          "Traditional dental series: ত থ দ ধ ন",
          "Labial series: প ফ ব ভ ম",
          "Other chart letters include য ৰ ল ৱ শ ষ স হ",
        ],
      },
      vowelSigns: {
        resourceIds: ["ASM-R01", "ASM-R02", "ASM-R05", "ASM-R06"],
        title: "Independent Vowels and Vowel Signs",
        paragraphs: [
          "A conventional Assamese learner chart lists eleven independent vowels: অ, আ, ই, ঈ, উ, ঊ, ঋ, এ, ঐ, ও, and ঔ. This is a traditional orthographic chart count, not a claim that modern Assamese has eleven distinct vowel phonemes.",
          "Common dependent vowel signs include া, ি, ী, ু, ূ, ৃ, ে, ৈ, ো, and ৌ. A consonant without a visible vowel sign normally carries its inherent vowel. The sign ি is logically encoded after its consonant even though it is displayed to the left.",
          "The two-part signs ো and ৌ are rendered around the consonant or consonant cluster. Their visual shaping is handled by the text renderer; users should type valid Unicode sequences rather than trying to position glyph parts manually.",
          "The letters ঌ, ৠ, and several related vocalic forms occur in the broader Unicode repertoire and in Sanskrit-oriented writing, but they should not be presented as everyday core Assamese vowels without a specific linguistic reason.",
        ],
        bullets: [
          "ক + া → কা",
          "ক + ি → কি",
          "ক + ী → কী",
          "ক + ু → কু",
          "ক + ূ → কূ",
          "ক + ৃ → কৃ",
          "ক + ে → কে",
          "ক + ৈ → কৈ",
          "ক + ো → কো",
          "ক + ৌ → কৌ",
        ],
      },
      numerals: {
        resourceIds: ["ASM-R01", "ASM-R02"],
        title: "Eastern Nagari Numerals",
        paragraphs: [
          "The Eastern Nagari digit forms used in Assamese are ০ ১ ২ ৩ ৪ ৫ ৬ ৭ ৮ ৯. They correspond to Western digits 0 through 9.",
          "Both native and Western digits appear in contemporary digital writing. A typing tool should not silently convert a user's digits unless it provides an explicit numeral-conversion feature.",
        ],
      },
      specialCharacters: {
        resourceIds: ["ASM-R01", "ASM-R02", "ASM-R05"],
        title: "Special Signs, Hasanta, and Conjuncts",
        paragraphs: [
          "Candrabindu (ঁ) marks nasalization, anusvara (ং) is a nasal sign, and visarga (ঃ) is a distinct sign found especially in learned or Sanskrit-derived forms. Their spelling and pronunciation depend on the word; they are not interchangeable.",
          "The virama or hasanta (্) suppresses the inherent vowel and helps form conjunct consonants. Conjuncts are combinations of consonants and may have special rendered shapes; ক্ষ is a common example formed from ক + ্ + ষ.",
          "Khanda ta (ৎ) is a special final form associated with ত and is not an ordinary independent consonant in the same sense as ক or ম. Avagraha (ঽ) and Bengali anji (ঀ) are also encoded signs, but they are not everyday punctuation for ordinary Assamese prose.",
          "The Assamese modified letters ড়, ঢ়, and য় should be kept distinct from sequences created by manually adding a nukta. Assamese-specific letters ৰ and ৱ are separate encoded characters in the Bengali block.",
        ],
      },
      examples: {
        title: "Everyday Assamese Words",
        introduction: "Roman forms below are learner-friendly cues, not a claim that there is one universal Roman spelling. Transliteration provider output should be checked live before treating an input-output pair as guaranteed.",
        items: [
          { native: "অসমীয়া", roman: "asomiya", meaning: "Assamese" },
          { native: "নমস্কাৰ", roman: "namaskar", meaning: "greetings" },
          { native: "ধন্যবাদ", roman: "dhonyobad", meaning: "thank you" },
          { native: "পানী", roman: "pani", meaning: "water" },
          { native: "ঘৰ", roman: "ghor", meaning: "house" },
          { native: "মোৰ নাম", roman: "mor naam", meaning: "my name" },
        ],
      },
      typingGuide: {
        title: "Typing Assamese with Roman Letters",
        paragraphs: [
          "Type Assamese words using Roman letters and select the Assamese-script suggestion that matches your intended word. This is transliteration: it changes the writing system, not the language or meaning.",
          "Everyday Roman input is not the same as a formal romanization standard. The Library of Congress and the United Nations publish documented Assamese romanization systems, while a consumer transliteration engine may accept flexible phonetic spellings and offer multiple candidates.",
          "Assamese has important distinctions that are easy to miss in Roman input, including ৰ versus ৱ, spellings involving য, and consonant clusters. Read the candidate in context instead of assuming that one Roman spelling always maps to one output.",
          "TypeIndian uses its configured Google Input Tools transliteration provider for Assamese suggestions. Provider output can vary; review the final text, especially names, official documents, and published writing.",
        ],
        examples: [
          { input: "asomiya", output: "অসমীয়া", explanation: "A learner-friendly Roman cue for the language name; verify the provider's exact suggestion." },
          { input: "namaskar", output: "নমস্কাৰ", explanation: "A common greeting; choose the Assamese spelling from the suggestions." },
          { input: "pani", output: "পানী", explanation: "Check the long-vowel spelling in the final output." },
          { input: "ghor", output: "ঘৰ", explanation: "A common word for house; use context to choose the intended candidate." },
        ],
        notes: [
          "Roman spellings are input hints, not a standardized Assamese keyboard layout.",
          "Check ৰ and ৱ carefully in the final Assamese text.",
          "Do not confuse transliteration with English-to-Assamese translation.",
          "Provider examples are illustrative until checked against the live transliteration endpoint.",
        ],
      },
      commonMistakes: {
        title: "Common Assamese Writing and Typing Mistakes",
        introduction: "These examples focus on Assamese-specific orthography and the difference between a traditional alphabet chart and Unicode character sequences.",
        items: [
          {
            incorrect: "Replacing ৰ with র",
            correct: "Use ৰ for the Assamese ra letter.",
            explanation: "Unicode encodes Assamese ৰ separately from the Bangla letter র.",
          },
          {
            incorrect: "Replacing ৱ with ব",
            correct: "Use ৱ where Assamese orthography requires the wa letter.",
            explanation: "ৱ is an Assamese-specific letter and is not interchangeable with ব.",
          },
          {
            incorrect: "Treating ক্ষ as one separately encoded character",
            correct: "Represent it as ক + ্ + ষ.",
            explanation: "Unicode defines this familiar form as a conjunct sequence.",
          },
          {
            incorrect: "Treating every traditional chart letter as a distinct modern phoneme",
            correct: "Learn the traditional spellings while checking actual Assamese pronunciation.",
            explanation: "Several historical orthographic distinctions do not correspond directly to contrasts in modern standard speech.",
          },
          {
            incorrect: "Using ং, ঁ, and ঃ interchangeably",
            correct: "Preserve the specific sign required by the word.",
            explanation: "Anusvara, candrabindu, and visarga have different orthographic functions.",
          },
        ],
      },
    },

    cta: {
      title: "Ready to start typing in Assamese?",

      description:
        "Skip complicated keyboard layouts. Type Assamese words with Roman letters and choose the Assamese-script suggestion you want.",

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

      extensions: "Modified Letters",

      vowelSigns: "Vowel Signs (কাৰ)",

      symbols: "Special Signs",

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