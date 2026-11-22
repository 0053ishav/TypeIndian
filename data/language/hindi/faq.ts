import { FAQItem } from "@/types/faq";

export const HINDI_FAQ: FAQItem[] = [
  {
    question: "How does Hindi typing using English letters work?",
    answer:
      "You type Hindi words using Roman letters, and the transliteration tool suggests Devanagari spellings. For example, typing 'namaste' can suggest 'नमस्ते'. This changes the script, not the language or meaning.",
  },
  {
    question: "Which script does the Hindi typing tool use?",
    answer:
      "TypeIndian's Hindi typing tool uses Devanagari (देवनागरी), the standard script used for writing Hindi.",
  },
  {
    question: "Do I need to learn the Hindi keyboard layout?",
    answer:
      "No. You can enter Hindi words with familiar English letters and choose the Devanagari suggestion you want. You do not need to install a Hindi keyboard layout.",
  },
  {
    question: "Is the Hindi typing tool free?",
    answer:
      "Yes. TypeIndian is currently free to use and does not require an account or subscription. Availability may still be affected by technical constraints or third-party provider limits.",
  },
  {
    question: "Can I paste English text and convert it to Hindi?",
    answer:
      "No. The tool transliterates Romanized Hindi; it does not translate English prose into Hindi. For example, enter 'aap kaise hain' to write 'आप कैसे हैं'. Typing 'How are you?' will not translate its meaning.",
  },
  {
    question: "What is the difference between transliteration and translation?",
    answer:
      "Transliteration changes the writing system while representing the same words, such as 'namaste' to 'नमस्ते'. Translation changes the language and meaning, such as 'hello' to 'नमस्ते'. TypeIndian's Hindi typing tool is for transliteration, not general translation.",
  },
  {
    question: "Why does the tool show more than one Hindi suggestion?",
    answer:
      "Roman input can be ambiguous. For example, 'khana' may suggest 'खाना' or 'कहना'. Read the alternatives and choose the word that matches the sentence you want to write.",
  },
  {
    question: "How accurate is English-letter-to-Hindi typing?",
    answer:
      "Common inputs often produce useful suggestions, but no transliteration result is guaranteed to be correct in every context. Roman spellings can represent different Hindi words, and spelling variants exist. Review the suggestions before using the text.",
  },
  {
    question: "Does TypeIndian save my Hindi text?",
    answer:
      "The typing editor does not save your text as a cloud document. When you request transliteration suggestions, the relevant input is sent to Google Input Tools for processing. Text you add to the Session Board is stored in your browser's local storage on that device. Vercel Analytics may collect website usage information. See the Privacy Policy for details, and avoid submitting sensitive or confidential text for transliteration.",
  },
  {
    question: "Can I use this Hindi typing tool for professional work?",
    answer:
      "You can use the editor to prepare drafts, messages, and other Hindi text. Always proofread the result, especially for names, formal documents, publication, or other important uses.",
  },
  {
    question: "Can I type long paragraphs or documents in Hindi?",
    answer:
      "You can use the editor for messages, notes, articles, and longer passages. Transliteration requests are sent to a third-party provider and may be affected by provider or technical limits. For large passages, work in smaller sections and avoid submitting sensitive or confidential text.",
  },
];

export const LEARN_HINDI_FAQ: FAQItem[] = [
  {
    question: "What script is used to write Hindi?",
    answer:
      "Modern Standard Hindi is written in Devanagari (देवनागरी). Devanagari is a script used by several languages, including Hindi, Sanskrit, Marathi, and Nepali.",
  },
  {
    question: "How many letters are there in Devanagari?",
    answer:
      "There is no single count unless you define what is included. A beginner's core chart usually lists traditional independent vowels and consonants; extended letters, nukta forms, vowel signs, and conjuncts are separate categories and should not all be counted as independent alphabet letters.",
  },
  {
    question: "Is Hindi a phonetic language?",
    answer:
      "Devanagari represents many Hindi sounds in a fairly systematic way, but spelling and pronunciation are not always one-to-one. For example, the inherent vowel (schwa) is often not pronounced in some word positions, and borrowed words and regional speech add variation.",
  },
  {
    question: "What are matras in Hindi?",
    answer:
      "Matras are dependent vowel signs attached to consonants or consonant clusters. For example, क becomes का with the ा sign and कि with the ि sign. The inherent vowel अ has no separate matra.",
  },
  {
    question: "What is the difference between a vowel and a matra?",
    answer:
      "An independent vowel letter is used when a vowel begins a syllable on its own, such as आ. A matra is a dependent sign used with a consonant, such as ा in का.",
  },
  {
    question: "What are conjunct letters such as क्ष and त्र?",
    answer:
      "They are joined forms created when consonants combine, often using the virama (्). They are not additional independent vowel or consonant letters in the core chart.",
  },
  {
    question: "Is Hindi the national language of India?",
    answer:
      "No. The Constitution identifies Hindi in Devanagari as the official language of the Union under Article 343. It does not declare Hindi to be India's national language. English also continues to be used for Union official purposes under the Official Languages Act.",
  },
  {
    question: "Do I need to learn the Hindi keyboard to write in Devanagari?",
    answer:
      "No. You can use a transliteration tool to enter Hindi words with Roman letters and choose Devanagari suggestions. Learning the script still helps you read, check, and edit the results.",
  },
];
