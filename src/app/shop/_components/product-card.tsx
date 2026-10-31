"use client";

import { useState } from "react";
import Image from "next/image";
import type { BadgeTone, Product } from "../data/products";

const BADGE_STYLES: Record<BadgeTone, string> = {
  amber: "bg-amber-400 text-slate-900",
  orange: "bg-orange-500 text-white",
  blue: "bg-blue-600 text-white",
  green: "bg-emerald-500 text-white",
  purple: "bg-violet-500 text-white",
};

type Props = {
  product: Product;
  onAddToCart?: (product: Product) => void;
};

export default function ProductCard({ product, onAddToCart }: Props) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="group flex flex-col rounded-3xl bg-white p-3 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10">
      {/* image */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {product.badge && (
          <span
            className={`absolute left-2.5 top-2.5 rounded-full px-2.5 py-1 text-[11px] font-bold shadow ${BADGE_STYLES[product.badge.tone]}`}
          >
            {product.badge.label}
          </span>
        )}

        <button
          type="button"
          onClick={() => setLiked((v) => !v)}
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={liked}
          className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow backdrop-blur transition hover:scale-110"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={liked ? "#ef4444" : "none"}
            stroke={liked ? "#ef4444" : "currentColor"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-slate-600"
          >
            <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 000-7.8z" />
          </svg>
        </button>

        <span className="absolute bottom-2.5 left-2.5 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-slate-600 backdrop-blur">
          {product.ageLabel}
        </span>
      </div>

      {/* info */}
      <div className="flex flex-1 flex-col gap-1.5 px-1 pb-1 pt-3">
        <p className="flex items-center gap-1 text-xs text-slate-500">
          <span className="text-amber-400">★</span>
          <span className="font-bold text-slate-800">
            {product.rating.toFixed(1)}
          </span>
          <span>({product.reviews} reviews)</span>
        </p>

        <h3 className="truncate text-base font-bold text-slate-900">
          {product.name}
        </h3>

        <p className="line-clamp-2 text-xs leading-relaxed text-slate-500">
          {product.description}
        </p>

        <div className="mt-auto flex flex-col items-stretch gap-2 pt-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0 leading-tight">
            <span
              className={`text-base font-extrabold sm:text-lg ${
                product.oldPrice ? "text-orange-600" : "text-slate-900"
              }`}
            >
              ${product.price.toFixed(2)}
            </span>
            {product.oldPrice && (
              <span className="ml-1.5 text-xs text-slate-400 line-through">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => onAddToCart?.(product)}
            className="inline-flex w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-amber-400 px-3 py-2 text-xs font-bold text-slate-900 shadow-md shadow-amber-400/30 transition hover:bg-amber-300 active:scale-95 sm:w-auto sm:px-4"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 7h12l-1 12H7L6 7z" />
              <path d="M9 7a3 3 0 016 0" />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}