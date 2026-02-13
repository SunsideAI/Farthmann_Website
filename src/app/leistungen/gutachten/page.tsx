import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  FileCheck,
  Scale,
  Users,
  Heart,
  Home,
  Briefcase,
  Gavel,
  ArrowRight,
} from "lucide-react";
import FAQSection from "@/components/FAQSection";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title: "Gutachten & Bewertung",
};

const useCases = [
  {
    title: "Familienrecht",
    description:
      "Wertermittlung im Rahmen familienrechtlicher Auseinandersetzungen und Vermögensaufteilung.",
    icon: <Heart size={24} />,
  },
  {
    title: "Erbschaft",
    description:
      "Objektive Bewertung für eine gerechte Erbaufteilung und zur Vorlage beim Finanzamt.",
    icon: <Home size={24} />,
  },
  {
    title: "Nachlassverwaltung",
    description:
      "Professionelle Wertfeststellung für die ordnungsgemäße Nachlassverwaltung und Erbauseinandersetzung.",
    icon: <Briefcase size={24} />,
  },
  {
    title: "Betreuungsverfahren",
    description:
      "Gutachten für Betreuungsgerichte zur Sicherstellung eines angemessenen Immobilienwertes.",
    icon: <Shield size={24} />,
  },
  {
    title: "Scheidung",
    description:
      "Neutrale und marktgerechte Bewertung als Grundlage für den Zugewinnausgleich.",
    icon: <Scale size={24} />,
  },
  {
    title: "Vermögensauseinandersetzung",
    description:
      "Fundierte Wertermittlung bei der Aufteilung von Vermögenswerten zwischen Parteien.",
    icon: <Users size={24} />,
  },
  {
    title: "Wertfeststellung",
    description:
      "Aktuelle Marktwertermittlung für steuerliche Zwecke, Bilanzierung oder private Vermögensübersicht.",
    icon: <FileCheck size={24} />,
  },
  {
    title: "Kauf / Verkauf",
    description:
      "Absicherung beim Immobilienkauf oder -verkauf durch eine unabhängige Werteinschätzung.",
    icon: <Gavel size={24} />,
  },
];

const faqs: FAQ[] = [
  {
    question: "Was ist ein Kurzgutachten?",
    answer:
      "Ein Kurzgutachten ist eine kompakte, aber fundierte Immobilienbewertung, die den Marktwert einer Immobilie ermittelt. Im Gegensatz zu einem Vollgutachten ist es weniger umfangreich, liefert aber eine verlässliche Werteinschätzung. Es eignet sich besonders für private Zwecke wie Erbauseinandersetzungen, Scheidungen oder die Vorbereitung eines Verkaufs.",
  },
  {
    question: "Wie läuft die Gutachtenerstellung ab?",
    answer:
      "Nach einer ersten Kontaktaufnahme vereinbaren wir einen Besichtigungstermin. Vor Ort nehmen wir die Immobilie detailliert auf, dokumentieren Zustand, Ausstattung und Besonderheiten. Anschließend werten wir alle relevanten Daten aus, recherchieren Vergleichswerte und erstellen das Kurzgutachten. In der Regel erhalten Sie das fertige Gutachten innerhalb von 2 bis 3 Wochen.",
  },
  {
    question: "Was kostet ein Gutachten?",
    answer:
      "Die Kosten für ein Kurzgutachten richten sich nach Art und Umfang der Immobilie. Gerne erstellen wir Ihnen ein individuelles Angebot. Kontaktieren Sie uns für eine unverbindliche Preisauskunft – wir beraten Sie transparent und fair.",
  },
  {
    question: "Für welche Zwecke wird ein Gutachten benötigt?",
    answer:
      "Ein Gutachten wird unter anderem benötigt für: Erbauseinandersetzungen, Scheidung und Zugewinnausgleich, Betreuungsverfahren, steuerliche Wertfeststellung, Vermögensauseinandersetzung, Kauf- oder Verkaufsentscheidungen sowie zur Vorlage bei Banken, Gerichten oder Finanzämtern.",
  },
];

