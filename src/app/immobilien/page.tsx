"use client";

import { useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import { filterProperties } from "@/data/properties";
import { Search, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

export default function ImmobilienPage() {
  const [typeFilter, setTypeFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [locationSearch, setLocationSearch] = useState("");

  const filteredProperties = filterProperties({
    type: typeFilter || undefined,
    category: categoryFilter || undefined,
    location: locationSearch || undefined,
  });

  return (
    <>
      {/* Page Header */}
      <section className="bg-primary-800 py-16 md:py-20">
        <div className="container-custom">
          <nav className="text-sm text-primary-300 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Startseite
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Immobilien</span>
          </nav>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Immobilien Angebote
          </h1>
          <p className="text-lg text-primary-200 mt-4 max-w-2xl">
            Entdecken Sie unser aktuelles Portfolio an Immobilien zum Kauf und
            zur Miete in Ostwestfalen-Lippe.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white border-b border-neutral-200 sticky top-0 z-30">
        <div className="container-custom py-5">
          <div className="flex items-center gap-2 text-neutral-600 mb-4">
            <SlidersHorizontal size={18} />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Filter
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Type Filter */}
            <div>
              <label htmlFor="type-filter" className="form-label">
                Art
              </label>
              <select
                id="type-filter"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="form-input"
              >
                <option value="">Alle</option>
                <option value="kauf">Kauf</option>
                <option value="miete">Miete</option>
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <label htmlFor="category-filter" className="form-label">
                Kategorie
              </label>
              <select
                id="category-filter"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="form-input"
              >
                <option value="">Alle</option>
                <option value="haus">Haus</option>
                <option value="wohnung">Wohnung</option>
                <option value="grundstueck">Grundstück</option>
                <option value="gewerbe">Gewerbe</option>
              </select>
            </div>

            {/* Location Search */}
            <div>
              <label htmlFor="location-search" className="form-label">
                Ort
              </label>
              <div className="relative">
                <input
                  id="location-search"
                  type="text"
                  placeholder="z.B. Werther, Borgholzhausen..."
                  value={locationSearch}
                  onChange={(e) => setLocationSearch(e.target.value)}
                  className="form-input pr-10"
                />
                <Search
                  size={18}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-neutral-50">
        <div className="container-custom">
          {/* Results Count */}
          <p className="text-sm text-neutral-500 mb-8">
            <span className="font-semibold text-neutral-800">
              {filteredProperties.length}
            </span>{" "}
            {filteredProperties.length === 1 ? "Immobilie" : "Immobilien"}{" "}
            gefunden
          </p>

          {/* Property Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto bg-neutral-100 rounded-full flex items-center justify-center mb-6">
                <Search size={32} className="text-neutral-400" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-neutral-800 mb-2">
                Keine Immobilien gefunden
              </h3>
              <p className="text-neutral-500 max-w-md mx-auto">
                Leider entspricht keine Immobilie Ihren Suchkriterien. Bitte
                passen Sie Ihre Filter an oder kontaktieren Sie uns direkt.
              </p>
              <button
                onClick={() => {
                  setTypeFilter("");
                  setCategoryFilter("");
                  setLocationSearch("");
                }}
                className="btn-secondary mt-6"
              >
                Filter zurücksetzen
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ihre Wunschimmobilie nicht gefunden?
          </h2>
          <p className="text-lg text-primary-200 mb-8 max-w-2xl mx-auto">
            Wir haben nicht alle Objekte online. Kontaktieren Sie uns und
            schildern Sie uns Ihre Wünsche – wir finden die passende Immobilie
            für Sie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn-accent text-base px-8 py-4">
              Kontakt aufnehmen
            </Link>
            <Link
              href="/bewertung"
              className="btn-secondary !bg-transparent !text-white !border-white hover:!bg-white hover:!text-primary-800 text-base px-8 py-4"
            >
              Immobilie bewerten lassen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
