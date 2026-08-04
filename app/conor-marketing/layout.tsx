import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conor Marketing: Leads e Tráfego Pago",
  description:
    "Ferramentas de captura de leads, marketing, tráfego pago e consultoria 360° para sua central de rastreamento crescer de forma previsível com o Grupo Conor.",
  alternates: { canonical: "/conor-marketing" },
  openGraph: {
    title: "Conor Marketing: Leads e Tráfego Pago | Grupo Conor",
    description:
      "Ferramentas de captura de leads, marketing, tráfego pago e consultoria 360° para sua central de rastreamento crescer de forma previsível com o Grupo Conor.",
    url: "https://www.grupoconor.com.br/conor-marketing",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
