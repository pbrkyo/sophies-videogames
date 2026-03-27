import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a Sophie's Videogames en Cartago, Costa Rica. WhatsApp: 7252-6740 | Teléfono: 2591-8052.",
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
