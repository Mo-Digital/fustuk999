import { useState } from "react";
import Reveal from "../components/Reveal";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  message: "",
};

function validate(form) {
  const errors = {};

  if (!form.name.trim()) errors.name = "Bitte gib deinen Namen an.";

  if (!form.email.trim()) {
    errors.email = "Bitte gib deine E-Mail-Adresse an.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Bitte gib eine gültige E-Mail-Adresse an.";
  }

  if (!form.phone.trim()) {
    errors.phone = "Bitte gib deine Telefonnummer an.";
  } else if (!/^[\d+\s()/-]{6,}$/.test(form.phone)) {
    errors.phone = "Bitte gib eine gültige Telefonnummer an.";
  }

  if (!form.date) errors.date = "Bitte wähle ein Datum aus.";
  if (!form.time) errors.time = "Bitte wähle eine Uhrzeit aus.";

  const guests = Number(form.guests);
  if (!guests || guests < 1 || guests > 20) {
    errors.guests = "Bitte gib zwischen 1 und 20 Personen an.";
  }

  return errors;
}

const inputClasses =
  "w-full rounded-lg border border-olive-900/15 bg-sand-50 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-900/40 transition-colors focus:border-terracotta-500 focus:outline-none focus:ring-2 focus:ring-terracotta-500/20";

function Field({ label, error, children, htmlFor }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-olive-900">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs font-medium text-terracotta-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default function Reservation() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Platzhalter: hier würde die Anfrage an ein echtes Backend/E-Mail-Service gehen.
      setStatus("success");
      setForm(initialForm);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="reservierung" className="bg-olive-900 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal className="text-center">
          <p className="eyebrow text-brass-400">Reservierung</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-sand-50 sm:text-5xl">
            Sichere dir deinen Tisch
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-sand-100/80">
            Fülle das Formular aus, wir bestätigen deine Reservierung so schnell wie möglich per
            Telefon oder E-Mail. Für größere Feiern und private Events kontaktiere uns gerne
            direkt.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-12 rounded-2xl bg-sand-50 p-6 shadow-soft sm:p-10"
          >
            {status === "success" && (
              <div
                role="status"
                className="mb-6 rounded-lg border border-olive-500/30 bg-olive-500/10 px-4 py-3 text-sm font-medium text-olive-700"
              >
                Vielen Dank! Deine Reservierungsanfrage wurde übermittelt. Wir melden uns in
                Kürze zur Bestätigung bei dir.
              </div>
            )}

            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Name" htmlFor="name" error={errors.name}>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={update("name")}
                  className={inputClasses}
                  placeholder="Dein vollständiger Name"
                />
              </Field>

              <Field label="E-Mail" htmlFor="email" error={errors.email}>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={update("email")}
                  className={inputClasses}
                  placeholder="du@beispiel.de"
                />
              </Field>

              <Field label="Telefon" htmlFor="phone" error={errors.phone}>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  className={inputClasses}
                  placeholder="+49 ..."
                />
              </Field>

              <Field label="Personenanzahl" htmlFor="guests" error={errors.guests}>
                <input
                  id="guests"
                  type="number"
                  min="1"
                  max="20"
                  value={form.guests}
                  onChange={update("guests")}
                  className={inputClasses}
                />
              </Field>

              <Field label="Datum" htmlFor="date" error={errors.date}>
                <input
                  id="date"
                  type="date"
                  min={today}
                  value={form.date}
                  onChange={update("date")}
                  className={inputClasses}
                />
              </Field>

              <Field label="Uhrzeit" htmlFor="time" error={errors.time}>
                <input
                  id="time"
                  type="time"
                  value={form.time}
                  onChange={update("time")}
                  className={inputClasses}
                />
              </Field>
            </div>

            <div className="mt-6">
              <Field label="Nachricht (optional)" htmlFor="message">
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  className={inputClasses}
                  placeholder="Allergien, Anlass, besondere Wünsche …"
                />
              </Field>
            </div>

            <button type="submit" className="btn-primary mt-8 w-full sm:w-auto">
              Reservierung anfragen
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
