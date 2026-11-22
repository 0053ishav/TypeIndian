import { FAQItem } from "@/types/faq";

export const SANSKRIT_FAQ: FAQItem[] = [
  {
    question: "What is Sanskrit typing using English letters?",
    answer:
      "It is phonetic transliteration: type Sanskrit words with Roman letters and choose a Devanagari suggestion. It changes the writing system, not the language or meaning.",
  },
  {
    question: "Which script does the Sanskrit typing tool use?",
    answer:
      "TypeIndian uses Devanagari for its Sanskrit typing experience. Sanskrit has also been written in several other Indian scripts across regions and historical periods.",
  },
  {
    question: "Do I need to learn a Sanskrit keyboard layout?",
    answer:
      "No. Type Sanskrit words using Roman letters and select the Devanagari suggestion that matches your intended word.",
  },
  {
    question: "Is the Sanskrit typing tool free?",
    answer:
      "Yes. TypeIndian is currently free to use and does not require an account or subscription. Availability may still be affected by technical constraints or third-party provider limits.",
  },
  {
    question: "Is this a Sanskrit translation tool?",
    answer:
      "No. It transliterates Roman input into Devanagari. Translation changes the language; transliteration changes how the same language is written.",
  },
  {
    question: "Can I type Sanskrit verses and ślokas?",
    answer:
      "Yes. You can type verses, ślokas, quotations, study notes, and longer passages. Check the final spelling, sandhi, and punctuation before using a passage in formal or scholarly work.",
  },
  {
    question: "Does Sanskrit typing support vocalic ṛ and ḷ?",
    answer:
      "The Sanskrit alphabet includes vocalic ऋ and ऌ, as well as the long forms ॠ and ॡ in traditional inventories. Select a suggestion carefully because casual Roman input may not distinguish every scholarly form.",
  },
  {
    question: "Does TypeIndian support Vedic accents?",
    answer:
      "The learning guide introduces common Devanagari Vedic accent marks, but this should not be treated as a complete Vedic text editor. Specialized recitation traditions use additional marks and conventions.",
  },
  {
    question: "Does TypeIndian save my Sanskrit text?",
    answer:
      "The typing editor does not save your text as a cloud document. When you request transliteration suggestions, relevant input is sent to Google Input Tools for processing. Session Board content is stored in your browser's local storage, and Vercel Analytics may collect website usage information. See the Privacy Policy for details and avoid submitting sensitive text.",
  },
  {
    question: "Can I use Sanskrit text for education or research?",
    answer:
      "You can use generated text for study, teaching, notes, and research, but automated transliteration is not a substitute for checking the source text, sandhi, diacritics, or scholarly edition.",
  },
];

export const LEARN_SANSKRIT_FAQ: FAQItem[] = [
  {
    question: "What is Sanskrit?",
    answer:
      "Sanskrit is a classical Indo-Aryan language with extensive traditions of grammar, philosophy, poetry, drama, ritual, and scholarly writing.",
  },
  {
    question: "Is Devanagari the only script used for Sanskrit?",
    answer:
      "No. Sanskrit has been written in many regional scripts. Devanagari is widely used in modern printed and digital editions, and TypeIndian currently uses Devanagari.",
  },
  {
    question: "How many vowels are in the traditional Sanskrit inventory?",
    answer:
      "A common traditional chart presents 14 independent vowels: अ आ इ ई उ ऊ ऋ ॠ ऌ ॡ ए ऐ ओ औ. The long vocalic liquids are rare, and teaching charts may vary in how they present them.",
  },
  {
    question: "Why are Sanskrit consonants arranged in five groups?",
    answer:
      "The five vargas organize stop consonants by place of articulation: velar, palatal, retroflex, dental, and labial. Each group follows a consistent sequence of voicing, aspiration, and nasal articulation.",
  },
  {
    question: "What is the difference between Sanskrit and Hindi?",
    answer:
      "They are distinct Indo-Aryan languages with different grammar, vocabulary, and historical development, even though both can be written in Devanagari.",
  },
  {
    question: "Are क्ष, त्र, ज्ञ, and श्र independent consonants?",
    answer:
      "They are familiar conjunct forms built from consonant sequences, not separate basic consonant letters. Their written shapes depend on Devanagari conjunct formation and font shaping.",
  },
  {
    question: "What are anusvāra, anunāsika, and visarga?",
    answer:
      "Anusvāra (ं) represents a nasal element whose realization depends on context. Anunāsika or candrabindu (ँ) marks nasalization. Visarga (ः) represents a distinct post-vocalic breath-like sound in Sanskrit.",
  },
  {
    question: "What does the virama do?",
    answer:
      "Virama (्), also called halant, suppresses the inherent vowel of a consonant and participates in forming consonant clusters and conjuncts.",
  },
  {
    question: "What is IAST?",
    answer:
      "The International Alphabet of Sanskrit Transliteration is a scholarly Roman-letter convention using diacritics such as ā, ṛ, ṅ, ñ, ṭ, ḍ, ś, and ṣ. It is different from casual Roman keyboard input.",
  },
  {
    question: "What are Vedic accents?",
    answer:
      "Vedic recitation traditions preserve pitch and tonal distinctions, commonly discussed using terms such as udātta, anudātta, and svarita. Written Vedic texts may use specialized accent and recitation marks.",
  },
  {
    question: "Can Sanskrit be written in scripts other than Devanagari?",
    answer:
      "Yes. Sanskrit has been written in scripts including Bengali, Gujarati, Kannada, Telugu, Malayalam, Grantha, and others. The language is not identical to any one script.",
  },
];
