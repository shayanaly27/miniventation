"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

type Product = {
  id: number;
  name: string;
  slug: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
};

// Random placeholder images for now.
// Later, replace each `image` with your own, e.g. "/images/products/teddy-bear.png"
const products: Product[] = [
  { id: 1, name: "Classic Teddy Bear", slug: "classic-teddy-bear", price: 2499, rating: 4.5, reviews: 124, image: "https://picsum.photos/seed/toyland-p1/500/500" },
  { id: 2, name: "LEGO City Police Car", slug: "lego-city-police-car", price: 3999, rating: 4.5, reviews: 98, image: "https://picsum.photos/seed/toyland-p2/500/500" },
  { id: 3, name: "Princess Doll", slug: "princess-doll", price: 2199, rating: 4.5, reviews: 76, image: "https://picsum.photos/seed/toyland-p3/500/500" },
  { id: 4, name: "Dinosaur Figure", slug: "dinosaur-figure", price: 1799, rating: 4.5, reviews: 62, image: "https://picsum.photos/seed/toyland-p4/500/500" },
  { id: 5, name: "RC Racing Car", slug: "rc-racing-car", price: 4499, rating: 4.5, reviews: 54, image: "https://picsum.photos/seed/toyland-p5/500/500" },
  { id: 6, name: "Wooden Puzzle Set", slug: "wooden-puzzle-set", price: 1299, rating: 4, reviews: 41, image: "https://picsum.photos/seed/toyland-p6/500/500" },
  { id: 7, name: "Building Blocks 100pc", slug: "building-blocks-100pc", price: 1999, rating: 5, reviews: 88, image: "https://picsum.photos/seed/toyland-p7/500/500" },
  { id: 8, name: "Kids Scooter", slug: "kids-scooter", price: 5999, rating: 4.5, reviews: 33, image: "https://picsum.photos/seed/toyland-p8/500/500" },
  { id: 9, name: "Family Board Game", slug: "family-board-game", price: 2799, rating: 4, reviews: 57, image: "https://picsum.photos/seed/toyland-p9/500/500" },
  { id: 10, name: "Space Rocket Toy", slug: "space-rocket-toy", price: 2399, rating: 4.5, reviews: 29, image: "https://picsum.photos/seed/toyland-p10/500/500" },
];

const AUTO_SCROLL_MS = 3000;

const formatPrice = (n: number) => `PKR ${n.toLocaleString("en-US")}`;

function Star({ fill }: { fill: number }) {
  // fill: 0 to 1
  return (
    <span className="relative inline-block h-3.5 w-3.5">
      <svg viewBox="0 0 24 24" className="absolute inset-0 h-full w-full text-gray-300" fill="currentColor" aria-hidden="true">
        <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
      </svg>
      <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-amber-400" fill="currentColor" aria-hidden="true">
          <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
        </svg>
      </span>
    </span>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} fill={Math.max(0, Math.min(1, rating - i))} />
      ))}
    </span>
  );
}

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function BestSellers() {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [paused, setPaused] = useState(false);
  const [favourites, setFavourites] = useState<number[]>([]);
  const [added, setAdded] = useState<number[]>([]);

  const scrollByCard = useCallback((direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const first = el.children[0] as HTMLElement | undefined;
    const second = el.children[1] as HTMLElement | undefined;
    const step = first && second ? second.offsetLeft - first.offsetLeft : el.clientWidth;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    const atStart = el.scrollLeft <= 4;

    if (direction === 1 && atEnd) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else if (direction === -1 && atStart) {
      el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    } else {
      el.scrollBy({ left: step * direction, behavior: "smooth" });
    }
  }, []);

  // Auto-scroll to the right every 5 seconds (pauses on hover/focus)
  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => scrollByCard(1), AUTO_SCROLL_MS);
    return () => clearInterval(id);
  }, [paused, scrollByCard]);

  const toggleFavourite = (id: number) =>
    setFavourites((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const handleAddToCart = (id: number) => {
    // TODO: connect to your cart state later
    setAdded((prev) => (prev.includes(id) ? prev : [...prev, id]));
    setTimeout(() => setAdded((prev) => prev.filter((x) => x !== id)), 1500);
  };

  return (
    <section aria-labelledby="best-sellers-heading" className="w-full px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="best-sellers-heading" className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Best Sellers
            </h2>
            <p className="mt-2 text-sm text-slate-500 md:text-base">Loved by kids, trusted by parents.</p>
          </div>

          <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-end sm:gap-4">
            <div className="hidden items-center gap-2 sm:flex">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Previous products"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-900 hover:text-white"
              >
                <ArrowIcon className="h-4 w-4 rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Next products"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-900 hover:text-white"
              >
                <ArrowIcon className="h-4 w-4" />
              </button>
            </div>

            <Link href="/shop" className="group inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-sm font-semibold text-blue-600 hover:text-blue-700">
              View All Products
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Slider */}
        <div
          className="relative mt-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <ul
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {products.map((p) => {
              const isFav = favourites.includes(p.id);
              const isAdded = added.includes(p.id);
              return (
                <li
                  key={p.id}
                  className="w-[72%] shrink-0 snap-start sm:w-[calc((100%-1rem)/2)] md:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-4rem)/5)]"
                >
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    {/* Wishlist */}
                    <button
                      type="button"
                      onClick={() => toggleFavourite(p.id)}
                      aria-label={isFav ? `Remove ${p.name} from favourites` : `Add ${p.name} to favourites`}
                      aria-pressed={isFav}
                      className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur transition hover:scale-110"
                    >
                      <svg
                        className={`h-4 w-4 transition ${isFav ? "text-red-500" : "text-slate-700"}`}
                        viewBox="0 0 24 24"
                        fill={isFav ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M12 21s-8-5.5-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 10c0 5.5-8 11-8 11z" />
                      </svg>
                    </button>

                    {/* Image */}
                    <Link href={`/product/${p.slug}`} className="block aspect-square overflow-hidden bg-gray-50">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>

                    {/* Info */}
                    <div className="flex flex-1 flex-col p-4">
                      <Link href={`/product/${p.slug}`} className="text-sm font-semibold text-slate-900 hover:text-blue-600">
                        {p.name}
                      </Link>

                      <div className="mt-2 flex items-center gap-2">
                        <Stars rating={p.rating} />
                        <span className="text-[11px] text-slate-400">({p.reviews})</span>
                      </div>

                      <p className="mt-3 text-base font-bold text-slate-900">{formatPrice(p.price)}</p>

                      <button
                        type="button"
                        onClick={() => handleAddToCart(p.id)}
                        className={`mt-4 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition active:scale-[0.98] ${
                          isAdded ? "bg-emerald-600" : "bg-slate-900 hover:bg-slate-700"
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                            Added
                          </>
                        ) : (
                          <>
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M3 4h2l2.4 11h10.2L20 7H6" />
                              <circle cx="9" cy="20" r="1.5" />
                              <circle cx="17" cy="20" r="1.5" />
                            </svg>
                            Add to Cart
                          </>
                        )}
                      </button>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}