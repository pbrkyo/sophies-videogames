import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://sophiesvideogames.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Sophie's Videogames — Tienda de Videojuegos en Cartago",
    template: "%s | Sophie's Videogames",
  },
  description:
    "Tienda especializada en videojuegos con más de 15 años en Cartago, Costa Rica. Consolas, juegos, accesorios, retro y más. SINPE Móvil, tarjetas y efectivo.",
  keywords: [
    "videojuegos",
    "consolas",
    "PlayStation",
    "Nintendo Switch",
    "Xbox",
    "Cartago",
    "Costa Rica",
    "tienda videojuegos",
    "Sophie's Videogames",
    "SINPE Móvil",
    "accesorios gaming",
  ],
  authors: [{ name: "Sophie's Videogames" }],
  creator: "Sophie's Videogames",
  publisher: "Sophie's Videogames",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "es_CR",
    url: siteUrl,
    siteName: "Sophie's Videogames",
    title: "Sophie's Videogames — Tienda de Videojuegos en Cartago",
    description:
      "Consolas, videojuegos, accesorios y más. Más de 15 años en Cartago, Costa Rica.",
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Sophie's Videogames - Tienda en Cartago, Costa Rica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sophie's Videogames — Tienda de Videojuegos en Cartago",
    description:
      "Consolas, videojuegos, accesorios y más. Más de 15 años en Cartago, Costa Rica.",
    images: [`${siteUrl}/images/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sophie's Videogames",
  description:
    "Tienda especializada en videojuegos con más de 15 años de ofrecer calidad y respaldo en Cartago, Costa Rica.",
  url: siteUrl,
  telephone: "+50625918052",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenida Central, Cartago Centro",
    addressLocality: "Cartago",
    addressRegion: "Cartago",
    addressCountry: "CR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "9.8647",
    longitude: "-83.9196",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  paymentAccepted: "Cash, Credit Card, Debit Card, SINPE Movil, Bank Transfer",
  currenciesAccepted: "CRC",
  sameAs: ["https://www.facebook.com/sophiesvideogames"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <TooltipProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
