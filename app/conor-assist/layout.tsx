import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conor Assist: Assistência 24h",
  description:
    "Assistência 24h e benefícios para sua empresa de rastreamento. Ofereça mais valor aos seus clientes sem aumentar sua estrutura, a partir de R$350/mês.",
  alternates: { canonical: "/conor-assist" },
  openGraph: {
    title: "Conor Assist: Assistência 24h | Grupo Conor",
    description:
      "Assistência 24h e benefícios para sua empresa de rastreamento. Ofereça mais valor aos seus clientes sem aumentar sua estrutura, a partir de R$350/mês.",
    url: "https://www.grupoconor.com.br/conor-assist",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
