"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCartStore } from "@/lib/cart-store";
import { useLangStore } from "@/lib/lang-store";
import { formatCRCShort } from "@/lib/format";
import { cn } from "@/lib/utils";

interface CartDrawerProps {
  onClose: () => void;
}

export function CartDrawer({ onClose }: CartDrawerProps) {
  const { items, updateQuantity, removeItem, totalPrice } = useCartStore();
  const tr = useLangStore((s) => s.tr);

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-center">
        <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-4">
          <ShoppingBag className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="font-semibold text-lg mb-2">{tr("cart_empty")}</h3>
        <p className="text-sm text-muted-foreground mb-6">
          {tr("cart_empty_sub")}
        </p>
        <Link
          href="/productos"
          onClick={onClose}
          className={cn(buttonVariants())}
        >
          {tr("explore")}
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="p-6 pb-4">
        <h2 className="text-lg font-semibold">
          {tr("cart_title")} ({items.reduce((s, i) => s + i.quantity, 0)})
        </h2>
      </div>

      <Separator />

      <ScrollArea className="flex-1 px-6">
        <div className="py-4 space-y-4">
          {items.map((item) => (
            <div key={item.product.id} className="flex gap-3">
              <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center shrink-0 overflow-hidden">
                <Image
                  src={item.product.images[0]}
                  alt={item.product.name}
                  width={64}
                  height={64}
                  className="object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium truncate">
                  {item.product.name}
                </h4>
                <p className="text-sm font-bold text-mario-blue mt-0.5">
                  {formatCRCShort(item.product.price)}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9"
                    onClick={() =>
                      updateQuantity(item.product.id, item.quantity - 1)
                    }
                  >
                    <Minus className="h-3.5 w-3.5" />
                  </Button>
                  <span className="text-sm font-medium w-6 text-center">
                    {item.quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9"
                    onClick={() =>
                      updateQuantity(item.product.id, item.quantity + 1)
                    }
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 ml-auto text-destructive"
                    onClick={() => removeItem(item.product.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-6 pt-4 border-t">
        <div className="flex items-center justify-between mb-4">
          <span className="font-medium">{tr("subtotal")}</span>
          <span className="text-lg font-bold">
            {formatCRCShort(totalPrice())}
          </span>
        </div>
        <p className="text-xs text-muted-foreground mb-4">
          {tr("tax_note")}
        </p>
        <div className="flex flex-col gap-2">
          <Link
            href="/checkout"
            onClick={onClose}
            className={cn(
              buttonVariants(),
              "w-full bg-mario-red hover:bg-mario-red/90"
            )}
          >
            {tr("checkout")}
          </Link>
          <Button
            variant="outline"
            className="w-full"
            onClick={onClose}
          >
            {tr("keep_shopping")}
          </Button>
        </div>
      </div>
    </div>
  );
}
