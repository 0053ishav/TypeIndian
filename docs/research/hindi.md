# Hindi learning research and implementation notes

Last reviewed: 2026-11-21

## Product decisions

- Vowel presentation: traditional core independent vowels first; discuss spoken phonetic distinctions separately.
- Extended characters: separate from the core chart.
- Roman pronunciation: show scholarly transliteration and a simple learner-friendly Roman cue.
- History: short, beginner-friendly overview.

## Language and script

- Language: Hindi (हिन्दी)
- ISO 639-1: `hi`
- Locale: `hi-IN`
- Script: Devanagari (देवनागरी)
- Direction: left to right
- Writing-system type: abugida
- Modern Standard Hindi is based primarily on Khari Boli.
- Devanagari is used by several languages and predates modern standard Hindi.
- Under Article 343, Hindi in Devanagari is the official language of the Union. The Constitution does not declare Hindi to be India's national language. English continues to be used for Union official purposes under the Official Languages Act.

Do not describe Hindi as a direct, simple, uninterrupted descendant of Sanskrit. Its history involves older Indo-Aryan, Middle Indo-Aryan / Prakrit and Apabhraṃśa traditions, regional speech, literary traditions, and contact with other languages. Historical labels such as Hindavi and Hindui had context-dependent meanings.

## Alphabet data decisions

### Core independent vowels

अ आ इ ई उ ऊ ऋ ए ऐ ओ औ

- Do not list अं or अः as independent vowels. They are better introduced as vowel-plus-mark forms / special marks.
- ऋ is retained in the traditional chart but described as mainly Sanskrit-derived in contemporary Hindi.
- Traditional letter inventory is not the same thing as a count of modern spoken vowel phonemes.

### Core consonants

Traditional varṇamālā order:

- Velar: क ख ग घ ङ
- Palatal: च छ ज झ ञ
- Retroflex: ट ठ ड ढ ण
- Dental: त थ द ध न
- Bilabial: प फ ब भ म
- Other traditional consonants: य र ल व; श ष स ह

The traditional chart is pedagogically useful but should not be presented as a one-to-one inventory of distinct phonemes used by every Hindi speaker. ङ and ञ are uncommon as independent onsets in everyday Hindi. Pronunciation varies regionally.

### Extended forms

Nukta forms kept separate from the core chart:

क़ ख़ ग़ ज़ ड़ ढ़ फ़

Extended vowel letters kept separate:

ऍ ऑ

The earlier `य़` entry was removed from the core learning list because it was not established as a useful standard modern Hindi teaching form in the reviewed material. Nukta spelling and pronunciation may vary; some words appear with and without nukta in contemporary writing.

### Vowel signs

ा ि ी ु ू ृ े ै ो ौ

There is no separate matra for inherent अ. The sign ि is encoded after its consonant but displayed visually to its left.

### Special marks

- ं — anusvāra
- ँ — candrabindu
- ः — visarga
- ़ — nukta
- ् — virāma / halant
- ऽ — avagraha
- । — daṇḍa
- ॥ — double daṇḍa

Anusvara and chandrabindu are not universally interchangeable. Visarga and avagraha are mostly relevant to Sanskrit-derived or specialized contexts. Danda punctuation is traditional; modern Hindi also commonly uses comma and full-stop punctuation.

### Conjuncts

Examples: क्ष, त्र, ज्ञ, श्र, क्त, न्द.

Teach these as consonant combinations / shaped conjunct forms, not as additional independent core alphabet letters.

## Hindi typing examples: live test record

The user ran the following browser-side test on 2026-11-21 against:

`https://inputtools.google.com/request`

Language parameter: `hi-t-i0-und`

Request parameters included `text`, `itc`, `num=5`, `cp=0`, `cs=0`, `ie=utf-8`, `oe=utf-8`, and `app=demopage`.

Observed results:

| Roman input | First suggestion | Notes |
|---|---|---|
| namaste | नमस्ते | Other spelling variants were returned |
| paani | पानी | पानी ranked first |
| khana | खाना | कहना was also suggested; context matters |
| ghar | घर | घर ranked first |
| dhanyavaad | धन्यवाद | Orthographic alternatives followed |
| dost | दोस्त | Several phonetically similar alternatives followed |
| chaand | चाँद | चांद was also suggested |
| zameen | ज़मीन | जमीन and other nukta variants were also suggested |
| kshama | क्षमा | क्षमा ranked first |
| namaste dosto | नमस्ते दोस्तों | A natural phrase suggestion |

