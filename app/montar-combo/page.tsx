"use client";

import type { CSSProperties } from "react";
import { Layout } from "@/app/components/Layout";
import { Footer } from "@/app/components/Footer";
import { colors } from "@/app/styles/design-tokens";
import { AnimatedTitle } from "@/app/components/motion/AnimatedTitle";
import { FadeIn } from "@/app/components/motion/FadeIn";
import { CroppedIllustration } from "@/app/components/CroppedIllustration";

const imgHeroIcon = "/icon-montar-combo-hero.svg";
const imgHeroIllustration = "/image-montar-combo-hero.jpg";
const imgCartIcon = "/icon-montar-combo-cart.svg";

const imgLogoAdmin = "/icons/product-logos/admin.svg";
const imgLogo4em1 = "/icons/product-logos/4em1.svg";
const imgLogoEstoque = "/icons/product-logos/estoque.svg";
const imgLogoSeguro = "/icons/product-logos/seguro.svg";
const imgLogoAssist = "/icons/product-logos/assist.svg";
const imgLogoMarketing = "/icons/product-logos/marketing.svg";

const imgVennSeguro = "/icon-venn-seguro.svg";
const imgVennAssist = "/icon-venn-assist.svg";
const imgVennAdmin = "/icon-venn-admin.svg";
const imgVenn4em1 = "/icon-venn-4em1.svg";
const imgVennMarketingIcon = "/icon-venn-marketing-icon.svg";
const imgVennMarketingWordmark = "/icon-venn-marketing-wordmark.svg";
const imgVennEstoque = "/icon-venn-estoque.svg";
const imgVennCenter = "/icon-venn-center.svg";

const imgCardEstoque = "/image-montar-combo-card-estoque.jpg";
const imgCard4em1 = "/image-montar-combo-card-4em1.jpg";
const imgCardAdmin = "/image-montar-combo-card-admin.jpg";
const imgCardSeguro = "/image-montar-combo-card-seguro.jpg";
const imgCardAssist = "/image-montar-combo-card-assist.jpg";
const imgCardMarketing = "/image-montar-combo-card-marketing.jpg";

const imgCtaIllustration = "/image-montar-combo-cta.jpg";

