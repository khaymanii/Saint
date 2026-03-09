export const SPORTS = [
  "All Sports",
  "Football",
  "Basketball",
  "Tennis",
  "Running",
  "NFL",
];

export const FOOTBALL_SUBS = [
  "All",
  "Club Jerseys",
  "Country Jerseys",
  "Boots",
  "Accessories",
];

export const PRICE_RANGES = [
  { label: "All Price", min: 0, max: Infinity },
  { label: "$0.00 – $99.99", min: 0, max: 99.99 },
  { label: "$100.00 – $199.99", min: 100, max: 199.99 },
  { label: "$200.00 – $299.99", min: 200, max: 299.99 },
  { label: "$300.00 – $399.99", min: 300, max: 399.99 },
  { label: "$400.00+", min: 400, max: Infinity },
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Real Madrid Home Jersey",
    brand: "Adidas",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=400&fit=crop",
    sport: "Football",
    sub: "Club Jerseys",
  },
  {
    id: 2,
    name: "Brazil National Jersey",
    brand: "Nike",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=400&h=400&fit=crop",
    sport: "Football",
    sub: "Country Jerseys",
  },
  {
    id: 3,
    name: "Predator Elite Boots",
    brand: "Adidas",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    sport: "Football",
    sub: "Boots",
  },
  {
    id: 4,
    name: "Barcelona Away Kit",
    brand: "Nike",
    price: 94.99,
    image:
      "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400&h=400&fit=crop",
    sport: "Football",
    sub: "Club Jerseys",
  },
  {
    id: 5,
    name: "France World Cup Jersey",
    brand: "Nike",
    price: 84.99,
    image:
      "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=400&h=400&fit=crop",
    sport: "Football",
    sub: "Country Jerseys",
  },
  {
    id: 6,
    name: "Football Shin Guards",
    brand: "Puma",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    sport: "Football",
    sub: "Accessories",
  },
  {
    id: 7,
    name: "Pro Basketball Shoes",
    brand: "Jordan",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    sport: "Basketball",
    sub: "",
  },
  {
    id: 8,
    name: "NBA Jersey Lakers",
    brand: "Nike",
    price: 109.99,
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=400&fit=crop",
    sport: "Basketball",
    sub: "",
  },
  {
    id: 9,
    name: "Tennis Racket Pro",
    brand: "Wilson",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
    sport: "Tennis",
    sub: "",
  },
  {
    id: 10,
    name: "Running Ultra Boost",
    brand: "Adidas",
    price: 139.99,
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    sport: "Running",
    sub: "",
  },
  {
    id: 11,
    name: "Swim Goggles Pro",
    brand: "Speedo",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=400&fit=crop",
    sport: "Swimming",
    sub: "",
  },
  {
    id: 12,
    name: "Chelsea Third Jersey",
    brand: "Nike",
    price: 74.99,
    image:
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&h=400&fit=crop",
    sport: "Football",
    sub: "Club Jerseys",
  },
];

export const SORT_OPTIONS = ["Featured", "Newest"];
