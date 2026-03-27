"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getCategoryBySlug, getProductsByCategory } from "@/lib/products";
import { ProductGrid } from "@/components/products/product-grid";

export default function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = use(params);
  const category = getCategoryBySlug(slug);
  const products = getProductsByCategory(slug);

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Categoría no encontrada</h1>
        <Link href="/productos" className="text-mario-blue hover:underline">
          Ver todos los productos
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/productos"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Todos los Productos
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold">{category.name}</h1>
        <p className="text-muted-foreground mt-1">{category.description}</p>
        <p className="text-sm text-muted-foreground mt-1">
          {products.length} productos
        </p>
      </div>

      <ProductGrid products={products} />
    </div>
  );
}
