export type AgeKey = "baby" | "preschool" | "big-kids" | "pre-teens" | "teens";
export type BadgeTone = "amber" | "orange" | "blue" | "green" | "purple";

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  ageLabel: string;
  ageGroup: AgeKey;
  badge?: { label: string; tone: BadgeTone };
  image: string;
};

export type AgeFilterItem = {
  key: AgeKey | "all";
  label: string;
  range?: string;
  icon: string;
};

export const AGE_FILTERS: AgeFilterItem[] = [
  { key: "all", label: "All Ages", icon: "🎈" },
  { key: "baby", label: "Baby & Toddler", range: "0–2 yrs", icon: "🐥" },
  { key: "preschool", label: "Preschool", range: "3–5 yrs", icon: "🎨" },
  { key: "big-kids", label: "Big Kids", range: "6–8 yrs", icon: "🚀" },
  { key: "pre-teens", label: "Pre-Teens", range: "9–12 yrs", icon: "🧩" },
  { key: "teens", label: "Teens & Collectors", range: "12+ yrs", icon: "🎮" },
];

// TODO: replace with your real product images, e.g. "/images/products/bear.png"
const IMG = "/images/placeholder/shop-placeholder.png";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Barnaby Cuddle Bear",
    description:
      "Ultra-plush velvety fur with hypoallergenic recycled cloud stuffing for endless cuddles.",
    price: 29.99,
    rating: 4.9,
    reviews: 342,
    ageLabel: "Age 0+ (All Ages)",
    ageGroup: "baby",
    badge: { label: "Bestseller", tone: "amber" },
    image: IMG,
  },
  {
    id: 2,
    name: "Retro Turbo Speedster",
    description:
      "Heavyweight solid beechwood body with silent glide rubber wheels and non-toxic paint.",
    price: 19.99,
    oldPrice: 24.99,
    rating: 4.8,
    reviews: 180,
    ageLabel: "Age 3+ Years",
    ageGroup: "preschool",
    badge: { label: "Sale 20%", tone: "orange" },
    image: IMG,
  },
  {
    id: 3,
    name: "Rainbow Sensory Stacker",
    description:
      "Textured teether-safe BPA-free rings promoting motor precision and color recognition.",
    price: 16.5,
    rating: 4.9,
    reviews: 420,
    ageLabel: "Age 6m+",
    ageGroup: "baby",
    badge: { label: "Montessori", tone: "blue" },
    image: IMG,
  },
  {
    id: 4,
    name: "Rex the Friendly Corduroy Dino",
    description:
      "Chunky tactile corduroy ribbing with a soft belly, ready for jurassic tea parties.",
    price: 24.99,
    rating: 4.7,
    reviews: 156,
    ageLabel: "Age 1+ Years",
    ageGroup: "baby",
    badge: { label: "Popular", tone: "purple" },
    image: IMG,
  },
  {
    id: 5,
    name: "Cosmic Blast Wooden Rocket",
    description:
      "Three levels of exploratory fun with magnetic capsule separator and 2 astronaut figures.",
    price: 44.99,
    rating: 5.0,
    reviews: 94,
    ageLabel: "Age 3+ Years",
    ageGroup: "preschool",
    badge: { label: "Staff Pick", tone: "blue" },
    image: IMG,
  },
  {
    id: 6,
    name: "Pastel Wooden Blocks (50 pcs)",
    description:
      "Solid FSC-certified German beechwood blocks in serene muted tones with smooth edges.",
    price: 34.0,
    rating: 4.8,
    reviews: 210,
    ageLabel: "Age 2+ Years",
    ageGroup: "baby",
    badge: { label: "Beechwood", tone: "green" },
    image: IMG,
  },
  {
    id: 7,
    name: "Little Scientist Magnetic Maze",
    description:
      "Sealed acrylic face keeps 20 magnetic beads completely secure while little hands explore.",
    price: 22.99,
    rating: 4.9,
    reviews: 185,
    ageLabel: "Age 4+ Years",
    ageGroup: "preschool",
    image: IMG,
  },
  {
    id: 8,
    name: "Wonderland Melody Train",
    description:
      "Pull cord activates a gentle rolling xylophone melody with soft wooden carriages.",
    price: 32.5,
    rating: 4.8,
    reviews: 64,
    ageLabel: "Age 18m+",
    ageGroup: "baby",
    badge: { label: "New", tone: "green" },
    image: IMG,
  },
  {
    id: 9,
    name: "Robo Builder STEM Kit",
    description:
      "Snap-together circuits and 120 parts to build and program five different robots.",
    price: 39.99,
    rating: 4.7,
    reviews: 128,
    ageLabel: "Age 6+ Years",
    ageGroup: "big-kids",
    badge: { label: "STEM", tone: "blue" },
    image: IMG,
  },
  {
    id: 10,
    name: "Galaxy Explorer Telescope",
    description:
      "Beginner-friendly refractor with a tabletop tripod and a moon-map activity book.",
    price: 54.0,
    rating: 4.8,
    reviews: 77,
    ageLabel: "Age 8+ Years",
    ageGroup: "big-kids",
    image: IMG,
  },
  {
    id: 11,
    name: "Strategy Quest Board Game",
    description:
      "Cooperative fantasy adventure for 2–5 players with beautifully illustrated cards.",
    price: 27.5,
    rating: 4.6,
    reviews: 233,
    ageLabel: "Age 10+ Years",
    ageGroup: "pre-teens",
    badge: { label: "Popular", tone: "purple" },
    image: IMG,
  },
  {
    id: 12,
    name: "Collector's Vintage Model Kit",
    description:
      "Detailed 1:24 scale display kit with metal parts, decals and a premium wooden stand.",
    price: 64.99,
    rating: 4.9,
    reviews: 51,
    ageLabel: "Age 14+ Years",
    ageGroup: "teens",
    badge: { label: "Collector", tone: "orange" },
    image: IMG,
  },
];