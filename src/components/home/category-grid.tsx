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

export function CategoryGrid() {
  const categories = getCategories();

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Categorías</h2>
            <p className="text-muted-foreground mt-1">
              Encuentra lo que buscas
            </p>
          </div>
          <Link
            href="/productos"
            className="text-sm text-mario-blue hover:underline"
          >
            Ver todo →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = iconMap[category.icon] || Gamepad2;
            return (
              <Link
                key={category.slug}
                href={`/categorias/${category.slug}`}
                className="group flex flex-col items-center p-6 rounded-xl border border-border/50 bg-card hover:border-mario-blue/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-mario-blue/10 group-hover:bg-mario-blue/20 flex items-center justify-center mb-3 transition-colors">
                  <Icon className="h-6 w-6 text-mario-blue" />
                </div>
                <h3 className="text-sm font-semibold text-center">
                  {category.name}
                </h3>
                <p className="text-[11px] text-muted-foreground text-center mt-1 line-clamp-2">
                  {category.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
