import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://alquilerdeptomendoza.com.ar",
      lastModified: new Date(2024, 11, 11),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://alquilerdeptomendoza.com.ar/#servicios",
      lastModified: new Date(2024, 11, 11),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://alquilerdeptomendoza.com.ar/#contacto",
      lastModified: new Date(2024, 11, 11),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://alquilerdeptomendoza.com.ar/#ubicacion",
      lastModified: new Date(2024, 11, 11),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://alquilerdeptomendoza.com.ar/#nosotros",
      lastModified: new Date(2024, 11, 11),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
