import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Shield,
  Users,
  Calendar,
  Camera,
  TrendingUp,
  Globe,
  ArrowRight,
  Home,
  Building,
  Landmark,
  CheckCircle,
} from "lucide-react";
import { sevenReasons, propertyTypes, processSteps } from "@/data/services";
import FAQSection from "@/components/FAQSection";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title: "Verkauf & Vermietung",
};

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award size={28} />,
  Shield: <Shield size={28} />,
  Users: <Users size={28} />,
  Calendar: <Calendar size={28} />,
  Camera: <Camera size={28} />,
  TrendingUp: <TrendingUp size={28} />,
  Globe: <Globe size={28} />,
};

const propertyTypeConfig = [
  {
    key: "wohnimmobilien" as const,
    title: "Wohnimmobilien",
    icon: <Home size={32} className="text-primary-800" />,
  },
  {
    key: "gewerbeimmobilien" as const,
    title: "Gewerbeimmobilien",
    icon: <Building size={32} className="text-primary-800" />,
  },
  {
    key: "anlageimmobilien" as const,
    title: "Anlageimmobilien",
    icon: <Landmark size={32} className="text-primary-800" />,
  },
];

const faqs: FAQ[] = [
  {
    question: "Was kostet die Beauftragung eines Maklers?",
    answer:
      "Die Maklerprovision richtet sich nach den gesetzlichen Regelungen. Seit Dezember 2020 gilt beim Verkauf von Wohnimmobilien an Verbraucher das Bestellerprinzip, wonach die Provision in der Regel zwischen Verkäufer und Käufer geteilt wird. Die genauen Konditionen besprechen wir transparent und individuell mit Ihnen im Vorfeld.",
  },
  {
    question: "Wie lange dauert ein Verkauf?",
    answer:
      "Die Dauer eines Immobilienverkaufs hängt von verschiedenen Faktoren ab, wie Lage, Zustand, Preisgestaltung und Marktlage. Im Durchschnitt dauert ein Verkauf bei uns zwischen 3 und 6 Monaten. Durch unsere umfangreiche Interessentendatenbank und professionelle Vermarktung können wir diesen Zeitraum häufig verkürzen.",
  },
  {
    question: "Welche Unterlagen benötige ich?",
    answer:
      "Für den Verkauf benötigen wir unter anderem: Grundbuchauszug, Energieausweis, Grundrisse, Wohnflächenberechnung, Baubeschreibung, aktuelle Nebenkostenabrechnungen und bei Eigentumswohnungen zusätzlich die Teilungserklärung sowie Protokolle der Eigentümerversammlungen. Wir unterstützen Sie gerne bei der Beschaffung fehlender Unterlagen.",
  },
  {
    question: "Bieten Sie auch Mietverwaltung an?",
    answer:
      "Unser Schwerpunkt liegt auf der Vermittlung von Immobilien – sowohl im Verkauf als auch in der Vermietung. Eine klassische Mietverwaltung bieten wir derzeit nicht an, können Ihnen jedoch gerne kompetente Partner aus unserem Netzwerk empfehlen.",
  },
];

