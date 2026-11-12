import type { Language } from "@/types/language";

export type KeyboardLayer = "base" | "shift" | "altGr" | "altGrShift";

export type VirtualKey = {
  code: string;
  label: string;
  width?: "wide" | "space" | "enter";
  outputs: Partial<Record<KeyboardLayer, string>>;
};

export type VirtualKeyboardLayout = {
  id: string;
  name: string;
  standard: string;
  direction: "ltr" | "rtl";
  rows: VirtualKey[][];
  layers: KeyboardLayer[];
};

const ROWS = [
  ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="],
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
  ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
] as const;

const SHIFTED: Record<string, string> = {
  "`": "~", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%",
  "6": "^", "7": "&", "8": "*", "9": "(", "0": ")", "-": "_", "=": "+",
  "[": "{", "]": "}", "\\": "|", ";": ":", "'": '"', ",": "<", ".": ">", "/": "?",
};

const VOWEL_KEYS: Record<string, string> = {
  a: "d", aa: "e", "ā": "e", i: "f", ee: "r", "ī": "r",
  u: "g", oo: "t", "ū": "t", ri: "=", ru: "=", "r̥": "=",
  e: "s", ai: "w", o: "a", au: "q",
};

const SIGNS: Record<string, Record<string, string>> = {
  hindi: { aa: "ा", i: "ि", ee: "ी", u: "ु", oo: "ू", ri: "ृ", e: "े", ai: "ै", o: "ो", au: "ौ", virama: "्", anusvara: "ं", candrabindu: "ँ", visarga: "ः", shortE: "ॆ", shortO: "ॉ" },
  marathi: { aa: "ा", i: "ि", ee: "ी", u: "ु", oo: "ू", ri: "ृ", e: "े", ai: "ै", o: "ो", au: "ौ", virama: "्", anusvara: "ं", candrabindu: "ँ", visarga: "ः" },
  nepali: { aa: "ा", i: "ि", ee: "ी", u: "ु", oo: "ू", ri: "ृ", e: "े", ai: "ै", o: "ो", au: "ौ", virama: "्", anusvara: "ं", candrabindu: "ँ", visarga: "ः" },
  sanskrit: { aa: "ा", i: "ि", ee: "ी", u: "ु", oo: "ू", ri: "ृ", e: "े", ai: "ै", o: "ो", au: "ौ", virama: "्", anusvara: "ं", candrabindu: "ँ", visarga: "ः" },
  panjabi: { aa: "ਾ", i: "ਿ", ee: "ੀ", u: "ੁ", oo: "ੂ", e: "ੇ", ai: "ੈ", o: "ੋ", au: "ੌ", virama: "੍", anusvara: "ਂ", tippi: "ੰ", addak: "ੱ", visarga: "ਃ" },
  gujarati: { aa: "ા", i: "િ", ee: "ી", u: "ુ", oo: "ૂ", ri: "ૃ", e: "ે", ai: "ૈ", o: "ો", au: "ૌ", virama: "્", anusvara: "ં", candrabindu: "ઁ", visarga: "ઃ", shortE: "ૅ", shortO: "ૉ" },
  bengali: { aa: "া", i: "ি", ee: "ী", u: "ু", oo: "ূ", ri: "ৃ", e: "ে", ai: "ৈ", o: "ো", au: "ৌ", virama: "্", anusvara: "ং", candrabindu: "ঁ", visarga: "ঃ" },
  assamese: { aa: "া", i: "ি", ee: "ী", u: "ু", oo: "ূ", ri: "ৃ", e: "ে", ai: "ৈ", o: "ো", au: "ৌ", virama: "্", anusvara: "ং", candrabindu: "ঁ", visarga: "ঃ" },
  tamil: { aa: "ா", i: "ி", ee: "ீ", u: "ு", oo: "ூ", e: "ே", ai: "ை", o: "ோ", au: "ௌ", virama: "்", visarga: "ஃ", shortE: "ெ", shortO: "ொ" },
  telugu: { aa: "ా", i: "ి", ee: "ీ", u: "ు", oo: "ూ", ri: "ృ", e: "ే", ai: "ై", o: "ో", au: "ౌ", virama: "్", anusvara: "ం", candrabindu: "ఁ", visarga: "ః", shortE: "ె", shortO: "ొ" },
  kannada: { aa: "ಾ", i: "ಿ", ee: "ೀ", u: "ು", oo: "ೂ", ri: "ೃ", e: "ೇ", ai: "ೈ", o: "ೋ", au: "ೌ", virama: "್", anusvara: "ಂ", visarga: "ಃ", shortE: "ೆ", shortO: "ೊ" },
  malayalam: { aa: "ാ", i: "ി", ee: "ീ", u: "ു", oo: "ൂ", ri: "ൃ", e: "േ", ai: "ൈ", o: "ോ", au: "ൗ", virama: "്", anusvara: "ം", visarga: "ഃ", shortE: "െ", shortO: "ൊ" },
  odia: { aa: "ା", i: "ି", ee: "ୀ", u: "ୁ", oo: "ୂ", ri: "ୃ", e: "େ", ai: "ୈ", o: "ୋ", au: "ୌ", virama: "୍", anusvara: "ଂ", candrabindu: "ଁ", visarga: "ଃ" },
};

