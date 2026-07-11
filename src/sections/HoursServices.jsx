import Reveal from "../components/Reveal";
import { hours, services, paymentMethods } from "../data/restaurant";

const ICONS = {
  heat: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3c1.5 3 3 4.5 3 7a3 3 0 1 1-6 0c0-.7.2-1.3.5-2 .3 1 1 1.5 1.5 1.5-1-2-.5-4.5 1-6.5Z"
    />
  ),
  outdoor: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v4m0 0-6 9h12l-6-9Zm0 9v9"
    />
  ),
  ac: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 8h16M4 8v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8M8 12v4m4-4v4m4-4v4"
    />
  ),
  bag: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 8h12l-1 12H7L6 8Zm3 0a3 3 0 1 1 6 0"
    />
  ),
  event: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 5h16M4 5v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5M8 3v4m8-4v4M4 10h16"
    />
  ),
  paw: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 14c-3 0-5.5 2-5.5 4.2 0 1.2 1 1.8 2.2 1.4a7 7 0 0 1 6.6 0c1.2.4 2.2-.2 2.2-1.4C17.5 16 15 14 12 14Zm-5-3a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Zm10 0a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM8.5 7a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Zm7 0a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z"
    />
  ),
};

function Icon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

export default function HoursServices() {
  return (
    <section id="oeffnungszeiten" className="bg-sand-100 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow section-label text-terracotta-600">Öffnungszeiten</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-olive-900 sm:text-5xl">
              Wann wir für dich da sind
            </h2>

            <table className="mt-8 w-full max-w-md border-collapse text-left">
              <tbody>
                {hours.map((row) => (
                  <tr key={row.day} className="border-b border-olive-900/10">
                    <th
                      scope="row"
                      className="py-3 pr-4 font-normal text-ink-900/70"
                    >
                      {row.day}
                    </th>
                    <td
                      className={`py-3 text-right font-medium ${
                        row.closed ? "text-ink-900/40" : "text-olive-900"
                      }`}
                    >
                      {row.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow section-label text-terracotta-600">Services</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-olive-900 sm:text-5xl">
              Alles für deinen Besuch
            </h2>

            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <li
                  key={service.label}
                  className="flex items-center gap-3 rounded-xl bg-sand-50 px-4 py-3 text-sm font-medium text-olive-800 ring-1 ring-olive-900/5"
                >
                  <span className="text-terracotta-600">
                    <Icon name={service.icon} />
                  </span>
                  {service.label}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm font-medium text-ink-900/60">Akzeptierte Zahlungsmittel</p>
            <p className="mt-2 text-sm text-ink-900/70">{paymentMethods.join(" · ")}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
