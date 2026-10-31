"use client";

import { useMemo, useState } from "react";
import { PRODUCTS, type Product } from "../data/products";
import AgeFilter, { type AgeSelection } from "./age-filter";
import ShopToolbar, { type SortKey } from "./shop-toolbar";
import ProductGrid, { type GridView } from "./product-grid";

function sortProducts(list: Product[], sort: SortKey): Product[] {
  const copy = [...list];
  switch (sort) {
    case "price-asc":
      return copy.sort((a, b) => a.price - b.price);
    case "price-desc":
      return copy.sort((a, b) => b.price - a.price);
    case "rating":
      return copy.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
    default:
      return copy.sort((a, b) => b.reviews - a.reviews); // best sellers
  }
}

export default function ProductBrowser() {
  const [age, setAge] = useState<AgeSelection>("all");
  const [sort, setSort] = useState<SortKey>("best");
  const [view, setView] = useState<GridView>("comfortable");

  const counts = useMemo(() => {
    const base: Record<AgeSelection, number> = {
      all: PRODUCTS.length,
      baby: 0,
      preschool: 0,
      "big-kids": 0,
      "pre-teens": 0,
      teens: 0,
    };
    PRODUCTS.forEach((p) => base[p.ageGroup]++);
    return base;
  }, []);

  const visible = useMemo(() => {
    const filtered =
      age === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.ageGroup === age);
    return sortProducts(filtered, sort);
  }, [age, sort]);

  function handleAddToCart(product: Product) {
    // TODO: connect to your cart (context / zustand / API)
    console.log("Add to cart:", product.name);
  }

  return (
    <section className="mx-auto w-full max-w-7xl space-y-5 px-4 pb-16">
      <AgeFilter value={age} counts={counts} onChange={setAge} />
      <ShopToolbar
        shown={visible.length}
        total={visible.length}
        sort={sort}
        onSortChange={setSort}
        view={view}
        onViewChange={setView}
      />
      <ProductGrid
        products={visible}
        view={view}
        onAddToCart={handleAddToCart}
      />
    </section>
  );
}