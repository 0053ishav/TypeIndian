import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

const toastMock = vi.hoisted(() => ({
  success: vi.fn(),
  error: vi.fn(),
}));

vi.mock("sonner", () => ({ toast: toastMock }));
vi.mock("@/lib/typing/export", () => ({
  createTypingExport: vi.fn(),
}));
vi.mock("@/lib/transliteration/googleHttpTransliterate", () => ({
  fetchSuggestions: vi.fn().mockResolvedValue([]),
}));

import { createTypingExport } from "@/lib/typing/export";
import { languageRegistry } from "@/lib/languages/registry";
import ExportDropdown from "@/features/typing/components/ExportDropdown";
import TypingTool from "@/features/typing/components/TypingTool";

describe("typing editor export menu", () => {
  beforeEach(() => {
    vi.mocked(createTypingExport).mockReset();
    toastMock.success.mockReset();
    toastMock.error.mockReset();
  });

  it("supports arrow-key selection, Enter and focus restoration", async () => {
    const user = userEvent.setup();
    const onExport = vi.fn();
    render(<ExportDropdown disabled={false} onExport={onExport} />);

    const trigger = screen.getByRole("button", { name: /Export/ });
    await user.click(trigger);
    expect(screen.getByRole("menu")).toBeInTheDocument();

    await user.keyboard("{ArrowDown}");
    expect(screen.getByRole("menuitem", { name: /DOCX/ })).toHaveFocus();
    await user.keyboard("{Enter}");

    expect(onExport).toHaveBeenCalledWith("docx");
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it("closes on Escape and outside pointer interaction", async () => {
    const user = userEvent.setup();
    render(
      <div>
        <ExportDropdown disabled={false} onExport={vi.fn()} />
        <button type="button">Outside</button>
      </div>,
    );

    const trigger = screen.getByRole("button", { name: /Export/ });
    await user.click(trigger);
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();

    await user.click(trigger);
    await user.click(screen.getByRole("button", { name: "Outside" }));
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("opens the draggable virtual keyboard from the editor toolbar", async () => {
    const user = userEvent.setup();
    render(<TypingTool language={languageRegistry.hindi} />);

    const toggle = screen.getByRole("button", { name: "Virtual keyboard" });
    expect(toggle).toHaveAttribute("title", "Virtual keyboard");
    await user.click(toggle);

    expect(screen.getByRole("region", { name: /Hindi on-screen keyboard/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Close virtual keyboard" })).toBeInTheDocument();
    expect(screen.getByRole("group", { name: "Virtual typing keys" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: languageRegistry.hindi.labels.alphabet.title })).toBeInTheDocument();
  });

  it("disables export when the editor has no content", () => {
    render(<TypingTool language={languageRegistry.hindi} />);
    expect(screen.getByRole("button", { name: /Export/ })).toBeDisabled();
  });

  it("reports export generation failures to the user", async () => {
    const user = userEvent.setup();
    vi.mocked(createTypingExport).mockRejectedValueOnce(
      new Error("PDF export failed."),
    );
    render(<TypingTool language={languageRegistry.hindi} />);

    const editor = screen.getByRole("combobox");
    fireEvent.change(editor, { target: { value: "नमस्ते" } });

    await user.click(screen.getByRole("button", { name: /Export/ }));
    await user.click(screen.getByRole("menuitem", { name: /PDF/ }));

    await waitFor(() => {
      expect(toastMock.error).toHaveBeenCalledWith("PDF export failed.");
    });
  });
});
