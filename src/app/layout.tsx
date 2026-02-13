import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import SchemaMarkup from "@/components/SchemaMarkup";
import "./globals.css";

const inter = localFont({
  src: "../../public/fonts/Inter-Variable.ttf",
  variable: "--font-inter",
  display: "swap",
});

const montserrat = localFont({
  src: "../../public/fonts/Montserrat-Variable.ttf",
  variable: "--font-montserrat",
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
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}
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
