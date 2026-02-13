interface LogoProps {
  variant?: "dark" | "white";
  size?: "sm" | "default";
}

export default function Logo({ variant = "dark", size = "default" }: LogoProps) {
  const isDark = variant === "dark";
  const primary = isDark ? "#2d488d" : "#ffffff";
  const accent = isDark ? "#4568ab" : "rgba(255,255,255,0.85)";
  const taglineColor = isDark ? "#8ea8d5" : "rgba(255,255,255,0.55)";

  const iconSize = size === "sm" ? "h-9 w-9" : "h-11 w-11";

  return (
    <div className="flex items-center gap-3">
      {/* House Icon */}
      <svg
        viewBox="0 0 48 48"
        className={`${iconSize} flex-shrink-0`}
        aria-hidden="true"
      >
        {/* Roof */}
        <path
          d="M24 4L46 22H38V44H10V22H2L24 4Z"
          fill={primary}
        />
        {/* Door with rounded top */}
        <path
          d="M20 44V33C20 30.79 21.79 29 24 29C26.21 29 28 30.79 28 33V44H20Z"
          fill={isDark ? "#ffffff" : "#2d488d"}
          opacity={isDark ? 0.92 : 0.3}
        />
        {/* Left window */}
        <rect
          x="13"
          y="24"
          width="6"
          height="6"
          rx="1"
          fill={isDark ? "#ffffff" : "#2d488d"}
          opacity={isDark ? 0.85 : 0.25}
        />
        {/* Right window */}
        <rect
          x="29"
          y="24"
          width="6"
          height="6"
          rx="1"
          fill={isDark ? "#ffffff" : "#2d488d"}
          opacity={isDark ? 0.85 : 0.25}
        />
      </svg>

      {/* Text */}
      <div className="flex flex-col">
        <span
          className={`font-heading font-bold tracking-[0.08em] leading-none ${
            size === "sm" ? "text-lg" : "text-xl"
          }`}
          style={{ color: primary }}
        >
          FARTHMANN
        </span>
        <span
          className={`font-heading font-semibold tracking-[0.28em] leading-none mt-0.5 ${
            size === "sm" ? "text-[0.55rem]" : "text-[0.65rem]"
          }`}
          style={{ color: accent }}
        >
          IMMOBILIEN
        </span>
        <span
          className={`italic leading-none mt-1.5 ${
            size === "sm" ? "text-[0.5rem]" : "text-[0.58rem]"
          }`}
          style={{ color: taglineColor }}
        >
          damit Menschen sich wohlfühlen
        </span>
      </div>
    </div>
  );
}
