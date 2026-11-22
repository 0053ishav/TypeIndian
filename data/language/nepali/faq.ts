import type { FAQItem } from "@/types/faq";

export const NEPALI_FAQ: FAQItem[] = [
  {
    question: "How does Nepali typing using English letters work?",
    answer:
      "Type Nepali words with Roman letters and choose the Devanagari suggestion that matches your intended word. For example, a phonetic input such as namaste may suggest नमस्ते. This is transliteration, not translation.",
  },
  {
    question: "Which script does the Nepali typing tool use?",
    answer:
      "TypeIndian writes Nepali in Devanagari, a left-to-right Brahmic abugida shared by several languages.",
  },
  {
    question: "Do I need to learn a Nepali keyboard layout?",
    answer:
      "No. You can type Nepali words using Roman letters and select a Devanagari suggestion. Learning to recognize the script still helps you proofread and edit the result.",
  },
  {
    question: "Is the Nepali typing tool free?",
    answer:
      "Yes. TypeIndian is currently free to use and does not require an account or subscription. Availability may still be affected by technical constraints or third-party provider limits.",
  },
  {
    question: "Can I paste English text and convert it to Nepali?",
    answer:
      "No. The tool transliterates Romanized Nepali; it does not translate English sentences into Nepali. Enter Nepali words written phonetically in Roman letters, rather than English prose, and review the suggestions.",
  },
  {
    question: "Is this a Nepali translation tool?",
    answer:
      "No. Transliteration changes the writing system used for the same words. Translation changes the language and meaning. TypeIndian's Nepali typing tool is for transliteration, not general English-to-Nepali translation.",
  },
  {
    question: "How accurate is English-letter-to-Nepali typing?",
    answer:
      "Roman input can be ambiguous, and spelling conventions, pronunciation, and context matter. Suggestions help you choose the word you mean, but proofread the final Nepali text, especially names and formal writing.",
  },
  {
    question: "Does TypeIndian save my Nepali text?",
    answer:
      "The typing editor does not save your text as a cloud document. When you request transliteration suggestions, the relevant input is sent to Google Input Tools for processing. Text you add to the Session Board is stored in your browser's local storage on that device. Vercel Analytics may collect website usage information. See the Privacy Policy for details, and avoid submitting sensitive or confidential text for transliteration.",
  },
  {
    question: "Can I use this Nepali typing tool for professional work?",
    answer:
      "You can use the editor to prepare drafts, messages, and other Nepali text. Proofread the result, especially for names, official documents, publication, and other important uses.",
  },
  {
    question: "Can I type long paragraphs or documents in Nepali?",
    answer:
      "You can use the editor for longer passages, but transliteration requests are sent to a third-party provider and may be affected by provider or technical limits. Work in smaller sections when needed and avoid submitting sensitive or confidential text.",
  },
];

export const LEARN_NEPALI_FAQ: FAQItem[] = [
  {
    question: "What script is used to write Nepali?",
    answer:
      "Nepali is written in Devanagari, a left-to-right Brahmic abugida. The Devanagari Unicode block is U+0900–U+097F, and the same script is used by multiple languages.",
  },
  {
    question: "How many vowels are commonly taught in the Nepali alphabet?",
    answer:
      "A commonly taught Nepali learner inventory has 11 independent vowels: अ, आ, इ, ई, उ, ऊ, ऋ, ए, ऐ, ओ, and औ. Sanskrit-related vocalic letters are treated separately, and alphabet counts can vary by teaching convention.",
  },
  {
    question: "How many consonants are commonly taught in Nepali?",
    answer:
      "The Nepali Language Resource Center describes 33 primary consonant letters in the Nepali writing system. Some popular charts also include conjuncts such as क्ष, त्र, and ज्ञ, but these are combinations rather than independent basic consonant letters.",
  },
  {
    question: "What are Nepali vowel signs or matras?",
    answer:
      "Vowel signs are dependent marks attached to consonants to represent a vowel other than the inherent vowel. For example, क + ि forms कि and क + ा forms का. Some signs appear visually before the consonant even though they follow it in logical text order.",
  },
  {
    question: "What is the hal or virama in Nepali?",
    answer:
      "The sign ् is called hal or virama. It suppresses the inherent vowel of a consonant and helps form conjuncts. In ordinary Nepali spelling it is not written in every place where the inherent vowel is absent, so spelling conventions and pronunciation must also be learned.",
  },
  {
    question: "What are conjunct consonants?",
    answer:
      "Conjuncts represent consonant clusters in a compact Devanagari form. Commonly taught examples include क्ष, त्र, and ज्ञ. They are formed from sequences of consonants and virama rather than being independent basic consonant letters.",
  },
  {
    question: "What is the difference between raswa and dirgha?",
    answer:
      "Raswa refers to short इ/ि and उ/ु forms, while dirgha refers to long ई/ी and ऊ/ू forms. These distinctions are important in Nepali spelling. Native Nepali orthography and Sanskrit loanword conventions do not always follow identical rules.",
  },
  {
    question: "What do chandrabindu and shirbindu indicate?",
    answer:
      "Chandrabindu (ँ) marks vowel nasalization. Anusvara or shirbindu (ं) commonly represents a nasal consonant whose place of articulation is influenced by the following consonant. Their spelling and pronunciation depend on the word.",
  },
  {
    question: "Does Nepali use its own numerals?",
    answer:
      "Yes. Nepali can be written with Devanagari digits ० १ २ ३ ४ ५ ६ ७ ८ ९, although Western digits 0–9 are also common in digital and everyday contexts.",
  },
  {
    question: "Is Nepali the same language as Hindi?",
    answer:
      "No. Nepali and Hindi are distinct Indo-Aryan languages. They share Devanagari but have their own grammar, vocabulary, pronunciation, and spelling conventions.",
  },
  {
    question: "Where is Nepali spoken?",
    answer:
      "Nepali is the primary language of Nepal and is also spoken in India, including Sikkim and parts of the Darjeeling region, and by communities around the world.",
  },
  {
    question: "Is Nepali transliteration the same as translation?",
    answer:
      "No. Transliteration represents Nepali words in Devanagari from Roman input. Translation changes the language and meaning. TypeIndian's Nepali typing tool is for transliteration.",
  },
];
