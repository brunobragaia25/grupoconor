import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conor Estoque: Rastreadores e Chips",
  description:
    "Hardware essencial para montar ou expandir seu negócio de rastreamento. Compre na quantidade que precisa ou alugue para começar sem investimento alto.",
  alternates: { canonical: "/conor-estoque" },
  openGraph: {
    title: "Conor Estoque: Rastreadores e Chips | Grupo Conor",
    description:
      "Hardware essencial para montar ou expandir seu negócio de rastreamento. Compre na quantidade que precisa ou alugue para começar sem investimento alto.",
    url: "https://www.grupoconor.com.br/conor-estoque",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
