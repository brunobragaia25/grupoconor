import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monte seu Negócio por R$500",
  description:
    "Tudo o que é essencial para começar: rastreadores, configuração profissional e conectividade inclusos. Monte sua central de rastreamento com o Grupo Conor.",
  alternates: { canonical: "/montar" },
  openGraph: {
    title: "Monte seu Negócio por R$500 | Grupo Conor",
    description:
      "Tudo o que é essencial para começar: rastreadores, configuração profissional e conectividade inclusos. Monte sua central de rastreamento com o Grupo Conor.",
    url: "https://www.grupoconor.com.br/montar",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
