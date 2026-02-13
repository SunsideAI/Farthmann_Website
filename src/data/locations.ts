import { Location } from "@/types";

export const locations: Location[] = [
  {
    id: "werther",
    name: "Büro Werther",
    address: "Engerstraße 50",
    zip: "33824",
    city: "Werther (Westf.)",
    phone: "05203 9 17 16 99",
    fax: "05203 9 17 16 98",
    email: "info@farthmann-immo.de",
    hours: [
      { days: "Montag – Donnerstag", time: "9:00 – 13:00 Uhr & 14:30 – 18:00 Uhr" },
      { days: "Freitag", time: "9:00 – 13:00 Uhr & 14:30 – 16:00 Uhr" },
    ],
    coordinates: { lat: 52.0776861, lng: 8.4203437 },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: "borgholzhausen",
    name: "Büro Borgholzhausen",
    address: "Dorfstraße 4",
    zip: "33829",
    city: "Borgholzhausen",
    phone: "05425 9 33 99 33",
    email: "info@farthmann-immo.de",
    hours: [
      { days: "Termine", time: "Nach Vereinbarung" },
    ],
    coordinates: { lat: 52.1043944, lng: 8.3381118 },
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
];

export const companyInfo = {
  name: "Heinz-Ulrich Farthmann Immobilien e.K.",
  shortName: "Farthmann Immobilien",
  email: "info@farthmann-immo.de",
  website: "https://farthmann-immo.de",
  social: {
    facebook: "https://www.facebook.com/farthmannimmobilien",
    instagram: "https://www.instagram.com/farthmannimmobilien",
  },
};
