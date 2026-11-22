import { Alphabet } from "@/types/alphabet";

export const marathiAlphabet: Alphabet = {
  // Contemporary Marathi core vowels. ऋ occurs mainly in Sanskrit-derived vocabulary.
  // ॲ and ऑ are included as extended vowels used especially in loanwords.
  vowels: [
    { letter: "अ", sound: "a" },
    { letter: "आ", sound: "ā" },
    { letter: "इ", sound: "i" },
    { letter: "ई", sound: "ī" },
    { letter: "उ", sound: "u" },
    { letter: "ऊ", sound: "ū" },
    { letter: "ऋ", sound: "ṛ" },
    { letter: "ए", sound: "e" },
    { letter: "ऐ", sound: "ai" },
    { letter: "ओ", sound: "o" },
    { letter: "औ", sound: "au" },
    { letter: "ॲ", sound: "ă / æ" },
    { letter: "ऑ", sound: "ŏ / ɔ" },
  ],

  // Traditional Devanagari consonant order, with Marathi's distinctive ळ.
  // Phonetic inventories and the status of marginal sounds vary by analysis.
  consonants: [
    { letter: "क", sound: "ka" },
    { letter: "ख", sound: "kha" },
    { letter: "ग", sound: "ga" },
    { letter: "घ", sound: "gha" },
    { letter: "ङ", sound: "ṅa" },

    { letter: "च", sound: "ca" },
    { letter: "छ", sound: "cha" },
    { letter: "ज", sound: "ja" },
    { letter: "झ", sound: "jha" },
    { letter: "ञ", sound: "ña" },

    { letter: "ट", sound: "ṭa" },
    { letter: "ठ", sound: "ṭha" },
    { letter: "ड", sound: "ḍa" },
    { letter: "ढ", sound: "ḍha" },
    { letter: "ण", sound: "ṇa" },

    { letter: "त", sound: "ta" },
    { letter: "थ", sound: "tha" },
    { letter: "द", sound: "da" },
    { letter: "ध", sound: "dha" },
    { letter: "न", sound: "na" },

    { letter: "प", sound: "pa" },
    { letter: "फ", sound: "pha" },
    { letter: "ब", sound: "ba" },
    { letter: "भ", sound: "bha" },
    { letter: "म", sound: "ma" },

    { letter: "य", sound: "ya" },
    { letter: "र", sound: "ra" },
    { letter: "ल", sound: "la" },
    { letter: "व", sound: "va" },

    { letter: "श", sound: "śa" },
    { letter: "ष", sound: "ṣa" },
    { letter: "स", sound: "sa" },
    { letter: "ह", sound: "ha" },
    { letter: "ळ", sound: "ḷa" },
  ],

  // Extended vowel signs used in Marathi for sounds such as ॲ and ऑ.
  extensions: [
    { letter: "ॅ", sound: "candra e sign" },
    { letter: "ॉ", sound: "candra o sign" },
    { letter: "़", sound: "nukta (in relevant borrowed spellings)" },
  ],

  vowelSigns: [
    { letter: "ा", sound: "ā" },
    { letter: "ि", sound: "i" },
    { letter: "ी", sound: "ī" },
    { letter: "ु", sound: "u" },
    { letter: "ू", sound: "ū" },
    { letter: "ृ", sound: "ṛ" },
    { letter: "े", sound: "e" },
    { letter: "ै", sound: "ai" },
    { letter: "ो", sound: "o" },
    { letter: "ौ", sound: "au" },
  ],

  symbols: [
    { letter: "ं", sound: "anusvāra" },
    { letter: "ँ", sound: "candrabindu" },
    { letter: "ः", sound: "visarga" },
    { letter: "्", sound: "virāma / halant" },
    { letter: "ऽ", sound: "avagraha" },
    { letter: "।", sound: "daṇḍa" },
    { letter: "॥", sound: "double daṇḍa" },
  ],

  numerals: [
    { latin: "0", native: "०" },
    { latin: "1", native: "१" },
    { latin: "2", native: "२" },
    { latin: "3", native: "३" },
    { latin: "4", native: "४" },
    { latin: "5", native: "५" },
    { latin: "6", native: "६" },
    { latin: "7", native: "७" },
    { latin: "8", native: "८" },
    { latin: "9", native: "९" },
  ],
};
