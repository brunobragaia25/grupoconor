import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Administrar seu Negócio",
  description:
    "Ferramentas integradas de gestão administrativa, financeira e controle de estoque para sua central de rastreamento operar com mais eficiência e organização.",
  alternates: { canonical: "/administrar" },
  openGraph: {
    title: "Administrar seu Negócio | Grupo Conor",
    description:
      "Ferramentas integradas de gestão administrativa, financeira e controle de estoque para sua central de rastreamento operar com mais eficiência e organização.",
    url: "https://www.grupoconor.com.br/administrar",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
