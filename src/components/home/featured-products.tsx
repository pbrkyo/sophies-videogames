import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";
import { getFeaturedProducts } from "@/lib/products";
import { ProductGrid } from "@/components/products/product-grid";

export function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="py-14 md:py-20" style={{ background: "#F5F7FF" }}>
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#E40058] mb-1 flex items-center gap-1.5">
              <Flame className="h-3.5 w-3.5" />
              Los más populares
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Productos Destacados
            </h2>
          </div>
          <Link
            href="/productos"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[#5C94FC] hover:underline underline-offset-4"
          >
            Ver catálogo completo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <ProductGrid products={products} />

        {/* Mobile CTA */}
        <div className="flex sm:hidden mt-8 justify-center">
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #2038EC, #5C94FC)" }}
          >
            Ver todo el catálogo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
