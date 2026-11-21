import Link from "next/link";
import type { Metadata } from "next";

import Breadcrumbs from "@/components/common/Breadcrumbs";
import PageSchema from "@/components/common/PageSchema";

import { SITE_URL } from "@/lib/config/site";

const LAST_UPDATED = "November 21, 2026";

const DESCRIPTION =
  "Read the Terms of Service for using TypeIndian's Indian-language typing, transliteration, learning resources, and browser-based tools.";

export const metadata: Metadata = {
  title: "Terms of Service | TypeIndian",

  description: DESCRIPTION,

  alternates: {
    canonical: `${SITE_URL}/terms`,
  },

  openGraph: {
    title: "Terms of Service | TypeIndian",
    description: DESCRIPTION,
    url: `${SITE_URL}/terms`,
    siteName: "TypeIndian",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | TypeIndian",
    description: DESCRIPTION,
  },
};

export default function TermsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 space-y-24">
      <Breadcrumbs
        items={[
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Terms of Service",
            path: "/terms",
          },
        ]}
      />

      <PageSchema
        name="Terms of Service | TypeIndian"
        description={DESCRIPTION}
        path="/terms"
      />

      {/* Header */}
      <header className="mt-10 mb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--color-primary)">
          Legal
        </p>

        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-(--color-text-heading)">
          Terms of Service
        </h1>

        <p className="mt-5 text-lg text-(--color-text-body) leading-relaxed">
          These Terms of Service apply when you access or use TypeIndian and
          its browser-based Indian-language typing and learning tools.
        </p>

        <p className="mt-4 text-sm text-(--color-text-muted)">
          Last updated: {LAST_UPDATED}
        </p>
      </header>

      <div className="space-y-14 text-(--color-text-body) leading-relaxed">
        {/* 1 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            1. About TypeIndian
          </h2>

          <p>
            TypeIndian is a browser-based platform focused on helping people
            type and learn Indian languages digitally.
          </p>

          <p className="mt-4">
            Depending on the language and feature, the service may include
            phonetic typing, transliteration suggestions, language-learning
            resources, alphabet and script information, virtual keyboards,
            and tools to copy or export text. Features may differ between
            supported languages and may change over time.
          </p>
        </section>

        {/* 2 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            2. Acceptance of These Terms
          </h2>

          <p>
            By accessing or using TypeIndian, you agree to these Terms of
            Service and to comply with applicable laws. If you do not agree
            with these Terms, do not use the service.
          </p>
        </section>

        {/* 3 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            3. Acceptable Use
          </h2>

          <p>
            You may use TypeIndian for lawful personal, educational, and
            business purposes, subject to these Terms.
          </p>

          <p className="mt-4">You must not:</p>

          <ul className="mt-5 list-disc pl-6 space-y-3">
            <li>use the service in violation of applicable laws or regulations;</li>
            <li>attempt unauthorized access to the website or its infrastructure;</li>
            <li>interfere with, disrupt, damage, or intentionally overload the service;</li>
            <li>probe, scan, or test systems for vulnerabilities without authorization;</li>
            <li>circumvent reasonable technical restrictions or safeguards; or</li>
            <li>
              use bots, scripts, scraping, or other automated methods in a way
              that materially burdens or interferes with the service.
            </li>
          </ul>
        </section>

        {/* 4 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            4. User Input and Generated Text
          </h2>

          <p>
            You may enter text into TypeIndian's browser-based tools and use
            available transliteration suggestions. You are responsible for the
            text you enter and for reviewing and deciding how to use the
            resulting output.
          </p>

          <p className="mt-4">
            Transliteration suggestions are automated and may be inaccurate,
            incomplete, or unsuitable for a particular context. TypeIndian
            does not guarantee that generated text will be grammatically,
            linguistically, or contextually correct. Review output carefully
            before using it, especially for formal, legal, medical, financial,
            academic, or other important purposes.
          </p>

          <p className="mt-4">
            TypeIndian does not claim ownership of the text you enter or of
            the text you create using the typing tools. You remain responsible
            for ensuring that your use of source material and output does not
            infringe another person's rights.
          </p>

          <p className="mt-4">
            When you use transliteration suggestions, text is sent to Google
            Input Tools for processing. Pasted or dropped text may be
            processed as separate word requests. See the{" "}
            <Link
              href="/privacy"
              className="font-medium text-(--color-primary) hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            for details.
          </p>
        </section>

        {/* 5 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            5. Educational and Language Content
          </h2>

          <p>
            TypeIndian may provide educational and informational material
            about Indian languages, scripts, alphabets, pronunciation, and
            typing.
          </p>

          <p className="mt-4">
            This material is provided for general educational and practical
            purposes. We do not represent it as a complete or authoritative
            linguistic reference, and we do not guarantee that every detail
            is current or error-free. Independently verify information where
            accuracy is important.
          </p>
        </section>

        {/* 6 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            6. Third-Party Transliteration Services
          </h2>

          <p>
            Some typing functionality relies on third-party services,
            including Google Input Tools, to provide transliteration
            suggestions. These services are operated independently of
            TypeIndian.
          </p>

          <p className="mt-4">
            Their availability, functionality, terms, and policies may change.
            TypeIndian does not control or guarantee the availability,
            accuracy, or continued operation of third-party services.
          </p>

          <p className="mt-4">
            TypeIndian is not an official Google product and is not sponsored
            or endorsed by Google.
          </p>
        </section>

        {/* 7 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            7. Analytics, Advertising, and Other Third-Party Services
          </h2>

          <p>
            TypeIndian uses third-party services to host, measure, and support
            the website. These currently include Vercel hosting and analytics,
            Google services used for transliteration, and Google advertising
            services where enabled.
          </p>

          <p className="mt-4">
            Third-party services may collect or process information under
            their own terms and privacy policies. For information about the
            data involved and the technologies used on TypeIndian, read our{" "}
            <Link
              href="/privacy"
              className="font-medium text-(--color-primary) hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>

          <p className="mt-4">
            The providers and configuration of third-party services may
            change as the website develops.
          </p>
        </section>

        {/* 8 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            8. Intellectual Property
          </h2>

          <p>
            Unless otherwise stated, TypeIndian's original branding, website
            design, software, original written content, and original graphics
            are owned by TypeIndian or its respective rights holders.
          </p>

          <p className="mt-4">
            You may access and use the service for its intended purposes.
            These Terms do not transfer ownership of TypeIndian's intellectual
            property to you, and you must not copy, redistribute, or exploit
            protected parts of the service except where permitted by law or
            with the relevant rights holder's permission.
          </p>

          <p className="mt-4">
            Third-party software, scripts, fonts, language standards,
            datasets, and other materials remain subject to their respective
            licenses and terms.
          </p>
        </section>

        {/* 9 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            9. User Content and Browser Storage
          </h2>

          <p>
            TypeIndian currently does not provide user accounts, public user
            profiles, public content publishing, document collaboration, or
            cloud document storage.
          </p>

          <p className="mt-4">
            Text in the current typing editor is not saved as a cloud document
            by the typing tool. Text that you add to the Session Board is
            stored in your browser's local storage on that device and browser.
            You are responsible for managing that locally stored content,
            including clearing it when using a shared device. Browser data
            may be removed by clearing site data or browser storage.
          </p>

          <p className="mt-4">
            You remain responsible for your content and how you use it.
            TypeIndian does not acquire ownership of your text merely because
            you use the service.
          </p>
        </section>

        {/* 10 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            10. Accuracy and Service Disclaimer
          </h2>

          <p>
            TypeIndian's typing tools, transliteration suggestions, and
            educational information are provided for general informational
            and practical use.
          </p>

          <p className="mt-4">We do not guarantee:</p>

          <ul className="mt-5 list-disc pl-6 space-y-3">
            <li>perfect transliteration, spelling, or pronunciation;</li>
            <li>that suggestions will reflect every dialect or regional usage;</li>
            <li>that educational information will be complete or error-free;</li>
            <li>that every feature will be available for every language; or</li>
            <li>uninterrupted or error-free operation of the service.</li>
          </ul>

          <p className="mt-5">
            You should independently verify important information before
            relying on it.
          </p>
        </section>

        {/* 11 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            11. Availability and Changes to the Service
          </h2>

          <p>
            We may add, change, suspend, or remove features; update supported
            languages; perform maintenance; or temporarily restrict access
            when reasonably necessary.
          </p>

          <p className="mt-4">
            TypeIndian is provided without a guaranteed uptime or service
            level. We do not promise that a particular feature, language, or
            third-party integration will remain available indefinitely.
          </p>
        </section>

        {/* 12 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            12. Pricing and Advertising
          </h2>

          <p>
            TypeIndian is currently available without charge. This does not
            mean that every feature will remain free indefinitely. If paid
            features or charges are introduced, the applicable terms and
            pricing will be presented before they apply.
          </p>

          <p className="mt-4">
            TypeIndian may display advertising through third-party advertising
            services, including Google advertising services. The availability
            and format of advertising may change. Advertising-related data
            practices are explained in the{" "}
            <Link
              href="/privacy"
              className="font-medium text-(--color-primary) hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        {/* 13 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            13. Third-Party Links and Services
          </h2>

          <p>
            TypeIndian may link to external websites or rely on external
            services for certain functionality. Those websites and services
            are not operated by TypeIndian and are governed by their own terms
            and privacy policies.
          </p>

          <p className="mt-4">
            You are responsible for reviewing the applicable terms before
            using third-party websites or services.
          </p>
        </section>

        {/* 14 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            14. Privacy
          </h2>

          <p>
            Your use of TypeIndian is also subject to our Privacy Policy. It
            explains how information may be processed through the website,
            browser storage, transliteration requests, analytics, advertising
            technologies, and other third-party services.
          </p>

          <div className="mt-6">
            <Link href="/privacy" className="btn-secondary inline-flex">
              Read the Privacy Policy →
            </Link>
          </div>
        </section>

        {/* 15 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            15. Disclaimer of Warranties
          </h2>

          <p>
            To the extent permitted by applicable law, TypeIndian is provided
            on an "as is" and "as available" basis, without warranties that
            cannot be excluded by law.
          </p>

          <p className="mt-4">
            We do not warrant that the service will be uninterrupted,
            error-free, secure in every circumstance, or that its content and
            output will meet every user's requirements.
          </p>

          <p className="mt-4">
            Nothing in these Terms excludes or limits a right or protection
            that cannot lawfully be excluded or limited.
          </p>
        </section>

        {/* 16 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            16. Limitation of Liability
          </h2>

          <p>
            To the extent permitted by applicable law, TypeIndian and the
            people or entities operating it will not be liable for indirect,
            incidental, special, or consequential loss arising from or
            relating to use of, or inability to use, the service.
          </p>

          <p className="mt-4">
            This includes, to the extent permitted by law, loss arising from
            reliance on transliteration output or educational content,
            temporary interruptions, or the acts or availability of
            third-party services.
          </p>

          <p className="mt-4">
            Nothing in this section excludes liability or remedies that cannot
            be excluded or limited under applicable law.
          </p>
        </section>

        {/* 17 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            17. Restriction of Access
          </h2>

          <p>
            We may restrict or suspend access to TypeIndian when reasonably
            necessary to address abuse, security threats, attempts to disrupt
            the service, violations of these Terms, or legal requirements.
          </p>

          <p className="mt-4">
            TypeIndian currently does not use user accounts, so access
            restrictions do not constitute an account-termination process.
          </p>
        </section>

        {/* 18 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            18. Changes to These Terms
          </h2>

          <p>
            We may update these Terms to reflect changes to TypeIndian,
            applicable requirements, or the way the service operates. The
            revised version will be published on this page with an updated
            "Last updated" date.
          </p>

          <p className="mt-4">
            Your continued use of TypeIndian after revised Terms are published
            constitutes acceptance of the revised Terms to the extent
            permitted by applicable law. If you do not agree, stop using the
            service.
          </p>
        </section>

        {/* 19 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            19. Contact
          </h2>

          <p>
            If you have questions about these Terms, contact TypeIndian using
            the official contact method published on our Contact page.
          </p>

          <div className="mt-6">
            <Link href="/contact" className="btn-secondary inline-flex">
              Contact TypeIndian →
            </Link>
          </div>
        </section>
      </div>

      {/* Legal navigation */}
      <nav
        aria-label="Legal navigation"
        className="mt-16 pt-8 border-t border-(--color-border)"
      >
        <div className="flex flex-wrap gap-5 text-sm">
          <Link
            href="/about"
            className="text-(--color-text-muted) hover:text-(--color-text-heading)"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-(--color-text-muted) hover:text-(--color-text-heading)"
          >
            Contact
          </Link>

          <Link
            href="/privacy"
            className="text-(--color-text-muted) hover:text-(--color-text-heading)"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            aria-current="page"
            className="font-medium text-(--color-text-heading)"
          >
            Terms of Service
          </Link>
        </div>
      </nav>
    </main>
  );
}
