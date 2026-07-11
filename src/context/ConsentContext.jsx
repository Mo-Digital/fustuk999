import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "fustuk999-cookie-consent";
const STORAGE_VERSION = 1;

const DEFAULT_CONSENT = { external: false, statistics: false };

const ConsentContext = createContext(null);

function readStoredConsent() {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed.version !== STORAGE_VERSION) return null;
    return parsed.consent;
  } catch {
    return null;
  }
}

function writeStoredConsent(consent) {
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ version: STORAGE_VERSION, consent, savedAt: new Date().toISOString() })
    );
  } catch {
    // localStorage nicht verfügbar (z. B. Privatmodus) — Einwilligung gilt dann nur für die Sitzung.
  }
}

export function ConsentProvider({ children }) {
  const [consent, setConsent] = useState(DEFAULT_CONSENT);
  const [hasResponded, setHasResponded] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const stored = readStoredConsent();
    if (stored) {
      setConsent({ ...DEFAULT_CONSENT, ...stored });
      setHasResponded(true);
    }
  }, []);

  const acceptAll = useCallback(() => {
    const next = { external: true, statistics: true };
    setConsent(next);
    setHasResponded(true);
    setSettingsOpen(false);
    writeStoredConsent(next);
  }, []);

  const rejectAll = useCallback(() => {
    const next = { external: false, statistics: false };
    setConsent(next);
    setHasResponded(true);
    setSettingsOpen(false);
    writeStoredConsent(next);
  }, []);

  const savePreferences = useCallback((next) => {
    const merged = { ...DEFAULT_CONSENT, ...next };
    setConsent(merged);
    setHasResponded(true);
    setSettingsOpen(false);
    writeStoredConsent(merged);
  }, []);

  const openSettings = useCallback(() => setSettingsOpen(true), []);
  const closeSettings = useCallback(() => setSettingsOpen(false), []);

  const value = useMemo(
    () => ({
      consent,
      hasResponded,
      settingsOpen,
      acceptAll,
      rejectAll,
      savePreferences,
      openSettings,
      closeSettings,
    }),
    [consent, hasResponded, settingsOpen, acceptAll, rejectAll, savePreferences, openSettings, closeSettings]
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent muss innerhalb von ConsentProvider verwendet werden.");
  return ctx;
}
