"use client";

import { useState } from "react";
import Image from "next/image";
import { SlidersHorizontal, X } from "lucide-react";
import { ShopCard } from "@/Components/layout/ShopCard";
import Sports from "@/Components/filters/sports";
import Football from "@/Components/filters/football";
import Basketball from "@/Components/filters/basketball";
import { PRODUCTS } from "@/data/shop";

export default function Shop() {
  const [selectedSport, setSelectedSport] = useState("All Sports");
  const [footballSub, setFootballSub] = useState("All");
  const [footballDetail, setFootballDetail] = useState("All");
  const [basketballSub, setBasketballSub] = useState("All");
  const [basketballDetail, setBasketballDetail] = useState("All");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = PRODUCTS.filter((p) => {
    const sportMatch =
      selectedSport === "All Sports" || p.sport === selectedSport;

    let subMatch = true;
    let detailMatch = true;

    if (selectedSport === "Football") {
      subMatch = footballSub === "All" || p.sub === footballSub;
      if (footballSub !== "All") {
        detailMatch =
          footballDetail === "All" ||
          footballDetail === "All Clubs" ||
          footballDetail === "All Countries" ||
          p.team === footballDetail;
      }
    }

    if (selectedSport === "Basketball") {
      subMatch = basketballSub === "All" || p.sub === basketballSub;
      if (basketballSub !== "All") {
        detailMatch = basketballDetail === "All" || p.team === basketballDetail;
      }
    }

    return sportMatch && subMatch && detailMatch;
  });

  const activeLabel =
    selectedSport === "All Sports"
      ? "All Products"
      : selectedSport === "Football" && footballSub !== "All"
        ? `Football · ${footballSub} · ${footballDetail !== "All" ? footballDetail : ""}`
        : selectedSport === "Basketball" && basketballSub !== "All"
          ? `Basketball · ${basketballSub} · ${basketballDetail !== "All" ? basketballDetail : ""}`
          : selectedSport;

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* Banner */}
      <section className="relative w-full h-66 overflow-hidden">
        <Image
          src="/images/ball1.jpg"
          alt="Shop Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/35 flex flex-col items-center justify-center text-white">
          <p className="text-xs tracking-widest uppercase opacity-70 mb-2">
            Home • Shop
          </p>
          <h1 className="sm:text-3xl text-2xl font-black tracking-tight">
            Shop
          </h1>
          <p className="text-sm opacity-75 mt-1">Gear up for greatness.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 flex gap-8">
        {/* Sidebar */}
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

            <Sports
              selectedSport={selectedSport}
              setSelectedSport={setSelectedSport}
              setFootballSub={setFootballSub}
              setBasketballSub={setBasketballSub}
            />

            {selectedSport === "Football" && (
              <Football
                footballSub={footballSub}
                setFootballSub={setFootballSub}
                footballDetail={footballDetail}
                setFootballDetail={setFootballDetail}
              />
            )}

            {selectedSport === "Basketball" && (
              <Basketball
                basketballSub={basketballSub}
                setBasketballSub={setBasketballSub}
                basketballDetail={basketballDetail}
                setBasketballDetail={setBasketballDetail}
              />
            )}
          </aside>
        </>

        {/* Products */}
        <main className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="md:hidden flex items-center gap-2 text-sm font-medium text-gray-600 border border-gray-200 px-3 py-2 rounded-md hover:bg-gray-50 transition"
              >
                <SlidersHorizontal size={15} />
                Filter
              </button>
              <h2 className="text-xs font-bold text-gray-900">{activeLabel}</h2>
              <span className="text-xs text-gray-400">
                ({filtered.length} items)
              </span>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-32 text-gray-300">
              <p className="text-base font-semibold text-gray-400">
                No products found
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
                  image={p.images}
                  id={p.id}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
