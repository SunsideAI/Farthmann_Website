import { getPropertyById, getAllPropertyIds } from "@/data/properties";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  Calendar,
  CheckCircle,
  ArrowLeft,
  Phone,
  Mail,
} from "lucide-react";
import { formatPrice } from "@/lib/utils";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getAllPropertyIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    return { title: "Immobilie nicht gefunden" };
  }

  return {
    title: property.title,
    description: property.description,
    openGraph: {
      title: property.title,
      description: property.description,
      images: property.images[0] ? [{ url: property.images[0] }] : [],
    },
  };
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    notFound();
  }

  const categoryLabels: Record<string, string> = {
    haus: "Haus",
    wohnung: "Wohnung",
    grundstueck: "Grundstück",
    gewerbe: "Gewerbe",
  };

  return (
    <>
      {/* Back Navigation */}
      <section className="bg-neutral-50 border-b border-neutral-200">
        <div className="container-custom py-4">
          <Link
            href="/immobilien"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-800 hover:text-accent transition-colors"
          >
            <ArrowLeft size={16} />
            Zurück zur Übersicht
          </Link>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="bg-neutral-50 pb-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Main Image */}
            <div className="md:col-span-2 relative h-72 md:h-[480px] rounded-xl overflow-hidden">
              <Image
                src={property.images[0]}
                alt={property.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="hidden md:flex flex-col gap-4">
              {property.images.slice(1, 3).map((img, index) => (
                <div
                  key={index}
                  className="relative h-[232px] rounded-xl overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={`${property.title} - Bild ${index + 2}`}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                </div>
              ))}
              {property.images.length <= 1 && (
                <div className="h-[232px] rounded-xl bg-neutral-200 flex items-center justify-center text-neutral-400 text-sm">
                  Kein weiteres Bild
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Title & Meta */}
              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                      property.type === "kauf"
                        ? "bg-primary-100 text-primary-800"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    {property.type === "kauf" ? "Kauf" : "Miete"}
                  </span>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-neutral-100 text-neutral-600">
                    {categoryLabels[property.category]}
                  </span>
                </div>
                <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900">
                  {property.title}
                </h1>
                <div className="flex items-center gap-1.5 mt-3 text-neutral-500">
                  <MapPin size={18} />
                  <span>{property.location}</span>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-primary-800 mt-4">
                  {formatPrice(property.price)}
                  {property.type === "miete" && (
                    <span className="text-base font-normal text-neutral-500">
                      {" "}
                      / Monat
                    </span>
                  )}
                </p>
              </div>

              {/* Key Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {property.bedrooms > 0 && (
                  <div className="card p-4 text-center">
                    <BedDouble
                      size={24}
                      className="mx-auto text-primary-800 mb-2"
                    />
                    <p className="text-xl font-bold text-neutral-800">
                      {property.bedrooms}
                    </p>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider mt-1">
                      Zimmer
                    </p>
                  </div>
                )}
                {property.bathrooms > 0 && (
                  <div className="card p-4 text-center">
                    <Bath
                      size={24}
                      className="mx-auto text-primary-800 mb-2"
                    />
                    <p className="text-xl font-bold text-neutral-800">
                      {property.bathrooms}
                    </p>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider mt-1">
                      Bäder
                    </p>
                  </div>
                )}
                <div className="card p-4 text-center">
                  <Maximize
                    size={24}
                    className="mx-auto text-primary-800 mb-2"
                  />
                  <p className="text-xl font-bold text-neutral-800">
                    {property.area} m²
                  </p>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider mt-1">
                    Fläche
                  </p>
                </div>
                {property.yearBuilt > 0 && (
                  <div className="card p-4 text-center">
                    <Calendar
                      size={24}
                      className="mx-auto text-primary-800 mb-2"
                    />
                    <p className="text-xl font-bold text-neutral-800">
                      {property.yearBuilt}
                    </p>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider mt-1">
                      Baujahr
                    </p>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mb-10">
                <h2 className="font-serif text-xl font-semibold text-neutral-900 mb-4">
                  Beschreibung
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Features */}
              {property.features.length > 0 && (
                <div>
                  <h2 className="font-serif text-xl font-semibold text-neutral-900 mb-4">
                    Ausstattung & Merkmale
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {property.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2.5 text-neutral-600"
                      >
                        <CheckCircle
                          size={18}
                          className="text-green-600 flex-shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Contact Sidebar */}
            <div className="lg:col-span-1">
              <div className="card p-6 lg:p-8 sticky top-8">
                <h3 className="font-serif text-lg font-semibold text-neutral-900 mb-2">
                  Interesse an dieser Immobilie?
                </h3>
                <p className="text-sm text-neutral-500 mb-6">
                  Kontaktieren Sie uns für weitere Informationen oder eine
                  Besichtigung.
                </p>

                <div className="border-t border-neutral-100 pt-6 mb-6">
                  <p className="font-semibold text-neutral-800 mb-1">
                    Herr Heinz-Ulrich Farthmann
                  </p>
                  <p className="text-sm text-neutral-500 mb-4">
                    Geschäftsinhaber & Gutachter
                  </p>

                  <div className="space-y-3">
                    <a
                      href="tel:+4952039171699"
                      className="flex items-center gap-3 text-sm text-neutral-600 hover:text-primary-800 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                        <Phone size={16} className="text-primary-800" />
                      </div>
                      05203 9 17 16 99
                    </a>
                    <a
                      href="mailto:info@farthmann-immo.de"
                      className="flex items-center gap-3 text-sm text-neutral-600 hover:text-primary-800 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                        <Mail size={16} className="text-primary-800" />
                      </div>
                      info@farthmann-immo.de
                    </a>
                  </div>
                </div>

                <Link
                  href="/kontakt"
                  className="btn-primary w-full text-center block"
                >
                  Besichtigung anfragen
                </Link>
                <Link
                  href="/bewertung"
                  className="btn-secondary w-full text-center block mt-3"
                >
                  Kostenlose Bewertung
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
