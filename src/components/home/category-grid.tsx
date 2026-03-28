import Link from "next/link";
import {
  Gamepad2,
  Disc3,
  Headphones,
  Joystick,
  CreditCard,
  Trophy,
} from "lucide-react";
import { getCategories } from "@/lib/products";

const iconMap: Record<string, React.ElementType> = {
  Gamepad2,
  Disc3,
  Headphones,
  Joystick,
  CreditCard,
  Trophy,
};

const categoryColors: Record<string, { bg: string; text: string; icon: string }> = {
  consolas:     { bg: "from-[#2038EC] to-[#5C94FC]", text: "text-white", icon: "text-white" },
  videojuegos:  { bg: "from-[#E40058] to-[#FF5288]", text: "text-white", icon: "text-white" },
  accesorios:   { bg: "from-[#7038F8] to-[#9D70FF]", text: "text-white", icon: "text-white" },
  retro:        { bg: "from-[#C84C0C] to-[#F87838]", text: "text-white", icon: "text-white" },
  tarjetas:     { bg: "from-[#00A800] to-[#43D043]", text: "text-white", icon: "text-white" },
  coleccionables: { bg: "from-[#F8B800] to-[#FCDA30]", text: "text-black", icon: "text-black" },
};

export function CategoryGrid() {
  const categories = getCategories();

  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#5C94FC] mb-1">Explorar</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Categorías</h2>
          </div>
          <Link
            href="/productos"
            className="text-sm font-semibold text-[#5C94FC] hover:underline underline-offset-4 flex items-center gap-1"
          >
            Ver todo →
          </Link>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = iconMap[category.icon] || Gamepad2;
            const colors = categoryColors[category.slug] ?? { bg: "from-[#5C94FC] to-[#2038EC]", text: "text-white", icon: "text-white" };

            return (
              <Link
                key={category.slug}
                href={`/categorias/${category.slug}`}
                className="group relative flex flex-col items-center p-6 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-90`} />
                {/* Subtle pattern overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    <Icon className={`h-6 w-6 ${colors.icon}`} />
                  </div>
                  <h3 className={`text-sm font-bold text-center ${colors.text}`}>
                    {category.name}
                  </h3>
                  <p className={`text-[11px] text-center mt-1 line-clamp-2 ${colors.text} opacity-75`}>
                    {category.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
