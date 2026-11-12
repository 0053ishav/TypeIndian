import { describe, expect, it } from "vitest";

import { languageRegistry } from "@/lib/languages/registry";
import { getVirtualKeyboardLayout } from "@/features/typing/keyboard-layouts";

function output(languageId: keyof typeof languageRegistry, key: string, layer: "base" | "shift" | "altGr" | "altGrShift") {
  const layout = getVirtualKeyboardLayout(languageRegistry[languageId]);
  const button = layout.rows.flat().find((item) => item.code === key);
  return button?.outputs[layer];
}

describe("script-aware virtual keyboard layouts", () => {
  it("uses a shared Devanagari layout for Hindi, Marathi, Nepali and Sanskrit", () => {
    const ids = ["hindi", "marathi", "nepali", "sanskrit"] as const;
    ids.forEach((id) => {
      const layout = getVirtualKeyboardLayout(languageRegistry[id]);
      expect(layout.id).toBe("enhanced-inscript");
      expect(layout.standard).toContain("BIS Enhanced InScript");
      expect(output(id, "d", "shift")).toBe("अ");
      expect(output(id, "k", "base")).toBe("क");
    });
  });

  it("uses distinct native outputs for each Brahmic script", () => {
    expect(output("panjabi", "d", "shift")).toBe("ਅ");
    expect(output("panjabi", "x", "base")).toBe("ਂ");
    expect(output("gujarati", "d", "shift")).toBe("અ");
    expect(output("bengali", "d", "shift")).toBe("অ");
    expect(output("assamese", "j", "base")).toBe("ৰ");
    expect(output("tamil", "d", "shift")).toBe("அ");
    expect(output("telugu", "d", "shift")).toBe("అ");
    expect(output("kannada", "d", "shift")).toBe("ಅ");
    expect(output("malayalam", "d", "shift")).toBe("അ");
    expect(output("odia", "d", "shift")).toBe("ଅ");
  });

  it("uses a separate right-to-left Urdu phonetic layout", () => {
    const layout = getVirtualKeyboardLayout(languageRegistry.urdu);
    expect(layout.id).toBe("urdu-phonetic");
    expect(layout.direction).toBe("rtl");
    expect(layout.standard).toContain("m17n");
    expect(output("urdu", "q", "base")).toBe("ق");
    expect(output("urdu", "a", "base")).toBe("ا");
  });

  it("keeps alternate layers explicit instead of inventing missing keys", () => {
    expect(output("malayalam", "j", "altGr")).toBe("ർ");
    expect(output("malayalam", "n", "altGrShift")).toBe("ൾ");
    expect(output("tamil", "q", "altGr")).toBeUndefined();
  });
});
