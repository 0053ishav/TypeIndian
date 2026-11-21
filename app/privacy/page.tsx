import Link from "next/link";
import type { Metadata } from "next";

import { SITE_URL } from "@/lib/config/site";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import PageSchema from "@/components/common/PageSchema";
import { EMAIL } from "@/lib/config/email";

const LAST_UPDATED = "November 21, 2026";

const DESCRIPTION =
  "Learn how TypeIndian handles information, browser storage, analytics, third-party transliteration services, and advertising technologies.";

export const metadata: Metadata = {
  title: "Privacy Policy | TypeIndian",
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
  openGraph: {
    title: "Privacy Policy | TypeIndian",
    description: DESCRIPTION,
    url: `${SITE_URL}/privacy`,
    siteName: "TypeIndian",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | TypeIndian",
    description: DESCRIPTION,
  },
};

export default function PrivacyPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 space-y-24">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ]}
      />

      <PageSchema
        name="Privacy Policy | TypeIndian"
        description={DESCRIPTION}
        path="/privacy"
      />

      <header className="mb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--color-primary)">
          Legal
        </p>

        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-(--color-text-heading)">
          Privacy Policy
        </h1>

        <p className="mt-5 text-lg text-(--color-text-body) leading-relaxed">
          This Privacy Policy explains how TypeIndian handles information in
          connection with its browser-based Indian language typing,
          transliteration, learning, analytics, and advertising technologies.
        </p>

        <p className="mt-4 text-sm text-(--color-text-muted)">
          Last updated: {LAST_UPDATED}
        </p>
      </header>

      <div className="space-y-14 text-(--color-text-body) leading-relaxed">
        {/* 1 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            1. Information We Collect
          </h2>

          <p>
            TypeIndian does not currently require user accounts, login,
            signup, profiles, passwords, or cloud document storage.
          </p>

          <p className="mt-4">
            Depending on how you use the website, information may be processed
            automatically as part of operating the service. This may include
            information related to website usage, browser or device activity,
            browser-side application state, analytics, and text that is sent
            to third-party transliteration services when you use those
            features.
          </p>

          <p className="mt-4">
            TypeIndian does not currently maintain a user-account database or
            provide permanent cloud-based typing sessions.
          </p>
        </section>

        {/* 2 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            2. How We Use Information
          </h2>

          <p>
            Information processed through TypeIndian may be used to operate,
            maintain, improve, and understand the website and its features.
          </p>

          <p className="mt-4">
            This may include providing typing and transliteration functionality,
            maintaining browser-side application state, understanding website
            usage and performance, supporting advertising, and helping protect
            the service from abuse or security issues.
          </p>
        </section>

        {/* 3 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            3. Typing and Transliteration
          </h2>

          <p>
            TypeIndian provides browser-based typing tools that allow you to
            enter text and receive typing or transliteration suggestions.
          </p>

          <p className="mt-4">
            TypeIndian currently uses Google Input Tools for certain
            transliteration suggestions. When you request transliteration or
            use a feature that generates suggestions, the relevant text you
            enter and the language configuration needed for that request are
            sent to Google&apos;s transliteration service at{" "}
            <a
              href="https://inputtools.google.com/request"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-(--color-primary) hover:underline"
            >
              inputtools.google.com
            </a>
            to process the transliteration request.
          </p>

          <p className="mt-4">
            Transliteration requests are made directly from your browser to
            Google&apos;s service; TypeIndian does not route these requests
            through its own application server. The typing tool requests
            suggestions for the current word as you type. When you paste or
            convert longer text, the tool may send separate requests for
            individual words. The request also includes the language
            configuration and other parameters needed by the service.
          </p>

          <p className="mt-4">
            The application may temporarily cache returned suggestions in
            browser memory to avoid repeating the same request. This
            in-memory cache is temporary and is not the same as saving your
            typing history to a TypeIndian account or cloud document.
            Transliteration text is nevertheless processed by Google, not
            exclusively on your device. Do not assume that text submitted for
            transliteration remains private to your device.
          </p>

          <p className="mt-4">
            Please avoid entering passwords, financial information, or other
            sensitive information into typing or transliteration features if
            you do not want that information processed by a third-party
            transliteration service.
          </p>

          <p className="mt-4">
            TypeIndian does not currently provide speech-to-text functionality
            or process audio recordings for speech recognition. If speech
            features are introduced, this policy will be updated to explain
            what audio or related data is processed, whether processing happens
            on your device or through a service provider, and the applicable
            data practices.
          </p>

          <p className="mt-4">
            For more information, please review{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-(--color-primary) hover:underline"
            >
              Google&apos;s Privacy Policy
            </a>
            .
          </p>
        </section>

        {/* 4 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            4. Browser Storage and Local Storage
          </h2>

          <p>
            TypeIndian may use browser-side storage, including localStorage,
            to support application functionality and maintain certain
            browser-side state.
          </p>

          <p className="mt-4">
            In the typing tool, entries that you add to the Session Board are
            saved in your browser&apos;s localStorage for the selected
            language, so they can be available when you return using the same
            browser. This is browser-local storage, not a TypeIndian user
            account or cloud database. The current editor text is not saved
            as a cloud document by this feature.
          </p>

          <p className="mt-4">
            The information stored by the website may remain in your browser
            until it is removed, overwritten, or cleared by the application,
            browser, or user.
          </p>

          <p className="mt-4">
            Clearing your browser or site data may remove information stored
            by TypeIndian and can affect application functionality or saved
            browser-side preferences.
          </p>
        </section>

        {/* 5 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            5. Analytics
          </h2>

          <p>
            TypeIndian currently uses Vercel Analytics as part of operating
            and understanding website usage and performance.
          </p>

          <p className="mt-4">
            Analytics information may be processed by Vercel in accordance
            with its own policies and service configuration. TypeIndian does
            not make specific claims in this policy about individual fields,
            identifiers, or retention periods unless those details are
            explicitly documented by the applicable service.
          </p>

          <p className="mt-4">
            For more information, please review{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-(--color-primary) hover:underline"
            >
              Vercel&apos;s Privacy Policy
            </a>
            .
          </p>
        </section>

        {/* 6 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            6. Hosting and Infrastructure
          </h2>

          <p>
            TypeIndian is hosted and deployed using Vercel. Hosting and
            infrastructure services may process information necessary to
            deliver website requests, maintain service reliability, and
            protect the infrastructure.
          </p>

          <p className="mt-4">
            Hosting infrastructure is separate from the Vercel Analytics
            functionality described above. This policy does not make specific
            claims about infrastructure logs or retention periods unless those
            details are documented by the applicable provider.
          </p>
        </section>

        {/* 7 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            7. Advertising and Google AdSense
          </h2>

          <p>
            TypeIndian uses Google AdSense site code when it is explicitly
            enabled for site connection or verification during the AdSense
            review process, or when advertising is activated after approval.
            The script loads only when the production environment has both a
            publisher ID and an explicit enable setting. Loading this script
            does not itself mean that Google has approved the site or that ads
            are being displayed. If advertising is active, Google and its
            advertising partners may process information as described below.
          </p>

          <p className="mt-4">
            Google and other third-party advertising providers may use
            cookies, local storage, web beacons, IP addresses, or similar
            technologies in connection with advertising and measurement.
          </p>

          <p className="mt-4">
            These technologies may be used to serve, measure, personalize,
            limit, or improve advertising and to help prevent invalid or
            fraudulent activity, depending on the applicable advertising
            configuration and user settings.
          </p>

          <p className="mt-4">
            Google and its partners may use information about a user&apos;s
            visits to TypeIndian and other websites to serve advertising,
            including personalized advertising where applicable and permitted.
          </p>

          <p className="mt-4">
            For information about how Google uses data when advertising
            services are used on partner websites, please review{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-(--color-primary) hover:underline"
            >
              How Google uses information from sites or apps that use our
              services
            </a>
            .
          </p>

          <p className="mt-4">
            You can manage Google&apos;s personalized advertising settings through{" "}
            <a
              href="https://adssettings.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-(--color-primary) hover:underline"
            >
              Google Ads Settings
            </a>
            .
          </p>

          <p className="mt-4">
            You may also learn more about third-party advertising choices
            through{" "}
            <a
              href="https://optout.aboutads.info/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-(--color-primary) hover:underline"
            >
              AboutAds.info
            </a>
            .
          </p>

          <p className="mt-4">
            Advertising providers and technologies may change over time.
            Applicable advertising and consent settings may also depend on
            your location, browser, device, and the advertising configuration
            used by TypeIndian.
          </p>
        </section>

        {/* 8 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            8. Cookies and Similar Technologies
          </h2>

          <p>
            TypeIndian may use or allow third parties to use cookies, local
            storage, web beacons, or similar technologies for website
            functionality, analytics, advertising, measurement, security, or
            related purposes.
          </p>

          <p className="mt-4">
            If Google AdSense is approved and enabled, Google advertising
            services may place or read cookies or use similar technologies
            when advertising functionality is active.
            These technologies can be used for purposes such as advertising,
            frequency management, measurement, and personalization, depending
            on the applicable configuration and user choices.
          </p>

          <p className="mt-4">
            You can control cookies and browser storage through your browser
            settings. Some TypeIndian functionality may not work as intended
            if relevant browser storage or technologies are disabled or
            cleared.
          </p>

          <p className="mt-4">
            Where legally required, advertising and consent mechanisms may
            provide additional choices regarding cookies, local storage, and
            personalized advertising.
          </p>
        </section>

        {/* 9 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            9. Third-Party Services
          </h2>

          <p>
            TypeIndian currently relies on certain third-party services as
            part of operating the website and its functionality. These include:
          </p>

          <ul className="mt-5 list-disc pl-6 space-y-3">
            <li>
              <strong>Google Input Tools</strong> for certain transliteration
              functionality.
            </li>
            <li>
              <strong>Vercel Analytics</strong> for website analytics and
              performance insights.
            </li>
            <li>
              <strong>Vercel</strong> for hosting and infrastructure.
            </li>
            <li>
              <strong>Google advertising services, including AdSense (when
              approved and enabled)</strong>{" "}for advertising and related
              measurement technologies.
            </li>
          </ul>

          <p className="mt-5">
            These third parties operate under their own privacy policies and
            terms. TypeIndian does not control the independent privacy
            practices of third-party providers.
          </p>
        </section>

        {/* 10 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            10. Data Retention
          </h2>

          <p>
            TypeIndian does not currently maintain user accounts or a cloud
            database containing users&apos; typing history.
          </p>

          <p className="mt-4">
            Browser-side information may remain in local storage or other
            browser storage until it is cleared, removed, or overwritten.
          </p>

          <p className="mt-4">
            Information processed by third-party providers, including
            analytics, Google Input Tools for transliteration, hosting, and
            advertising providers (if and when enabled), is subject to the
            applicable provider&apos;s policies and retention practices.
          </p>

          <p className="mt-4">
            TypeIndian does not claim a specific retention period for
            third-party processing where that period is controlled by the
            provider.
          </p>
        </section>

        {/* 11 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            11. Data Security
          </h2>

          <p>
            TypeIndian takes reasonable measures intended to support the
            security and reliability of the website and its infrastructure.
          </p>

          <p className="mt-4">
            However, no website, internet transmission, browser storage
            mechanism, or third-party service can be guaranteed to be
            completely secure.
          </p>
        </section>

        {/* 12 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            12. Children&apos;s Privacy
          </h2>

          <p>
            TypeIndian is a general-purpose website and does not currently use
            an account-registration or age-verification system.
          </p>

          <p className="mt-4">
            We do not knowingly request personal information from children
            through an account-registration process.
          </p>

          <p className="mt-4">
            Parents or guardians who have concerns about information submitted
            through the website may contact us using the information provided
            below.
          </p>
        </section>

        {/* 13 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            13. Your Choices
          </h2>

          <p>
            You can choose whether to use TypeIndian&apos;s typing and
            transliteration tools and what information you enter into them.
          </p>

          <p className="mt-4">
            You can also clear TypeIndian-related browser storage through your
            browser or device settings.
          </p>

          <p className="mt-4">
            You may manage advertising personalization through{" "}
            <a
              href="https://adssettings.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-(--color-primary) hover:underline"
            >
              Google Ads Settings
            </a>
            .
          </p>

          <p className="mt-4">
            You may also use privacy and consent controls provided by your
            browser, device, or applicable advertising services.
          </p>
        </section>

        {/* 14 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            14. External Links
          </h2>

          <p>
            TypeIndian may link to external websites and services, including
            third-party privacy policies and service documentation.
          </p>

          <p className="mt-4">
            External websites and services are operated independently and may
            have their own privacy policies, terms, cookies, and data
            practices. TypeIndian is not responsible for the privacy practices
            of websites that it does not operate.
          </p>
        </section>

        {/* 15 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            15. Changes to This Privacy Policy
          </h2>

          <p>
            We may update this Privacy Policy when TypeIndian&apos;s features,
            services, advertising configuration, or information practices
            change.
          </p>

          <p className="mt-4">
            When changes are made, the updated version will be published on
            this page with a revised &quot;Last updated&quot; date.
          </p>
        </section>

        {/* 16 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            16. Contact Us
          </h2>

          <p>
            If you have questions or concerns about this Privacy Policy or
            TypeIndian&apos;s information practices, you can contact us at:
          </p>

          <p className="mt-5">
            <a
              href={`mailto:${EMAIL}`}
              className="font-medium text-(--color-primary) hover:underline"
            >
              {EMAIL}
            </a>
          </p>

          <p className="mt-5 text-sm text-(--color-text-muted)">
            Please avoid sending passwords, financial information, or other
            sensitive information by email unless it is necessary to address
            your request.
          </p>
        </section>
      </div>

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
            aria-current="page"
            className="font-medium text-(--color-text-heading)"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="text-(--color-text-muted) hover:text-(--color-text-heading)"
          >
            Terms of Service
          </Link>
        </div>
      </nav>
    </main>
  );
}
