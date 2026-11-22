import type { Language } from "@/types/language";

import { urduAlphabet } from "./alphabet";
import { LEARN_URDU_FAQ, URDU_FAQ } from "./faq";
import { urduResearch } from "./research";

export const urdu: Language = {
  id: "urdu",
  slug: "urdu",

  name: "Urdu",
  nativeName: "اردو",

  locale: "ur-IN",
  direction: "rtl",

  script: "Perso-Arabic (Nastaliq)",

  transliteration: {
    engine: "google",
    languageCode: "ur",
  },

  typing: {
    title: "Urdu Typing Tool",

    subtitle:
      "Type in English and convert instantly to اردو",

    intro:
      "Write Urdu naturally using English letters with TypeIndian's Urdu typing tool. Type words phonetically in Roman Urdu and convert them into اردو using the Perso-Arabic script. No keyboard installation, no login - a fast, convenient, and browser-based Urdu transliteration tool.",

    learnLink: {
      href: "/learn/urdu",

      label: "Learn Urdu Typing (Urdu Script)",

      description:
        "Understand Urdu letters, pronunciation, Nastaliq writing, and RTL typing basics.",
    },

    seo: {
      title: "Urdu Typing Tool (English to Urdu)",

      description:
        "Free English to Urdu typing tool. Type Urdu phonetically using English letters and instantly convert your text into اردو. Supports right-to-left Urdu typing without requiring an Urdu keyboard.",

      keywords: [
        "English to Urdu typing",
        "Urdu typing",
        "Urdu typing online",
        "Roman Urdu typing",
        "Urdu transliteration",
        "English to Urdu converter",
        "Urdu keyboard",
        "Urdu typing tool",
        "Nastaliq typing",
        "RTL Urdu typing",
        "TypeIndian Urdu",
      ],

      openGraph: {
        title: "Urdu Typing Tool - TypeIndian",

        description:
          "Type Urdu using English letters and instantly convert your words into اردو with RTL support.",

        locale: "ur_IN",
      },

      twitter: {
        title: "Urdu Typing Tool - TypeIndian",

        description:
          "Free English to Urdu phonetic typing with right-to-left support.",
      },
    },
  },

  learn: {
    meta: {
      title: "Learn Urdu Typing",

      description:
        "Learn how to type Urdu using English letters with this beginner-friendly guide. Explore Urdu, the Perso-Arabic script, Nastaliq, letters, pronunciation, and right-to-left typing.",

      cta: "Start Typing in Urdu →",
    },

    seo: {
      title:
        "Learn Urdu Typing (English to Urdu) – Beginner Guide",

      description:
        "Learn Urdu typing using English letters. Understand the Urdu alphabet, Perso-Arabic script, Nastaliq writing style, pronunciation, numerals, and RTL phonetic typing.",

      keywords: [
        "learn Urdu typing",
        "Urdu typing tutorial",
        "Urdu alphabet",
        "Urdu script",
        "Perso-Arabic script",
        "Nastaliq",
        "Roman Urdu typing",
        "Urdu vowels",
        "Urdu consonants",
        "English to Urdu typing guide",
        "Urdu typing for beginners",
        "RTL Urdu typing",
        "TypeIndian Urdu",
      ],

      openGraph: {
        title:
          "Learn Urdu Typing - Beginner Guide | TypeIndian",

        description:
          "Learn Urdu typing with a beginner-friendly guide covering the Urdu script, Nastaliq, alphabet, pronunciation, and RTL phonetic typing.",

        locale: "ur_IN",
      },

      twitter: {
        title: "Learn Urdu Typing - TypeIndian",

        description:
          "Learn to type Urdu naturally using English letters with our beginner-friendly guide.",
      },
    },

    about: {
      title: "About Urdu Language",
      paragraphs: [
        "Urdu (اردو) is an Indo-Aryan language spoken in India, Pakistan, and communities around the world. It has a rich literary tradition and a shared spoken history with other varieties of Hindustani.",
        "Urdu is written in a modified Perso-Arabic form of the Arabic script. The script was adapted to represent sounds important in Indo-Aryan languages, including aspiration, retroflexion, and nasalization. Arabic and Persian loanwords also preserve spelling distinctions whose modern Urdu pronunciations may overlap.",
        "Nastaliq became the preferred traditional style for Urdu handwriting and publishing. It is a calligraphic style of the Arabic script, not a separate Unicode script."
      ],
    },

    script: {
      title: "Urdu Script",
      paragraphs: [
        "Urdu is written from right to left using a cursive Arabic-derived script. The same underlying letter can take isolated, initial, medial, or final glyph forms depending on its position and joining behavior.",
        "The script is an abjad: short vowels are usually omitted in everyday writing. Long vowels are represented using a combination of letters and, when needed, combining marks. Readers often infer short vowels from word patterns and context.",
        "Urdu letters include connectors and non-connectors. Some letters join to the following letter, while others break the connection. Unicode stores the logical character sequence; a shaping engine and font select the contextual glyph forms.",
        "Nastaliq typography has a distinctive sloping flow with extended ascenders and descenders. Good Urdu web support therefore depends on an appropriate Nastaliq-capable font and correct bidirectional text handling."
      ],
      bullets: [
        "Written from right to left",
        "Uses a modified Perso-Arabic form of the Arabic script",
        "Nastaliq is a traditional calligraphic style, not a separate encoded script",
        "Letters change shape according to joining context",
        "Short-vowel marks are usually omitted in ordinary writing",
        "Embedded numbers and Latin text follow bidirectional text rules"
      ],
    },

    alphabet: {
      vowels: {
        title: "Vowel Letters (حروفِ علت)",
        description: "Urdu uses five principal vowel letters/carriers: ا, آ, و, ی, and ے. Their values vary by position and context; short vowels are normally represented by optional combining marks rather than separate letters."
      },
      consonants: {
        title: "Urdu Consonant Letters (حروف)",
        description: "Traditional charts list 36 letters in the Urdu alphabet. Many letters preserve Arabic and Persian spelling distinctions even where their modern Urdu sounds overlap. Modern orthography references also describe aspirated consonant digraphs."
      },
      extensions: {
        title: "Additional Urdu Characters and Combinations",
        description: "Nūn ghunna (ں), do cashmī hē (ھ), and hamza (ء) are important to learn even though traditional alphabet charts may list them separately. Hamza-bearing forms such as ؤ and ئ also occur in Urdu spelling."
      },
      vowelSigns: {
        title: "Short Vowel and Pronunciation Marks",
        description: "Zabar, zer, and pesh indicate short a, i, and u. They are usually omitted in ordinary text but appear in learning materials, dictionaries, and places where pronunciation needs clarification."
      },
      symbols: {
        title: "Other Diacritics",
        description: "Jazm/sukūn marks the absence of a following vowel, shadda marks consonant gemination, and tanwīn marks occur mainly in Arabic-derived forms. These marks are not ordinary alphabet letters."
      },
      numerals: {
        title: "Urdu Numerals",
        description: "Urdu commonly uses Eastern Arabic-Indic digits ۰ through ۹. Their Unicode characters are shared across languages; language-aware fonts may display some digit glyphs differently."
      },
    },

    curriculum: {
      research: urduResearch,
      history: {
        title: "Urdu Language and Its Writing Tradition",
        resourceIds: ["URD-R01", "URD-R03"],
        paragraphs: [
          "Urdu is an Indo-Aryan language whose literary and written traditions developed in South Asia. Its vocabulary reflects interaction among Indo-Aryan, Persian, Arabic, and Turkic linguistic traditions.",
          "The Urdu writing system is based on the Arabic script as adapted through Persian and extended for sounds found in South Asian languages. The National Council for Promotion of Urdu Language's beginner manual describes modifications for aspiration, retroflexion, and nasalization.",
          "Nastaliq became the preferred style for Urdu handwriting and publishing. The style is culturally important, but the encoded text remains a sequence of Unicode Arabic-script characters."
        ],
      },
      writingSystem: {
        title: "How Urdu Script Works",
        resourceIds: ["URD-R01", "URD-R02", "URD-R03"],
        paragraphs: [
          "Urdu is written from right to left. The script is cursive: many letters join to neighboring letters, and their visible forms change according to whether they appear isolated, initially, medially, or finally.",
          "Letters are often described as connectors and non-connectors. A non-connector does not join to the following letter, creating a break in the cursive flow. This behavior is part of the orthography and should be handled by the text-shaping engine, not by manually choosing positional glyphs.",
          "Nastaliq has a characteristic diagonal baseline and extended ascenders and descenders. A font designed for Nastaliq is important for a natural Urdu reading experience; generic Arabic Naskh typography may look different.",
          "Urdu text can contain numbers and Latin words. These embedded runs follow the Unicode Bidirectional Algorithm, so an Urdu paragraph is not simply a string that should be reversed character by character."
        ],
        bullets: [
          "Logical text order is stored normally; do not reverse strings manually",
          "Use dir=rtl or equivalent direction-aware layout for Urdu text",
          "Use a Nastaliq-capable font for the intended traditional appearance",
          "Allow the shaping engine to select contextual letter forms",
          "Mixed Urdu, Latin, and numeric content requires bidirectional handling"
        ],
      },
      consonantClassification: {
        title: "Urdu Consonants, Similar Sounds, and Aspiration",
        resourceIds: ["URD-R01", "URD-R03", "URD-R04"],
        paragraphs: [
          "A traditional Urdu alphabet chart lists 36 letters. The number depends on what a chart counts: vowel carriers, auxiliary characters, and consonant combinations may be treated separately. Modern orthography references describe 36 basic consonant letters and 18 aspirated digraphs.",
          "Several letters preserve spelling distinctions from Arabic and Persian even when their modern Urdu pronunciations overlap. For example, ث, س, and ص commonly represent an s-like sound, while ذ, ز, ض, and ظ commonly represent z-like sounds. These spellings remain important for reading and writing loanwords.",
          "Urdu has dedicated retroflex letters ٹ, ڈ, and ڑ. They represent sounds that are important in South Asian languages and are not interchangeable with ت, د, and ر.",
          "Aspiration is commonly represented by a consonant followed by do cashmī hē (ھ), as in بھ, پھ, تھ, ٹھ, جھ, چھ, دھ, ڈھ, کھ, and گھ. Treat these as orthographic consonant combinations, not as a separate set of single Unicode alphabet letters."
        ],
        bullets: [
          "Retroflex letters: ٹ، ڈ، ڑ",
          "Aspiration element: ھ",
          "Nūn ghunna: ں",
          "Overlapping loanword spellings: ث / س / ص and ذ / ز / ض / ظ"
        ],
      },
      vowelSigns: {
        title: "Urdu Vowels and Diacritics",
        resourceIds: ["URD-R01", "URD-R03"],
        paragraphs: [
          "Urdu has short and long vowel sounds. Five principal vowel letters/carriers are ا, آ, و, ی, and ے. Their pronunciation depends on their position and surrounding letters: و can represent /v/ or /w/ as a consonant and several long-vowel values, while ی can represent /y/ or long-vowel values.",
          "Short vowels are normally omitted in everyday Urdu writing. When pronunciation must be explicit, zabar (َ), zer (ِ), and pesh (ُ) can mark short a, i, and u. These combining marks attach to a base letter; they are not independent vowel letters.",
          "Other marks include jazm or sukūn (ْ) for the absence of a following vowel and shadda (ّ) for consonant gemination. Tanwīn marks are mainly found in Arabic-derived words and specialist contexts.",
          "Hamza (ء) has several orthographic roles, including marking certain vowel sequences and the izāfat construction. Its written behavior is context-sensitive, so do not reduce every hamza-bearing form to a simple independent consonant."
        ],
        bullets: [
          "Zabar: بَ",
          "Zer: بِ",
          "Pesh: بُ",
          "Jazm / sukūn: بْ",
          "Shadda: بّ",
          "Long-vowel carriers: ا، آ، و، ی، ے"
        ],
      },
      numerals: {
        title: "Eastern Arabic-Indic Digits Used in Urdu",
        resourceIds: ["URD-R01", "URD-R02", "URD-R03"],
        paragraphs: [
          "Urdu commonly uses the digits ۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹. They correspond to Western digits 0 through 9 and are encoded using the extended Arabic-Indic digit characters.",
          "Unicode does not encode a completely separate Urdu digit set. Some digit glyphs vary by language and font, while the underlying numeric characters are shared. Embedded number sequences are displayed left to right within right-to-left Urdu text.",
          "Western digits are also common in websites, forms, and technical documents. Preserve the numeral style appropriate to the user's context."
        ],
      },
      specialCharacters: {
        title: "Nūn Ghunna, Do Cashmī Hē, Hamza, and Other Marks",
        resourceIds: ["URD-R01", "URD-R02", "URD-R03"],
        paragraphs: [
          "Nūn ghunna (ں) is a special nasalization letter, especially used at the end of words. Medial nasalization is generally written using nūn (ن), with pronunciation and spelling depending on the word.",
          "Do cashmī hē (ھ) is an important Urdu orthographic element used after consonants to write aspiration. It combines with a preceding consonant in forms such as بھ, پھ, تھ, ٹھ, جھ, چھ, دھ, ڈھ, کھ, and گھ.",
          "Hamza (ء) and hamza-bearing forms such as ؤ and ئ occur in Urdu spelling. Their behavior is more complex than a one-letter/one-sound mapping and includes roles in vowel sequences and izāfat.",
          "The marks zabar, zer, pesh, jazm, shadda, and tanwīn are combining marks. They should remain attached to their base letters and should not be treated as separate alphabet characters."
        ],
      },
      examples: {
        title: "Everyday Urdu Words and Phrases",
        introduction: "These examples show common Urdu spellings. Roman forms are practical learner cues, not a standardized one-to-one transliteration or a guarantee of a particular provider suggestion.",
        items: [
          { native: "اردو", roman: "urdu", meaning: "Urdu" },
          { native: "السلام علیکم", roman: "assalāmu alaikum", meaning: "Peace be upon you / greeting" },
          { native: "شکریہ", roman: "shukriya", meaning: "Thank you" },
          { native: "پانی", roman: "pānī", meaning: "Water" },
          { native: "کتاب", roman: "kitāb", meaning: "Book" },
          { native: "آپ کیسے ہیں؟", roman: "āp kaise hain?", meaning: "How are you? (polite)" },
          { native: "پاکستان", roman: "pākistān", meaning: "Pakistan" }
        ],
      },
      typingGuide: {
        title: "Typing Urdu with Roman Letters",
        paragraphs: [
          "Enter a word using Roman Urdu and select the Urdu-script suggestion that matches the word you intend. This process is transliteration, not translation.",
          "Roman Urdu has no single universally followed spelling system. The same sound may be typed in different ways, and short vowels are not always recoverable from the consonants alone. Review suggestions in sentence context, especially for names and ambiguous words.",
          "Formal romanization systems use scholarly conventions and may distinguish letters that sound alike in modern Urdu. These systems are useful for cataloguing and reference, but they are not identical to casual Roman Urdu typing.",
          "TypeIndian uses its configured Google Input Tools provider for Urdu suggestions. The examples in this guide illustrate words and typing concepts; they do not guarantee exact provider output, spelling alternatives, or suggestion order."
        ],
        examples: [
          { input: "urdu", output: "اردو", explanation: "The name of the language." },
          { input: "shukriya", output: "شکریہ", explanation: "Thank you." },
          { input: "pani", output: "پانی", explanation: "Water." },
          { input: "kitab", output: "کتاب", explanation: "Book." }
        ],
        notes: [
          "Choose a suggestion by meaning and sentence context, not sound alone.",
          "Do not assume Roman Urdu spelling is standardized.",
          "Short vowels may be ambiguous when omitted from ordinary Urdu text.",
          "The tool transliterates Roman Urdu input; it does not translate English sentences."
        ],
      },
      commonMistakes: {
        title: "Common Urdu Writing and Typing Mistakes",
        introduction: "These points focus on Urdu's cursive joining, omitted short vowels, auxiliary letters, and Roman input ambiguity.",
        items: [
          {
            incorrect: "Reversing Urdu text character by character to make it read right to left",
            correct: "Store text in logical Unicode order and use right-to-left direction and bidirectional rendering.",
            explanation: "The Unicode Bidirectional Algorithm handles visual ordering, including mixed Urdu, Latin, and numeric text."
          },
          {
            incorrect: "Treating Nastaliq as a separate Unicode script",
            correct: "Treat Nastaliq as a calligraphic style of the Arabic script and use an appropriate font.",
            explanation: "The underlying characters are encoded as Arabic-script Unicode characters."
          },
          {
            incorrect: "Expecting every short vowel to appear in ordinary Urdu text",
            correct: "Learn the vowel carriers and use zabar, zer, and pesh where pronunciation needs clarification.",
            explanation: "Short-vowel marks are usually omitted in everyday writing."
          },
          {
            incorrect: "Treating ث, س, and ص as interchangeable spellings",
            correct: "Learn the conventional spelling of each word even when the letters share a modern sound.",
            explanation: "Historical Arabic/Persian spelling distinctions remain important in Urdu orthography."
          },
          {
            incorrect: "Treating ھ as the same letter as ہ",
            correct: "Learn do cashmī hē (ھ) as an aspiration element and choṭī hē (ہ) as a separate letter.",
            explanation: "They have different orthographic functions."
          },
          {
            incorrect: "Assuming one Roman spelling always gives one Urdu suggestion",
            correct: "Review transliteration suggestions in context and proofread the final Urdu text.",
            explanation: "Roman Urdu spelling is not standardized and Urdu short vowels are often unwritten."
          }
        ],
      },
    },

    cta: {
      title: "Ready to start typing in Urdu?",

      description:
        "You don't need to memorize an Urdu keyboard layout. Type naturally using English letters and TypeIndian converts your phonetic input into Urdu script.",

      button: "Open Urdu Typing Tool →",
    },

    faq: LEARN_URDU_FAQ,
  },

  alphabet: urduAlphabet,

  labels: {
    alphabet: {
      title: "Learn Urdu Letters",

      description:
        "Explore common Urdu letters and numerals. Click a character to insert it directly into the typing editor.",

      vowels: "Vowel Letters (حروفِ علت)",

      consonants: "Urdu Letters (حروف)",

      extensions: "Additional Urdu Letters",

      numerals: "Urdu Numerals",
    },
  },

  faq: URDU_FAQ,

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