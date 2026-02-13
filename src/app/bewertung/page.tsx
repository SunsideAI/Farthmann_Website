"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle,
  Shield,
  Clock,
  Send,
} from "lucide-react";

export default function BewertungPage() {
  const [formData, setFormData] = useState({
    propertyType: "",
    area: "",
    location: "",
    name: "",
    phone: "",
    email: "",
    privacy: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-32">
        <div className="container-custom text-center">
          <div className="w-20 h-20 mx-auto bg-success-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle size={40} className="text-success" />
          </div>
          <h2 className="section-title mb-4">Vielen Dank!</h2>
          <p className="text-lg text-neutral-600 max-w-xl mx-auto mb-8">
            Ihre Bewertungsanfrage ist bei uns eingegangen. Wir melden uns
            innerhalb von 48 Stunden bei Ihnen, um einen Besichtigungstermin zu
            vereinbaren.
          </p>
          <Link href="/" className="btn-primary">
            Zurück zur Startseite
          </Link>
        </div>
      </section>
    );
  }

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
            <span className="text-white">Kostenlose Bewertung</span>
          </nav>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Kostenlose Marktwerteinschätzung
          </h1>
          <p className="text-lg text-primary-200 mt-4 max-w-2xl">
            Erfahren Sie den aktuellen Marktwert Ihrer Immobilie – kostenlos,
            unverbindlich und von einem DEKRA-zertifizierten Sachverständigen.
          </p>
        </div>
      </section>

      {/* Form + Trust */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="card p-8">
                <h2 className="font-heading text-2xl font-semibold text-neutral-900 mb-6">
                  Immobilie beschreiben
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="propertyType" className="form-label">
                      Immobilienart *
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="form-input"
                      required
                    >
                      <option value="">Bitte wählen</option>
                      <option value="haus">Haus</option>
                      <option value="wohnung">Wohnung</option>
                      <option value="grundstueck">Grundstück</option>
                      <option value="gewerbe">Gewerbe</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="area" className="form-label">
                        Wohnfläche ca. (m²)
                      </label>
                      <input
                        id="area"
                        name="area"
                        type="number"
                        placeholder="z.B. 120"
                        value={formData.area}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="form-label">
                        PLZ / Ort *
                      </label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        placeholder="z.B. 33824 Werther"
                        value={formData.location}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <hr className="border-neutral-100" />

                  <h3 className="font-semibold text-neutral-800">
                    Ihre Kontaktdaten
                  </h3>

                  <div>
                    <label htmlFor="name" className="form-label">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Ihr vollständiger Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="form-label">
                        Telefon *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Ihre Telefonnummer"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label">
                        E-Mail *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Ihre E-Mail-Adresse"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      checked={formData.privacy}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 rounded border-neutral-300 text-primary-800 focus:ring-primary-500"
                      required
                    />
                    <label htmlFor="privacy" className="text-sm text-neutral-600">
                      Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                      <Link
                        href="/datenschutz"
                        className="text-primary-800 underline"
                      >
                        Datenschutzerklärung
                      </Link>{" "}
                      zu. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-accent w-full text-base py-4 disabled:opacity-50"
                  >
                    {submitting ? (
                      "Wird gesendet..."
                    ) : (
                      <>
                        Bewertung anfordern
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Shield size={24} className="text-primary-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">
                      DEKRA-zertifiziert
                    </h3>
                    <p className="text-sm text-neutral-500 mt-1">
                      Als DEKRA-zertifizierter Sachverständiger erstellen wir
                      fundierte Marktwerteinschätzungen.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-success-50 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={24} className="text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">
                      Kostenlos &amp; unverbindlich
                    </h3>
                    <p className="text-sm text-neutral-500 mt-1">
                      Die Marktwerteinschätzung ist für Sie vollkommen kostenlos
                      und unverbindlich.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">
                      Innerhalb von 48 Stunden
                    </h3>
                    <p className="text-sm text-neutral-500 mt-1">
                      Nach Eingang Ihrer Anfrage melden wir uns innerhalb von 48
                      Stunden bei Ihnen.
                    </p>
                  </div>
                </div>
              </div>

              {/* Process Steps */}
              <div className="card p-6">
                <h3 className="font-semibold text-neutral-900 mb-4">
                  So funktioniert&apos;s
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      step: 1,
                      title: "Anfrage senden",
                      desc: "Füllen Sie das Formular aus",
                    },
                    {
                      step: 2,
                      title: "Terminvereinbarung",
                      desc: "Wir kontaktieren Sie für einen Besichtigungstermin",
                    },
                    {
                      step: 3,
                      title: "Bewertung erhalten",
                      desc: "Sie erhalten eine fundierte Marktwerteinschätzung",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-800 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <p className="font-medium text-neutral-800">
                          {item.title}
                        </p>
                        <p className="text-sm text-neutral-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
