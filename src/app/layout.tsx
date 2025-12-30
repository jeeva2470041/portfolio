import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://jeevag.vercel.app"),
  title: "Jeeva G | Portfolio",
  description:
    "Personal portfolio of Jeeva G - Computer Science Student & Aspiring Full Stack Developer at SSN College of Engineering, Chennai",
  keywords: [
    "Jeeva G",
    "Portfolio",
    "Full Stack Developer",
    "SSN College",
    "React",
    "Next.js",
    "Web Developer",
    "Chennai",
  ],
  authors: [{ name: "Jeeva G" }],
  creator: "Jeeva G",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://jeevag.vercel.app",
    siteName: "Jeeva G Portfolio",
    title: "Jeeva G | Full Stack Developer",
    description:
      "Computer Science Student & Aspiring Full Stack Developer at SSN College of Engineering",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jeeva G Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeeva G | Full Stack Developer",
    description:
      "Computer Science Student & Aspiring Full Stack Developer at SSN College of Engineering",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
