import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import Script from "next/script";

import "./globals.css";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ClientEffects from "@/components/ui/ClientEffects";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import JsonLd from "@/components/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ali-portfolio-website-dev.vercel.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Muhammad Ali | Full-Stack Software Engineer",
    template: "%s | Muhammad Ali",
  },

  description:
    "Full-Stack Software Engineer building scalable web apps, real-time systems, and AI-powered tools with Next.js, Node.js, PostgreSQL, and Redis.",

  authors: [{ name: "Muhammad Ali" }],
  creator: "Muhammad Ali",
  publisher: "Muhammad Ali",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Muhammad Ali | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer building scalable web apps, real-time systems, and AI-powered tools.",
    siteName: "Muhammad Ali Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Ali Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ali | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer building scalable web apps, real-time systems, and AI-powered tools with Next.js, Node.js, and PostgreSQL.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#05070b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen overflow-x-hidden bg-bg text-heading selection:bg-primary/25 selection:text-primary">
        <JsonLd />
        <SmoothScrollProvider>
          <div className="relative flex min-h-screen flex-col">
            <ClientEffects />
            <ScrollToTop />
            <ScrollProgress />

            <Navbar />

            <main className="relative z-10 flex w-full flex-1 flex-col">
              {children}
            </main>

            <Footer />
          </div>
        </SmoothScrollProvider>

        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}