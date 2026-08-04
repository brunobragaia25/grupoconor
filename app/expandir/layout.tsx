import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expandir seus Negócios",
  description:
    "Ferramentas de captura de leads, marketing, tráfego pago e consultoria 360° para expandir sua base de clientes e crescer seu negócio de rastreamento.",
  alternates: { canonical: "/expandir" },
  openGraph: {
    title: "Expandir seus Negócios | Grupo Conor",
    description:
      "Ferramentas de captura de leads, marketing, tráfego pago e consultoria 360° para expandir sua base de clientes e crescer seu negócio de rastreamento.",
    url: "https://www.grupoconor.com.br/expandir",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
