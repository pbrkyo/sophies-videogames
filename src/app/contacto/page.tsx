"use client";

import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Mail,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

export default function ContactoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Contacto</h1>
        <p className="text-muted-foreground mb-8">
          Estamos aquí para ayudarte. Contáctanos por el medio que prefieras.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-4">
            {/* WhatsApp CTA */}
            <Card className="border-mario-green/30 bg-mario-green/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-mario-green/20 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-mario-green" />
                  </div>
                  <div>
                    <h2 className="font-semibold">WhatsApp</h2>
                    <p className="text-sm text-muted-foreground">
                      Respuesta rápida
                    </p>
                  </div>
                </div>
                <p className="text-2xl font-bold mb-3">7252-6740</p>
                <a
                  href="https://wa.me/50672526740"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants(),
                    "w-full bg-mario-green hover:bg-mario-green/90"
                  )}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Enviar WhatsApp
                </a>
              </CardContent>
            </Card>

            {/* Other contacts */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-mario-blue shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Teléfono</p>
                    <a
                      href="tel:+50625918052"
                      className="text-sm text-mario-blue hover:underline"
                    >
                      +506 2591-8052
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-mario-red shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Dirección</p>
                    <p className="text-sm text-muted-foreground">
                      Avenida Central, Cartago Centro
                      <br />
                      Cartago, Costa Rica
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-mario-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Horario</p>
                    <p className="text-sm text-muted-foreground">
                      Lunes a Viernes: 9:00 AM - 5:30 PM
                      <br />
                      Sábado: 9:00 AM - 1:00 PM
                      <br />
                      Domingo: Cerrado
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <ExternalLink className="h-5 w-5 text-mario-blue shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Facebook</p>
                    <a
                      href="https://www.facebook.com/sophiesvideogames"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-mario-blue hover:underline"
                    >
                      @sophiesvideogames
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map + Form */}
          <div className="space-y-6">
            {/* Google Maps embed */}
            <Card className="overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.5!2d-83.9196!3d9.8647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCartago+Centro!5e0!3m2!1ses!2scr!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Sophie's Videogames en Cartago"
                />
              </div>
            </Card>

            {/* Quick contact form */}
            <Card>
              <CardContent className="p-6">
                <h2 className="font-semibold text-lg mb-4">
                  Enviar Mensaje
                </h2>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">
                      Nombre
                    </label>
                    <Input placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">
                      Teléfono o Email
                    </label>
                    <Input placeholder="+506 8888-8888 o tu@email.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">
                      Mensaje
                    </label>
                    <textarea
                      className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>
                  <Button
                    type="button"
                    className="w-full bg-mario-blue hover:bg-mario-blue/90"
                    onClick={() => {
                      window.open(
                        "https://wa.me/50672526740?text=Hola! Quiero hacer una consulta.",
                        "_blank"
                      );
                    }}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Enviar por WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
