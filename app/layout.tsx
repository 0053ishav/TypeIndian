import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import { GLOBAL_KEYWORDS } from "@/lib/seo/keywords";
import { Toaster } from "sonner";
import { SITE_URL } from "@/lib/config/site";
import SiteSchema from "@/components/common/SiteSchema";
import Script from "next/script";
import { ADSENSE_ENABLED, ADSENSE_PUBLISHER_ID } from "@/lib/config/adsense";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* =========================
   Global SEO Metadata
========================= */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "TypeIndian - English to Indian Language Typing Tool",
    template: "%s | TypeIndian",
  },

  description:
    "TypeIndian is a free English to Indian language typing tool. Type in English and instantly write in Panjabi, Hindi, and more Indian languages. No login.",

  keywords: GLOBAL_KEYWORDS,

  authors: [{ name: "TypeIndian" }],
  creator: "TypeIndian",
  verification: {
    google: "TenoyS5nmTIbgNrZ9uIRxNNCTbOgohZebisrGPFdRLM",
  },

  openGraph: {
    title: "TypeIndian - English to Indian Language Typing Tool",
    description:
      "Type in English and write in Indian languages instantly. Free, fast, and privacy-first typing tool for Panjabi (Also known as Punjabi), Hindi, and more.",
    url: SITE_URL,
    siteName: "TypeIndian",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "TypeIndian - English to Indian Language Typing Tool",
    description:
      "Type in English and write in Indian languages instantly. No login.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {ADSENSE_ENABLED && (
          <>
            <meta name="google-adsense-account" content={ADSENSE_PUBLISHER_ID} />
            <Script
              id="adsense"
              strategy="afterInteractive"
              async
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`}
              crossOrigin="anonymous"
            />
          </>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SiteSchema />
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster
          position="bottom-center"
          richColors
          closeButton
          duration={2500}
        />
        <Analytics />
      </body>
    </html>
  );
}
