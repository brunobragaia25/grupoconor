"use client";

import type { CSSProperties } from "react";
import { Layout } from "@/app/components/Layout";
import { Footer } from "@/app/components/Footer";
import { colors } from "@/app/styles/design-tokens";
import { AnimatedTitle } from "@/app/components/motion/AnimatedTitle";
import { FadeIn } from "@/app/components/motion/FadeIn";
import { CroppedIllustration } from "@/app/components/CroppedIllustration";

const imgStorefront = "/icon-storefront.svg";
const imgHeroIllustration = "/image-comecar-negocio-hero.jpg";
const imgCtaIllustrationBack = "/image-comecar-negocio-cta-first.svg";
const imgCtaIllustrationFront = "/image-comecar-negocio-cta-2.jpg";
const imgHeartSmile = "/icon-heart-smile.svg";
const imgBookmarkCheck = "/icon-bookmark-check.svg";
const imgEmergencyShare = "/icon-emergency-share.svg";
const imgRocket = "/icon-rocket.svg";
const imgLoupe = "/icon-loupe.svg";

const imgProductAdmin = "/image-product-admin.jpg";
const imgProduct4em1 = "/image-product-4em1.jpg";
const imgProductEstoque = "/image-product-estoque.jpg";
const imgLogoAdmin = "/icons/product-logos/admin.svg";
const imgLogo4em1 = "/icons/product-logos/4em1.svg";
const imgLogoEstoque = "/icons/product-logos/estoque.svg";

function WhatsappIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.648 9.588C11.45 9.48867 10.476 9.01 10.2947 8.94333C10.1127 8.87733 9.98067 8.84467 9.848 9.04333C9.71667 9.24133 9.33667 9.68733 9.22133 9.81933C9.106 9.952 8.99 9.968 8.792 9.86933C8.594 9.76933 7.95533 9.56067 7.19867 8.886C6.61 8.36067 6.212 7.712 6.09667 7.51333C5.98133 7.31533 6.08467 7.208 6.18333 7.10933C6.27267 7.02067 6.382 6.878 6.48067 6.76267C6.58 6.64667 6.61267 6.564 6.67933 6.43133C6.74533 6.29933 6.71267 6.184 6.66267 6.08467C6.61267 5.98533 6.21667 5.01 6.052 4.61333C5.89067 4.22733 5.72733 4.28 5.606 4.27333C5.49067 4.268 5.35867 4.26667 5.226 4.26667C5.094 4.26667 4.87933 4.316 4.698 4.51467C4.51667 4.71267 4.00467 5.192 4.00467 6.16733C4.00467 7.142 4.71467 8.084 4.81333 8.21667C4.91267 8.34867 6.21067 10.35 8.198 11.208C8.67067 11.412 9.03933 11.534 9.32733 11.6247C9.802 11.776 10.234 11.7547 10.5747 11.7033C10.9553 11.6467 11.7467 11.224 11.912 10.7613C12.0773 10.2987 12.0773 9.902 12.0273 9.81933C11.978 9.73667 11.8467 9.68733 11.648 9.588ZM8.03333 14.5233H8.03067C6.85051 14.5234 5.69205 14.2061 4.67667 13.6047L4.436 13.462L1.942 14.1167L2.60733 11.6847L2.45067 11.4353C1.79096 10.3848 1.44196 9.16913 1.444 7.92867C1.44467 4.29533 4.40133 1.33933 8.036 1.33933C9.796 1.33933 11.4507 2.026 12.6947 3.27133C13.3085 3.88241 13.7949 4.60915 14.126 5.4095C14.4571 6.20984 14.6261 7.06789 14.6233 7.934C14.6213 11.5673 11.6653 14.5233 8.03333 14.5233ZM13.642 2.32533C12.9075 1.58595 12.0335 0.999691 11.0707 0.600534C10.108 0.201376 9.07556 -0.00274482 8.03333 0C3.66333 0 0.106667 3.55667 0.104667 7.928C0.104667 9.32533 0.469333 10.6893 1.16333 11.8913L0.038 16L4.24133 14.8973C5.40373 15.5306 6.70629 15.8625 8.03 15.8627H8.03333C12.4027 15.8627 15.96 12.306 15.962 7.934C15.9652 6.89218 15.7618 5.86007 15.3636 4.89736C14.9654 3.93464 14.3802 3.06045 13.642 2.32533Z"
        fill={color}
      />
    </svg>
  );
}

