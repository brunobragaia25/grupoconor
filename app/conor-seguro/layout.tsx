import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conor Seguro: Proteção Veicular",
  description:
    "Programas de benefícios, serviços de seguro e assistência 24h para a sua empresa de rastreamento oferecer mais proteção aos clientes, a partir de R$350/mês.",
  alternates: { canonical: "/conor-seguro" },
  openGraph: {
    title: "Conor Seguro: Proteção Veicular | Grupo Conor",
    description:
      "Programas de benefícios, serviços de seguro e assistência 24h para a sua empresa de rastreamento oferecer mais proteção aos clientes, a partir de R$350/mês.",
    url: "https://www.grupoconor.com.br/conor-seguro",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
