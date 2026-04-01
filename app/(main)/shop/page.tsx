"use client";

import { useEffect, useState } from "react";
import { PRODUCTS } from "@/data/shop";
import ShopBanner from "@/Components/shop/ShopBanner";
import ShopFilters from "@/Components/shop/ShopFilters";
import ShopProduct from "@/Components/shop/ShopProduct";
import { Search } from "lucide-react";
import filterProducts from "@/lib/filterUtils";
import { usePagination } from "@/hooks/usePagination";
import PaginationControls from "@/Components/layout/PaginationControls";

export default function Shop() {
  const [selectedSport, setSelectedSport] = useState("All Sports");
  const [selectedSub, setSelectedSub] = useState("All");
  const [selectedTeam, setSelectedTeam] = useState("All");
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(300);
  const [tempSport, setTempSport] = useState(selectedSport);
  const [tempSub, setTempSub] = useState(selectedSub);
  const [tempTeam, setTempTeam] = useState(selectedTeam);
  const [tempMinPrice, setTempMinPrice] = useState(minPrice);
  const [tempMaxPrice, setTempMaxPrice] = useState(maxPrice);

  const applyFilters = () => {
    setSelectedSport(tempSport);
    setSelectedSub(tempSub);
    setSelectedTeam(tempTeam);
    setMinPrice(tempMinPrice);
    setMaxPrice(tempMaxPrice);
  };

  const resetFilters = () => {
    setTempSport("All Sports");
    setTempSub("All");
    setTempTeam("All");
    setTempMinPrice(0);
    setTempMaxPrice(300);

    setSelectedSport("All Sports");
    setSelectedSub("All");
    setSelectedTeam("All");
    setMinPrice(0);
    setMaxPrice(300);
  };

  const filtered = filterProducts(PRODUCTS, {
    selectedSport,
    selectedSub,
    selectedTeam,
    search,
    minPrice,
    maxPrice,
  });

  const { currentPage, totalPages, paginatedData, next, prev, goToPage } =
    usePagination(filtered, 12);

  // ✅ Reset page on filter change
  useEffect(() => {
    goToPage(1);
  }, [selectedSport, selectedSub, selectedTeam, search, minPrice, maxPrice]);

  return (
    <div className="min-h-screen">
      <ShopBanner />
      {/* SEARCH + FILTER */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex border rounded-lg bg-white overflow-hidden">
          <div className="flex items-center gap-2 flex-1 px-3">
            <Search size={18} className="text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full py-3 outline-none text-sm"
            />
          </div>

          <ShopFilters
            state={{
              tempSport,
              tempSub,
              tempTeam,
              tempMinPrice,
              tempMaxPrice,
            }}
            setters={{
              setTempSport,
              setTempSub,
              setTempTeam,
              setTempMinPrice,
              setTempMaxPrice,
            }}
            applyFilters={applyFilters}
            resetFilters={resetFilters}
          />
        </div>
      </div>
      <ShopProduct products={paginatedData} />
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        goToPage={goToPage}
        next={next}
        prev={prev}
      />
    </div>
  );
}
