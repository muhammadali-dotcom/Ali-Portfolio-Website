import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Ali | Software Engineer & React Native Engineer",
  description: "Software Engineer and React Native Engineer specializing in building high-performance Next.js web applications, immersive 3D interfaces, and cross-platform mobile products.",
  keywords: [
    "Frontend Developer",
    "React Native Developer",
    "Next.js Developer",
    "Software Engineer",
    "Three.js Developer",
    "React Developer",
    "Web Developer",
    "Freelance Developer"
  ],
  authors: [{ name: "Ali" }],
  creator: "Ali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ali.dev", // Replace with real URL if needed
    title: "Muhammad Ali | Software Engineer",
    description: "Software Engineer building high-performance web applications and Softwares.",
    siteName: "Ali Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ali Portfolio Preview Image",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali | Software Engineer & React Native Engineer",
    description: "Software Engineer and React Native Engineer specializing in high-performance Next.js web applications.",
    creator: "@ali_dev",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://ali.dev"), // Prevents issues with relative OG paths
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="bg-dark-bg text-text-primary min-h-screen flex flex-col justify-between selection:bg-emerald-accent/30 selection:text-emerald-accent">
        {/* Scroll Progress Bar */}
        <ScrollToTop />
        <ScrollProgress />

        {/* Sticky Header Navigation */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 w-full flex flex-col">
          {children}
        </main>

        {/* Page Footer */}
        <Footer />
      </body>
    </html>
  );
}
