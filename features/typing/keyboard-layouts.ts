import type { Language } from "@/types/language";

export type KeyboardLayer = "base" | "shift" | "altGr" | "altGrShift";

export type VirtualKey = {
  code: string;
  label: string;
  outputs: Partial<Record<KeyboardLayer, string>>;
};

export type VirtualKeyboardLayout = {
  id: string;
  name: string;
  standard: string;
  direction: "ltr" | "rtl";
  rows: VirtualKey[][];
  layers: KeyboardLayer[];
  specialKeys?: {
    label: string;
    keys: { label: string; output: string }[];
  };
};

const ROWS = [
  ["\`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="],
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
  ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
] as const;

const SHIFTED: Record<string, string> = {
  "\`": "~", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%",
  "6": "^", "7": "&", "8": "*", "9": "(", "0": ")", "-": "_", "=": "+",
  "[": "{", "]": "}", "\\": "|", ";": ":", "'": '"', ",": "<", ".": ">", "/": "?",
};

const SHIFTED_PHYSICAL = Object.fromEntries(
  Object.entries(SHIFTED).map(([physical, shifted]) => [shifted, physical]),
);

const SIGNS: Record<string, Record<string, string>> = {
  hindi: { aa: "ा", i: "ि", ee: "ी", u: "ु", oo: "ू", ri: "ृ", e: "े", ai: "ै", o: "ो", au: "ौ", virama: "्", anusvara: "ं", candrabindu: "ँ", visarga: "ः", shortE: "ॆ", shortO: "ॉ" },
  marathi: { aa: "ा", i: "ि", ee: "ी", u: "ु", oo: "ू", ri: "ृ", e: "े", ai: "ै", o: "ो", au: "ौ", virama: "्", anusvara: "ं", candrabindu: "ँ", visarga: "ः" },
  nepali: { aa: "ा", i: "ि", ee: "ी", u: "ु", oo: "ू", ri: "ृ", e: "े", ai: "ै", o: "ो", au: "ौ", virama: "्", anusvara: "ं", candrabindu: "ँ", visarga: "ः" },
  sanskrit: { aa: "ा", i: "ि", ee: "ी", u: "ु", oo: "ू", ri: "ृ", e: "े", ai: "ै", o: "ो", au: "ौ", virama: "्", anusvara: "ं", candrabindu: "ँ", visarga: "ः" },
  panjabi: { aa: "ਾ", i: "ਿ", ee: "ੀ", u: "ੁ", oo: "ੂ", e: "ੇ", ai: "ੈ", o: "ੋ", au: "ੌ", virama: "੍", anusvara: "ਂ", tippi: "ੰ", addak: "ੱ" },
  gujarati: { aa: "ા", i: "િ", ee: "ી", u: "ુ", oo: "ૂ", ri: "ૃ", e: "ે", ai: "ૈ", o: "ો", au: "ૌ", virama: "્", anusvara: "ં", candrabindu: "ઁ", visarga: "ઃ", shortE: "ૅ", shortO: "ૉ" },
  bengali: { aa: "া", i: "ি", ee: "ী", u: "ু", oo: "ূ", ri: "ৃ", e: "ে", ai: "ৈ", o: "ো", au: "ৌ", virama: "্", anusvara: "ং", candrabindu: "ঁ", visarga: "ঃ" },
  assamese: { aa: "া", i: "ি", ee: "ী", u: "ু", oo: "ূ", ri: "ৃ", e: "ে", ai: "ৈ", o: "ো", au: "ৌ", virama: "্", anusvara: "ং", candrabindu: "ঁ", visarga: "ঃ" },
  tamil: { aa: "ா", i: "ி", ee: "ீ", u: "ு", oo: "ூ", e: "ே", ai: "ை", o: "ோ", au: "ௌ", virama: "்", visarga: "ஃ", shortE: "ெ", shortO: "ொ" },
  telugu: { aa: "ా", i: "ి", ee: "ీ", u: "ు", oo: "ూ", ri: "ృ", e: "ే", ai: "ై", o: "ో", au: "ౌ", virama: "్", anusvara: "ం", candrabindu: "ఁ", visarga: "ః", shortE: "ె", shortO: "ొ" },
  kannada: { aa: "ಾ", i: "ಿ", ee: "ೀ", u: "ು", oo: "ೂ", ri: "ೃ", e: "ೇ", ai: "ೈ", o: "ೋ", au: "ೌ", virama: "್", anusvara: "ಂ", visarga: "ಃ", shortE: "ೆ", shortO: "ೊ" },
  malayalam: { aa: "ാ", i: "ി", ee: "ീ", u: "ു", oo: "ൂ", ri: "ൃ", e: "േ", ai: "ൈ", o: "ോ", au: "ൗ", virama: "്", anusvara: "ം", visarga: "ഃ", shortE: "െ", shortO: "ൊ" },
  odia: { aa: "ା", i: "ି", ee: "ୀ", u: "ୁ", oo: "ୂ", ri: "ୃ", e: "େ", ai: "ୈ", o: "ୋ", au: "ୌ", virama: "୍", anusvara: "ଂ", candrabindu: "ଁ", visarga: "ଃ" },
};

