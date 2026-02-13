export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Farthmann Immobilien",
    legalName: "Heinz-Ulrich Farthmann Immobilien e.K.",
    description:
      "Ihr Immobilienmakler und DEKRA-zertifizierter Gutachter in Ostwestfalen-Lippe. Über 30 Jahre Erfahrung in Verkauf, Vermietung und Immobilienbewertung.",
    url: "https://farthmann-immo.de",
    telephone: "+4952039171699",
    email: "info@farthmann-immo.de",
    foundingDate: "1990",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 52.0776861,
        longitude: 8.4203437,
      },
      geoRadius: "50000",
    },
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Engerstraße 50",
        addressLocality: "Werther (Westf.)",
        postalCode: "33824",
        addressCountry: "DE",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Dorfstraße 4",
        addressLocality: "Borgholzhausen",
        postalCode: "33829",
        addressCountry: "DE",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "14:30",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:00",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "14:30",
        closes: "16:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/farthmannimmobilien",
      "https://www.instagram.com/farthmannimmobilien",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "DEKRA-zertifizierter Sachverständiger für Immobilienbewertung",
      },
    ],
    memberOf: {
      "@type": "Organization",
      name: "IVD - Immobilienverband Deutschland",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
