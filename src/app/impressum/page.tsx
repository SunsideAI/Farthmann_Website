import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
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
            <span className="text-white">Impressum</span>
          </nav>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Impressum
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-neutral max-w-none space-y-10">
            {/* Angaben */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-neutral-900 mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                Heinz-Ulrich Farthmann Immobilien e.K.
                <br />
                Dorfstraße 4<br />
                33829 Borgholzhausen
              </p>
            </div>

            {/* Kontakt */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-neutral-900 mb-4">
                Kontakt
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                Telefon: 05203 9 17 16 99
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:info@farthmann-immo.de"
                  className="text-primary-800 hover:text-accent transition-colors"
                >
                  info@farthmann-immo.de
                </a>
              </p>
            </div>

            {/* Umsatzsteuer-ID */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-neutral-900 mb-4">
                Umsatzsteuer-ID
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                Umsatzsteuer-Identifikationsnummer gemäß § 27a
                Umsatzsteuergesetz:
                <br />
                DE250302212
              </p>
            </div>

            {/* Berufsbezeichnung */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-neutral-900 mb-4">
                Berufsbezeichnung und berufsrechtliche Regelungen
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                Berufsbezeichnung: Immobilienmakler, Gutachter
                <br />
                Zuständige Kammer / Aufsichtsbehörde: Kreis Gütersloh,
                Kreisverwaltung
                <br />
                Verliehen in: Bundesrepublik Deutschland
              </p>
            </div>

            {/* Aufsichtsbehörde */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-neutral-900 mb-4">
                Aufsichtsbehörde
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                Kreis Gütersloh
                <br />
                Kreisverwaltung
                <br />
                33324 Gütersloh
              </p>
            </div>

            {/* Berufshaftpflichtversicherung */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-neutral-900 mb-4">
                Berufshaftpflichtversicherung
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                Ergo Versicherungsgruppe
                <br />
                40198 Düsseldorf
              </p>
            </div>

            {/* Verantwortlich */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-neutral-900 mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                Heinz-Ulrich Farthmann
                <br />
                Dorfstraße 4<br />
                33829 Borgholzhausen
              </p>
            </div>

            {/* Haftungsausschluss */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-neutral-900 mb-4">
                Haftungsausschluss (Disclaimer)
              </h2>

              <h3 className="font-heading text-lg font-semibold text-neutral-800 mb-2 mt-6">
                Haftung für Inhalte
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
                sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
                bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die
                auf eine rechtswidrige Tätigkeit hinweisen.
              </p>

              <h3 className="font-heading text-lg font-semibold text-neutral-800 mb-2 mt-6">
                Haftung für Links
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                umgehend entfernen.
              </p>
            </div>

            {/* Urheberrecht */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-neutral-900 mb-4">
                Urheberrecht
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="text-neutral-700 leading-relaxed mt-4">
                &copy; {new Date().getFullYear()} Heinz-Ulrich Farthmann
                Immobilien e.K. Alle Rechte vorbehalten.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
