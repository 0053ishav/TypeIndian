import { describe, expect, it } from "vitest";

import { COMMON_FAQ } from "@/data/common/faq";

describe("Privacy FAQ accuracy", () => {
  it("discloses that transliteration text is sent to Google Input Tools", () => {
    const privacyQuestion = COMMON_FAQ.find((item) =>
      item.question.toLowerCase().includes("store or track")
    );

    expect(privacyQuestion).toBeDefined();
    expect(privacyQuestion?.answer).toContain("sent to Google Input Tools");
    expect(privacyQuestion?.answer).not.toContain("never sent");
  });
});
