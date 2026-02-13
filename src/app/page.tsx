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
} from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
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
  { value: "30+", label: "Jahre Erfahrung" },
  { value: "2", label: "Standorte in OWL" },
  { value: "500+", label: "Vermittelte Immobilien" },
];

export default function HomePage() {
  const featuredProperties = getFeaturedProperties();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
            alt="Moderne Immobilie"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/70 to-primary-900/40" />
        </div>

        <div className="relative container-custom py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award size={16} />
              DEKRA-zertifizierter Sachverständiger
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ihr Immobilienexperte in Ostwestfalen-Lippe
            </h1>
            <p className="text-lg md:text-xl text-primary-100 mt-6 leading-relaxed">
              Seit über 30 Jahren – Makler, Gutachter, Partner. Wir begleiten Sie
              kompetent beim Kauf, Verkauf und bei der Bewertung Ihrer Immobilie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/bewertung" className="btn-accent text-base px-8 py-4">
                Kostenlose Bewertung
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link href="/immobilien" className="btn-secondary !bg-transparent !text-white !border-white hover:!bg-white hover:!text-primary-800 text-base px-8 py-4">
                Immobilien entdecken
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary-800 py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-white font-serif">
                  {stat.value}
                </p>
                <p className="text-primary-200 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="section-title">Unsere Leistungen</h2>
            <p className="section-subtitle mx-auto mt-4">
              Professionelle Immobiliendienstleistungen aus einer Hand – von der
              Bewertung bis zum Notartermin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="card card-hover p-8 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-50 text-primary-800 flex items-center justify-center mb-5 group-hover:bg-primary-800 group-hover:text-white transition-colors">
                  {iconMap[service.icon]}
                </div>
                <h3 className="font-serif text-xl font-semibold text-neutral-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed text-sm">
                  {service.description}
                </p>
                <div className="flex items-center gap-1 mt-4 text-primary-800 font-medium text-sm group-hover:text-accent transition-colors">
                  Mehr erfahren
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-4">
            <div>
              <h2 className="section-title">Ausgewählte Immobilien</h2>
              <p className="section-subtitle mt-4">
                Entdecken Sie unsere aktuellen Top-Angebote in der Region OWL.
              </p>
            </div>
            <Link
              href="/immobilien"
              className="btn-secondary flex-shrink-0"
            >
              Alle Immobilien
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.slice(0, 3).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Credentials */}
      <section className="py-16 border-y border-neutral-100">
        <div className="container-custom">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-primary-800 uppercase tracking-wider">
              Vertrauen &amp; Qualität
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-primary-50 rounded-full flex items-center justify-center mb-3">
                <Shield size={32} className="text-primary-800" />
              </div>
              <p className="text-sm font-semibold text-neutral-700">DEKRA</p>
              <p className="text-xs text-neutral-500">Zertifiziert</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-primary-50 rounded-full flex items-center justify-center mb-3">
                <Users size={32} className="text-primary-800" />
              </div>
              <p className="text-sm font-semibold text-neutral-700">IVD</p>
              <p className="text-xs text-neutral-500">Mitglied</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-accent-50 rounded-full flex items-center justify-center mb-3">
                <Award size={32} className="text-accent" />
              </div>
              <p className="text-sm font-semibold text-neutral-700">ImmoScout24</p>
              <p className="text-xs text-neutral-500">Awards 2015–2021</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="section-title">Was unsere Kunden sagen</h2>
            <p className="section-subtitle mx-auto mt-4">
              Kundenzufriedenheit steht bei uns an erster Stelle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="card p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-neutral-600 leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-neutral-100 pt-4">
                  <p className="font-semibold text-neutral-800">{t.name}</p>
                  <p className="text-sm text-neutral-500">{t.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Preview */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="section-title">Unsere Standorte</h2>
            <p className="section-subtitle mx-auto mt-4">
              Besuchen Sie uns an einem unserer zwei Standorte in der Region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((loc) => (
              <div key={loc.id} className="card overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={loc.image}
                    alt={loc.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-neutral-900 mb-4">
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
                        {loc.hours.map((h, i) => (
                          <p key={i}>
                            {h.days}: {h.time}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/ueber-uns/standorte" className="btn-secondary">
              Alle Standorte &amp; Anfahrt
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Sie möchten Ihre Immobilie verkaufen?
          </h2>
          <p className="text-lg text-primary-200 mb-8 max-w-2xl mx-auto">
            Von der Objektaufnahme bis zum Notartermin – wir begleiten Sie
            persönlich und kompetent durch den gesamten Prozess.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/bewertung" className="btn-accent text-base px-8 py-4">
              Kostenlos bewerten lassen
            </Link>
            <Link href="/kontakt" className="btn-secondary !bg-transparent !text-white !border-white hover:!bg-white hover:!text-primary-800 text-base px-8 py-4">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
