import Link from "next/link";

type Category = {
  name: string;
  slug: string;
  image: string;
  bg: string;
  hoverRing: string;
};

// Random placeholder images for now.
// Later, replace each `image` with your own, e.g. "/images/categories/action-figures.png"
const categories: Category[] = [
  {
    name: "Action Figures",
    slug: "action-figures",
    image: "https://picsum.photos/seed/toyland-action/400/400",
    bg: "bg-rose-100",
    hoverRing: "hover:ring-rose-200",
  },
  {
    name: "Building Blocks",
    slug: "building-blocks",
    image: "https://picsum.photos/seed/toyland-blocks/400/400",
    bg: "bg-sky-100",
    hoverRing: "hover:ring-sky-200",
  },
  {
    name: "Dolls & Plush",
    slug: "dolls-and-plush",
    image: "https://picsum.photos/seed/toyland-plush/400/400",
    bg: "bg-orange-100",
    hoverRing: "hover:ring-orange-200",
  },
  {
    name: "Educational Toys",
    slug: "educational-toys",
    image: "https://picsum.photos/seed/toyland-edu/400/400",
    bg: "bg-emerald-100",
    hoverRing: "hover:ring-emerald-200",
  },
  {
    name: "Outdoor Toys",
    slug: "outdoor-toys",
    image: "https://picsum.photos/seed/toyland-outdoor/400/400",
    bg: "bg-violet-100",
    hoverRing: "hover:ring-violet-200",
  },
  {
    name: "Board Games",
    slug: "board-games",
    image: "https://picsum.photos/seed/toyland-games/400/400",
    bg: "bg-amber-100",
    hoverRing: "hover:ring-amber-200",
  },
];

function ArrowIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function CategorySection() {
  return (
    <section aria-labelledby="category-heading" className="w-full px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-900">
              Shop by Category
            </p>
            <h2
              id="category-heading"
              className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl"
            >
              Find the Perfect Toy
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500 md:text-base">
              Explore our wide range of categories, from educational toys to
              action figures, we have something for every child.
            </p>
          </div>

          <Link
            href="/shop"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 sm:mt-6"
          >
            View All Categories
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Cards */}
        <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/shop?category=${c.slug}`}
                className={`group flex h-full flex-col rounded-2xl p-4 ring-1 ring-transparent transition duration-300 hover:-translate-y-1 hover:shadow-lg ${c.bg} ${c.hoverRing}`}
              >
                {/* Image */}
                <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Text */}
                <div className="mt-4">
                  <h3 className="text-sm font-bold text-slate-900 md:text-[15px]">
                    {c.name}
                  </h3>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                    Shop Now
                    <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}