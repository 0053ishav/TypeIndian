import type { Language } from "@/types/language";

import { HINDI_FAQ, LEARN_HINDI_FAQ } from "./faq";
import { hindiAlphabet } from "./alphabet";

export const hindi: Language = {
  id: "hindi",
  slug: "hindi",

  name: "Hindi",
  nativeName: "हिन्दी",

  locale: "hi-IN",
  direction: "ltr",

  script: "Devanagari",

  transliteration: {
    engine: "google",
    languageCode: "hi",
  },

  typing: {
    title: "Hindi Typing Tool",
    subtitle: "Type Hindi words using English letters",

    intro:
      "Write Hindi words with Roman letters and choose Devanagari suggestions as you type. This is phonetic transliteration, not English-to-Hindi translation. No Hindi keyboard layout is required.",

    learnLink: {
      href: "/learn/hindi",
      label: "Learn Hindi Typing (Devanagari)",
      description:
        "Understand Hindi letters, sounds, vowel signs, and typing basics",
    },

    seo: {
      title: "Hindi Typing Tool (English Letters to Hindi)",

      description:
        "Type Hindi words using English letters and convert them to Devanagari. Explore Hindi transliteration, suggestions, and a beginner-friendly typing guide.",

      keywords: [
        "English to Hindi typing",
        "Hindi typing online",
        "Hindi transliteration",
        "phonetic Hindi typing",
        "TypeIndian Hindi",
        "Hindi typing",
        "Devanagari typing tool",
      ],

      openGraph: {
        title: "Hindi Typing Tool - TypeIndian",

        description:
          "Type Hindi words using English letters and write in Devanagari with transliteration suggestions.",

        locale: "hi_IN",
      },

      twitter: {
        title: "Hindi Typing Tool - TypeIndian",

        description:
          "Type Hindi using English letters with a browser-based Devanagari typing tool.",
      },
    },
  },

  learn: {
    meta: {
      title: "Learn Hindi Typing",

      description:
        "Learn how Hindi is written in Devanagari. Explore the core vowels and consonants, vowel signs, conjuncts, numerals, and practical Roman-to-Hindi typing examples.",

      cta: "Start Typing in Hindi →",
    },

    seo: {
      title: "Learn Hindi Typing and Devanagari – Beginner Guide",

      description:
        "A beginner-friendly Hindi guide covering Devanagari, vowels, consonants, matras, conjuncts, special marks, numerals, and Roman-to-Hindi typing.",

      keywords: [
        "learn Hindi typing",
        "Hindi typing tutorial",
        "Hindi alphabet",
        "Devanagari alphabet",
        "Hindi vowels",
        "Hindi consonants",
        "Hindi matras",
        "Hindi script",
        "English to Hindi typing guide",
        "Hindi typing for beginners",
        "TypeIndian Hindi",
      ],

      openGraph: {
        title: "Learn Hindi Typing - Beginner Guide | TypeIndian",

        description:
          "Learn Hindi typing with a practical guide to Devanagari letters, vowel signs, pronunciation, and phonetic typing.",

        locale: "hi_IN",
      },

      twitter: {
        title: "Learn Hindi Typing - TypeIndian",

        description:
          "Learn the Devanagari script and practise typing Hindi with Roman letters.",
      },
    },

    about: {
      title: "About Hindi Language",

      paragraphs: [
        "Hindi (हिन्दी) is a major Indo-Aryan language of India. Modern Standard Hindi is based primarily on the Khari Boli variety and has a long history shaped by regional speech, literature, and contact with other languages.",
        "Hindi is not simply the direct result of one straight line from Sanskrit to modern Hindi. Its history includes older Indo-Aryan, Prakrit, and Apabhraṃśa traditions as well as distinct regional and literary developments.",
        "Under Article 343 of the Constitution, Hindi written in Devanagari is the official language of the Union of India. India does not designate Hindi as its national language; English also continues to be used for Union official purposes under the Official Languages Act.",
      ],
    },

    script: {
      title: "Devanagari Script",

      paragraphs: [
        "Hindi is written in Devanagari (देवनागरी), an abugida. Devanagari is also used to write languages such as Sanskrit, Marathi, and Nepali; it is a script, not a language.",
        "Devanagari is written from left to right. Many letters share a horizontal headline called the shirorekha. A consonant normally carries an inherent vowel; dependent vowel signs (matras) change that vowel, while the virama (्) suppresses it.",
      ],

      bullets: [
        "Written from left to right",
        "Uses independent vowel letters and consonant letters",
        "Uses dependent vowel signs called matras (मात्राएँ)",
        "Uses marks such as anusvara, chandrabindu, nukta, and virama",
      ],
    },

    alphabet: {
      vowels: {
        title: "Core Independent Vowels (स्वर)",

        description:
          "These are the traditional core independent vowel letters. ऋ is mainly found in Sanskrit-derived words in modern Hindi; the chart is a writing-system guide, not a claim that every letter is a separate everyday vowel sound.",
      },

      consonants: {
        title: "Core Consonants (व्यंजन)",

        description:
          "The traditional varṇamālā groups consonants by where and how they are articulated. Some letters are uncommon as independent sounds in everyday Hindi.",
      },

      extensions: {
        title: "Extended Letters and Nukta Forms",

        description:
          "These forms are separate from the core chart. Nukta forms modify base consonants and are used in some words of Perso-Arabic origin and other borrowed vocabulary. ऍ and ऑ are extended vowel letters.",
      },

      vowelSigns: {
        title: "Vowel Signs (मात्राएँ)",

        description:
          "A matra attaches to a consonant or consonant cluster to write a dependent vowel. The inherent अ has no separate matra.",
      },

      symbols: {
        title: "Special Marks and Punctuation (चिह्न)",

        description:
          "These marks indicate nasalization, other sound or spelling distinctions, consonant suppression, and traditional punctuation.",
      },

      numerals: {
        title: "Devanagari Numerals",

        description:
          "Devanagari has its own digits from zero to nine. Western digits (0–9) are also common in modern Hindi text.",
      },
    },

    curriculum: {
      history: {
        title: "A Short History of Hindi and Devanagari",
        paragraphs: [
          "Modern Standard Hindi is based primarily on Khari Boli, a speech variety associated with the Delhi and western Uttar Pradesh region. Hindi developed through a complex history of Indo-Aryan speech and literary traditions; it should not be reduced to a simple, uninterrupted Sanskrit-to-Hindi sequence.",
          "Devanagari developed over many centuries from earlier South Asian scripts, through forms including Gupta and Nāgarī. The script existed before modern standard Hindi and is shared by several languages.",
        ],
      },

      writingSystem: {
        title: "How Devanagari Works",
        paragraphs: [
          "Devanagari is an abugida: a consonant letter normally includes an inherent vowel, commonly described for beginners as a short 'a' or schwa-like sound. An independent vowel letter is used when a vowel begins a syllable without a preceding consonant.",
          "A dependent vowel sign replaces the consonant's inherent vowel. For example, क has the inherent vowel, while का, कि, and कु use signs to write different vowels. The virama (्) removes the inherent vowel, as in क्.",
          "The visible position of a sign does not always match its Unicode order. In कि, the vowel sign ि is encoded after क even though it is drawn to the left. Font shaping turns character sequences into the forms readers see.",
        ],
        bullets: [
          "Independent vowel: आ",
          "Consonant with inherent vowel: क",
          "Consonant with a dependent vowel sign: का",
          "Consonant with its inherent vowel suppressed: क्",
          "Conjunct formed from consonants: क्ष",
        ],
      },

      consonantClassification: {
        title: "Hindi Consonant Groups",
        paragraphs: [
          "The traditional consonant chart arranges five groups (vargas) by place of articulation. Within each group, the first two letters are voiceless unaspirated and aspirated, the next two are voiced unaspirated and aspirated, and the fifth is a nasal.",
          "The traditional chart is useful for learning spelling and articulation, but it is not identical to the inventory of distinct sounds used by every Hindi speaker. Regional pronunciation and borrowed words add variation.",
        ],
        bullets: [
          "Velar: क ख ग घ ङ",
          "Palatal: च छ ज झ ञ",
          "Retroflex: ट ठ ड ढ ण",
          "Dental: त थ द ध न",
          "Bilabial: प फ ब भ म",
          "Other traditional consonants: य र ल व; श ष स ह",
        ],
      },

      vowelSigns: {
        title: "Vowel Signs (Matras)",
        paragraphs: [
          "A matra is a dependent vowel sign written with a consonant or consonant cluster. The sign changes the consonant's inherent vowel. There is no separate matra for अ because that vowel is inherent in the basic consonant form.",
          "Notice that ि is visually placed before its consonant, but it follows the consonant in the encoded character sequence. This is normal Devanagari shaping behaviour.",
        ],
        bullets: [
          "क + ा → का",
          "क + ि → कि",
          "क + ी → की",
          "क + ु → कु",
          "क + ू → कू",
          "क + े → के",
          "क + ै → कै",
          "क + ो → को",
          "क + ौ → कौ",
        ],
      },

      numerals: {
        title: "Devanagari Numerals",
        paragraphs: [
          "The Devanagari digits are ० १ २ ३ ४ ५ ६ ७ ८ ९, corresponding to Western digits 0 1 2 3 4 5 6 7 8 9. Both forms appear in modern Hindi; Western digits are especially common in digital interfaces, dates, and mixed-language text.",
        ],
        bullets: [
          "० = 0, १ = 1, २ = 2, ३ = 3, ४ = 4",
          "५ = 5, ६ = 6, ७ = 7, ८ = 8, ९ = 9",
        ],
      },

      specialCharacters: {
        title: "Special Marks, Nukta, and Conjuncts",
        paragraphs: [
          "Anusvara (ं) and chandrabindu (ँ) are nasal marks, but they are not universally interchangeable. Chandrabindu commonly marks vowel nasalization; anusvara can represent a nasal sound or nasalization depending on the word and context.",
          "Nukta (़) modifies a base letter to represent additional sounds, as in क़, ख़, ग़, ज़, ड़, ढ़, and फ़. Usage and pronunciation vary: some speakers preserve distinctions that others merge, and spellings with or without nukta both occur in modern writing.",
          "Virama or halant (्) suppresses the inherent vowel. When consonants combine, the script may display a half-form or a conjunct ligature. क्ष, त्र, ज्ञ, and श्र are familiar examples; they are combinations, not extra independent letters in the core alphabet.",
          "Visarga (ः) and avagraha (ऽ) are encountered mainly in Sanskrit-derived or specialized contexts. Danda (।) and double danda (॥) are traditional punctuation marks; modern Hindi also commonly uses punctuation such as the comma and full stop.",
        ],
      },

      examples: {
        title: "Everyday Hindi Words",
        introduction:
          "The first Roman form uses scholarly transliteration where useful; the second is a simple learner-friendly Roman cue. The simple cue is practical spelling, not a separate standardized transcription.",
        items: [
          { native: "नमस्ते", roman: "namaste · namaste", meaning: "hello / greetings" },
          { native: "पानी", roman: "pānī · paani", meaning: "water" },
          { native: "किताब", roman: "kitāb · kitaab", meaning: "book" },
          { native: "घर", roman: "ghar · ghar", meaning: "house / home" },
          { native: "परिवार", roman: "parivār · parivaar", meaning: "family" },
          { native: "दोस्त", roman: "dost · dost", meaning: "friend" },
          { native: "धन्यवाद", roman: "dhanyavād · dhanyavaad", meaning: "thank you" },
          { native: "चाँद", roman: "cā̃d · chaand", meaning: "moon" },
        ],
      },

      typingGuide: {
        title: "Typing Hindi with English Letters",
        paragraphs: [
          "Type the Hindi word as you would say it using Roman letters. The transliteration tool suggests Devanagari spellings; choose the intended word when more than one suggestion appears. For example, 'khana' can produce खाना (food / to eat) or कहना (to say), depending on what you mean.",
          "This process is transliteration, not translation. Typing an English sentence such as 'How are you?' does not translate its meaning into Hindi. To write that meaning in Hindi, enter a Romanized Hindi expression such as 'aap kaise hain'.",
        ],
        examples: [
          { input: "namaste", output: "नमस्ते", explanation: "A common greeting." },
          { input: "paani", output: "पानी", explanation: "Water." },
          { input: "khana", output: "खाना", explanation: "One likely suggestion; context can change the intended word." },
          { input: "ghar", output: "घर", explanation: "House or home." },
          { input: "dhanyavaad", output: "धन्यवाद", explanation: "Thank you." },
          { input: "dost", output: "दोस्त", explanation: "Friend." },
          { input: "chaand", output: "चाँद", explanation: "Moon; चांद is also commonly seen." },
          { input: "zameen", output: "ज़मीन", explanation: "Land or ground; spellings with and without nukta occur." },
          { input: "kshama", output: "क्षमा", explanation: "Forgiveness / pardon." },
          { input: "namaste dosto", output: "नमस्ते दोस्तों", explanation: "Hello, friends." },
        ],
        notes: [
          "These outputs were observed in a live Hindi Google Input Tools test on 21 November 2026. Suggestions can vary with context and provider behaviour.",
          "Review the suggestions before using them in formal, published, or important text.",
          "Roman spellings are not one-to-one: the same input can represent different Hindi words. Use the surrounding sentence to choose the intended result.",
        ],
      },

      commonMistakes: {
        title: "Common Hindi Writing and Typing Mistakes",
        introduction:
          "These distinctions help learners read and select Devanagari suggestions more confidently.",
        items: [
          {
            incorrect: "Treating त and ट as the same sound",
            correct: "Keep dental त separate from retroflex ट",
            explanation: "त is articulated with the tongue near the upper teeth; ट is articulated with the tongue curled back.",
          },
          {
            incorrect: "Treating द and ड as interchangeable",
            correct: "Distinguish dental द from retroflex ड",
            explanation: "The place of articulation changes the consonant, even when Roman typing makes the distinction easy to miss.",
          },
          {
            incorrect: "Treating क and ख as identical",
            correct: "Notice the aspiration contrast: क /k/ and ख /kʰ/",
            explanation: "ख is produced with a noticeable burst of breath after the consonant.",
          },
          {
            incorrect: "Confusing फ with फ़",
            correct: "फ is traditionally aspirated /pʰ/; फ़ represents /f/ in borrowed words",
            explanation: "The two may sound similar to learners but represent different consonants.",
          },
          {
            incorrect: "Reading ि as if it were written after the consonant",
            correct: "Read कि as 'ki'",
            explanation: "The sign is encoded after क but appears visually to its left.",
          },
          {
            incorrect: "Using ं and ँ as if they always mean the same thing",
            correct: "Learn anusvara and chandrabindu as distinct marks",
            explanation: "Their pronunciation and spelling behaviour depend on the word; they are not universally interchangeable.",
          },
          {
            incorrect: "Pronouncing every written inherent vowel",
            correct: "Learn common schwa deletion patterns",
            explanation: "Hindi often omits an inherent schwa in pronunciation, so spelling and spoken syllables do not always match one-to-one.",
          },
          {
            incorrect: "Memorizing क्ष, त्र, ज्ञ, and श्र as extra independent vowels or consonants",
            correct: "Recognize them as conjunct forms",
            explanation: "They are combinations of consonants formed with virama and script shaping.",
          },
        ],
      },
    },

    cta: {
      title: "Ready to start typing in Hindi?",

      description:
        "Type Hindi words using English letters, review the Devanagari suggestions, and choose the spelling that matches your meaning.",

      button: "Open Hindi Typing Tool →",
    },

    faq: LEARN_HINDI_FAQ,
  },

  alphabet: hindiAlphabet,

  labels: {
    alphabet: {
      title: "Learn Hindi Letters (Devanagari)",

      description:
        "Start with the traditional core letters, then explore extended forms, vowel signs, special marks, and numerals.",

      vowels: "Core Independent Vowels (स्वर)",

      consonants: "Core Consonants (व्यंजन)",

      extensions: "Extended Letters and Nukta Forms",

      vowelSigns: "Vowel Signs (मात्राएँ)",

      symbols: "Special Marks and Punctuation (चिह्न)",

      numerals: "Devanagari Numerals",
    },
  },

  faq: HINDI_FAQ,

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
