import { restaurant } from "../data/restaurant";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-olive-900">
      <img
        src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=1800&q=80"
        alt="Levantinisches Gericht in warmem Licht angerichtet"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-olive-900 via-olive-900/60 to-olive-900/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-olive-900/70 via-transparent to-olive-900/40" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-24 lg:px-10">
        <p className="eyebrow reveal is-visible text-brass-400">Levantinische Küche · Heilbronn</p>
        <h1 className="reveal is-visible mt-5 max-w-3xl font-serif text-5xl leading-[1.05] text-sand-50 sm:text-6xl lg:text-7xl">
          {restaurant.name}
        </h1>
        <p
          className="reveal is-visible mt-6 max-w-xl text-lg leading-relaxed text-sand-100/90"
          style={{ transitionDelay: "150ms" }}
        >
          Hausgemachte Gerichte, ehrliche Gastfreundschaft und ein Stück Levante mitten in
          Heilbronn — von Mezze über Grillklassiker bis zu Baklava und Knafeh.
        </p>

        <div
          className="reveal is-visible mt-10 flex flex-col gap-4 sm:flex-row"
          style={{ transitionDelay: "300ms" }}
        >
          <a href="#reservierung" className="btn-primary">
            Tisch reservieren
          </a>
          <a href="#speisekarten" className="btn-secondary">
            Speisekarte ansehen
          </a>
        </div>
      </div>

      <a
        href="#ueber-uns"
        aria-label="Zum nächsten Abschnitt scrollen"
        className="absolute bottom-10 left-1/2 z-10 flex h-11 w-6 -translate-x-1/2 items-start justify-center rounded-full border border-sand-50/50 p-1.5"
      >
        <span className="h-2 w-px animate-bounce bg-sand-50/80" />
      </a>
    </section>
  );
}
