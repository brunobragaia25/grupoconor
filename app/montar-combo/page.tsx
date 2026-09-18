"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/app/components/Layout";
import { Footer } from "@/app/components/Footer";
import { colors } from "@/app/styles/design-tokens";
import { AnimatedTitle } from "@/app/components/motion/AnimatedTitle";
import { FadeIn } from "@/app/components/motion/FadeIn";
import { CroppedIllustration } from "@/app/components/CroppedIllustration";
import { whatsappHref } from "@/app/lib/whatsapp";

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
  const borderColor = "#996cfb";
  const circleStyle: React.CSSProperties = {
    border: `2px dashed ${borderColor}`,
    backgroundColor: colors.white,
  };

  const circleVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: (delay: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
    }),
  };

  return (
    <div className="overflow-x-auto max-w-full">
    <motion.div
      style={{ position: "relative", width: "560px", height: "480px", flexShrink: 0 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* Seguro + Assist */}
      <motion.div
        custom={0.1}
        variants={circleVariants}
        style={{
          ...circleStyle,
          position: "absolute",
          left: "43px",
          top: "100px",
          width: "210px",
          height: "210px",
          borderRadius: "300px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={imgVennSeguro} alt="" style={{ width: "118px", height: "19.175px" }} />
        <img src={imgVennAssist} alt="" style={{ width: "118px", height: "21.159px" }} />
      </motion.div>

      {/* Admin */}
      <motion.div
        custom={0.2}
        variants={circleVariants}
        style={{
          ...circleStyle,
          position: "absolute",
          left: "180px",
          top: "5px",
          width: "200px",
          height: "200px",
          borderRadius: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={imgVennAdmin} alt="" style={{ width: "118px", height: "19.793px" }} />
      </motion.div>

      {/* 4 em 1 */}
      <motion.div
        custom={0.3}
        variants={circleVariants}
        style={{
          ...circleStyle,
          position: "absolute",
          left: "307px",
          top: "100px",
          width: "210px",
          height: "210px",
          borderRadius: "105px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={imgVenn4em1} alt="" style={{ width: "118px", height: "20.453px" }} />
      </motion.div>

      {/* Marketing */}
      <motion.div
        custom={0.4}
        variants={circleVariants}
        style={{
          ...circleStyle,
          position: "absolute",
          left: "92px",
          top: "265px",
          width: "210px",
          height: "210px",
          borderRadius: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
        }}
      >
        <img src={imgVennMarketingIcon} alt="" style={{ width: "15.087px", height: "16.147px" }} />
        <img src={imgVennMarketingWordmark} alt="" style={{ width: "98.028px", height: "11.268px" }} />
      </motion.div>

      {/* Estoque */}
      <motion.div
        custom={0.5}
        variants={circleVariants}
        style={{
          ...circleStyle,
          position: "absolute",
          left: "257px",
          top: "265px",
          width: "210px",
          height: "210px",
          borderRadius: "105px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={imgVennEstoque} alt="" style={{ width: "118px", height: "18.047px" }} />
      </motion.div>

      {/* Center logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: "absolute", left: "252px", top: "219px", width: "56px", height: "56px" }}
      >
        <img src={imgVennCenter} alt="" style={{ width: "100%", height: "100%" }} />
      </motion.div>
    </motion.div>
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
    items: ["Rastreador J16 Original e Tag BLE", "Chip Vivo 20Mb"],
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
    buttonLabel: "Montar pedido",
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
    buttonLabel: "Comprar agora",
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
    buttonLabel: "Comprar agora",
    items: ["Criativos", "Tráfego pago", "Página de vendas"],
  },
];

export default function MontarCombo() {
  return (
    <Layout>
      <div style={{ backgroundColor: colors.background.dark }} className="px-4 md:px-0">
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Hero */}
          <div
            className="flex flex-col min-[1100px]:flex-row items-center px-0 pt-10 pb-0 min-[1100px]:pl-20 min-[1100px]:pr-0 min-[1100px]:py-0 gap-8 min-[1100px]:gap-0 min-[1100px]:min-h-[620px]"
            style={{
              backgroundColor: "#996cfb",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div className="flex flex-col min-[1100px]:flex-row gap-8 min-[1100px]:gap-10 items-center w-full" style={{ position: "relative", zIndex: 1 }}>
              <div className="flex flex-col min-[1100px]:flex-row gap-6 min-[1100px]:gap-10 items-start flex-1 px-6 min-[1100px]:px-0">
                <img
                  src={imgHeroIcon}
                  alt=""
                  className="w-[40px] h-[36px] min-[1100px]:w-[64px] min-[1100px]:h-[57px]"
                  style={{ flexShrink: 0 }}
                />
                <div className="w-full min-[1100px]:flex-1 min-[1100px]:w-auto min-[1100px]:min-w-0" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <AnimatedTitle
                    as="h1"
                    className="text-3xl min-[1100px]:text-[44px] min-[1520px]:text-[56px]"
                    style={{
                      fontWeight: 700,
                      fontFamily: "var(--font-linear-grotesk)",
                      color: colors.white,
                      margin: 0,
                      lineHeight: "1.05",
                      maxWidth: "clamp(300px, calc(100vw - 1164px), 543px)",
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
                      maxWidth: "clamp(280px, calc(100vw - 1164px), 512px)",
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
                className="w-full min-[1100px]:w-[var(--hero-illus-w)] min-[1100px]:flex-shrink-0 min-[1100px]:aspect-auto! min-[1100px]:h-[620px]"
                style={{
                  ["--hero-illus-w" as string]:
                    "min(740px, max(320px, calc(100vw - 448px - clamp(300px, calc(100vw - 1164px), 543px))))",
                }}
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
            {/* Diagrama dos combos */}
            <FadeIn
              className="p-6 md:p-12"
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#F9F6F0",
                borderRadius: "32px",
              }}
            >
              <ComboVenn activeGroup="iniciante" />
            </FadeIn>

            {/* Para quem está começando */}
            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              <FadeIn>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
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
                      color: colors.white,
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
                      color: colors.text.bodyLight,
                      margin: 0,
                      lineHeight: "28px",
                    }}
                  >
                    Construa seu negócio de rastreamento com Conor Admin, Conor
                    4 em 1 e Conor Estoque
                  </p>
                </div>
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

              <FadeIn style={{ display: "flex", justifyContent: "center" }}>
                <button
                  className="w-full md:w-auto h-[56px] md:h-[64px] text-[16px] md:text-[18px] px-8 md:px-14"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    backgroundColor: "#996cfb",
                    color: colors.white,
                    border: "none",
                    borderRadius: "999px",
                    fontWeight: 700,
                    cursor: "pointer",
                    fontFamily: "var(--font-roboto)",
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
                  <img src={imgCartIcon} alt="" style={{ width: "20px", height: "20px" }} />
                  Comprar combo
                </button>
              </FadeIn>
            </div>

            {/* Para quem já tem uma base de clientes */}
            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              <FadeIn>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
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
                      color: colors.white,
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
                      color: colors.text.bodyLight,
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
                      <button
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "8px",
                          width: "100%",
                          height: "48px",
                          backgroundColor: product.color,
                          color: colors.black,
                          border: "none",
                          borderRadius: "999px",
                          fontSize: "14px",
                          fontWeight: 700,
                          cursor: "pointer",
                          fontFamily: "var(--font-roboto)",
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
                  className="text-3xl md:text-[40px] min-[1520px]:text-[48px]"
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
                <a
                  href={whatsappHref("Olá! Tenho interesse em montar um combo Conor e gostaria de falar com um consultor.")}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  Falar com um consultor
                </a>
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
