import productsData from "@/data/products.json";
import categoriesData from "@/data/categories.json";

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  inStock: boolean;
  featured: boolean;
  isNew: boolean;
  sku: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
  icon: string;
}

export function getProducts(): Product[] {
  return productsData as Product[];
}

export function getProductBySlug(slug: string): Product | undefined {
  return (productsData as Product[]).find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return (productsData as Product[]).filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return (productsData as Product[]).filter((p) => p.featured);
}

export function getNewProducts(): Product[] {
  return (productsData as Product[]).filter((p) => p.isNew);
}

export function getCategories(): Category[] {
  return categoriesData as Category[];
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return (categoriesData as Category[]).find((c) => c.slug === slug);
}

export function getBrands(): string[] {
  const brands = new Set((productsData as Product[]).map((p) => p.brand));
  return Array.from(brands).sort();
}
