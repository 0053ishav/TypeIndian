import type { FAQItem } from "@/types/faq";

export const KANNADA_FAQ: FAQItem[] = [
  {
    question: "How does Kannada typing using English letters work?",
    answer:
      "Type Kannada words with Roman letters and choose the Kannada-script suggestion that matches your intended word. For example, a phonetic input such as namaskara may suggest ನಮಸ್ಕಾರ. This is transliteration, not translation.",
  },
  {
    question: "Which script does the Kannada typing tool use?",
    answer:
      "TypeIndian writes Kannada in the Kannada script, a left-to-right Brahmic abugida encoded in the Unicode Kannada block.",
  },
  {
    question: "Do I need to learn the Kannada keyboard layout?",
    answer:
      "No. You can type Kannada words using Roman letters and select a script suggestion. Learning to recognize Kannada letters still helps you proofread and edit the result.",
  },
  {
    question: "Is the Kannada typing tool free?",
    answer:
      "Yes. TypeIndian is currently free to use and does not require an account or subscription. Availability may still be affected by technical constraints or third-party provider limits.",
  },
  {
    question: "Can I paste English text and convert it to Kannada?",
    answer:
      "No. The tool transliterates Romanized Kannada; it does not translate English sentences into Kannada. Enter Kannada words written phonetically in Roman letters, rather than English prose, and review the suggestions.",
  },
  {
    question: "Is this a Kannada translation tool?",
    answer:
      "No. Transliteration changes the writing system used for the same words. Translation changes the language and meaning. TypeIndian's Kannada typing tool is for transliteration, not general English-to-Kannada translation.",
  },
  {
    question: "How accurate is English-letter-to-Kannada typing?",
    answer:
      "Roman input can be ambiguous, and spellings or pronunciations may vary. Suggestions help you choose the word you mean, but proofread the final Kannada text, especially names and formal writing.",
  },
  {
    question: "Does TypeIndian save my Kannada text?",
    answer:
      "The typing editor does not save your text as a cloud document. When you request transliteration suggestions, the relevant input is sent to Google Input Tools for processing. Text you add to the Session Board is stored in your browser's local storage on that device. Vercel Analytics may collect website usage information. See the Privacy Policy for details, and avoid submitting sensitive or confidential text for transliteration.",
  },
  {
    question: "Can I use this Kannada typing tool for professional work?",
    answer:
      "You can use the editor to prepare drafts, messages, and other Kannada text. Proofread the result, especially for names, official documents, publication, and other important uses.",
  },
  {
    question: "Can I type long paragraphs or documents in Kannada?",
    answer:
      "You can use the editor for longer passages, but transliteration requests are sent to a third-party provider and may be affected by provider or technical limits. Work in smaller sections when needed and avoid submitting sensitive or confidential text.",
  },
];

export const LEARN_KANNADA_FAQ: FAQItem[] = [
  {
    question: "What script is used to write Kannada?",
    answer:
      "Kannada is written in the Kannada script, a Brahmic abugida used primarily for Kannada and also for languages such as Tulu. Its Unicode block is U+0C80–U+0CFF.",
  },
  {
    question: "How many vowels are in the modern Kannada alphabet?",
    answer:
      "A commonly used modern alphabet chart lists 13 independent vowels: ಅ, ಆ, ಇ, ಈ, ಉ, ಊ, ಋ, ಎ, ಏ, ಐ, ಒ, ಓ, and ಔ. Historical and Sanskrit-related characters are treated separately.",
  },
  {
    question: "How many consonants are in Kannada?",
    answer:
      "A modern Kannada alphabet chart commonly lists 34 consonants: 25 grouped consonants and 9 ungrouped consonants. This is an orthographic chart count, not a count of every distinct spoken sound.",
  },
  {
    question: "What are Kannada vowel signs (ಮಾತ್ರೆಗಳು)?",
    answer:
      "Vowel signs are dependent marks attached to consonants to represent a vowel other than the inherent ಅ. For example, ಕ + ಾ forms ಕಾ, and ಕ + ಿ forms ಕಿ.",
  },
  {
    question: "What is the virama in Kannada?",
    answer:
      "The virama (್), also called halant, suppresses the inherent vowel of a consonant. It is used in consonant clusters and conjunct forms.",
  },
  {
    question: "Are ಕ್ಷ and ಜ್ಞ separate Kannada letters?",
    answer:
      "No. ಕ್ಷ and ಜ್ಞ are familiar conjunct forms made from consonant sequences involving the virama. They are not separate basic consonant code points.",
  },
  {
    question: "Why do Kannada letters look rounded?",
    answer:
      "Kannada letterforms developed through historical writing practices and manuscript traditions. The popular palm-leaf explanation is a simplified account; script shape evolved over time and should not be reduced to a single cause.",
  },
  {
    question: "Is Kannada written from left to right?",
    answer:
      "Yes. Kannada is written from left to right. Consonants normally carry an inherent vowel unless a dependent vowel sign or virama changes it.",
  },
  {
    question: "Does Kannada have its own numerals?",
    answer:
      "Yes. Kannada has native digits ೦ ೧ ೨ ೩ ೪ ೫ ೬ ೭ ೮ ೯, although Western digits 0–9 are also widely used in modern digital text.",
  },
  {
    question: "Where is Kannada spoken?",
    answer:
      "Kannada is spoken primarily in Karnataka and by Kannada-speaking communities across India and around the world.",
  },
  {
    question: "Is Kannada an official language of Karnataka?",
    answer:
      "Yes. The Karnataka Official Language Act, 1963 adopts Kannada as the official language of the State. The Act also provides for continued use of English for specified official purposes.",
  },
  {
    question: "Is Kannada a Classical Language of India?",
    answer:
      "Yes. Kannada was recognized by the Government of India as a Classical Language in 2008.",
  },
  {
    question: "Is Kannada transliteration the same as translation?",
    answer:
      "No. Transliteration represents Kannada words in Kannada script from Roman input. Translation changes the language and meaning. TypeIndian's Kannada typing tool is for transliteration.",
  },
];
