"use client";

import { AGE_FILTERS, type AgeKey } from "../data/products";

export type AgeSelection = AgeKey | "all";

type Props = {
  value: AgeSelection;
  counts: Record<AgeSelection, number>;
  onChange: (value: AgeSelection) => void;
};

export default function AgeFilter({ value, counts, onChange }: Props) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between text-xs">
        <p className="flex items-center gap-1.5 font-semibold text-slate-700">
          <span>🎂</span> Quick Age Filter
        </p>
        <p className="hidden text-slate-400 sm:block">Tap to filter immediately</p>
      </div>

      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0 [&::-webkit-scrollbar]:hidden">
        {AGE_FILTERS.map((f) => {
          const active = value === f.key;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => onChange(f.key)}
              aria-pressed={active}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition ${
                active
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-blue-600 hover:ring-blue-300"
              }`}
            >
              <span className="mr-1">{f.icon}</span>
              {f.label}
              {f.range ? ` (${f.range})` : ` (${counts[f.key]})`}
            </button>
          );
        })}
      </div>
    </div>
  );
}