"use client";
import { SPORTS } from "@/data/shop";

interface SportFilterProps {
  selectedSport: string;
  setSelectedSport: (sport: string) => void;
  setFootballSub: (sub: string) => void;
  setBasketballSub: (sub: string) => void;
}

export default function Sports({
  selectedSport,
  setSelectedSport,
  setFootballSub,
  setBasketballSub,
}: SportFilterProps) {
  return (
    <div className="mb-8">
      <p className="text-base font-bold uppercase tracking-widest text-gray-400 mb-3">
        Categories
      </p>
      <ul className="space-y-0.5">
        {SPORTS.map((sport) => (
          <li key={sport}>
            <button
              onClick={() => {
                setSelectedSport(sport);
                setFootballSub("All");
                setBasketballSub("All");
              }}
              className={`w-full text-left text-sm py-1.5 px-2 rounded-lg transition-all ${
                selectedSport === sport
                  ? "font-semibold text-[#063c71] underline underline-offset-2"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {sport}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
