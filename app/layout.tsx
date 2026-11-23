import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import ThemeAwareToaster from "@/components/theme/ThemeAwareToaster";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import { GLOBAL_KEYWORDS } from "@/lib/seo/keywords";
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
      "Type in English and write in Indian languages instantly with free, browser-based typing tools. No account required.",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          id="theme-initializer"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("typeindian-theme");var p=s==="light"||s==="dark"||s==="system"?s:"system";var d=window.matchMedia("(prefers-color-scheme: dark)").matches;var t=p==="system"?(d?"dark":"light"):p;var r=document.documentElement;r.dataset.theme=t;r.dataset.themePreference=p;r.style.colorScheme=t;}catch(e){}})();`,
          }}
        />
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
        <ThemeProvider>
          <SiteSchema />
          <Navbar />
          <div id="main-content" className="min-h-screen">
            {children}
          </div>
          <Footer />
          <ThemeAwareToaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
