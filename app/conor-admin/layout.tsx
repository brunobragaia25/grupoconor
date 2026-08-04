import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conor Admin: Gestão para Centrais de Rastreamento",
  description:
    "Módulos financeiro, administrativo e de estoque integrados para gerenciar contratos, clientes e finanças da sua central de rastreamento em um só lugar.",
  alternates: { canonical: "/conor-admin" },
  openGraph: {
    title: "Conor Admin: Gestão para Centrais de Rastreamento | Grupo Conor",
    description:
      "Módulos financeiro, administrativo e de estoque integrados para gerenciar contratos, clientes e finanças da sua central de rastreamento em um só lugar.",
    url: "https://www.grupoconor.com.br/conor-admin",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
