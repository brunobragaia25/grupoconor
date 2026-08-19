"use client";

import type { CSSProperties } from "react";
import { Layout } from "@/app/components/Layout";
import { Footer } from "@/app/components/Footer";
import { colors } from "@/app/styles/design-tokens";
import { AnimatedTitle } from "@/app/components/motion/AnimatedTitle";
import { FadeIn } from "@/app/components/motion/FadeIn";
import { AnimatedCounter } from "@/app/components/motion/AnimatedCounter";
import { CroppedIllustration } from "@/app/components/CroppedIllustration";
import { whatsappHref } from "@/app/lib/whatsapp";

const imgLoupeLarge = "/icons/icon-crescer-hero.svg";
const imgHeroIllustration = "/image-crescer-negocio-hero.jpg";
const imgCardSeguro = "/image-crescer-negocio-card-seguro.jpg";
const imgCardAssist = "/image-crescer-negocio-card-assist.jpg";
const imgCardMarketing = "/image-crescer-negocio-card-marketing.jpg";
const imgCtaIllustrationBack = "/image-crescer-negocio-cta-1.svg";
const imgCtaIllustrationFront = "/image-crescer-negocio-cta-2.jpg";
const imgHeartSmile = "/icon-heart-smile.svg";
const imgBookmarkCheck = "/icon-bookmark-check.svg";
const imgEmergencyShare = "/icon-emergency-share.svg";
const imgRocket = "/icon-rocket.svg";
const imgLoupe = "/icon-loupe.svg";

const imgLogoSeguro = "/icons/product-logos/seguro.svg";
const imgLogoAssist = "/icons/product-logos/assist.svg";
const imgLogoMarketing = "/icons/product-logos/marketing.svg";
const imgWhatsappSeguro = "/icons/product-whatsapp/seguro.svg";
const imgWhatsappAssist = "/icons/product-whatsapp/assist.svg";
const imgWhatsappMarketing = "/icons/product-whatsapp/marketing.svg";

const opportunityStats = [
  { number: "64", label: "veículos eram roubados por hora no Brasil em 2021" },
  { number: "373 mil", label: "carros levados por criminosos somente em 2023" },
];

const pillars = [
  {
    icon: imgHeartSmile,
    title: "Fidelizar",
    description: "Programas de benefícios, seguro e assistência 24h para a sua empresa.",
  },
  {
    icon: imgBookmarkCheck,
    title: "Administrar",
    description: "Ferramentas integradas à gestão administrativa, financeira e controle de estoque.",
  },
  {
    icon: imgEmergencyShare,
    title: "Rastrear",
    description: "Rastreamento em tempo real via satélite, telemetria e suporte humanizado.",
  },
  {
    icon: imgRocket,
    title: "Montar",
    description: "Tudo que é essencial para começar por apenas R$500,00.",
  },
  {
    icon: imgLoupe,
    title: "Expandir",
    description: "Ferramentas de captura de leads, marketing, tráfego pago e consultoria 360º.",
    highlight: true,
  },
];

const products = [
  {
    logo: imgLogoSeguro,
    logoWidth: 184,
    color: "#ffc301",
    cardImage: imgCardSeguro,
    // Enquadramento da foto (crop do Figma 388:4334, relativo à faixa 477x180)
    imageCrop: { width: "174.84%", left: "-64.15%", top: "-101.39%" },
    whatsapp: imgWhatsappSeguro,
    title: "Ative seu escritório",
    price: "R$3.000 de entrada + R$350 por mês",
    items: ["Preço fixo", "Sem carência", "Sem mínimo"],
    buttonLabel: "Comprar agora",
  },
  {
    logo: imgLogoAssist,
    logoWidth: 166,
    color: "#996cfb",
    cardImage: imgCardAssist,
    imageCrop: { width: "224.32%", left: "-64.36%", top: "-124.17%" },
    whatsapp: imgWhatsappAssist,
    title: "Ative sua solução",
    price: "R$1.000 de entrada + R$550 por mês",
    items: ["Preço fixo", "Atendimento em todo Brasil", "Para centrais de rastreamento"],
    buttonLabel: "Comprar agora",
  },
  {
    logo: imgLogoMarketing,
    logoWidth: 221,
    color: "#fa7a22",
    cardImage: imgCardMarketing,
    imageCrop: { width: "125.37%", left: "-23.69%", top: "-35.28%" },
    whatsapp: imgWhatsappMarketing,
    title: "Ative o seu marketing",
    price: "Monte o seu combo",
    items: ["Criativos", "Tráfego pago", "Página de vendas"],
    buttonLabel: "Montar pedido",
  },
];

