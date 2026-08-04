import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cases de Sucesso",
  description:
    "Veja como empresas reais usam as soluções do Grupo Conor para crescer, economizar e eliminar o roubo de frotas. Conheça histórias reais de sucesso.",
  alternates: { canonical: "/cases" },
  openGraph: {
    title: "Cases de Sucesso | Grupo Conor",
    description:
      "Veja como empresas reais usam as soluções do Grupo Conor para crescer, economizar e eliminar o roubo de frotas. Conheça histórias reais de sucesso.",
    url: "https://www.grupoconor.com.br/cases",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
