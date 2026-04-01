import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { SlidersHorizontal } from "lucide-react";
import { SPORTS, getSubs, getTeams } from "@/lib/filterUtils";
import PriceSlider from "./PriceSlider";

type Props = {
  state: any;
  setters: any;
  applyFilters: () => void;
  resetFilters: () => void;
};

export default function ShopFilters({
  state,
  setters,
  applyFilters,
  resetFilters,
}: Props) {
  const { tempSport, tempSub, tempTeam, tempMinPrice, tempMaxPrice } = state;

  const {
    setTempSport,
    setTempSub,
    setTempTeam,
    setTempMinPrice,
    setTempMaxPrice,
  } = setters;

  const selectStyle =
    "w-full border border-gray-300 p-2 rounded-md bg-white text-xs focus:outline-none focus:ring-1 focus:ring-[#063c71] focus:border-[#063c71] transition";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-4 border-l flex items-center hover:bg-gray-50 transition">
          <SlidersHorizontal size={18} />
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-md rounded-2xl px-6">
        <DialogHeader>
          <div className="flex justify-between items-center py-4">
            <DialogTitle className="text-lg font-semibold">Filter</DialogTitle>
            <button
              onClick={resetFilters}
              className="text-sm text-[#063c71] hover:underline"
            >
              Reset
            </button>
          </div>
        </DialogHeader>

        <div className="space-y-5">
          <select
            value={tempSport}
            onChange={(e) => {
              setTempSport(e.target.value);
              setTempSub("All");
              setTempTeam("All");
            }}
            className={selectStyle}
          >
            {SPORTS.map((s) => (
              <option className="bg-blue-50" key={s}>
                {s}
              </option>
            ))}
          </select>

          {tempSport !== "All Sports" && (
            <select
              value={tempSub}
              onChange={(e) => setTempSub(e.target.value)}
              className={selectStyle}
            >
              {getSubs(tempSport).map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          )}

          {tempSub !== "All" && (
            <select
              value={tempTeam}
              onChange={(e) => setTempTeam(e.target.value)}
              className={selectStyle}
            >
              {getTeams(tempSport, tempSub).map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          )}

          <PriceSlider
            min={tempMinPrice}
            max={tempMaxPrice}
            setMax={setTempMaxPrice}
          />

          <button
            onClick={applyFilters}
            className="w-full bg-[#063c71] hover:bg-[#052c52] text-white py-3 rounded-md cursor-pointer transition font-medium"
          >
            Apply Filters
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
