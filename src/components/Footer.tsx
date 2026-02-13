import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Company Info */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo/farthmann-logo-white.svg"
              alt="Farthmann Immobilien"
              width={200}
              height={40}
              className="mb-4"
            />
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Ihr vertrauenswürdiger Partner für Immobilien in Ostwestfalen-Lippe.
              Seit über 30 Jahren – Makler, Gutachter, Partner.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/farthmannimmobilien"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-800 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/farthmannimmobilien"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-800 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Leistungen */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Leistungen</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/leistungen/verkauf-vermietung"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Verkauf & Vermietung
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen/gutachten"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Gutachten & Bewertung
                </Link>
              </li>
              <li>
                <Link
                  href="/immobilien"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Immobilien Angebote
                </Link>
              </li>
              <li>
                <Link
                  href="/bewertung"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Kostenlose Bewertung
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Kontakt */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>
                  Engerstraße 50<br />
                  33824 Werther (Westf.)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>
                  Dorfstraße 4<br />
                  33829 Borgholzhausen
                </span>
              </li>
              <li>
                <a
                  href="tel:+4952039171699"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone size={16} className="flex-shrink-0" />
                  05203 9 17 16 99
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@farthmann-immo.de"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail size={16} className="flex-shrink-0" />
                  info@farthmann-immo.de
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="flex-shrink-0 mt-0.5" />
                <span>
                  Mo–Do: 9–13 &amp; 14:30–18 Uhr<br />
                  Fr: 9–13 &amp; 14:30–16 Uhr
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Rechtliches */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/impressum"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Über uns</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/ueber-uns/team"
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    Unser Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ueber-uns/standorte"
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    Unsere Standorte
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            &copy; {currentYear} Farthmann Immobilien. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6 text-sm text-neutral-500">
            <Link href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
