import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conor 4 em 1: Plataforma de Rastreamento",
  description:
    "Rastreamento em tempo real via satélite, telemetria avançada, recuperação veicular e associação, com suporte humanizado para sua central de monitoramento.",
  alternates: { canonical: "/conor-4em1" },
  openGraph: {
    title: "Conor 4 em 1: Plataforma de Rastreamento | Grupo Conor",
    description:
      "Rastreamento em tempo real via satélite, telemetria avançada, recuperação veicular e associação, com suporte humanizado para sua central de monitoramento.",
    url: "https://www.grupoconor.com.br/conor-4em1",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
