import { FAQItem } from "@/types/faq";

export const ASSAMESE_FAQ: FAQItem[] = [
  {
    question: "How does Assamese typing using English letters work?",
    answer:
      "Type Assamese words with Roman letters and choose the Assamese-script suggestion that matches your intended word. For example, a phonetic input such as namaskar may suggest নমস্কাৰ. This is transliteration, not translation.",
  },
  {
    question: "Which script does the Assamese typing tool use?",
    answer:
      "The tool writes modern Assamese in the Assamese form of the Eastern Nagari script. Unicode encodes this writing system in the Bengali block, which also contains the Assamese-specific letters ৰ and ৱ.",
  },
  {
    question: "Do I need to learn the Assamese keyboard layout?",
    answer:
      "No. You can type Assamese words using Roman letters and select a script suggestion. Learning to recognize Assamese letters still helps you proofread and edit the result.",
  },
  {
    question: "Is the Assamese typing tool free?",
    answer:
      "Yes. TypeIndian is currently free to use and does not require an account or subscription. Availability may still be affected by technical constraints or third-party provider limits.",
  },
  {
    question: "Can I paste English text and convert it to Assamese?",
    answer:
      "No. The tool transliterates Romanized Assamese; it does not translate English sentences into Assamese. Enter Assamese words written phonetically in Roman letters, rather than English prose, and review the suggestions.",
  },
  {
    question: "Is this an Assamese translation tool?",
    answer:
      "No. Transliteration changes the writing system used for the same words. Translation changes the language and meaning. TypeIndian's Assamese typing tool is for transliteration, not general English-to-Assamese translation.",
  },
  {
    question: "How accurate is English-letter-to-Assamese typing?",
    answer:
      "Roman input can be ambiguous, and spellings or pronunciations may vary. Suggestions are intended to help you choose the word you mean, but you should proofread the final Assamese text, especially names and formal writing.",
  },
  {
    question: "Does TypeIndian save my Assamese text?",
    answer:
      "The typing editor does not save your text as a cloud document. When you request transliteration suggestions, the relevant input is sent to Google Input Tools for processing. Text you add to the Session Board is stored in your browser's local storage on that device. Vercel Analytics may collect website usage information. See the Privacy Policy for details, and avoid submitting sensitive or confidential text for transliteration.",
  },
  {
    question: "Can I use this Assamese typing tool for professional work?",
    answer:
      "You can use the editor to prepare drafts, messages, and other Assamese text. Proofread the result, especially for names, official documents, publication, and other important uses.",
  },
  {
    question: "Can I type long paragraphs or documents in Assamese?",
    answer:
      "You can use the editor for longer passages, but transliteration requests are sent to a third-party provider and may be affected by provider or technical limits. Work in smaller sections when needed and avoid submitting sensitive or confidential text.",
  },
];

export const LEARN_ASSAMESE_FAQ: FAQItem[] = [
  {
    question: "What script is used to write Assamese?",
    answer:
      "Modern Assamese is written in the Assamese form of the Eastern Nagari script. Unicode uses the name Bengali for the shared encoded script block, but the block also supports Assamese orthography and its distinct letters.",
  },
  {
    question: "Why does Unicode call it the Bengali script block?",
    answer:
      "Unicode groups the shared writing system under the Bengali block (U+0980–U+09FF). The same block supports modern Assamese orthography, including ৰ (Assamese ra) and ৱ (Assamese wa). This encoding label does not mean Assamese and Bangla are the same language.",
  },
  {
    question: "How many vowels are in the Assamese alphabet?",
    answer:
      "A conventional Assamese learner chart lists 11 independent vowels: অ, আ, ই, ঈ, উ, ঊ, ঋ, এ, ঐ, ও, and ঔ. This is an orthographic chart count, not a claim that modern Assamese has 11 distinct vowel phonemes.",
  },
  {
    question: "How many consonants are in Assamese?",
    answer:
      "Traditional alphabet charts commonly present a set of consonant letters arranged in groups. The number of letters in a teaching chart is not the same as the number of consonant phonemes in spoken Assamese; some written contrasts have merged or have different phonetic realizations.",
  },
  {
    question: "What is special about ৰ and ৱ?",
    answer:
      "ৰ is the Assamese letter ra and ৱ is the Assamese letter wa. Unicode identifies these as Assamese-specific letters in the shared Bengali block. They are important distinctions and should not be replaced casually with র or ব.",
  },
  {
    question: "What are Assamese vowel signs or matras?",
    answer:
      "Vowel signs are dependent forms used with consonants. Common signs include া, ি, ী, ু, ূ, ৃ, ে, ৈ, ো, and ৌ. The inherent vowel of a consonant has no separate visible matra.",
  },
  {
    question: "Is ক্ষ a separate Assamese letter?",
    answer:
      "ক্ষ is a familiar conjunct, traditionally called khya in Assamese teaching contexts. Unicode represents it as a sequence of ক + ্ + ষ, not as a separately encoded independent consonant.",
  },
  {
    question: "What is খণ্ড-ত (ৎ)?",
    answer:
      "ৎ is the Assamese/Bengali-script khanda ta, a special final form associated with ত. It is not an ordinary independent consonant in the same way as ক or ম.",
  },
  {
    question: "Does Assamese use its own numerals?",
    answer:
      "Assamese uses the Eastern Nagari digit forms ০ ১ ২ ৩ ৪ ৫ ৬ ৭ ৮ ৯. Western digits (0–9) are also common in modern digital text.",
  },
  {
    question: "Is Assamese the official language of Assam?",
    answer:
      "The Assam Official Language Act, 1960 provides for Assamese to be used for official purposes of the State, while also containing safeguards and provisions for other language communities and regions. The legal position should not be simplified into a claim that no other languages have official or protected use in Assam.",
  },
  {
    question: "Does Assamese have Classical Language status?",
    answer:
      "Yes. The Government of India announced Classical Language status for Assamese on 4 October 2024.",
  },
  {
    question: "Is Assamese transliteration the same as translation?",
    answer:
      "No. Transliteration represents Assamese words in the Assamese script from Roman input. Translation changes the language and meaning. TypeIndian's Assamese typing tool is a transliteration tool.",
  },
];