const VOWEL_TOKENS: Record<string, string[]> = {
  hindi: ["D", "E", "F", "R", "G", "T", "+", "S", "W", "A", "Q", "x", "_"],
  marathi: ["D", "E", "F", "R", "G", "T", "+", "", "", "", "S", "W", "A", "Q", "x", "_"],
  nepali: ["D", "E", "F", "R", "G", "T", "+", "S", "W", "A", "Q"],
  sanskrit: ["D", "E", "F", "R", "G", "T", "+", "", "", "", "S", "W", "A", "Q"],
  panjabi: ["D", "E", "F", "R", "G", "T", "S", "W", "A", "Q"],
  gujarati: ["D", "E", "F", "R", "G", "T", "+", "S", "W", "A", "Q", "x", "_", "!"],
  bengali: ["D", "E", "F", "R", "G", "T", "+", "S", "W", "A", "Q"],
  assamese: ["D", "E", "F", "R", "G", "T", "+", "S", "W", "A", "Q"],
  tamil: ["D", "E", "F", "R", "G", "T", "Z", "S", "W", "~", "A", "Q"],
  telugu: ["D", "E", "F", "R", "G", "T", "+", "", "", "", "Z", "S", "W", "~", "A", "Q"],
  kannada: ["D", "E", "F", "R", "G", "T", "+", "", "", "", "Z", "S", "W", "~", "A", "Q"],
  malayalam: ["D", "E", "F", "R", "G", "T", "+", "", "", "", "Z", "S", "W", "~", "A", "Q"],
  odia: ["D", "E", "F", "R", "G", "T", "+", "", "", "", "S", "W", "A", "Q"],
};

const SOUND_KEYS: Record<string, string> = {
  ka: "k", kha: "K", ga: "i", gha: "I", nga: "U", "ṅa": "U",
  cha: ";", chha: ":", ca: ";", ja: "p", jha: "P", nya: "}", "ña": "}",
  "ṭa": "'", "ṭha": '"', "ḍa": "[", "ḍha": "{", "ṇa": "C",
  ta: "l", tha: "L", da: "o", dha: "O", na: "v",
  pa: "h", pha: "H", ba: "y", bha: "Y", ma: "c",
  ya: "/", ra: "j", la: "n", va: "b",
  sha: "M", "śa": "M", "ṣha": "<", "ṣa": "<", sa: "m", ha: "u",
  "ḷa": "N", "zha": "B", "ṟa": "J", "ṉa": "V",
};

const URDU_BASE: Record<string, string> = {
  "\`": "ٍ", q: "ق", w: "و", e: "ع", r: "ر", t: "ت", y: "ے", u: "ئ", i: "ی", o: "ہ", p: "پ",
  a: "ا", s: "س", d: "د", f: "ف", g: "گ", h: "ھ", j: "ج", k: "ک", l: "ل",
  z: "ز", x: "ش", c: "چ", v: "ط", b: "ب", n: "ن", m: "م",
  "-": "أ", "=": "ۤ", "[": "ٌ", "]": "ْ", ";": "؛", ",": "،", ".": "۔", "\\": "؎",
};

