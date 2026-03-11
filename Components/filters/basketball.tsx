"use client";

import { BASKETBALL_SUBS, BASKETBALL_FILTERS } from "@/data/shop";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";

interface BasketballFilterProps {
  basketballSub: string;
  setBasketballSub: (sub: string) => void;
  basketballDetail: string;
  setBasketballDetail: (detail: string) => void;
}

export default function Basketball({
  basketballSub,
  setBasketballSub,
  basketballDetail,
  setBasketballDetail,
}: BasketballFilterProps) {
  return (
    <div className="mb-8 space-y-4 text-xs">
      {/* Basketball Gear Type */}
      <div>
        <p className="text-xs sm:text-base font-bold uppercase tracking-widest text-gray-400 mb-2">
          Basketball Gears
        </p>

        <Select
          value={basketballSub}
          onValueChange={(value) => {
            setBasketballSub(value);
            setBasketballDetail("All");
          }}
        >
          <SelectTrigger className="w-full text-xs focus:ring-2 focus:ring-[#063c71]">
            <SelectValue className="text-xs" placeholder="Select gear type" />
          </SelectTrigger>

          <SelectContent>
            {BASKETBALL_SUBS.map((sub) => (
              <SelectItem className="text-xs" key={sub} value={sub}>
                {sub}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Basketball Detail */}
      {basketballSub !== "All" && (
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
            {basketballSub}
          </p>

          <Select
            value={basketballDetail}
            onValueChange={(value) => setBasketballDetail(value)}
          >
            <SelectTrigger className="w-full text-xs focus:ring-2 focus:ring-[#063c71]">
              <SelectValue className="text-xs" placeholder="Select option" />
            </SelectTrigger>

            <SelectContent>
              {(BASKETBALL_FILTERS[basketballSub] || []).map((item) => (
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
