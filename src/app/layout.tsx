import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import SchemaMarkup from "@/components/SchemaMarkup";
import "./globals.css";

const lora = localFont({
  src: "../../public/fonts/Lora-Variable.ttf",
  variable: "--font-lora",
  display: "swap",
});

const openSans = localFont({
  src: "../../public/fonts/OpenSans-Variable.ttf",
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://farthmann-immo.de"),
  title: {
    default: "Farthmann Immobilien | Makler & Gutachter in OWL",
    template: "%s | Farthmann Immobilien",
  },
  description:
    "Ihr Immobilienmakler und DEKRA-zertifizierter Gutachter in Ostwestfalen-Lippe. Über 30 Jahre Erfahrung in Verkauf, Vermietung und Immobilienbewertung in Werther, Borgholzhausen und Umgebung.",
  keywords:
    "Immobilienmakler, Gutachter, OWL, Werther, Borgholzhausen, DEKRA, Immobilienbewertung, Verkauf, Vermietung",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Farthmann Immobilien",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${lora.variable} ${openSans.variable} font-sans antialiased`}
      >
        <SchemaMarkup />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
