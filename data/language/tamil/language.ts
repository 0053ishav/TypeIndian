import type { Language } from "@/types/language";

import { tamilAlphabet } from "./alphabet";
import { tamilResearch } from "./research";
import { LEARN_TAMIL_FAQ, TAMIL_FAQ } from "./faq";

export const tamil: Language = {
  id: "tamil",
  slug: "tamil",
  name: "Tamil",
  nativeName: "தமிழ்",
  locale: "ta-IN",
  direction: "ltr",
  script: "Tamil",

  transliteration: {
    engine: "google",
    languageCode: "ta",
  },

  typing: {
    title: "Tamil Typing Tool",
    subtitle: "Type in English and convert to தமிழ்",
    intro:
      "Write Tamil naturally using Roman letters with TypeIndian. Type a word phonetically, then choose the Tamil-script suggestion that matches your meaning. No keyboard installation or login is required.",
    learnLink: {
      href: "/learn/tamil",
      label: "Learn Tamil Typing (Tamil Script)",
      description:
        "Understand Tamil letters, pronunciation, script structure, and phonetic typing.",
    },
    seo: {
      title: "Tamil Typing Tool (English to Tamil)",
      description:
        "Free Roman-to-Tamil typing tool. Type Tamil words with English letters and choose Tamil-script suggestions in your browser.",
      keywords: [
        "English to Tamil typing",
        "Tamil typing",
        "Tamil typing online",
        "Tamil transliteration",
        "phonetic Tamil typing",
        "Tamil keyboard",
        "Roman to Tamil",
        "Tamil typing tool",
        "TypeIndian Tamil",
      ],
      openGraph: {
        title: "Tamil Typing Tool - TypeIndian",
        description:
          "Type Tamil words with Roman letters and choose Tamil-script suggestions.",
        locale: "ta_IN",
      },
      twitter: {
        title: "Tamil Typing Tool - TypeIndian",
        description: "Free browser-based Roman-to-Tamil typing.",
      },
    },
  },

  learn: {
    meta: {
      title: "Learn Tamil Typing",
      description:
        "Learn Tamil typing with a beginner guide to the Tamil script, vowels, consonants, uyirmei combinations, pulli, Grantha letters, numerals, and phonetic input.",
      cta: "Start Typing in Tamil →",
    },
    seo: {
      title: "Learn Tamil Typing – Tamil Script, Alphabet and Beginner Guide",
      description:
        "Learn the Tamil alphabet and writing system, understand uyir, mei, uyirmei, vowel signs, pulli, aytham, Grantha letters, numerals, and Roman-letter typing.",
      keywords: [
        "learn Tamil typing",
        "Tamil alphabet",
        "Tamil script",
        "Tamil vowels",
        "Tamil consonants",
        "uyirmei letters",
        "Tamil uyir mei",
        "Tamil pulli",
        "Tamil Grantha letters",
        "Tamil numerals",
        "English to Tamil typing guide",
        "TypeIndian Tamil",
      ],
      openGraph: {
        title: "Learn Tamil Typing - Beginner Guide | TypeIndian",
        description:
          "A researched beginner guide to Tamil script, writing conventions, and phonetic typing.",
        locale: "ta_IN",
      },
      twitter: {
        title: "Learn Tamil Typing - TypeIndian",
        description: "Learn Tamil script, alphabet, and Roman-letter typing.",
      },
    },

    about: {
      title: "About Tamil Language",
      paragraphs: [
        "Tamil (தமிழ்) is a Dravidian language with a long recorded literary history and a rich classical and contemporary tradition. It is recognized by the Government of India as a Classical Language.",
        "Tamil is spoken in Tamil Nadu and Puducherry, as well as in Sri Lanka, Singapore, Malaysia, and communities around the world.",
        "Tamil is diglossic: formal written Tamil and regional spoken varieties can differ in vocabulary, grammar, and pronunciation. Learning to type therefore also involves choosing the register appropriate to the audience and context.",
      ],
    },

    script: {
      title: "The Tamil Writing System",
      paragraphs: [
        "Tamil is written in the Tamil script, a left-to-right Brahmic-derived abugida. Its Unicode block is U+0B80–U+0BFF. The standard alphabet is commonly taught through 12 vowels, 18 native consonants, and one special letter called aytham.",
        "The 12 vowels are uyir letters, the 18 consonants are mei letters, and their combinations form 216 uyirmei letters. A consonant carries an inherent vowel unless the pulli (்) suppresses it.",
        "Tamil has fewer consonant letters than many other Indic scripts and does not have a separate native aspirated consonant series. Pronunciation of some consonants changes according to phonetic context. Grantha letters supplement the core set for certain borrowed sounds.",
      ],
      bullets: [
        "Written from left to right",
        "Uses the Tamil Unicode block U+0B80–U+0BFF",
        "12 independent vowels (uyir)",
        "18 native consonants (mei)",
        "216 consonant-vowel combinations (uyirmei)",
        "Uses pulli (்) to suppress the inherent vowel",
        "Uses Grantha letters for some borrowed sounds",
      ],
    },

    alphabet: {
      vowels: {
        title: "Vowels (உயிரெழுத்துகள்)",
        description:
          "Tamil has 12 independent vowels, traditionally called uyir letters. They are used independently and combine with consonants through dependent vowel signs.",
        resourceIds: ["TAM-R01", "TAM-R02"],
      },
      consonants: {
        title: "Native Consonants (மெய்யெழுத்துகள்)",
        description:
          "The standard Tamil alphabet has 18 native consonants. Their pronunciation can vary by phonetic context; Tamil does not use a separate native aspirated consonant series.",
        resourceIds: ["TAM-R02", "TAM-R03"],
      },
      extensions: {
        title: "Aytham, Grantha Letters, and Conventional Ligatures",
        description:
          "Aytham, Grantha letters, and a small number of conventional ligatures supplement the core Tamil alphabet. They should not be confused with the 18 native consonants.",
        resourceIds: ["TAM-R01", "TAM-R02", "TAM-R04"],
      },
      vowelSigns: {
        title: "Dependent Vowel Signs (உயிர்க்குறிகள்)",
        description:
          "Dependent vowel signs form uyirmei combinations. Several signs render to the left of the consonant or as multi-part glyphs, while their logical Unicode order remains after the base consonant.",
        resourceIds: ["TAM-R01", "TAM-R02"],
      },
      symbols: {
        title: "Pulli and Aytham",
        description:
          "Pulli suppresses the inherent vowel of a consonant. Aytham (ஃ) is a distinct Tamil letter with its own history and usage.",
        resourceIds: ["TAM-R01", "TAM-R02", "TAM-R04"],
      },
      numerals: {
        title: "Tamil Numerals",
        description:
          "Tamil has native decimal digits ௦–௯. Western digits are also widely used in modern digital writing.",
        resourceIds: ["TAM-R01", "TAM-R06"],
      },
    },

    curriculum: {
      research: tamilResearch,
      history: {
        title: "Tamil Language and Its Literary Tradition",
        resourceIds: ["TAM-R05", "TAM-R02"],
        paragraphs: [
          "Tamil belongs to the Dravidian language family and has a long recorded literary tradition. It is spoken in India and by communities in Sri Lanka, Singapore, Malaysia, and elsewhere.",
          "The Government of India recognizes Tamil as a Classical Language, citing the antiquity of its early texts and recorded history and its substantial ancient literary corpus.",
          "Tamil is diglossic: formal written and literary Tamil differs from colloquial spoken varieties. A learner should understand which register a typing example represents rather than treating spoken and formal written Tamil as interchangeable.",
        ],
      },
      writingSystem: {
        title: "How the Tamil Script Works",
        resourceIds: ["TAM-R01", "TAM-R02", "TAM-R04"],
        paragraphs: [
          "Tamil is an abugida. A consonant normally carries an inherent vowel, and a dependent vowel sign changes that vowel. The pulli (்), encoded as U+0BCD, suppresses the inherent vowel and marks a pure consonant.",
          "The Tamil Unicode block is U+0B80–U+0BFF. Independent vowels and dependent vowel signs are distinct encoded characters. Unicode specifies atomic encoding for vowel letters such as ஆ; do not replace an independent vowel with a visually decomposed sequence.",
          "Tamil generally writes consonant clusters with a visible pulli rather than the extensive conjunct ligatures found in several other Indic scripts. A small number of conventional ligatures, notably க்ஷ and ஸ்ரீ, are recognized.",
          "Tamil vowel signs are stored after their base consonant in logical Unicode order, even when glyphs render to the left or on both sides of the consonant. The signs ெ, ே, and ை are pre-base in visual rendering; composite forms such as ொ, ோ, and ௌ involve multiple glyph components.",
          "The script is written from left to right and has no uppercase/lowercase distinction.",
        ],
        bullets: [
          "Independent vowel: ஆ",
          "Consonant with inherent vowel: க",
          "Consonant with pulli: க்",
          "Consonant plus dependent sign: க + ா → கா",
          "Left-rendered vowel: க + ெ → கெ",
          "Conventional ligatures: க்ஷ, ஸ்ரீ",
          "Unicode block: U+0B80–U+0BFF",
        ],
      },
      consonantClassification: {
        title: "Tamil Consonants and Pronunciation",
        resourceIds: ["TAM-R02", "TAM-R03"],
        paragraphs: [
          "The standard Tamil alphabet has 18 native consonant letters. Traditional grammar groups them into vallinam (hard), mellinam (nasal/soft), and idayinam (medium) classes.",
          "Unlike Sanskrit and several other Indic scripts, Tamil does not have separate native letters for aspirated consonants such as kha, gha, or tha. A Tamil consonant can have different phonetic realizations depending on its position and neighbouring sounds.",
          "The 18 native consonants are க ங ச ஞ ட ண த ந ப ம ய ர ல வ ழ ள ற ன. The distinctive letters ழ, ள, ற, and ன should not be collapsed into a generic English l, r, or n sound.",
          "Grantha letters such as ஜ, ஶ, ஷ, ஸ, and ஹ supplement the native consonant set, especially in Sanskrit-derived vocabulary and other borrowed words. They are not part of the 18-letter native consonant inventory.",
        ],
        bullets: [
          "Vallinam: க ச ட த ப ற",
          "Mellinam: ங ஞ ண ந ம ன",
          "Idayinam: ய ர ல வ ழ ள",
          "Grantha extensions: ஜ ஶ ஷ ஸ ஹ",
        ],
      },
      vowelSigns: {
        title: "Uyir, Mei, and Uyirmei",
        resourceIds: ["TAM-R01", "TAM-R02"],
        paragraphs: [
          "Tamil teaching traditionally distinguishes uyir (vowels), mei (consonants), and uyirmei (consonant-vowel combinations). The standard school inventory is 12 uyir letters, 18 mei letters, and 216 uyirmei combinations.",
          "A dependent vowel sign attaches to a consonant to represent a vowel other than its inherent vowel. For example, க + ா forms கா, க + ி forms கி, and க + ீ forms கீ.",
          "The signs ெ, ே, and ை render to the left of their consonant. The forms ொ, ோ, and ௌ are composite vowel signs whose glyph components can appear on both sides of the consonant. Store the normal logical character sequence and let the shaping engine position the glyphs.",
          "Independent vowels are not interchangeable with dependent vowel signs. Unicode encodes independent Tamil vowel letters atomically, even when their visual forms might appear decomposable.",
        ],
        bullets: [
          "க + ா → கா",
          "க + ி → கி",
          "க + ீ → கீ",
          "க + ு → கு",
          "க + ூ → கூ",
          "க + ெ → கெ",
          "க + ே → கே",
          "க + ை → கை",
          "க + ொ → கொ",
          "க + ோ → கோ",
          "க + ௌ → கௌ",
        ],
      },
      numerals: {
        title: "Tamil Numerals",
        resourceIds: ["TAM-R01", "TAM-R06"],
        paragraphs: [
          "Tamil decimal digits are ௦ ௧ ௨ ௩ ௪ ௫ ௬ ௭ ௮ ௯, corresponding to Western digits 0 through 9.",
          "Western digits are widely used in contemporary digital writing. Preserve the numeral style chosen by the user unless conversion is explicitly requested.",
        ],
      },
      specialCharacters: {
        title: "Pulli, Aytham, and Grantha Characters",
        resourceIds: ["TAM-R01", "TAM-R02", "TAM-R04"],
        paragraphs: [
          "Pulli (்), also called virama, removes the inherent vowel from a consonant. It is visible in forms such as க் and is central to writing consonant-final syllables and clusters.",
          "Aytham (ஃ), encoded at U+0B83, is a distinct Tamil letter. Although Unicode's formal character name refers to visarga, its Tamil name and functions are specific; it should not be taught as simply the Sanskrit visarga.",
          "Grantha letters ஜ, ஶ, ஷ, ஸ, and ஹ are used for sounds in Sanskrit-derived words and other borrowed vocabulary. Tamil speakers also use conventions involving aytham to extend representation of non-native sounds.",
          "Tamil normally avoids the extensive conjunct system found in some related scripts. Conventional ligatures such as க்ஷ and ஸ்ரீ are exceptions, while most clusters remain visibly marked with pulli.",
        ],
      },
      examples: {
        title: "Everyday Tamil Words and Phrases",
        introduction: "These examples use common written Tamil. Roman forms are learner-friendly cues rather than a single formal transliteration standard.",
        items: [
          { native: "தமிழ்", roman: "tamiḻ", meaning: "Tamil" },
          { native: "வணக்கம்", roman: "vaṇakkam", meaning: "hello / greetings" },
          { native: "நன்றி", roman: "naṉṟi", meaning: "thank you" },
          { native: "தண்ணீர்", roman: "taṇṇīr", meaning: "water" },
          { native: "வீடு", roman: "vīṭu", meaning: "house / home" },
          { native: "நீங்கள் எப்படி இருக்கிறீர்கள்?", roman: "nīṅkaḷ eppaṭi irukkiṟīrkaḷ?", meaning: "How are you? (polite)" },
          { native: "நான்", roman: "nāṉ", meaning: "I" },
        ],
      },
      typingGuide: {
        title: "Typing Tamil with Roman Letters",
        paragraphs: [
          "Type Tamil words with Roman letters and choose the Tamil-script suggestion that matches the intended word. This is transliteration, not translation.",
          "Tamil Roman input is not one-to-one. Several consonants have context-dependent pronunciations, and casual Roman spellings may not preserve distinctions such as ழ, ள, ற, and ர. Review suggestions using word meaning and sentence context.",
          "Tamil has formal written and colloquial spoken registers. The right spelling or phrase may depend on whether you are writing a formal message, conversational text, literature, or a regional spoken form.",
          "TypeIndian uses its configured Google Input Tools provider for Tamil suggestions. The examples here are illustrative and do not guarantee the provider's exact suggestion order or support for every specialist spelling.",
        ],
        examples: [
          { input: "vanakkam", output: "வணக்கம்", explanation: "A common greeting." },
          { input: "nandri", output: "நன்றி", explanation: "Thank you." },
          { input: "tamil", output: "தமிழ்", explanation: "The name of the language." },
          { input: "veedu", output: "வீடு", explanation: "House or home." },
        ],
        notes: [
          "Choose suggestions using meaning and sentence context.",
          "Pay attention to ழ, ள, ற, and ர; they represent distinct Tamil letters.",
          "Choose formal or colloquial wording for the audience.",
          "The tool transliterates Tamil; it does not translate English sentences.",
        ],
      },
      commonMistakes: {
        title: "Common Tamil Writing and Typing Mistakes",
        introduction: "These points focus on Tamil-specific letter distinctions, vowel signs, pronunciation, and register.",
        items: [
          {
            incorrect: "Treating ழ, ள, ல, ற, and ர as interchangeable",
            correct: "Learn each letter and its distinct pronunciation and spelling role.",
            explanation: "Roman input often obscures distinctions that matter in Tamil words.",
          },
          {
            incorrect: "Assuming Tamil has the same aspirated consonant rows as Sanskrit or Hindi",
            correct: "Learn the 18 native Tamil consonants and their context-dependent pronunciations.",
            explanation: "Tamil does not have a separate native aspirated consonant series.",
          },
          {
            incorrect: "Treating every consonant cluster as a conjunct ligature",
            correct: "Use pulli to mark consonants without a following vowel and learn the limited conventional ligatures.",
            explanation: "Most Tamil clusters are written with visible pulli rather than extensive conjunct forms.",
          },
          {
            incorrect: "Confusing aytham with ordinary Sanskrit visarga",
            correct: "Learn ஃ as the Tamil aytham with its own historical and modern uses.",
            explanation: "The Unicode character name is not a complete description of its Tamil function.",
          },
          {
            incorrect: "Reordering vowel signs manually to match their visual position",
            correct: "Store dependent signs after the consonant in logical Unicode order.",
            explanation: "The shaping engine renders pre-base and composite vowel glyphs in the correct visual positions.",
          },
          {
            incorrect: "Using spoken colloquial forms in every formal written context",
            correct: "Choose the register appropriate to the audience and purpose.",
            explanation: "Tamil is diglossic and written conventions differ from many spoken varieties.",
          },
        ],
      },
    },

    cta: {
      title: "Ready to start typing in Tamil?",
      description:
        "Type Tamil words with Roman letters and select the matching Tamil-script suggestion in the TypeIndian editor.",
      button: "Open Tamil Typing Tool →",
    },
    faq: LEARN_TAMIL_FAQ,
  },

  alphabet: tamilAlphabet,

  labels: {
    alphabet: {
      title: "Learn Tamil Letters",
      description:
        "Explore Tamil vowels, native consonants, vowel signs, Grantha letters, pulli, aytham, and native numerals. Select a character to insert it into the typing editor.",
      vowels: "Vowels (உயிரெழுத்துகள்)",
      consonants: "Native Consonants (மெய்யெழுத்துகள்)",
      extensions: "Aytham, Grantha Letters, and Conventional Ligatures",
      vowelSigns: "Dependent Vowel Signs (உயிர்க்குறிகள்)",
      symbols: "Pulli and Aytham",
      numerals: "Tamil Numerals",
    },
  },

  faq: TAMIL_FAQ,

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
