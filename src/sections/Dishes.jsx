import Reveal from "../components/Reveal";
import { dishes, menuLinks } from "../data/restaurant";

export default function Dishes() {
  return (
    <section id="speisekarten" className="bg-olive-900 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-brass-400">Signature Dishes</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-sand-50 sm:text-5xl">
            Handverlesene Klassiker
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-sand-100/80">
            Eine kleine Auswahl aus unserer Karte — von hausgemachtem Hummus bis zu warmem
            Knafeh. Die vollständige Speise- und Getränkekarte findest du unten zum Ansehen und
            Herunterladen.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish, i) => (
            <Reveal key={dish.name} delay={(i % 3) * 100}>
              <article className="group h-full overflow-hidden rounded-2xl bg-sand-50/[0.04] ring-1 ring-sand-50/10 transition-colors hover:bg-sand-50/[0.07]">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-xl text-sand-50">{dish.name}</h3>
                    <span className="whitespace-nowrap font-serif text-lg text-brass-400">
                      {dish.price}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-sand-100/70">
                    {dish.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {dish.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-brass-400/30 px-3 py-1 text-xs font-medium text-brass-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-col items-center gap-4 text-center">
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href={menuLinks.main} className="btn-primary" target="_blank" rel="noreferrer">
              Speisekarte ansehen (PDF)
            </a>
            <a href={menuLinks.drinks} className="btn-secondary" target="_blank" rel="noreferrer">
              Getränkekarte ansehen (PDF)
            </a>
          </div>
          <p className="text-xs text-sand-100/50">
            Platzhalter-Links — werden durch die finale Speise- und Getränkekarte ersetzt.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
