import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
};

export default function DatenschutzPage() {
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
            <span className="text-white">Datenschutz</span>
          </nav>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-neutral max-w-none space-y-10">
            {/* 1. Verantwortliche Stelle */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">
                1. Verantwortliche Stelle
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="text-neutral-700 leading-relaxed mt-2">
                Heinz-Ulrich Farthmann Immobilien e.K.
                <br />
                Dorfstraße 4<br />
                33829 Borgholzhausen
                <br />
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

            {/* 2. Erhebung und Speicherung */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">
                2. Erhebung und Speicherung personenbezogener Daten
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                Beim Besuch unserer Website werden automatisch Informationen
                allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles)
                beinhalten etwa die Art des Webbrowsers, das verwendete
                Betriebssystem, den Domainnamen Ihres
                Internet-Service-Providers, Ihre IP-Adresse und Ähnliches.
              </p>
              <p className="text-neutral-700 leading-relaxed mt-3">
                Sie werden insbesondere zu folgenden Zwecken verarbeitet:
              </p>
              <ul className="list-disc list-inside text-neutral-700 mt-2 space-y-1">
                <li>Sicherstellung eines problemlosen Verbindungsaufbaus der Website</li>
                <li>Sicherstellung einer reibungslosen Nutzung unserer Website</li>
                <li>Auswertung der Systemsicherheit und -stabilität</li>
                <li>Zu weiteren administrativen Zwecken</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mt-3">
                Ihre Daten werden nicht verwendet, um Rückschlüsse auf Ihre
                Person zu ziehen. Rechtsgrundlage für die Datenverarbeitung ist
                Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt
                aus den oben aufgelisteten Zwecken zur Datenerhebung.
              </p>
            </div>

            {/* 3. Cookies */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">
                3. Nutzung von Cookies
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                Unsere Website verwendet Cookies. Dabei handelt es sich um
                kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät
                speichert. Cookies helfen uns dabei, unser Angebot
                nutzerfreundlicher und effektiver zu gestalten.
              </p>
              <p className="text-neutral-700 leading-relaxed mt-3">
                Einige Cookies sind technisch notwendig und werden automatisch
                gesetzt (Funktionale Cookies). Andere Cookies werden nur mit
                Ihrer ausdrücklichen Einwilligung gesetzt (z.B.
                Analyse-Cookies). Sie können Ihre Cookie-Einstellungen jederzeit
                über den Cookie-Banner oder in Ihren Browsereinstellungen
                anpassen.
              </p>
            </div>

            {/* 4. Kontaktformular */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">
                4. Kontaktformular
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                werden Ihre Angaben aus dem Anfrageformular inklusive der von
                Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen bei uns
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
                weiter.
              </p>
              <p className="text-neutral-700 leading-relaxed mt-3">
                Die Verarbeitung der in das Kontaktformular eingegebenen Daten
                erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung
                (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung
                jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per
                E-Mail an uns.
              </p>
            </div>

            {/* 5. Google Analytics */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">
                5. Google Analytics
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                Diese Website nutzt Google Analytics, einen Webanalysedienst der
                Google LLC, nur nach Ihrer ausdrücklichen Einwilligung. Google
                Analytics verwendet Cookies, die eine Analyse der Benutzung der
                Website ermöglichen. Die durch den Cookie erzeugten
                Informationen über Ihre Benutzung dieser Website werden in der
                Regel an einen Server von Google in den USA übertragen und dort
                gespeichert.
              </p>
              <p className="text-neutral-700 leading-relaxed mt-3">
                Wir haben die IP-Anonymisierung aktiviert. Dadurch wird Ihre
                IP-Adresse von Google innerhalb von Mitgliedstaaten der
                Europäischen Union oder in anderen Vertragsstaaten des Abkommens
                über den Europäischen Wirtschaftsraum vor der Übermittlung in
                die USA gekürzt. Die Einwilligung können Sie jederzeit über
                unseren Cookie-Banner widerrufen.
              </p>
            </div>

            {/* 6. Ihre Rechte */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">
                6. Ihre Rechte
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                jederzeit das Recht auf:
              </p>
              <ul className="list-disc list-inside text-neutral-700 mt-2 space-y-1">
                <li>
                  <strong>Auskunft</strong> über Ihre bei uns gespeicherten
                  personenbezogenen Daten (Art. 15 DSGVO)
                </li>
                <li>
                  <strong>Berichtigung</strong> unrichtiger personenbezogener
                  Daten (Art. 16 DSGVO)
                </li>
                <li>
                  <strong>Löschung</strong> Ihrer bei uns gespeicherten Daten
                  (Art. 17 DSGVO)
                </li>
                <li>
                  <strong>Einschränkung</strong> der Datenverarbeitung (Art. 18
                  DSGVO)
                </li>
                <li>
                  <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)
                </li>
                <li>
                  <strong>Widerspruch</strong> gegen die Verarbeitung Ihrer
                  personenbezogenen Daten (Art. 21 DSGVO)
                </li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mt-3">
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an die oben
                genannte verantwortliche Stelle. Zudem steht Ihnen ein
                Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
            </div>

            {/* 7. SSL-Verschlüsselung */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">
                7. SSL-Verschlüsselung
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen,
                die Sie an uns als Seitenbetreiber senden, eine
                SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
                Sie daran, dass die Adresszeile des Browsers von
                &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem
                Schloss-Symbol in Ihrer Browserzeile.
              </p>
              <p className="text-neutral-700 leading-relaxed mt-3">
                Wenn die SSL-Verschlüsselung aktiviert ist, können die Daten,
                die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
              </p>
            </div>

            {/* 8. Widerspruchsrecht */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">
                8. Widerspruchsrecht
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                Sofern Ihre personenbezogenen Daten auf Grundlage von
                berechtigten Interessen gemäß Art. 6 Abs. 1 lit. f DSGVO
                verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO
                Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten
                einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer
                besonderen Situation ergeben.
              </p>
              <p className="text-neutral-700 leading-relaxed mt-3">
                Möchten Sie von Ihrem Widerspruchsrecht Gebrauch machen, genügt
                eine E-Mail an{" "}
                <a
                  href="mailto:info@farthmann-immo.de"
                  className="text-primary-800 hover:text-accent transition-colors"
                >
                  info@farthmann-immo.de
                </a>
                .
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
