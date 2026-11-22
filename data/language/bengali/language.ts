import type { Language } from "@/types/language";

import { bengaliAlphabet } from "./alphabet";
import { BENGALI_FAQ, LEARN_BENGALI_FAQ } from "./faq";
import { bengaliResearch } from "./research";

export const bengali: Language = {
  id: "bengali",
  slug: "bengali",

  name: "Bengali",
  nativeName: "বাংলা",

  locale: "bn-IN",
  direction: "ltr",

  script: "Bengali",

  transliteration: {
    engine: "google",
    languageCode: "bn",
  },

  typing: {
    title: "Bengali Typing Tool",

    subtitle:
      "Type in English and convert instantly to বাংলা",

    intro:
      "Write Bengali naturally using English letters with TypeIndian's Bengali typing tool. Simply type phonetically in English and instantly convert your words into the Bengali script. No keyboard installation, no login - fast, accurate, and browser-based Bengali transliteration directly in your browser.",

    learnLink: {
      href: "/learn/bengali",

      label: "Learn Bengali Typing (Bengali Script)",

      description:
        "Understand Bengali letters, pronunciation, script, and typing fundamentals.",
    },

    seo: {
      title: "Bengali Typing Tool (English to Bengali)",

      description:
        "Free English to Bengali typing tool. Type using English letters and instantly convert your text into the Bengali script. Fast, accurate phonetic transliteration with no login or installation required.",

      keywords: [
        "English to Bengali typing",
        "Bengali typing",
        "Bangla typing",
        "Bengali typing online",
        "Bangla typing online",
        "Bengali transliteration",
        "Bangla transliteration",
        "phonetic Bengali typing",
        "Bengali keyboard",
        "Bangla keyboard",
        "TypeIndian Bengali",
      ],

      openGraph: {
        title: "Bengali Typing Tool - TypeIndian",

        description:
          "Type in English and instantly write in Bengali using accurate phonetic transliteration.",

        locale: "bn_IN",
      },

      twitter: {
        title: "Bengali Typing Tool - TypeIndian",

        description:
          "Fast, free, and browser-based English to Bengali typing.",
      },
    },
  },

  learn: {
    meta: {
      title: "Learn Bengali Typing",

      description:
        "Learn how to type Bengali using English letters with this beginner-friendly guide. Explore the Bengali language, Bengali script, vowels, consonants, pronunciation, and phonetic typing.",

      cta: "Start Typing in Bengali →",
    },

    seo: {
      title: "Learn Bengali Typing (English to Bengali) – Beginner Guide",

      description:
        "Learn Bengali typing with an easy beginner guide. Understand the Bengali script, vowels, consonants, conjunct letters, numerals, and English to Bengali phonetic typing.",

      keywords: [
        "learn Bengali typing",
        "learn Bangla typing",
        "Bengali typing tutorial",
        "Bangla typing tutorial",
        "Bengali alphabet",
        "Bangla alphabet",
        "Bengali script",
        "Bengali vowels",
        "Bengali consonants",
        "Bengali typing for beginners",
        "TypeIndian Bengali",
      ],

      openGraph: {
        title: "Learn Bengali Typing - Beginner Guide | TypeIndian",

        description:
          "Master Bengali typing with a beginner-friendly guide covering the Bengali script, pronunciation, alphabet, and phonetic typing.",

        locale: "bn_IN",
      },

      twitter: {
        title: "Learn Bengali Typing - TypeIndian",

        description:
          "Learn to type Bengali naturally using English letters with our complete beginner guide.",
      },
    },

    about: {
      title: "About Bengali Language",

      paragraphs: [
        "Bengali (বাংলা) is one of the most widely spoken languages in the world and is the official language of the Indian state of West Bengal as well as the national language of Bangladesh. More than 250 million people speak Bengali globally.",
        "Bengali belongs to the Indo-Aryan language family and has a rich literary tradition spanning centuries. It is the language of Nobel Prize-winning poet Rabindranath Tagore and many other renowned writers.",
        "Bengali is written using the Bengali script, a Brahmic writing system recognized for its elegant letterforms and extensive use of conjunct consonants (যুক্তাক্ষর).",
      ],
    },

    script: {
      title: "Bengali Script",

      paragraphs: [
        "The Bengali script is an abugida writing system in which every consonant contains an inherent vowel unless modified by a vowel sign or the Hasanta (্).",
        "The script includes independent vowels, consonants, vowel signs (matras), numerals, and conjunct letters that combine multiple consonants into a single written form.",
      ],

      bullets: [
        "Written from left to right",
        "Uses the Bengali script",
        "Contains vowels and consonants",
        "Uses vowel signs (matras) and conjunct letters",
      ],
    },

    alphabet: {
      vowels: {
        title: "Vowels (স্বরবর্ণ)",
        description: "These independent vowel letters are part of the traditional Bengali orthographic chart; their count is not a direct count of modern spoken vowel phonemes.",
      },
      consonants: {
        title: "Consonants (ব্যঞ্জনবর্ণ)",
        description: "The primary Bengali consonant letters are traditionally grouped by place and manner of articulation.",
      },
      extensions: {
        title: "Modified Letters",
        description: "Modified letters such as ড়, ঢ়, and য় have distinct orthographic roles. Conjuncts such as ক্ষ are combinations, not extra independent letters.",
      },
      vowelSigns: {
        title: "Vowel Signs (কার)",
        description: "Dependent vowel signs combine with consonants or consonant clusters. Some signs appear visually before or around the base consonant.",
      },
      symbols: {
        title: "Special Signs",
        description: "Candrabindu, anusvara, visarga, hasanta, khanda ta, and nukta have distinct orthographic roles.",
      },
      numerals: {
        title: "Bengali Numerals",
        description: "Bengali has native digit forms ০ through ৯, although Western digits are also common in digital writing.",
      },
    },

    curriculum: {
      research: bengaliResearch,
      history: {
        resourceIds: ["BEN-R04", "BEN-R05", "BEN-R06"],
        title: "Bengali Language and Literary History",
        paragraphs: [
          "Bengali (বাংলা), also called Bangla, is an Eastern Indo-Aryan language. Its historical development is commonly described through Old, Middle, and Modern Bengali periods. It has a major literary tradition across poetry, songs, prose, theatre, and modern writing.",
          "Bengali is the state language of Bangladesh under Article 3 of its Constitution. In India, Bengali is included in the Eighth Schedule of the Constitution and is an official language of West Bengal and Tripura. Legal provisions and language use vary by region.",
          "The Bengali Language Movement in what was then East Pakistan became a defining part of the history of Bangladesh. International Mother Language Day is observed on 21 February in remembrance of the 1952 events.",
        ],
      },
      writingSystem: {
        resourceIds: ["BEN-R01", "BEN-R02", "BEN-R03"],
        title: "How the Bengali Script Works",
        paragraphs: [
          "The Bengali (Bangla) script is an abugida written from left to right. A consonant normally carries an inherent vowel; a dependent vowel sign changes that vowel, while the hasanta or virama (্) suppresses it or participates in a consonant cluster.",
          "The script has independent vowel letters, consonant letters, dependent vowel signs, combining marks, modified letters, and native digits. Bengali orthography preserves historical letter distinctions even when modern pronunciation no longer contrasts them in the same way.",
          "Consonant clusters are commonly rendered as conjuncts (যুক্তাক্ষর). Their forms may be stacked, joined, or ligated, and their pronunciations can be lexicalized. ক্ষ, for example, is the conjunct sequence ক + ্ + ষ, not a separately encoded basic consonant letter.",
          "Bengali and Assamese use characters from the Unicode Bengali block, but that shared encoding block does not make the languages identical. Assamese has its own orthographic conventions and distinctive letters.",
        ],
        bullets: ["Independent vowel: আ", "Consonant with inherent vowel: ক", "Dependent vowel sign: কি", "Hasanta: ক্", "Conjunct example: ক্ষ (ক + ্ + ষ)", "Native digits: ০ ১ ২ ৩ ৪ ৫ ৬ ৭ ৮ ৯"],
      },
      consonantClassification: {
        resourceIds: ["BEN-R01", "BEN-R06"],
        title: "Bengali Consonants and Their Traditional Groups",
        paragraphs: [
          "Traditional Bengali charts group stop consonants by place of articulation: velar, palatal, retroflex, dental, and bilabial. Each row historically presents contrasts such as unaspirated and aspirated, voiceless and voiced. This is a useful spelling framework, but not a complete description of modern Bengali phonology.",
          "The letters ড় and ঢ় represent modified retroflex flap sounds in standard descriptions, while য় represents a distinct y-like letter in Bengali orthography. These should be distinguished from the basic consonant series.",
          "The letters য and য় are not interchangeable in spelling. Pronunciation varies by word and position, and the written form should be learned from actual vocabulary rather than inferred from a simple Roman equivalent.",
          "Conjuncts such as ক্ষ, জ্ঞ, ত্র, and শ্র are combinations of consonants. They are important reading units, but should not be added to the list of independently encoded basic consonants.",
        ],
        bullets: ["Velar: ক খ গ ঘ ঙ", "Palatal: চ ছ জ ঝ ঞ", "Retroflex: ট ঠ ড ঢ ণ", "Dental: ত থ দ ধ ন", "Bilabial: প ফ ব ভ ম", "Other basic letters include য র ল শ ষ স হ"],
      },
      vowelSigns: {
        resourceIds: ["BEN-R01", "BEN-R02", "BEN-R03"],
        title: "Independent Vowels and Vowel Signs",
        paragraphs: [
          "A conventional Bengali alphabet chart lists eleven independent vowels: অ, আ, ই, ঈ, উ, ঊ, ঋ, এ, ঐ, ও, and ঔ. This is a traditional orthographic inventory; modern spoken Bengali vowel phonology does not map one-to-one onto the chart.",
          "Common dependent vowel signs include া, ি, ী, ু, ূ, ৃ, ে, ৈ, ো, and ৌ. The inherent vowel has no separate dependent sign. The sign ি is encoded after its consonant but appears visually to its left.",
          "The signs ো and ৌ are visually composed around the consonant or cluster. Applications should preserve correct Unicode sequences and rely on Bengali shaping support rather than manually rearranging visible pieces.",
          "Bengali pronunciation includes vowel qualities that are not represented by a simple one-letter-to-one-sound mapping. The historical independent vowel inventory and the actual spoken vowel system should be taught as related but distinct topics.",
        ],
        bullets: ["ক + া → কা", "ক + ি → কি", "ক + ী → কী", "ক + ু → কু", "ক + ূ → কূ", "ক + ৃ → কৃ", "ক + ে → কে", "ক + ৈ → কৈ", "ক + ো → কো", "ক + ৌ → কৌ"],
      },
      numerals: {
        resourceIds: ["BEN-R03"],
        title: "Bengali Numerals",
        paragraphs: [
          "Bengali has ten native digit characters: ০ ১ ২ ৩ ৪ ৫ ৬ ৭ ৮ ৯. They correspond to Western digits 0 through 9.",
          "Both Bengali and Western digits appear in contemporary digital writing. A typing tool should preserve the user's chosen digits unless it offers an explicit conversion feature.",
        ],
      },
      specialCharacters: {
        resourceIds: ["BEN-R01", "BEN-R02", "BEN-R03"],
        title: "Hasanta, Nasal Signs, and Other Marks",
        paragraphs: [
          "The hasanta (্), also called virama, suppresses the inherent vowel and participates in consonant clusters. The resulting conjunct may have a special glyph shape that differs from the visible sequence of its component letters.",
          "Candrabindu (ঁ) marks vowel nasalization. Anusvara (ং) and visarga (ঃ) are separate signs with different orthographic uses; they should not be treated as interchangeable.",
          "Khanda ta (ৎ) is a special form associated with ত and occurs in particular spellings. Nukta (়) is a combining mark used in specific modified forms; it is not a free-standing consonant.",
          "Bengali punctuation and the visible treatment of the hasanta follow script conventions and font shaping. Text editors should treat orthographic syllables and conjuncts carefully when selecting or deleting text.",
        ],
      },
      examples: {
        title: "Everyday Bengali Words",
        introduction: "Roman forms are practical learner cues, not a single standardized keyboard spelling.",
        items: [
          { native: "বাংলা", roman: "bangla", meaning: "Bengali / Bangla" },
          { native: "আমি", roman: "ami", meaning: "I" },
          { native: "ভালো", roman: "bhalo", meaning: "good / well" },
          { native: "নমস্কার", roman: "nomoskar", meaning: "greetings" },
          { native: "ধন্যবাদ", roman: "dhonnobad", meaning: "thank you" },
          { native: "পানি", roman: "pani", meaning: "water" },
          { native: "বাড়ি", roman: "bari", meaning: "home / house" },
        ],
      },
      typingGuide: {
        title: "Typing Bengali with Roman Letters",
        paragraphs: [
          "Enter Bengali words using Roman letters and choose the Bengali-script suggestion that matches your intended word. This is transliteration: it changes the writing system, not the language or meaning.",
          "Informal Roman input is flexible and is not the same as a formal cataloguing romanization such as the Library of Congress table. Long vowels, aspirated consonants, retroflex sounds, and Bengali spelling distinctions may be represented in several ways.",
          "The same Roman input may produce multiple candidates. Read suggestions in context, especially for য versus য়, ড versus ড়, and spellings with conjuncts.",
          "TypeIndian uses its configured Google Input Tools provider for Bengali suggestions. Provider output should be checked live; examples here do not guarantee the exact first suggestion.",
        ],
        examples: [
          { input: "bangla", output: "বাংলা", explanation: "The language name; select the intended Bengali spelling." },
          { input: "ami", output: "আমি", explanation: "A common first-person pronoun." },
          { input: "bhalo", output: "ভালো", explanation: "A common word meaning good or well." },
          { input: "dhonnobad", output: "ধন্যবাদ", explanation: "A common expression of thanks." },
        ],
        notes: ["Roman input is not a one-to-one transliteration standard.", "Check spelling distinctions such as য and য়.", "Choose the candidate that matches the sentence context.", "This tool transliterates Bengali input; it does not translate English prose."],
      },
      commonMistakes: {
        title: "Common Bengali Writing and Typing Mistakes",
        introduction: "These traps involve orthographic distinctions, conjunct formation, and the difference between alphabet charts and spoken sounds.",
        items: [
          { incorrect: "Treating ক্ষ as an independent basic consonant", correct: "Learn ক্ষ as a conjunct sequence ক + ্ + ষ.", explanation: "Its familiar rendered form is built from multiple encoded characters." },
          { incorrect: "Treating য and য় as interchangeable", correct: "Preserve the spelling of the intended Bengali word.", explanation: "They are distinct letters with different orthographic roles." },
          { incorrect: "Typing ি before the consonant in Unicode order", correct: "Enter the consonant followed by ি; shaping displays it to the left.", explanation: "Logical character order and visual placement differ for some vowel signs." },
          { incorrect: "Using ং, ঁ, and ঃ interchangeably", correct: "Use the mark required by the word.", explanation: "Anusvara, candrabindu, and visarga have distinct functions." },
          { incorrect: "Assuming the traditional vowel chart equals the modern vowel sound inventory", correct: "Learn letter names and actual pronunciation as separate but connected topics.", explanation: "Historical orthography preserves distinctions that modern speech may not maintain in the same way." },
        ],
      },
    },

    cta: {
      title: "Ready to start typing in Bengali?",

      description:
        "Skip complicated keyboard layouts. Type naturally in English and TypeIndian instantly converts your words into the Bengali script.",

      button: "Open Bengali Typing Tool →",
    },

    faq: LEARN_BENGALI_FAQ,
  },

  alphabet: bengaliAlphabet,

  labels: {
    alphabet: {
      title: "Learn Bengali Letters",
      description: "Explore Bengali letters and signs. Select a character to insert it into the typing editor.",
      vowels: "Vowels (স্বরবর্ণ)",
      consonants: "Consonants (ব্যঞ্জনবর্ণ)",
      extensions: "Modified Letters",
      vowelSigns: "Vowel Signs (কার)",
      symbols: "Special Signs",
      numerals: "Bengali Numerals",
    },
  },

  faq: BENGALI_FAQ,

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