const marketStats = [
  { number: "2 mil", label: "empresas de rastreamento no Brasil, gerando mais de 29 mil empregos" },
  { number: "<5%", label: "da frota brasileira é rastreada atualmente pelo setor" },
  { number: "124 mi", label: "veículos estão em circulação no país em 2024" },
];

const roiColumns = [
  {
    heading: "01 · INVESTIMENTO",
    rows: [
      {
        number: 1,
        title: "Investimento inicial",
        description: "Custo para começar a rastrear seus itens",
        value: "R$500",
        unit: "",
        numberBg: "#000000",
      },
      {
        number: 2,
        title: "Faturamento por item rastreado",
        description: "Média mensal, por unidade instalada",
        value: "R$50",
        unit: "",
        numberBg: "#000000",
      },
    ],
  },
  {
    heading: "02 · FATURAMENTO E LUCRO",
    rows: [
      {
        number: 3,
        title: "Faturamento com 10 itens rastreados",
        description: "Escalando a operação",
        value: "R$500",
        unit: "por mês",
        numberBg: "#20c4c3",
      },
      {
        number: 4,
        title: "Lucro médio mensal",
        description: "Já com desconto do imposto MEI",
        value: "+R$420",
        unit: "por mês",
        numberBg: "#20c4c3",
      },
    ],
  },
];

const pillars = [
  {
    icon: imgHeartSmile,
    letter: "F",
    title: "Fidelizar",
    description: "Programas de benefícios, seguro e assistência 24h para a sua empresa.",
  },
  {
    icon: imgBookmarkCheck,
    letter: "A",
    title: "Administrar",
    description: "Ferramentas integradas à gestão administrativa, financeira e controle de estoque.",
  },
  {
    icon: imgEmergencyShare,
    letter: "R",
    title: "Rastrear",
    description: "Rastreamento em tempo real via satélite, telemetria e suporte humanizado.",
  },
  {
    icon: imgRocket,
    letter: "M",
    title: "Montar",
    description: "Tudo que é essencial para começar por apenas R$500,00.",
    highlight: true,
  },
  {
    icon: imgLoupe,
    letter: "E",
    title: "Expandir",
    description: "Ferramentas de captura de leads, marketing, tráfego pago e consultoria 360º.",
  },
];

const comboProducts = [
  {
    logo: imgLogoEstoque,
    logoWidth: 195,
    image: imgProductEstoque,
    // Enquadramento da foto no topo do card (crop do Figma 396:1224)
    imageCrop: { width: "125.96%", left: "-12.98%", top: "-45%" },
    color: "#e01e5a",
    checkColor: "#dd245c",
    title: "Alugue 10 rastreadores e chips prontos para uso",
    items: [
      "Rastreador J16 Original e Tag BLE",
      "Chip Vivo 20Mb",
    ],
  },
  {
    logo: imgLogo4em1,
    logoWidth: 174,
    image: imgProduct4em1,
    imageCrop: { width: "125.96%", left: "-12.98%", top: "-45%" },
    color: "#40c6ee",
    checkColor: "#52a4ff",
    title: "O que é essencial para o seu rastreamento?",
    items: ["Recuperação veicular", "Telemetria avançada", "Furto & Roubo", "Associação veicular"],
  },
  {
    logo: imgLogoAdmin,
    logoWidth: 178,
    image: imgProductAdmin,
    imageCrop: { width: "125.96%", left: "-12.98%", top: "-45%" },
    color: "#01c4c4",
    checkColor: "#67d2c4",
    title: "Software de gestão do seu negócio",
    items: ["Financeiro", "Administrativo", "Estoque"],
  },
];

