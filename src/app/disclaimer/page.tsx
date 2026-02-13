import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
};

export default function DisclaimerPage() {
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
            <span className="text-white">Disclaimer</span>
          </nav>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Disclaimer – Haftungsausschluss
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-neutral max-w-none space-y-10">
            {/* Haftung für Inhalte */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-neutral-900 mb-4">
                Haftung für Inhalte
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
              <p className="text-neutral-700 leading-relaxed mt-3">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
              </p>
              <p className="text-neutral-700 leading-relaxed mt-3">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                können wir jedoch keine Gewähr übernehmen. Insbesondere bei
                Immobilienangeboten können sich Angaben wie Preise, Flächen und
                Ausstattungsmerkmale ändern. Verbindlich sind ausschließlich die
                im Kaufvertrag bzw. Mietvertrag festgehaltenen Vereinbarungen.
              </p>
            </div>

            {/* Haftung für Links */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-neutral-900 mb-4">
                Haftung für Links
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich.
              </p>
              <p className="text-neutral-700 leading-relaxed mt-3">
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
                zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
                inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
                konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
                Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
                Links umgehend entfernen.
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
              <p className="text-neutral-700 leading-relaxed mt-3">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
                werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
                von Rechtsverletzungen werden wir derartige Inhalte umgehend
                entfernen.
              </p>
              <p className="text-neutral-700 leading-relaxed mt-3">
                Alle auf dieser Website verwendeten Fotos und Abbildungen von
                Immobilien sind entweder Eigentum von Heinz-Ulrich Farthmann
                Immobilien e.K. oder werden mit Genehmigung des Eigentümers
                verwendet. Eine Nutzung ohne ausdrückliche Genehmigung ist nicht
                gestattet.
              </p>
            </div>

            {/* Stand */}
            <div className="border-t border-neutral-200 pt-6">
              <p className="text-sm text-neutral-500">
                Stand: Januar 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
