import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { languageRegistry } from "@/lib/languages/registry";
import { fetchSuggestions } from "@/lib/transliteration/googleHttpTransliterate";
import TypingTool from "@/features/typing/components/TypingTool";

vi.mock("@/lib/transliteration/googleHttpTransliterate", () => ({
  fetchSuggestions: vi.fn().mockResolvedValue(["नमस्ते"]),
}));

describe("TypingTool keyboard and editor history", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.mocked(fetchSuggestions).mockClear();
  });

  it("accepts a focused suggestion with Enter after tabbing to it", async () => {
    const user = userEvent.setup();
    render(<TypingTool language={languageRegistry.hindi} />);

    const editor = screen.getByRole("combobox");
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

    const editor = screen.getByRole("combobox");
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

  it("dismisses suggestions with Escape without changing editor text", async () => {
    const user = userEvent.setup();
    render(<TypingTool language={languageRegistry.hindi} />);

    const editor = screen.getByRole("combobox");
    await user.type(editor, "namaste");
    await screen.findByRole("option", { name: "नमस्ते" });

    await user.keyboard("{Escape}");

    expect(editor).toHaveValue("namaste");
    expect(editor).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("option")).not.toBeInTheDocument();
  });

  it("groups consecutive typing into one undo step", async () => {
    const user = userEvent.setup();
    render(<TypingTool language={languageRegistry.hindi} />);

    const editor = screen.getByRole("combobox");
    await user.type(editor, "namaste");

    await user.keyboard("{Control>}z{/Control}");
    expect(editor).toHaveValue("");

    await user.keyboard("{Control>}{Shift>}z{/Shift}{/Control}");
    expect(editor).toHaveValue("namaste");
  });

  it("groups consecutive backspaces into one undo step", async () => {
    const user = userEvent.setup();
    render(<TypingTool language={languageRegistry.hindi} />);

    const editor = screen.getByRole("combobox");
    await user.type(editor, "namaste");
    await user.keyboard("{Backspace}{Backspace}{Backspace}");

    expect(editor).toHaveValue("nama");

    await user.keyboard("{Control>}z{/Control}");
    expect(editor).toHaveValue("namaste");
  });

  it("invalidates redo after undo followed by a new edit", async () => {
    const user = userEvent.setup();
    render(<TypingTool language={languageRegistry.hindi} />);

    const editor = screen.getByRole("combobox");
    await user.type(editor, "abc");
    await user.keyboard("{Control>}z{/Control}");
    expect(editor).toHaveValue("");

    await user.type(editor, "x");
    expect(editor).toHaveValue("x");

    await user.keyboard("{Control>}{Shift>}z{/Shift}{/Control}");
    expect(editor).toHaveValue("x");
  });

  it("undoes and redoes a replacement over the current selection", async () => {
    const user = userEvent.setup();
    render(<TypingTool language={languageRegistry.hindi} />);

    const editor = screen.getByRole("combobox") as HTMLTextAreaElement;
    await user.type(editor, "abcd");

    editor.focus();
    editor.setSelectionRange(1, 3);
    await user.keyboard("X");
    expect(editor).toHaveValue("aXd");

    await user.keyboard("{Control>}z{/Control}");
    expect(editor).toHaveValue("abcd");

    await user.keyboard("{Control>}{Shift>}z{/Shift}{/Control}");
    expect(editor).toHaveValue("aXd");
  });

  it("resets editor history when the selected language changes", async () => {
    const user = userEvent.setup();
    const { container, rerender } = render(
      <TypingTool language={languageRegistry.hindi} />,
    );

    const editor = screen.getByRole("combobox");
    await user.type(editor, "namaste");

    rerender(<TypingTool language={languageRegistry.urdu} />);

    await waitFor(() => {
      expect(editor).toHaveValue("");
    });

    const undoButtons = container.querySelectorAll<HTMLButtonElement>(
      'button[aria-label="Undo"]',
    );
    expect(undoButtons.length).toBeGreaterThan(0);
    expect([...undoButtons].every((button) => button.disabled)).toBe(true);
  });

  it("inserts an Urdu virtual-keyboard character at the current selection", async () => {
    const user = userEvent.setup();
    render(<TypingTool language={languageRegistry.urdu} />);

    const editor = screen.getByRole("combobox") as HTMLTextAreaElement;
    expect(editor).toHaveAttribute("dir", "rtl");
    await user.type(editor, "abcd");
    await waitFor(() => {
      expect(fetchSuggestions).toHaveBeenCalledTimes(1);
    });
    editor.setSelectionRange(2, 2);
    vi.mocked(fetchSuggestions).mockClear();

    await user.click(screen.getByText("Open virtual keyboard"));
    await user.click(await screen.findByRole("button", { name: "ا from a" }));

    await waitFor(() => {
      expect(editor).toHaveValue("abاcd");
    });
    expect(fetchSuggestions).not.toHaveBeenCalled();
  });

  it("preserves the cursor after inserting a multi-code-unit Gurmukhi cluster", async () => {
    const user = userEvent.setup();
    render(<TypingTool language={languageRegistry.panjabi} />);

    const editor = screen.getByRole("combobox") as HTMLTextAreaElement;
    await user.type(editor, "ਅx");
    editor.setSelectionRange(1, 1);

    await user.click(screen.getByText("Open virtual keyboard"));
    await user.click(screen.getByRole("button", { name: "AltGr" }));
    await user.click(await screen.findByRole("button", { name: "ਸ਼ from m" }));

    await waitFor(() => {
      expect(editor).toHaveValue("ਅਸ਼x");
    });
    await waitFor(() => {
      expect(editor.selectionStart).toBe("ਅਸ਼".length);
    });
  });

  it("uses the Devanagari InScript layout and inserts native text without transliteration", async () => {
    const user = userEvent.setup();
    render(<TypingTool language={languageRegistry.hindi} />);

    const editor = screen.getByRole("combobox") as HTMLTextAreaElement;
    await user.click(screen.getByText("Open virtual keyboard"));
    expect(screen.getByText(/BIS Enhanced InScript/)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Shift" }));
    await user.click(screen.getByRole("button", { name: "अ from d" }));
    expect(editor).toHaveValue("अ");
    expect(fetchSuggestions).not.toHaveBeenCalled();

    await user.click(screen.getByRole("button", { name: "Base" }));
    await user.click(screen.getByRole("button", { name: "क from k" }));
    await user.click(screen.getByRole("button", { name: "् from d" }));
    expect(editor).toHaveValue("अक्");

    await user.keyboard("{Control>}z{/Control}");
    expect(editor).toHaveValue("");
    await user.keyboard("{Control>}{Shift>}z{/Shift}{/Control}");
    expect(editor).toHaveValue("अक्");
  });

  it("selects the Gurmukhi-specific layer output and deletes a grapheme as one unit", async () => {
    const user = userEvent.setup();
    render(<TypingTool language={languageRegistry.panjabi} />);

    const editor = screen.getByRole("combobox") as HTMLTextAreaElement;
    await user.click(screen.getByText("Open virtual keyboard"));
    await user.click(screen.getByRole("button", { name: "AltGr" }));
    await user.click(screen.getByRole("button", { name: "ਸ਼ from m" }));
    expect(editor).toHaveValue("ਸ਼");

    await user.click(screen.getByRole("button", { name: "Backspace" }));
    expect(editor).toHaveValue("");
    expect(fetchSuggestions).not.toHaveBeenCalled();
  });

  it("does not let an in-flight paste overwrite a later undo", async () => {
    const user = userEvent.setup();
    render(<TypingTool language={languageRegistry.hindi} />);

    const editor = screen.getByRole("combobox");
    await user.type(editor, "abc");
    await screen.findByRole("option", { name: "नमस्ते" });

    let resolvePaste!: (suggestions: string[]) => void;
    const pendingPaste = new Promise<string[]>((resolve) => {
      resolvePaste = resolve;
    });

    vi.mocked(fetchSuggestions).mockClear();
    vi.mocked(fetchSuggestions).mockImplementationOnce(async () => pendingPaste);

    fireEvent.paste(editor, {
      clipboardData: {
        getData: (type: string) => (type === "text" ? "word" : ""),
      },
    });
    await waitFor(() => {
      expect(fetchSuggestions).toHaveBeenCalledTimes(1);
    });

    await user.keyboard("{Control>}z{/Control}");
    expect(editor).toHaveValue("");

    resolvePaste(["शब्द"]);
    await waitFor(() => {
      expect(editor).toHaveValue("");
    });
  });
});
