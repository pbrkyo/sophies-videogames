import Link from "next/link";
import { Gamepad2 } from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <div className="max-w-md mx-auto">
        <div className="w-24 h-24 rounded-2xl bg-mario-red/10 flex items-center justify-center mx-auto mb-6">
          <Gamepad2 className="h-12 w-12 text-mario-red" />
        </div>
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <h2 className="text-xl text-muted-foreground mb-6">
          ¡Game Over! Página no encontrada
        </h2>
        <p className="text-muted-foreground mb-8">
          La página que buscas no existe o fue movida. Pero no te preocupes,
          puedes volver al inicio y seguir explorando.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className={cn(buttonVariants({ size: "lg" }))}>
            Volver al Inicio
          </Link>
          <Link
            href="/productos"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" })
            )}
          >
            Ver Productos
          </Link>
        </div>
      </div>
    </div>
  );
}
