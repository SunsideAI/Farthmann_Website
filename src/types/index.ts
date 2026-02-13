export interface Property {
  id: string;
  title: string;
  description: string;
  type: "kauf" | "miete";
  price: number;
  location: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  yearBuilt: number;
  features: string[];
  images: string[];
  featured: boolean;
  category: "haus" | "wohnung" | "grundstueck" | "gewerbe";
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  phone?: string;
  email?: string;
  image: string;
  certifications?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  type: string;
  quote: string;
  rating: number;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  zip: string;
  city: string;
  phone: string;
  fax?: string;
  email: string;
  hours: { days: string; time: string }[];
  coordinates: { lat: number; lng: number };
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
