import { useState } from "react";
import { restaurant, hours } from "../data/restaurant";
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

export default function Footer() {
  const [modal, setModal] = useState(null);

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
          <div className="flex gap-6">
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
          </div>
        </div>
      </div>

      <LegalModal
        open={modal === "impressum"}
        onClose={() => setModal(null)}
        title="Impressum"
      >
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
        <p>Umsatzsteuer-Identifikationsnummer: DE456879923</p>
        <p className="rounded-lg bg-terracotta-500/10 px-4 py-3 text-terracotta-700">
          Platzhalter — bitte um vollständige, rechtsgültige Angaben ergänzen (u. a.
          Handelsregister, Registergericht, ggf. Aufsichtsbehörde und inhaltlich
          Verantwortlicher gem. § 18 Abs. 2 MStV).
        </p>
      </LegalModal>

      <LegalModal
        open={modal === "datenschutz"}
        onClose={() => setModal(null)}
        title="Datenschutz"
      >
        <p>
          Der Schutz deiner personenbezogenen Daten ist uns wichtig. Diese Seite verwendet ein
          Reservierungsformular, über das freiwillig Kontaktdaten übermittelt werden können, um
          eine Tischreservierung anzufragen.
        </p>
        <p className="rounded-lg bg-terracotta-500/10 px-4 py-3 text-terracotta-700">
          Platzhalter — bitte um eine vollständige Datenschutzerklärung gemäß DSGVO ergänzen
          (u. a. verantwortliche Stelle, Zwecke und Rechtsgrundlagen der Verarbeitung,
          Speicherdauer, eingesetzte Dienste wie Google Maps, Betroffenenrechte,
          Kontaktmöglichkeit zum Datenschutz).
        </p>
      </LegalModal>
    </footer>
  );
}
