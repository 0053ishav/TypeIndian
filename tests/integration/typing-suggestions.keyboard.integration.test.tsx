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

    const suggestion = await screen.findByRole("option", { name: "नमस्ते" });
    await user.tab();

    expect(suggestion).toHaveFocus();

    await user.keyboard("{Enter}");

    await waitFor(() => {
      expect(editor).toHaveValue("नमस्ते ");
    });
  });

  it("navigates suggestions with arrow keys and accepts the active option", async () => {
    const user = userEvent.setup();
    render(<TypingTool language={languageRegistry.hindi} />);

    const editor = screen.getByRole("textbox");
    await user.type(editor, "namaste");
    await screen.findByRole("option", { name: "नमस्ते" });

    await user.keyboard("{ArrowDown}");

    expect(editor).toHaveAttribute(
      "aria-activedescendant",
      "typing-suggestion-0",
    );

    await user.keyboard("{Enter}");

    await waitFor(() => {
      expect(editor).toHaveValue("नमस्ते ");
    });
  });

  it("supports undo and redo without losing the editor value", async () => {
    const user = userEvent.setup();
    render(<TypingTool language={languageRegistry.hindi} />);

    const editor = screen.getByRole("textbox");
    await user.type(editor, "ab");

    await user.keyboard("{Control>}z{/Control}");
    expect(editor).toHaveValue("a");

    await user.keyboard("{Control>}{Shift>}z{/Shift}{/Control}");
    expect(editor).toHaveValue("ab");
  });

  it("inserts an Urdu virtual-keyboard character at the current selection", async () => {
    const user = userEvent.setup();
    render(<TypingTool language={languageRegistry.urdu} />);

    const editor = screen.getByRole("textbox") as HTMLTextAreaElement;
    expect(editor).toHaveAttribute("dir", "rtl");
    await user.type(editor, "abcd");
    editor.setSelectionRange(2, 2);

    await user.click(screen.getByText("Open virtual keyboard"));
    await user.click(await screen.findByRole("button", { name: "ا a" }));

    await waitFor(() => {
      expect(editor).toHaveValue("abاcd");
    });
  });
});
