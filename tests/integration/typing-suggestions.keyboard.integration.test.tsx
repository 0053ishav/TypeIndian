import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { languageRegistry } from "@/lib/languages/registry";
import TypingTool from "@/features/typing/components/TypingTool";

vi.mock("@/lib/transliteration/googleHttpTransliterate", () => ({
  fetchSuggestions: vi.fn().mockResolvedValue(["नमस्ते"]),
}));

describe("TypingTool suggestion keyboard interaction", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("accepts a focused suggestion with Enter after tabbing to it", async () => {
    const user = userEvent.setup();
    render(<TypingTool language={languageRegistry.hindi} />);

    const editor = screen.getByRole("textbox");
    await user.type(editor, "namaste");

    const suggestion = await screen.findByRole("button", { name: "नमस्ते" });
    await user.tab();

    expect(suggestion).toHaveFocus();

    await user.keyboard("{Enter}");

    await waitFor(() => {
      expect(editor).toHaveValue("नमस्ते ");
    });
  });
});
