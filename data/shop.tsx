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
    sport: "Football",
    sub: "Club Jerseys",
    images: [
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1560272564-c83b66b1ad12",
      "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90",
    ],
    description:
      "Official Real Madrid home jersey made with breathable fabric for comfort and performance.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff"],
    rating: 4.5,
    reviews: 150,
    stock: true,
  },

  {
    id: 2,
    name: "Brazil National Jersey",
    brand: "Nike",
    price: 79.99,
    sport: "Football",
    sub: "Country Jerseys",
    images: [
      "https://images.unsplash.com/photo-1556056504-5c7696c4c28d",
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
      "https://images.unsplash.com/photo-1546519638-68e109498ffc",
    ],
    description:
      "Brazil national team jersey designed with moisture-wicking material for maximum comfort.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#f7d117", "#0a8f3c"],
    rating: 4.6,
    reviews: 210,
    stock: true,
  },

  {
    id: 3,
    name: "Predator Elite Football Boots",
    brand: "Adidas",
    price: 199.99,
    sport: "Football",
    sub: "Boots",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
    ],
    description:
      "High-performance football boots designed for speed, precision, and control on the pitch.",
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["#000000", "#ff0000"],
    rating: 4.7,
    reviews: 95,
    stock: true,
  },

  {
    id: 4,
    name: "Barcelona Away Kit",
    brand: "Nike",
    price: 94.99,
    sport: "Football",
    sub: "Club Jerseys",
    images: [
      "https://images.unsplash.com/photo-1560272564-c83b66b1ad12",
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68",
      "https://images.unsplash.com/photo-1556056504-5c7696c4c28d",
      "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90",
    ],
    description:
      "Official Barcelona away kit with breathable and lightweight performance fabric.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#1e3a8a", "#f97316"],
    rating: 4.4,
    reviews: 180,
    stock: true,
  },

  {
    id: 5,
    name: "France World Cup Jersey",
    brand: "Nike",
    price: 84.99,
    sport: "Football",
    sub: "Country Jerseys",
    images: [
      "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90",
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55",
      "https://images.unsplash.com/photo-1560272564-c83b66b1ad12",
      "https://images.unsplash.com/photo-1546519638-68e109498ffc",
    ],
    description:
      "France national team jersey inspired by the World Cup champions.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#1d4ed8", "#ffffff"],
    rating: 4.6,
    reviews: 240,
    stock: true,
  },

  {
    id: 6,
    name: "Football Shin Guards",
    brand: "Puma",
    price: 19.99,
    sport: "Football",
    sub: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    ],
    description:
      "Lightweight shin guards providing superior protection and comfort.",
    sizes: ["S", "M", "L"],
    colors: ["#000000", "#ffffff"],
    rating: 4.2,
    reviews: 60,
    stock: true,
  },

  {
    id: 7,
    name: "Pro Basketball Shoes",
    brand: "Jordan",
    price: 159.99,
    sport: "Basketball",
    sub: "",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
    ],
    description:
      "High-performance basketball shoes engineered for explosive speed and support.",
    sizes: ["8", "9", "10", "11", "12"],
    colors: ["#000000", "#ef4444"],
    rating: 4.8,
    reviews: 320,
    stock: true,
  },

  {
    id: 8,
    name: "NBA Lakers Jersey",
    brand: "Nike",
    price: 109.99,
    sport: "Basketball",
    sub: "",
    images: [
      "https://images.unsplash.com/photo-1546519638-68e109498ffc",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55",
      "https://images.unsplash.com/photo-1556056504-5c7696c4c28d",
    ],
    description:
      "Official Los Angeles Lakers jersey designed with breathable performance fabric.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#facc15", "#7c3aed"],
    rating: 4.7,
    reviews: 275,
    stock: true,
  },

  {
    id: 9,
    name: "Tennis Racket Pro",
    brand: "Wilson",
    price: 249.99,
    sport: "Tennis",
    sub: "",
    images: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256",
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
    ],
    description:
      "Professional tennis racket built for control, power, and tournament performance.",
    sizes: ["Grip 2", "Grip 3", "Grip 4"],
    colors: ["#000000", "#f97316"],
    rating: 4.6,
    reviews: 110,
    stock: true,
  },

  {
    id: 10,
    name: "Adidas Ultraboost Running Shoes",
    brand: "Adidas",
    price: 139.99,
    sport: "Running",
    sub: "",
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    ],
    description:
      "Ultraboost running shoes with responsive cushioning for long-distance comfort.",
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["#000000", "#ffffff"],
    rating: 4.8,
    reviews: 410,
    stock: true,
  },
];
