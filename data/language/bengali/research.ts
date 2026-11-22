import type { LearnResource } from "@/types/language";

/**
 * Bengali research and reference sources.
 * Topic links indicate editorial relevance, not citation relationships.
 */
export const bengaliResearch: LearnResource[] = [
  {
    id: "BEN-R01",
    title: "Bengali Layout Requirements",
    type: "standard",
    publisher: "World Wide Web Consortium",
    year: 2025,
    url: "https://www.w3.org/TR/beng-lreq/",
    summary: "Technical description of Bengali orthography, inherent vowels, vowel signs, conjuncts, text segmentation, shaping, nasalization, and native digits.",
    topics: ["writingSystem", "consonantClassification", "vowelSigns", "specialCharacters", "numerals"],
    metadataStatus: "reviewed",
  },
  {
    id: "BEN-R02",
    title: "Unicode Standard, Chapter 12: South and Central Asia",
    type: "standard",
    publisher: "The Unicode Consortium",
    url: "https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-12/",
    summary: "Normative reference for Bengali block encoding, independent vowels, dependent vowel signs, hasant, conjunct formation, and Bengali-specific character sequences.",
    topics: ["writingSystem", "vowelSigns", "consonantClassification", "specialCharacters"],
    metadataStatus: "reviewed",
  },
  {
    id: "BEN-R03",
    title: "Bengali Character Code Chart",
    type: "standard",
    publisher: "The Unicode Consortium",
    year: 2025,
    url: "https://www.unicode.org/Public/17.0.0/charts/PDF/U0980.pdf",
    summary: "Official code chart for Bengali script characters, combining marks, vowel signs, and native digits.",
    topics: ["writingSystem", "vowelSigns", "specialCharacters", "numerals"],
    metadataStatus: "reviewed",
  },
  {
    id: "BEN-R04",
    title: "The Constitution of the People's Republic of Bangladesh, Article 3",
    type: "institutional-reference",
    publisher: "Laws of Bangladesh",
    url: "https://bdlaws.minlaw.gov.bd/act-print-367/section-print-24550.html",
    summary: "Primary legal source stating that Bangla is the state language of the Republic of Bangladesh.",
    topics: ["history"],
    metadataStatus: "reviewed",
  },
  {
    id: "BEN-R05",
    title: "The West Bengal Official Language Act, 1961",
    type: "institutional-reference",
    publisher: "Government of West Bengal",
    year: 1961,
    url: "https://prsindia.org/files/bills_acts/acts_states/west-bengal/1961/Act%20No.%2024%20of%201961%20WB.pdf",
    summary: "Legal reference for the use of Bengali for official purposes in West Bengal, with provisions and exceptions for specified areas and purposes.",
    topics: ["history"],
    metadataStatus: "reviewed",
  },
  {
    id: "BEN-R06",
    title: "Linguistic Survey of India: West Bengal, Part I — Bengali",
    type: "institutional-reference",
    publisher: "Census of India",
    url: "https://censusindia.gov.in/nada/index.php/catalog/34826/download/38514/LSI_WB_PART_I.pdf",
    summary: "Linguistic survey covering Bengali language history, Indo-Aryan affiliation, regional distribution, and literary development.",
    topics: ["history", "consonantClassification", "examples"],
    metadataStatus: "reviewed",
  },
  {
    id: "BEN-R07",
    title: "Bengali Romanization Table",
    type: "standard",
    publisher: "Library of Congress",
    url: "https://www.loc.gov/catdir/cpso/romanization/bengali.pdf",
    summary: "Cataloguing romanization reference for Bengali. It is a formal transliteration convention, not a specification for informal phonetic typing input.",
    topics: ["writingSystem", "typingGuide", "examples"],
    metadataStatus: "verify",
  },
];

