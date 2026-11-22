import { FAQItem } from "@/types/faq";

export const MALAYALAM_FAQ: FAQItem[] = [
  {
    question: "How does Malayalam typing using English letters work?",
    answer:
      "Type Malayalam words with Roman letters and choose the Malayalam-script suggestion that matches your intended word. For example, a phonetic input such as namaskaram may suggest നമസ്കാരം. This is transliteration, not translation.",
  },
  {
    question: "Which script does the Malayalam typing tool use?",
    answer:
      "TypeIndian writes Malayalam in the Malayalam script, a left-to-right Brahmic abugida encoded in the Unicode Malayalam block.",
  },
  {
    question: "Do I need to learn the Malayalam keyboard layout?",
    answer:
      "No. You can type Malayalam words using Roman letters and select a script suggestion. Learning to recognize Malayalam letters still helps you proofread and edit the result.",
  },
  {
    question: "Is the Malayalam typing tool free?",
    answer:
      "Yes. TypeIndian is currently free to use and does not require an account or subscription. Availability may still be affected by technical constraints or third-party provider limits.",
  },
  {
    question: "Can I paste English text and convert it to Malayalam?",
    answer:
      "No. The tool transliterates Romanized Malayalam; it does not translate English sentences into Malayalam. Enter Malayalam words written phonetically in Roman letters, rather than English prose, and review the suggestions.",
  },
  {
    question: "Is this a Malayalam translation tool?",
    answer:
      "No. Transliteration changes the writing system used for the same words. Translation changes the language and meaning. TypeIndian's Malayalam typing tool is for transliteration, not general English-to-Malayalam translation.",
  },
  {
    question: "How accurate is English-letter-to-Malayalam typing?",
    answer:
      "Roman input can be ambiguous, and spellings or pronunciations may vary. Suggestions help you choose the word you mean, but proofread the final Malayalam text, especially names and formal writing.",
  },
  {
    question: "Does TypeIndian save my Malayalam text?",
    answer:
      "The typing editor does not save your text as a cloud document. When you request transliteration suggestions, the relevant input is sent to Google Input Tools for processing. Text you add to the Session Board is stored in your browser's local storage on that device. Vercel Analytics may collect website usage information. See the Privacy Policy for details, and avoid submitting sensitive or confidential text for transliteration.",
  },
  {
    question: "Can I use this Malayalam typing tool for professional work?",
    answer:
      "You can use the editor to prepare drafts, messages, and other Malayalam text. Proofread the result, especially for names, official documents, publication, and other important uses.",
  },
  {
    question: "Can I type long paragraphs or documents in Malayalam?",
    answer:
      "You can use the editor for longer passages, but transliteration requests are sent to a third-party provider and may be affected by provider or technical limits. Work in smaller sections when needed and avoid submitting sensitive or confidential text.",
  },
];

export const LEARN_MALAYALAM_FAQ: FAQItem[] = [
  {
    question: "What script is used to write Malayalam?",
    answer:
      "Malayalam is written in the Malayalam script, a left-to-right Brahmic abugida used primarily for the Malayalam language. Its Unicode block is U+0D00–U+0D7F.",
  },
  {
    question: "How many vowels are in the modern Malayalam learner chart?",
    answer:
      "A practical modern learner chart commonly teaches 13 core independent vowels: അ, ആ, ഇ, ഈ, ഉ, ഊ, ഋ, എ, ഏ, ഐ, ഒ, ഓ, and ഔ. Sanskrit vocalic letters and historical forms are treated separately; alphabet counts can vary by teaching convention.",
  },
  {
    question: "How many consonants are in Malayalam?",
    answer:
      "A common basic consonant chart lists 36 letters. This is an orthographic teaching inventory, not a complete count of every sound in Malayalam speech. Scholarly characters and chillu forms need separate explanation.",
  },
  {
    question: "What are Malayalam vowel signs?",
    answer:
      "Vowel signs attach to consonants to represent a vowel other than the inherent അ. Some signs appear to the left or on both sides of a consonant even though they follow it in logical Unicode order.",
  },
  {
    question: "What is the virama or candrakkala in Malayalam?",
    answer:
      "The sign ് is called virama in Unicode terminology and candrakkala in Malayalam. It suppresses or modifies the inherent vowel, and it participates in consonant clusters and word-final forms.",
  },
  {
    question: "What are chillu letters?",
    answer:
      "Chillu letters are special pure-consonant forms commonly used at the ends of Malayalam syllables or words. Common examples include ൺ, ൻ, ർ, ൽ, ൾ, and ൿ. Unicode encodes these forms separately from ordinary consonant-plus-virama sequences.",
  },
  {
    question: "Are ക്ഷ and ജ്ഞ separate Malayalam letters?",
    answer:
      "No. ക്ഷ and ജ്ഞ are conjunct forms created from consonant sequences involving the virama. They are not independent basic consonant letters.",
  },
  {
    question: "Why does Malayalam have rounded letterforms?",
    answer:
      "Malayalam letterforms developed through historical manuscript and writing traditions, including writing on palm leaves. The evolution is historical and gradual rather than the result of one single cause.",
  },
  {
    question: "Is Malayalam written from left to right?",
    answer:
      "Yes. Malayalam is written from left to right. Consonants normally carry an inherent vowel unless a dependent vowel sign or candrakkala changes it.",
  },
  {
    question: "Does Malayalam have its own numerals?",
    answer:
      "Yes. Malayalam has native digits ൦ ൧ ൨ ൩ ൪ ൫ ൬ ൭ ൮ ൯, although Western digits 0–9 are also widely used in modern digital text.",
  },
  {
    question: "Where is Malayalam spoken?",
    answer:
      "Malayalam is spoken primarily in Kerala and also in Lakshadweep and the Mahé region of Puducherry, as well as by Malayalam-speaking communities around the world.",
  },
  {
    question: "Is Malayalam an official language of Kerala?",
    answer:
      "The Kerala Official Languages Act, 1969 adopts both Malayalam and English for official purposes in the State. It is inaccurate to describe Malayalam as the State's only official language under that Act.",
  },
  {
    question: "Is Malayalam a Classical Language of India?",
    answer:
      "Yes. Malayalam was recognized as a Classical Language of India in 2013.",
  },
  {
    question: "Is Malayalam transliteration the same as translation?",
    answer:
      "No. Transliteration represents Malayalam words in Malayalam script from Roman input. Translation changes the language and meaning. TypeIndian's Malayalam typing tool is for transliteration.",
  },
];
