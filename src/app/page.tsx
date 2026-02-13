import Image from "next/image";
import Link from "next/link";
import {
  Home,
  FileCheck,
  Eye,
  ArrowRight,
  Star,
  MapPin,
  Phone,
  Clock,
  Award,
  Shield,
  Users,
  ChevronDown,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import PropertyCard from "@/components/PropertyCard";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import ParallaxSection from "@/components/ParallaxSection";
import { services } from "@/data/services";
import { getFeaturedProperties } from "@/data/properties";
import { testimonials } from "@/data/testimonials";
import { locations } from "@/data/locations";

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home size={28} />,
  FileCheck: <FileCheck size={28} />,
  Eye: <Eye size={28} />,
};

const stats = [
  { value: 30, suffix: "+", label: "Jahre Erfahrung", icon: Award },
  { value: 2, suffix: "", label: "Standorte in OWL", icon: MapPin },
  { value: 500, suffix: "+", label: "Vermittelte Immobilien", icon: TrendingUp },
];

export default function HomePage() {
  const featuredProperties = getFeaturedProperties();

  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Scroll hint */}
      <div className="relative z-10 -mt-12 flex justify-center">
        <div className="animate-scroll-bounce text-white/60">
          <ChevronDown size={32} />
        </div>
      </div>

      {/* Stats – animated counters */}
      <section className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 py-12 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} animation="fade-up" stagger={150} staggerIndex={i}>
                <div className="group">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500">
                    <stat.icon size={24} className="text-accent-400" />
                  </div>
                  <p className="text-4xl md:text-5xl font-bold text-white font-heading">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2500} />
                  </p>
                  <p className="text-primary-200 mt-2 text-sm tracking-wider uppercase">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-50" />

        <div className="container-custom relative">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Was wir bieten</p>
              <h2 className="section-title">Unsere Leistungen</h2>
              <p className="section-subtitle mx-auto mt-4">
                Professionelle Immobiliendienstleistungen aus einer Hand – von der
                Bewertung bis zum Notartermin.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} animation="fade-up" stagger={150} staggerIndex={i}>
                <Link
                  href={service.href}
                  className="card p-8 group relative overflow-hidden block h-full"
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-800 flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                      {iconMap[service.icon]}
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-neutral-900 mb-3 group-hover:text-white transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-neutral-500 leading-relaxed text-sm group-hover:text-primary-100 transition-colors duration-500">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 mt-6 text-primary-800 font-medium text-sm group-hover:text-accent-400 transition-colors duration-500">
                      Mehr erfahren
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-2 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-neutral-50 relative">
        <div className="container-custom">
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-4">
              <div>
                <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Aktuelle Angebote</p>
                <h2 className="section-title">Ausgewählte Immobilien</h2>
                <p className="section-subtitle mt-4">
                  Entdecken Sie unsere aktuellen Top-Angebote in der Region OWL.
                </p>
              </div>
              <Link
                href="/immobilien"
                className="btn-secondary flex-shrink-0 group"
              >
                Alle Immobilien
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.slice(0, 3).map((property, i) => (
              <ScrollReveal key={property.id} animation="fade-up" stagger={150} staggerIndex={i}>
                <PropertyCard property={property} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Credentials */}
      <section className="py-20 border-y border-neutral-100 relative overflow-hidden">
        <div className="container-custom">
          <ScrollReveal animation="fade">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-primary-800 uppercase tracking-wider">
                Vertrauen &amp; Qualität
              </p>
            </div>
          </ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            {[
              { icon: Shield, label: "DEKRA", sub: "Zertifiziert", color: "primary" },
              { icon: Users, label: "IVD", sub: "Mitglied", color: "primary" },
              { icon: Award, label: "ImmoScout24", sub: "Awards 2015–2021", color: "accent" },
            ].map((item, i) => (
              <ScrollReveal key={item.label} animation="zoom-in" stagger={150} staggerIndex={i}>
                <div className="text-center group cursor-default">
                  <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg ${
                    item.color === "accent" ? "bg-accent-50 group-hover:shadow-accent-200" : "bg-primary-50 group-hover:shadow-primary-200"
                  }`}>
                    <item.icon size={36} className={item.color === "accent" ? "text-accent" : "text-primary-800"} />
                  </div>
                  <p className="text-sm font-bold text-neutral-700">{item.label}</p>
                  <p className="text-xs text-neutral-500 mt-0.5">{item.sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative quote mark */}
        <div className="absolute top-20 left-10 text-primary-50 font-heading text-[200px] leading-none select-none opacity-50">&ldquo;</div>

        <div className="container-custom relative">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Kundenstimmen</p>
              <h2 className="section-title">Was unsere Kunden sagen</h2>
              <p className="section-subtitle mx-auto mt-4">
                Kundenzufriedenheit steht bei uns an erster Stelle.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.id} animation="fade-up" stagger={150} staggerIndex={i}>
                <div className="card p-8 group hover:-translate-y-2 transition-all duration-500 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star
                        key={j}
                        size={18}
                        className="fill-accent text-accent group-hover:scale-110 transition-transform duration-300"
                        style={{ transitionDelay: `${j * 50}ms` }}
                      />
                    ))}
                  </div>
                  <p className="text-neutral-600 leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="border-t border-neutral-100 pt-4 mt-auto">
                    <p className="font-semibold text-neutral-800">{t.name}</p>
                    <p className="text-sm text-neutral-500">{t.type}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Preview */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Vor Ort für Sie da</p>
              <h2 className="section-title">Unsere Standorte</h2>
              <p className="section-subtitle mx-auto mt-4">
                Besuchen Sie uns an einem unserer zwei Standorte in der Region.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((loc, i) => (
              <ScrollReveal key={loc.id} animation={i === 0 ? "fade-right" : "fade-left"} delay={100}>
                <div className="card overflow-hidden group h-full">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={loc.image}
                      alt={loc.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-neutral-900 mb-4 group-hover:text-primary-800 transition-colors">
                      {loc.name}
                    </h3>
                    <div className="space-y-3 text-sm text-neutral-600">
                      <div className="flex items-start gap-2">
                        <MapPin size={16} className="flex-shrink-0 mt-0.5 text-primary-800" />
                        <span>
                          {loc.address}, {loc.zip} {loc.city}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={16} className="flex-shrink-0 text-primary-800" />
                        <a href={`tel:+49${loc.phone.replace(/\s/g, "").replace(/^0/, "")}`} className="hover:text-primary-800 transition-colors">
                          {loc.phone}
                        </a>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock size={16} className="flex-shrink-0 mt-0.5 text-primary-800" />
                        <div>
                          {loc.hours.map((h, j) => (
                            <p key={j}>
                              {h.days}: {h.time}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="text-center mt-10">
              <Link href="/ueber-uns/standorte" className="btn-secondary group">
                Alle Standorte &amp; Anfahrt
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Banner – Parallax */}
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
        overlay="bg-gradient-to-r from-primary-950/90 via-primary-900/85 to-primary-800/80"
        speed={0.2}
      >
        <div className="py-28">
          <div className="container-custom text-center">
            <ScrollReveal animation="fade-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 text-sm text-accent-400 mb-8">
                <CheckCircle size={16} />
                Kostenlos &amp; unverbindlich
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-5 text-balance">
                Sie möchten Ihre Immobilie verkaufen?
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
                Von der Objektaufnahme bis zum Notartermin – wir begleiten Sie
                persönlich und kompetent durch den gesamten Prozess.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/bewertung" className="btn-accent text-base px-8 py-4 animate-pulse-ring">
                  Kostenlos bewerten lassen
                </Link>
                <Link href="/kontakt" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-800 transition-all duration-300 text-base group">
                  Kontakt aufnehmen
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>
    </>
  );
}
