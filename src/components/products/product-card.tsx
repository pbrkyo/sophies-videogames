"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Eye, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/products";
import { useCartStore } from "@/lib/cart-store";
import { useLangStore } from "@/lib/lang-store";
import { formatCRCShort } from "@/lib/format";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);
  const tr = useLangStore((s) => s.tr);
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    addItem(product);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      openCart();
    }, 800);
  }

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <div className="group relative bg-white rounded-2xl border border-border/60 overflow-hidden gradient-card-hover hover:border-[#5C94FC]/30">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
        {product.isNew && (
          <span
            className="text-[10px] font-extrabold px-2.5 py-1 rounded-full text-white uppercase tracking-wide"
            style={{ background: "#5C94FC" }}
          >
            {tr("new_badge")}
          </span>
        )}
        {discount > 0 && (
          <span
            className="text-[10px] font-extrabold px-2.5 py-1 rounded-full text-white uppercase tracking-wide"
            style={{ background: "#E40058" }}
          >
            -{discount}%
          </span>
        )}
        {!product.inStock && (
          <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-muted text-muted-foreground uppercase tracking-wide">
            {tr("out_of_stock")}
          </span>
        )}
      </div>

      {/* Product image */}
      <Link href={`/productos/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-[#F5F7FF] to-[#EEF2FF]">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-contain p-4 product-img-zoom"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/placeholder.svg";
            }}
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/8 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/95 backdrop-blur-sm text-xs font-bold shadow-lg">
              <Eye className="h-3.5 w-3.5" />
              {tr("view_details")}
            </span>
          </div>
        </div>
      </Link>

      {/* Card body */}
      <div className="p-3 sm:p-4">
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
          {product.brand}
        </p>

        <Link href={`/productos/${product.slug}`}>
          <h3 className="text-xs sm:text-sm font-bold leading-snug line-clamp-2 group-hover:text-[#5C94FC] transition-colors min-h-[2.25rem] sm:min-h-[2.5rem]">
            {product.name}
          </h3>
        </Link>

        {/* Price + mobile cart button */}
        <div className="mt-2 sm:mt-3 flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-1.5 min-w-0">
            <span
              className="text-base sm:text-xl font-extrabold price-tag truncate"
              style={{ color: "#2038EC" }}
            >
              {formatCRCShort(product.price)}
            </span>
            {product.originalPrice && (
              <span className="hidden sm:inline text-xs text-muted-foreground line-through price-tag shrink-0">
                {formatCRCShort(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Mobile-only compact cart button */}
          <button
            className="sm:hidden h-10 w-10 rounded-xl flex items-center justify-center shrink-0 transition-all active:scale-90 disabled:opacity-40 disabled:cursor-not-allowed"
            style={{
              background: !product.inStock
                ? "#e5e7eb"
                : added
                ? "linear-gradient(135deg, #00A800, #43D043)"
                : "linear-gradient(135deg, #2038EC, #5C94FC)",
            }}
            disabled={!product.inStock || added}
            onClick={handleAddToCart}
            aria-label={tr("add_to_cart")}
          >
            {added ? (
              <Check className="h-4 w-4 text-white" />
            ) : (
              <ShoppingCart className={`h-4 w-4 ${product.inStock ? "text-white" : "text-gray-400"}`} />
            )}
          </button>
        </div>

        {/* Stock indicator */}
        <div className="flex items-center gap-1.5 mt-1.5">
          <span
            className={`h-1.5 w-1.5 rounded-full shrink-0 ${product.inStock ? "bg-[#00A800]" : "bg-muted-foreground"}`}
          />
          <span className="text-[11px] font-medium text-muted-foreground">
            {product.inStock ? tr("in_stock") : tr("out_of_stock")}
          </span>
        </div>

        {/* Desktop full-width cart button */}
        <button
          className="hidden sm:flex w-full mt-3 h-11 rounded-xl text-sm font-bold items-center justify-center gap-2 transition-all hover:opacity-90 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          style={{
            background: !product.inStock
              ? "#e5e7eb"
              : added
              ? "linear-gradient(135deg, #00A800, #43D043)"
              : "linear-gradient(135deg, #2038EC, #5C94FC)",
            color: !product.inStock ? "#6b7280" : "#ffffff",
          }}
          disabled={!product.inStock || added}
          onClick={handleAddToCart}
        >
          {added ? (
            <>
              <Check className="h-4 w-4 shrink-0" />
              {tr("added")}
            </>
          ) : (
            <>
              <ShoppingCart className="h-4 w-4 shrink-0" />
              {product.inStock ? tr("add_to_cart") : tr("out_of_stock")}
            </>
          )}
        </button>
      </div>
    </div>
  );
}