export default function VerkaufVermietungPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary-800 py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative">
          <nav className="flex items-center gap-2 text-sm text-primary-200 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Startseite
            </Link>
            <span>/</span>
            <Link
              href="/leistungen/verkauf-vermietung"
              className="hover:text-white transition-colors"
            >
              Leistungen
            </Link>
            <span>/</span>
            <span className="text-white">Verkauf &amp; Vermietung</span>
          </nav>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Verkauf &amp; Vermietung
          </h1>
          <p className="text-lg text-primary-200 mt-4 max-w-2xl leading-relaxed">
            Von der Objektaufnahme bis zum Notartermin &ndash; wir begleiten Sie
            mit Full-Service beim Verkauf oder der Vermietung Ihrer Immobilie.
            Profitieren Sie von &uuml;ber 30 Jahren Erfahrung in der Region
            Ostwestfalen-Lippe.
          </p>
        </div>
      </section>

      {/* 7 Reasons Section */}
      <section className="py-24">
        <div className="container-custom">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Warum wir?</p>
              <h2 className="section-title">
                7 Gr&uuml;nde f&uuml;r Farthmann Immobilien
              </h2>
              <p className="section-subtitle mx-auto mt-4">
                Erfahren Sie, warum Sie mit uns den richtigen Partner an Ihrer
                Seite haben.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sevenReasons.map((reason, i) => (
              <ScrollReveal key={reason.number} animation="fade-up" stagger={100} staggerIndex={i}>
                <div className="card p-8 relative group hover:-translate-y-2 transition-all duration-500 h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-white font-bold text-lg font-heading group-hover:scale-110 transition-transform duration-300">
                        {reason.number}
                      </span>
                    </div>
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-800 flex items-center justify-center mb-4 group-hover:bg-primary-800 group-hover:text-white transition-all duration-500">
                        {iconMap[reason.icon]}
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-neutral-900 mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-neutral-500 text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Unser Spektrum</p>
              <h2 className="section-title">Unsere Immobilientypen</h2>
              <p className="section-subtitle mx-auto mt-4">
                Wir vermitteln ein breites Spektrum an Immobilien &ndash; von
                Wohnimmobilien &uuml;ber Gewerbeimmobilien bis hin zu
                Anlageimmobilien.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {propertyTypeConfig.map((config, i) => (
              <ScrollReveal key={config.key} animation="fade-up" stagger={150} staggerIndex={i}>
                <div className="card p-8 group hover:-translate-y-2 transition-all duration-500 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-100 transition-all duration-500">
                    {config.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-neutral-900 mb-4">
                    {config.title}
                  </h3>
                  <ul className="space-y-3">
                    {propertyTypes[config.key].map((type, j) => (
                      <li
                        key={type}
                        className="flex items-center gap-2 text-neutral-600 text-sm"
                        style={{ transitionDelay: `${j * 50}ms` }}
                      >
                        <CheckCircle
                          size={16}
                          className="flex-shrink-0 text-success"
                        />
                        {type}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24">
        <div className="container-custom">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Schritt für Schritt</p>
              <h2 className="section-title">Unser Prozess</h2>
              <p className="section-subtitle mx-auto mt-4">
                Schritt f&uuml;r Schritt zum erfolgreichen Abschluss &ndash;
                transparent und zuverl&auml;ssig.
              </p>
            </div>
          </ScrollReveal>

          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-primary-100" />
              <div className="grid grid-cols-6 gap-4">
                {processSteps.map((step, i) => (
                  <ScrollReveal key={step.step} animation="fade-up" stagger={120} staggerIndex={i}>
                    <div className="relative text-center group">
                      <div className="relative z-10 w-16 h-16 mx-auto rounded-full bg-primary-800 text-white flex items-center justify-center font-bold text-xl font-heading shadow-lg group-hover:scale-110 group-hover:shadow-xl group-hover:bg-accent transition-all duration-500">
                        {step.step}
                      </div>
                      <h3 className="font-heading text-base font-semibold text-neutral-900 mt-4 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-neutral-500 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-primary-100" />
              <div className="space-y-8">
                {processSteps.map((step, i) => (
                  <ScrollReveal key={step.step} animation="fade-left" stagger={100} staggerIndex={i}>
                    <div className="relative flex items-start gap-6">
                      <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-primary-800 text-white flex items-center justify-center font-bold text-xl font-heading shadow-lg">
                        {step.step}
                      </div>
                      <div className="pt-3">
                        <h3 className="font-heading text-lg font-semibold text-neutral-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-neutral-500 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="H&auml;ufig gestellte Fragen"
        subtitle="Antworten auf die wichtigsten Fragen rund um Verkauf und Vermietung."
        faqs={faqs}
      />

      {/* CTA Banner – Parallax */}
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
        overlay="bg-gradient-to-r from-primary-950/90 via-primary-900/85 to-primary-800/80"
        speed={0.2}
      >
        <div className="py-24">
          <div className="container-custom text-center">
            <ScrollReveal animation="fade-up">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Bereit f&uuml;r den n&auml;chsten Schritt?
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <p className="text-lg text-primary-200 mb-8 max-w-2xl mx-auto">
                Lassen Sie Ihre Immobilie kostenlos bewerten oder nehmen Sie direkt
                Kontakt mit uns auf. Wir beraten Sie gerne pers&ouml;nlich.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/bewertung" className="btn-accent text-base px-8 py-4">
                  Kostenlose Bewertung
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-800 transition-all duration-300 text-base"
                >
                  Kontakt aufnehmen
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>
    </>
  );
}