export default function GutachtenPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary-800 py-16 lg:py-20">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-primary-200 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Startseite
            </Link>
            <span>/</span>
            <Link
              href="/leistungen/gutachten"
              className="hover:text-white transition-colors"
            >
              Leistungen
            </Link>
            <span>/</span>
            <span className="text-white">Gutachten &amp; Bewertung</span>
          </nav>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Gutachten &amp; Bewertung
          </h1>
          <p className="text-lg text-primary-200 mt-4 max-w-2xl leading-relaxed">
            Als DEKRA-zertifizierter Sachverst&auml;ndiger erstellen wir
            professionelle Kurzgutachten f&uuml;r wohnwirtschaftlich genutzte
            Objekte &ndash; fundiert, zuverl&auml;ssig und transparent.
          </p>
        </div>
      </section>

      {/* Main Description with DEKRA Badge */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* DEKRA Badge */}
            <div className="lg:col-span-1">
              <div className="card p-8 text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-primary-50 flex items-center justify-center mb-4">
                  <Shield size={48} className="text-primary-800" />
                </div>
                <h3 className="font-serif text-xl font-bold text-neutral-900 mb-2">
                  DEKRA-zertifiziert
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Sachverst&auml;ndiger f&uuml;r
                  Immobilienbewertung D1 &ndash; DEKRA-zertifiziert nach
                  DIN EN ISO/IEC 17024
                </p>
                <div className="mt-4">
                  <span className="badge badge-primary">
                    Zertifizierter Sachverst&auml;ndiger
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="lg:col-span-2">
              <h2 className="section-title mb-6">
                Professionelle Kurzgutachten f&uuml;r wohnwirtschaftliche
                Objekte
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Als DEKRA-zertifizierter Sachverst&auml;ndiger f&uuml;r
                  Immobilienbewertung erstellt Heinz-Ulrich Farthmann
                  professionelle Kurzgutachten f&uuml;r wohnwirtschaftlich
                  genutzte Immobilien. Mit &uuml;ber 15 Jahren Erfahrung in der
                  Immobilienbewertung verbinden wir fundiertes Fachwissen mit
                  regionaler Marktkenntnis.
                </p>
                <p>
                  Unsere Kurzgutachten umfassen eine detaillierte Analyse der
                  Immobilie, eine fundierte Marktbewertung sowie eine
                  transparente Darstellung der wertbeeinflussenden Faktoren. Sie
                  eignen sich f&uuml;r private und au&szlig;ergerichtliche
                  Zwecke.
                </p>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 pt-4">
                  Das Kurzgutachten beinhaltet:
                </h3>
                <ul className="space-y-2">
                  {[
                    "Objektbesichtigung und Dokumentation",
                    "Analyse der Lage und des Umfelds",
                    "Bewertung von Bausubstanz und Ausstattung",
                    "Ermittlung des aktuellen Marktwertes",
                    "Berücksichtigung wertbeeinflussender Faktoren",
                    "Transparente und nachvollziehbare Darstellung",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <FileCheck
                        size={18}
                        className="flex-shrink-0 mt-0.5 text-success"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="section-title">Einsatzgebiete</h2>
            <p className="section-subtitle mx-auto mt-4">
              Unsere Gutachten werden f&uuml;r vielf&auml;ltige Zwecke
              ben&ouml;tigt &ndash; hier sind die h&auml;ufigsten Anwendungsf&auml;lle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="card card-hover p-6">
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-800 flex items-center justify-center mb-4">
                  {useCase.icon}
                </div>
                <h3 className="font-serif text-base font-semibold text-neutral-900 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="H&auml;ufig gestellte Fragen"
        subtitle="Antworten auf die wichtigsten Fragen rund um Gutachten und Immobilienbewertung."
        faqs={faqs}
      />

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Gutachten anfordern
          </h2>
          <p className="text-lg text-primary-200 mb-8 max-w-2xl mx-auto">
            Benötigen Sie ein professionelles Kurzgutachten? Kontaktieren Sie
            uns &ndash; wir beraten Sie gerne unverbindlich zu Ihrem Anliegen.
          </p>
          <Link
            href="/kontakt"
            className="btn-accent text-base px-8 py-4 inline-flex items-center"
          >
            Kontakt aufnehmen
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
