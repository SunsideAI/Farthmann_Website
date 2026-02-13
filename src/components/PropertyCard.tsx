import Link from "next/link";
import Image from "next/image";
import { MapPin, BedDouble, Bath, Maximize, ArrowRight } from "lucide-react";
import { Property } from "@/types";
import { formatPrice } from "@/lib/utils";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="card overflow-hidden group hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Badges */}
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

        {/* Quick-view button on hover */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <Link
            href={`/immobilien/${property.id}`}
            className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-primary-800 px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-white shadow-lg transition-all"
          >
            Details ansehen
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <Link href={`/immobilien/${property.id}`}>
          <h3 className="font-heading text-lg font-semibold text-neutral-900 group-hover:text-primary-800 transition-colors duration-300 line-clamp-1">
            {property.title}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mt-2 text-neutral-500 text-sm">
          <MapPin size={14} className="text-primary-600" />
          <span>{property.location}</span>
        </div>

        <p className="text-neutral-500 text-sm mt-2 line-clamp-2">
          {property.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-3 gap-3 mt-4 py-4 border-t border-neutral-100">
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-1.5 text-sm text-neutral-600 group-hover:text-primary-700 transition-colors duration-300">
              <BedDouble size={16} className="text-primary-600" />
              <span>{property.bedrooms} Zi.</span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center gap-1.5 text-sm text-neutral-600 group-hover:text-primary-700 transition-colors duration-300">
              <Bath size={16} className="text-primary-600" />
              <span>{property.bathrooms} Bad</span>
            </div>
          )}
          <div className="flex items-center gap-1.5 text-sm text-neutral-600 group-hover:text-primary-700 transition-colors duration-300">
            <Maximize size={16} className="text-primary-600" />
            <span>{property.area} m²</span>
          </div>
        </div>

        {/* Price + Link */}
        <div className="flex items-center justify-between mt-auto pt-2">
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
