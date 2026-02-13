import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Award, ArrowRight } from "lucide-react";
import { team } from "@/data/team";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";

export const metadata: Metadata = {
  title: "Unser Team",
};

export default function TeamPage() {
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
              href="/ueber-uns/team"
              className="hover:text-white transition-colors"
            >
              &Uuml;ber uns
            </Link>
            <span>/</span>
            <span className="text-white">Unser Team</span>
          </nav>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Unser Team
          </h1>
          <p className="text-lg text-primary-200 mt-4 max-w-2xl leading-relaxed">
            Lernen Sie die Menschen hinter Farthmann Immobilien kennen &ndash;
            pers&ouml;nlich, kompetent und engagiert f&uuml;r Ihren Erfolg.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {team.map((member, i) => (
              <ScrollReveal key={member.id} animation="fade-up" delay={i * 100}>
                <div className="card overflow-hidden group">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {/* Photo */}
                    <div className="relative h-72 md:h-full min-h-[320px] overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>

                    {/* Info */}
                    <div className="md:col-span-2 p-8">
                      <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-1">
                        {member.name}
                      </h2>
                      <p className="text-primary-800 font-medium text-sm mb-4">
                        {member.role}
                      </p>

                      <p className="text-neutral-600 leading-relaxed mb-6">
                        {member.bio}
                      </p>

                      {/* Certifications */}
                      {member.certifications && member.certifications.length > 0 && (
                        <div className="mb-6">
                          <div className="flex flex-wrap gap-2">
                            {member.certifications.map((cert) => (
                              <span
                                key={cert}
                                className="badge badge-primary inline-flex items-center gap-1 group-hover:bg-primary-200 transition-colors duration-300"
                              >
                                <Award size={12} />
                                {cert}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Contact Links */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-neutral-100">
                        {member.phone && (
                          <a
                            href={`tel:+49${member.phone.replace(/\s/g, "").replace(/^0/, "")}`}
                            className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-primary-800 transition-colors"
                          >
                            <Phone size={16} className="text-primary-800" />
                            {member.phone}
                          </a>
                        )}
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-primary-800 transition-colors"
                          >
                            <Mail size={16} className="text-primary-800" />
                            {member.email}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-8">
                <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Unsere Geschichte</p>
                <h2 className="section-title">
                  &Uuml;ber 30 Jahre Erfahrung
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={150}>
              <div className="space-y-4 text-neutral-600 leading-relaxed text-left">
                <p>
                  Seit &uuml;ber drei Jahrzehnten ist Farthmann Immobilien ein
                  fester Bestandteil der Immobilienlandschaft in
                  Ostwestfalen-Lippe. Gegr&uuml;ndet von Heinz-Ulrich Farthmann,
                  hat sich das Unternehmen zu einer vertrauensw&uuml;rdigen
                  Adresse f&uuml;r Immobilienverkauf, Vermietung und professionelle
                  Gutachten entwickelt.
                </p>
                <p>
                  Unsere tiefe Verwurzelung in der Region OWL &ndash; mit Standorten
                  in Werther (Westf.) und Borgholzhausen &ndash; erm&ouml;glicht
                  es uns, den lokalen Markt wie kaum ein anderer zu kennen. Wir
                  wissen, welche Lagen gefragt sind, wie sich die Preise
                  entwickeln und worauf K&auml;ufer und Verk&auml;ufer in unserer
                  Region besonders Wert legen.
                </p>
                <p>
                  Als DEKRA-zertifizierter Sachverst&auml;ndiger und
                  IVD-Mitglied verbinden wir jahrelange praktische Erfahrung mit
                  anerkannter Fachkompetenz. Unser Anspruch ist es, jeden Kunden
                  individuell und pers&ouml;nlich zu beraten &ndash; denn jede
                  Immobilie und jede Situation ist einzigartig.
                </p>
                <p>
                  Die mehrfache Auszeichnung als ImmoScout24 Premium Partner
                  (2015&ndash;2021) unterstreicht unser Engagement f&uuml;r
                  Qualit&auml;t und Kundenzufriedenheit. F&uuml;r uns ist jede
                  Immobilie mehr als ein Objekt &ndash; sie ist ein Zuhause, eine
                  Investition oder ein Lebensprojekt, das wir mit H&ouml;chstma&szlig;
                  an Sorgfalt begleiten.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
        overlay="bg-gradient-to-r from-primary-950/90 via-primary-900/85 to-primary-800/80"
        speed={0.2}
      >
        <div className="py-24">
          <div className="container-custom text-center">
            <ScrollReveal animation="fade-up">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Kontaktieren Sie uns
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <p className="text-lg text-primary-200 mb-8 max-w-2xl mx-auto">
                Haben Sie Fragen oder m&ouml;chten Sie ein pers&ouml;nliches
                Beratungsgespr&auml;ch vereinbaren? Wir sind gerne f&uuml;r Sie da.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <Link
                href="/kontakt"
                className="btn-accent text-base px-8 py-4 inline-flex items-center"
              >
                Kontakt aufnehmen
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>
    </>
  );
}