const URDU_SHIFT: Record<string, string> = {
  q: "ﷺ", w: "ؤ", e: "ؑ", r: "ڑ", t: "ٹ", y: "؁", u: "ء", i: "ٰ", o: "ۃ", p: "ُ",
  a: "آ", s: "ص", d: "ڈ", f: "ٖ", g: "غ", h: "ح", j: "ض", k: "خ", l: "ؓ",
  z: "ذ", x: "ژ", c: "ث", v: "ظ", b: "ؒ", n: "ں", m: "ؐ",
  "\`": "ً", "6": "ۂ", "9": ")", "0": "(", "-": "ـ", "=": "ٓ",
  "[": "ٗ", "]": "ّ", ";": ":", ",": "ِ", ".": "َ", "/": "؟", "\\": "ؔ",
};

const NUKTA: Record<string, { token: string; output: string }> = {
  hindi: { token: "]", output: "़" },
  marathi: { token: "]", output: "़" },
  nepali: { token: "]", output: "़" },
  sanskrit: { token: "]", output: "़" },
  panjabi: { token: "]", output: "਼" },
  gujarati: { token: "}", output: "઼" },
  bengali: { token: "]", output: "়" },
  assamese: { token: "]", output: "়" },
  odia: { token: "]", output: "଼" },
};

const CONJUNCTS: Record<string, Record<string, string>> = {
  hindi: { "#": "्र", "$": "र्", "%": "ज्ञ", "^": "त्र", "&": "क्ष", "*": "श्र" },
  marathi: { "#": "्र", "$": "र्", "%": "ज्ञ", "^": "त्र", "&": "क्ष", "*": "श्र" },
  nepali: { "#": "्र", "$": "र्", "%": "ज्ञ", "^": "त्र", "&": "क्ष", "*": "श्र" },
  sanskrit: { "#": "्र", "$": "र्", "%": "ज्ञ", "^": "त्र", "&": "क्ष", "*": "श्र" },
  gujarati: { "#": "્ર", "$": "ર્", "%": "જ્ઞ", "^": "ત્ર", "&": "ક્ષ", "*": "શ્ર" },
  bengali: { "#": "্র", "$": "র্", "%": "জ্ঞ", "^": "ত্র", "&": "ক্ষ", "*": "শ্র" },
  assamese: { "#": "্ৰ", "$": "ৰ্", "%": "জ্ঞ", "^": "ত্ৰ", "&": "ক্ষ", "*": "শ্ৰ" },
  tamil: { "&": "க்ஷ", "*": "ஷ்ர" },
  telugu: { "#": "్ర", "$": "ర్", "%": "జ్ఞ", "^": "త్ర", "&": "క్ష", "*": "శ్ర" },
  kannada: { "#": "್ರ", "$": "ರ್", "%": "ಜ್ಞ", "^": "ತ್ರ", "&": "ಕ್ಷ", "*": "ಶ್ರ" },
};

function tokenTarget(token: string): { key: string; layer: "base" | "shift" } {
  if (SHIFTED_PHYSICAL[token]) return { key: SHIFTED_PHYSICAL[token], layer: "shift" };
  if (/^[A-Z]$/.test(token)) return { key: token.toLowerCase(), layer: "shift" };
  return { key: token, layer: "base" };
}

function addToken(
  outputs: Record<KeyboardLayer, Record<string, string>>,
  token: string,
  value: string,
) {
  if (!token || !value) return;
  const target = tokenTarget(token);
  outputs[target.layer][target.key] = value;
}

function vowelTokensFor(languageId: string) {
  return VOWEL_TOKENS[languageId] ?? VOWEL_TOKENS.hindi;
}

function consonantToken(languageId: string, sound: string) {
  if (languageId === "nepali" || languageId === "sanskrit") {
    if (sound === "ca") return ";";
    if (sound === "cha") return ":";
    if (sound === "ña") return "}";
    if (sound === "ṅa") return "U";
  }

  if (languageId === "bengali" || languageId === "assamese") {
    if (sound === "ya") return "?";
    if (sound === "ẏa") return "/";
  }

  if (languageId === "odia") {
    if (sound === "ya") return "?";
    if (sound === "wa") return "/";
  }

  if (languageId === "panjabi" && sound === "ṛa") return "J";

  return SOUND_KEYS[sound];
}

