import { MessageCircle, Smartphone, Shield } from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

export function PromoBanner() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl bg-gradient-to-r from-mario-green/10 to-mario-green/5 border border-mario-green/20 p-8 md:p-12 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-mario-green/20 flex items-center justify-center shrink-0">
              <MessageCircle className="h-8 w-8 text-mario-green" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-xl font-bold">
                ¿Buscas algo específico?
              </h3>
              <p className="text-muted-foreground mt-1">
                Escríbenos por WhatsApp y te ayudamos a encontrar lo que
                necesitas. Respuesta rápida garantizada.
              </p>
            </div>
            <a
              href="https://wa.me/50672526740"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-mario-green hover:bg-mario-green/90 text-white shrink-0"
              )}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-4 rounded-xl border border-border/50 p-5">
            <div className="w-12 h-12 rounded-lg bg-mario-blue/10 flex items-center justify-center shrink-0">
              <Smartphone className="h-5 w-5 text-mario-blue" />
            </div>
            <div>
              <h4 className="font-semibold text-sm">Pago con SINPE Móvil</h4>
              <p className="text-xs text-muted-foreground">
                Paga fácil y rápido
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-xl border border-border/50 p-5">
            <div className="w-12 h-12 rounded-lg bg-mario-gold/10 flex items-center justify-center shrink-0">
              <Shield className="h-5 w-5 text-mario-gold" />
            </div>
            <div>
              <h4 className="font-semibold text-sm">Garantía en Productos</h4>
              <p className="text-xs text-muted-foreground">
                Respaldo de más de 15 años
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-xl border border-border/50 p-5">
            <div className="w-12 h-12 rounded-lg bg-mario-red/10 flex items-center justify-center shrink-0">
              <MessageCircle className="h-5 w-5 text-mario-red" />
            </div>
            <div>
              <h4 className="font-semibold text-sm">Atención Personalizada</h4>
              <p className="text-xs text-muted-foreground">
                Te asesoramos en tu compra
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
