import type { ReactNode } from "react";

type Feature = {
  title: string;
  description: string;
  icon: ReactNode;
};

const iconProps = {
  className: "h-7 w-7",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const features: Feature[] = [
  {
    title: "Fast & Reliable Shipping",
    description: "Get your toys delivered quickly and safely.",
    icon: (
      <svg {...iconProps}>
        <path d="M3 6h11v10H3z" />
        <path d="M14 10h4l3 3v3h-7z" />
        <circle cx="7" cy="18" r="1.8" />
        <circle cx="17" cy="18" r="1.8" />
      </svg>
    ),
  },
  {
    title: "Safe & Non-Toxic",
    description: "All our toys meet the highest safety standards.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3l8 3v6c0 4.5-3.2 8.2-8 9-4.8-.8-8-4.5-8-9V6z" />
        <path d="M8.5 12l2.5 2.5 4.5-5" />
      </svg>
    ),
  },
  {
    title: "Easy 7-Day Returns",
    description: "Not happy? No worries, we've got you covered.",
    icon: (
      <svg {...iconProps}>
        <path d="M20 11a8 8 0 00-14.5-3.5L4 9" />
        <path d="M4 4v5h5" />
        <path d="M4 13a8 8 0 0014.5 3.5L20 15" />
        <path d="M20 20v-5h-5" />
      </svg>
    ),
  },
  {
    title: "24/7 Customer Support",
    description: "We're here to help, anytime you need us.",
    icon: (
      <svg {...iconProps}>
        <path d="M4 13v-1a8 8 0 0116 0v1" />
        <rect x="3" y="13" width="4" height="6" rx="2" />
        <rect x="17" y="13" width="4" height="6" rx="2" />
        <path d="M19 19c0 1.5-1.5 2.5-4 2.5h-2" />
      </svg>
    ),
  },
];

export default function FeaturesStrip() {
  return (
    <section aria-label="Why shop with us" className="w-full px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-7xl rounded-3xl bg-[#e1edfb] px-4 py-6 shadow-sm ring-1 ring-blue-200/80 sm:px-8 sm:py-8">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {features.map((f, i) => (
            <li
              key={f.title}
              className={`group flex items-center gap-4 lg:px-6 ${
                i !== 0 ? "lg:border-l lg:border-blue-300/60" : "lg:pl-0"
              }`}
            >
              {/* Icon */}
              <span className="relative flex h-16 w-16 shrink-0 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-[#bcdafa] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#a8cef7]" />
                <span className="relative text-slate-900 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-blue-700">
                  {f.icon}
                </span>
              </span>

              {/* Text */}
              <div>
                <h3 className="text-[15px] font-bold leading-snug text-slate-900">
                  {f.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {f.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}