# Virtual keyboard layouts

The on-screen keyboard is a separate typing control. The alphabet chart remains an alphabet-reference/learning component.

## Layout selection

| Language(s) | Layout | Notes |
|---|---|---|
| Hindi, Marathi, Nepali, Sanskrit | Devanagari Enhanced InScript | Shared because these languages use Devanagari and the same script-level layout convention. |
| Panjabi | Gurmukhi InScript | Includes Gurmukhi-specific vowel carriers, bindi, tippi and addak keys. |
| Gujarati | Gujarati Enhanced InScript | Gujarati output map; it is not a Devanagari character substitution. |
| Bengali | Bengali InScript | Bengali-specific output map. |
| Assamese | Assamese Enhanced InScript | Shares the Bengali-script family, but uses its own output map for Assamese letters. |
| Tamil | Tamil InScript | Tamil's smaller native consonant inventory and Grantha extensions are not padded with invented letters. |
| Telugu | Telugu InScript | Uses the Telugu vowel signs and virama; conjuncts are available only where the layout defines them. |
| Kannada | Kannada InScript | Uses Kannada-specific vowel signs, consonants and virama. |
| Malayalam | Malayalam InScript | Includes direct chillu character keys; the keyboard does not synthesize chillus from an unverified sequence. |
| Odia | Odia InScript | Includes Odia-specific nukta/extended forms and its distinct wa/va keys. |
| Urdu | m17n Urdu Phonetic | Separate Perso-Arabic phonetic layout, not an InScript variant. The editor stores Unicode text; browser font shaping determines contextual joining and Nastaliq appearance. |

## Standards and source references

- Bureau of Indian Standards, **IS 16350:2016 — Enhanced InScript Keyboard Layout**. This is the layout standard used for the Brahmic script families listed above. The layout data is kept script-specific even where physical key positions are shared.
- C-DAC's Enhanced InScript work and the Windows Devanagari INSCRIPT keyboard reference are used as implementation cross-checks.
- Wikimedia jQuery.IME's script-specific InScript rule sets are a second implementation reference for Devanagari, Gurmukhi, Gujarati, Bengali, Assamese, Tamil, Telugu, Kannada, Malayalam and Odia. The Type Indian implementation uses its own typed layout data and does not bundle jQuery.IME.
- Urdu uses the m17n Urdu Phonetic input convention. It is intentionally not described as an Urdu national-standard keyboard.

References:
- BIS standards catalogue: https://www.services.bis.gov.in/php/BIS_2.0/bisconnect/standard_review/Standard_review/Isdetails?ID=MjM4OTQ%3D
- C-DAC: https://www.cdac.in/
- Microsoft Devanagari INSCRIPT keyboard reference: https://learn.microsoft.com/en-us/globalization/keyboards/kbdindev
- Wikimedia jQuery.IME input-method repository: https://github.com/wikimedia/jquery.ime
- m17n Urdu phonetic input method: https://github.com/m17n/m17n-contrib/blob/master/im/ur-phonetic.mim

## Input behavior and limitations

- A key inserts its native Unicode output directly at the current selection. It does not invoke Google transliteration.
- Shift and AltGr layers expose only mapped characters. Unmapped keys are disabled rather than guessed.
- The editor stores Unicode code points and combining sequences. Backspace uses grapheme segmentation where the browser supports `Intl.Segmenter`.
- Urdu is a character-entry layout, not a full Nastaliq composition engine. Joining forms and glyph shaping are delegated to the browser's text renderer and installed fonts. If the selected font does not provide Urdu Nastaliq shaping, the keyboard cannot repair that typography by itself.
- The on-screen keyboard is an input aid; physical mobile-device verification remains a separate QA task.