const URDU_BASE: Record<string, string> = {
  q: "ق", w: "و", e: "ع", r: "ر", t: "ت", y: "ے", u: "ئ", i: "ی", o: "ہ", p: "پ",
  a: "ا", s: "س", d: "د", f: "ف", g: "گ", h: "ھ", j: "ج", k: "ک", l: "ل",
  z: "ز", x: "ش", c: "چ", v: "ط", b: "ب", n: "ن", m: "م",
};
const URDU_SHIFT: Record<string, string> = {
  q: "ﷺ", w: "ؤ", e: "ؑ", r: "ڑ", t: "ٹ", y: "؀", u: "ء", i: "ٰ", o: "ۃ", p: "ُ",
  a: "آ", s: "ص", d: "ڈ", f: "ٖ", g: "غ", h: "ح", j: "ض", k: "خ", l: "ؓ",
  z: "ذ", x: "ژ", c: "ث", v: "ظ", b: "ؒ", n: "ں", m: "ؐ",
  "[": "ٌ", "]": "ْ", ";": "؛", ",": "،", ".": "۔", "/": "؟", "-": "أ", "=": "ٓ",
};

function add(
  target: Record<KeyboardLayer, Record<string, string>>,
  key: string,
  layer: KeyboardLayer,
  output: string,
) {
  if (output) target[layer][key] = output;
}

