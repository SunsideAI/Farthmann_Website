import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Unsere Standorte",
};

export default function StandortePage() {
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
              href="/ueber-uns/standorte"
              className="hover:text-white transition-colors"
            >
              &Uuml;ber uns
            </Link>
            <span>/</span>
            <span className="text-white">Unsere Standorte</span>
          </nav>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Unsere Standorte
          </h1>
          <p className="text-lg text-primary-200 mt-4 max-w-2xl leading-relaxed">
            Besuchen Sie uns an unseren Standorten in Ostwestfalen-Lippe &ndash;
            wir freuen uns auf Ihren Besuch.
          </p>
        </div>
      </section>

      {/* Location Cards */}
      <section className="py-20">
        <div className="container-custom">
          <div className="space-y-12">
            {locations.map((location) => (
              <div key={location.id} className="card overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 lg:h-full min-h-[300px]">
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-8 lg:p-10">
                    <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">
                      {location.name}
                    </h2>

                    {/* Address */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <MapPin
                          size={18}
                          className="flex-shrink-0 mt-0.5 text-primary-800"
                        />
                        <div>
                          <p className="text-neutral-700 font-medium">
                            {location.address}
                          </p>
                          <p className="text-neutral-600">
                            {location.zip} {location.city}
                          </p>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-center gap-3">
                        <Phone
                          size={18}
                          className="flex-shrink-0 text-primary-800"
                        />
                        <div>
                          <a
                            href={`tel:+49${location.phone.replace(/\s/g, "").replace(/^0/, "")}`}
                            className="text-neutral-700 hover:text-primary-800 transition-colors"
                          >
                            {location.phone}
                          </a>
                        </div>
                      </div>

                      {/* Fax */}
                      {location.fax && (
                        <div className="flex items-center gap-3">
                          <Phone
                            size={18}
                            className="flex-shrink-0 text-neutral-400"
                          />
                          <div>
                            <span className="text-neutral-500 text-sm">
                              Fax: {location.fax}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Email */}
                      <div className="flex items-center gap-3">
                        <Mail
                          size={18}
                          className="flex-shrink-0 text-primary-800"
                        />
                        <a
                          href={`mailto:${location.email}`}
                          className="text-neutral-700 hover:text-primary-800 transition-colors"
                        >
                          {location.email}
                        </a>
                      </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Clock
                          size={18}
                          className="text-primary-800"
                        />
                        <h3 className="font-semibold text-neutral-800">
                          &Ouml;ffnungszeiten
                        </h3>
                      </div>
                      <table className="w-full text-sm">
                        <tbody>
                          {location.hours.map((h, i) => (
                            <tr key={i} className="border-b border-neutral-100 last:border-0">
                              <td className="py-2 text-neutral-600 pr-4 font-medium">
                                {h.days}
                              </td>
                              <td className="py-2 text-neutral-700">
                                {h.time}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Map Placeholder */}
                    <div className="h-[200px] bg-neutral-100 rounded-xl flex items-center justify-center">
                      <div className="text-center text-neutral-400">
                        <Navigation size={24} className="mx-auto mb-2" />
                        <p className="text-sm">Karte wird geladen...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Borgholzhausen Schaufenster */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="card p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-neutral-900 mb-2">
                    Schaufenster Borgholzhausen
                  </h3>
                  <p className="text-neutral-600 leading-relaxed mb-3">
                    Zus&auml;tzlich zu unserem B&uuml;ro in Borgholzhausen
                    pr&auml;sentieren wir ausgew&auml;hlte Immobilienangebote in
                    unserem Schaufenster in der Freistra&szlig;e 21 in
                    Borgholzhausen. Schauen Sie gerne vorbei und lassen Sie sich
                    von unseren aktuellen Angeboten inspirieren.
                  </p>
                  <div className="flex items-start gap-2 text-sm text-neutral-500">
                    <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                    <span>Freistra&szlig;e 21, 33829 Borgholzhausen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
