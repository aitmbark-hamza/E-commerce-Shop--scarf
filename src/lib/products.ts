import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";
import product9 from "@/assets/product-9.jpg";
import product10 from "@/assets/product-10.jpg";
import product11 from "@/assets/product-11.jpg";
import product12 from "@/assets/product-12.jpg";
export interface Product {
  id: number;
  name: string;
  price: number;
  salePrice?: number;
  description: string;
  image: string;
  category: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Rose Blossom",
    price: 245,
    salePrice: 235,
    description: "Winter scarves keep you warm while showing off your fashion sense. Fringed neck scarves",
    image: product1,
    category: "Clothing",
    inStock: true,
  },
  {
    id: 2,
    name: "Lilac Dreams",
    price: 120,
    description: "Winter scarves keep you warm while showing off your fashion sense. Fringed neck scarves made from soft wool blends.",
    image: product2,
    category: "Footwear",
    inStock: true,
  },
  {
    id: 3,
    name: "Golden Glow",
    price: 85,
    salePrice: 70,
    description: "Winter scarves keep you warm while showing off your fashion sense. Fringed neck scarves.",
    image: product3,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 4,
    name: "Midnight Blue",
    price: 180,
    description: "Winter scarves keep you warm while showing off your fashion sense. Fringed neck scarves.",
    image: product4,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 5,
    name: "Soft Petal",
    price: 45,
    description: "Winter scarves keep you warm while showing off your fashion sense. Fringed neck scarves.",
    image: product5,
    category: "Clothing",
    inStock: true,
  },
  {
    id: 6,
    name: "Coral Kiss",
    price: 120,
    salePrice: 99,
    description: "Winter scarves keep you warm while showing off your fashion sense. Fringed neck scarves.",  
    image: product6,
    category: "Footwear",
    inStock: true,
  },
  {
    id: 7,
    name: "Mint Whisper",
    price: 85,
    description: "Winter scarves keep you warm while showing off your fashion sense. Fringed neck scarves.",
    image: product7,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 8,
    name: "Silver Lining",
    price: 180,
    salePrice: 150,
    description: "Winter scarves keep you warm while showing off your fashion sense. Fringed neck scarves.",
    image: product8,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 9,
    name: "Sunset Orange",
    price: 45,
    salePrice: 35,
    description: "Winter scarves keep you warm while showing off your fashion sense. Fringed neck scarves.",
    image: product9,
    category: "Clothing",
    inStock: true,
  },
  {
    id: 10,
    name: "Baby Pink",
    price: 120,
    description: "Winter scarves keep you warm while showing off your fashion sense. Fringed neck scarves.",
    image: product10,
    category: "Footwear",
    inStock: true,
  },
  {
    id: 11,
    name: "Ocean Breeze",
    price: 85,
    salePrice: 70,
    description: "Winter scarves keep you warm while showing off your fashion sense. Fringed neck scarves.",
    image: product11,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 12,
    name: "Lavender Mist",
    price: 180,
    description: "Winter scarves keep you warm while showing off your fashion sense. Fringed neck scarves.",
    image: product12,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 13,
    name: "Champagne Pearl",
    price: 45,
    description: "Winter scarves keep you warm while showing off your fashion sense. Fringed neck scarves.",
    image: product1,
    category: "Clothing",
    inStock: true,
  },
  {
    id: 14,
    name: "Sky Dancer",
    price: 120,
    salePrice: 99,
    description: "Winter scarves keep you warm while showing off your fashion sense. Fringed neck scarves.",
    image: product2,
    category: "Footwear",
    inStock: true,
  },
  {
    id: 15,
    name: "Autumn Leaves",
    price: 85,
    description: "Winter scarves keep you warm while showing off your fashion sense. Fringed neck scarves.",
    image: product3,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 16,
    name: "Honey Dew",
    price: 180,
    salePrice: 150,
    description: "Winter scarves keep you warm while showing off your fashion sense. Fringed neck scarves.",
    image: product4,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 17,
    name: "Blush Berry",
    price: 45,
    salePrice: 35,
    description: "Winter scarves keep you warm while showing off your fashion sense. Fringed neck scarves.",
    image: product1,
    category: "Clothing",
    inStock: true,
  },
  {
    id: 18,
    name: "Cocoa Brown",
    price: 120,
    description: "Winter scarves keep you warm while showing off your fashion sense. Fringed neck scarves.",
    image: product2,
    category: "Footwear",
    inStock: true,
  },
  {
    id: 19,
    name: "Creamy Vanilla",
    price: 85,
    salePrice: 70,
    description: "Winter scarves keep you warm while showing off your fashion sense. Fringed neck scarves.",
    image: product3,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 20,
    name: "Tropical Punch",
    price: 180,
    description: "Winter scarves keep you warm while showing off your fashion sense. Fringed neck scarves.",
    image: product4,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 21,
    name: "Peachy Glow",
    price: 45,
    description: "Winter scarves keep you warm while showing off your fashion sense. Fringed neck scarves.",
    image: product1,
    category: "Clothing",
    inStock: true,
  },
  {
    id: 22,
    name: "Fuchsia Flame",
    price: 120,
    salePrice: 99,
    description: "Winter scarves keep you warm while showing off your fashion sense. Fringed neck scarves.",
    image: product2,
    category: "Footwear",
    inStock: true,
  },
  {
    id: 23,
    name: "Ice Crystal",
    price: 85,
    description: "Winter scarves keep you warm while showing off your fashion sense. Fringed neck scarves.",
    image: product3,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 24,
    name: "Emerald Whisper",
    price: 180,
    salePrice: 150,
    description: "Winter scarves keep you warm while showing off your fashion sense. Fringed neck scarves.",
    image: product4,
    category: "Accessories",
    inStock: true,
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};
