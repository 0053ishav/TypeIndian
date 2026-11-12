const LANG_TO_ITC: Record<string, string> = {
  pa: "pa-t-i0-und",
  hi: "hi-t-i0-und",
  gu: "gu-t-i0-und",
  ta: "ta-t-i0-und",
  te: "te-t-i0-und",
  bn: "bn-t-i0-und",
  mr: "mr-t-i0-und",
  kn: "kn-t-i0-und",
  ml: "ml-t-i0-und",
  or: "or-t-i0-und",
  as: "as-t-i0-und",
  ur: "ur-t-i0-und",
  sa: "sa-t-i0-und",
  ne: "ne-t-i0-und",
};

const CACHE_TTL_MS = 5 * 60 * 1000;
const CACHE_MAX_ENTRIES = 500;
const suggestionCache = new Map<string, { suggestions: string[]; expiresAt: number }>();

function cacheSuggestions(key: string, suggestions: string[]) {
  if (suggestionCache.size >= CACHE_MAX_ENTRIES) {
    const oldestKey = suggestionCache.keys().next().value;
    if (oldestKey) suggestionCache.delete(oldestKey);
  }

  suggestionCache.set(key, {
    suggestions,
    expiresAt: Date.now() + CACHE_TTL_MS,
  });
}

export async function fetchSuggestions(
  word: string,
  langCode: string,
  max = 5,
  signal?: AbortSignal,
): Promise<string[]> {
  const normalizedWord = word.trim();
  const itc = LANG_TO_ITC[langCode];
  if (!itc || !normalizedWord) return [];
  if (signal?.aborted) {
    throw new DOMException("The request was aborted.", "AbortError");
  }

  const cacheKey = `${langCode}:${max}:${normalizedWord.toLocaleLowerCase()}`;
  const cached = suggestionCache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now()) {
    return [...cached.suggestions];
  }
  if (cached) suggestionCache.delete(cacheKey);

  const url = new URL("https://inputtools.google.com/request");
  url.searchParams.set("text", normalizedWord);
  url.searchParams.set("itc", itc);
  url.searchParams.set("num", String(max));
  url.searchParams.set("cp", "0");
  url.searchParams.set("cs", "0");
  url.searchParams.set("ie", "utf-8");
  url.searchParams.set("oe", "utf-8");
  url.searchParams.set("app", "demopage");

  const res = await fetch(url.toString(), { signal });
  if (!res.ok) {
    throw new Error(`Transliteration request failed (${res.status}).`);
  }
  const data: unknown = await res.json();

  // Google response format: ["SUCCESS", [[original, [s1, s2, ...]]]]
  if (!Array.isArray(data) || data[0] !== "SUCCESS") return [];

  const payload = data[1];
  const firstResult = Array.isArray(payload) ? payload[0] : undefined;
  const suggestions =
    Array.isArray(firstResult) && Array.isArray(firstResult[1])
      ? firstResult[1].filter((item): item is string => typeof item === "string")
      : [];

  cacheSuggestions(cacheKey, suggestions);
  return [...suggestions];
}
