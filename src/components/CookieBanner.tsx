"use client";

import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookie_consent="));
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptAll = () => {
    document.cookie = "cookie_consent=all; max-age=31536000; path=/; SameSite=Lax";
    setVisible(false);
  };

  const acceptNecessary = () => {
    document.cookie =
      "cookie_consent=necessary; max-age=31536000; path=/; SameSite=Lax";
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="container-custom">
        <div className="bg-white rounded-xl shadow-2xl border border-neutral-200 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Cookie size={24} className="text-accent flex-shrink-0 mt-1 sm:mt-0" />
          <div className="flex-1">
            <p className="text-sm text-neutral-600">
              Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer
              Website zu bieten.{" "}
              <a href="/datenschutz" className="text-primary-800 underline">
                Mehr erfahren
              </a>
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={acceptNecessary}
              className="px-4 py-2 text-sm font-medium text-neutral-600 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
            >
              Nur notwendige
            </button>
            <button onClick={acceptAll} className="btn-primary text-sm">
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
