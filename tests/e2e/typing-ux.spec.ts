import { expect, test } from "@playwright/test";

test("typing page stays usable across supported responsive widths", async ({
  page,
}) => {
  await page.goto("/typing/hindi");

  const editor = page.getByRole("combobox", {
    name: "Typing input for Hindi",
  });
  await expect(editor).toBeVisible();

  for (const width of [320, 360, 390, 430, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });

    await expect
      .poll(() =>
        page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      )
      .toBe(true);
  }
});

test("mobile editor exposes undo, redo, and a cursor-aware virtual keyboard", async ({
  page,
}) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/typing/hindi");

  const editor = page.getByRole("combobox", {
    name: "Typing input for Hindi",
  });
  await editor.fill("namaste");

  await page.getByRole("button", { name: "Undo" }).click();
  await expect(editor).toHaveValue("");

  await page.getByRole("button", { name: "Redo" }).click();
  await expect(editor).toHaveValue("namaste");

  await editor.fill("");
  await page.getByText("Open virtual keyboard").click();
  await page.getByRole("button", { name: "अ a" }).click();
  await expect(editor).toHaveValue("अ");

  const download = page.waitForEvent("download");
  await page.getByRole("button", { name: "Download text file" }).click();
  expect((await download).suggestedFilename()).toMatch(/hindi-typing-.*\.txt/);
});

test("Urdu virtual keyboard inserts native text in an RTL editor", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/typing/urdu");

  const editor = page.getByRole("combobox", {
    name: "Typing input for Urdu",
  });
  await expect(editor).toHaveAttribute("dir", "rtl");

  await page.getByText("Open virtual keyboard").click();
  await page.getByRole("button", { name: /ا/ }).first().click();

  await expect(editor).toHaveValue("ا");
});
