# Fustuk 999

Landingpage für das orientalische Restaurant Fustuk 999 in Heilbronn. React + Tailwind CSS, als One-Pager mit Sticky Nav.

## Entwicklung

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

> **Wichtig:** `dist/index.html` niemals direkt per Doppelklick im Browser öffnen (`file://…`).
> Der Build lädt Skripte und Styles als ES-Module über absolute Pfade (`/assets/...`), was
> Browser über `file://` aus CORS-Gründen blockieren — die Seite bleibt dann weiß/leer.
> Stattdessen immer über einen Webserver ausliefern, z. B. mit `npm run preview` oder dem
> Hosting-Provider deiner Wahl.
