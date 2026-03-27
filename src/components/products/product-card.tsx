"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Eye } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@/lib/products";
import { useCartStore } from "@/lib/cart-store";
import { formatCRCShort } from "@/lib/format";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <Card className="group relative overflow-hidden border-border/50 hover:border-mario-blue/30 hover:shadow-lg transition-all duration-300">
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
        {product.isNew && (
          <Badge className="bg-mario-blue text-white text-[10px] font-semibold">
            NUEVO
          </Badge>
        )}
        {discount > 0 && (
          <Badge className="bg-mario-red text-white text-[10px] font-semibold">
            -{discount}%
          </Badge>
        )}
        {!product.inStock && (
          <Badge variant="secondary" className="text-[10px]">
            AGOTADO
          </Badge>
        )}
      </div>

      <Link href={`/productos/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-secondary/30 to-secondary/60 p-4">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-contain transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/placeholder.svg";
            }}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "shadow-lg"
              )}
            >
              <Eye className="h-4 w-4 mr-1.5" />
              Ver Detalle
            </span>
          </div>
        </div>
      </Link>

      <CardContent className="p-4">
        <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-1">
          {product.brand}
        </p>

        <Link href={`/productos/${product.slug}`}>
          <h3 className="text-sm font-semibold leading-snug line-clamp-2 group-hover:text-mario-blue transition-colors min-h-[2.5rem]">
            {product.name}
          </h3>
        </Link>

        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-lg font-bold text-mario-blue">
            {formatCRCShort(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {formatCRCShort(product.originalPrice)}
            </span>
          )}
        </div>

        <div className="mt-2 flex items-center gap-1.5">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              product.inStock ? "bg-mario-green" : "bg-muted-foreground"
            }`}
          />
          <span className="text-[11px] text-muted-foreground">
            {product.inStock ? "En stock" : "Agotado"}
          </span>
        </div>

        <Button
          className="w-full mt-3 bg-mario-blue hover:bg-mario-blue/90"
          size="sm"
          disabled={!product.inStock}
          onClick={() => addItem(product)}
        >
          <ShoppingCart className="h-4 w-4 mr-1.5" />
          Agregar
        </Button>
      </CardContent>
    </Card>
  );
}
