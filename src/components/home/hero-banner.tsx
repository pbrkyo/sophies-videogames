"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Gamepad2, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

const heroSlides = [
  {
    image: "/images/hero/summer-beach-scene.jpg",
    title: "Tu universo gamer",
    subtitle: "en un solo lugar",
    description: "Consolas, videojuegos, accesorios y coleccionables en Cartago.",
  },
  {
    image: "/images/hero/crimson-desert-fatalframe.jpg",
    title: "Los mejores títulos",
    subtitle: "recién llegados",
    description: "Crimson Desert, Fatal Frame II Crimson Butterfly Remake y más. Siempre los últimos lanzamientos.",
  },
];

const stats = [
  { value: "+15", label: "Años de experiencia" },
  { value: "500+", label: "Productos disponibles" },
  { value: "4.9★", label: "Calificación clientes" },
];

export function HeroBanner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section className="relative overflow-hidden">
      {/* Carousel viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {heroSlides.map((slide, i) => (
            <div
              key={i}
              className="relative flex-[0_0_100%] min-w-0"
            >
              {/* Background — image with dark overlay, fallback gradient */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, #0F0F1A 0%, #1a1a3e 45%, #2038EC 100%)" }}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={i === 0}
                  className="object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                {/* Gradient overlay on top of the image */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15,15,26,0.88) 0%, rgba(32,56,236,0.60) 60%, rgba(15,15,26,0.75) 100%)" }} />
              </div>

              {/* Slide content */}
              <div className="relative container mx-auto px-4 py-12 md:py-20 lg:py-32">
                <div className="max-w-2xl">
                  {/* Logo badge */}
                  <div className="inline-flex items-center gap-3 mb-4 md:mb-6">
                    <div
                      className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-lg"
                      style={{ background: "linear-gradient(135deg, #F8B800, #FCBC00)" }}
                    >
                      <Gamepad2 className="h-5 w-5 md:h-6 md:w-6 text-black" />
                    </div>
                    <div>
                      <p className="font-extrabold text-white text-base md:text-lg leading-tight">Sophie&apos;s Videogames</p>
                      <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest" style={{ color: "#F8B800" }}>
                        15 Aniversario · Cartago, Costa Rica
                      </p>
                    </div>
                  </div>

                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
                    {slide.title}
                    <br />
                    <span
                      style={{
                        background: "linear-gradient(90deg, #F8B800, #FCBC00)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {slide.subtitle}
                    </span>
                  </h1>

                  <p className="mt-3 md:mt-4 text-sm md:text-lg text-white/65 max-w-md leading-relaxed">
                    {slide.description}
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3 mt-6 md:mt-8">
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
                  <div className="flex flex-wrap gap-6 md:gap-8 mt-8 md:mt-10 pt-6 md:pt-8 border-t border-white/10">
                    {stats.map((s) => (
                      <div key={s.label}>
                        <p className="text-2xl font-extrabold text-white">{s.value}</p>
                        <p className="text-xs text-white/50 mt-0.5 font-medium">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={scrollPrev}
        aria-label="Anterior"
        className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center bg-white/15 hover:bg-white/30 backdrop-blur-sm border border-white/20 transition-all"
      >
        <ChevronLeft className="h-5 w-5 text-white" />
      </button>
      <button
        onClick={scrollNext}
        aria-label="Siguiente"
        className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center bg-white/15 hover:bg-white/30 backdrop-blur-sm border border-white/20 transition-all"
      >
        <ChevronRight className="h-5 w-5 text-white" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 p-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Ir a slide ${i + 1}`}
            className="h-3 rounded-full transition-all duration-300"
            style={{
              width: selectedIndex === i ? "24px" : "8px",
              background: selectedIndex === i ? "#F8B800" : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
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
