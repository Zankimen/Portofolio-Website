import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://daffaayyasy.com"),
  title: {
    default: "Daffa Ayyasy — Portfolio",
    template: "%s — Daffa Ayyasy",
  },
  description:
    "Portfolio placeholder Daffa Ayyasy. Selected work, experience, and notes from a digital builder.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Daffa Ayyasy — Portfolio",
    description: "Selected work, experience, and notes from Daffa Ayyasy.",
    url: "https://daffaayyasy.com",
    siteName: "Daffa Ayyasy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
