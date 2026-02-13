import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="py-32">
      <div className="container-custom text-center">
        <p className="text-8xl md:text-9xl font-bold text-primary-100 font-serif">
          404
        </p>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-4">
          Seite nicht gefunden
        </h1>
        <p className="text-lg text-neutral-500 max-w-md mx-auto mb-8">
          Die von Ihnen gesuchte Seite existiert leider nicht oder wurde
          verschoben.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <Home size={18} className="mr-2" />
            Zur Startseite
          </Link>
          <Link href="/immobilien" className="btn-secondary">
            <Search size={18} className="mr-2" />
            Immobilien durchsuchen
          </Link>
        </div>
      </div>
    </section>
  );
}
