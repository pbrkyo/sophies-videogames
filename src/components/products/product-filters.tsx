"use client";

import { useState } from "react";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCategories, getBrands } from "@/lib/products";

interface ProductFiltersProps {
  onFilterChange: (filters: {
    category: string;
    brand: string;
    sort: string;
  }) => void;
  activeCategory?: string;
}

export function ProductFilters({
  onFilterChange,
  activeCategory,
}: ProductFiltersProps) {
  const categories = getCategories();
  const brands = getBrands();

  const [category, setCategory] = useState(activeCategory || "all");
  const [brand, setBrand] = useState("all");
  const [sort, setSort] = useState("featured");

  const hasFilters = category !== "all" || brand !== "all";

  function handleChange(
    newCategory?: string | null,
    newBrand?: string | null,
    newSort?: string | null
  ) {
    const c = newCategory || category;
    const b = newBrand || brand;
    const s = newSort || sort;
    setCategory(c);
    setBrand(b);
    setSort(s);
    onFilterChange({ category: c, brand: b, sort: s });
  }

  function clearFilters() {
    setCategory("all");
    setBrand("all");
    setSort("featured");
    onFilterChange({ category: "all", brand: "all", sort: "featured" });
  }

  return (
    <div className="flex flex-wrap items-center gap-2 md:gap-3">
      <div className="flex items-center gap-2 text-sm text-muted-foreground w-full sm:w-auto">
        <Filter className="h-4 w-4" />
        Filtrar:
      </div>

      <Select
        value={category}
        onValueChange={(v) => handleChange(v, undefined, undefined)}
      >
        <SelectTrigger className="w-full sm:w-[160px] h-10 sm:h-9 text-sm">
          <SelectValue placeholder="Categoría" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todas</SelectItem>
          {categories.map((cat) => (
            <SelectItem key={cat.slug} value={cat.slug}>
              {cat.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={brand}
        onValueChange={(v) => handleChange(undefined, v, undefined)}
      >
        <SelectTrigger className="w-full sm:w-[140px] h-10 sm:h-9 text-sm">
          <SelectValue placeholder="Marca" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todas</SelectItem>
          {brands.map((b) => (
            <SelectItem key={b} value={b}>
              {b}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={sort}
        onValueChange={(v) => handleChange(undefined, undefined, v)}
      >
        <SelectTrigger className="w-full sm:w-[160px] h-10 sm:h-9 text-sm">
          <SelectValue placeholder="Ordenar" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="featured">Destacados</SelectItem>
          <SelectItem value="price-asc">Precio: Menor a Mayor</SelectItem>
          <SelectItem value="price-desc">Precio: Mayor a Menor</SelectItem>
          <SelectItem value="name">Nombre A-Z</SelectItem>
        </SelectContent>
      </Select>

      {hasFilters && (
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilters}
          className="h-10 sm:h-9 text-sm"
        >
          <X className="h-3 w-3 mr-1" />
          Limpiar
        </Button>
      )}
    </div>
  );
}
