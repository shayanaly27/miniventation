import type { Product } from "../data/products";
import ProductCard from "./product-card";

export type GridView = "comfortable" | "compact";

type Props = {
  products: Product[];
  view: GridView;
  onAddToCart?: (product: Product) => void;
};

const COLS: Record<GridView, string> = {
  comfortable: "grid-cols-1 min-[360px]:grid-cols-2 lg:grid-cols-4",
  compact: "grid-cols-1 min-[360px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
};

export default function ProductGrid({ products, view, onAddToCart }: Props) {
  if (products.length === 0) {
    return (
      <div className="rounded-3xl bg-white py-20 text-center ring-1 ring-slate-100">
        <p className="text-4xl">🧸</p>
        <p className="mt-3 font-bold text-slate-800">No toys found</p>
        <p className="text-sm text-slate-500">
          Try picking a different age group.
        </p>
      </div>
    );
  }

  return (
    <div className={`grid gap-4 sm:gap-5 ${COLS[view]}`}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}