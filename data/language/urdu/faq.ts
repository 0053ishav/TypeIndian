import { FAQItem } from "@/types/faq";

export const URDU_FAQ: FAQItem[] = [
  {
    question: "What is Urdu typing using English letters?",
    answer:
      "Urdu typing with English letters means entering Roman Urdu phonetically and selecting Urdu-script suggestions. Roman Urdu spelling is not fully standardized, so choose the suggestion that matches the intended word and context.",
  },
  {
    question: "Which script does the Urdu typing tool use?",
    answer:
      "TypeIndian uses the Urdu form of the Arabic script, often displayed in Nastaliq typography. Nastaliq is a calligraphic style, not a separate Unicode script.",
  },
  {
    question: "Does Urdu typing work from right to left?",
    answer:
      "Yes. Urdu text runs from right to left. Embedded Latin text and numbers follow bidirectional text rules and may display left to right within an Urdu sentence.",
  },
  {
    question: "Do I need to install an Urdu keyboard?",
    answer:
      "No. You can enter Roman-letter phonetic input and choose an Urdu-script suggestion. You can also paste or edit existing Urdu text.",
  },
  {
    question: "Is the Urdu typing tool free?",
    answer:
      "Yes. TypeIndian's Urdu typing tool is currently free to use without an account or keyboard installation.",
  },
  {
    question: "Is this an Urdu translation tool?",
    answer:
      "No. It transliterates phonetic Roman Urdu input into Urdu script. It does not translate English sentences into Urdu or change the language of the text.",
  },
  {
    question: "Why can the same Urdu letter look different in a word?",
    answer:
      "Urdu is cursive. Many letters have isolated, initial, medial, or final glyph forms depending on which neighboring letters they join. A Unicode-aware shaping engine and suitable font determine the displayed forms.",
  },
  {
    question: "Can I type short vowels in Urdu?",
    answer:
      "Urdu has short vowel sounds, but zabar, zer, and pesh are usually omitted in ordinary writing. They can be added when pronunciation needs to be made explicit, such as in learning materials or dictionaries.",
  },
  {
    question: "Does TypeIndian store my Urdu text?",
    answer:
      "The typing editor does not save your text as a cloud document. Transliteration input is sent to the configured Google Input Tools provider for suggestions. Text added to the Session Board is stored in your browser's local storage on that device, and Vercel Analytics may collect website usage information. See the Privacy Policy for details and avoid submitting sensitive or confidential text.",
  },
  {
    question: "Can I use the Urdu text created with TypeIndian commercially?",
    answer:
      "You can use the Urdu text you create for personal, educational, professional, and commercial writing. Proofread names, diacritics, and formal documents before publishing.",
  },
];

export const LEARN_URDU_FAQ: FAQItem[] = [
  {
    question: "What script is used to write Urdu?",
    answer:
      "Urdu is written in a modified Perso-Arabic form of the Arabic script. Nastaliq is the characteristic traditional style used for Urdu handwriting and publishing.",
  },
  {
    question: "Is Urdu written from right to left?",
    answer:
      "Yes. Urdu script runs right to left. Numbers and embedded Latin text generally run left to right within mixed-direction text.",
  },
  {
    question: "Is Nastaliq a separate script?",
    answer:
      "No. Nastaliq is a calligraphic style of the Arabic script. Unicode encodes the underlying letters and marks; a Nastaliq-capable font and shaping engine render the style.",
  },
  {
    question: "How many letters are in the Urdu alphabet?",
    answer:
      "A traditional Urdu alphabet chart commonly lists 36 letters. Modern orthography references also describe additional important characters, vowel carriers, nasalization and aspiration signs, and 18 aspirated consonant digraphs. Counts vary depending on whether these combinations and auxiliary signs are included.",
  },
  {
    question: "Does Urdu have vowels?",
    answer:
      "Yes. Urdu has short and long vowel sounds. Long vowels are represented using letters such as ا, آ, و, ی, and ے, with their values depending on position and context. Short-vowel marks are usually omitted in everyday text.",
  },
  {
    question: "What are zabar, zer, and pesh?",
    answer:
      "Zabar (َ), zer (ِ), and pesh (ُ) are combining marks that indicate short a, i, and u sounds. They are generally used when pronunciation needs clarification rather than in ordinary unvowelled writing.",
  },
  {
    question: "Why do ث, س, and ص sometimes sound alike?",
    answer:
      "Urdu preserves Arabic and Persian spelling distinctions in many loanwords even where the letters have overlapping modern pronunciations. Similar overlaps occur with several z- and t-sounding letters.",
  },
  {
    question: "What are ٹ, ڈ, and ڑ?",
    answer:
      "These are Urdu letters used for South Asian retroflex sounds: ٹ is ṭ, ڈ is ḍ, and ڑ is the retroflex flap ṛ.",
  },
  {
    question: "What are nūn ghunna and do cashmī hē?",
    answer:
      "Nūn ghunna (ں) marks nasalization, especially at the end of a word. Do cashmī hē (ھ) combines with a preceding consonant to represent aspiration, as in بھ, پھ, تھ, and کھ.",
  },
  {
    question: "Why do Urdu letters join differently?",
    answer:
      "Arabic-derived cursive writing has joining behavior. Letters can have isolated, initial, medial, and final forms, and some letters do not join to the following letter. The font and text-shaping engine select the appropriate glyph forms.",
  },
  {
    question: "Which numerals are used in Urdu?",
    answer:
      "Urdu commonly uses Eastern Arabic-Indic digits ۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹. These are Unicode characters shared with other languages, with some glyph shapes varying by language and font.",
  },
];
