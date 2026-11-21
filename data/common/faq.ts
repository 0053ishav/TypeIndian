import { FAQItem } from "@/types/faq";

export const COMMON_FAQ: FAQItem[] = [
  {
    question: "Is TypeIndian free to use?",
    answer:
      "Yes. TypeIndian is currently free to use, and you do not need a paid subscription to use the typing tools. You need an internet connection for transliteration suggestions. Features and availability may change as the service evolves.",
  },
  {
    question: "Do I need to install anything?",
    answer:
      "No installation is required. TypeIndian runs in a modern web browser on desktop computers, laptops, tablets, and mobile phones. An internet connection is required for transliteration suggestions from Google Input Tools.",
  },
  {
    question: "Does TypeIndian store or track my text?",
    answer:
      "TypeIndian does not save your current editor text to a TypeIndian account or cloud document database. To provide transliteration suggestions, the word you are typing is sent directly from your browser to Google Input Tools. When you paste or drop longer text, its words are processed in separate requests. Text you add to the Session Board is saved in your browser's local storage on that device. Avoid entering passwords, financial details, or other sensitive information into the transliteration tool. See our Privacy Policy for details about analytics, storage, and third-party services.",
  },
  {
    question: "Can I paste paragraphs or longer text and convert them?",
    answer:
      "Yes. You can paste or drop longer text into the typing editor. TypeIndian processes the pasted text word by word and uses the first available transliteration suggestion for each word. Whitespace is normalized during this process, so paragraph breaks and original spacing may not be preserved. Review the result and make any needed corrections before copying or exporting it.",
  },
  {
    question: "How accurate is the transliteration?",
    answer:
      "TypeIndian requests suggestions from Google Input Tools. Results can vary by language, word, spelling, pronunciation, and context. Choose the suggestion that best fits what you mean, and review the final text for names, regional spellings, and context-specific nuances.",
  },
  {
    question: "Is TypeIndian a translation tool?",
    answer:
      "No. TypeIndian is a transliteration tool, not a translation tool. Transliteration changes how a word is written while aiming to preserve its pronunciation; translation changes its meaning into another language. For example, typing 'hello' may produce 'हैलो', not a translated greeting such as 'नमस्ते'.",
  },
  {
    question: "Can I use text created with TypeIndian for commercial work?",
    answer:
      "You can use TypeIndian to help prepare text for personal, educational, or business projects. TypeIndian does not verify the accuracy, originality, or legal suitability of your content. Review the output yourself and make sure you have the necessary rights to any source material you use.",
  },
  {
    question: "Which Indian languages does TypeIndian support?",
    answer:
      "TypeIndian currently supports 14 languages: Assamese, Bengali, Gujarati, Hindi, Kannada, Malayalam, Marathi, Nepali, Odia, Panjabi, Sanskrit, Tamil, Telugu, and Urdu. Availability and typing behavior can differ by language.",
  },
  {
    question: "What should I do if a transliteration is incorrect?",
    answer:
      "You can choose another suggestion when one is available, or edit the text manually in the editor. Transliteration is not always exact, especially for names, dialects, and words with multiple possible spellings. If you encounter a repeatable issue, contact us through the website's Contact page and include the language and an example that is safe to share.",
  },
];
