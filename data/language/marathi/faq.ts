import { FAQItem } from "@/types/faq";

export const MARATHI_FAQ: FAQItem[] = [
  {
    question: "How does Marathi typing using English letters work?",
    answer:
      "You type Marathi words using Roman letters, and the transliteration tool suggests Devanagari spellings. For example, typing a common form such as namaskar can suggest नमस्कार. This changes the writing system, not the language or meaning.",
  },
  {
    question: "Which script does the Marathi typing tool use?",
    answer:
      "The tool writes Marathi in Devanagari, specifically the modern Balbodh form used for standard Marathi.",
  },
  {
    question: "Do I need to learn the Marathi keyboard layout?",
    answer:
      "No. You can enter Roman spellings and choose a Devanagari suggestion. Learning the script still helps you proofread and edit the result.",
  },
  {
    question: "Is the Marathi typing tool free?",
    answer:
      "Yes. TypeIndian is currently free to use and does not require an account or subscription. Availability may still be affected by technical constraints or third-party provider limits.",
  },
  {
    question: "Can I paste English text and convert it to Marathi?",
    answer:
      "The tool transliterates Romanized Marathi; it does not translate English sentences into Marathi. For example, a phonetic Marathi input such as namaskar can produce नमस्कार, but an English sentence will not be translated by meaning.",
  },
  {
    question: "Is this a Marathi translation tool?",
    answer:
      "No. Transliteration changes the script used to write the same words. Translation changes the language and meaning. TypeIndian's Marathi typing tool is for transliteration, not general English-to-Marathi translation.",
  },
  {
    question: "How accurate is English-letter-to-Marathi typing?",
    answer:
      "Roman input can be ambiguous, and the same spelling may produce different suggestions depending on context. Review the alternatives and choose the Marathi spelling that matches the word you intend.",
  },
  {
    question: "Does TypeIndian save my Marathi text?",
    answer:
      "The typing editor does not save your text as a cloud document. When you request transliteration suggestions, the relevant input is sent to Google Input Tools for processing. Text you add to the Session Board is stored in your browser's local storage on that device. Vercel Analytics may collect website usage information. See the Privacy Policy for details, and avoid submitting sensitive or confidential text for transliteration.",
  },
  {
    question: "Can I use this Marathi typing tool for professional work?",
    answer:
      "You can use the editor to prepare drafts, messages, and other Marathi text. Proofread the result, especially for names, formal documents, publication, and other important uses.",
  },
  {
    question: "Can I type long paragraphs or documents in Marathi?",
    answer:
      "You can use the editor for longer passages, but transliteration requests are sent to a third-party provider and may be affected by provider or technical limits. Work in smaller sections when needed and avoid submitting sensitive or confidential text.",
  },
];

export const LEARN_MARATHI_FAQ: FAQItem[] = [
  {
    question: "What script is used to write Marathi?",
    answer:
      "Modern standard Marathi is written in Balbodh, the Marathi form of the Devanagari script. Modi is a historical script also used for Marathi, especially in older administrative records.",
  },
  {
    question: "Is Marathi written in the same script as Hindi?",
    answer:
      "Both modern standard Marathi and Hindi use Devanagari, but they are different languages with their own pronunciation, grammar, vocabulary, and writing conventions. Marathi includes the distinctive letter ळ.",
  },
  {
    question: "How many vowels are there in Marathi?",
    answer:
      "The count depends on whether you mean the core vowel system, traditional school charts, or extended letters used in loanwords and Sanskrit-derived vocabulary. A useful modern learner chart distinguishes core independent vowels from extended forms such as ॲ and ऑ, and from dependent vowel signs.",
  },
  {
    question: "How many consonants are there in Marathi?",
    answer:
      "There is no single count that fits every linguistic and teaching convention. Traditional charts include the main Devanagari consonant series and Marathi's distinctive ळ; phonological inventories may treat some chart letters as marginal or context-dependent.",
  },
  {
    question: "What is special about the letter ळ?",
    answer:
      "ळ represents a retroflex lateral sound and is important in Marathi spelling. It is different from ल, so replacing one with the other can change a word.",
  },
  {
    question: "What are Marathi vowel signs or matras?",
    answer:
      "Matras are dependent vowel signs attached to consonants or consonant clusters. For example, क becomes का with ा and कि with ि. The inherent vowel अ has no separate matra.",
  },
  {
    question: "What are ॲ and ऑ used for?",
    answer:
      "ॲ and ऑ represent additional vowel qualities used in some Marathi words, especially loanwords. Their dependent signs are ॅ and ॉ.",
  },
  {
    question: "Are क्ष and ज्ञ separate Marathi letters?",
    answer:
      "They are familiar conjunct forms made from consonant sequences. They may look like single joined shapes, but they are not additional independent consonants in the same way as क or ळ.",
  },
  {
    question: "What is the difference between Balbodh and Modi?",
    answer:
      "Balbodh is the modern standard Devanagari form used for Marathi today. Modi is a historical script used extensively for Marathi, including in administrative documents; it is not the script used by this typing tool.",
  },
  {
    question: "Does Marathi use Devanagari numerals?",
    answer:
      "Devanagari includes native digits from ० to ९. Western digits (0–9) are also widely used in modern Marathi text.",
  },
  {
    question: "Is Marathi transliteration the same as translation?",
    answer:
      "No. Transliteration changes the writing system while keeping the same words, such as Romanized Marathi namaskar to नमस्कार. Translation changes the language and meaning.",
  },
];