All ten requests returned HTTP 200 and a `SUCCESS` response with five suggestions. Observed request durations were approximately 1.18–1.40 seconds. The browser test established that this endpoint was reachable and callable cross-origin from the user's test page at that time. It did not establish long-term availability, rate limits, production support, or permitted commercial use.

These are observed provider suggestions, not a guarantee that the same output will always rank first. Roman input is ambiguous; examples should teach users to review alternatives.

## Transliteration provider risk

Current repository implementation maps Hindi to `hi-t-i0-und` and directly calls `https://inputtools.google.com/request`.

Important distinction:

- The live endpoint test passed technically.
- The exact HTTP endpoint is not documented in the official developer documentation reviewed as a supported public API.
- Google's general API terms say APIs must be accessed through documented methods.
- Google's API Services User Data Policy says undocumented APIs must not be used without express permission.
- Google's separately documented Google Transliterate API is marked deprecated. Do not assume that this legacy API and the Input Tools endpoint are the same service or that its historical terms automatically govern the endpoint tested here.

**Production blocker:** Do not treat the endpoint as an approved, stable production dependency until its permitted use and support status are confirmed with Google or TypeIndian replaces it with a provider whose public API terms and documentation explicitly permit this use. Keep provider-specific code isolated behind the transliteration engine abstraction. Do not represent the live test as legal or commercial-use approval.

## Common learner distinctions

- Dental त / द versus retroflex ट / ड.
- Aspirated ख versus unaspirated क.
- फ /pʰ/ versus फ़ /f/.
- Short / long vowel signs: ि / ी and ु / ू.
- ं versus ँ.
- The visible left placement of ि despite encoded order after the consonant.
- Schwa deletion: an inherent vowel is not pronounced in every written position.
- Conjuncts are combinations, not independent letters.
- Nukta forms modify base letters; spelling practices vary.

## Source register

1. Unicode Standard, Chapter 12 — South and Central Asia scripts, Devanagari encoding, abugida behaviour, vowel signs, conjuncts, and punctuation:
   https://unicode.org/versions/Unicode18.0.0/core-spec/chapter-12/

2. Central Hindi Directorate — Devanagari script and Hindi spelling standardization:
   https://www.chd.education.gov.in/en/devanagari-lipi-tatha-hindi-vartani-manakikaran

3. Archaeological Survey of India, Bharat SHRI epigraphy — historical script development and inscriptions:
   https://bharatshri.asi.gov.in/AboutEpigraphy?lang=en

4. Census of India, Linguistic Survey of India: Uttar Pradesh — regional Hindi phonological description. Treat as a regional study, not a universal description of all Hindi varieties:
   https://censusindia.gov.in/nada/index.php/catalog/45240/download/48950/LSI_UTTAR_PRADESH.pdf

5. IGNOU, BHIC-112, Unit 2 — Hindi language history and literary traditions:
   https://www.egyankosh.ac.in/bitstream/123456789/82878/1/Unit-2.pdf

6. McGregor, Cambridge — early Hindi prose and the emergence of standard Hindi:
   https://doi.org/10.1017/S0035869X00125730

7. Narasimhan, Sproat, and Kiraz — schwa deletion in Hindi text-to-speech:
   https://bethmardutho.org/wp-content/uploads/2020/07/Kiraz_Narasimhan_Sproat_2004_Schwa-Deletion-in-Hindi-Text-to-Speech.pdf

8. Constitution of India, Article 343:
   https://www.indiacode.nic.in/bitstream/123456789/19632/1/the_constitution_of_india.pdf

9. Official Languages Act, 1963:
   https://rajbhasha.gov.in/sites/default/files/rajbhasha_act_1963e.pdf

10. Google APIs Terms of Service:
    https://developers.google.com/terms/

11. Google API Services User Data Policy:
    https://developers.google.com/terms/api-services-user-data-policy

12. Google Transliterate documentation (marked deprecated; separate from the tested Input Tools HTTP endpoint):
    https://developers.google.com/transliterate
