import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fidelizar Clientes",
  description:
    "Programas de benefícios, serviços de seguro e assistência 24h para fidelizar os clientes da sua central de rastreamento veicular. Conheça as soluções.",
  alternates: { canonical: "/fidelizar" },
  openGraph: {
    title: "Fidelizar Clientes | Grupo Conor",
    description:
      "Programas de benefícios, serviços de seguro e assistência 24h para fidelizar os clientes da sua central de rastreamento veicular. Conheça as soluções.",
    url: "https://www.grupoconor.com.br/fidelizar",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
