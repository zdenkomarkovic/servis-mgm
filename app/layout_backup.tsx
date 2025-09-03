import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { GOOGLE_ADS_CONFIG } from "@/constants/google-ads";
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
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "servis laptopova",
    "popravka laptopova",
    "servis računara",
    "popravka računara",
    "servis desktop računara",
    "servis elektronike",
    "popravka elektronike",
    "servis Sony PlayStation",
    "popravka Sony PlayStation 4",
    "popravka Sony PlayStation 5",
    "servis Xbox konzola",
    "popravka Xbox konzola",
    "servis Nintendo konzola",
    "popravka Nintendo konzola",
    "sklapanje računara",
    "prodaja računara",
    "konfiguracije računara",
    "računarske konfiguracije",
    "brz servis laptopova",
    "profesionalna popravka računara",
  ],
  alternates: {
    canonical: "https://www.servisracunaramgm.rs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <head>
        {/* Google Ads Global Site Tag */}
        <Script
          src={https://www.googletagmanager.com/gtag/js?id=}
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '');
          }
        </Script>
        
        {/* Google Analytics 4 */}
        <Script
          src={https://www.googletagmanager.com/gtag/js?id=}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '');
          }
        </Script>

        {/* Schema.org Local Business Markup */}
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Servis MGM",
              "description": "Servis i popravka računara, elektronike i konzola",
              "url": "https://www.servisracunaramgm.rs",
              "telephone": "+381645523333",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "RS",
                "addressLocality": "Beograd"
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "}",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 44.7866,
                  "longitude": 20.4489
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servis usluge",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Servis laptopova"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Servis desktop računara"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Servis elektronike"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Servis konzola"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={${geistSans.variable}  antialiased text-muted bg-muted-foreground  text-lg md:text-2xl}
      >
        <Header />
        {children}
        <ButtonToTop />
        <Footer />
      </body>
    </html>
  );
}
