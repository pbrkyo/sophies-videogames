"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Check, Truck, Shield, MessageCircle } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getProductBySlug, getProductsByCategory } from "@/lib/products";
import { useCartStore } from "@/lib/cart-store";
import { formatCRCShort } from "@/lib/format";
import { ProductGrid } from "@/components/products/product-grid";
import { cn } from "@/lib/utils";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
        <Link href="/productos" className={cn(buttonVariants())}>
          Volver a Productos
        </Link>
      </div>
    );
  }

  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/productos"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver a Productos
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="relative aspect-square rounded-2xl bg-gradient-to-b from-secondary/30 to-secondary/60 overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain p-8"
            priority
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/placeholder.svg";
            }}
          />
          {product.isNew && (
            <Badge className="absolute top-4 left-4 bg-mario-blue text-white">
              NUEVO
            </Badge>
          )}
          {discount > 0 && (
            <Badge className="absolute top-4 right-4 bg-mario-red text-white">
              -{discount}%
            </Badge>
          )}
        </div>

        <div>
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
            {product.brand}
          </p>
          <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>

          <div className="flex items-baseline gap-3 mt-4">
            <span className="text-3xl font-bold text-mario-blue">
              {formatCRCShort(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                {formatCRCShort(product.originalPrice)}
              </span>
            )}
            <span className="text-xs text-muted-foreground">IVAI</span>
          </div>

          <div className="flex items-center gap-2 mt-3">
            <span
              className={`h-2 w-2 rounded-full ${
                product.inStock ? "bg-mario-green" : "bg-destructive"
              }`}
            />
            <span
              className={`text-sm font-medium ${
                product.inStock ? "text-mario-green" : "text-destructive"
              }`}
            >
              {product.inStock ? "En Stock" : "Agotado"}
            </span>
          </div>

          <Separator className="my-6" />

          <p className="text-muted-foreground leading-relaxed">
            {product.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Button
              size="lg"
              className="flex-1 transition-all"
              style={{
                background: added
                  ? "linear-gradient(135deg, #00A800, #43D043)"
                  : undefined,
              }}
              disabled={!product.inStock || added}
              onClick={() => {
                addItem(product);
                setAdded(true);
                setTimeout(() => {
                  setAdded(false);
                  openCart();
                }, 800);
              }}
            >
              {added ? (
                <><Check className="h-5 w-5 mr-2" />¡Agregado!</>
              ) : (
                <><ShoppingCart className="h-5 w-5 mr-2" />Agregar al Carrito</>
              )}
            </Button>
            <a
              href={`https://wa.me/50672526740?text=${encodeURIComponent(
                `Hola! Me interesa el producto: ${product.name} (${product.sku})`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "flex-1"
              )}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Consultar
            </a>
          </div>

          <p className="text-xs text-muted-foreground mt-2">
            SKU: {product.sku}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-mario-green shrink-0" />
              Garantía incluida
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="h-4 w-4 text-mario-blue shrink-0" />
              Producto original
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Truck className="h-4 w-4 text-mario-gold shrink-0" />
              Entrega en tienda
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Productos Relacionados</h2>
          <ProductGrid products={related} />
        </section>
      )}
    </div>
  );
}
