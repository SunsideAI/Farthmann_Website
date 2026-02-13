"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, ChevronDown, Award } from "lucide-react";

const navItems = [
  { label: "Startseite", href: "/" },
  { label: "Immobilien", href: "/immobilien" },
  {
    label: "Leistungen",
    href: "#",
    submenu: [
      { label: "Verkauf & Vermietung", href: "/leistungen/verkauf-vermietung" },
      { label: "Gutachten & Bewertung", href: "/leistungen/gutachten" },
    ],
  },
  {
    label: "Über uns",
    href: "#",
    submenu: [
      { label: "Unser Team", href: "/ueber-uns/team" },
      { label: "Unsere Standorte", href: "/ueber-uns/standorte" },
    ],
  },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-primary-900 text-white text-sm">
        <div className="container-custom flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <a
              href="tel:+4952039171699"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone size={14} />
              05203 9 17 16 99
            </a>
            <span className="text-primary-300">|</span>
            <a
              href="mailto:info@farthmann-immo.de"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail size={14} />
              info@farthmann-immo.de
            </a>
          </div>
          <div className="flex items-center gap-2 text-accent-400">
            <Award size={14} />
            <span>DEKRA-zertifizierter Sachverständiger</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container-custom flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo/farthmann-logo.svg"
              alt="Farthmann Immobilien"
              width={200}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.submenu ? (
                  <button
                    className="flex items-center gap-1 text-neutral-700 hover:text-primary-800 font-medium transition-colors"
                    onMouseEnter={() => setOpenSubmenu(item.label)}
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        openSubmenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-neutral-700 hover:text-primary-800 font-medium transition-colors link-hover"
                  >
                    {item.label}
                  </Link>
                )}

                {item.submenu && (
                  <div
                    className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-neutral-100 py-2 transition-all duration-200 ${
                      openSubmenu === item.label
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                    onMouseEnter={() => setOpenSubmenu(item.label)}
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2.5 text-neutral-600 hover:bg-primary-50 hover:text-primary-800 transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link href="/bewertung" className="hidden sm:inline-flex btn-accent">
              Kostenlose Bewertung
            </Link>
            <button
              className="lg:hidden p-2 text-neutral-700"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menü öffnen"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-100 animate-slide-down">
            <div className="container-custom py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.submenu ? (
                    <>
                      <button
                        className="w-full flex items-center justify-between py-3 text-neutral-700 font-medium"
                        onClick={() =>
                          setOpenSubmenu(
                            openSubmenu === item.label ? null : item.label
                          )
                        }
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            openSubmenu === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openSubmenu === item.label && (
                        <div className="pl-4 space-y-1">
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block py-2 text-neutral-500 hover:text-primary-800"
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-3 text-neutral-700 font-medium hover:text-primary-800"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              {/* Mobile Contact Info */}
              <div className="pt-4 mt-4 border-t border-neutral-100 space-y-3">
                <a
                  href="tel:+4952039171699"
                  className="flex items-center gap-2 text-neutral-600"
                >
                  <Phone size={16} />
                  05203 9 17 16 99
                </a>
                <a
                  href="mailto:info@farthmann-immo.de"
                  className="flex items-center gap-2 text-neutral-600"
                >
                  <Mail size={16} />
                  info@farthmann-immo.de
                </a>
                <Link
                  href="/bewertung"
                  className="btn-accent w-full text-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Kostenlose Bewertung
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
