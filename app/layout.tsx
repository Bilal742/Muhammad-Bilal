import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Particles from "./Components/Home/Particles";
// import SnowfallClient from "./Components/Snow/SnowfallClient";

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

  title: "Muhammad Bilal",
  description: "Portfolio of Muhammad Bilal - React & TypeScript Developer",

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FFFFEB] text-[#000000]`}>

        {/* <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"> */}
          {/* <Particles /> */}
          <Navbar />
          {children}
          <Footer />
        {/* </div> */}
      </body>
    </html>
  );
}
