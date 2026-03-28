"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { useCartStore } from "@/lib/cart-store";
import { formatCRCShort } from "@/lib/format";

export default function CarritoPage() {
  const { items, updateQuantity, removeItem, clearCart, totalPrice } =
    useCartStore();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="h-10 w-10 text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Tu carrito está vacío</h1>
          <p className="text-muted-foreground mb-6">
            Explora nuestra tienda y agrega productos a tu carrito
          </p>
          <Link href="/productos" className={cn(buttonVariants({ size: "lg" }))}>
            Explorar Productos
          </Link>
        </div>
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
        Seguir Comprando
      </Link>

      <h1 className="text-3xl font-bold mb-8">Carrito de Compras</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={item.product.id} className="overflow-hidden">
              <CardContent className="p-4 flex gap-4">
                <div className="w-24 h-24 rounded-lg bg-secondary flex items-center justify-center shrink-0 overflow-hidden">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    width={96}
                    height={96}
                    className="object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/images/placeholder.svg";
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/productos/${item.product.slug}`}
                    className="font-semibold hover:text-mario-blue transition-colors line-clamp-1"
                  >
                    {item.product.name}
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    {item.product.brand}
                  </p>
                  <p className="text-lg font-bold text-mario-blue mt-1">
                    {formatCRCShort(item.product.price)}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="font-medium w-8 text-center">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <span className="text-sm font-semibold ml-auto">
                      {formatCRCShort(item.product.price * item.quantity)}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 text-destructive"
                      onClick={() => removeItem(item.product.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <Button
            variant="ghost"
            size="sm"
            className="text-destructive"
            onClick={clearCart}
          >
            <Trash2 className="h-4 w-4 mr-1.5" />
            Vaciar Carrito
          </Button>
        </div>

        {/* Summary */}
        <div>
          <Card className="lg:sticky lg:top-24">
            <CardContent className="p-6">
              <h2 className="font-semibold text-lg mb-4">
                Resumen del Pedido
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Subtotal (
                    {items.reduce((s, i) => s + i.quantity, 0)} productos)
                  </span>
                  <span>{formatCRCShort(totalPrice())}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">IVA incluido</span>
                  <span className="text-muted-foreground">Incluido</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-mario-blue">
                  {formatCRCShort(totalPrice())}
                </span>
              </div>

              <Link
                href="/checkout"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full mt-6 bg-mario-red hover:bg-mario-red/90"
                )}
              >
                Proceder al Pago
              </Link>

              <p className="text-xs text-muted-foreground text-center mt-3">
                Aceptamos SINPE Móvil, tarjetas y transferencia
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
