import { Property } from "@/types";

export const properties: Property[] = [
  {
    id: "efh-werther-01",
    title: "Charmantes Einfamilienhaus in Werther",
    description:
      "Liebevoll gepflegtes Einfamilienhaus mit großem Garten in ruhiger Lage von Werther. Das Haus bietet viel Platz für die ganze Familie und wurde in den letzten Jahren umfangreich modernisiert.",
    type: "kauf",
    price: 385000,
    location: "Werther (Westf.)",
    address: "Werther (Westf.)",
    bedrooms: 5,
    bathrooms: 2,
    area: 160,
    yearBuilt: 1985,
    features: [
      "Garten",
      "Garage",
      "Keller",
      "Einbauküche",
      "Fußbodenheizung",
      "Modernisiert 2020",
    ],
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
    featured: true,
    category: "haus",
  },
  {
    id: "etw-borgholzhausen-01",
    title: "Moderne Eigentumswohnung in Borgholzhausen",
    description:
      "Helle 3-Zimmer-Wohnung mit Balkon und Stellplatz in zentraler Lage. Ideal für Paare oder kleine Familien. Die Wohnung befindet sich in einem gepflegten Mehrfamilienhaus.",
    type: "kauf",
    price: 195000,
    location: "Borgholzhausen",
    address: "Borgholzhausen",
    bedrooms: 3,
    bathrooms: 1,
    area: 85,
    yearBuilt: 2010,
    features: [
      "Balkon",
      "Stellplatz",
      "Einbauküche",
      "Aufzug",
      "Fußbodenheizung",
    ],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    ],
    featured: true,
    category: "wohnung",
  },
  {
    id: "dhh-halle-01",
    title: "Geräumige Doppelhaushälfte in Halle (Westf.)",
    description:
      "Großzügige Doppelhaushälfte mit Garten, Terrasse und Carport. Die ruhige Wohnlage bietet eine gute Anbindung an die umliegenden Städte. Ideal für Familien.",
    type: "kauf",
    price: 320000,
    location: "Halle (Westf.)",
    address: "Halle (Westf.)",
    bedrooms: 4,
    bathrooms: 2,
    area: 135,
    yearBuilt: 1998,
    features: [
      "Garten",
      "Terrasse",
      "Carport",
      "Keller",
      "Gäste-WC",
      "Rollläden",
    ],
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80",
    ],
    featured: true,
    category: "haus",
  },
  {
    id: "mw-bielefeld-01",
    title: "3-Zimmer-Mietwohnung in Bielefeld-Mitte",
    description:
      "Zentral gelegene Mietwohnung mit guter Anbindung an den ÖPNV. Die Wohnung wurde kürzlich renoviert und verfügt über einen modernen Grundriss.",
    type: "miete",
    price: 750,
    location: "Bielefeld",
    address: "Bielefeld-Mitte",
    bedrooms: 3,
    bathrooms: 1,
    area: 78,
    yearBuilt: 2005,
    features: [
      "Balkon",
      "Einbauküche",
      "Renoviert",
      "ÖPNV-Nähe",
    ],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&q=80",
    ],
    featured: true,
    category: "wohnung",
  },
  {
    id: "grundstueck-versmold-01",
    title: "Baugrundstück in Versmold",
    description:
      "Attraktives Baugrundstück in ruhiger Wohnlage. Das Grundstück ist voll erschlossen und bietet ideale Voraussetzungen für den Bau eines Einfamilienhauses.",
    type: "kauf",
    price: 125000,
    location: "Versmold",
    address: "Versmold",
    bedrooms: 0,
    bathrooms: 0,
    area: 650,
    yearBuilt: 0,
    features: [
      "Voll erschlossen",
      "Ruhige Lage",
      "Ebenes Gelände",
      "Südausrichtung",
    ],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    ],
    featured: false,
    category: "grundstueck",
  },
  {
    id: "gewerbe-guetersloh-01",
    title: "Bürofläche in Gütersloh",
    description:
      "Moderne Bürofläche in zentraler Lage von Gütersloh. Die Räumlichkeiten sind flexibel aufteilbar und eignen sich für verschiedene Nutzungskonzepte.",
    type: "miete",
    price: 1200,
    location: "Gütersloh",
    address: "Gütersloh Innenstadt",
    bedrooms: 0,
    bathrooms: 1,
    area: 120,
    yearBuilt: 2015,
    features: [
      "Klimaanlage",
      "Aufzug",
      "Parkplätze",
      "Glasfaser",
      "Teeküche",
    ],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    ],
    featured: false,
    category: "gewerbe",
  },
];

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured);
}

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id);
}

export function filterProperties(filters: {
  type?: string;
  category?: string;
  location?: string;
}): Property[] {
  return properties.filter((p) => {
    if (filters.type && p.type !== filters.type) return false;
    if (filters.category && p.category !== filters.category) return false;
    if (
      filters.location &&
      !p.location.toLowerCase().includes(filters.location.toLowerCase())
    )
      return false;
    return true;
  });
}

export function getAllPropertyIds(): string[] {
  return properties.map((p) => p.id);
}
