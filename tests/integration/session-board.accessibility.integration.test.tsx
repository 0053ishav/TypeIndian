import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import SessionBoard from "@/features/typing/components/SessionBoard";

describe("SessionBoard accessible reordering", () => {
  it("exposes move controls with boundary states and reorders by button", async () => {
    const user = userEvent.setup();
    const onReorder = vi.fn();

    render(
      <SessionBoard
        lines={["पहला वाक्य", "दूसरा वाक्य"]}
        direction="ltr"
        onUpdateLine={vi.fn()}
        onMoveToEditor={vi.fn()}
        onCopyLine={vi.fn()}
        onDeleteLine={vi.fn()}
        onCopyAll={vi.fn()}
        onDownloadAll={vi.fn()}
        onReorder={onReorder}
      />,
    );

    expect(
      screen.getByRole("button", { name: "Move sentence 1 up" }),
    ).toBeDisabled();
    expect(
      screen.getByRole("button", { name: "Move sentence 2 down" }),
    ).toBeDisabled();

    await user.click(
      screen.getByRole("button", { name: "Move sentence 2 up" }),
    );

    expect(onReorder).toHaveBeenCalledWith(1, 0);
  });
});
