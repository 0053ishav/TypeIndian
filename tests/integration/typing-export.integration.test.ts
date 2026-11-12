/** @vitest-environment node */

import { describe, expect, it } from "vitest";
import { extractText } from "pdfnative";

import { languageRegistry } from "@/lib/languages/registry";
import {
  createDocxBlob,
  createPdfBlob,
  createTxtBlob,
} from "@/lib/typing/export";

const samples = [
  ["hindi", "नमस्ते\nक्षेत्र"],
  ["panjabi", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ\nਪੰਜਾਬੀ"],
  ["gujarati", "નમસ્તે\nક્ષેત્ર"],
  ["bengali", "নমস্কার\nবাংলা"],
  ["assamese", "নমস্কাৰ\nঅসমীয়া"],
  ["tamil", "வணக்கம்\nதமிழ்"],
  ["telugu", "నమస్కారం\nతెలుగు"],
  ["kannada", "ನಮಸ್ಕಾರ\nಕನ್ನಡ"],
  ["malayalam", "നമസ്കാരം\nമലയാളം"],
  ["odia", "ନମସ୍କାର\nଓଡ଼ିଆ"],
  ["urdu", "السلام علیکم\nاردو"],
] as const;

async function readZipEntry(blob: Blob, entryName: string) {
  const bytes = new Uint8Array(await blob.arrayBuffer());
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const signature = 0x06054b50;
  let eocd = bytes.length - 22;

  while (eocd >= 0 && view.getUint32(eocd, true) !== signature) eocd--;
  if (eocd < 0) throw new Error("DOCX ZIP directory was not found.");

  const entryCount = view.getUint16(eocd + 10, true);
  let cursor = view.getUint32(eocd + 16, true);

  for (let index = 0; index < entryCount; index++) {
    if (view.getUint32(cursor, true) !== 0x02014b50) {
      throw new Error("Invalid DOCX ZIP directory entry.");
    }

    const method = view.getUint16(cursor + 10, true);
    const compressedSize = view.getUint32(cursor + 20, true);
    const nameLength = view.getUint16(cursor + 28, true);
    const extraLength = view.getUint16(cursor + 30, true);
    const commentLength = view.getUint16(cursor + 32, true);
    const localOffset = view.getUint32(cursor + 42, true);
    const name = new TextDecoder().decode(
      bytes.slice(cursor + 46, cursor + 46 + nameLength),
    );

    if (name === entryName) {
      const localNameLength = view.getUint16(localOffset + 26, true);
      const localExtraLength = view.getUint16(localOffset + 28, true);
      const dataStart = localOffset + 30 + localNameLength + localExtraLength;
      const compressed = bytes.slice(dataStart, dataStart + compressedSize);

      if (method === 0) return new TextDecoder().decode(compressed);
      if (method !== 8) throw new Error(`Unsupported DOCX ZIP method: ${method}`);

      const stream = new Blob([compressed]).stream().pipeThrough(
        new DecompressionStream("deflate-raw"),
      );
      return new TextDecoder().decode(await new Response(stream).arrayBuffer());
    }

    cursor += 46 + nameLength + extraLength + commentLength;
  }

  throw new Error(`DOCX entry not found: ${entryName}`);
}

function compactUnicode(value: string) {
  return value.replace(/[\s\u200B\u200C\u200D\uFEFF]/g, "");
}

describe("local typing exports", () => {
  it("exports UTF-8 TXT without changing paragraphs", async () => {
    const text = "नमस्ते\nभारत";
    const blob = createTxtBlob(text);
    expect(blob.type).toBe("text/plain;charset=utf-8");
    expect(await blob.text()).toBe(text);
  });

  it.each(samples)("generates a Unicode DOCX for %s", async (languageId, text) => {
    const blob = await createDocxBlob(text, languageRegistry[languageId]);
    expect(blob.size).toBeGreaterThan(500);
    expect(blob.type).toContain("officedocument.wordprocessingml");

    const documentXml = await readZipEntry(blob, "word/document.xml");
    expect(documentXml).toContain(text.split("\n")[0]);
    expect(documentXml).toContain(text.split("\n")[1]);
    expect((documentXml.match(/<w:p(?:\s|>)/g) ?? []).length).toBe(2);

    if (languageId === "urdu") {
      expect(documentXml).toContain("<w:bidi");
      expect(documentXml).toContain("<w:rtl");
    }
  });

  it.each(samples)("generates and round-trips a shaped PDF for %s", async (languageId, text) => {
    const language = languageRegistry[languageId];
    const blob = await createPdfBlob(text, language);
    expect(blob.type).toBe("application/pdf");
    expect(blob.size).toBeGreaterThan(1000);

    const bytes = new Uint8Array(await blob.arrayBuffer());
    expect(new TextDecoder().decode(bytes.slice(0, 5))).toBe("%PDF-");

    const pages = extractText(bytes, { includeRuns: true });
    const extracted = pages.map((page) => page.text).join("\n");
    const runText = pages.flatMap((page) => page.runs ?? []).map((run) => run.text).join("");
    for (const paragraph of text.split("\n")) {
      const compactParagraph = paragraph.replace(/\s/g, "");
      expect(extracted.replace(/\s/g, "")).toContain(compactParagraph);
      expect(runText.replace(/\s/g, "")).toContain(compactParagraph);
    }
  });

  it("rejects empty editor content instead of creating blank files", async () => {
    expect(() => createTxtBlob("  \n ")).toThrow("There is no text to export.");
    await expect(createDocxBlob("", languageRegistry.hindi)).rejects.toThrow(
      "There is no text to export.",
    );
    await expect(createPdfBlob("", languageRegistry.urdu)).rejects.toThrow(
      "There is no text to export.",
    );
  });
});
