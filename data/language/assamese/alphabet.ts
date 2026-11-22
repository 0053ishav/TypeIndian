import { Alphabet } from "@/types/alphabet";

export const assameseAlphabet: Alphabet = {
  // Conventional independent-vowel series used in modern Assamese.
  // The sounds are broad romanization cues, not a narrow phonetic transcription.
  vowels: [
    { letter: "অ", sound: "a" },
    { letter: "আ", sound: "ā" },
    { letter: "ই", sound: "i" },
    { letter: "ঈ", sound: "ī" },
    { letter: "উ", sound: "u" },
    { letter: "ঊ", sound: "ū" },
    { letter: "ঋ", sound: "ṛ" },
    { letter: "এ", sound: "e" },
    { letter: "ঐ", sound: "ai" },
    { letter: "ও", sound: "o" },
    { letter: "ঔ", sound: "au" },
  ],

  // Traditional Assamese consonant chart. Script letters do not map one-to-one
  // to modern phonemes; pronunciation and mergers vary by position and speaker.
  consonants: [
    { letter: "ক", sound: "ka" },
    { letter: "খ", sound: "kha" },
    { letter: "গ", sound: "ga" },
    { letter: "ঘ", sound: "gha" },
    { letter: "ঙ", sound: "ṅa" },

    { letter: "চ", sound: "ca" },
    { letter: "ছ", sound: "cha" },
    { letter: "জ", sound: "ja" },
    { letter: "ঝ", sound: "jha" },
    { letter: "ঞ", sound: "ña" },

    { letter: "ট", sound: "ṭa" },
    { letter: "ঠ", sound: "ṭha" },
    { letter: "ড", sound: "ḍa" },
    { letter: "ঢ", sound: "ḍha" },
    { letter: "ণ", sound: "ṇa" },

    { letter: "ত", sound: "ta" },
    { letter: "থ", sound: "tha" },
    { letter: "দ", sound: "da" },
    { letter: "ধ", sound: "dha" },
    { letter: "ন", sound: "na" },

    { letter: "প", sound: "pa" },
    { letter: "ফ", sound: "pha" },
    { letter: "ব", sound: "ba" },
    { letter: "ভ", sound: "bha" },
    { letter: "ম", sound: "ma" },

    { letter: "য", sound: "ya (romanization)" },
    { letter: "ৰ", sound: "ra" },
    { letter: "ল", sound: "la" },
    { letter: "ৱ", sound: "wa" },

    { letter: "শ", sound: "śa" },
    { letter: "ষ", sound: "ṣa" },
    { letter: "স", sound: "sa" },
    { letter: "হ", sound: "ha" },
  ],

  // Modified consonant forms used in Assamese orthography.
  // ক্ষ is intentionally not listed here: it is a ক্ + ষ conjunct sequence.
  extensions: [
    { letter: "ড়", sound: "ṛa (modified ড)" },
    { letter: "ঢ়", sound: "ṛha (modified ঢ)" },
    { letter: "য়", sound: "ẏa (modified য)" },
  ],

  vowelSigns: [
    { letter: "া", sound: "ā" },
    { letter: "ি", sound: "i" },
    { letter: "ী", sound: "ī" },
    { letter: "ু", sound: "u" },
    { letter: "ূ", sound: "ū" },
    { letter: "ৃ", sound: "ṛ" },
    { letter: "ে", sound: "e" },
    { letter: "ৈ", sound: "ai" },
    { letter: "ো", sound: "o" },
    { letter: "ৌ", sound: "au" },
  ],

  symbols: [
    { letter: "ঁ", sound: "candrabindu" },
    { letter: "ং", sound: "anusvara" },
    { letter: "ঃ", sound: "visarga" },
    { letter: "্", sound: "virama / hasanta" },
    { letter: "ৎ", sound: "khanda ta" },
    { letter: "ঽ", sound: "avagraha" },
    { letter: "ঀ", sound: "bengali anji (historical invocation sign)" },
  ],

  numerals: [
    { latin: "0", native: "০" },
    { latin: "1", native: "১" },
    { latin: "2", native: "২" },
    { latin: "3", native: "৩" },
    { latin: "4", native: "৪" },
    { latin: "5", native: "৫" },
    { latin: "6", native: "৬" },
    { latin: "7", native: "৭" },
    { latin: "8", native: "৮" },
    { latin: "9", native: "৯" },
  ],
};