export function getVirtualKeyboardLayout(language: Language): VirtualKeyboardLayout {
  const outputs: Record<KeyboardLayer, Record<string, string>> = {
    base: {}, shift: {}, altGr: {}, altGrShift: {},
  };

  if (language.id === "urdu") {
    Object.entries(URDU_BASE).forEach(([key, value]) => {
      outputs.base[key] = value;
    });
    Object.entries(URDU_SHIFT).forEach(([key, value]) => {
      outputs.shift[key] = value;
    });
  } else {
    language.alphabet.vowels.forEach(({ letter }, index) => {
      addToken(outputs, vowelTokensFor(language.id)[index] ?? "", letter);
    });

    const signs = SIGNS[language.id] ?? {};
    const signTokens: Record<string, string> = {
      aa: "e", i: "f", ee: "r", u: "g", oo: "t", ri: "=",
      e: "s", ai: "w", o: "a", au: "q", virama: "d",
      anusvara: "x", candrabindu: "X",
    };

    const shortOKey = ["tamil", "telugu", "kannada", "malayalam"].includes(language.id)
      ? "\`"
      : "\\";
    if (signs.shortE) signTokens.shortE = "z";
    if (signs.shortO) signTokens.shortO = shortOKey;
    if (signs.visarga) {
      signTokens.visarga = language.id === "telugu" ? "-" : "_";
    }

    Object.entries(signTokens).forEach(([name, token]) => {
      const value = signs[name];
      if (value) addToken(outputs, token, value);
    });

    language.alphabet.consonants.forEach(({ letter, sound }) => {
      const token = consonantToken(language.id, sound);
      if (token) addToken(outputs, token, letter);
    });

    // Tamil's Grantha letters are direct InScript outputs, not nukta combinations.
    if (language.id === "tamil") {
      language.alphabet.extensions?.forEach(({ letter, sound }) => {
        const token = consonantToken(language.id, sound);
        if (token) addToken(outputs, token, letter);
      });
    }

    const nukta = NUKTA[language.id];
    if (nukta) addToken(outputs, nukta.token, nukta.output);

    if (language.id === "panjabi") {
      addToken(outputs, "x", "ਜ਼");
      addToken(outputs, "X", "ਫ਼");
      addToken(outputs, "z", "ੰ");
      addToken(outputs, "Z", "ੱ");
      addToken(outputs, "V", "ਂ");
      addToken(outputs, "<", "ੳ");
      addToken(outputs, ">", "ੲ");
    }

    if (language.id === "bengali" || language.id === "assamese") {
      addToken(outputs, "J", "ৎ");
      addToken(outputs, "z", "ʼ");
    }

    if (language.id === "hindi") {
      addToken(outputs, "\\", "ॉ");
      addToken(outputs, "|", "ऑ");
    }

    if (language.id === "gujarati") {
      addToken(outputs, "\\", "ૉ");
      addToken(outputs, "|", "ઑ");
    }

    Object.entries(CONJUNCTS[language.id] ?? {}).forEach(([token, value]) => {
      addToken(outputs, token, value);
    });

    // Standard InScript number-row mappings use the language's own numeral set.
    language.alphabet.numerals.forEach(({ latin, native }) => {
      addToken(outputs, latin, native);
    });
  }

  const rows = ROWS.map((row) => row.map((code) => ({
    code,
    label: code,
    outputs: {
      base: outputs.base[code],
      shift: outputs.shift[code] ?? outputs.shift[SHIFTED[code] ?? code.toUpperCase()],
      altGr: outputs.altGr[code],
      altGrShift: outputs.altGrShift[code] ?? outputs.altGrShift[SHIFTED[code] ?? code.toUpperCase()],
    },
  })));

  const layers: KeyboardLayer[] = ["base", "shift"];
  if (Object.keys(outputs.altGr).length) layers.push("altGr");
  if (Object.keys(outputs.altGrShift).length) layers.push("altGrShift");

  return {
    id: language.id === "urdu" ? "urdu-phonetic" : "enhanced-inscript",
    name: language.id === "urdu" ? "Urdu Phonetic" : "Enhanced InScript",
    standard: language.id === "urdu"
      ? "m17n Urdu Phonetic input convention"
      : "BIS Enhanced InScript (IS 16350:2016)",
    direction: language.direction,
    rows,
    layers,
    specialKeys: language.id === "malayalam"
      ? {
          label: "Chillu letters",
          keys: [
            { label: "ൺ", output: "ൺ" },
            { label: "ൻ", output: "ൻ" },
            { label: "ർ", output: "ർ" },
            { label: "ൽ", output: "ൽ" },
            { label: "ൾ", output: "ൾ" },
            { label: "ൿ", output: "ൿ" },
          ],
        }
      : undefined,
  };
}
