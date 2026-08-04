import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monte seu Combo de Rastreamento",
  description:
    "Monte o combo ideal de rastreamento veicular de forma personalizada, a partir de R$2.500. Escolha os produtos e serviços do Grupo Conor para seu negócio.",
  alternates: { canonical: "/montar-combo" },
  openGraph: {
    title: "Monte seu Combo de Rastreamento | Grupo Conor",
    description:
      "Monte o combo ideal de rastreamento veicular de forma personalizada, a partir de R$2.500. Escolha os produtos e serviços do Grupo Conor para seu negócio.",
    url: "https://www.grupoconor.com.br/montar-combo",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
