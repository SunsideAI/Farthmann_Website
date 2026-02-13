import Link from "next/link";
import Image from "next/image";
import { MapPin, BedDouble, Bath, Maximize, ArrowRight } from "lucide-react";
import { Property } from "@/types";
import { formatPrice } from "@/lib/utils";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="card card-hover overflow-hidden group">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span
            className={`badge ${
              property.type === "kauf" ? "badge-primary" : "badge-accent"
            }`}
          >
            {property.type === "kauf" ? "Kauf" : "Miete"}
          </span>
          {property.featured && (
            <span className="badge badge-success">Top-Angebot</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <Link href={`/immobilien/${property.id}`}>
          <h3 className="font-serif text-lg font-semibold text-neutral-900 group-hover:text-primary-800 transition-colors line-clamp-1">
            {property.title}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mt-2 text-neutral-500 text-sm">
          <MapPin size={14} />
          <span>{property.location}</span>
        </div>

        <p className="text-neutral-500 text-sm mt-2 line-clamp-2">
          {property.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-3 gap-3 mt-4 py-4 border-t border-neutral-100">
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-1.5 text-sm text-neutral-600">
              <BedDouble size={16} className="text-primary-600" />
              <span>{property.bedrooms} Zi.</span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center gap-1.5 text-sm text-neutral-600">
              <Bath size={16} className="text-primary-600" />
              <span>{property.bathrooms} Bad</span>
            </div>
          )}
          <div className="flex items-center gap-1.5 text-sm text-neutral-600">
            <Maximize size={16} className="text-primary-600" />
            <span>{property.area} m²</span>
          </div>
        </div>

        {/* Price + Link */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold text-primary-800">
            {formatPrice(property.price)}
            {property.type === "miete" && (
              <span className="text-sm font-normal text-neutral-500">/Monat</span>
            )}
          </span>
          <Link
            href={`/immobilien/${property.id}`}
            className="flex items-center gap-1 text-sm font-medium text-primary-800 hover:text-accent transition-colors group/link"
          >
            Details
            <ArrowRight
              size={16}
              className="group-hover/link:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
