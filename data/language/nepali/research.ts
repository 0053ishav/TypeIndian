import type { LearnResource } from "@/types/language";

/**
 * Nepali learning references.
 * Topic links indicate editorial relevance, not formal citation relationships.
 */
export const nepaliResearch: LearnResource[] = [
  {
    id: "NEP-R01",
    title: "The Unicode Standard, Chapter 12: Devanagari",
    type: "standard",
    publisher: "The Unicode Consortium",
    year: 2024,
    url: "https://www.unicode.org/versions/Unicode16.0.0/core-spec/chapter-12/",
    summary: "Normative description of the Devanagari block U+0900–U+097F, independent vowels, consonants, dependent vowel signs, virama, conjunct formation, combining marks, and script shaping. Devanagari is shared by Nepali and several other languages.",
    topics: ["writingSystem", "consonantClassification", "vowelSigns", "specialCharacters"],
    metadataStatus: "reviewed",
  },
  {
    id: "NEP-R02",
    title: "Nepali Alphabet and Writing System",
    type: "article",
    publisher: "Nepali Language Resource Center",
    url: "https://nepalilanguage.org/alphabet/",
    summary: "Language-specific description of the Nepali Devanagari inventory, 33 consonant letters, 11 independent vowels, dependent vowel signs, hal, conjuncts, nasalization marks, punctuation, and numerals. It distinguishes Nepali conventions from Sanskrit loanword orthography.",
    topics: ["writingSystem", "consonantClassification", "vowelSigns", "numerals", "specialCharacters"],
    metadataStatus: "reviewed",
  },
  {
    id: "NEP-R03",
    title: "Nepali Orthography",
    type: "article",
    publisher: "Nepali Language Resource Center",
    url: "https://nepalilanguage.org/orthography/",
    summary: "Explains Nepali spelling conventions, including raswa-dirgha distinctions, native Nepali orthography versus Sanskrit loanword spelling, and the role of vowel length in written forms.",
    topics: ["writingSystem", "vowelSigns", "commonMistakes"],
    metadataStatus: "reviewed",
  },
  {
    id: "NEP-R04",
    title: "Romanization of Nepali",
    type: "standard",
    publisher: "Permanent Committee on Geographical Names for British Official Use",
    url: "https://assets.publishing.service.gov.uk/media/5ab4e364e5274a1aa5933450/ROMANIZATION_OF_NEPALI.pdf",
    summary: "Formal geographical-name romanization reference with tables for independent vowels, dependent vowel signs, consonants, other symbols, and Devanagari numerals. Formal romanization is not the same as casual phonetic typing.",
    topics: ["typingGuide", "examples", "vowelSigns", "numerals"],
    metadataStatus: "reviewed",
  },
  {
    id: "NEP-R05",
    title: "Report on the Current Status of United Nations Romanization Systems for Geographical Names: Nepali",
    type: "institutional-reference",
    publisher: "United Nations Group of Experts on Geographical Names",
    year: 2013,
    url: "https://unstats.un.org/unsd/ungegn/working_groups/wg5/documents/wgrr4nepali.pdf",
    summary: "Summarizes the UN-recommended Nepali romanization system and its use, noting the practical gap between the recommended system and everyday Nepali romanization practices.",
    topics: ["typingGuide", "examples"],
    metadataStatus: "reviewed",
  },
  {
    id: "NEP-R06",
    title: "Chapter 1 – Script and Pronunciation",
    type: "book-chapter",
    publisher: "BCcampus Open Education",
    url: "https://pressbooks.bccampus.ca/nepali/part/chapter-1-script-and-pronunciation/",
    summary: "Open educational chapter introducing Devanagari, the inherent vowel, vowel signs, halanta, akshara-based reading, and beginner pronunciation practice for Nepali learners.",
    topics: ["writingSystem", "vowelSigns", "consonantClassification", "typingGuide"],
    metadataStatus: "reviewed",
  },
];
