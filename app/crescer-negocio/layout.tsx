import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cresça seu Negócio de Rastreamento",
  description:
    "Conquiste +100 novos clientes. Cresça, fidelize e lucre com as soluções do Grupo Conor para expandir seu negócio no setor de rastreamento veicular.",
  alternates: { canonical: "/crescer-negocio" },
  openGraph: {
    title: "Cresça seu Negócio de Rastreamento | Grupo Conor",
    description:
      "Conquiste +100 novos clientes. Cresça, fidelize e lucre com as soluções do Grupo Conor para expandir seu negócio no setor de rastreamento veicular.",
    url: "https://www.grupoconor.com.br/crescer-negocio",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
