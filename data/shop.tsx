export const SPORTS = ["All Sports", "Football", "Basketball", "NFL"];

export const FOOTBALL_SUBS = [
  "All",
  "Club Jerseys",
  "Country Jerseys",
  "Boots",
  "Accessories",
];

export const BASKETBALL_SUBS = ["All", "Jerseys", "Shoes"];

export const FOOTBALL_FILTERS: Record<string, string[]> = {
  "Club Jerseys": ["All Clubs", "Real Madrid", "Barcelona"],
  "Country Jerseys": ["All Countries", "Brazil", "France"],
  Boots: ["All Boots", "Adidas", "Nike", "Puma"],
  Accessories: ["All Accessories", "Shin Guards", "Socks"],
};

export const BASKETBALL_FILTERS: Record<string, string[]> = {
  Jerseys: ["All Teams", "Lakers", "Warriors", "Bulls"],
  Shoes: ["All Shoes", "Jordan", "Nike", "Adidas"],
};

export const PRODUCTS = [
  // FOOTBALL - CLUB JERSEYS
  {
    id: 1,
    name: "Real Madrid Home Jersey",
    brand: "Adidas",
    price: 89.99,
    sport: "Football",
    sub: "Club Jerseys",
    team: "Real Madrid",
    images: [
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    ],
    description:
      "Official Real Madrid home jersey made with breathable fabric for comfort and performance.",
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.5,
    reviews: 150,
    stock: true,
  },
  {
    id: 2,
    name: "Barcelona Away Kit",
    brand: "Nike",
    price: 94.99,
    sport: "Football",
    sub: "Club Jerseys",
    team: "Barcelona",
    images: [
      "https://images.unsplash.com/photo-1560272564-c83b66b1ad12",
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68",
    ],
    description:
      "Official Barcelona away kit with breathable and lightweight performance fabric.",
    sizes: ["S", "M", "L", "XL"],
    rating: 4.4,
    reviews: 180,
    stock: true,
  },

  // FOOTBALL - COUNTRY JERSEYS
  {
    id: 3,
    name: "Brazil National Jersey",
    brand: "Nike",
    price: 79.99,
    sport: "Football",
    sub: "Country Jerseys",
    team: "Brazil",
    images: [
      "https://images.unsplash.com/photo-1556056504-5c7696c4c28d",
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68",
    ],
    description:
      "Brazil national team jersey designed with moisture-wicking material for maximum comfort.",
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 210,
    stock: true,
  },
  {
    id: 4,
    name: "France World Cup Jersey",
    brand: "Nike",
    price: 84.99,
    sport: "Football",
    sub: "Country Jerseys",
    team: "France",
    images: [
      "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90",
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55",
    ],
    description:
      "France national team jersey inspired by the World Cup champions.",
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 240,
    stock: true,
  },

  // FOOTBALL - BOOTS
  {
    id: 5,
    name: "Predator Elite Football Boots",
    brand: "Adidas",
    price: 199.99,
    sport: "Football",
    sub: "Boots",
    team: "Adidas",
    images: ["https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"],
    description:
      "High-performance football boots designed for speed, precision, and control on the pitch.",
    sizes: ["7", "8", "9", "10", "11"],
    rating: 4.7,
    reviews: 95,
    stock: true,
  },

  // FOOTBALL - ACCESSORIES
  {
    id: 6,
    name: "Football Shin Guards",
    brand: "Puma",
    price: 19.99,
    sport: "Football",
    sub: "Accessories",
    team: "Shin Guards",
    images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62"],
    description:
      "Lightweight shin guards providing superior protection and comfort.",
    sizes: ["S", "M", "L"],
    rating: 4.2,
    reviews: 60,
    stock: true,
  },

  // BASKETBALL - SHOES
  {
    id: 7,
    name: "Pro Basketball Shoes",
    brand: "Jordan",
    price: 159.99,
    sport: "Basketball",
    sub: "Shoes",
    team: "Jordan",
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff"],
    description:
      "High-performance basketball shoes engineered for explosive speed and support.",
    sizes: ["8", "9", "10", "11", "12"],
    rating: 4.8,
    reviews: 320,
    stock: true,
  },

  // BASKETBALL - JERSEYS
  {
    id: 8,
    name: "NBA Lakers Jersey",
    brand: "Nike",
    price: 109.99,
    sport: "Basketball",
    sub: "Jerseys",
    team: "Lakers",
    images: ["https://images.unsplash.com/photo-1546519638-68e109498ffc"],
    description:
      "Official Los Angeles Lakers jersey designed with breathable performance fabric.",
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 275,
    stock: true,
  },

  // TENNIS
  {
    id: 9,
    name: "Tennis Racket Pro",
    brand: "Wilson",
    price: 249.99,
    sport: "Tennis",
    sub: "",
    images: ["https://images.unsplash.com/photo-1551698618-1dfe5d97d256"],
    description:
      "Professional tennis racket built for control, power, and tournament performance.",
    sizes: ["Grip 2", "Grip 3", "Grip 4"],
    rating: 4.6,
    reviews: 110,
    stock: true,
  },

  // RUNNING
  {
    id: 10,
    name: "Adidas Ultraboost Running Shoes",
    brand: "Adidas",
    price: 139.99,
    sport: "Running",
    sub: "",
    images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa"],
    description:
      "Ultraboost running shoes with responsive cushioning for long-distance comfort.",
    sizes: ["7", "8", "9", "10", "11"],
    rating: 4.8,
    reviews: 410,
    stock: true,
  },
];
