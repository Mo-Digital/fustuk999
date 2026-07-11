import Reveal from "../components/Reveal";
import { restaurant } from "../data/restaurant";
import { useConsent } from "../context/ConsentContext";

function MapsPlaceholder({ onEnable }) {
  return (
    <div className="flex h-full min-h-[360px] flex-col items-center justify-center gap-4 bg-sand-100 p-8 text-center">
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8 text-olive-900/40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0 0 21 18.382V7.618a1 1 0 0 0-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
      <p className="max-w-xs text-sm leading-relaxed text-ink-900/70">
        Die Karte wird über Google Maps geladen. Dabei wird deine IP-Adresse an Google
        übermittelt. Bitte stimme externen Inhalten zu, um die Karte zu sehen.
      </p>
      <button type="button" onClick={onEnable} className="btn-secondary !border-olive-900/20 !text-olive-900 hover:!bg-olive-900/5">
        Google Maps aktivieren
      </button>
    </div>
  );
}

export default function Location() {
  const { consent, savePreferences } = useConsent();
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
              {consent.external ? (
                <iframe
                  title={`Standort von ${restaurant.name} auf Google Maps`}
                  src={restaurant.mapsEmbedSrc}
                  className="h-full w-full min-h-[360px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <MapsPlaceholder
                  onEnable={() => savePreferences({ ...consent, external: true })}
                />
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
