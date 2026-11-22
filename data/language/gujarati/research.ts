import type { LearnResource } from "@/types/language";

/**
 * Gujarati research and reference sources.
 * Topic links indicate editorial relevance, not citation relationships.
 */
export const gujaratiResearch: LearnResource[] = [
  {
    id: "GUJ-R01",
    title: "Gujarati Script Resources",
    type: "standard",
    publisher: "World Wide Web Consortium",
    year: 2026,
    url: "https://www.w3.org/TR/gujr-lreq/",
    summary: "Technical overview of Gujarati script direction, abugida structure, inherent vowel, consonant inventory, vowel signs, conjuncts, nasalization, and native digits. This is a W3C Group Note Draft, so it is treated as a work in progress.",
    topics: ["writingSystem", "consonantClassification", "vowelSigns", "numerals", "specialCharacters"],
    metadataStatus: "reviewed",
  },
  {
    id: "GUJ-R02",
    title: "The Unicode Standard, Chapter 12: Gujarati",
    type: "standard",
    publisher: "The Unicode Consortium",
    url: "https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-12/",
    summary: "Normative reference for Gujarati encoding, vowel letters, consonants, combining signs, virama, conjunct formation, and script-specific behaviour.",
    topics: ["writingSystem", "vowelSigns", "consonantClassification", "specialCharacters"],
    metadataStatus: "reviewed",
  },
  {
    id: "GUJ-R03",
    title: "Gujarati Character Code Chart",
    type: "standard",
    publisher: "The Unicode Consortium",
    year: 2025,
    url: "https://www.unicode.org/Public/17.0.0/charts/PDF/U0A80.pdf",
    summary: "Official code chart for Gujarati letters, dependent vowel signs, virama, nukta, Sanskrit extensions, digits, and additional script characters.",
    topics: ["writingSystem", "vowelSigns", "specialCharacters", "numerals"],
    metadataStatus: "reviewed",
  },
  {
    id: "GUJ-R04",
    title: "Gujarati Romanization Table",
    type: "standard",
    publisher: "Library of Congress",
    url: "https://www.loc.gov/catdir/cpso/romanization/gujarati.pdf",
    summary: "Formal cataloguing romanization reference for Gujarati. It is not the same as informal phonetic input used by consumer transliteration tools.",
    topics: ["writingSystem", "typingGuide", "examples"],
    metadataStatus: "verify",
  },
  {
    id: "GUJ-R05",
    title: "Report on the Current Status of United Nations Romanization Systems for Geographical Names: Gujarati",
    type: "institutional-reference",
    publisher: "United Nations Group of Experts on Geographical Names",
    year: 2016,
    url: "https://unstats.un.org/unsd/ungegn/working_groups/wg5/documents/wgrr4gujarati.pdf",
    summary: "Reviews the UN-recommended Gujarati romanization system and notes uncertainty and limited evidence of use. Useful for distinguishing formal geographical-name romanization from everyday Roman-letter typing.",
    topics: ["writingSystem", "typingGuide"],
    metadataStatus: "reviewed",
  },
];
