import type { LearnResource } from "@/types/language";

/**
 * Telugu learning references.
 * Topic links indicate editorial relevance, not formal citation relationships.
 */
export const teluguResearch: LearnResource[] = [
  {
    id: "TEL-R01",
    title: "The Unicode Standard, Chapter 12: South and Central Asia",
    type: "standard",
    publisher: "The Unicode Consortium",
    year: 2026,
    url: "https://unicode.org/versions/Unicode18.0.0/core-spec/chapter-12/",
    summary: "Normative description of the Telugu script, Unicode block U+0C00–U+0C7F, vowel encoding, inherent vowel, virama, consonant clusters, and shaping behaviour.",
    topics: ["writingSystem", "vowelSigns", "consonantClassification", "specialCharacters"],
    metadataStatus: "reviewed",
  },
  {
    id: "TEL-R02",
    title: "Telugu Character Code Chart",
    type: "standard",
    publisher: "The Unicode Consortium",
    year: 2026,
    url: "https://www.unicode.org/Public/UCD/latest/charts/nameslist/0c00/",
    summary: "Official Unicode names and code points for Telugu signs, independent vowels, consonants, dependent vowel signs, historic letters, and native digits.",
    topics: ["writingSystem", "vowelSigns", "specialCharacters", "numerals"],
    metadataStatus: "reviewed",
  },
  {
    id: "TEL-R03",
    title: "Telugu Script: Second-Level Reference Label Generation Rules",
    type: "institutional-reference",
    publisher: "Internet Corporation for Assigned Names and Numbers",
    year: 2024,
    url: "https://www.iana.org/domains/lgrs/reference/2024-10-25/telugu-script",
    summary: "Describes Telugu as an abugida, its implicit vowel, common vowel inventory, rare ఌ, obsolete extended vowels, and dependent vowel signs. This is a script-character reference, not a school syllabus.",
    topics: ["writingSystem", "vowelSigns", "consonantClassification"],
    metadataStatus: "reviewed",
  },
  {
    id: "TEL-R04",
    title: "Telugu Romanization Table",
    type: "standard",
    publisher: "Library of Congress",
    year: 2011,
    url: "https://loc.gov/catdir/cpso/romanization/telugu.pdf",
    summary: "Formal cataloguing romanization reference. It explains the inherent vowel, virama, and nasal assimilation conventions; these scholarly rules differ from casual phonetic typing.",
    topics: ["typingGuide", "examples"],
    metadataStatus: "reviewed",
  },
  {
    id: "TEL-R05",
    title: "ISO 15919:2001 — Transliteration of Indic Scripts into Latin Characters",
    type: "standard",
    publisher: "International Organization for Standardization",
    year: 2001,
    url: "https://www.iso.org/standard/28333.html",
    summary: "International transliteration standard whose tables include Telugu. ISO/DIS 15919 is under development as a proposed replacement, so distinguish the published 2001 edition from the draft.",
    topics: ["typingGuide", "examples"],
    metadataStatus: "reviewed",
  },
  {
    id: "TEL-R06",
    title: "Celebrating Telugu: A Legacy of Language and Culture",
    type: "institutional-reference",
    publisher: "Ministry of Information and Broadcasting, Government of India",
    year: 2024,
    url: "https://mib.gov.in/sites/default/files/Mann_ki_baat_August_2024_English.pdf",
    summary: "Government of India publication describing Telugu as a Dravidian language, an official language of Andhra Pradesh and Telangana, and one of India's scheduled and classical languages.",
    topics: ["history"],
    metadataStatus: "reviewed",
  },
];
