"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Smartphone,
  CreditCard,
  Landmark,
  MessageCircle,
  ShoppingBag,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCartStore } from "@/lib/cart-store";
import { formatCRCShort } from "@/lib/format";

export default function CheckoutPage() {
  const { items, totalPrice } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="h-10 w-10 text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-bold mb-2">No hay productos</h1>
          <p className="text-muted-foreground mb-6">
            Agrega productos a tu carrito para proceder al pago
          </p>
          <Link href="/productos" className={cn(buttonVariants({ size: "lg" }))}>
            Explorar Productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/carrito"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver al Carrito
      </Link>

      <h1 className="text-3xl font-bold mb-8">Finalizar Compra</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout form */}
        <div className="lg:col-span-2">
          {/* Contact info */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">
                Información de Contacto
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Nombre
                  </label>
                  <Input placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Apellido
                  </label>
                  <Input placeholder="Tu apellido" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Teléfono
                  </label>
                  <Input placeholder="+506 8888-8888" type="tel" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Email
                  </label>
                  <Input placeholder="tu@email.com" type="email" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment method */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">Método de Pago</h2>

              <Tabs defaultValue="sinpe" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger
                    value="sinpe"
                    className="flex items-center gap-1.5"
                  >
                    <Smartphone className="h-4 w-4" />
                    <span className="hidden sm:inline">SINPE Móvil</span>
                    <span className="sm:hidden">SINPE</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="card"
                    className="flex items-center gap-1.5"
                  >
                    <CreditCard className="h-4 w-4" />
                    <span className="hidden sm:inline">Tarjeta</span>
                    <span className="sm:hidden">Tarjeta</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="transfer"
                    className="flex items-center gap-1.5"
                  >
                    <Landmark className="h-4 w-4" />
                    <span className="hidden sm:inline">Transferencia</span>
                    <span className="sm:hidden">Transfer</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="sinpe">
                  <div className="rounded-xl bg-mario-green/5 border border-mario-green/20 p-6">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Smartphone className="h-5 w-5 text-mario-green" />
                      SINPE Móvil
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Realiza tu pago al siguiente número:
                    </p>
                    <div className="bg-white rounded-lg p-4 border">
                      <p className="text-2xl font-bold text-mario-dark text-center">
                        7252-6740
                      </p>
                      <p className="text-sm text-muted-foreground text-center mt-1">
                        A nombre de Sophie&apos;s Videogames
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Monto a pagar:{" "}
                      <strong className="text-mario-blue">
                        {formatCRCShort(totalPrice())}
                      </strong>
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Envía el comprobante por WhatsApp al 7252-6740 para
                      confirmar tu pedido.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="card">
                  <div className="rounded-xl bg-mario-blue/5 border border-mario-blue/20 p-6">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-mario-blue" />
                      Pago con Tarjeta
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Procesamos pagos de forma segura con ONVO Pay. Aceptamos
                      Visa, Mastercard y American Express.
                    </p>
                    <div className="bg-white rounded-lg p-6 border text-center">
                      <p className="text-muted-foreground text-sm mb-4">
                        El pago con tarjeta será procesado a través de ONVO
                        Checkout.
                      </p>
                      <Button className="bg-mario-blue hover:bg-mario-blue/90">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Pagar {formatCRCShort(totalPrice())}
                      </Button>
                      <p className="text-xs text-muted-foreground mt-3">
                        Transacción segura con encriptación PCI DSS
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="transfer">
                  <div className="rounded-xl bg-mario-gold/5 border border-mario-gold/20 p-6">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Landmark className="h-5 w-5 text-mario-gold" />
                      Transferencia Bancaria
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Realiza una transferencia a nuestras cuentas:
                    </p>
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-4 border">
                        <p className="font-semibold text-sm">Banco Nacional</p>
                        <p className="text-sm text-muted-foreground">
                          Cuenta colones - Consultar por WhatsApp
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border">
                        <p className="font-semibold text-sm">Banco BAC</p>
                        <p className="text-sm text-muted-foreground">
                          Cuenta colones - Consultar por WhatsApp
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      Envía el comprobante por WhatsApp al 7252-6740.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* WhatsApp confirmation */}
          <div className="mt-6 rounded-xl bg-mario-green/5 border border-mario-green/20 p-6 flex items-center gap-4">
            <MessageCircle className="h-8 w-8 text-mario-green shrink-0" />
            <div>
              <h3 className="font-semibold">¿Necesitas ayuda?</h3>
              <p className="text-sm text-muted-foreground">
                Contáctanos por WhatsApp para confirmar tu pedido o resolver
                cualquier duda.
              </p>
            </div>
            <a
              href="https://wa.me/50672526740"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants(),
                "bg-mario-green hover:bg-mario-green/90 shrink-0"
              )}
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Order summary */}
        <div>
          <Card className="sticky top-32">
            <CardContent className="p-6">
              <h2 className="font-semibold text-lg mb-4">Tu Pedido</h2>

              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground truncate mr-2">
                      {item.product.name} x{item.quantity}
                    </span>
                    <span className="font-medium shrink-0">
                      {formatCRCShort(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-mario-blue">
                  {formatCRCShort(totalPrice())}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
