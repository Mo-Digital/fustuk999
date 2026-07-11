import { useEffect, useState } from "react";
import { restaurant } from "../data/restaurant";

const NAV_LINKS = [
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Speisekarte", href: "#speisekarten" },
  { label: "Galerie", href: "#galerie" },
  { label: "Öffnungszeiten", href: "#oeffnungszeiten" },
  { label: "Reservierung", href: "#reservierung" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-sand-50/95 shadow-[0_1px_0_0_rgba(32,28,22,0.08)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <a
          href="#top"
          className={`font-serif text-xl tracking-wide transition-colors ${
            scrolled ? "text-olive-900" : "text-sand-50"
          }`}
        >
          {restaurant.name}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-olive-800 hover:text-terracotta-600"
                  : "text-sand-100 hover:text-brass-400"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#reservierung" className="btn-primary !py-2.5 !px-6 text-sm">
            Tisch reservieren
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              scrolled || menuOpen ? "bg-olive-900" : "bg-sand-50"
            } ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              scrolled || menuOpen ? "bg-olive-900" : "bg-sand-50"
            } ${menuOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              scrolled || menuOpen ? "bg-olive-900" : "bg-sand-50"
            } ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-olive-900 transition-all duration-300 lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-serif text-2xl text-sand-50 transition-transform duration-300"
            style={{
              transitionDelay: menuOpen ? `${i * 40}ms` : "0ms",
              transform: menuOpen ? "translateY(0)" : "translateY(12px)",
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#reservierung"
          onClick={() => setMenuOpen(false)}
          className="btn-primary mt-4"
        >
          Tisch reservieren
        </a>
      </div>
    </header>
  );
}
