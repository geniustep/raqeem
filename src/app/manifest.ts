import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "رقيم | Raqeem",
    short_name: "Raqeem",
    description: "منصة رقمية متكاملة لإدارة المؤسسات التعليمية",
    start_url: "/ar",
    display: "standalone",
    background_color: "#F8F6EF",
    theme_color: "#2D395F",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
