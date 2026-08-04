import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comece seu Negócio de Rastreamento",
  description:
    "Comece pequeno, pense grande. Monte seu negócio de rastreamento veicular a partir de R$500 com o suporte do Grupo Conor para construir sua central.",
  alternates: { canonical: "/comecar-negocio" },
  openGraph: {
    title: "Comece seu Negócio de Rastreamento | Grupo Conor",
    description:
      "Comece pequeno, pense grande. Monte seu negócio de rastreamento veicular a partir de R$500 com o suporte do Grupo Conor para construir sua central.",
    url: "https://www.grupoconor.com.br/comecar-negocio",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
