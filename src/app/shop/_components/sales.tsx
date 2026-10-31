import Image from "next/image";
import Link from "next/link";

type IconName = "shield" | "truck" | "badge";

const features: {
  title: string;
  sub: string;
  icon: IconName;
  tone: string;
}[] = [
  {
    title: "100% Safe & Non-Toxic",
    sub: "Child-safe materials",
    icon: "shield",
    tone: "bg-blue-100 text-blue-600",
  },
  {
    title: "Free Shipping",
    sub: "On orders over $50",
    icon: "truck",
    tone: "bg-orange-100 text-orange-500",
  },
  {
    title: "Lab Certified Safe",
    sub: "Quality you can trust",
    icon: "badge",
    tone: "bg-emerald-100 text-emerald-600",
  },
];

function Icon({ name }: { name: IconName }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "shield")
    return (
      <svg {...common}>
        <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    );
  if (name === "truck")
    return (
      <svg {...common}>
        <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7" />
        <circle cx="7" cy="18" r="1.8" />
        <circle cx="17" cy="18" r="1.8" />
      </svg>
    );
  return (
    <svg {...common}>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5L8 21l4-2 4 2-1-7.5" />
    </svg>
  );
}

export default function Sales() {
  return (
    <section className="mx-auto w-full max-w-400 px-8 py-8">
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-gradient-to-br from-sky-50 via-white to-amber-50 shadow-xl shadow-blue-900/5">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 left-1/3 h-56 w-56 rounded-full bg-amber-200/40 blur-3xl" />

        <div className="relative grid lg:grid-cols-[1fr_1.1fr]">
          {/* LEFT: content */}
          <div className="relative z-10 flex flex-col justify-center gap-6 px-6 py-10 sm:px-10 lg:py-14 lg:pl-14">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-600/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
              Premium Toys &amp; Games
            </span>

            <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl md:text-5xl xl:text-6xl">
              Explore the{" "}
              <span className="whitespace-nowrap">
                <span className="text-blue-600">Toy</span>
                <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
                  Land
                </span>
              </span>{" "}
              Collection
            </h2>

            <p className="max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">
              Discover{" "}
              <span className="font-semibold text-slate-900">148+</span> joyful,
              certified safe, and imaginative toys crafted to spark boundless
              curiosity and pure smiles for every little dreamer.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/shop"
                className="group inline-flex items-center gap-2 rounded-full bg-amber-400 px-8 py-3.5 text-sm font-bold text-slate-900 shadow-lg shadow-amber-400/40 transition hover:-translate-y-0.5 hover:bg-amber-300"
              >
                Shop Now
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
              <Link
                href="/categories"
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-8 py-3.5 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
              >
                Browse Categories
              </Link>
            </div>
          </div>

          {/* RIGHT: image */}
          <div className="relative min-h-[300px] sm:min-h-[380px] lg:min-h-[500px]">
            <Image
              src="/images/placeholder/shop-placeholder.png"
              alt="Teddy bear with colorful wooden toys"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover object-[80%_center] lg:[mask-image:linear-gradient(to_right,transparent,black_30%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent,black_30%)]"
            />

            {/* floating badge */}
            <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur sm:bottom-8 sm:left-8 lg:left-16">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-xl">
                🧸
              </span>
              <div className="leading-tight">
                <p className="text-lg font-extrabold text-slate-900">148+</p>
                <p className="text-xs font-medium text-slate-500">
                  Toys to explore
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURE STRIP */}
        <ul className="relative grid divide-y divide-slate-100 border-t border-slate-100 bg-white/80 backdrop-blur sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {features.map((f) => (
            <li
              key={f.title}
              className="flex items-center gap-4 px-6 py-5 sm:px-8"
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${f.tone}`}
              >
                <Icon name={f.icon} />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-bold text-slate-900">
                  {f.title}
                </span>
                <span className="mt-0.5 block text-xs text-slate-500">
                  {f.sub}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}