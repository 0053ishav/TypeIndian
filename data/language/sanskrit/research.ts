import type { LearnResource } from "@/types/language";

/**
 * Sanskrit learning references.
 * Topic links indicate editorial relevance, not formal citation relationships.
 */
export const sanskritResearch: LearnResource[] = [
  {
    id: "SAN-R01",
    title: "The Unicode Standard, Chapter 12: Devanagari",
    type: "standard",
    publisher: "The Unicode Consortium",
    year: 2025,
    url: "https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-12/",
    summary: "Normative reference for Devanagari encoding, vowels, dependent vowel signs, virama, conjunct formation, anusvara, candrabindu, visarga, and Vedic marks. Devanagari is used for Sanskrit as well as several modern languages.",
    topics: ["writingSystem", "vowelSigns", "specialCharacters", "vedicRecitation"],
    metadataStatus: "reviewed",
  },
  {
    id: "SAN-R02",
    title: "Devanagari Root Zone Label Generation Rules",
    type: "standard",
    publisher: "Internet Corporation for Assigned Names and Numbers (ICANN)",
    year: 2025,
    url: "https://www.icann.org/sites/default/files/packages/lgr/rz-lgr-6-devanagari-script-23sep25-en.htm",
    summary: "Technical description of Devanagari character classes, inherent vowel, halant, independent vowels, matras, anusvara, candrabindu, nukta, visarga, and digits.",
    topics: ["writingSystem", "vowelSigns", "specialCharacters"],
    metadataStatus: "reviewed",
  },
  {
    id: "SAN-R03",
    title: "ISO 15919:2001 — Transliteration of Devanagari and Related Indic Scripts into Latin Characters",
    type: "standard",
    publisher: "International Organization for Standardization",
    year: 2001,
    url: "https://www.iso.org/standard/28333.html",
    summary: "International standard for consistent Latin transliteration of Devanagari and related Indic scripts, applicable to classical Sanskrit and Vedic-language text. It is distinct from informal phonetic input methods.",
    topics: ["typingGuide", "examples", "vowelSigns"],
    metadataStatus: "reviewed",
  },
  {
    id: "SAN-R04",
    title: "Śikṣā: Phonetics and Vedic Recitation",
    type: "book-chapter",
    publisher: "Pustakālaya",
    url: "https://pustakalaya-org.github.io/vol10_sabda/chapter02_shiksha_phonetics.html",
    summary: "Explains the traditional order of Sanskrit sounds and the articulatory classification of vowels, five stop groups, semivowels, sibilants, anusvara, and visarga.",
    topics: ["consonantClassification", "vowelSigns", "vedicRecitation", "history"],
    metadataStatus: "reviewed",
  },
  {
    id: "SAN-R05",
    title: "Sanskrit Grammar: Chapter I — The Letters",
    type: "book",
    authors: ["Lorenz Franz Kielhorn"],
    publisher: "Historical grammar reference",
    url: "https://en.wikisource.org/wiki/Page:A_Grammar_of_the_Sanskrit_Language_-_Lorenz_Franz_Kielhorn_(1st_edition).djvu/22",
    summary: "Historical grammar reference presenting the Devanagari vowel and consonant inventory, nasal signs, visarga, and the distinction between independent vowel letters and dependent vowel signs.",
    topics: ["consonantClassification", "vowelSigns", "specialCharacters"],
    metadataStatus: "reviewed",
  },
  {
    id: "SAN-R06",
    title: "The Unicode Standard, Version 12.1: Devanagari Vedic Marks",
    type: "standard",
    publisher: "The Unicode Consortium",
    url: "https://www.unicode.org/versions/Unicode12.1.0/ch12.pdf",
    summary: "Detailed discussion of Vedic tone marks, visarga diacritics, nasalization marks, and special Vedic text encoding. Useful for advanced Vedic-text support beyond ordinary Sanskrit typing.",
    topics: ["vedicRecitation", "specialCharacters"],
    metadataStatus: "reviewed",
  },
];
