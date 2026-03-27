import Link from "next/link";
import { ArrowRight, Gamepad2, Sparkles } from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-mario-dark via-mario-dark to-mario-blue/30">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-4 w-4 text-mario-gold" />
            <span className="text-sm text-mario-gold font-medium">
              +15 años en Cartago, Costa Rica
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Tu mundo
            <span className="text-mario-gold"> gamer </span>
            comienza aquí
          </h2>

          <p className="mt-4 text-lg text-white/70 max-w-lg">
            Consolas, videojuegos, accesorios y mucho más. Encuentra todo lo que
            necesitas en Sophie&apos;s Videogames.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <Link
              href="/productos"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-mario-red hover:bg-mario-red/90 text-white"
              )}
            >
              <Gamepad2 className="h-5 w-5 mr-2" />
              Ver Productos
            </Link>
            <Link
              href="/categorias/consolas"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/20 text-white hover:bg-white/10"
              )}
            >
              Consolas
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 mt-10 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-mario-green" />
              Tienda Física
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-mario-gold" />
              SINPE Móvil
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-mario-blue" />
              Garantía
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
