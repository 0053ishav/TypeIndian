import type { Language } from "@/types/language";

import { GUJARATI_FAQ, LEARN_GUJARATI_FAQ } from "./faq";
import { gujaratiAlphabet } from "./alphabet";
import { gujaratiResearch } from "./research";

export const gujarati: Language = {
  id: "gujarati",
  slug: "gujarati",

  name: "Gujarati",
  nativeName: "ગુજરાતી",

  locale: "gu-IN",
  direction: "ltr",

  script: "Gujarati",

  transliteration: {
    engine: "google",
    languageCode: "gu",
  },

  typing: {
    title: "Gujarati Typing Tool",
    subtitle: "Type in English and convert instantly to ગુજરાતી",

    intro:
      "This Gujarati typing tool helps you write Gujarati using English letters. Simply type words phonetically in English and they instantly convert into ગુજરાતી (Gujarati script). No keyboard installation, no login - fast, accurate, and browser-based Gujarati transliteration.",

    learnLink: {
      href: "/learn/gujarati",
      label: "Learn Gujarati Typing (Gujarati Script)",
      description:
        "Understand Gujarati letters, sounds, and typing basics",
    },

    seo: {
      title: "Gujarati Typing Tool (English to Gujarati)",

      description:
        "Free English to Gujarati typing tool. Type in English and instantly write in Gujarati (ગુજરાતી script). No login. Accurate phonetic typing.",

      keywords: [
        "English to Gujarati typing",
        "Gujarati typing online",
        "Gujarati transliteration",
        "phonetic Gujarati typing",
        "TypeIndian Gujarati",
        "Gujarati typing",
        "Gujarati typing tool",
      ],

      openGraph: {
        title: "Gujarati Typing Tool - TypeIndian",

        description:
          "Type in English and write in Gujarati instantly. Free Gujarati typing tool with real-time conversion.",

        locale: "gu_IN",
      },

      twitter: {
        title: "Gujarati Typing Tool - TypeIndian",

        description:
          "English to Gujarati typing made easy. Free, fast, and browser-based.",
      },
    },
  },

  learn: {
    meta: {
      title: "Learn Gujarati Typing",

      description:
        "A beginner-friendly guide to typing Gujarati using English letters. Learn about the Gujarati language, Gujarati script, alphabets, pronunciation, and typing basics.",

      cta: "Start Typing in Gujarati →",
    },

    seo: {
      title:
        "Learn Gujarati Typing (English to Gujarati) – Beginner Guide",

      description:
        "Learn how to type Gujarati using English letters. Understand the Gujarati language, Gujarati script, vowels, consonants, numerals, and phonetic typing with examples.",

      keywords: [
        "learn Gujarati typing",
        "Gujarati typing tutorial",
        "Gujarati alphabet",
        "Gujarati vowels",
        "Gujarati consonants",
        "Gujarati script",
        "English to Gujarati typing guide",
        "Gujarati typing for beginners",
        "TypeIndian Gujarati",
      ],

      openGraph: {
        title: "Learn Gujarati Typing - Beginner Guide | TypeIndian",

        description:
          "Learn Gujarati typing with a beginner-friendly guide covering the Gujarati script, alphabets, pronunciation, and phonetic typing.",

        locale: "gu_IN",
      },

      twitter: {
        title: "Learn Gujarati Typing - TypeIndian",

        description:
          "Master Gujarati typing using English letters with our complete beginner guide.",
      },
    },

    about: {
      title: "About Gujarati Language",

      paragraphs: [
        "Gujarati (ગુજરાતી) is an Indo-Aryan language spoken primarily in the Indian state of Gujarat and by millions of people worldwide. It is one of the 22 Scheduled Languages of India.",
        "Gujarati is an Indo-Aryan language with a long literary history. Its development is commonly discussed through Old Gujarati and later stages, alongside the broader development of western Indo-Aryan languages.",
        "Gujarati is written in a script closely related to Devanagari. Its most visible distinction is the absence of the continuous horizontal headline (shirorekha).",
      ],
    },

    script: {
      title: "Gujarati Script",

      paragraphs: [
        "The Gujarati script is a left-to-right abugida. A consonant normally carries an inherent vowel, and dependent vowel signs modify that vowel. The script is closely related to Devanagari but does not use its continuous horizontal headline.",
        "Gujarati orthography includes independent vowels, 34 consonant letters, dependent vowel signs, combining marks, conjuncts, and native digits. The inherent vowel is often described as schwa-like, and it may be omitted in pronunciation without an explicit written sign.",
      ],

      bullets: [
        "Written from left to right",
        "Uses the Gujarati script",
        "Contains vowels and consonants",
        "Uses vowel signs (matras)",
      ],
    },

    alphabet: {
      vowels: {
        title: "Vowels (સ્વર)",

        description:
          "Gujarati vowels represent independent vowel sounds and form the foundation of pronunciation in the Gujarati writing system.",
      },

      consonants: {
        title: "Consonants (વ્યંજન)",

        description:
          "Gujarati consonants represent the primary sounds used to write native Gujarati words.",
      },

      extensions: {
        title: "Extended and Sanskrit Letters",

        description:
          "These include candra vowels, Sanskrit vocalic letters, and characters used in specialized transliteration. Nukta forms are not part of the traditional core Gujarati alphabet.",
      },

      vowelSigns: {
        title: "Vowel Signs (માત્રાઓ)",
        description:
          "Dependent vowel signs attach to consonants. The sign િ is stored after the consonant in Unicode even though it appears visually to the left.",
      },

      symbols: {
        title: "Special Signs and Symbols",
        description:
          "Candrabindu, anusvara, visarga, virama, nukta, avagraha, and other signs have distinct uses and should not be grouped with independent vowels.",
      },

      numerals: {
        title: "Gujarati Numerals (અંકો)",

        description:
          "Gujarati has its own native numeral (અંકો) system written using the Gujarati script.",
      },
    },

    curriculum: {
      research: gujaratiResearch,
      history: {
        title: "Gujarati Language and Its History",
        resourceIds: ["GUJ-R01", "GUJ-R04"],
        paragraphs: [
          "Gujarati (ગુજરાતી) is an Indo-Aryan language used in Gujarat and by Gujarati-speaking communities elsewhere in India and around the world. It has a substantial literary tradition across poetry, devotional writing, prose, theatre, and modern media.",
          "The language's historical development is commonly associated with Old Gujarati and later stages of western Indo-Aryan. Gujarati should be understood as a language with its own grammar and vocabulary, not merely as a regional pronunciation of Hindi.",
          "Gujarati is written in the Gujarati script, a Brahmic abugida closely related to Devanagari. Its characteristic visual feature is the absence of a continuous headline."
        ],
      },
      writingSystem: {
        title: "How the Gujarati Script Works",
        resourceIds: ["GUJ-R01", "GUJ-R02", "GUJ-R03"],
        paragraphs: [
          "Gujarati is an abugida written from left to right. A consonant normally carries an inherent vowel, often described as schwa-like. A dependent vowel sign replaces that inherent vowel with another vowel quality.",
          "The Gujarati script does not use the continuous horizontal headline (shirorekha) associated with Devanagari. This is one of its most visible visual distinctions, although the two scripts share historical and structural relationships.",
          "Consonant clusters can be written with the virama (્), which suppresses the inherent vowel and allows consonants to join. Depending on the letters and font, clusters may appear as half-forms, stacked forms, or ligated shapes.",
          "The Unicode sequence is the logical text order; shaping determines the visible form. For example, િ is encoded after its consonant but rendered to the left of it."
        ],
        bullets: [
          "Independent vowel: આ",
          "Consonant with inherent vowel: ક",
          "Dependent vowel sign: કા",
          "Pre-base visual vowel sign: કિ",
          "Virama: ક્",
          "Conjunct example: ક્ષ (ક + ્ + ષ)",
          "Native digits: ૦ ૧ ૨ ૩ ૪ ૫ ૬ ૭ ૮ ૯"
        ],
      },
      consonantClassification: {
        title: "Gujarati Consonants and Their Traditional Groups",
        resourceIds: ["GUJ-R01", "GUJ-R02"],
        paragraphs: [
          "Traditional Gujarati consonants are organized into five varga groups. Each group contains five letters, traditionally arranged by voicing and aspiration, followed by its nasal consonant.",
          "The five groups are velar, palatal, retroflex, dental, and bilabial. The remaining consonants include semivowels and fricatives. This chart is a useful guide to spelling and articulation, but it is not a complete description of every modern pronunciation or regional variation.",
          "Gujarati includes the letter ળ (LLA). It is a distinct encoded consonant, not the same letter as લ. Conjuncts such as ક્ષ and જ્ઞ are combinations of consonants and should not be counted as separate basic consonant letters."
        ],
        bullets: [
          "Velar: ક ખ ગ ઘ ઙ",
          "Palatal: ચ છ જ ઝ ઞ",
          "Retroflex: ટ ઠ ડ ઢ ણ",
          "Dental: ત થ દ ધ ન",
          "Bilabial: પ ફ બ ભ મ",
          "Other consonants include ય ર લ ળ વ શ ષ સ હ"
        ],
      },
      vowelSigns: {
        title: "Independent Vowels and Gujarati Matras",
        resourceIds: ["GUJ-R01", "GUJ-R02", "GUJ-R03"],
        paragraphs: [
          "A traditional core Gujarati vowel chart commonly teaches અ, આ, ઇ, ઈ, ઉ, ઊ, ઋ, એ, ઐ, ઓ, and ઔ. The Unicode repertoire also contains candra vowels such as ઍ and ઑ and additional vocalic letters used in Sanskrit. These specialized forms should be distinguished from the core beginner inventory.",
          "Dependent vowel signs (matras) modify the inherent vowel of a consonant. The Gujarati Unicode chart includes signs such as ા, િ, ી, ુ, ૂ, ૃ, ૄ, ૅ, ે, ૈ, ૉ, ો, and ૌ.",
          "The sign િ is a pre-base vowel sign: its code point follows the consonant in logical order, but its glyph appears to the left. This is a normal shaping behaviour, not an error in the stored text.",
          "Historical short and long vowel-sign distinctions do not always correspond to a length contrast in modern Gujarati pronunciation. Learn the written forms and their contemporary pronunciation in context."
        ],
        bullets: [
          "ક + ા → કા",
          "ક + િ → કિ",
          "ક + ી → કી",
          "ક + ુ → કુ",
          "ક + ૂ → કૂ",
          "ક + ૃ → કૃ",
          "ક + ે → કે",
          "ક + ૈ → કૈ",
          "ક + ો → કો",
          "ક + ૌ → કૌ"
        ],
      },
      numerals: {
        title: "Gujarati Numerals",
        resourceIds: ["GUJ-R01", "GUJ-R03"],
        paragraphs: [
          "Gujarati has its own ten digit characters: ૦ ૧ ૨ ૩ ૪ ૫ ૬ ૭ ૮ ૯. They correspond to Western digits 0 through 9.",
          "Western digits are also common in modern digital contexts. A typing tool should preserve the user's chosen numeral system unless the user explicitly requests conversion."
        ],
      },
      specialCharacters: {
        title: "Virama, Nasal Signs, Nukta, and Other Marks",
        resourceIds: ["GUJ-R02", "GUJ-R03"],
        paragraphs: [
          "The virama (્), also called halant, suppresses the inherent vowel of a consonant and participates in conjunct formation. A conjunct is a sequence of encoded consonants and a virama, even when it is displayed as a compact ligature.",
          "Anusvara (ં) and candrabindu (ઁ) are nasalization-related signs; visarga (ઃ) has a separate function and is especially associated with Sanskrit-derived words. These marks are not independent vowels.",
          "Nukta (઼) can extend the script for specialized transliteration, including Perso-Arabic sounds. It is not generally part of the traditional core Gujarati alphabet inventory.",
          "The avagraha (ઽ), Om sign (ૐ), abbreviation sign (૰), and Gujarati rupee sign (૱) are additional encoded signs. Their presence in Unicode does not mean they are all common in everyday Gujarati prose."
        ],
      },
      examples: {
        title: "Everyday Gujarati Words",
        introduction: "These are common Gujarati examples with practical Roman learner cues; Roman spelling is not a single universal standard.",
        items: [
          { native: "ગુજરાતી", roman: "gujarati", meaning: "Gujarati" },
          { native: "નમસ્તે", roman: "namaste", meaning: "hello / greetings" },
          { native: "કેમ છો?", roman: "kem cho?", meaning: "How are you?" },
          { native: "હું", roman: "huṁ", meaning: "I" },
          { native: "આભાર", roman: "aabhar", meaning: "thank you" },
          { native: "પાણી", roman: "paani", meaning: "water" },
          { native: "ઘર", roman: "ghar", meaning: "house / home" }
        ],
      },
      typingGuide: {
        title: "Typing Gujarati with Roman Letters",
        paragraphs: [
          "Type Gujarati words using Roman letters and select the Gujarati-script suggestion that matches the word you intend. This is transliteration: it changes the script, not the language or meaning.",
          "Informal Roman input is flexible. It is not the same as formal Library of Congress or United Nations romanization systems, which are designed for cataloguing or geographical names rather than conversational typing.",
          "Gujarati has contrasts that can be difficult to represent consistently in Roman input, including aspirated consonants, retroflex consonants, and vowel distinctions. The same Roman sequence may produce multiple candidates.",
          "TypeIndian uses its configured Google Input Tools provider for Gujarati suggestions. The examples here are language-learning examples, not a guarantee of the provider's exact suggestion order."
        ],
        examples: [
          { input: "kem cho", output: "કેમ છો", explanation: "A common Gujarati greeting." },
          { input: "gujarati", output: "ગુજરાતી", explanation: "The name of the language." },
          { input: "aabhar", output: "આભાર", explanation: "A common expression of thanks." },
          { input: "paani", output: "પાણી", explanation: "The word for water." }
        ],
        notes: [
          "Choose suggestions by meaning and sentence context.",
          "Roman input is not a one-to-one spelling standard.",
          "Use the virama and vowel signs correctly when editing Gujarati script directly.",
          "The typing tool transliterates Gujarati words; it does not translate English sentences."
        ],
      },
      commonMistakes: {
        title: "Common Gujarati Writing and Typing Mistakes",
        introduction: "These mistakes come from mixing up script structure, conjuncts, Unicode order, and spoken pronunciation.",
        items: [
          { incorrect: "Counting ક્ષ and જ્ઞ as independent basic consonants", correct: "Learn them as conjunct sequences built from consonants and virama.", explanation: "Their familiar forms are combinations, not separate basic consonant letters." },
          { incorrect: "Treating િ as if it must be stored before the consonant", correct: "Encode the consonant first and the sign િ after it.", explanation: "The sign is displayed to the left even though its logical Unicode position follows the consonant." },
          { incorrect: "Mixing up લ and ળ", correct: "Learn the two letters as distinct Gujarati consonants.", explanation: "They have separate Unicode code points and represent different consonant categories." },
          { incorrect: "Treating anusvara, candrabindu, and visarga as interchangeable", correct: "Use the sign required by the word and orthographic context.", explanation: "ં, ઁ, and ઃ have distinct functions." },
          { incorrect: "Assuming every vowel letter in Unicode is part of the everyday beginner chart", correct: "Separate core Gujarati vowels from candra vowels and Sanskrit extensions.", explanation: "Unicode encodes specialist and historical characters in addition to common modern writing." }
        ],
      },
    },

    cta: {
      title: "Ready to start typing in Gujarati?",

      description:
        "You don't need to learn keyboard layouts. Simply type naturally in English and TypeIndian instantly converts your words into Gujarati.",

      button: "Open Gujarati Typing Tool →",
    },

    faq: LEARN_GUJARATI_FAQ,
  },

  alphabet: gujaratiAlphabet,

  labels: {
    alphabet: {
      title: "Learn Gujarati Letters",

      description:
        "These are the core Gujarati letters. Click any letter to insert it directly into the typing editor above.",

      vowels: "Vowels (સ્વર)",

      consonants: "Consonants (વ્યંજન)",

      extensions: "Additional Letters",

      numerals: "Gujarati Numerals (અંકો)",
    },
  },

  faq: GUJARATI_FAQ,

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