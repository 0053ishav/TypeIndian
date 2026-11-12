# Editor export formats

The main typing editor exports locally in the browser. The Session Board keeps its independent TXT export action.

## Formats

- **TXT** — UTF-8 plain text; the original text and line endings are preserved.
- **DOCX** — generated with `docx` in the browser. Each source line becomes a Word paragraph. Urdu paragraphs and runs are marked right-to-left.
- **PDF** — generated with `pdfnative` in the browser. Script font data is loaded lazily and embedded in the PDF. The Indic OpenType engine shapes Devanagari, Gurmukhi, Gujarati, Bengali, Tamil, Telugu, Kannada, Malayalam and Odia; Arabic shaping and the Unicode bidirectional algorithm handle Urdu.

## Script/font routing

| Language(s) | PDF font module | DOCX font name |
|---|---|---|
| Hindi, Marathi, Nepali, Sanskrit | Noto Sans Devanagari | Noto Sans Devanagari |
| Panjabi | Noto Sans Gurmukhi | Noto Sans Gurmukhi |
| Gujarati | Noto Sans Gujarati | Noto Sans Gujarati |
| Bengali, Assamese | Noto Sans Bengali | Noto Sans Bengali |
| Tamil | Noto Sans Tamil | Noto Sans Tamil |
| Telugu | Noto Sans Telugu | Noto Sans Telugu |
| Kannada | Noto Sans Kannada | Noto Sans Kannada |
| Malayalam | Noto Sans Malayalam | Noto Sans Malayalam |
| Odia | Noto Sans Oriya | Noto Sans Oriya |
| Urdu | Noto Sans Arabic | Noto Nastaliq Urdu |

Assamese uses the Bengali font module because Assamese and Bengali share the Bengali script block and Noto Bengali covers the Assamese-specific letters. PDF font routing uses `bn` for both.

## Fidelity boundaries

- TXT is plain Unicode text and has no explicit paragraph-direction metadata; RTL characters retain their Unicode bidirectional properties, and mixed-direction layout is left to the text viewer.
- PDF font data is embedded, and generated PDFs are tested by extracting the resulting text back from the PDF. Tests include conjuncts, vowel signs, paragraphs and Urdu RTL. Urdu PDF uses the embedded Noto Arabic font data (Naskh-style shaping), not a Nastaliq-specific font; the text remains Unicode and right-to-left.
- DOCX stores the original Unicode text and sets paragraph/run direction for Urdu. The DOCX file does **not** embed font files; Word uses the named font if installed and otherwise applies its font fallback. Character data remains intact even when the viewing machine lacks that preferred font.
- The export menu is disabled for empty/whitespace-only editor content. Generation errors are reported in the UI; no text is sent to a document service or backend.

## References

- `docx` browser support and `Packer.toBlob`: https://docx.js.org/
- DOCX RTL paragraph option: https://docx.js.org/api/types/index.IParagraphPropertiesOptionsBase.html
- DOCX RTL run option: https://docx.js.org/api/types/index.IRunStylePropertiesOptions.html
- `pdfnative` browser document builder and font registration: https://pdfnative.dev/guides/quickstart.html
- `pdfnative` 32-script Indic font/shaping support: https://github.com/Nizoka/pdfnative
- `pdfnative` RTL and BiDi behavior: https://pdfnative.dev/guides/rtl.html
- `pdfnative` text extraction API: https://pdfnative.dev/guides/text-extraction.html
