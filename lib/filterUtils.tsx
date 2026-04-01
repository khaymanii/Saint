import { PRODUCTS } from "@/data/shop";

export const SPORTS = [
  "All Sports",
  ...Array.from(new Set(PRODUCTS.map((p) => p.sport))),
];

export const getSubs = (sport: string) => {
  if (sport === "All Sports") return ["All"];
  const subs = PRODUCTS.filter((p) => p.sport === sport && p.sub).map(
    (p) => p.sub,
  );
  return ["All", ...Array.from(new Set(subs))];
};

export const getTeams = (sport: string, sub: string) => {
  const teams = PRODUCTS.filter((p) => {
    return (
      (sport === "All Sports" || p.sport === sport) &&
      (sub === "All" || p.sub === sub) &&
      p.team
    );
  }).map((p) => p.team);

  return ["All", ...Array.from(new Set(teams))];
};

export default function filterProducts(products: any[], filters: any) {
  const {
    selectedSport,
    selectedSub,
    selectedTeam,
    search,
    minPrice,
    maxPrice,
  } = filters;

  return products.filter((p) => {
    // ✅ SPORT
    const sportMatch =
      selectedSport === "All Sports" || p.sport === selectedSport;

    // ✅ SUB
    const subMatch = selectedSub === "All" || p.sub === selectedSub;

    // ✅ TEAM
    const teamMatch = selectedTeam === "All" || p.team === selectedTeam;

    // ✅ SEARCH (SAFE FIX)
    const searchMatch =
      !search || p.name.toLowerCase().includes(search.toLowerCase());

    // ✅ PRICE (SAFE FIX)
    const priceMatch =
      (!minPrice || p.price >= minPrice) && (!maxPrice || p.price <= maxPrice);

    return sportMatch && subMatch && teamMatch && searchMatch && priceMatch;
  });
}
