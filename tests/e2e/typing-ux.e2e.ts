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

    const dimensions = await page.evaluate(() => {
      const overflowingElements = Array.from(
        document.querySelectorAll<HTMLElement>("body *"),
      )
        .map((element) => {
          const rect = element.getBoundingClientRect();

          return {
            tag: element.tagName,
            className:
              typeof element.className === "string" ? element.className : "",
            text: element.textContent?.trim().slice(0, 48) ?? "",
            left: Math.round(rect.left),
            right: Math.round(rect.right),
            width: Math.round(rect.width),
          };
        })
        .filter(
          (element) =>
            element.right > window.innerWidth + 1 || element.left < -1,
        )
        .slice(0, 12);

      return {
        viewport: window.innerWidth,
        documentWidth: document.documentElement.scrollWidth,
        bodyWidth: document.body.scrollWidth,
        overflowingElements,
      };
    });

    expect(
      dimensions.documentWidth,
      `Horizontal overflow at ${width}px: ${JSON.stringify(dimensions)}`,
    ).toBeLessThanOrEqual(width);
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
  await page.getByRole("button", { name: "Virtual keyboard" }).click();
  const floatingKeyboard = page.getByRole("region", { name: "Hindi on-screen keyboard" });
  const dragHandle = page.locator('[title="Drag to move keyboard"]');
  const beforeDrag = await floatingKeyboard.boundingBox();
  const handleBox = await dragHandle.boundingBox();
  expect(beforeDrag).not.toBeNull();
  expect(handleBox).not.toBeNull();
  await page.mouse.move(handleBox!.x + handleBox!.width / 2, handleBox!.y + handleBox!.height / 2);
  await page.mouse.down();
  await page.mouse.move(handleBox!.x + handleBox!.width / 2 + 20, handleBox!.y + handleBox!.height / 2 - 60);
  await page.mouse.up();
  const afterDrag = await floatingKeyboard.boundingBox();
  expect(afterDrag!.y).toBeLessThan(beforeDrag!.y);
  await expect(editor).toBeVisible();

  await page.getByRole("button", { name: "Shift", exact: true }).click();
  const nativeKey = page.getByRole("button", { name: "अ from d" });
  const keyBox = await nativeKey.boundingBox();
  expect(keyBox?.height).toBeGreaterThanOrEqual(44);
  expect(keyBox?.width).toBeGreaterThanOrEqual(32);
  await nativeKey.click();
  await expect(editor).toHaveValue("अ");
  await page.getByRole("button", { name: "Close virtual keyboard" }).click();
  await expect(page.getByRole("region", { name: "Hindi on-screen keyboard" })).toBeHidden();

  await page.getByRole("button", { name: "Export" }).click();
  const download = page.waitForEvent("download");
  await page.getByRole("menuitem", { name: /TXT/ }).click();
  expect((await download).suggestedFilename()).toMatch(/hindi-typing-.*\.txt/);

  await editor.fill("नमस्ते\nभारत");
  await page.getByRole("button", { name: "Export" }).click();
  const docxDownload = page.waitForEvent("download");
  await page.getByRole("menuitem", { name: /DOCX/ }).click();
  expect((await docxDownload).suggestedFilename()).toMatch(/hindi-typing-.*\.docx/);

  await page.getByRole("button", { name: "Export" }).click();
  const pdfDownload = page.waitForEvent("download");
  await page.getByRole("menuitem", { name: /PDF/ }).click();
  expect((await pdfDownload).suggestedFilename()).toMatch(/hindi-typing-.*\.pdf/);
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

  await page.getByRole("button", { name: "Virtual keyboard" }).click();
  await page.getByRole("button", { name: "ا from a" }).click();

  await expect(editor).toHaveValue("ا");
});

test("mobile touch can open the keyboard and insert native characters", async ({
  browser,
}) => {
  const context = await browser.newContext({
    viewport: { width: 360, height: 800 },
    isMobile: true,
    hasTouch: true,
  });

  try {
    const page = await context.newPage();
    await page.goto("/typing/hindi");

    const editor = page.getByRole("combobox", {
      name: "Typing input for Hindi",
    });

    await page.getByRole("button", { name: "Virtual keyboard" }).tap();
    await page.getByRole("button", { name: "Shift", exact: true }).tap();
    await page.getByRole("button", { name: "अ from d" }).tap();
    await expect(editor).toHaveValue("अ");

    await page.getByRole("button", { name: "Close virtual keyboard" }).tap();
    await page.getByRole("button", { name: "Export" }).tap();
    const download = page.waitForEvent("download");
    await page.getByRole("menuitem", { name: /TXT/ }).tap();
    expect((await download).suggestedFilename()).toMatch(/hindi-typing-.*\.txt/);
  } finally {
    await context.close();
  }
});
