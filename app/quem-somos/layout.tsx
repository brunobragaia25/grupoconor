import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Nosso negócio é fazer nosso cliente crescer. Conheça a história do Grupo Conor e como ajudamos empresários a fidelizar, administrar, rastrear e expandir seu negócio.",
  alternates: { canonical: "/quem-somos" },
  openGraph: {
    title: "Quem Somos | Grupo Conor",
    description:
      "Nosso negócio é fazer nosso cliente crescer. Conheça a história do Grupo Conor e como ajudamos empresários a fidelizar, administrar, rastrear e expandir seu negócio.",
    url: "https://www.grupoconor.com.br/quem-somos",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