export default function ComecarNegocio() {
  return (
    <Layout>
      <div style={{ backgroundColor: colors.background.dark }} className="px-4 md:pr-8 md:px-0">
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Hero */}
          <div
            className="flex flex-col md:flex-row items-center md:items-center px-0 pt-10 pb-0 md:pl-20 md:pr-0 md:py-0 gap-8 md:gap-0 md:min-h-[560px]"
            style={{
              backgroundColor: "#20c4c3",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center w-full" style={{ position: "relative", zIndex: 1 }}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start flex-1 px-6 md:px-0">
                <img
                  src={imgStorefront}
                  alt=""
                  className="w-[40px] h-[37px] md:w-[64px] md:h-[59px]"
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
                      maxWidth: "579px",
                    }}
                  >
                    Monte seu negócio a partir de R$500
                  </AnimatedTitle>
                  <p
                    style={{
                      fontSize: "18px",
                      fontFamily: "var(--font-roboto)",
                      color: colors.black,
                      margin: 0,
                      lineHeight: "28px",
                      maxWidth: "512px",
                    }}
                  >
                    Comece pequeno, pense grande. Estamos aqui para ajudar você
                    a construir seu negócio no setor de rastreamento veicular.
                  </p>
                </div>
              </div>

              <CroppedIllustration
                src={imgHeroIllustration}
                alt=""
                aspectRatio={740 / 620}
                objectPosition="3.9% 3.1%"
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
            {/* O Mercado */}
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
                  {["O mercado é uma ", { text: "grande oportunidade", color: "#20c4c3" }]}
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
                  95% da frota brasileira — cerca de 117,8 milhões de veículos
                  — ainda não é rastreada.
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-5">
                {marketStats.map((stat, idx) => (
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
                      gap: "12px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "48px",
                        fontWeight: 900,
                        fontFamily: "var(--font-linear-grotesk)",
                        color: "#20c4c3",
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

            {/* Retorno do investimento */}
            <FadeIn
              className="p-6 md:p-14"
              style={{
                backgroundColor: "#f5f1e6",
                borderRadius: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "40px",
              }}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-10 text-center md:text-left">
                <div className="items-center md:items-start" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      fontFamily: "var(--font-roboto)",
                      color: "#20c4c3",
                      margin: 0,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Modelo de retorno do investimento
                  </p>
                  <AnimatedTitle
                    as="h2"
                    className="text-[26px] md:text-[32px] leading-[1.15] md:leading-normal"
                    style={{
                      fontWeight: 700,
                      fontFamily: "var(--font-linear-grotesk)",
                      color: colors.black,
                      margin: 0,
                    }}
                  >
                    Como o investimento inicial se transforma em lucro
                  </AnimatedTitle>
                </div>
                <p
                  className="text-center md:text-right"
                  style={{
                    fontSize: "13px",
                    fontFamily: "var(--font-roboto)",
                    color: "#6b6b6b",
                    margin: 0,
                    maxWidth: "280px",
                    lineHeight: "20px",
                    flexShrink: 0,
                  }}
                >
                  Projeção com 2 rastreadores instalados por mês, já
                  descontando o imposto MEI.
                </p>
              </div>

              <div style={{ height: "1px", backgroundColor: "rgba(0,0,0,0.1)", width: "100%" }} />

              <div className="flex flex-col md:flex-row gap-10 md:gap-16">
                {roiColumns.map((column) => (
                  <div key={column.heading} style={{ flex: 1, display: "flex", flexDirection: "column", gap: "24px" }}>
                    <p
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        fontFamily: "var(--font-roboto)",
                        color: "#8a8a8a",
                        margin: 0,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      {column.heading}
                    </p>

                    {column.rows.map((row, rowIdx) => (
                      <div key={row.title}>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                          <div
                            style={{
                              width: "28px",
                              height: "28px",
                              borderRadius: "50%",
                              backgroundColor: row.numberBg,
                              color: colors.white,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "13px",
                              fontWeight: 700,
                              fontFamily: "var(--font-roboto)",
                              flexShrink: 0,
                            }}
                          >
                            {row.number}
                          </div>
                          <div style={{ flex: 1, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
                            <div>
                              <p
                                style={{
                                  fontSize: "16px",
                                  fontWeight: 700,
                                  fontFamily: "var(--font-linear-grotesk)",
                                  color: colors.black,
                                  margin: "0 0 2px 0",
                                }}
                              >
                                {row.title}
                              </p>
                              <p
                                style={{
                                  fontSize: "13px",
                                  fontFamily: "var(--font-roboto)",
                                  color: "#8a8a8a",
                                  margin: 0,
                                }}
                              >
                                {row.description}
                              </p>
                            </div>
                            <div style={{ textAlign: "right", flexShrink: 0 }}>
                              <p
                                style={{
                                  fontSize: "20px",
                                  fontWeight: 700,
                                  fontFamily: "var(--font-linear-grotesk)",
                                  color: colors.black,
                                  margin: 0,
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {row.value}
                              </p>
                              {row.unit && (
                                <p style={{ fontSize: "11px", fontFamily: "var(--font-roboto)", color: "#8a8a8a", margin: 0 }}>
                                  {row.unit}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                        {rowIdx < column.rows.length - 1 && (
                          <div style={{ height: "1px", backgroundColor: "rgba(0,0,0,0.1)", width: "100%", margin: "20px 0 0 44px" }} />
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <div
                className="flex flex-col md:flex-row items-start md:items-center px-6 py-6 md:px-8 md:py-6 gap-4 md:gap-6"
                style={{
                  backgroundColor: colors.black,
                  borderRadius: "12px",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      fontFamily: "var(--font-roboto)",
                      color: "#20c4c3",
                      margin: "0 0 4px 0",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Resultado final
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      fontFamily: "var(--font-linear-grotesk)",
                      color: colors.white,
                      margin: 0,
                    }}
                  >
                    Retorno do investimento com instalação de 2 rastreadores por mês
                  </p>
                </div>
                <p
                  style={{
                    fontSize: "32px",
                    fontWeight: 700,
                    fontFamily: "var(--font-linear-grotesk)",
                    color: "#20c4c3",
                    margin: 0,
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  4 a 5 meses
                </p>
              </div>
            </FadeIn>

            {/* Ajudamos você - 5 pilares */}
            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              <AnimatedTitle
                as="h2"
                className="text-3xl md:text-[48px]"
                style={{
                  fontWeight: 700,
                  fontFamily: "var(--font-linear-grotesk)",
                  color: colors.white,
                  margin: 0,
                  textAlign: "center",
                }}
              >
                Ajudamos você
              </AnimatedTitle>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:flex gap-5">
                {pillars.map((pillar, idx) => (
                  <FadeIn
                    key={pillar.title}
                    delay={idx * 0.06}
                    className="px-6 py-8 md:px-6 md:py-8"
                    style={{
                      flex: 1,
                      backgroundColor: pillar.highlight ? "#20c4c3" : "#171717",
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

            {/* Construa seu negócio com R$2.500 */}
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
                  {["Construa seu negócio com ", { text: "R$2.500", color: "#20c4c3" }]}
                </AnimatedTitle>
                <p
                  style={{
                    fontSize: "16px",
                    fontFamily: "var(--font-roboto)",
                    color: colors.text.bodyLight,
                    margin: 0,
                    lineHeight: "28px",
                  }}
                >
                  Comece pequeno. Pense grande.
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-5">
                {comboProducts.map((product, idx) => (
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
                        src={product.image}
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
                          fontSize: "14px",
                          fontWeight: 700,
                          fontFamily: "var(--font-linear-grotesk)",
                          color: product.color,
                          margin: 0,
                        }}
                      >
                        {product.title}
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
                          lineHeight: "19.5px",
                          fontFamily: "var(--font-roboto)",
                        }}
                      >
                        {product.items.map((item) => (
                          <li
                            key={item}
                            style={{
                              color: colors.text.bodyLight,
                              display: "flex",
                              gap: "8px",
                              alignItems: "flex-start",
                            }}
                          >
                            <span style={{ color: product.checkColor, fontWeight: 700, flexShrink: 0 }}>
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <FadeIn
                className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 px-6 py-8 md:px-12 md:py-8"
                style={{
                  backgroundColor: "#171717",
                  border: "1px solid #272727",
                  borderRadius: "24px",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "13px",
                      fontFamily: "var(--font-roboto)",
                      color: colors.text.bodyLight,
                      margin: "0 0 4px 0",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Entrada
                  </p>
                  <p
                    style={{
                      fontSize: "32px",
                      fontWeight: 700,
                      fontFamily: "var(--font-linear-grotesk)",
                      color: colors.white,
                      margin: 0,
                    }}
                  >
                    R$2.500{" "}
                    <span style={{ fontSize: "16px", fontWeight: 400, fontFamily: "var(--font-roboto)", color: colors.text.bodyLight }}>
                      + R$35,90 mensais
                    </span>
                  </p>
                </div>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    height: "48px",
                    backgroundColor: "#20c4c3",
                    color: colors.black,
                    border: "none",
                    borderRadius: "999px",
                    fontSize: "14px",
                    fontWeight: 700,
                    cursor: "pointer",
                    fontFamily: "var(--font-roboto)",
                    transition: "opacity 0.3s",
                    padding: "0 28px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <WhatsappIcon color={colors.black} />
                  Comprar combo
                </button>
              </FadeIn>
            </div>

            {/* Prova social */}
            <div className="flex flex-col md:flex-row gap-5">
              <FadeIn
                className="h-[200px] md:h-[260px] w-full md:flex-1 md:w-auto md:min-w-0"
                style={{
                  backgroundColor: "#20c4c3",
                  borderRadius: "32px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <p className="text-[36px] md:text-[56px]" style={{ margin: 0, fontWeight: 900, fontFamily: "var(--font-linear-grotesk)", color: colors.black }}>
                  +80 mil
                </p>
                <p className="text-[16px] md:text-[24px]" style={{ margin: 0, fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.black }}>
                  veículos rastreados
                </p>
              </FadeIn>
              <FadeIn
                delay={0.08}
                className="h-[200px] md:h-[260px] w-full md:flex-1 md:w-auto md:min-w-0"
                style={{
                  backgroundColor: "#20c4c3",
                  borderRadius: "32px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <p className="text-[36px] md:text-[56px]" style={{ margin: 0, fontWeight: 900, fontFamily: "var(--font-linear-grotesk)", color: colors.black }}>
                  +350
                </p>
                <p className="text-[16px] md:text-[24px]" style={{ margin: 0, fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.black }}>
                  clientes em todo Brasil
                </p>
              </FadeIn>
              <FadeIn
                delay={0.16}
                className="h-[200px] md:h-[260px] w-full md:flex-1 md:w-auto md:min-w-0"
                style={{
                  backgroundColor: "#20c4c3",
                  borderRadius: "32px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <p className="text-[36px] md:text-[56px]" style={{ margin: 0, fontWeight: 900, fontFamily: "var(--font-linear-grotesk)", color: colors.black }}>
                  Nota 10
                </p>
                <p className="text-[16px] md:text-[24px]" style={{ margin: 0, fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.black }}>
                  NPS para o suporte
                </p>
              </FadeIn>
            </div>

            {/* CTA Final */}
            <div
              className="flex flex-col md:flex-row items-stretch justify-between px-0 pt-12 pb-0 md:pl-24 md:pt-0 md:pb-0 md:pr-0 gap-8 md:gap-0"
              style={{
                backgroundColor: "#20c4c3",
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
                  Vamos juntos construir seu negócio no setor de rastreamento?
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
                  Oportunidade de mercado: 117,8 milhões de veículos ainda não
                  são rastreados em todo o Brasil.
                </p>
                <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
                  <button
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
                      transition: "opacity 0.3s",
                      padding: "0 28px",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    Monte seu negócio já
                  </button>
                  <button
                    className="w-full md:w-auto"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "48px",
                      backgroundColor: "transparent",
                      color: colors.white,
                      border: `1px solid ${colors.white}`,
                      borderRadius: "999px",
                      fontSize: "14px",
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "var(--font-roboto)",
                      transition: "opacity 0.3s",
                      padding: "0 28px",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    Agendar demonstração
                  </button>
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
