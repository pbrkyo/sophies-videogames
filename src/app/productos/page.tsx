"use client";

import { useState, useMemo } from "react";
import { getProducts, type Product } from "@/lib/products";
import { ProductGrid } from "@/components/products/product-grid";
import { ProductFilters } from "@/components/products/product-filters";

export default function ProductosPage() {
  const allProducts = getProducts();
  const [filters, setFilters] = useState({
    category: "all",
    brand: "all",
    sort: "featured",
  });

  const filtered = useMemo(() => {
    let result = [...allProducts];

    if (filters.category !== "all") {
      result = result.filter((p) => p.category === filters.category);
    }
    if (filters.brand !== "all") {
      result = result.filter((p) => p.brand === filters.brand);
    }

    switch (filters.sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [allProducts, filters]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Todos los Productos</h1>
        <p className="text-muted-foreground mt-1">
          {filtered.length} productos disponibles
        </p>
      </div>

      <div className="mb-6">
        <ProductFilters onFilterChange={setFilters} />
      </div>

      <ProductGrid products={filtered} />
    </div>
  );
}
