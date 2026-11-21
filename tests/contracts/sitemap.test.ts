import { describe, expect, it } from "vitest";

import sitemap from "@/app/sitemap";
import { getLanguages } from "@/lib/languages/loader";
import { SITE_URL } from "@/lib/config/site";

describe("Sitemap contract", () => {
  it("includes the main public pages", () => {
    const urls = sitemap().map((entry) => entry.url);

    for (const path of [
      "/",
      "/about",
      "/privacy",
      "/terms",
      "/contact",
      "/typing",
      "/learn",
    ]) {
      expect(urls).toContain(path === "/" ? SITE_URL : `${SITE_URL}${path}`);
    }
  });

  it("includes every enabled language page", () => {
    const urls = new Set(sitemap().map((entry) => entry.url));

    for (const language of getLanguages()) {
      if (language.capabilities.typing) {
        expect(urls).toContain(`${SITE_URL}/typing/${language.slug}`);
      }

      if (language.capabilities.learn) {
        expect(urls).toContain(`${SITE_URL}/learn/${language.slug}`);
      }
    }
  });

  it("contains unique absolute URLs", () => {
    const urls = sitemap().map((entry) => entry.url);

    expect(new Set(urls).size).toBe(urls.length);

    for (const url of urls) {
      expect(new URL(url).origin).toBe(new URL(SITE_URL).origin);
    }
  });
});
