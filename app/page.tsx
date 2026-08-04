import type { Metadata } from "next";
import { Layout } from "./components/Layout";
import { HeroMain } from "./components/HeroMain";
import { HeroSection } from "./components/HeroSection";
import { PromoSection } from "./components/PromoSection";
import { Products } from "./components/Products";
import { PromoBanner02 } from "./components/PromoBanner02";
import { Technologies } from "./components/Technologies";
import { CounterSection } from "./components/CounterSection";
import { Services } from "./components/Services";
import { FAQ } from "./components/FAQ";
import { PromoBanner03 } from "./components/PromoBanner03";
import { Footer } from "./components/Footer";
import { colors } from "@/app/styles/design-tokens";

export const metadata: Metadata = {
  title: "Grupo Conor: Soluções para Central de Rastreamento",
  description:
    "Tecnologia avançada, suporte consultivo e benefícios exclusivos para elevar a performance e os resultados da sua central de rastreamento veicular.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <Layout>
      <div style={{ backgroundColor: colors.background.dark }}>
        <HeroMain />
        <HeroSection />
        <PromoSection />
        <Products />
        <PromoBanner02 />
        <Technologies />
        <CounterSection />
        <Services />
        <FAQ />
        <PromoBanner03 />
        <Footer />
      </div>
    </Layout>
  );
}
