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
    "Portfolio of Muhammad Daffa' Ayyasy, a Fresh Graduate Software Engineer focused on backend development, cloud platforms, and applied AI.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Muhammad Daffa' Ayyasy — Software Engineer",
    description: "Experience, projects, and technical skills in backend development, cloud platforms, and applied AI/ML.",
    url: "https://daffaayyasy.com",
    siteName: "Muhammad Daffa' Ayyasy",
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