export function getVirtualKeyboardLayout(language: Language): VirtualKeyboardLayout {
  const outputs: Record<KeyboardLayer, Record<string, string>> = {
    base: {}, shift: {}, altGr: {}, altGrShift: {},
  };

  if (language.id === "urdu") {
    Object.entries(URDU_BASE).forEach(([key, value]) => add(outputs, key, "base", value));
    Object.entries(URDU_SHIFT).forEach(([key, value]) => add(outputs, key, "shift", value));
  } else {
    const sign = SIGNS[language.id] ?? {};
    const signKeys: Record<string, string> = {
      q: "au", w: "ai", e: "aa", r: "ee", t: "oo", a: "o", s: "e",
      d: "virama", f: "i", g: "u", x: language.id === "panjabi" ? "anusvara" : "anusvara",
      "-": "visarga", z: "shortE", "`": "shortO",
    };
    Object.entries(signKeys).forEach(([key, name]) => {
      if (sign[name]) add(outputs, key, "base", sign[name]);
    });
    if (sign.candrabindu) add(outputs, "x", "shift", sign.candrabindu);
    if (sign.tippi) add(outputs, "x", "shift", sign.tippi);
    if (sign.addak) add(outputs, "3", "shift", sign.addak);

    const vowelKeys: Record<string, string> = {
      q: "au", w: "ai", e: "aa", r: "ee", t: "oo", a: "o", s: "e",
      d: "a", f: "i", g: "u", "=": "ri", z: "shortE", "`": "shortO",
    };
    language.alphabet.vowels.forEach(({ letter, sound }) => {
      const key = VOWEL_KEYS[sound];
      if (key) add(outputs, key, "shift", letter);
    });
    Object.entries(vowelKeys).forEach(([key, name]) => {
      const independent = language.alphabet.vowels.find((v) => {
        const normalized = v.sound.toLowerCase();
        return name === "a" ? normalized === "a" :
          name === "aa" ? normalized === "aa" || normalized === "ā" :
          name === "i" ? normalized === "i" :
          name === "ee" ? normalized === "ee" || normalized === "ī" :
          name === "u" ? normalized === "u" :
          name === "oo" ? normalized === "oo" || normalized === "ū" :
          name === "ri" ? ["ri", "ru", "r̥"].includes(normalized) :
          name === "e" ? normalized === "e" :
          name === "ai" ? normalized === "ai" :
          name === "o" ? normalized === "o" :
          name === "au" ? normalized === "au" : false;
      });
      if (independent) add(outputs, key, "shift", independent.letter);
    });

    const assignConsonant = (sound: string, letter: string, layer: "base" | "shift" | "altGr") => {
      const mapping = SOUND_KEYS[sound];
      if (!mapping) return;
      add(outputs, mapping.key, layer === "altGr" ? "altGr" : mapping.layer, letter);
    };

    language.alphabet.consonants.forEach(({ letter, sound }) => assignConsonant(sound, letter, "base"));
    language.alphabet.extensions?.forEach(({ letter, sound }) => assignConsonant(sound, letter, "altGr"));

    // Script-specific marks and letters which are not part of the alphabet chart.
    if (language.id === "panjabi") {
      add(outputs, "x", "base", "ਂ");
      add(outputs, "x", "shift", "ੰ");
      add(outputs, "3", "shift", "ੱ");
      add(outputs, "g", "altGrShift", "ੲ");
      add(outputs, "f", "altGrShift", "ੳ");
    }
    if (language.id === "malayalam") {
      add(outputs, "v", "shift", "ൻ");
      add(outputs, "x", "shift", "ൺ");
      add(outputs, ">", "shift", "ൽ");
      add(outputs, "j", "altGr", "ർ");
      add(outputs, "n", "altGrShift", "ൾ");
      add(outputs, "k", "altGr", "ൿ");
    }
    if (language.id === "odia") {
      delete outputs.base.b;
      add(outputs, "b", "altGr", "ୱ");
    }

    const conjuncts: Record<string, Record<string, string>> = {
      hindi: { "3": "्र", "4": "र्", "5": "ज्ञ", "6": "त्र", "7": "क्ष", "8": "श्र" },
      marathi: { "3": "्र", "4": "र्", "5": "ज्ञ", "6": "त्र", "7": "क्ष", "8": "श्र" },
      nepali: { "3": "्र", "4": "र्", "5": "ज्ञ", "6": "त्र", "7": "क्ष", "8": "श्र" },
      sanskrit: { "3": "्र", "4": "र्", "5": "ज्ञ", "6": "त्र", "7": "क्ष", "8": "श्र" },
      gujarati: { "3": "્ર", "4": "ર્", "5": "જ્ઞ", "6": "ત્ર", "7": "ક્ષ", "8": "શ્ર" },
      bengali: { "3": "্র", "4": "র্", "5": "জ্ঞ", "6": "ত্র", "7": "ক্ষ", "8": "শ্র" },
      assamese: { "3": "্ৰ", "4": "ৰ্", "5": "জ্ঞ", "6": "ত্ৰ", "7": "ক্ষ", "8": "শ্ৰ" },
      telugu: { "4": "ర్", "5": "జ్ఞ", "6": "త్ర", "7": "క్ష", "8": "శ్ర" },
      kannada: { "4": "ರ್", "5": "ಜ್ಞ", "6": "ತ್ರ", "7": "ಕ್ಷ", "8": "ಶ್ರ" },
      odia: { "3": "୍ର", "4": "ର୍", "5": "ଜ୍ଞ", "6": "ତ୍ର", "7": "କ୍ଷ", "8": "ଶ୍ର" },
      tamil: { "7": "க்ஷ", "8": "ஷ்ர" },
    };
    Object.entries(conjuncts[language.id] ?? {}).forEach(([key, value]) => {
      add(outputs, key, "shift", value);
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
    standard: language.id === "urdu" ? "m17n Urdu Phonetic input convention" : "BIS Enhanced InScript (IS 16350:2016)",
    direction: language.direction,
    rows,
    layers,
  };
}

const SOUND_KEYS: Record<string, { key: string; layer: "base" | "shift" }> = {
  ka: { key: "k", layer: "base" }, kha: { key: "k", layer: "shift" },
  ga: { key: "i", layer: "base" }, gha: { key: "i", layer: "shift" },
  nga: { key: "u", layer: "shift" }, "ṅa": { key: "u", layer: "shift" },
  cha: { key: ";", layer: "base" }, ca: { key: ";", layer: "base" },
  chha: { key: ";", layer: "shift" }, ja: { key: "p", layer: "base" },
  jha: { key: "p", layer: "shift" }, nya: { key: "]", layer: "shift" }, "ña": { key: "]", layer: "shift" },
  "ṭa": { key: "'", layer: "base" }, "ṭha": { key: "'", layer: "shift" },
  "ḍa": { key: "[", layer: "base" }, "ḍha": { key: "[", layer: "shift" }, "ṇa": { key: "c", layer: "shift" },
  ta: { key: "l", layer: "base" }, tha: { key: "l", layer: "shift" }, da: { key: "o", layer: "base" }, dha: { key: "o", layer: "shift" }, na: { key: "v", layer: "base" },
  pa: { key: "h", layer: "base" }, pha: { key: "h", layer: "shift" }, ba: { key: "y", layer: "base" }, bha: { key: "y", layer: "shift" }, ma: { key: "c", layer: "base" },
  ya: { key: "/", layer: "base" }, ra: { key: "j", layer: "base" }, la: { key: "n", layer: "base" }, va: { key: "b", layer: "base" }, wa: { key: "b", layer: "base" },
  sha: { key: "m", layer: "shift" }, "śa": { key: "m", layer: "shift" }, "ṣha": { key: ",", layer: "shift" }, "ṣa": { key: ",", layer: "shift" },
  sa: { key: "m", layer: "base" }, ha: { key: "u", layer: "base" }, "ḷa": { key: "n", layer: "shift" }, "zha": { key: "b", layer: "shift" }, "ṟa": { key: "j", layer: "shift" }, "ṉa": { key: "v", layer: "shift" }, "ṛa": { key: "j", layer: "shift" }, "ṛha": { key: "[", layer: "shift" },
};
