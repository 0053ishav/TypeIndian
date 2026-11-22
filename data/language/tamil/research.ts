import type { LearnResource } from "@/types/language";

/**
 * Tamil learning references.
 * Topic links indicate editorial relevance, not formal citation relationships.
 */
export const tamilResearch: LearnResource[] = [
  {
    id: "TAM-R01",
    title: "The Unicode Standard, Chapter 12: Tamil",
    type: "standard",
    publisher: "The Unicode Consortium",
    year: 2026,
    url: "https://www.unicode.org/versions/Unicode18.0.0/core-spec/chapter-12/",
    summary: "Normative reference for the Tamil block U+0B80–U+0BFF, atomic vowel encoding, independent and dependent vowels, left-side vowel signs, ligatures, aytham, and Tamil digits.",
    topics: ["writingSystem", "vowelSigns", "specialCharacters", "numerals"],
    metadataStatus: "reviewed",
  },
  {
    id: "TAM-R02",
    title: "Tamil Layout Requirements",
    type: "standard",
    publisher: "World Wide Web Consortium (W3C)",
    url: "https://www.w3.org/TR/taml-lreq/",
    summary: "Describes Tamil orthography and digital text layout, including consonant inventory, Grantha letters, pulli, vowel signs, ligatures, Tamil diglossia, and regional typographic variation.",
    topics: ["writingSystem", "consonantClassification", "vowelSigns", "specialCharacters", "typingGuide"],
    metadataStatus: "reviewed",
  },
  {
    id: "TAM-R03",
    title: "Tamil Layout Requirements: 2024 Working Draft",
    type: "article",
    publisher: "World Wide Web Consortium (W3C)",
    year: 2024,
    url: "https://www.w3.org/TR/2024/DNOTE-ilreq-taml-20240702/",
    summary: "Explains that Tamil does not have separate aspirated consonant letters, that consonant letters can have context-dependent pronunciations, and that spoken and formal written Tamil differ.",
    topics: ["consonantClassification", "writingSystem", "examples"],
    metadataStatus: "reviewed",
  },
  {
    id: "TAM-R04",
    title: "Reference LGR for Script: Tamil",
    type: "standard",
    publisher: "Internet Corporation for Assigned Names and Numbers (ICANN)",
    year: 2026,
    url: "https://www.icann.org/sites/default/files/packages/lgr/lgr-second-level-tamil-full-variant-script-13aug26-en.html",
    summary: "Technical description of Tamil akshara structure, inherent vowels, pulli, matras, aytham, and the limited cases of conjunct formation.",
    topics: ["writingSystem", "vowelSigns", "specialCharacters"],
    metadataStatus: "reviewed",
  },
  {
    id: "TAM-R05",
    title: "Status of Tamil Language",
    type: "institutional-reference",
    publisher: "Ministry of Home Affairs, Government of India",
    year: 2020,
    url: "https://www.mha.gov.in/MHA1/Par2017/pdfs/par2020-pdfs/ls-21092020/1412.pdf",
    summary: "Government of India parliamentary answer confirming Tamil's place in the Eighth Schedule and its recognition as a Classical Language based on the antiquity of its recorded history and early literature.",
    topics: ["history"],
    metadataStatus: "reviewed",
  },
  {
    id: "TAM-R06",
    title: "Indic Scripts in Unicode: Tamil",
    type: "standard",
    publisher: "The Unicode Consortium",
    url: "https://www.unicode.org/versions/Unicode16.0.0/UnicodeStandard-16.0.pdf",
    summary: "Additional Unicode background on Tamil character encoding, aytham, virama, digits, and the distinction between Tamil consonants and sounds represented in other scripts.",
    topics: ["writingSystem", "consonantClassification", "specialCharacters", "numerals"],
    metadataStatus: "reviewed",
  },
];
