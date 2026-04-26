import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
// import Particles from "./Components/Home/Particles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Bilal (mrvornex)",
  description: "Portfolio of Bilal",

  icons: {
    icon: "/logo3.png",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
      { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16" },
    ],
  },

  openGraph: {
    title: "Muhammad Bilal - Frontend Developer",
    description: "Portfolio of Muhammad Bilal - React & TypeScript Developer",
    url: "https://your-portfolio-site.com",
    siteName: "Muhammad Bilal Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammad Bilal - Frontend Developer",
    description: "Portfolio of Muhammad Bilal - React & TypeScript Developer",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FFFFEB] text-[#000000]`}
      >
        {/* Optional Background Effects */}
        {/* <Particles /> */}

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}