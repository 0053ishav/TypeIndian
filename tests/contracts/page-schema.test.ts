import { describe, expect, it } from "vitest";

import { generatePageSchema } from "@/lib/seo/pageSchema";
import { SITE_URL } from "@/lib/config/site";

describe("Page schema contract", () => {
  it("uses the supplied Learn page URL and identity", () => {
    const schema = generatePageSchema({
      name: "Learn Hindi",
      description: "Learn the Hindi writing system.",
      path: "/learn/hindi",
    });

    expect(schema["@type"]).toBe("WebPage");
    expect(schema.url).toBe(`${SITE_URL}/learn/hindi`);
    expect(schema["@id"]).toBe(`${SITE_URL}/learn/hindi#webpage`);
    expect(schema.name).toBe("Learn Hindi");
  });

  it("supports collection pages", () => {
    const schema = generatePageSchema({
      name: "Learn",
      description: "Explore language lessons.",
      path: "/learn",
      type: "CollectionPage",
    });

    expect(schema["@type"]).toBe("CollectionPage");
    expect(schema.url).toBe(`${SITE_URL}/learn`);
  });
});
