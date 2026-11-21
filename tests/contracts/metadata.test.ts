import { describe, expect, it } from "vitest";

import { languageRegistry } from "@/lib/languages/registry";
import { createLearnMetadata, createTypingMetadata } from "@/lib/languages/metadata";



describe("Metadata Contract", () => {
    for (const language of Object.values(languageRegistry)) {
        describe(language.id, () => {
            it("should create typing metadata", () => {
                const metadata = createTypingMetadata(language);

                expect(metadata.title).toBeTruthy();
                expect(metadata.description).toBeTruthy();
                expect(metadata.title).toBe(language.learn.seo.title);
                expect(metadata.description).toBe(language.learn.seo.description);

                expect(metadata.alternates?.canonical).toContain(language.slug);

                expect(metadata.openGraph?.title).toBeTruthy();
                expect(metadata.openGraph?.description).toBeTruthy();

                expect(metadata.twitter?.title).toBeTruthy();
                expect(metadata.twitter?.description).toBeTruthy();
            });

            it("should create learn metadata", () => {
                const metadata = createLearnMetadata(language);

                expect(metadata.title).toBeTruthy();
                expect(metadata.description).toBeTruthy();

                expect(metadata.alternates?.canonical).toContain(language.slug);

                expect(metadata.openGraph?.title).toBeTruthy();
                expect(metadata.openGraph?.description).toBeTruthy();

                expect(metadata.twitter?.title).toBeTruthy();
                expect(metadata.twitter?.description).toBeTruthy();
            });

            it("should include keywords", () => {
                const typing = createTypingMetadata(language);
                const learn = createLearnMetadata(language);

                expect(typing.keywords).toBeTruthy();
                expect(learn.keywords).toBeTruthy();
            });

            it("should generate unique canonical URLs", () => {
                const canonicals = Object.values(languageRegistry).flatMap((language) => [
                    createTypingMetadata(language).alternates?.canonical,
                    createLearnMetadata(language).alternates?.canonical,
                ]);

                expect(new Set(canonicals).size).toBe(canonicals.length);
            });

        });
    }
});