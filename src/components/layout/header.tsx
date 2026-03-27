"use client";

import Link from "next/link";
import { ShoppingCart, Search, Menu, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCartStore } from "@/lib/cart-store";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { useState } from "react";

const navLinks = [
  { href: "/productos", label: "Productos" },
  { href: "/categorias/consolas", label: "Consolas" },
  { href: "/categorias/videojuegos", label: "Videojuegos" },
  { href: "/categorias/accesorios", label: "Accesorios" },
  { href: "/categorias/retro", label: "Retro" },
  { href: "/metodos-de-pago", label: "Pagos" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const totalItems = useCartStore((s) => s.totalItems());
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-mario-dark text-white text-xs">
        <div className="container mx-auto flex items-center justify-between px-4 py-1.5">
          <div className="flex items-center gap-4">
            <a
              href="tel:+50625918052"
              className="flex items-center gap-1 hover:text-mario-gold transition-colors"
            >
              <Phone className="h-3 w-3" />
              2591-8052
            </a>
            <a
              href="https://wa.me/50672526740"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-mario-green transition-colors"
            >
              <MessageCircle className="h-3 w-3" />
              WhatsApp
            </a>
          </div>
          <p className="hidden sm:block">
            Lun-Vie 9:00 AM - 5:30 PM | Sáb 9:00 AM - 1:00 PM
          </p>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger className="lg:hidden inline-flex items-center justify-center size-8 rounded-lg hover:bg-muted transition-colors">
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <nav className="flex flex-col gap-1 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 rounded-lg hover:bg-secondary text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-lg bg-mario-red flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold leading-tight tracking-tight text-mario-dark">
                Sophie&apos;s
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground -mt-0.5">
                Videogames
              </p>
            </div>
          </Link>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-lg">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar consolas, juegos, accesorios..."
                className="pl-9 bg-secondary/50 border-0 focus-visible:ring-mario-blue"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Buscar"
            >
              <Search className="h-5 w-5" />
            </Button>

            <Sheet open={cartOpen} onOpenChange={setCartOpen}>
              <SheetTrigger className="relative inline-flex items-center justify-center size-8 rounded-lg hover:bg-muted transition-colors">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-mario-red text-white text-[10px] border-2 border-white">
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
        <nav className="hidden lg:block border-t border-border/50">
          <div className="container mx-auto flex items-center gap-1 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-mario-blue hover:bg-mario-blue/5 rounded-t-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
