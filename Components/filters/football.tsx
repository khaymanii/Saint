"use client";

import { FOOTBALL_SUBS, FOOTBALL_FILTERS } from "@/data/shop";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";

interface FootballFilterProps {
  footballSub: string;
  setFootballSub: (sub: string) => void;
  footballDetail: string;
  setFootballDetail: (detail: string) => void;
}

export default function Football({
  footballSub,
  setFootballSub,
  footballDetail,
  setFootballDetail,
}: FootballFilterProps) {
  return (
    <div className="mb-8 space-y-4">
      {/* Football Gear Type */}
      <div>
        <p className="text-xs sm:text-base font-bold uppercase tracking-widest text-gray-400 mb-2">
          Football Gears
        </p>

        <Select
          value={footballSub}
          onValueChange={(value) => {
            setFootballSub(value);
            setFootballDetail("All");
          }}
        >
          <SelectTrigger className="w-full text-xs focus:ring-2 focus:ring-[#063c71]">
            <SelectValue className="text-xs" placeholder="Select gear" />
          </SelectTrigger>

          <SelectContent>
            {FOOTBALL_SUBS.map((sub) => (
              <SelectItem className="text-xs" key={sub} value={sub}>
                {sub}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {footballSub !== "All" && (
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
            {footballSub}
          </p>

          <Select
            value={footballDetail}
            onValueChange={(value) => setFootballDetail(value)}
          >
            <SelectTrigger className="w-full text-xs focus:ring-2 focus:ring-[#063c71]">
              <SelectValue className="text-xs" placeholder="Select option" />
            </SelectTrigger>

            <SelectContent>
              {(FOOTBALL_FILTERS[footballSub] || []).map((item) => (
                <SelectItem className="text-xs" key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
}
