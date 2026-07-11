import { useEffect, useState } from "react";
import { restaurant, hours } from "../data/restaurant";
import { useConsent } from "../context/ConsentContext";
import { LEGAL_MODAL_EVENT } from "../lib/legalModalEvent";
import LegalModal from "./LegalModal";

const NAV_LINKS = [
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Speisekarte", href: "#speisekarten" },
  { label: "Galerie", href: "#galerie" },
  { label: "Öffnungszeiten", href: "#oeffnungszeiten" },
  { label: "Reservierung", href: "#reservierung" },
  { label: "Kontakt", href: "#kontakt" },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM17 6.5h.01"
      />
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 8h2V5h-2a4 4 0 0 0-4 4v2H8v3h2v6h3v-6h2.5l.5-3H13V9a1 1 0 0 1 1-1Z"
      />
    ),
  },
];

function LegalNote({ children }) {
  return (
    <p className="rounded-lg bg-terracotta-500/10 px-4 py-3 text-sm text-terracotta-700">
      {children}
    </p>
  );
}

export default function Footer() {
  const [modal, setModal] = useState(null);
  const { openSettings } = useConsent();

  useEffect(() => {
    const onOpenLegal = (e) => setModal(e.detail);
    window.addEventListener(LEGAL_MODAL_EVENT, onOpenLegal);
    return () => window.removeEventListener(LEGAL_MODAL_EVENT, onOpenLegal);
  }, []);

  return (
    <footer className="bg-olive-900">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-2xl text-sand-50">{restaurant.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-sand-100/70">
              Levantinische Küche mit Herz, mitten in Heilbronn.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-sand-50/20 text-sand-100 transition-colors hover:border-brass-400 hover:text-brass-400"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow text-sand-100/50">Navigation</p>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-sand-100/80 hover:text-brass-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-sand-100/50">Öffnungszeiten</p>
            <ul className="mt-4 space-y-1.5 text-sm text-sand-100/80">
              {hours.map((row) => (
                <li key={row.day} className="flex justify-between gap-4">
                  <span>{row.day}</span>
                  <span className={row.closed ? "text-sand-100/40" : ""}>{row.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-sand-100/50">Kontakt</p>
            <ul className="mt-4 space-y-2 text-sm text-sand-100/80">
              <li>
                {restaurant.address.street}, {restaurant.address.zip}{" "}
                {restaurant.address.city}
              </li>
              <li>
                <a href={restaurant.phoneHref} className="hover:text-brass-400">
                  {restaurant.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${restaurant.email}`} className="hover:text-brass-400">
                  {restaurant.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-sand-50/10 pt-8 text-xs text-sand-100/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {restaurant.name}. Alle Rechte vorbehalten.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button
              type="button"
              onClick={() => setModal("impressum")}
              className="hover:text-brass-400"
            >
              Impressum
            </button>
            <button
              type="button"
              onClick={() => setModal("datenschutz")}
              className="hover:text-brass-400"
            >
              Datenschutz
            </button>
            <button type="button" onClick={openSettings} className="hover:text-brass-400">
              Cookie-Einstellungen
            </button>
          </div>
        </div>
      </div>

      <LegalModal
        open={modal === "impressum"}
        onClose={() => setModal(null)}
        title="Impressum"
      >
        <p>
          Angaben gemäß § 5 TMG / § 18 Abs. 2 MStV.
        </p>
        <p>
          <strong>Fustuk 999 GbR</strong>
          <br />
          Inhaber: Khaled Mosa &amp; Hasan Khantomani
          <br />
          {restaurant.address.street}
          <br />
          {restaurant.address.zip} {restaurant.address.city}
          <br />
          {restaurant.address.country}
        </p>
        <p>
          Telefon: {restaurant.phone}
          <br />
          E-Mail: {restaurant.email}
        </p>
        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE456879923</p>
        <p>
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: Khaled Mosa &amp; Hasan
          Khantomani (Anschrift wie oben).
        </p>
        <LegalNote>
          Platzhalter — bitte um vollständige, rechtsgültige Angaben ergänzen (u. a.
          Handelsregister/Registergericht falls vorhanden, ggf. zuständige Aufsichtsbehörde).
          Vor Veröffentlichung von einem Anwalt oder einer Anwältin prüfen lassen.
        </LegalNote>
      </LegalModal>

      <LegalModal
        open={modal === "datenschutz"}
        onClose={() => setModal(null)}
        title="Datenschutzerklärung"
      >
        <LegalNote>
          Entwurf — diese Datenschutzerklärung deckt die üblichen Standardfälle einer
          Restaurant-Website ab, ersetzt aber keine individuelle Rechtsberatung. Bitte vor
          Veröffentlichung von einem Anwalt bzw. einer Anwältin oder einem/einer
          Datenschutzbeauftragten prüfen und an den tatsächlichen Betrieb (eingesetzte Tools,
          Cookie-Banner-Anbieter, ggf. Statistik-Dienste) anpassen lassen.
        </LegalNote>

        <h3 className="font-serif text-lg text-olive-900">1. Verantwortlicher</h3>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          <br />
          Fustuk 999 GbR, Khaled Mosa &amp; Hasan Khantomani
          <br />
          {restaurant.address.street}, {restaurant.address.zip} {restaurant.address.city}
          <br />
          Telefon: {restaurant.phone} · E-Mail: {restaurant.email}
        </p>

        <h3 className="font-serif text-lg text-olive-900">
          2. Allgemeine Hinweise zur Datenverarbeitung
        </h3>
        <p>
          Wir verarbeiten personenbezogene Daten der Nutzer dieser Website nur, soweit dies zur
          Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen
          erforderlich ist. Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. a DSGVO
          (Einwilligung, z. B. bei optionalen Cookies), Art. 6 Abs. 1 lit. b DSGVO
          (Vertragsanbahnung, z. B. bei Reservierungsanfragen) und Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse, z. B. an einer sicheren und stabilen Bereitstellung der
          Website).
        </p>

        <h3 className="font-serif text-lg text-olive-900">3. Hosting &amp; Server-Log-Dateien</h3>
        <p>
          Beim Aufruf dieser Website erhebt unser Hosting-Provider automatisch technische
          Informationen in sogenannten Server-Log-Dateien, die dein Browser übermittelt
          (z. B. IP-Adresse, Datum und Uhrzeit der Anfrage, aufgerufene Seite, verwendeter
          Browser und Betriebssystem, Referrer-URL). Diese Daten dienen der Sicherstellung eines
          störungsfreien Betriebs sowie der IT-Sicherheit (Art. 6 Abs. 1 lit. f DSGVO) und werden
          nicht mit anderen Datenquellen zusammengeführt. Zusätzlich lädt diese Seite Schriften
          von Google Fonts nach; dabei kann deine IP-Adresse an die Server von Google
          übermittelt werden.
        </p>

        <h3 className="font-serif text-lg text-olive-900">4. Cookies &amp; Einwilligung</h3>
        <p>
          Diese Website verwendet technisch notwendige Cookies bzw. vergleichbare
          Speichertechnologien (z. B. zum Speichern deiner Cookie-Auswahl), die für den Betrieb
          der Seite erforderlich sind und ohne gesonderte Einwilligung eingesetzt werden dürfen
          (Art. 6 Abs. 1 lit. f DSGVO bzw. § 25 Abs. 2 TTDSG). Darüber hinaus setzen wir – nur
          nach deiner ausdrücklichen Einwilligung über unseren Cookie-Banner (Art. 6 Abs. 1 lit.
          a DSGVO, § 25 Abs. 1 TTDSG) – optionale Inhalte und Dienste ein:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Externe Inhalte (Google Maps):</strong> Lädt die eingebettete Karte im
            Bereich „Standort &amp; Kontakt" erst nach Zustimmung.
          </li>
          <li>
            <strong>Statistik:</strong> Für eine anonymisierte Reichweitenmessung vorgesehen.
            Aktuell ist kein Statistik-Dienst aktiv eingebunden.
          </li>
        </ul>
        <p>
          Du kannst deine Auswahl jederzeit über den Link „Cookie-Einstellungen" im Footer
          ändern oder widerrufen.
        </p>

        <h3 className="font-serif text-lg text-olive-900">
          5. Kontakt- und Reservierungsformular
        </h3>
        <p>
          Wenn du uns über das Reservierungsformular kontaktierst, erheben wir die von dir
          angegebenen Daten: Name, E-Mail-Adresse, Telefonnummer, gewünschtes Datum und Uhrzeit,
          Personenanzahl sowie eine optionale Nachricht. Diese Daten verwenden wir
          ausschließlich zur Bearbeitung deiner Reservierungsanfrage und für Rückfragen dazu
          (Art. 6 Abs. 1 lit. b DSGVO). Eine Weitergabe an Dritte erfolgt nicht. Die Daten werden
          gelöscht, sobald sie für die Bearbeitung deiner Anfrage nicht mehr erforderlich sind,
          spätestens nach Ablauf gesetzlicher Aufbewahrungsfristen.
        </p>

        <h3 className="font-serif text-lg text-olive-900">6. Einbindung von Google Maps</h3>
        <p>
          Nach deiner Einwilligung binden wir Kartenmaterial des Dienstes Google Maps ein,
          bereitgestellt von Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
          Irland. Zur Darstellung der Karte wird deine IP-Adresse an Google übermittelt; Google
          kann diese Daten auch in Ländern außerhalb der EU/des EWR verarbeiten. Näheres findest
          du in der{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-terracotta-400 decoration-2 underline-offset-2 hover:text-terracotta-600"
          >
            Datenschutzerklärung von Google
          </a>
          . Rechtsgrundlage ist deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO); ohne
          Einwilligung zeigen wir dir stattdessen einen Link, der dich direkt zu Google Maps
          weiterleitet.
        </p>

        <h3 className="font-serif text-lg text-olive-900">7. Deine Rechte als betroffene Person</h3>
        <p>Du hast im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Auskunft über deine bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung deiner bei uns gespeicherten Daten (Art. 17 DSGVO)</li>
          <li>Einschränkung der Datenverarbeitung (Art. 18 DSGVO)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>
            Beschwerde bei einer Datenschutz-Aufsichtsbehörde, z. B. dem Landesbeauftragten für
            den Datenschutz und die Informationsfreiheit Baden-Württemberg (Art. 77 DSGVO)
          </li>
        </ul>
        <p>Bei Fragen zu deinen Rechten wende dich gerne an {restaurant.email}.</p>

        <h3 className="font-serif text-lg text-olive-900">8. Speicherdauer &amp; Löschfristen</h3>
        <p>
          Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen Zweck
          erforderlich ist oder gesetzliche Aufbewahrungsfristen (z. B. handels- und
          steuerrechtliche Fristen) dies vorschreiben. Anschließend werden die Daten routinemäßig
          gelöscht.
        </p>

        <h3 className="font-serif text-lg text-olive-900">9. SSL-/TLS-Verschlüsselung</h3>
        <p>
          Diese Seite nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung für die
          Übertragung vertraulicher Inhalte, z. B. Anfragen über das Reservierungsformular. Eine
          verschlüsselte Verbindung erkennst du am Schloss-Symbol in der Adresszeile deines
          Browsers und daran, dass die Adresszeile von „http://" auf „https://" wechselt.
        </p>
      </LegalModal>
    </footer>
  );
}
