"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Categories", href: "/categories", dropdown: true },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const categories = ["Action Figures", "Board Games", "Puzzles", "Plush Toys", "Outdoor"];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const wishlistCount = 1;
  const cartCount = 2;

  return (
    <header className="w-full bg-white backdrop-blur border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-3 md:h-20">
          <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400 text-xl md:h-12 md:w-12 md:text-2xl">
            🐻
          </span>
          <span className="text-2xl font-extrabold tracking-tight md:text-3xl">
            <span className="text-blue-600">Toy</span>
            <span className="text-orange-500">Land</span>
          </span>
          </Link>

          <ul className="hidden items-center gap-5 lg:gap-7 md:flex">
          {links.map((l) => (
            <li key={l.label} className="relative">
              {l.dropdown ? (
                <>
                  <button
                    onClick={() => {
                      setOpen(!open);
                      setActive(l.label);
                    }}
                    className={`flex items-center gap-1 pb-1 text-sm font-medium ${
                      active === l.label ? "text-blue-700" : "text-gray-800"
                    } hover:text-blue-600`}
                  >
                    {l.label}
                    <svg
                      className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {open && (
                    <ul className="absolute left-0 top-9 z-50 w-48 rounded-xl border border-gray-100 bg-white py-2 shadow-lg">
                      {categories.map((c) => (
                        <li key={c}>
                          <Link
                            href={`/categories/${c.toLowerCase().replace(/\s+/g, "-")}`}
                            onClick={() => setOpen(false)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          >
                            {c}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={l.href}
                  onClick={() => setActive(l.label)}
                  className={`relative block pb-1 text-sm font-medium hover:text-blue-600 ${
                    active === l.label ? "font-bold text-blue-700" : "text-gray-800"
                  }`}
                >
                  {l.label}
                  {active === l.label && (
                    <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-blue-600" />
                  )}
                </Link>
              )}
            </li>
          ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="hidden w-64 items-center gap-2 rounded-full bg-blue-50 px-4 py-2.5 xl:flex 2xl:w-80"
          >
            <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search for toys, games, and more..."
              className="flex-1 bg-transparent text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
            />
            <button type="submit" aria-label="Search">
              <svg className="h-5 w-5 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
              </svg>
            </button>
          </form>

          <Link href="/account" aria-label="Account" className="text-gray-900 hover:text-blue-600">
            <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4 4-6 8-6s8 2 8 6" strokeLinecap="round" />
            </svg>
          </Link>

          <Link href="/wishlist" aria-label="Wishlist" className="relative text-gray-900 hover:text-blue-600">
            <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path
                d="M12 21s-8-5.5-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 10c0 5.5-8 11-8 11z"
                strokeLinejoin="round"
              />
            </svg>
            {wishlistCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                {wishlistCount}
              </span>
            )}
          </Link>

          <Link href="/cart" aria-label="Cart" className="relative text-gray-900 hover:text-blue-600">
            <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 4h2l2.4 11h10.2L20 7H6" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9" cy="20" r="1.5" />
              <circle cx="17" cy="20" r="1.5" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-900 hover:bg-blue-50 md:hidden"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {mobileMenuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={`${mobileMenuOpen ? "block" : "hidden"} border-t border-gray-100 py-4 md:hidden`}
        >
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mb-3 flex items-center gap-2 rounded-full bg-blue-50 px-4 py-3"
          >
            <svg className="h-4 w-4 shrink-0 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search toys and games"
              aria-label="Search toys and games"
              className="min-w-0 flex-1 bg-transparent text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
            />
            <button type="submit" aria-label="Search">
              <svg className="h-5 w-5 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
              </svg>
            </button>
          </form>

          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.label}>
                {l.dropdown ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setOpen((isOpen) => !isOpen)}
                      aria-expanded={open}
                      className="flex min-h-11 w-full items-center justify-between py-2 text-left text-sm font-medium text-gray-800"
                    >
                      {l.label}
                      <svg className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {open && (
                      <ul className="border-l-2 border-blue-100 pl-4">
                        {categories.map((category) => (
                          <li key={category}>
                            <Link
                              href={`/categories/${category.toLowerCase().replace(/\s+/g, "-")}`}
                              onClick={() => {
                                setOpen(false);
                                setMobileMenuOpen(false);
                              }}
                              className="flex min-h-10 items-center text-sm text-gray-600 hover:text-blue-600"
                            >
                              {category}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={l.href}
                    onClick={() => {
                      setActive(l.label);
                      setMobileMenuOpen(false);
                    }}
                    className="flex min-h-11 items-center text-sm font-medium text-gray-800 hover:text-blue-600"
                  >
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}