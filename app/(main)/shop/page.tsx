"use client";

import { useMemo, useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import { usePagination } from "@/hooks/usePagination";
import ShopBanner from "@/Components/shop/ShopBanner";
import ShopFilters from "@/Components/shop/ShopFilters";
import ShopProduct from "@/Components/shop/ShopProduct";
import { Search } from "lucide-react";
import filterProducts from "@/lib/filterUtils";
import PaginationControls from "@/Components/layout/PaginationControls";

export default function Shop() {
  const [selectedSport, setSelectedSport] = useState("All Sports");
  const [selectedSub, setSelectedSub] = useState("All");
  const [selectedTeam, setSelectedTeam] = useState("All");
  const [search, setSearch] = useState("");
  const [tempSport, setTempSport] = useState(selectedSport);
  const [tempSub, setTempSub] = useState(selectedSub);
  const [tempTeam, setTempTeam] = useState(selectedTeam);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [tempMinPrice, setTempMinPrice] = useState(0);
  const [tempMaxPrice, setTempMaxPrice] = useState(100000);
  const { products, loading } = useProducts();

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
    setTempMaxPrice(100000);
    setSelectedSport("All Sports");
    setSelectedSub("All");
    setSelectedTeam("All");
    setMinPrice(0);
    setMaxPrice(100000);
  };

  const filtered = useMemo(
    () =>
      filterProducts(products, {
        selectedSport,
        selectedSub,
        selectedTeam,
        search,
        minPrice,
        maxPrice,
      }),
    [
      products,
      selectedSport,
      selectedSub,
      selectedTeam,
      search,
      minPrice,
      maxPrice,
    ],
  );

  const { currentPage, totalPages, paginatedData, next, prev, goToPage } =
    usePagination(filtered, 12);

  return (
    <div className="min-h-screen">
      <ShopBanner />
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
      <ShopProduct products={paginatedData} loading={loading} />
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
