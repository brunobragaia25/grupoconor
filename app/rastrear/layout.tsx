import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rastrear seu Veículo",
  description:
    "Rastreamento em tempo real via satélite, telemetria avançada e suporte humanizado para sua frota. Conheça as soluções de rastreamento do Grupo Conor.",
  alternates: { canonical: "/rastrear" },
  openGraph: {
    title: "Rastrear seu Veículo | Grupo Conor",
    description:
      "Rastreamento em tempo real via satélite, telemetria avançada e suporte humanizado para sua frota. Conheça as soluções de rastreamento do Grupo Conor.",
    url: "https://www.grupoconor.com.br/rastrear",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
