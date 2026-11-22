import { FAQItem } from "@/types/faq";

export const TELUGU_FAQ: FAQItem[] = [
  {
    question: "What is Telugu typing using English letters?",
    answer:
      "Telugu typing using English letters means entering Telugu words with Roman letters and selecting Telugu-script suggestions. For example, a phonetic input such as 'namaskaaram' can be used to find 'నమస్కారం'. The exact suggestion depends on the transliteration provider.",
  },
  {
    question: "Which script does the Telugu typing tool use?",
    answer:
      "TypeIndian uses the Telugu script (తెలుగు), a left-to-right Brahmic-derived abugida used to write Telugu.",
  },
  {
    question: "Do I need to learn the Telugu keyboard layout?",
    answer:
      "No. Type Telugu words phonetically with Roman letters and choose the matching Telugu-script suggestion. You can also insert Telugu characters from the alphabet panel.",
  },
  {
    question: "Is the Telugu typing tool free?",
    answer:
      "Yes. TypeIndian is currently free to use and does not require an account or subscription. Availability may still be affected by technical constraints or limits imposed by third-party providers.",
  },
  {
    question: "Can I paste English text and convert it to Telugu?",
    answer:
      "You can paste Roman-letter text intended as phonetic Telugu input. This is transliteration, not general English-to-Telugu translation.",
  },
  {
    question: "Is this a Telugu translation tool?",
    answer:
      "No. Transliteration changes the writing system while keeping the intended language; translation changes the language and meaning. TypeIndian's Telugu typing tool transliterates phonetic Roman input and does not translate arbitrary English sentences.",
  },
  {
    question: "How accurate is English-to-Telugu transliteration?",
    answer:
      "Roman input can be ambiguous because informal spellings are not standardized and several Telugu sounds may be typed in more than one way. Review the available suggestions using the word and sentence context rather than assuming one spelling always produces one result.",
  },
  {
    question: "Does TypeIndian save my Telugu text?",
    answer:
      "The typing editor does not save your text as a cloud document. Transliteration input is sent to the configured Google Input Tools provider for suggestions. Text added to the Session Board is stored in your browser's local storage on that device, and Vercel Analytics may collect website usage information. See the Privacy Policy for details and avoid submitting sensitive or confidential text.",
  },
  {
    question: "Can I use this Telugu typing tool for professional or commercial work?",
    answer:
      "You can use the Telugu text you create for personal, educational, business, and commercial writing. Review important names, numbers, and formal documents before publishing or sending them.",
  },
  {
    question: "Can I type long paragraphs or documents in Telugu?",
    answer:
      "Yes. You can type longer passages in the editor, but transliteration requests may be subject to provider or technical limits. For large passages, work in smaller sections and proofread the final text.",
  },
];

export const LEARN_TELUGU_FAQ: FAQItem[] = [
  {
    question: "What script is used to write Telugu?",
    answer:
      "Telugu is written in the Telugu script, a left-to-right abugida. Its consonants normally carry an inherent vowel that can be changed with a dependent vowel sign or removed with the virama.",
  },
  {
    question: "How many vowels are there in Telugu?",
    answer:
      "A commonly described Telugu vowel inventory has 14 independent vowel letters, including ఌ, which is rare in everyday Telugu. Extended Sanskrit vocalic forms such as ౠ and ౡ should be taught separately rather than counted as ordinary modern vowels.",
  },
  {
    question: "How many consonants are there in Telugu?",
    answer:
      "A traditional Telugu alphabet chart commonly presents 35 consonants: 25 arranged in five varga groups and 10 additional consonants. Some letters have limited, historical, or context-specific use, so a chart count is not the same as a count of everyday speech sounds.",
  },
  {
    question: "What is the virama in Telugu?",
    answer:
      "The Telugu virama (్), also called pollu or halant, suppresses the inherent vowel of a consonant. It is used in consonant-final forms and consonant clusters.",
  },
  {
    question: "What are Telugu vowel signs (gunింతాలు / matras)?",
    answer:
      "Dependent vowel signs attach to a consonant and replace its inherent vowel. For example, క plus ా forms కా, and క plus ి forms కి.",
  },
  {
    question: "Does Telugu have conjunct letters?",
    answer:
      "Telugu consonant clusters are encoded as consonant-plus-virama sequences. Fonts and shaping engines may display the second consonant in a subscripted or transformed form. Familiar forms such as క్ష and జ్ఞ are conjunct sequences, not separate basic consonant letters.",
  },
  {
    question: "Why does Telugu script look rounded?",
    answer:
      "Telugu has distinctive rounded letterforms and a characteristic headstroke called talakattu on many consonants. Its script shares historical ancestry with Kannada, while maintaining its own letter shapes and orthographic conventions.",
  },
  {
    question: "Where is Telugu spoken?",
    answer:
      "Telugu is spoken primarily in Andhra Pradesh and Telangana, as well as by communities elsewhere in India and around the world. It is one of the languages listed in the Eighth Schedule of the Constitution of India.",
  },
  {
    question: "Are Telugu numerals still used?",
    answer:
      "Telugu has native digits ౦ through ౯. Western digits are also widely used in contemporary digital writing, so preserve the numeral style required by the context.",
  },
];
