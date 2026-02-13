interface LogoProps {
  variant?: "dark" | "white";
  size?: "sm" | "default";
}

export default function Logo({ variant = "dark", size = "default" }: LogoProps) {
  const isDark = variant === "dark";
  const primary = isDark ? "#2d488d" : "#ffffff";
  const subtle = isDark ? "#6b84b8" : "rgba(255,255,255,0.5)";

  const iconSize = size === "sm" ? "h-7 w-7" : "h-9 w-9";

  return (
    <div className="flex items-center gap-2.5">
      {/* Minimal house — just roof outline */}
      <svg
        viewBox="0 0 32 32"
        className={`${iconSize} flex-shrink-0`}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 17L16 4L29 17"
          stroke={primary}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 14V28H25V14"
          stroke={primary}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Text */}
      <div className="flex flex-col">
        <span
          className={`font-heading font-bold tracking-[0.06em] leading-none ${
            size === "sm" ? "text-base" : "text-lg"
          }`}
          style={{ color: primary }}
        >
          FARTHMANN
        </span>
        <span
          className={`font-heading font-medium tracking-[0.22em] leading-none mt-0.5 ${
            size === "sm" ? "text-[0.5rem]" : "text-[0.6rem]"
          }`}
          style={{ color: subtle }}
        >
          IMMOBILIEN
        </span>
      </div>
    </div>
  );
}
