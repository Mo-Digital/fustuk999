import Reveal from "../components/Reveal";
import { dietaryBadges } from "../data/restaurant";

export default function About() {
  return (
    <section id="ueber-uns" className="relative overflow-hidden bg-sand-50 py-24 lg:py-32">
      <div className="ornament-bg pointer-events-none absolute inset-x-0 top-0 h-40 opacity-60" />

      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-10">
        <Reveal>
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
            alt="Gedeckter Tisch bei Fustuk 999 mit warmem Licht"
            className="h-full w-full rounded-2xl object-cover shadow-soft"
            loading="lazy"
          />
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow section-label text-terracotta-600">Über uns</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-olive-900 sm:text-5xl">
            Gastfreundschaft, die man schmeckt
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-900/80">
            Fustuk – die Pistazie – steht bei uns für das, was die levantinische Küche im Kern
            ausmacht: einfache Zutaten, mit Sorgfalt zubereitet, und ein Tisch, an dem jeder
            willkommen ist. Bei uns kommt vieles hausgemacht auf den Teller, vom Fladenbrot bis
            zum Dessert. Am Wochenende laden wir zum ausgiebigen Frühstück und Brunch, unter der
            Woche zum entspannten Abendessen mit Freunden oder Familie.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-900/80">
            Ob Grillklassiker, vegane Mezze oder ein Kaffee mit hausgemachtem Gebäck – wir
            möchten, dass jeder Besuch bei uns ein kleines, unvergessliches Stück orientalisches
            Küchenerlebnis wird.
          </p>

          <ul className="mt-8 flex flex-wrap gap-3">
            {dietaryBadges.map((badge) => (
              <li
                key={badge}
                className="rounded-full border border-olive-500/30 bg-olive-500/5 px-4 py-2 text-sm font-medium text-olive-700"
              >
                {badge}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
