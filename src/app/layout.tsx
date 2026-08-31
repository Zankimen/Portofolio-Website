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
    default: "Muhammad Daffa' Ayyasy — Software Engineer",
    template: "%s — Muhammad Daffa' Ayyasy",
  },
  description:
    "Portfolio Muhammad Daffa' Ayyasy, Software Engineer dengan fokus pada back-end development, cloud, dan AI/ML.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Muhammad Daffa' Ayyasy — Software Engineer",
    description: "Pengalaman, proyek, dan keahlian Muhammad Daffa' Ayyasy dalam back-end development, cloud, dan AI/ML.",
    url: "https://daffaayyasy.com",
    siteName: "Muhammad Daffa' Ayyasy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${inter.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
