import { MapPin, Phone, Clock, MessageCircle, Star, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Sophie's Videogames: más de 15 años como la tienda de videojuegos de confianza en Cartago, Costa Rica.",
};

export default function NosotrosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 rounded-2xl bg-mario-red flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-3xl">S</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Sophie&apos;s Videogames
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Más de 15 años llevando el mundo gamer a Cartago
          </p>
        </div>

        {/* Story */}
        <div className="prose prose-neutral max-w-none mb-12">
          <p className="text-muted-foreground leading-relaxed">
            Somos una tienda especializada en videojuegos ubicada en el corazón
            de Cartago, Costa Rica. Con más de 15 años de experiencia, nos hemos
            convertido en el destino favorito de los gamers cartagineses.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            En Sophie&apos;s Videogames encontrarás las últimas consolas de
            PlayStation, Nintendo y Xbox, así como una amplia selección de juegos
            físicos, accesorios, artículos retro y coleccionables. Nuestro
            compromiso es ofrecerte productos originales con garantía y la mejor
            atención personalizada.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Aceptamos múltiples formas de pago incluyendo SINPE Móvil, tarjetas
            de crédito y débito, transferencia bancaria y efectivo. Te invitamos
            a visitarnos o contactarnos por WhatsApp para cualquier consulta.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 text-mario-gold mx-auto mb-2" />
              <p className="text-2xl font-bold">15+</p>
              <p className="text-xs text-muted-foreground">Años de experiencia</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-mario-blue mx-auto mb-2" />
              <p className="text-2xl font-bold">1000+</p>
              <p className="text-xs text-muted-foreground">Clientes felices</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Shield className="h-8 w-8 text-mario-green mx-auto mb-2" />
              <p className="text-2xl font-bold">100%</p>
              <p className="text-xs text-muted-foreground">Productos originales</p>
            </CardContent>
          </Card>
        </div>

        {/* Info */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">
              Información de la Tienda
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-mario-red shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Ubicación</p>
                  <p className="text-sm text-muted-foreground">
                    Avenida Central, Cartago Centro
                    <br />
                    Cartago, Costa Rica
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-mario-blue shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Teléfono</p>
                  <p className="text-sm text-muted-foreground">
                    +506 2591-8052
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="h-5 w-5 text-mario-green shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">7252-6740</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-mario-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Horario</p>
                  <p className="text-sm text-muted-foreground">
                    Lun-Vie: 9:00 AM - 5:30 PM
                    <br />
                    Sáb: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="https://wa.me/50672526740"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants(),
                  "bg-mario-green hover:bg-mario-green/90"
                )}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Contáctanos por WhatsApp
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
