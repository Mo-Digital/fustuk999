import Reveal from "../components/Reveal";
import { restaurant } from "../data/restaurant";

export default function Location() {
  return (
    <section id="kontakt" className="bg-sand-50 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow section-label text-terracotta-600">Standort & Kontakt</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-olive-900 sm:text-5xl">
            Wir freuen uns auf dich
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal delay={100}>
            <div className="flex h-full flex-col justify-between rounded-2xl bg-sand-100 p-8 ring-1 ring-olive-900/5">
              <dl className="space-y-6">
                <div>
                  <dt className="text-sm font-medium text-ink-900/50">Adresse</dt>
                  <dd className="mt-1 text-lg text-olive-900">
                    {restaurant.address.street}
                    <br />
                    {restaurant.address.zip} {restaurant.address.city}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-ink-900/50">Telefon</dt>
                  <dd className="mt-1 text-lg">
                    <a
                      href={restaurant.phoneHref}
                      className="text-olive-900 underline decoration-terracotta-400 decoration-2 underline-offset-4 hover:text-terracotta-600"
                    >
                      {restaurant.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-ink-900/50">E-Mail</dt>
                  <dd className="mt-1 text-lg">
                    <a
                      href={`mailto:${restaurant.email}`}
                      className="text-olive-900 underline decoration-terracotta-400 decoration-2 underline-offset-4 hover:text-terracotta-600"
                    >
                      {restaurant.email}
                    </a>
                  </dd>
                </div>
              </dl>

              <p className="mt-8 text-sm leading-relaxed text-ink-900/60">
                Unser Restaurant liegt direkt an der Frankfurter Straße in Heilbronn, gut mit
                Auto und öffentlichen Verkehrsmitteln erreichbar. Parkmöglichkeiten sind in der
                Umgebung vorhanden.
              </p>

              <a
                href={restaurant.mapsLinkSrc}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary mt-8 self-start !border-olive-900/20 !text-olive-900 hover:!bg-olive-900/5"
              >
                Route planen
              </a>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="h-full min-h-[360px] overflow-hidden rounded-2xl shadow-soft">
              <iframe
                title={`Standort von ${restaurant.name} auf Google Maps`}
                src={restaurant.mapsEmbedSrc}
                className="h-full w-full min-h-[360px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
