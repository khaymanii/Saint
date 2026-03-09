"use client";

import { useState } from "react";
import Image from "next/image";
import { SlidersHorizontal, ChevronDown, X } from "lucide-react";
import { ShopCard } from "@/Components/layout/ShopCard";
import {
  PRODUCTS,
  PRICE_RANGES,
  SPORTS,
  FOOTBALL_SUBS,
  SORT_OPTIONS,
} from "@/data/shop";

export default function Shop() {
  const [selectedSport, setSelectedSport] = useState("All Sports");
  const [footballSub, setFootballSub] = useState("All");
  const [priceRange, setPriceRange] = useState(0);
  const [sortBy, setSortBy] = useState("Featured");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = PRODUCTS.filter((p) => {
    const sportMatch =
      selectedSport === "All Sports" || p.sport === selectedSport;
    const subMatch =
      selectedSport !== "Football" ||
      footballSub === "All" ||
      p.sub === footballSub;
    const range = PRICE_RANGES[priceRange];
    const priceMatch = p.price >= range.min && p.price <= range.max;
    return sportMatch && subMatch && priceMatch;
  }).sort((a, b) => {
    if (sortBy === "Price: Low to High") return a.price - b.price;
    if (sortBy === "Price: High to Low") return b.price - a.price;
    return 0;
  });

  const activeLabel =
    selectedSport === "All Sports"
      ? "All Products"
      : selectedSport === "Football" && footballSub !== "All"
        ? `Football · ${footballSub}`
        : selectedSport;

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* ── Hero Banner ── */}
      <section className="relative w-full h-52 overflow-hidden">
        <Image
          src="/images/football1.jpg"
          alt="Shop Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/35 flex flex-col items-center justify-center text-white">
          <p className="text-xs tracking-widest uppercase opacity-70 mb-2">
            Home › Shop
          </p>
          <h1 className="text-4xl font-black tracking-tight">Shop</h1>
          <p className="text-sm opacity-75 mt-1">Gear up for greatness.</p>
        </div>
      </section>

      {/* ── Main Layout ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 flex gap-8">
        {/* ── Sidebar ── */}
        <>
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          <aside
            className={`
              fixed top-0 left-0 h-full z-50 bg-white p-6 overflow-y-auto w-64 shadow-xl transition-transform duration-300
              md:static md:z-auto md:h-auto md:w-56 md:shrink-0 md:bg-transparent md:p-0 md:shadow-none md:translate-x-0
              ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            {/* Mobile close button */}
            <div className="flex items-center justify-between mb-6 md:hidden">
              <span className="font-bold text-gray-900 text-sm uppercase tracking-widest">
                Filters
              </span>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-gray-500 hover:text-gray-900"
              >
                <X size={20} />
              </button>
            </div>

            {/* Sport / Category Filter */}
            <div className="mb-8">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                Categories
              </p>
              <ul className="space-y-0.5">
                {SPORTS.map((sport) => (
                  <li key={sport}>
                    <button
                      onClick={() => {
                        setSelectedSport(sport);
                        setFootballSub("All");
                      }}
                      className={`w-full text-left text-sm py-1.5 px-2 rounded-lg transition-all ${
                        selectedSport === sport
                          ? "font-semibold text-gray-900 underline underline-offset-2"
                          : "text-gray-500 hover:text-gray-900"
                      }`}
                    >
                      {sport}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Football sub-filter — only shown when Football is active */}
            {selectedSport === "Football" && (
              <div className="mb-8">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                  Football Type
                </p>
                <ul className="space-y-0.5">
                  {FOOTBALL_SUBS.map((sub) => (
                    <li key={sub}>
                      <button
                        onClick={() => setFootballSub(sub)}
                        className={`w-full text-left text-sm py-1.5 px-2 rounded-lg transition-all ${
                          footballSub === sub
                            ? "font-semibold text-gray-900 underline underline-offset-2"
                            : "text-gray-500 hover:text-gray-900"
                        }`}
                      >
                        {sub}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Price Filter */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                Price
              </p>
              <ul className="space-y-2">
                {PRICE_RANGES.map((range, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <input
                      type="radio"
                      id={`price-${i}`}
                      name="price"
                      checked={priceRange === i}
                      onChange={() => setPriceRange(i)}
                      className="accent-gray-900 cursor-pointer"
                    />
                    <label
                      htmlFor={`price-${i}`}
                      className="text-sm text-gray-500 cursor-pointer hover:text-gray-900 transition"
                    >
                      {range.label}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </>

        {/* ── Product Grid ── */}
        <main className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="md:hidden flex items-center gap-2 text-sm font-medium text-gray-600 border border-gray-200 px-3 py-2 rounded-xl hover:bg-gray-50 transition"
              >
                <SlidersHorizontal size={15} />
                Filter
              </button>
              <h2 className="text-base font-bold text-gray-900">
                {activeLabel}
              </h2>
              <span className="text-sm text-gray-400">
                ({filtered.length} items)
              </span>
            </div>

            {/* Sort dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none text-sm bg-white border border-gray-200 rounded-xl px-4 py-2 pr-8 text-gray-600 focus:outline-none cursor-pointer"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
              <ChevronDown
                size={13}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
          </div>

          {/* Cards */}
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-32 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-14 h-14 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 5M17 13l2.3 5M9 20a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm8 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"
                />
              </svg>
              <p className="text-base font-semibold text-gray-400">
                No products found
              </p>
              <p className="text-sm mt-1 text-gray-300">
                Try adjusting your filters
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((p) => (
                <ShopCard
                  key={p.id}
                  name={p.name}
                  brand={p.brand}
                  price={p.price}
                  image={p.image}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
