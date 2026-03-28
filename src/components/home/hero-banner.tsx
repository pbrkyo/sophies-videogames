import Link from "next/link";
import { ArrowRight, Gamepad2 } from "lucide-react";

const stats = [
  { value: "+15", label: "Años de experiencia" },
  { value: "500+", label: "Productos disponibles" },
  { value: "4.9★", label: "Calificación clientes" },
];

const highlights = [
  { icon: "🎮", text: "Consolas nuevas y usadas" },
  { icon: "💳", text: "SINPE · Tarjeta · Efectivo" },
  { icon: "🛡️", text: "Garantía en todos los productos" },
  { icon: "📦", text: "Retiro en tienda, Cartago" },
];

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0F0F1A 0%, #1a1a3e 45%, #2038EC 100%)" }}>
      {/* Subtle mesh gradient overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #5C94FC22 0%, transparent 50%), radial-gradient(circle at 80% 20%, #7038F844 0%, transparent 40%)",
        }}
      />

      {/* Decorative floating orbs */}
      <div className="absolute top-16 right-16 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ background: "#5C94FC" }} />
      <div className="absolute bottom-8 right-1/3 w-48 h-48 rounded-full opacity-8 blur-2xl" style={{ background: "#F8B800" }} />

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column — copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold mb-6 border border-white/20 bg-white/10 text-white backdrop-blur-sm">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F8B800] badge-pulse" />
              Tienda física • Cartago, Costa Rica
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
              Tu universo
              <br />
              <span
                className="inline-block"
                style={{
                  background: "linear-gradient(90deg, #F8B800, #FCBC00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                gamer
              </span>{" "}
              <span className="text-white/90">en un</span>
              <br />
              solo lugar
            </h1>

            <p className="mt-5 text-base md:text-lg text-white/65 max-w-md leading-relaxed">
              Consolas, videojuegos, accesorios y coleccionables. Más de 15 años
              siendo la tienda de confianza en Cartago.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="/productos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-black transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-lg shadow-[#F8B800]/30"
                style={{ background: "linear-gradient(135deg, #F8B800, #FCBC00)" }}
              >
                <Gamepad2 className="h-4 w-4" />
                Ver Productos
              </Link>
              <Link
                href="/categorias/consolas"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white border border-white/25 hover:bg-white/10 transition-all hover:-translate-y-0.5 backdrop-blur-sm"
              >
                Consolas
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-extrabold text-white">{s.value}</p>
                  <p className="text-xs text-white/50 mt-0.5 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — highlight grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div
                key={h.text}
                className="rounded-2xl p-5 border border-white/10 bg-white/6 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="text-3xl mb-3">{h.icon}</div>
                <p className="text-sm font-semibold text-white/85 leading-snug">{h.text}</p>
              </div>
            ))}
            {/* WhatsApp CTA card */}
            <div
              className="col-span-2 rounded-2xl p-5 border border-[#00A800]/40 flex items-center gap-4"
              style={{ background: "rgba(0, 168, 0, 0.12)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-xl"
                style={{ background: "#00A800" }}
              >
                💬
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-white text-sm">¿Buscas algo específico?</p>
                <p className="text-xs text-white/55 mt-0.5">Escríbenos — respuesta rápida</p>
              </div>
              <a
                href="https://wa.me/50672526740"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2 rounded-xl text-xs font-bold text-white transition-all hover:opacity-90"
                style={{ background: "#00A800" }}
              >
                Escribir
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="relative h-10 overflow-hidden" style={{ marginTop: "-1px" }}>
        <svg viewBox="0 0 1440 40" className="absolute bottom-0 w-full" preserveAspectRatio="none" style={{ height: "40px" }}>
          <path
            d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z"
            fill="rgb(250,250,250)"
          />
        </svg>
      </div>
    </section>
  );
}
