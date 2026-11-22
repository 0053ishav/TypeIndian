import type { Language } from "@/types/language";

import { sanskritAlphabet } from "./alphabet";
import { sanskritResearch } from "./research";
import { LEARN_SANSKRIT_FAQ, SANSKRIT_FAQ } from "./faq";

export const sanskrit: Language = {
  id: "sanskrit",
  slug: "sanskrit",
  name: "Sanskrit",
  nativeName: "संस्कृतम्",
  locale: "sa-IN",
  direction: "ltr",
  script: "Devanagari",

  transliteration: {
    engine: "google",
    languageCode: "sa",
  },

  typing: {
    title: "Sanskrit Typing Tool",
    subtitle: "Type in English and convert to संस्कृतम्",
    intro:
      "Write Sanskrit using Roman letters with TypeIndian. Type a word phonetically, then choose the Devanagari suggestion that matches your intended Sanskrit word. No keyboard installation or login is required.",
    learnLink: {
      href: "/learn/sanskrit",
      label: "Learn Sanskrit Typing (Devanagari)",
      description:
        "Understand Sanskrit sounds, Devanagari, vowel signs, conjuncts, and Roman-letter typing.",
    },
    seo: {
      title: "Sanskrit Typing Tool (English to Sanskrit)",
      description:
        "Free Roman-to-Sanskrit typing tool. Type Sanskrit words with English letters and choose Devanagari suggestions in your browser.",
      keywords: [
        "English to Sanskrit typing",
        "Sanskrit typing",
        "Sanskrit typing online",
        "Sanskrit transliteration",
        "Sanskrit keyboard",
        "Roman to Sanskrit",
        "Devanagari Sanskrit typing",
        "Sanskrit typing tool",
        "TypeIndian Sanskrit",
      ],
      openGraph: {
        title: "Sanskrit Typing Tool - TypeIndian",
        description:
          "Type Sanskrit with Roman letters and choose Devanagari suggestions.",
        locale: "sa_IN",
      },
      twitter: {
        title: "Sanskrit Typing Tool - TypeIndian",
        description: "Free browser-based Roman-to-Sanskrit typing.",
      },
    },
  },

  learn: {
    meta: {
      title: "Learn Sanskrit Typing",
      description:
        "Learn Sanskrit typing with a beginner guide to Devanagari, vowels, consonants, matras, conjuncts, pronunciation, Vedic marks, and phonetic input.",
      cta: "Start Typing in Sanskrit →",
    },
    seo: {
      title: "Learn Sanskrit Typing – Devanagari Script, Alphabet and Beginner Guide",
      description:
        "Learn Sanskrit sounds and Devanagari writing: vowels, consonant groups, vowel signs, conjuncts, anusvāra, visarga, IAST, numerals, and Roman-letter typing.",
      keywords: [
        "learn Sanskrit typing",
        "Sanskrit alphabet",
        "Sanskrit script",
        "Devanagari Sanskrit",
        "Sanskrit vowels",
        "Sanskrit consonants",
        "Sanskrit pronunciation",
        "Sanskrit matras",
        "Sanskrit conjunct consonants",
        "IAST transliteration",
        "Vedic accents",
        "English to Sanskrit typing guide",
        "TypeIndian Sanskrit",
      ],
      openGraph: {
        title: "Learn Sanskrit Typing - Beginner Guide | TypeIndian",
        description:
          "A researched beginner guide to Sanskrit sounds, Devanagari, and phonetic typing.",
        locale: "sa_IN",
      },
      twitter: {
        title: "Learn Sanskrit Typing - TypeIndian",
        description: "Learn Sanskrit alphabet, Devanagari, and Roman-letter typing.",
      },
    },

    about: {
      title: "About Sanskrit",
      paragraphs: [
        "Sanskrit (संस्कृतम्) is a classical Indo-Aryan language with a vast intellectual and literary tradition. Its texts include works on grammar, philosophy, poetry, drama, mathematics, astronomy, medicine, ritual, and other scholarly subjects.",
        "Sanskrit has been written in many scripts across South Asia. Devanagari is widely used in modern printed and digital editions, but the language itself is not tied to one script.",
        "The Sanskrit sound system is traditionally described with a carefully ordered inventory of vowels, stop consonants, semivowels, sibilants, and breath-related signs. This organization is closely connected to articulatory phonetics and the śikṣā tradition.",
      ],
    },

    script: {
      title: "Devanagari for Sanskrit",
      paragraphs: [
        "TypeIndian writes Sanskrit in Devanagari. Devanagari is a left-to-right abugida: consonants normally carry an inherent vowel, independent vowel letters are used where a vowel begins a syllable, and dependent vowel signs modify a consonant's inherent vowel.",
        "The virama (्), also called halant, suppresses the inherent vowel and participates in conjunct formation. A conjunct is a written consonant cluster; its glyph shape is determined by Devanagari orthography and font shaping.",
        "Sanskrit texts may also use anusvāra, anunāsika, visarga, avagraha, and Vedic accent marks. A basic modern Sanskrit typing workflow does not automatically provide full support for every specialized Vedic recitation convention.",
      ],
      bullets: [
        "Written from left to right",
        "Uses Devanagari for this TypeIndian tool",
        "Consonants normally carry an inherent vowel",
        "Uses dependent vowel signs (mātrās)",
        "Uses virama / halant to form consonant clusters",
        "Includes Sanskrit-specific use of visarga and avagraha",
        "Vedic editions may require additional accent marks",
      ],
    },

    alphabet: {
      vowels: {
        title: "Independent Vowels (स्वराः)",
        description:
          "A common traditional chart presents 14 independent vowels, including the rare long vocalic liquids ॠ and ॡ. Some modern teaching charts simplify this inventory.",
        resourceIds: ["SAN-R01", "SAN-R04", "SAN-R05"],
      },
      consonants: {
        title: "Consonants (व्यञ्जनानि)",
        description:
          "The 33 primary consonants are arranged into five stop groups followed by semivowels and sibilants with ह.",
        resourceIds: ["SAN-R04", "SAN-R05"],
      },
      extensions: {
        title: "Conjuncts and Special Forms",
        description:
          "क्ष, त्र, ज्ञ, and श्र are common conjuncts formed from consonant sequences. ॐ is a special sacred syllable sign, not a consonant.",
        resourceIds: ["SAN-R01", "SAN-R02"],
      },
      vowelSigns: {
        title: "Dependent Vowel Signs (मात्राः)",
        description:
          "Mātrās represent vowels following consonants. Vocalic ṛ and ḷ have dependent signs, including specialist long forms.",
        resourceIds: ["SAN-R01", "SAN-R05"],
      },
      symbols: {
        title: "Anusvāra, Visarga, Avagraha, and Vedic Accent Marks",
        description:
          "These signs have distinct phonetic, grammatical, or recitational functions. Vedic marks require specialized reading conventions.",
        resourceIds: ["SAN-R01", "SAN-R06"],
      },
      numerals: {
        title: "Devanagari Numerals",
        description:
          "Devanagari digits ०–९ can be used in Sanskrit texts. Modern editions may also use Western digits.",
        resourceIds: ["SAN-R01", "SAN-R02"],
      },
    },

    curriculum: {
      research: sanskritResearch,
      history: {
        title: "Sanskrit and Its Knowledge Traditions",
        resourceIds: ["SAN-R04", "SAN-R05"],
        paragraphs: [
          "Sanskrit is a classical Indo-Aryan language with a long history of oral composition, memorization, manuscript transmission, and written scholarship. Its traditions include Vedic texts, grammatical analysis, philosophy, poetry, drama, mathematics, astronomy, medicine, and ritual literature.",
          "The language has been written in multiple scripts across South Asia. Devanagari is a common modern medium for Sanskrit editions, but historical manuscripts and regional publications also use other scripts.",
          "The traditional śikṣā disciplines examine sound production, articulation, pitch, duration, and recitation. These are not merely spelling topics: accurate Sanskrit reading can depend on phonetic distinctions that ordinary Roman typing does not preserve automatically.",
        ],
      },
      writingSystem: {
        title: "How Devanagari Represents Sanskrit",
        resourceIds: ["SAN-R01", "SAN-R02"],
        paragraphs: [
          "Devanagari is an abugida. A consonant normally includes an inherent vowel; an independent vowel letter is used when a vowel occurs without a preceding consonant in the same written syllable. A dependent vowel sign changes the consonant's inherent vowel.",
          "The virama (्) suppresses the inherent vowel. It can join consonants into clusters and conjunct forms. The resulting glyph may change shape depending on the consonants and the font's shaping rules.",
          "A written akṣara is a useful reading unit, but Sanskrit linguistic analysis also distinguishes phonemes, syllables, morphemes, and word boundaries. Do not assume that every visible glyph corresponds to one independent sound.",
          "Devanagari is one script used for Sanskrit, not the Sanskrit language itself. The same script also writes Hindi, Marathi, Nepali, and other languages with different phonological and orthographic conventions.",
        ],
        bullets: [
          "Independent vowel: आ",
          "Consonant with inherent vowel: क",
          "Dependent vowel sign: का",
          "Virama: क्",
          "Conjunct: क् + ष → क्ष",
          "Sentence punctuation: । and ॥",
        ],
      },
      consonantClassification: {
        title: "The Sanskrit Sound Classes (वर्गाः)",
        resourceIds: ["SAN-R04", "SAN-R05"],
        paragraphs: [
          "The traditional Sanskrit sound order is strongly articulatory. It begins with vowels, then presents the five groups of stop consonants from the back of the mouth toward the lips, followed by semivowels and sibilants.",
          "Each stop group contains five positions: voiceless unaspirated, voiceless aspirated, voiced unaspirated, voiced aspirated, and nasal. This pattern makes the varga table a compact introduction to place and manner of articulation.",
          "The five groups are kaṇṭhya (velar), tālavya (palatal), mūrdhanya (retroflex), dantya (dental), and oṣṭhya (labial). The final consonant in each group is a nasal.",
          "After the five vargas come the semivowels य र ल व and the sibilants श ष स, followed by ह. The sounds represented by श, ष, and स are distinct in Sanskrit and should not be collapsed into one generic 'sh' sound.",
        ],
        bullets: [
          "Velar / kaṇṭhya: क ख ग घ ङ",
          "Palatal / tālavya: च छ ज झ ञ",
          "Retroflex / mūrdhanya: ट ठ ड ढ ण",
          "Dental / dantya: त थ द ध न",
          "Labial / oṣṭhya: प फ ब भ म",
          "Semivowels: य र ल व",
          "Sibilants and h: श ष स ह",
        ],
      },
      vowelSigns: {
        title: "Vowels, Length, and Mātrās",
        resourceIds: ["SAN-R01", "SAN-R04", "SAN-R05"],
        paragraphs: [
          "A common traditional Sanskrit inventory presents 14 independent vowels: अ आ इ ई उ ऊ ऋ ॠ ऌ ॡ ए ऐ ओ औ. The long vocalic liquids ॠ and ॡ are rare, and their presence in a chart does not mean they are equally common in ordinary Sanskrit vocabulary.",
          "When a vowel follows a consonant, Devanagari normally uses a dependent sign (mātrā). For example, क + ा gives का, क + ि gives कि, and क + ृ gives कृ. The independent vowel अ has no separate visible matra; the consonant's inherent vowel supplies that value.",
          "Sanskrit distinguishes vowel quantity. The traditional short and long pairs include अ/आ, इ/ई, and उ/ऊ. The vocalic ऋ and ॠ, and the rare ऌ and ॡ, have their own scholarly descriptions and should not be pronounced as ordinary modern Hindi vowels.",
          "The diphthongs ए, ऐ, ओ, and औ are traditionally included in the vowel sequence. Their classification and phonetic realization should be learned from Sanskrit phonetics rather than assumed from English spelling.",
        ],
        bullets: [
          "क + ा → का (ā)",
          "क + ि → कि (i)",
          "क + ी → की (ī)",
          "क + ु → कु (u)",
          "क + ू → कू (ū)",
          "क + ृ → कृ (ṛ)",
          "क + ॄ → कॄ (ṝ; specialist form)",
          "क + ॢ → कॢ (ḷ; specialist form)",
          "क + ॣ → कॣ (ḹ; specialist form)",
          "क + े → के (e)",
          "क + ै → कै (ai)",
          "क + ो → को (o)",
          "क + ौ → कौ (au)",
        ],
      },
      numerals: {
        title: "Devanagari Numerals",
        resourceIds: ["SAN-R01", "SAN-R02"],
        paragraphs: [
          "Devanagari has its own digit characters: ० १ २ ३ ४ ५ ६ ७ ८ ९. They correspond to Western digits 0 through 9.",
          "Sanskrit publications may use Devanagari digits, Western digits, or other editorial conventions. Preserve the numeral style of the source when transcribing a text unless a conversion is specifically required.",
        ],
      },
      specialCharacters: {
        title: "Anusvāra, Anunāsika, Visarga, and Avagraha",
        resourceIds: ["SAN-R01", "SAN-R02", "SAN-R05"],
        paragraphs: [
          "Anusvāra (ं) and anunāsika, often written with candrabindu (ँ), are not interchangeable labels. Anusvāra represents a nasal element whose phonetic realization depends on context; candrabindu marks nasalization of the preceding vowel in relevant traditions.",
          "Visarga (ः) is a distinct post-vocalic sound, often described as a breath-like release. Sanskrit grammar and recitation traditions also discuss context-sensitive visarga realizations, so it should not be reduced to a punctuation mark.",
          "Avagraha (ऽ) is used in Sanskrit orthography, including to mark the elision of an initial अ in certain sandhi contexts. It is not a general apostrophe and should be interpreted according to the grammatical context.",
          "Virama (्) suppresses the inherent vowel and participates in conjunct formation. Danda (।) and double danda (॥) are traditional punctuation marks used to delimit phrases, verses, or textual units.",
          "Vedic recitation preserves pitch distinctions that are not normally represented in ordinary unaccented Sanskrit text. Commonly discussed accent categories include udātta, anudātta, and svarita, although notation and interpretation depend on the Vedic textual tradition.",
          "Devanagari encodes accent marks such as ॑ and ॒, alongside additional Vedic marks in other Unicode ranges. Vedic manuscripts and editions may also use specialized signs for nasalization, visarga, and chant notation.",
          "These marks carry recitational information, not decoration. Accurate use requires knowledge of the relevant śākhā and editorial convention. TypeIndian's basic transliteration workflow should not be treated as a complete Vedic chanting or critical-edition tool.",
        ],
      },

      examples: {
        title: "Common Sanskrit Words and Phrases",
        introduction: "Roman forms use IAST-style diacritics as learner references. They are not guaranteed to match casual keyboard input or the provider's suggestion order.",
        items: [
          { native: "संस्कृतम्", roman: "saṃskṛtam", meaning: "Sanskrit" },
          { native: "नमस्ते", roman: "namaste", meaning: "greetings" },
          { native: "धन्यवादः", roman: "dhanyavādaḥ", meaning: "thank you (one possible Sanskrit expression)" },
          { native: "विद्या", roman: "vidyā", meaning: "knowledge / learning" },
          { native: "गुरुः", roman: "guruḥ", meaning: "teacher" },
          { native: "शान्तिः", roman: "śāntiḥ", meaning: "peace" },
          { native: "सर्वे भवन्तु सुखिनः", roman: "sarve bhavantu sukhinaḥ", meaning: "May all be happy" },
        ],
      },
      typingGuide: {
        title: "Typing Sanskrit with Roman Letters",
        paragraphs: [
          "Type a Sanskrit word with Roman letters and choose the Devanagari suggestion that matches the intended form. This is transliteration, not translation.",
          "IAST is a scholarly transliteration convention that uses diacritics to distinguish Sanskrit sounds: ā, ī, ū, ṛ, ṝ, ḷ, ṅ, ñ, ṭ, ḍ, ṇ, ś, ṣ, and ṃ are examples. Casual phonetic typing often omits these marks and is therefore more ambiguous.",
          "For precise scholarly work, compare the generated text with the source edition and check sandhi, visarga, anusvāra, vowel length, conjuncts, and Vedic accents where applicable.",
          "TypeIndian uses its configured Google Input Tools provider for Sanskrit suggestions. Examples in this guide are instructional and do not guarantee a particular provider suggestion order or complete support for scholarly and Vedic notation.",
        ],
        examples: [
          { input: "namaste", output: "नमस्ते", explanation: "A common greeting." },
          { input: "sanskritam", output: "संस्कृतम्", explanation: "The language name; scholarly IAST is saṃskṛtam." },
          { input: "vidya", output: "विद्या", explanation: "Knowledge or learning." },
          { input: "shantih", output: "शान्तिः", explanation: "Peace; IAST distinguishes ś and the final visarga." },
        ],
        notes: [
          "IAST is not the same as informal Roman keyboard input.",
          "Use context to choose among ambiguous suggestions.",
          "Check vowel length and retroflex versus dental consonants.",
          "Review sandhi and visarga in complete phrases.",
          "Do not assume basic transliteration preserves Vedic accent marks.",
        ],
      },
      commonMistakes: {
        title: "Common Sanskrit Reading and Typing Mistakes",
        introduction: "Sanskrit needs attention to phonetic contrasts, grammatical spelling, and text-specific conventions.",
        items: [
          {
            incorrect: "Treating श, ष, and स as the same sound",
            correct: "Keep ś, ṣ, and s distinct when learning Sanskrit pronunciation and transliteration.",
            explanation: "They represent separate sibilant consonants in the traditional Sanskrit inventory.",
          },
          {
            incorrect: "Ignoring vowel length",
            correct: "Distinguish short and long vowels such as अ/आ, इ/ई, and उ/ऊ.",
            explanation: "Vowel quantity is meaningful in Sanskrit pronunciation and scholarly transliteration.",
          },
          {
            incorrect: "Treating anusvāra and candrabindu as identical",
            correct: "Learn the separate conventions for anusvāra and vowel nasalization.",
            explanation: "The signs have different phonetic and orthographic functions.",
          },
          {
            incorrect: "Treating visarga as ordinary punctuation",
            correct: "Read visarga as a Sanskrit sound sign and apply the relevant grammatical or recitational convention.",
            explanation: "Visarga has phonetic and grammatical significance.",
          },
          {
            incorrect: "Assuming conjuncts are independent basic consonants",
            correct: "Understand क्ष, त्र, ज्ञ, and श्र as consonant sequences represented by conjunct forms.",
            explanation: "Their glyphs are shaped forms created by Devanagari orthography.",
          },
          {
            incorrect: "Using casual Roman spellings as if they were IAST",
            correct: "Use scholarly diacritics when precision matters and check the source text.",
            explanation: "Informal phonetic input does not consistently distinguish all Sanskrit contrasts.",
          },
        ],
      },
    },

    cta: {
      title: "Ready to start typing in Sanskrit?",
      description:
        "Type Sanskrit words with Roman letters and choose the matching Devanagari suggestion in the TypeIndian editor.",
      button: "Open Sanskrit Typing Tool →",
    },
    faq: LEARN_SANSKRIT_FAQ,
  },

  alphabet: sanskritAlphabet,

  labels: {
    alphabet: {
      title: "Learn Sanskrit Letters (Devanagari)",
      description:
        "Explore Sanskrit vowels, consonants, vowel signs, conjuncts, Vedic marks, and Devanagari numerals. Select a character to insert it into the typing editor.",
      vowels: "Independent Vowels (स्वराः)",
      consonants: "Primary Consonants (व्यञ्जनानि)",
      extensions: "Conjuncts and Special Forms",
      vowelSigns: "Dependent Vowel Signs (मात्राः)",
      symbols: "Anusvāra, Visarga, Avagraha, and Vedic Marks",
      numerals: "Devanagari Numerals",
    },
  },

  faq: SANSKRIT_FAQ,

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
