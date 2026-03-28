import Link from "next/link";
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  CreditCard,
  Smartphone,
  Landmark,
  Gamepad2,
  ExternalLink,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const shopLinks = [
  { href: "/productos", label: "Todos los Productos" },
  { href: "/categorias/consolas", label: "Consolas" },
  { href: "/categorias/videojuegos", label: "Videojuegos" },
  { href: "/categorias/accesorios", label: "Accesorios" },
  { href: "/categorias/retro", label: "Retro & Usado" },
  { href: "/categorias/coleccionables", label: "Coleccionables" },
];

export function Footer() {
  return (
    <footer style={{ background: "#0F0F1A" }} className="text-white mt-auto">
      {/* Top accent line */}
      <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #2038EC, #5C94FC, #F8B800, #E40058, #7038F8)" }} />

      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"
                style={{ background: "linear-gradient(135deg, #5C94FC, #2038EC)" }}
              >
                <Gamepad2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-extrabold text-lg leading-tight">Sophie&apos;s</p>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-white/50">Videogames</p>
              </div>
            </Link>
            <p className="text-sm text-white/55 leading-relaxed">
              Tienda especializada en videojuegos con más de 15 años de ofrecer
              calidad y respaldo en Cartago, Costa Rica.
            </p>
            <a
              href="https://www.facebook.com/sophiesvideogames"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-white/55 hover:text-[#5C94FC] transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Síguenos en Facebook
            </a>
          </div>

          {/* Store links */}
          <div>
            <h4 className="font-extrabold text-sm mb-5 uppercase tracking-wider" style={{ color: "#F8B800" }}>
              Tienda
            </h4>
            <nav className="flex flex-col gap-2.5">
              {shopLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/55 hover:text-white transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-extrabold text-sm mb-5 uppercase tracking-wider" style={{ color: "#F8B800" }}>
              Contacto
            </h4>
            <div className="flex flex-col gap-4 text-sm text-white/55">
              <a
                href="tel:+50625918052"
                className="flex items-center gap-2.5 hover:text-white transition-colors font-medium"
              >
                <Phone className="h-4 w-4 shrink-0" style={{ color: "#5C94FC" }} />
                +506 2591-8052
              </a>
              <a
                href="https://wa.me/50672526740"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors font-medium"
              >
                <MessageCircle className="h-4 w-4 shrink-0" style={{ color: "#00A800" }} />
                WhatsApp: 7252-6740
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" style={{ color: "#E40058" }} />
                <span>
                  Avenida Central, Cartago Centro,
                  <br />
                  Cartago, Costa Rica
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 shrink-0 mt-0.5" style={{ color: "#F8B800" }} />
                <span>
                  Lun – Vie: 9:00 AM – 5:30 PM
                  <br />
                  Sáb: 9:00 AM – 1:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Payment */}
          <div>
            <h4 className="font-extrabold text-sm mb-5 uppercase tracking-wider" style={{ color: "#F8B800" }}>
              Métodos de Pago
            </h4>
            <div className="flex flex-col gap-3 text-sm text-white/55">
              <div className="flex items-center gap-2.5 font-medium">
                <Smartphone className="h-4 w-4 shrink-0" style={{ color: "#00A800" }} />
                SINPE Móvil
              </div>
              <div className="flex items-center gap-2.5 font-medium">
                <CreditCard className="h-4 w-4 shrink-0" style={{ color: "#5C94FC" }} />
                Visa / Mastercard / Amex
              </div>
              <div className="flex items-center gap-2.5 font-medium">
                <Landmark className="h-4 w-4 shrink-0" style={{ color: "#7038F8" }} />
                Transferencia Bancaria
              </div>
            </div>
            <Link
              href="/metodos-de-pago"
              className="inline-block mt-4 text-xs font-semibold hover:underline underline-offset-4"
              style={{ color: "#5C94FC" }}
            >
              Ver todos los métodos de pago →
            </Link>

            {/* Emma / BAC logos placeholder */}
            <div className="flex items-center gap-3 mt-5 flex-wrap">
              <span className="text-xs text-white/30 font-medium">Financiamiento:</span>
              <span className="text-xs font-bold text-white/40 border border-white/10 px-2 py-0.5 rounded-md">emma</span>
              <span className="text-xs font-bold text-white/40 border border-white/10 px-2 py-0.5 rounded-md">BAC</span>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/35 font-medium">
          <p>
            &copy; {new Date().getFullYear()} Sophie&apos;s Videogames. Todos los derechos reservados.
          </p>
          <div className="flex gap-5">
            <Link href="/nosotros" className="hover:text-white transition-colors">Nosotros</Link>
            <Link href="/metodos-de-pago" className="hover:text-white transition-colors">Pagos</Link>
            <Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
