"use client";

import Link from "next/link";
import { ShoppingCart, Search, Menu, Phone, MessageCircle, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCartStore } from "@/lib/cart-store";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { useState } from "react";

const navLinks = [
  { href: "/productos", label: "Todos los Productos" },
  { href: "/categorias/consolas", label: "Consolas" },
  { href: "/categorias/videojuegos", label: "Videojuegos" },
  { href: "/categorias/accesorios", label: "Accesorios" },
  { href: "/categorias/retro", label: "Retro & Usado" },
  { href: "/metodos-de-pago", label: "Pagos" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const totalItems = useCartStore((s) => s.totalItems());
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Announcement bar */}
      <div
        className="text-white text-xs py-2"
        style={{ background: "linear-gradient(90deg, #2038EC, #5C94FC, #2038EC)", backgroundSize: "200% auto" }}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <a
              href="tel:+50625918052"
              className="flex items-center gap-1.5 hover:text-[#F8B800] transition-colors font-medium"
            >
              <Phone className="h-3 w-3" />
              2591-8052
            </a>
            <a
              href="https://wa.me/50672526740"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#F8B800] transition-colors font-medium"
            >
              <MessageCircle className="h-3 w-3" />
              WhatsApp
            </a>
          </div>
          <span className="hidden sm:block font-medium text-white/90">
            🎮 Más de 15 años en Cartago — Lun–Vie 9AM–5:30PM · Sáb 9AM–1PM
          </span>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white/95 backdrop-blur-xl border-b border-border/60 shadow-sm">
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3.5">

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger className="lg:hidden inline-flex items-center justify-center size-9 rounded-xl hover:bg-muted transition-colors">
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0">
              <div className="p-6 border-b" style={{ background: "linear-gradient(135deg, #0F0F1A, #2038EC)" }}>
                <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#F8B800" }}>
                    <Gamepad2 className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <p className="font-extrabold text-white text-base leading-tight">Sophie&apos;s</p>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-white/60">Videogames</p>
                  </div>
                </Link>
              </div>
              <nav className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 rounded-xl hover:bg-secondary text-sm font-semibold transition-colors flex items-center gap-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="p-4 border-t">
                <a
                  href="https://wa.me/50672526740"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-white text-sm transition-all hover:opacity-90"
                  style={{ background: "#00A800" }}
                >
                  <MessageCircle className="h-4 w-4" />
                  Escribir por WhatsApp
                </a>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md transition-transform group-hover:scale-105"
              style={{ background: "linear-gradient(135deg, #5C94FC, #2038EC)" }}
            >
              <Gamepad2 className="h-5 w-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <p className="font-extrabold text-base leading-tight tracking-tight" style={{ color: "#0F0F1A" }}>
                Sophie&apos;s
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground -mt-0.5">
                Videogames
              </p>
            </div>
          </Link>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar consolas, juegos, accesorios..."
                className="pl-10 h-10 bg-muted/60 border-transparent focus-visible:bg-white focus-visible:border-[#5C94FC] focus-visible:ring-[#5C94FC]/20 rounded-xl transition-all"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden size-9 rounded-xl"
              aria-label="Buscar"
            >
              <Search className="h-5 w-5" />
            </Button>

            <Sheet open={cartOpen} onOpenChange={setCartOpen}>
              <SheetTrigger className="relative inline-flex items-center justify-center size-9 rounded-xl hover:bg-muted transition-colors">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge
                    className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-white text-[10px] font-bold border-2 border-white"
                    style={{ background: "#E40058" }}
                  >
                    {totalItems}
                  </Badge>
                )}
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md p-0">
                <CartDrawer onClose={() => setCartOpen(false)} />
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:block border-t border-border/40">
          <div className="container mx-auto flex items-center px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2.5 text-sm font-semibold text-foreground/70 hover:text-[#5C94FC] hover:bg-[#5C94FC]/6 rounded-none transition-all border-b-2 border-transparent hover:border-[#5C94FC]"
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-auto">
              <a
                href="https://wa.me/50672526740"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white transition-all hover:opacity-90"
                style={{ background: "#00A800" }}
              >
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