function ComboVenn({ activeGroup }: { activeGroup: "iniciante" | "existente" }) {
  const activeBg = "rgba(153, 108, 251, 0.6)";
  const activeBorder = "#996cfb";
  const inactiveBorder = "#3a3a3a";

  const isIniciante = activeGroup === "iniciante";

  return (
    <div className="overflow-x-auto max-w-full">
    <div style={{ position: "relative", width: "560px", height: "480px", flexShrink: 0 }}>
      {/* Seguro + Assist */}
      <div
        style={{
          position: "absolute",
          left: "43px",
          top: "100px",
          width: "210px",
          height: "210px",
          borderRadius: "300px",
          border: `2px ${isIniciante ? "dashed" : "solid"} ${isIniciante ? inactiveBorder : activeBorder}`,
          backgroundColor: isIniciante ? "transparent" : activeBg,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={imgVennSeguro} alt="" style={{ width: "118px", height: "19.175px" }} />
        <img src={imgVennAssist} alt="" style={{ width: "118px", height: "21.159px" }} />
      </div>

      {/* Admin */}
      <div
        style={{
          position: "absolute",
          left: "180px",
          top: "5px",
          width: "200px",
          height: "200px",
          borderRadius: "100px",
          border: `2px ${isIniciante ? "solid" : "dashed"} ${isIniciante ? activeBorder : inactiveBorder}`,
          backgroundColor: isIniciante ? activeBg : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={imgVennAdmin} alt="" style={{ width: "118px", height: "19.793px" }} />
      </div>

      {/* 4 em 1 */}
      <div
        style={{
          position: "absolute",
          left: "307px",
          top: "100px",
          width: "210px",
          height: "210px",
          borderRadius: "105px",
          border: `2px ${isIniciante ? "solid" : "dashed"} ${isIniciante ? activeBorder : inactiveBorder}`,
          backgroundColor: isIniciante ? activeBg : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={imgVenn4em1} alt="" style={{ width: "118px", height: "20.453px" }} />
      </div>

      {/* Marketing */}
      <div
        style={{
          position: "absolute",
          left: "92px",
          top: "265px",
          width: "210px",
          height: "210px",
          borderRadius: "300px",
          border: `2px ${isIniciante ? "dashed" : "solid"} ${isIniciante ? inactiveBorder : activeBorder}`,
          backgroundColor: isIniciante ? "transparent" : activeBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
        }}
      >
        <img src={imgVennMarketingIcon} alt="" style={{ width: "15.087px", height: "16.147px" }} />
        <img src={imgVennMarketingWordmark} alt="" style={{ width: "98.028px", height: "11.268px" }} />
      </div>

      {/* Estoque */}
      <div
        style={{
          position: "absolute",
          left: "257px",
          top: "265px",
          width: "210px",
          height: "210px",
          borderRadius: "105px",
          border: `2px ${isIniciante ? "solid" : "dashed"} ${isIniciante ? activeBorder : inactiveBorder}`,
          backgroundColor: isIniciante ? activeBg : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={imgVennEstoque} alt="" style={{ width: "118px", height: "18.047px" }} />
      </div>

      {/* Center logo */}
      <div style={{ position: "absolute", left: "252px", top: "219px", width: "56px", height: "56px" }}>
        <img src={imgVennCenter} alt="" style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
    </div>
  );
}

const iniciantePricing = [
  {
    logo: imgLogoEstoque,
    logoWidth: 195,
    color: "#e01e5a",
    checkColor: "#dd245c",
    cardImage: imgCardEstoque,
    // Crops do Figma 395:348 (faixa 477x180)
    imageCrop: { width: "111.74%", left: "-5.87%", top: "-43.75%" },
    title: "Alugue 10 rastreadores e chips prontos para uso",
    items: ["Rastreadores SUNTECH ST4215U (4G) e ST310UC2 (2G)", "Chip Vivo 20Mb"],
  },
  {
    logo: imgLogo4em1,
    logoWidth: 174,
    color: "#40c6ee",
    checkColor: "#52a4ff",
    cardImage: imgCard4em1,
    imageCrop: { width: "121.7%", left: "-10.85%", top: "-40%" },
    title: "O que é essencial para o seu rastreamento?",
    items: ["Recuperação veicular", "Telemetria avançada", "Furto & Roubo", "Associação veicular"],
  },
  {
    logo: imgLogoAdmin,
    logoWidth: 178,
    color: "#01c4c4",
    checkColor: "#67d2c4",
    cardImage: imgCardAdmin,
    imageCrop: { width: "148.74%", left: "-28.14%", top: "-82.22%" },
    title: "Software de gestão do seu negócio",
    items: ["Financeiro", "Administrativo", "Estoque"],
  },
];

const existentePricing = [
  {
    logo: imgLogoSeguro,
    logoWidth: 184,
    color: "#ffc301",
    cardImage: imgCardSeguro,
    imageCrop: { width: "174.84%", left: "-64.15%", top: "-101.39%" },
    title: "Ative seu escritório",
    price: "R$3.000 de entrada + R$350 por mês",
    items: ["Preço fixo", "Sem carência", "Sem mínimo"],
  },
  {
    logo: imgLogoAssist,
    logoWidth: 166,
    color: "#996cfb",
    cardImage: imgCardAssist,
    imageCrop: { width: "224.32%", left: "-64.36%", top: "-124.17%" },
    title: "Ative sua solução",
    price: "R$1.000 de entrada + R$550 por mês",
    items: ["Preço fixo", "Atendimento em todo Brasil", "Para centrais de rastreamento"],
  },
  {
    logo: imgLogoMarketing,
    logoWidth: 221,
    color: "#fa7a22",
    cardImage: imgCardMarketing,
    imageCrop: { width: "125.37%", left: "-23.69%", top: "-35.28%" },
    title: "Ative o seu marketing",
    price: "Monte o seu combo",
    items: ["Criativos", "Tráfego pago", "Página de vendas"],
  },
];

export default function MontarCombo() {
  return (
    <Layout>
      <div style={{ backgroundColor: colors.background.dark }} className="px-4 md:pr-8 md:px-0">
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Hero */}
          <div
            className="flex flex-col md:flex-row items-center px-0 pt-10 pb-0 md:pl-20 md:pr-0 md:py-0 gap-8 md:gap-0 md:min-h-[620px]"
            style={{
              backgroundColor: "#996cfb",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center w-full" style={{ position: "relative", zIndex: 1 }}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start flex-1 px-6 md:px-0">
                <img
                  src={imgHeroIcon}
                  alt=""
                  className="w-[40px] h-[36px] md:w-[64px] md:h-[57px]"
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
                      maxWidth: "543px",
                    }}
                  >
                    Monte seu combo de rastreamento veicular.
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
                    Monte o combo ideal de rastreamento veicular de forma
                    simples, rápida e totalmente personalizada para a sua
                    necessidade.
                  </p>
                </div>
              </div>

              <CroppedIllustration
                src={imgHeroIllustration}
                alt=""
                aspectRatio={740 / 620}
                objectPosition="0.3% 8%"
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
            {/* Para quem está começando */}
            <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
              <FadeIn
                className="flex-col md:flex-row px-6 py-10 md:p-16 gap-10 md:gap-16"
                style={{
                  backgroundColor: colors.white,
                  borderRadius: "32px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div className="w-full md:w-[719px]" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#996cfb",
                      margin: 0,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Para quem está começando
                  </p>
                  <AnimatedTitle
                    as="h2"
                    className="text-3xl md:text-[48px]"
                    style={{
                      fontWeight: 700,
                      fontFamily: "var(--font-linear-grotesk)",
                      color: colors.black,
                      margin: 0,
                      lineHeight: "1.2",
                    }}
                  >
                    Comece pequeno pense grande
                  </AnimatedTitle>
                  <p
                    style={{
                      fontSize: "16px",
                      fontFamily: "var(--font-roboto)",
                      color: colors.black,
                      margin: 0,
                      lineHeight: "28px",
                    }}
                  >
                    Construa seu negócio de rastreamento com Conor Admin, Conor
                    4 em 1 e Conor Estoque
                  </p>
                  <p style={{ margin: 0, lineHeight: "28px" }}>
                    <span style={{ fontSize: "32px", color: colors.black, fontFamily: "var(--font-roboto)" }}>a partir de </span>
                    <span style={{ fontSize: "32px", fontWeight: 700, color: "#996cfb", fontFamily: "var(--font-roboto)" }}>
                      R$2.500
                    </span>
                    <span style={{ fontSize: "32px", color: "#996cfb", fontFamily: "var(--font-roboto)" }}>.</span>
                  </p>
                </div>

                <ComboVenn activeGroup="iniciante" />
              </FadeIn>

              <div className="flex flex-col md:flex-row gap-5">
                {iniciantePricing.map((product, idx) => (
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
                          fontFamily: "var(--font-roboto)",
                          flex: 1,
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
                              lineHeight: "19.5px",
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
                className="flex-col md:flex-row items-start md:items-center px-6 py-8 md:px-12 md:py-8 gap-6 md:gap-0"
                style={{
                  backgroundColor: "#171717",
                  border: "1px solid #272727",
                  borderRadius: "24px",
                  display: "flex",
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
                    backgroundColor: "#996cfb",
                    color: colors.white,
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
                  <img src={imgCartIcon} alt="" style={{ width: "16px", height: "16px" }} />
                  Comprar combo
                </button>
              </FadeIn>
            </div>

            {/* Para quem já tem uma base de clientes */}
            <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
              <FadeIn
                className="flex-col md:flex-row px-6 py-10 md:p-16 gap-10 md:gap-16"
                style={{
                  backgroundColor: colors.white,
                  borderRadius: "32px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ComboVenn activeGroup="existente" />

                <div className="w-full md:w-[719px]" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#996cfb",
                      margin: 0,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Para quem já tem uma base de clientes
                  </p>
                  <AnimatedTitle
                    as="h2"
                    className="text-3xl md:text-[48px]"
                    style={{
                      fontWeight: 700,
                      fontFamily: "var(--font-linear-grotesk)",
                      color: colors.black,
                      margin: 0,
                      lineHeight: "1.2",
                    }}
                  >
                    Cresça. Fidelize. Lucre.
                  </AnimatedTitle>
                  <p
                    style={{
                      fontSize: "16px",
                      fontFamily: "var(--font-roboto)",
                      color: colors.black,
                      margin: 0,
                      lineHeight: "28px",
                    }}
                  >
                    Adicione Conor Seguro, Conor Assist e Conor Marketing ao
                    seu negócio e amplie o que você já oferece aos seus
                    clientes.
                  </p>
                </div>
              </FadeIn>

              <div className="flex flex-col md:flex-row gap-5">
                {existentePricing.map((product, idx) => (
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
                      <p style={{ fontSize: "14px", fontFamily: "var(--font-roboto)", color: product.color, margin: 0 }}>
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
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* CTA Final */}
            <div
              className="flex flex-col md:flex-row items-stretch justify-between px-0 pt-12 pb-0 md:pl-24 md:pt-0 md:pb-0 md:pr-0 gap-8 md:gap-0"
              style={{
                backgroundColor: "#996cfb",
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
                  Escolha o combo ideal para o seu momento
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
                  Comece do zero ou expanda o que você já construiu. Estamos
                  aqui para ajudar em qualquer etapa.
                </p>
                <button
                  className="w-full md:w-fit"
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
                  Falar com um consultor
                </button>
              </div>

              <div className="w-full aspect-[722/539] md:aspect-auto md:flex-1 md:min-w-0 md:max-w-[722px] md:h-auto" style={{ position: "relative", overflow: "hidden" }}>
                <img
                  src={imgCtaIllustration}
                  alt=""
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "0% 6%",
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
