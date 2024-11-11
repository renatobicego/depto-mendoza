import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Header from "./components/Header";
import { Sofia_Sans } from "next/font/google";

const sofia = Sofia_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Departamento Turistas - Mendoza",
  description:
    "Cálido y agradable departamento atendido por su propia dueña. Ubicado en Godoy Cruz, Mendoza. Favorito entre los huéspedes de Airbnb.",
  keywords: [
    "departamento",
    "mendoza",
    "airbnb",
    "alquiler",
    "turista",
    "godoy cruz",
    "argentina",
    "booking",
    "casa",
    "garage",
    "bodega",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Departamento Turistas - Mendoza",
    url: "https://alquilerdeptomendoza.com.ar/",
    siteName: "Departamento Turistas - Mendoza",
    locale: "es_ES",
    type: "website",
    description:
      "Cálido y agradable departamento atendido por su propia dueña. Ubicado en Godoy Cruz, Mendoza. Favorito entre los huéspedes de Airbnb.",
    images: "https://alquilerdeptomendoza.com.ar/thumbnail.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Departamento Turistas - Mendoza",
    description:
      "Cálido y agradable departamento atendido por su propia dueña. Ubicado en Godoy Cruz, Mendoza. Favorito entre los huéspedes de Airbnb.",
    images: ["https://alquilerdeptomendoza.com.ar/thumbnail.jpg"], // Must be an absolute URL
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://alquilerdeptomendoza.com.ar/",
    url: "https://alquilerdeptomendoza.com.ar/",
    name: "Departamento Turistas - Mendoza",
    image: [
      "https://alquilerdeptomendoza.com.ar/thumbnail.jpg",
    ],
    description:
      "Cálido y agradable departamento atendido por su propia dueña. Ubicado en Godoy Cruz, Mendoza. Favorito entre los huéspedes de Airbnb.",
  };
  return (
    <html lang="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <body
        className={`${sofia.className} antialiased overflow-x-hidden bg-background w-screen text-foreground`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
