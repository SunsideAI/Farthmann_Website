import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "verkauf-vermietung",
    title: "Verkauf & Vermietung",
    description:
      "Von der Objektaufnahme bis zum Notartermin – wir begleiten Sie beim Verkauf oder der Vermietung Ihrer Immobilie mit über 30 Jahren Erfahrung.",
    icon: "Home",
    href: "/leistungen/verkauf-vermietung",
  },
  {
    id: "gutachten",
    title: "Gutachten & Bewertung",
    description:
      "Als DEKRA-zertifizierter Sachverständiger erstellen wir professionelle Kurzgutachten für wohnwirtschaftlich genutzte Objekte.",
    icon: "FileCheck",
    href: "/leistungen/gutachten",
  },
  {
    id: "rundgang",
    title: "360°-Rundgänge",
    description:
      "Erleben Sie Immobilien virtuell – unsere professionellen 360-Grad-Rundgänge ermöglichen eine realistische Besichtigung von überall.",
    icon: "Eye",
    href: "/leistungen/verkauf-vermietung",
  },
];

export const sevenReasons = [
  {
    number: 1,
    title: "Über 30 Jahre Maklererfahrung",
    description: "Profitieren Sie von unserer langjährigen Erfahrung im regionalen Immobilienmarkt in Ostwestfalen-Lippe.",
    icon: "Award",
  },
  {
    number: 2,
    title: "Über 15 Jahre als Sachverständiger",
    description: "Als DEKRA-zertifizierter Sachverständiger bieten wir fundierte Wertermittlungen und Gutachten.",
    icon: "Shield",
  },
  {
    number: 3,
    title: "Umfangreiche Interessentendatenbank",
    description: "Durch unsere große Datenbank mit vorgemerkten Interessenten finden wir schnell den passenden Käufer oder Mieter.",
    icon: "Users",
  },
  {
    number: 4,
    title: "Flexible Besichtigungstermine",
    description: "Wir bieten Besichtigungstermine auch abends und am Wochenende an – passend zu Ihrem Zeitplan.",
    icon: "Calendar",
  },
  {
    number: 5,
    title: "Professionelle Vermarktung",
    description: "Hochwertige Fotos, 360°-Rundgänge und professionelle Exposés für eine optimale Präsentation.",
    icon: "Camera",
  },
  {
    number: 6,
    title: "Qualifizierte Wertermittlung",
    description: "Fundierte Marktpreiseinschätzung basierend auf aktuellen Marktdaten und unserer Sachverständigen-Expertise.",
    icon: "TrendingUp",
  },
  {
    number: 7,
    title: "Multiplikation über Immobilienportale",
    description: "Ihre Immobilie wird auf allen relevanten Portalen wie ImmoScout24, Immowelt und weiteren präsentiert.",
    icon: "Globe",
  },
];

export const propertyTypes = {
  wohnimmobilien: [
    "Ein- und Zweifamilienhäuser",
    "Doppelhaushälften",
    "Reihenhäuser",
    "Eigentumswohnungen",
    "Mehrfamilienhäuser",
    "Villen und Landhäuser",
  ],
  gewerbeimmobilien: [
    "Bürogebäude",
    "Ladenlokale",
    "Praxisräume",
    "Lagerhallen",
    "Produktionsstätten",
    "Gastronomie",
  ],
  anlageimmobilien: [
    "Mehrfamilienhäuser",
    "Wohn- und Geschäftshäuser",
    "Gewerbeimmobilien",
    "Portfolios",
  ],
};

export const processSteps = [
  { step: 1, title: "Objektaufnahme", description: "Besichtigung und Dokumentation Ihrer Immobilie" },
  { step: 2, title: "Bewertung", description: "Fundierte Marktwerteinschätzung" },
  { step: 3, title: "Vermarktung", description: "Professionelle Exposés und Portaleinstellungen" },
  { step: 4, title: "Besichtigungen", description: "Organisation und Durchführung von Besichtigungsterminen" },
  { step: 5, title: "Verhandlung", description: "Preisverhandlung im Interesse unserer Auftraggeber" },
  { step: 6, title: "Notartermin", description: "Begleitung bis zum erfolgreichen Abschluss" },
];
