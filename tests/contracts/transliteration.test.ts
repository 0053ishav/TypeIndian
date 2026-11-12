import { afterEach, describe, expect, it, vi } from "vitest";

import { fetchSuggestions } from "@/lib/transliteration/googleHttpTransliterate";

describe("Google Input Tools suggestions", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("parses successful responses and caches repeated requests", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ["SUCCESS", [["typeindian-cache-test", ["हिन्दी", "हिंदी"]]]],
    });
    vi.stubGlobal("fetch", fetchMock);

    const first = await fetchSuggestions("typeindian-cache-test", "hi");
    const second = await fetchSuggestions("typeindian-cache-test", "hi");

    expect(first).toEqual(["हिन्दी", "हिंदी"]);
    expect(second).toEqual(first);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("passes an AbortSignal to the network request", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ["SUCCESS", [["typeindian-abort-test", ["नमस्ते"]]]],
    });
    vi.stubGlobal("fetch", fetchMock);
    const controller = new AbortController();

    await fetchSuggestions("typeindian-abort-test", "hi", 5, controller.signal);

    expect(fetchMock.mock.calls[0][1]).toMatchObject({ signal: controller.signal });
  });

  it("throws for unsuccessful HTTP responses", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 503 }));

    await expect(fetchSuggestions("typeindian-http-error-test", "hi"))
      .rejects.toThrow("503");
  });

  it("returns an empty list for unsupported languages", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    await expect(fetchSuggestions("hello", "xx")).resolves.toEqual([]);
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
