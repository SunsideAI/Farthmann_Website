"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    betreff: "",
    nachricht: "",
    dsgvo: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      betreff: "",
      nachricht: "",
      dsgvo: false,
    });
  };

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
            <span className="text-white">Kontakt</span>
          </nav>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Kontakt
          </h1>
          <p className="text-lg text-primary-200 mt-4 max-w-2xl leading-relaxed">
            Wir sind gerne f&uuml;r Sie da. Schreiben Sie uns oder rufen Sie
            einfach an &ndash; wir freuen uns auf Ihre Nachricht.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Form */}
            <ScrollReveal animation="fade-right">
              <div>
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-6">
                  Nachricht senden
                </h2>

                {isSuccess ? (
                  <div className="card p-8 text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-success/10 flex items-center justify-center mb-4">
                      <CheckCircle size={32} className="text-success" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-neutral-900 mb-2">
                      Nachricht gesendet!
                    </h3>
                    <p className="text-neutral-600 mb-6">
                      Vielen Dank f&uuml;r Ihre Nachricht. Wir werden uns
                      schnellstm&ouml;glich bei Ihnen melden.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="btn-primary"
                    >
                      Neue Nachricht senden
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="form-label">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Ihr vollständiger Name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="form-label">
                        E-Mail <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="ihre@email.de"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="form-label">
                        Telefon <span className="text-neutral-400">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Ihre Telefonnummer"
                      />
                    </div>

                    {/* Betreff */}
                    <div>
                      <label htmlFor="betreff" className="form-label">
                        Betreff
                      </label>
                      <select
                        id="betreff"
                        name="betreff"
                        value={formData.betreff}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="">Bitte w&auml;hlen...</option>
                        <option value="verkaufsberatung">Verkaufsberatung</option>
                        <option value="vermietung">Vermietung</option>
                        <option value="gutachten">Gutachten</option>
                        <option value="allgemein">Allgemeine Anfrage</option>
                      </select>
                    </div>

                    {/* Nachricht */}
                    <div>
                      <label htmlFor="nachricht" className="form-label">
                        Nachricht <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="nachricht"
                        name="nachricht"
                        required
                        rows={5}
                        value={formData.nachricht}
                        onChange={handleChange}
                        className="form-input resize-vertical"
                        placeholder="Wie können wir Ihnen helfen?"
                      />
                    </div>

                    {/* DSGVO Checkbox */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="dsgvo"
                        name="dsgvo"
                        required
                        checked={formData.dsgvo}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 rounded border-neutral-300 text-primary-800 focus:ring-primary-800"
                      />
                      <label htmlFor="dsgvo" className="text-sm text-neutral-600">
                        Ich habe die{" "}
                        <Link
                          href="/datenschutz"
                          className="text-primary-800 underline hover:no-underline"
                        >
                          Datenschutzerkl&auml;rung
                        </Link>{" "}
                        gelesen und bin mit der Verarbeitung meiner Daten
                        einverstanden.{" "}
                        <span className="text-red-500">*</span>
                      </label>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Nachricht senden
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Right: Contact Information */}
            <ScrollReveal animation="fade-left" delay={150}>
              <div>
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-6">
                  Kontaktinformationen
                </h2>

                <div className="space-y-6">
                  {/* Büro Werther */}
                  <div className="card p-6 group hover:-translate-y-1 transition-all duration-500">
                    <h3 className="font-heading text-lg font-semibold text-neutral-900 mb-4">
                      B&uuml;ro Werther
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <MapPin
                          size={16}
                          className="flex-shrink-0 mt-0.5 text-primary-800"
                        />
                        <div>
                          <p className="text-neutral-700">Engerstra&szlig;e 50</p>
                          <p className="text-neutral-600">
                            33824 Werther (Westf.)
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone
                          size={16}
                          className="flex-shrink-0 text-primary-800"
                        />
                        <a
                          href="tel:+4952039171699"
                          className="text-neutral-700 hover:text-primary-800 transition-colors"
                        >
                          05203 9 17 16 99
                        </a>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock
                          size={16}
                          className="flex-shrink-0 mt-0.5 text-primary-800"
                        />
                        <div className="text-neutral-600">
                          <p>Mo &ndash; Do: 9:00 &ndash; 13:00 &amp; 14:30 &ndash; 18:00 Uhr</p>
                          <p>Fr: 9:00 &ndash; 13:00 &amp; 14:30 &ndash; 16:00 Uhr</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Büro Borgholzhausen */}
                  <div className="card p-6 group hover:-translate-y-1 transition-all duration-500">
                    <h3 className="font-heading text-lg font-semibold text-neutral-900 mb-4">
                      B&uuml;ro Borgholzhausen
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <MapPin
                          size={16}
                          className="flex-shrink-0 mt-0.5 text-primary-800"
                        />
                        <div>
                          <p className="text-neutral-700">Dorfstra&szlig;e 4</p>
                          <p className="text-neutral-600">
                            33829 Borgholzhausen
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone
                          size={16}
                          className="flex-shrink-0 text-primary-800"
                        />
                        <a
                          href="tel:+4954259339933"
                          className="text-neutral-700 hover:text-primary-800 transition-colors"
                        >
                          05425 9 33 99 33
                        </a>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock
                          size={16}
                          className="flex-shrink-0 mt-0.5 text-primary-800"
                        />
                        <div className="text-neutral-600">
                          <p>Termine nach Vereinbarung</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="card p-6 group hover:-translate-y-1 transition-all duration-500">
                    <div className="flex items-center gap-3">
                      <Mail size={18} className="text-primary-800" />
                      <div>
                        <p className="text-sm text-neutral-500 mb-1">E-Mail</p>
                        <a
                          href="mailto:info@farthmann-immo.de"
                          className="text-neutral-700 hover:text-primary-800 transition-colors font-medium"
                        >
                          info@farthmann-immo.de
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Map Placeholder */}
                  <div className="h-[250px] bg-neutral-100 rounded-xl flex items-center justify-center group hover:shadow-lg transition-all duration-500">
                    <div className="text-center text-neutral-400 group-hover:text-neutral-500 transition-colors">
                      <MapPin size={24} className="mx-auto mb-2" />
                      <p className="text-sm">Karte wird geladen...</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
