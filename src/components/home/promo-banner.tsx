import { MessageCircle, Smartphone, Shield, Clock } from "lucide-react";

const trustItems = [
  {
    icon: <Smartphone className="h-5 w-5" style={{ color: "#5C94FC" }} />,
    bg: "rgba(92,148,252,0.1)",
    title: "Pago con SINPE Móvil",
    desc: "Rápido, seguro y sin comisiones",
  },
  {
    icon: <Shield className="h-5 w-5" style={{ color: "#F8B800" }} />,
    bg: "rgba(248,184,0,0.12)",
    title: "Garantía en Productos",
    desc: "Respaldo de más de 15 años",
  },
  {
    icon: <Clock className="h-5 w-5" style={{ color: "#7038F8" }} />,
    bg: "rgba(112,56,248,0.1)",
    title: "Atención Rápida",
    desc: "Respondemos el mismo día",
  },
];

export function PromoBanner() {
  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="container mx-auto px-4 space-y-6">
        {/* WhatsApp CTA block */}
        <div
          className="relative overflow-hidden rounded-3xl p-8 md:p-12"
          style={{ background: "linear-gradient(135deg, #006800, #00A800, #43D043)" }}
        >
          {/* Decorative circles */}
          <div className="absolute right-0 top-0 w-64 h-64 rounded-full opacity-10 translate-x-20 -translate-y-20" style={{ background: "white" }} />
          <div className="absolute left-1/3 bottom-0 w-48 h-48 rounded-full opacity-8 translate-y-16" style={{ background: "white" }} />

          <div className="relative flex flex-col md:flex-row items-center gap-8">
            <div className="text-5xl">💬</div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                ¿Buscas algo específico?
              </h3>
              <p className="text-white/80 mt-2 text-base font-medium">
                Escríbenos por WhatsApp y te ayudamos a encontrar exactamente lo
                que necesitas. Respuesta garantizada.
              </p>
            </div>
            <a
              href="https://wa.me/50672526740"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-2.5 px-7 py-4 rounded-2xl font-extrabold text-sm text-[#006800] bg-white transition-all hover:-translate-y-0.5 hover:shadow-xl shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              Escribir por WhatsApp
            </a>
          </div>
        </div>

        {/* Trust items */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 rounded-2xl border border-border/60 bg-white p-5 hover:border-[#5C94FC]/30 hover:shadow-md transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: item.bg }}
              >
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-sm">{item.title}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
