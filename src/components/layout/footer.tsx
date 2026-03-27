import Link from "next/link";
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  CreditCard,
  Smartphone,
  Landmark,
  ExternalLink,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-mario-dark text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-mario-red flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Sophie&apos;s</h3>
                <p className="text-[10px] uppercase tracking-widest text-white/60">
                  Videogames
                </p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Tienda especializada en videojuegos con más de 15 años de ofrecer
              calidad y respaldo en Cartago, Costa Rica.
            </p>
            <a
              href="https://www.facebook.com/sophiesvideogames"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-white/70 hover:text-mario-blue transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Síguenos en Facebook
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-mario-gold">Tienda</h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/productos"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Todos los Productos
              </Link>
              <Link
                href="/categorias/consolas"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Consolas
              </Link>
              <Link
                href="/categorias/videojuegos"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Videojuegos
              </Link>
              <Link
                href="/categorias/accesorios"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Accesorios
              </Link>
              <Link
                href="/categorias/retro"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Retro & Usado
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-mario-gold">Contacto</h4>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <a
                href="tel:+50625918052"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0" />
                +506 2591-8052
              </a>
              <a
                href="https://wa.me/50672526740"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-mario-green transition-colors"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                WhatsApp: 7252-6740
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>
                  Avenida Central, Cartago Centro,
                  <br />
                  Cartago, Costa Rica
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 shrink-0 mt-0.5" />
                <span>
                  Lun - Vie: 9:00 AM - 5:30 PM
                  <br />
                  Sáb: 9:00 AM - 1:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Payment methods */}
          <div>
            <h4 className="font-semibold mb-4 text-mario-gold">
              Métodos de Pago
            </h4>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Smartphone className="h-4 w-4 shrink-0" />
                SINPE Móvil
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 shrink-0" />
                Visa / Mastercard / Amex
              </div>
              <div className="flex items-center gap-2">
                <Landmark className="h-4 w-4 shrink-0" />
                Transferencia Bancaria
              </div>
            </div>
            <Link
              href="/metodos-de-pago"
              className="inline-block mt-3 text-xs text-mario-blue hover:underline"
            >
              Ver todos los métodos de pago →
            </Link>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            &copy; {new Date().getFullYear()} Sophie&apos;s Videogames. Todos
            los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="/nosotros" className="hover:text-white transition-colors">
              Nosotros
            </Link>
            <Link
              href="/metodos-de-pago"
              className="hover:text-white transition-colors"
            >
              Métodos de Pago
            </Link>
            <Link href="/contacto" className="hover:text-white transition-colors">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
