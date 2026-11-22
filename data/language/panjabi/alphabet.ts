import { Alphabet } from "@/types/alphabet";

export const panjabiAlphabet: Alphabet = {
  vowels: [
    { letter: "ਅ", sound: "a" },
    { letter: "ਆ", sound: "aa" },
    { letter: "ਇ", sound: "i" },
    { letter: "ਈ", sound: "ee" },
    { letter: "ਉ", sound: "u" },
    { letter: "ਊ", sound: "oo" },
    { letter: "ਏ", sound: "e" },
    { letter: "ਐ", sound: "ai" },
    { letter: "ਓ", sound: "o" },
    { letter: "ਔ", sound: "au" },
  ],

  consonants: [
    { letter: "ਸ", sound: "sa" },
    { letter: "ਹ", sound: "ha" },

    { letter: "ਕ", sound: "ka" },
    { letter: "ਖ", sound: "kha" },
    { letter: "ਗ", sound: "ga" },
    { letter: "ਘ", sound: "gha" },
    { letter: "ਙ", sound: "nga" },

    { letter: "ਚ", sound: "cha" },
    { letter: "ਛ", sound: "chha" },
    { letter: "ਜ", sound: "ja" },
    { letter: "ਝ", sound: "jha" },
    { letter: "ਞ", sound: "nya" },

    { letter: "ਟ", sound: "ṭa" },
    { letter: "ਠ", sound: "ṭha" },
    { letter: "ਡ", sound: "ḍa" },
    { letter: "ਢ", sound: "ḍha" },
    { letter: "ਣ", sound: "ṇa" },

    { letter: "ਤ", sound: "ta" },
    { letter: "ਥ", sound: "tha" },
    { letter: "ਦ", sound: "da" },
    { letter: "ਧ", sound: "dha" },
    { letter: "ਨ", sound: "na" },

    { letter: "ਪ", sound: "pa" },
    { letter: "ਫ", sound: "pha" },
    { letter: "ਬ", sound: "ba" },
    { letter: "ਭ", sound: "bha" },
    { letter: "ਮ", sound: "ma" },

    { letter: "ਯ", sound: "ya" },
    { letter: "ਰ", sound: "ra" },
    { letter: "ਲ", sound: "la" },
    { letter: "ਵ", sound: "va" },
    { letter: "ੜ", sound: "ṛa" },
  ],

  extensions: [
    { letter: "ਸ਼", sound: "sha" },
    { letter: "ਖ਼", sound: "kha" },
    { letter: "ਗ਼", sound: "ga" },
    { letter: "ਜ਼", sound: "za" },
    { letter: "ਫ਼", sound: "fa" },
    { letter: "ਲ਼", sound: "la" },
  ],

  vowelSigns: [
    { letter: "ਾ", sound: "ā (kā)" },
    { letter: "ਿ", sound: "i (ki)" },
    { letter: "ੀ", sound: "ī (kī)" },
    { letter: "ੁ", sound: "u (ku)" },
    { letter: "ੂ", sound: "ū (kū)" },
    { letter: "ੇ", sound: "ē (kē)" },
    { letter: "ੈ", sound: "ai (kai)" },
    { letter: "ੋ", sound: "ō (kō)" },
    { letter: "ੌ", sound: "au (kau)" },
  ],

  symbols: [
    { letter: "ਂ", sound: "bindi (nasal sign)" },
    { letter: "ੰ", sound: "tippi (nasal sign)" },
    { letter: "ੱ", sound: "addak (gemination mark)" },
    { letter: "਼", sound: "pairī̃ bindī (nukta)" },
    { letter: "੍", sound: "virama" },
    { letter: "ਃ", sound: "visarga" },
  ],

  numerals: [
    { latin: "0", native: "੦" },
    { latin: "1", native: "੧" },
    { latin: "2", native: "੨" },
    { latin: "3", native: "੩" },
    { latin: "4", native: "੪" },
    { latin: "5", native: "੫" },
    { latin: "6", native: "੬" },
    { latin: "7", native: "੭" },
    { latin: "8", native: "੮" },
    { latin: "9", native: "੯" },
  ],
};