export default function CrescerNegocio() {
  return (
    <Layout>
      <div style={{ backgroundColor: colors.background.dark }} className="px-4 md:px-0">
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Hero */}
          <div
            className="flex flex-col md:flex-row items-center px-0 pt-10 pb-0 md:pl-20 md:pr-0 md:py-0 gap-8 md:gap-0 md:min-h-[560px]"
            style={{
              backgroundColor: "#fa7a22",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center w-full" style={{ position: "relative", zIndex: 1 }}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start flex-1 px-6 md:px-0">
                <img
                  src={imgLoupeLarge}
                  alt=""
                  className="w-[40px] h-[40px] md:w-[64px] md:h-[64px]"
                  style={{ flexShrink: 0 }}
                />
                <div className="w-full md:flex-1 md:w-auto md:min-w-0" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <AnimatedTitle
                    as="h1"
                    className="text-3xl md:text-[56px]"
                    style={{
                      fontWeight: 700,
                      fontFamily: "var(--font-linear-grotesk)",
                      color: colors.white,
                      margin: 0,
                      lineHeight: "normal",
                      maxWidth: "463px",
                    }}
                  >
                    Conquiste +100 novos clientes
                  </AnimatedTitle>
                  <p
                    style={{
                      fontSize: "18px",
                      fontFamily: "var(--font-roboto)",
                      color: colors.white,
                      margin: 0,
                      lineHeight: "28px",
                      maxWidth: "512px",
                    }}
                  >
                    Cresça. Fidelize. Lucre. Estamos aqui para ajudar você a
                    crescer seu negócio no setor de rastreamento veicular.
                  </p>
                </div>
              </div>

              <CroppedIllustration
                src={imgHeroIllustration}
                alt=""
                aspectRatio={740 / 620}
                objectPosition="0.3% 12.9%"
                className="w-full md:w-[740px]"
              />
            </div>
          </div>

          <div
            className="px-6 py-12 md:p-24"
            style={{
              backgroundColor: "rgba(36, 36, 36, 0.75)",
              borderRadius: "12px",
              borderTopLeftRadius: 0,
              display: "flex",
              flexDirection: "column",
              gap: "96px",
            }}
          >
            {/* Oportunidades de negócio */}
            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", textAlign: "center", alignItems: "center" }}>
                <AnimatedTitle
                  as="h2"
                  className="text-3xl md:text-[48px]"
                  style={{
                    fontWeight: 700,
                    fontFamily: "var(--font-linear-grotesk)",
                    color: colors.white,
                    margin: 0,
                  }}
                >
                  {["Oportunidades de ", { text: "negócio", color: "#fa7a22" }]}
                </AnimatedTitle>
                <p
                  style={{
                    fontSize: "16px",
                    fontFamily: "var(--font-roboto)",
                    color: colors.text.bodyLight,
                    margin: 0,
                    maxWidth: "700px",
                    lineHeight: "28px",
                  }}
                >
                  Ainda existem oportunidades para expandir sua base de
                  clientes no mercado de rastreamento veicular.
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-5">
                {opportunityStats.map((stat, idx) => (
                  <FadeIn
                    key={stat.label}
                    delay={idx * 0.08}
                    className="p-8 md:p-12"
                    style={{
                      flex: 1,
                      backgroundColor: "#171717",
                      border: "1px solid #272727",
                      borderRadius: "32px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      gap: "12px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "48px",
                        fontWeight: 900,
                        fontFamily: "var(--font-linear-grotesk)",
                        color: "#fa7a22",
                        margin: 0,
                      }}
                    >
                      {stat.number}
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        fontFamily: "var(--font-roboto)",
                        color: colors.text.bodyLight,
                        margin: 0,
                        lineHeight: "22px",
                      }}
                    >
                      {stat.label}
                    </p>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Ajudamos você - 5 pilares */}
            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", textAlign: "center", alignItems: "center" }}>
                <AnimatedTitle
                  as="h2"
                  className="text-3xl md:text-[48px]"
                  style={{
                    fontWeight: 700,
                    fontFamily: "var(--font-linear-grotesk)",
                    color: colors.white,
                    margin: 0,
                  }}
                >
                  Nosso negócio é fazer nosso cliente crescer
                </AnimatedTitle>
                <p
                  style={{
                    fontSize: "16px",
                    fontFamily: "var(--font-roboto)",
                    color: colors.text.bodyLight,
                    margin: 0,
                    maxWidth: "700px",
                    lineHeight: "28px",
                  }}
                >
                  Ajudamos empresários brasileiros a fidelizar, administrar,
                  rastrear, montar e expandir uma empresa de rastreamento
                  veicular.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:flex gap-5">
                {pillars.map((pillar, idx) => (
                  <FadeIn
                    key={pillar.title}
                    delay={idx * 0.06}
                    className="px-6 py-8 md:px-6 md:py-8"
                    style={{
                      flex: 1,
                      backgroundColor: pillar.highlight ? "#fa7a22" : "#171717",
                      border: pillar.highlight ? "none" : "1px solid #272727",
                      borderRadius: "24px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                    }}
                  >
                    <img src={pillar.icon} alt="" style={{ width: "32px", height: "32px" }} />
                    <p
                      style={{
                        fontSize: "20px",
                        fontWeight: 700,
                        fontFamily: "var(--font-linear-grotesk)",
                        color: pillar.highlight ? colors.black : colors.white,
                        margin: 0,
                      }}
                    >
                      {pillar.title}
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        fontFamily: "var(--font-roboto)",
                        color: pillar.highlight ? "rgba(0,0,0,0.7)" : colors.text.bodyLight,
                        margin: 0,
                        lineHeight: "20px",
                      }}
                    >
                      {pillar.description}
                    </p>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Cresça. Fidelize. Lucre. - produtos */}
            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", textAlign: "center", alignItems: "center" }}>
                <AnimatedTitle
                  as="h2"
                  className="text-3xl md:text-[48px]"
                  style={{
                    fontWeight: 700,
                    fontFamily: "var(--font-linear-grotesk)",
                    color: colors.white,
                    margin: 0,
                  }}
                >
                  {["Cresça. Fidelize. ", { text: "Lucre.", color: "#fa7a22" }]}
                </AnimatedTitle>
              </div>

              <div className="flex flex-col md:flex-row gap-5">
                {products.map((product, idx) => (
                  <FadeIn
                    key={product.title}
                    delay={idx * 0.08}
                    className="w-full md:flex-1 md:w-auto md:min-w-0"
                    style={{
                      borderRadius: "32px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ height: "180px", position: "relative", overflow: "hidden", flexShrink: 0 }}>
                      <img
                        src={product.cardImage}
                        alt=""
                        className="absolute left-[var(--crop-l)] top-[var(--crop-t)] w-[var(--crop-w)] h-[var(--crop-h)] object-cover md:h-auto md:object-fill"
                        style={{
                          "--crop-l": product.imageCrop.left,
                          "--crop-t": product.imageCrop.top,
                          "--crop-w": product.imageCrop.width,
                          // altura equivalente ao crop do Figma (foto 2752x1536 num card de ~485px)
                          "--crop-h": `${parseFloat(product.imageCrop.width) * 1.5027}%`,
                          maxWidth: "none",
                          display: "block",
                        } as CSSProperties}
                      />
                    </div>
                    <div
                      className="p-6 md:p-10"
                      style={{
                        backgroundColor: colors.black,
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        flex: 1,
                      }}
                    >
                      <img src={product.logo} alt="" style={{ width: `${product.logoWidth}px`, maxWidth: "100%", height: "32px" }} />
                      <div style={{ height: "1px", backgroundColor: "#333333", width: "100%" }} />

                      <p
                        style={{
                          fontSize: "16px",
                          fontWeight: 700,
                          fontFamily: "var(--font-linear-grotesk)",
                          color: colors.white,
                          margin: 0,
                        }}
                      >
                        {product.title}
                      </p>
                      <p
                        style={{
                          fontSize: "14px",
                          fontFamily: "var(--font-roboto)",
                          color: product.color,
                          margin: 0,
                        }}
                      >
                        {product.price}
                      </p>

                      <ul
                        style={{
                          margin: 0,
                          padding: 0,
                          listStyle: "none",
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                          fontSize: "13px",
                          fontFamily: "var(--font-roboto)",
                          flex: 1,
                        }}
                      >
                        {product.items.map((item) => (
                          <li key={item} style={{ display: "flex", gap: "8px", color: colors.text.bodyLight }}>
                            <span style={{ color: product.color, fontWeight: 700 }}>✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <button
                        style={{
                          backgroundColor: product.color,
                          color: colors.white,
                          border: "none",
                          height: "44px",
                          borderRadius: "8px",
                          fontSize: "14px",
                          fontWeight: 700,
                          fontFamily: "var(--font-roboto)",
                          cursor: "pointer",
                          transition: "transform 0.2s ease, filter 0.2s ease, opacity 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.03)";
                          e.currentTarget.style.filter = "brightness(1.08)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.filter = "brightness(1)";
                        }}
                      >
                        {product.buttonLabel}
                      </button>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Prova social */}
            <div className="flex flex-col md:flex-row gap-5">
              <FadeIn
                className="h-[200px] md:h-[260px] w-full md:flex-1 md:w-auto md:min-w-0"
                style={{
                  backgroundColor: "#fa7a22",
                  borderRadius: "32px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <AnimatedCounter
                  value="+80 mil"
                  className="text-[36px] md:text-[56px]"
                  style={{ margin: 0, fontWeight: 900, fontFamily: "var(--font-linear-grotesk)", color: colors.white }}
                />
                <p className="text-[16px] md:text-[24px]" style={{ margin: 0, fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.white }}>
                  veículos rastreados
                </p>
              </FadeIn>
              <FadeIn
                delay={0.08}
                className="h-[200px] md:h-[260px] w-full md:flex-1 md:w-auto md:min-w-0"
                style={{
                  backgroundColor: "#fa7a22",
                  borderRadius: "32px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <AnimatedCounter
                  value="+350"
                  className="text-[36px] md:text-[56px]"
                  style={{ margin: 0, fontWeight: 900, fontFamily: "var(--font-linear-grotesk)", color: colors.white }}
                />
                <p className="text-[16px] md:text-[24px]" style={{ margin: 0, fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.white }}>
                  clientes em todo Brasil
                </p>
              </FadeIn>
              <FadeIn
                delay={0.16}
                className="h-[200px] md:h-[260px] w-full md:flex-1 md:w-auto md:min-w-0"
                style={{
                  backgroundColor: "#fa7a22",
                  borderRadius: "32px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <p className="text-[36px] md:text-[56px]" style={{ margin: 0, fontWeight: 900, fontFamily: "var(--font-linear-grotesk)", color: colors.white }}>
                  Nota 10
                </p>
                <p className="text-[16px] md:text-[24px]" style={{ margin: 0, fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.white }}>
                  NPS para o suporte
                </p>
              </FadeIn>
            </div>

            {/* CTA Final */}
            <div
              className="flex flex-col md:flex-row items-stretch justify-between px-0 pt-12 pb-0 md:pl-24 md:pt-0 md:pb-0 md:pr-0 gap-8 md:gap-0"
              style={{
                backgroundColor: "#fa7a22",
                boxSizing: "border-box",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <div className="px-6 md:px-0 md:flex-shrink-0 md:py-24" style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "489px", justifyContent: "center" }}>
                <AnimatedTitle
                  as="h2"
                  className="text-3xl md:text-[48px]"
                  style={{
                    fontWeight: 700,
                    fontFamily: "var(--font-linear-grotesk)",
                    color: colors.white,
                    margin: 0,
                    lineHeight: "1.2",
                  }}
                >
                  Vamos juntos crescer o seu negócio?
                </AnimatedTitle>
                <p
                  style={{
                    fontSize: "16px",
                    fontFamily: "var(--font-roboto)",
                    color: colors.white,
                    margin: 0,
                    lineHeight: "26px",
                    maxWidth: "453px",
                  }}
                >
                  O setor rastreia menos de 5% da frota brasileira. Ainda
                  existem milhões de oportunidades para você conquistar.
                </p>
                <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
                  <a
                    href={whatsappHref("Olá! Quero fazer meu negócio de rastreamento crescer com a Conor e gostaria de falar com um consultor.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "48px",
                      backgroundColor: colors.white,
                      color: colors.black,
                      border: "none",
                      borderRadius: "999px",
                      fontSize: "14px",
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "var(--font-roboto)",
                      transition: "transform 0.2s ease, filter 0.2s ease, opacity 0.2s ease",
                      padding: "0 28px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.03)";
                      e.currentTarget.style.filter = "brightness(1.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.filter = "brightness(1)";
                    }}
                  >
                    Vamos juntos crescer
                  </a>
                </div>
              </div>

              <div
                className="w-full aspect-[722/539] md:aspect-auto md:flex-1 md:min-w-0 md:max-w-[722px] md:h-auto"
                style={{ position: "relative", overflow: "hidden" }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${imgCtaIllustrationBack})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${imgCtaIllustrationFront})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Layout>
  );
}
