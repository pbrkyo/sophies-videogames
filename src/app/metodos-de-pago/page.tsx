import {
  Smartphone,
  CreditCard,
  Landmark,
  Banknote,
  Shield,
  Clock,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Métodos de Pago",
  description:
    "Aceptamos SINPE Móvil, tarjetas de crédito y débito, transferencia bancaria y efectivo en Sophie's Videogames, Cartago.",
};

const paymentMethods = [
  {
    icon: Smartphone,
    name: "SINPE Móvil",
    color: "mario-green",
    description:
      "Paga de forma instantánea desde tu teléfono. Solo necesitas nuestro número registrado.",
    details: [
      "Número: 7252-6740",
      "Pago instantáneo",
      "Sin comisiones para el cliente",
      "Enviar comprobante por WhatsApp",
    ],
  },
  {
    icon: CreditCard,
    name: "Tarjetas de Crédito / Débito",
    color: "mario-blue",
    description:
      "Aceptamos las principales tarjetas a través de nuestro sistema de pago seguro.",
    details: [
      "Visa, Mastercard, American Express",
      "Procesado por ONVO Pay",
      "Transacción segura PCI DSS",
      "Disponible en tienda y en línea",
    ],
  },
  {
    icon: Landmark,
    name: "Transferencia Bancaria",
    color: "mario-gold",
    description:
      "Realiza una transferencia directa a nuestras cuentas bancarias.",
    details: [
      "Banco Nacional y BAC",
      "Colones y dólares",
      "Enviar comprobante por WhatsApp",
      "Confirmación en 24 horas",
    ],
  },
  {
    icon: Banknote,
    name: "Efectivo",
    color: "mario-red",
    description: "Paga en efectivo directamente en nuestra tienda física.",
    details: [
      "Disponible en tienda",
      "Colones costarricenses",
      "Cartago Centro",
      "Lun-Vie 9AM-5:30PM, Sáb 9AM-1PM",
    ],
  },
];

export default function MetodosDePagoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Métodos de Pago</h1>
        <p className="text-muted-foreground mb-8">
          En Sophie&apos;s Videogames te ofrecemos múltiples formas de pago para
          tu comodidad.
        </p>

        <div className="space-y-6">
          {paymentMethods.map((method) => (
            <Card key={method.name} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-${method.color}/10 flex items-center justify-center shrink-0`}
                  >
                    <method.icon
                      className={`h-6 w-6 text-${method.color}`}
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">{method.name}</h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      {method.description}
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {method.details.map((detail) => (
                        <li
                          key={detail}
                          className="text-sm flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-mario-blue shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 rounded-xl bg-secondary/50 p-5">
            <Shield className="h-8 w-8 text-mario-blue shrink-0" />
            <div>
              <h3 className="font-semibold text-sm">Pagos Seguros</h3>
              <p className="text-xs text-muted-foreground">
                Todas las transacciones están protegidas
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-secondary/50 p-5">
            <Clock className="h-8 w-8 text-mario-gold shrink-0" />
            <div>
              <h3 className="font-semibold text-sm">Confirmación Rápida</h3>
              <p className="text-xs text-muted-foreground">
                Tu pedido se confirma en minutos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
