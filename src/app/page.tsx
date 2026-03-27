import { HeroBanner } from "@/components/home/hero-banner";
import { CategoryGrid } from "@/components/home/category-grid";
import { FeaturedProducts } from "@/components/home/featured-products";
import { PromoBanner } from "@/components/home/promo-banner";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <CategoryGrid />
      <FeaturedProducts />
      <PromoBanner />
    </>
  );
}
