"use client";

import type { GridView } from "./product-grid";

export type SortKey = "best" | "price-asc" | "price-desc" | "rating";

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "best", label: "Best Sellers" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

type Props = {
  shown: number;
  total: number;
  sort: SortKey;
  onSortChange: (value: SortKey) => void;
  view: GridView;
  onViewChange: (value: GridView) => void;
};

function ViewButton({
  active,
  label,
  onClick,
  children,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      className={`flex h-8 w-8 items-center justify-center rounded-lg transition ${
        active
          ? "bg-blue-100 text-blue-600"
          : "text-slate-400 hover:text-slate-700"
      }`}
    >
      {children}
    </button>
  );
}

export default function ShopToolbar({
  shown,
  total,
  sort,
  onSortChange,
  view,
  onViewChange,
}: Props) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-white px-4 py-3 ring-1 ring-slate-100 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 sm:gap-3">
        <p>
          Showing{" "}
          <span className="font-bold text-slate-800">
            {shown === 0 ? 0 : `1–${shown}`}
          </span>{" "}
          of <span className="font-bold text-slate-800">{total}</span> toys
        </p>
        <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 font-semibold text-blue-600">
          ⚡ Ready to ship
        </span>
      </div>

      <div className="flex items-center justify-between gap-3 sm:justify-end">
        <label className="flex items-center gap-2 text-xs text-slate-500">
          <span className="hidden font-medium sm:inline">Sort by:</span>
          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value as SortKey)}
            className="max-w-[min(60vw,14rem)] rounded-lg border border-slate-200 bg-white px-2 py-2 text-xs font-semibold text-slate-700 outline-none focus:border-blue-400 sm:max-w-none sm:px-3 sm:py-1.5"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>

        <div className="hidden items-center gap-1 sm:flex">
          <ViewButton
            active={view === "comfortable"}
            label="Comfortable grid"
            onClick={() => onViewChange("comfortable")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="3" width="8" height="8" rx="1.5" />
              <rect x="13" y="3" width="8" height="8" rx="1.5" />
              <rect x="3" y="13" width="8" height="8" rx="1.5" />
              <rect x="13" y="13" width="8" height="8" rx="1.5" />
            </svg>
          </ViewButton>
          <ViewButton
            active={view === "compact"}
            label="Compact grid"
            onClick={() => onViewChange("compact")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              {[3, 9.5, 16].flatMap((x) =>
                [3, 9.5, 16].map((y) => (
                  <rect key={`${x}-${y}`} x={x} y={y} width="5" height="5" rx="1" />
                ))
              )}
            </svg>
          </ViewButton>
        </div>
      </div>
    </div>
  );
}