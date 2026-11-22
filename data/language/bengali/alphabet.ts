import { Alphabet } from "@/types/alphabet";

export const bengaliAlphabet: Alphabet = {
  vowels: [
    { letter: "অ", sound: "ô" }, { letter: "আ", sound: "a" },
    { letter: "ই", sound: "i" }, { letter: "ঈ", sound: "ī" },
    { letter: "উ", sound: "u" }, { letter: "ঊ", sound: "ū" },
    { letter: "ঋ", sound: "ṛi" }, { letter: "এ", sound: "e" },
    { letter: "ঐ", sound: "oi" }, { letter: "ও", sound: "o" },
    { letter: "ঔ", sound: "ou" },
  ],
  consonants: [
    { letter: "ক", sound: "ko" }, { letter: "খ", sound: "kho" },
    { letter: "গ", sound: "go" }, { letter: "ঘ", sound: "gho" }, { letter: "ঙ", sound: "ṅo" },
    { letter: "চ", sound: "cho" }, { letter: "ছ", sound: "chho" }, { letter: "জ", sound: "jo" }, { letter: "ঝ", sound: "jho" }, { letter: "ঞ", sound: "ño" },
    { letter: "ট", sound: "ṭo" }, { letter: "ঠ", sound: "ṭho" }, { letter: "ড", sound: "ḍo" }, { letter: "ঢ", sound: "ḍho" }, { letter: "ণ", sound: "ṇo" },
    { letter: "ত", sound: "to" }, { letter: "থ", sound: "tho" }, { letter: "দ", sound: "do" }, { letter: "ধ", sound: "dho" }, { letter: "ন", sound: "no" },
    { letter: "প", sound: "po" }, { letter: "ফ", sound: "pho" }, { letter: "ব", sound: "bo" }, { letter: "ভ", sound: "bho" }, { letter: "ম", sound: "mo" },
    { letter: "য", sound: "jo/ẏo" }, { letter: "র", sound: "ro" }, { letter: "ল", sound: "lo" },
    { letter: "শ", sound: "sho" }, { letter: "ষ", sound: "ṣo" }, { letter: "স", sound: "so" }, { letter: "হ", sound: "ho" },
  ],
  extensions: [
    { letter: "ড়", sound: "ṛo" }, { letter: "ঢ়", sound: "ṛho" }, { letter: "য়", sound: "ẏo" },
  ],
  vowelSigns: [
    { letter: "া", sound: "a" }, { letter: "ি", sound: "i" }, { letter: "ী", sound: "ī" },
    { letter: "ু", sound: "u" }, { letter: "ূ", sound: "ū" }, { letter: "ৃ", sound: "ṛi" },
    { letter: "ে", sound: "e" }, { letter: "ৈ", sound: "oi" }, { letter: "ো", sound: "o" }, { letter: "ৌ", sound: "ou" },
  ],
  symbols: [
    { letter: "ঁ", sound: "candrabindu" }, { letter: "ং", sound: "anusvara" },
    { letter: "ঃ", sound: "visarga" }, { letter: "্", sound: "hasanta" },
    { letter: "ৎ", sound: "khanda ta" }, { letter: "়", sound: "nukta" },
  ],
  numerals: [
    { latin: "0", native: "০" }, { latin: "1", native: "১" }, { latin: "2", native: "২" },
    { latin: "3", native: "৩" }, { latin: "4", native: "৪" }, { latin: "5", native: "৫" },
    { latin: "6", native: "৬" }, { latin: "7", native: "৭" }, { latin: "8", native: "৮" }, { latin: "9", native: "৯" },
  ],
};
