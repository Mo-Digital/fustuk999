export const restaurant = {
  name: "Fustuk 999",
  claim: "Levantinische Küche mit Herz, mitten in Heilbronn.",
  address: {
    street: "Frankfurter Straße 36",
    zip: "74072",
    city: "Heilbronn",
    country: "Deutschland",
  },
  phone: "+49 7131 9086660",
  phoneHref: "tel:+4971319086660",
  email: "fustuk999.heilbronn@gmail.com",
  mapsQuery: "Frankfurter Straße 36, 74072 Heilbronn",
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Frankfurter+Stra%C3%9Fe+36,+74072+Heilbronn&output=embed",
  mapsLinkSrc:
    "https://www.google.com/maps/search/?api=1&query=Frankfurter+Stra%C3%9Fe+36%2C+74072+Heilbronn",
};

export const hours = [
  { day: "Montag", time: "geschlossen", closed: true },
  { day: "Dienstag", time: "geschlossen", closed: true },
  { day: "Mittwoch", time: "17:00 – 22:00" },
  { day: "Donnerstag", time: "17:00 – 22:00" },
  { day: "Freitag", time: "17:00 – 22:00" },
  { day: "Samstag", time: "11:00 – 22:00" },
  { day: "Sonntag", time: "11:00 – 22:00" },
];

export const services = [
  { label: "Beheizte Terrasse", icon: "heat" },
  { label: "Außenbereich", icon: "outdoor" },
  { label: "Klimatisiert", icon: "ac" },
  { label: "Take-away", icon: "bag" },
  { label: "Private Feiern & Events", icon: "event" },
  { label: "Haustiere willkommen", icon: "paw" },
];

export const paymentMethods = [
  "Barzahlung",
  "Kontaktloses Bezahlen",
  "MasterCard",
  "VISA",
  "Debitkarte",
  "Maestro",
  "EC-Karte",
];

export const dietaryBadges = ["Halal", "Vegan-Optionen", "Vegetarisch", "Glutenfrei möglich"];

export const menuLinks = {
  main: "#speisekarte-download-platzhalter",
  drinks: "#getraenkekarte-download-platzhalter",
};

export const dishes = [
  {
    name: "Hummus Fustuk",
    description:
      "Cremiger Kichererbsen-Hummus, warmes Olivenöl, geröstete Pinienkerne, hausgebackenes Fladenbrot.",
    price: "7,50 €",
    tags: ["Vegan", "Glutenfrei"],
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Muhammara",
    description:
      "Aleppo-Paprikadip mit Walnüssen, Granatapfelsirup und einem Hauch Kreuzkümmel.",
    price: "7,90 €",
    tags: ["Vegan"],
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Fustuk Mixed Grill",
    description:
      "Auswahl von Lamm, Hähnchen und Kofta vom Grill, dazu Reis, gegrilltes Gemüse und Knoblauchsauce.",
    price: "22,90 €",
    tags: ["Halal"],
    image:
      "https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Falafel-Teller",
    description:
      "Knusprige Kichererbsen-Falafel, Tahin-Sauce, eingelegtes Gemüse, Salat und Fladenbrot.",
    price: "13,50 €",
    tags: ["Vegan"],
    image:
      "https://images.unsplash.com/photo-1633436375153-d7045cb93e38?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Knafeh",
    description:
      "Warmer Käsekuchen mit knusprigem Kadayif, Pistazien und Zuckersirup — unser Hausdessert.",
    price: "8,50 €",
    tags: ["Vegetarisch"],
    image:
      "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Baklava-Auswahl",
    description:
      "Drei handgemachte Baklava-Variationen mit Pistazien, Walnüssen und Honigsirup.",
    price: "6,90 €",
    tags: ["Vegetarisch"],
    image:
      "https://images.unsplash.com/photo-1585123334904-845d60e97b29?auto=format&fit=crop&w=900&q=80",
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    alt: "Warm beleuchteter Innenraum von Fustuk 999",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
    alt: "Beheizte Terrasse am Abend",
  },
  {
    src: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=1200&q=80",
    alt: "Levantinische Mezze-Auswahl auf dem Tisch",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    alt: "Gedeckter Tisch mit warmem Licht",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
    alt: "Gegrilltes Fleisch auf einer Servierplatte",
  },
  {
    src: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80",
    alt: "Kaffee und Tee zum Abschluss",
  },
];
