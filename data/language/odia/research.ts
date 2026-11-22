import type { LearnResource } from "@/types/language";

/**
 * Odia learning references.
 * Topic links indicate editorial relevance, not formal citation relationships.
 */
export const odiaResearch: LearnResource[] = [
  {
    id: "OD-R01",
    title: "The Unicode Standard, Chapter 12: Oriya (Odia)",
    type: "standard",
    publisher: "The Unicode Consortium",
    year: 2025,
    url: "https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-12/",
    summary: "Normative reference for the Odia script block U+0B00–U+0B7F, independent vowels, dependent vowel signs, virama, conjunct formation, nasal marks, and shaping behaviour. Unicode retains the historical block label Oriya while current English usage prefers Odia.",
    topics: ["writingSystem", "vowelSigns", "consonantClassification", "specialCharacters"],
    metadataStatus: "reviewed",
  },
  {
    id: "OD-R02",
    title: "Oriya Script Root Zone Label Generation Rules",
    type: "standard",
    publisher: "Internet Corporation for Assigned Names and Numbers (ICANN)",
    year: 2025,
    url: "https://www.icann.org/sites/default/files/packages/lgr/rz-lgr-6-oriya-script-28may25-en.htm",
    summary: "Technical character-class reference for Odia script, including consonants, vowels, matras, halant, nukta, visarga, chandrabindu, and anusvara. This is a character-processing reference, not a complete school alphabet syllabus.",
    topics: ["writingSystem", "vowelSigns", "consonantClassification", "specialCharacters"],
    metadataStatus: "reviewed",
  },
  {
    id: "OD-R03",
    title: "Compendium of Linguistic Resources in Indian Languages: Odia Raw Speech Corpus",
    type: "institutional-reference",
    publisher: "Language Data Consortium for Indian Languages",
    url: "https://www.ldcil.org/files/publication/20210614_CompendiumBook.pdf",
    summary: "Describes Odia as an Indo-Aryan language, its use in Odisha and neighbouring regions, the Odia script's Brahmic origin, inherent vowels, and dependent vowel diacritics.",
    topics: ["history", "writingSystem", "vowelSigns", "consonantClassification"],
    metadataStatus: "reviewed",
  },
  {
    id: "OD-R04",
    title: "Survey of Manuscripts from Baleshwar District of Odisha State",
    type: "institutional-reference",
    publisher: "Ministry of Culture, Government of India",
    url: "https://culture.gov.in/files/reports_documents/Book_Abstracts.pdf",
    summary: "Discusses Odisha's palm-leaf manuscript tradition, historical evidence for Odia language and Kutila script, and the use of an iron stylus to inscribe manuscripts.",
    topics: ["history"],
    metadataStatus: "reviewed",
  },
  {
    id: "OD-R05",
    title: "Odia as a Classical Language",
    type: "institutional-reference",
    publisher: "Utkal University",
    url: "https://uuc.ac.in/wp-content/uploads/2024/10/MA-Linguistics-Revised-Syllabus-23-24.pdf",
    summary: "University linguistics syllabus covering the history and development of Odia, phonology, vowels and consonants, morphology, syntax, classical-language status, script, and language technology.",
    topics: ["history", "consonantClassification", "writingSystem"],
    metadataStatus: "reviewed",
  },
];
