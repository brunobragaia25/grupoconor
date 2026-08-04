import type { MetadataRoute } from "next";

const siteUrl = "https://www.grupoconor.com.br";

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/quem-somos", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/cases", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/administrar", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/expandir", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/fidelizar", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/montar", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/rastrear", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/comecar-negocio", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/crescer-negocio", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/montar-combo", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/conor-4em1", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/conor-admin", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/conor-assist", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/conor-estoque", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/conor-marketing", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/conor-seguro", priority: 0.8, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
