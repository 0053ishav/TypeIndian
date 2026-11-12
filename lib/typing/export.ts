import type { Language } from "@/types/language";
import { AlignmentType, Document, Packer, Paragraph, TextRun } from "docx";

export type TypingExportFormat = "txt" | "docx" | "pdf";

const PDF_FONT_BY_LANGUAGE: Record<string, string> = {
  hindi: "hi",
  marathi: "hi",
  nepali: "hi",
  sanskrit: "hi",
  panjabi: "pa",
  gujarati: "gu",
  bengali: "bn",
  assamese: "bn",
  tamil: "ta",
  telugu: "te",
  kannada: "kn",
  malayalam: "ml",
  odia: "or",
  urdu: "ar",
};

const DOCX_FONT_BY_LANGUAGE: Record<string, string> = {
  hindi: "Noto Sans Devanagari",
  marathi: "Noto Sans Devanagari",
  nepali: "Noto Sans Devanagari",
  sanskrit: "Noto Sans Devanagari",
  panjabi: "Noto Sans Gurmukhi",
  gujarati: "Noto Sans Gujarati",
  bengali: "Noto Sans Bengali",
  assamese: "Noto Sans Bengali",
  tamil: "Noto Sans Tamil",
  telugu: "Noto Sans Telugu",
  kannada: "Noto Sans Kannada",
  malayalam: "Noto Sans Malayalam",
  odia: "Noto Sans Oriya",
  urdu: "Noto Nastaliq Urdu",
};

function splitParagraphs(text: string) {
  return text.replace(/\r\n?/g, "\n").split("\n");
}

export function createTxtBlob(text: string) {
  if (!text.trim()) throw new Error("There is no text to export.");
  return new Blob([text], { type: "text/plain;charset=utf-8" });
}

export async function createDocxBlob(text: string, language: Language) {
  if (!text.trim()) throw new Error("There is no text to export.");

  const font = DOCX_FONT_BY_LANGUAGE[language.id] ?? "Arial";
  const rtl = language.direction === "rtl";
  const paragraphs = splitParagraphs(text).map((line) =>
    new Paragraph({
      bidirectional: rtl,
      alignment: rtl ? AlignmentType.RIGHT : AlignmentType.LEFT,
      children: line
        ? [
            new TextRun({
              text: line,
              font: { name: font },
              rightToLeft: rtl,
            }),
          ]
        : [],
    }),
  );

  const document = new Document({
    title: `${language.name} typing export`,
    sections: [{ children: paragraphs }],
  });

  return Packer.toBlob(document);
}

export async function createPdfBlob(text: string, language: Language) {
  if (!text.trim()) throw new Error("There is no text to export.");

  const scriptCode = PDF_FONT_BY_LANGUAGE[language.id];
  if (!scriptCode) {
    throw new Error(`PDF export is not configured for ${language.name}.`);
  }

  const pdf = await import("pdfnative");
  pdf.registerFonts({
    latin: () => import("pdfnative/fonts/noto-sans-data.js"),
    ar: () => import("pdfnative/fonts/noto-arabic-data.js"),
    bn: () => import("pdfnative/fonts/noto-bengali-data.js"),
    gu: () => import("pdfnative/fonts/noto-gujarati-data.js"),
    hi: () => import("pdfnative/fonts/noto-devanagari-data.js"),
    kn: () => import("pdfnative/fonts/noto-kannada-data.js"),
    ml: () => import("pdfnative/fonts/noto-malayalam-data.js"),
    or: () => import("pdfnative/fonts/noto-oriya-data.js"),
    pa: () => import("pdfnative/fonts/noto-gurmukhi-data.js"),
    ta: () => import("pdfnative/fonts/noto-tamil-data.js"),
    te: () => import("pdfnative/fonts/noto-telugu-data.js"),
  });

  const fontCodes = [...new Set(["latin", scriptCode])];
  const fontEntries = await Promise.all(
    fontCodes.map(async (code, index) => {
      const fontData = await pdf.loadFontData(code);
      if (!fontData) throw new Error(`Unable to load the ${code} PDF font.`);
      return {
        fontData,
        fontRef: `/F${index + 3}`,
        lang: code,
      };
    }),
  );

  const direction = language.direction;
  const blocks = splitParagraphs(text).map((line) => ({
    type: "paragraph" as const,
    text: line,
    direction,
    align: direction === "rtl" ? ("right" as const) : ("left" as const),
  }));

  const bytes = pdf.buildDocumentPDFBytes(
    {
      title: `${language.name} typing export`,
      blocks,
      fontEntries,
    },
    { direction },
  );

  return new Blob([bytes], { type: "application/pdf" });
}

export async function createTypingExport(
  text: string,
  language: Language,
  format: TypingExportFormat,
) {
  if (format === "txt") return createTxtBlob(text);
  if (format === "docx") return createDocxBlob(text, language);
  return createPdfBlob(text, language);
}
