import Link from "next/link";
import { getFeaturedProducts } from "@/lib/products";
import { ProductGrid } from "@/components/products/product-grid";

export function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Productos Destacados
            </h2>
            <p className="text-muted-foreground mt-1">
              Lo más popular de la tienda
            </p>
          </div>
          <Link
            href="/productos"
            className="text-sm text-mario-blue hover:underline"
          >
            Ver todo →
          </Link>
        </div>

        <ProductGrid products={products} />
      </div>
    </section>
  );
}
