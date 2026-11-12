import type { Language } from "@/types/language";
import type { FontData } from "pdfnative";

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

  const { AlignmentType, Document, HeadingLevel, Packer, Paragraph, TextRun } = await import("docx");
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
    title: `TypeIndian — ${language.name} typing export`,
    subject: "Indian language typing document",
    creator: "TypeIndian",
    sections: [{
      children: [
        new Paragraph({
          text: "TypeIndian",
          heading: HeadingLevel.TITLE,
          alignment: AlignmentType.LEFT,
        }),
        new Paragraph({
          children: [new TextRun({
            text: `${language.name} typing export · Created with typeindian.com`,
            color: "64748B",
            size: 20,
          })],
          alignment: AlignmentType.LEFT,
        }),
        ...paragraphs,
      ],
    }],
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
  const fontLoader = (loader: () => Promise<unknown>) =>
    loader().then((module) => module as FontData);
  pdf.registerFonts({
    latin: () => fontLoader(() => import("pdfnative/fonts/noto-sans-data.js")),
    ar: () => fontLoader(() => import("pdfnative/fonts/noto-arabic-data.js")),
    bn: () => fontLoader(() => import("pdfnative/fonts/noto-bengali-data.js")),
    gu: () => fontLoader(() => import("pdfnative/fonts/noto-gujarati-data.js")),
    hi: () => fontLoader(() => import("pdfnative/fonts/noto-devanagari-data.js")),
    kn: () => fontLoader(() => import("pdfnative/fonts/noto-kannada-data.js")),
    ml: () => fontLoader(() => import("pdfnative/fonts/noto-malayalam-data.js")),
    or: () => fontLoader(() => import("pdfnative/fonts/noto-oriya-data.js")),
    pa: () => fontLoader(() => import("pdfnative/fonts/noto-gurmukhi-data.js")),
    ta: () => fontLoader(() => import("pdfnative/fonts/noto-tamil-data.js")),
    te: () => fontLoader(() => import("pdfnative/fonts/noto-telugu-data.js")),
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
  const blocks = [
    { type: "heading" as const, text: "TypeIndian", level: 1 },
    {
      type: "paragraph" as const,
      text: `${language.name} typing export · Created with typeindian.com`,
      color: "#64748B",
      fontSize: 9,
    },
    { type: "spacer" as const, height: 14 },
    ...splitParagraphs(text).map((line) => ({
    type: "paragraph" as const,
    text: line,
    direction,
    align: direction === "rtl" ? ("right" as const) : ("left" as const),
    })),
  ];

  const bytes = pdf.buildDocumentPDFBytes(
    {
      title: `TypeIndian — ${language.name} typing export`,
      blocks,
      footerText: "Created with TypeIndian · typeindian.com",
      fontEntries,
    },
    { direction },
  );

  const arrayBuffer = bytes.buffer.slice(
    bytes.byteOffset,
    bytes.byteOffset + bytes.byteLength,
  ) as ArrayBuffer;
  return new Blob([arrayBuffer], { type: "application/pdf" });
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
