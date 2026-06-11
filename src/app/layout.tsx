import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "La Burguesita — Hamburguesas Gourmet en Málaga desde 2010",
  description:
    "La pionera de las hamburguesas gourmet en Málaga. Carne 100% vaca nacional, smash burgers y signature burgers en Centro y Cerrado de Calderón.",
  keywords: [
    "hamburguesas gourmet Málaga",
    "La Burguesita",
    "smash burger Málaga",
    "restaurante Málaga",
    "hamburguesería premium",
  ],
  authors: [{ name: "La Burguesita" }],
  openGraph: {
    title: "La Burguesita — Hamburguesas Gourmet en Málaga",
    description:
      "La pionera de las hamburguesas gourmet en Málaga desde 2010",
    locale: "es_ES",
    type: "website",
    siteName: "La Burguesita",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Burguesita — Hamburguesas Gourmet en Málaga",
    description:
      "La pionera de las hamburguesas gourmet en Málaga desde 2010",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "La Burguesita",
  description:
    "La pionera de las hamburguesas gourmet en Málaga desde 2010. Carne 100% vaca nacional.",
  foundingDate: "2010",
  servesCuisine: ["Hamburguesas gourmet", "Smash burgers", "Cocina española"],
  priceRange: "€€",
  image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=1200&q=80",
  url: "https://ld1878.github.io/laburguesita/",
  sameAs: ["https://www.instagram.com/laburguesitamalaga/"],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Calle Moreno Monroy, 5",
      addressLocality: "Málaga",
      addressCountry: "ES",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Paseo Cerrado de Calderón, 14",
      addressLocality: "Málaga",
      addressCountry: "ES",
    },
  ],
  telephone: ["+34951333374", "+34951532004"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "13:30",
      closes: "16:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "20:00",
      closes: "23:30",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}