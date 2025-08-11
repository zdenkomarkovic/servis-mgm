import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Servis i popravka računara, elektronike i konzola – Servis MGM",
  description:
    "Servis MGM – stručna popravka i servis laptopova, desktop računara, elektronike i gejming konzola. Brza dijagnostika, kvalitetni delovi i garancija",
  icons: {
    icon: "/apple-touch-icon.png",
    apple: "/favicon-32x32.png",
  },
  keywords: ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  alternates: {
    canonical: "https://www./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-muted bg-muted-foreground  text-lg md:text-2xl`}
      >
        <Header />
        {children}
        <ButtonToTop />
        <Footer />
      </body>
    </html>
  );
}
