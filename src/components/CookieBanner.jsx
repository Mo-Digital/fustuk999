import { useEffect, useId, useState } from "react";
import { useConsent } from "../context/ConsentContext";
import { openLegalModal } from "../lib/legalModalEvent";

export default function CookieBanner() {
  const { consent, hasResponded, settingsOpen, acceptAll, rejectAll, savePreferences, closeSettings } =
    useConsent();
  const [showDetails, setShowDetails] = useState(false);
  const [draft, setDraft] = useState(consent);
  const headingId = useId();

  const open = !hasResponded || settingsOpen;

  useEffect(() => {
    if (open) setDraft(consent);
  }, [open, consent]);

  useEffect(() => {
    if (!hasResponded) setShowDetails(false);
  }, [hasResponded]);

  if (!open) return null;

  const handleClose = () => {
    if (hasResponded) closeSettings();
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[110] flex justify-center p-4 sm:p-6">
      <div
        role="dialog"
        aria-modal={!hasResponded}
        aria-labelledby={headingId}
        className="w-full max-w-2xl rounded-2xl bg-olive-900 p-6 shadow-soft ring-1 ring-sand-50/10 sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id={headingId} className="font-serif text-xl text-sand-50">
            Cookies &amp; Privatsphäre
          </h2>
          {hasResponded && (
            <button
              type="button"
              onClick={handleClose}
              aria-label="Schließen"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sand-100/70 hover:bg-sand-50/10 hover:text-sand-50"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          )}
        </div>

        <p className="mt-3 text-sm leading-relaxed text-sand-100/80">
          Wir verwenden nur technisch notwendige Cookies, um diese Seite zuverlässig
          bereitzustellen. Für die Google-Maps-Karte und optionale Statistiken bitten wir vorher
          um deine Einwilligung — diese Inhalte werden erst nach Zustimmung geladen. Mehr dazu in
          unserer{" "}
          <button
            type="button"
            onClick={() => openLegalModal("datenschutz")}
            className="underline decoration-brass-400 decoration-2 underline-offset-2 hover:text-brass-400"
          >
            Datenschutzerklärung
          </button>
          .
        </p>

        {showDetails && (
          <div className="mt-5 space-y-4 border-t border-sand-50/10 pt-5">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked
                disabled
                className="mt-1 h-4 w-4 shrink-0 rounded border-sand-50/30 accent-brass-500"
              />
              <span className="text-sm text-sand-100/80">
                <span className="font-medium text-sand-50">Technisch notwendig</span> — immer
                aktiv, ermöglicht grundlegende Funktionen wie das Reservierungsformular.
                Kann nicht deaktiviert werden.
              </span>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={draft.external}
                onChange={(e) => setDraft((d) => ({ ...d, external: e.target.checked }))}
                className="mt-1 h-4 w-4 shrink-0 rounded border-sand-50/30 accent-brass-500"
              />
              <span className="text-sm text-sand-100/80">
                <span className="font-medium text-sand-50">Externe Inhalte (Google Maps)</span> —
                lädt die eingebettete Karte im Kontaktbereich. Dabei wird deine IP-Adresse an
                Google übermittelt.
              </span>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={draft.statistics}
                onChange={(e) => setDraft((d) => ({ ...d, statistics: e.target.checked }))}
                className="mt-1 h-4 w-4 shrink-0 rounded border-sand-50/30 accent-brass-500"
              />
              <span className="text-sm text-sand-100/80">
                <span className="font-medium text-sand-50">Statistik</span> — anonymisierte
                Reichweitenmessung, um die Seite zu verbessern. Aktuell nicht aktiv eingebunden.
              </span>
            </label>
          </div>
        )}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button type="button" onClick={acceptAll} className="btn-primary !py-2.5 !px-5 text-sm">
            Alle akzeptieren
          </button>
          <button
            type="button"
            onClick={rejectAll}
            className="btn-secondary !py-2.5 !px-5 text-sm !border-sand-50/30"
          >
            Nur notwendige
          </button>
          {showDetails ? (
            <button
              type="button"
              onClick={() => savePreferences(draft)}
              className="btn-secondary !py-2.5 !px-5 text-sm !border-sand-50/30"
            >
              Auswahl speichern
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowDetails(true)}
              className="text-sm font-medium text-sand-100/80 underline decoration-brass-400/60 decoration-2 underline-offset-4 hover:text-sand-50 sm:ml-auto"
            >
              Einstellungen
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
