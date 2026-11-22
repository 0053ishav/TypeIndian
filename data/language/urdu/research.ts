import type { LearnResource } from "@/types/language";

/**
 * Urdu orthography and script references.
 * Topic links indicate editorial relevance, not formal citation relationships.
 */
export const urduResearch: LearnResource[] = [
  {
    id: "URD-R01",
    title: "Arabic (Urdu) (Nastaliq) Orthography Notes",
    type: "institutional-reference",
    authors: ["Richard Ishida"],
    year: 2026,
    publisher: "W3C Internationalization / ScriptSource",
    url: "https://r12a.github.io/scripts/arab/ur.html",
    summary: "Current descriptive reference for Urdu orthography: vowel letters and marks, consonants, aspiration digraphs, nasalization, contextual joining, Nastaliq, digits, punctuation, and Unicode character choices.",
    topics: ["writingSystem", "vowelSigns", "consonantClassification", "specialCharacters", "numerals", "typingGuide"],
    metadataStatus: "reviewed",
  },
  {
    id: "URD-R02",
    title: "The Unicode Standard, Chapter 9: Middle East-I",
    type: "standard",
    publisher: "The Unicode Consortium",
    year: 2026,
    url: "https://www.unicode.org/versions/Unicode18.0.0/core-spec/chapter-9/",
    summary: "Normative description of the Arabic script used for Urdu, cursive joining, right-to-left direction, combining marks, and Eastern Arabic-Indic digit glyph variation.",
    topics: ["writingSystem", "vowelSigns", "specialCharacters", "numerals"],
    metadataStatus: "reviewed",
  },
  {
    id: "URD-R03",
    title: "Let's Learn Urdu: Beginner's Manual for Urdu Script",
    type: "book",
    authors: ["Gopi Chand Narang"],
    year: 2004,
    publisher: "National Council for Promotion of Urdu Language, Government of India",
    url: "https://www.urducouncil.nic.in/sites/default/files/2024-07/Let%27s%20Learn%20Urdu%20%28English%29.pdf",
    summary: "Government of India beginner manual covering Urdu script direction, connectors and non-connectors, the traditional 36-letter alphabet, long and short vowels, nūn ghunna, do cashmī hē, hamza, numerals, and letter shapes.",
    topics: ["history", "writingSystem", "vowelSigns", "consonantClassification", "specialCharacters", "numerals", "examples"],
    metadataStatus: "reviewed",
  },
  {
    id: "URD-R04",
    title: "Report on the Current Status of UN Romanization Systems for Geographical Names: Urdu",
    type: "institutional-reference",
    publisher: "United Nations Group of Experts on Geographical Names",
    year: 2016,
    url: "https://unstats.un.org/unsd/ungegn/working_groups/wg5/documents/wgrr4urdu.pdf",
    summary: "Describes Urdu's right-to-left Perso-Arabic script, omitted vowel points, and the challenges of consistent romanization. Its formal romanization table is not the same as informal Roman Urdu typing.",
    topics: ["typingGuide", "examples"],
    metadataStatus: "reviewed",
  },
];
