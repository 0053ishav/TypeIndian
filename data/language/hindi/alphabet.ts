import { Alphabet } from "@/types/alphabet";

export const hindiAlphabet: Alphabet = {
  // Traditional core independent vowels. ऋ is mainly found in Sanskrit-derived
  // vocabulary in contemporary Hindi; its pronunciation varies by speaker.
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
  ],

  // Traditional varṇamālā order. Some letters are uncommon as independent
  // sounds in everyday Hindi, and the chart is not a one-to-one phoneme list.
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
  ],

  // Extended forms are deliberately separate from the core alphabet.
  // Nukta forms modify base consonants; ऍ and ऑ are extended vowel letters.
  extensions: [
    { letter: "क़", sound: "qa" },
    { letter: "ख़", sound: "xa" },
    { letter: "ग़", sound: "ġa" },
    { letter: "ज़", sound: "za" },
    { letter: "ड़", sound: "ṛa" },
    { letter: "ढ़", sound: "ṛha" },
    { letter: "फ़", sound: "fa" },
    { letter: "ऍ", sound: "æ" },
    { letter: "ऑ", sound: "ɔ" },
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
    { letter: "़", sound: "nukta" },
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
