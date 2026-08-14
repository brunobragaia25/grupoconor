"use client";

import type { CSSProperties } from "react";
import { Layout } from "@/app/components/Layout";
import { Footer } from "@/app/components/Footer";
import { colors } from "@/app/styles/design-tokens";
import { AnimatedTitle } from "@/app/components/motion/AnimatedTitle";
import { FadeIn } from "@/app/components/motion/FadeIn";
import { CroppedIllustration } from "@/app/components/CroppedIllustration";

const imgHeartSmileLarge = "/icons/icon-heart-smile-large.svg";
const imgHeroIllustration = "/image-fidelizar-hero.svg";
const imgCtaIllustration = "/image-fidelizar-cta.svg";
const imgShieldCheck = "/icons/icon-shield-check.svg";
const imgPackage = "/icons/icon-package.svg";
const imgHeadset = "/icons/icon-headset.svg";
const imgGift = "/icons/icon-gift.svg";
const imgStepCircle = "/icons/icon-step-circle.svg";
const imgRelacionadosSeguro = "/image-fidelizar-relacionados-seguro.jpg";
const imgRelacionadosSeguroLogo = "/icon-fidelizar-relacionados-seguro-logo2.svg";
const imgRelacionadosAssist = "/image-fidelizar-relacionados-assist.jpg";
const imgRelacionadosAssistLogo = "/icon-fidelizar-relacionados-assist-logo.svg";

const pillars = [
  {
    icon: imgShieldCheck,
    title: "Seguro",
    description: "Detalhamento sobre o programa de seguro",
  },
  {
    icon: imgPackage,
    title: "Estoque",
    description: "Como funciona o programa de estoque",
  },
  {
    icon: imgHeadset,
    title: "Assistência 24h",
    description: "Detalhes sobre a assistência humanizada",
  },
  {
    icon: imgGift,
    title: "Benefícios",
    description: "Benefícios adicionais para seus clientes",
  },
];

const steps = [1, 2, 3, 4, 5];

const loremDescription =
  "Lorem ipsum..Lorem ipsum..Lorem ipsum..Lorem ipsum..Lorem ipsum..Lorem ipsum..Lorem ipsum..Lorem ipsum..Lorem ipsum..Lorem ipsum..";

const seguroFeatures = [
  { title: "Recuperação Veicular", description: loremDescription },
  { title: "Telemetria avançada", description: loremDescription },
  { title: "Homologação STC", description: loremDescription },
  { title: "Associação Veicular", description: loremDescription },
];

const assistFeatures = [
  { title: "Financeira", description: loremDescription },
  { title: "Admnistrativa", description: loremDescription },
  { title: "Estoque", description: loremDescription },
];

function RelatedFeatureCard({
  title,
  description,
  color = "#fec22d",
  style,
}: {
  title: string;
  description: string;
  color?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        backgroundColor: "#171717",
        border: "1px solid #272727",
        borderRadius: "32px",
        padding: "64px",
        display: "flex",
        flexDirection: "column",
        gap: "26px",
        ...style,
      }}
    >
      <p style={{ margin: 0, fontSize: "24px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color }}>
        {title}
      </p>
      <p style={{ margin: 0, fontSize: "14px", fontFamily: "var(--font-roboto)", color: colors.text.bodyLight, lineHeight: "24px" }}>
        {description}
      </p>
    </div>
  );
}

export default function Fidelizar() {
  return (
    <Layout>
      <div style={{ backgroundColor: colors.background.dark }} className="md:pr-8">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Hero Section */}
          <div
            className="flex flex-col md:flex-row items-start md:items-center overflow-hidden relative px-4 pt-10 pb-0 md:py-0 md:pl-20 gap-8 md:gap-0 md:min-h-[620px]"
            style={{
              backgroundColor: "#52a4ff",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
          >
            <div
              className="flex flex-col md:flex-row gap-5 md:gap-10 items-start md:items-center"
              style={{
                position: "relative",
                zIndex: 1,
              }}
            >
              <img
                src={imgHeartSmileLarge}
                alt=""
                style={{ width: "64px", height: "64px", flexShrink: 0 }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <AnimatedTitle
                  as="h1"
                  className="text-4xl md:text-[56px]"
                  style={{
                    fontWeight: 700,
                    fontFamily: "var(--font-linear-grotesk)",
                    margin: 0,
                    lineHeight: "normal",
                    maxWidth: "716px",
                  }}
                >
                  {[
                    { text: "Fidelizar ", color: "#bcddfa" },
                    { text: "seus clientes.", color: colors.white },
                  ]}
                </AnimatedTitle>
                <p
                  style={{
                    fontSize: "18px",
                    fontFamily: "var(--font-roboto)",
                    color: colors.white,
                    margin: 0,
                    lineHeight: "28px",
                    maxWidth: "474px",
                  }}
                >
                  Garantimos programas de benefícios, serviços de seguro e
                  assistência 24h para a sua empresa
                </p>
              </div>
            </div>

            <div
              className="relative w-full h-[200px] md:absolute md:right-0 md:top-0 md:bottom-0 md:h-auto md:w-[740px] overflow-hidden pointer-events-none"
            >
              <div
                className="absolute inset-0 bg-contain bg-no-repeat bg-center md:bg-repeat md:w-[4077.83px] md:h-[2276px] md:left-[-1697px] md:top-[-838px] md:bg-auto"
                style={{
                  backgroundImage: `url(${imgHeroIllustration})`,
                }}
              />
            </div>
          </div>

          <div
            className="px-4 py-10 md:p-[96px] flex flex-col gap-16 md:gap-24"
            style={{
              backgroundColor: "rgba(36, 36, 36, 0.75)",
              borderRadius: "12px",
              borderTopLeftRadius: 0,
            }}
          >
            {/* Pilares */}
            <div className="flex flex-col md:flex-row gap-5">
              {pillars.map((pillar, idx) => (
                <FadeIn
                  key={pillar.title}
                  delay={idx * 0.08}
                  className="p-6 md:p-12 w-full md:flex-1 md:w-auto md:min-w-0"
                  style={{
                    backgroundColor: "#171717",
                    border: "1px solid #272727",
                    borderRadius: "32px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "260px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      backgroundColor: "#52a4ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img src={pillar.icon} alt="" style={{ width: "32px", height: "32px" }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <p
                      style={{
                        fontSize: "24px",
                        fontWeight: 700,
                        fontFamily: "var(--font-linear-grotesk)",
                        color: "#52a4ff",
                        margin: 0,
                      }}
                    >
                      {pillar.title}
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        fontFamily: "var(--font-roboto)",
                        color: colors.text.bodyLight,
                        margin: 0,
                        lineHeight: "24px",
                      }}
                    >
                      {pillar.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Como funciona */}
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-stretch">
              <div className="md:w-[392px]" style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                  <AnimatedTitle
                    as="h2"
                    className="text-3xl md:text-[56px]"
                    style={{
                      fontWeight: 700,
                      fontFamily: "var(--font-linear-grotesk)",
                      color: colors.white,
                      margin: 0,
                      lineHeight: "normal",
                    }}
                  >
                    Como funciona o programa
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
                    [CONTEÚDO A PREENCHER] Explicação detalhada de como
                    funciona o programa de fidelização, etapas e benefícios
                    incrementais.
                  </p>
                </div>
                <div
                  className="min-h-[240px] md:min-h-0 w-full md:flex-1 md:w-auto md:min-w-0"
                  style={{
                    backgroundColor: "#d9d9d9",
                    borderRadius: "32px",
                  }}
                />
              </div>

              <div className="w-full md:flex-1 md:w-auto md:min-w-0" style={{ display: "flex", flexDirection: "column", gap: "20px", justifyContent: "center" }}>
                {steps.map((step, idx) => (
                  <FadeIn
                    key={step}
                    delay={idx * 0.08}
                    className="flex-col sm:flex-row gap-4 sm:gap-10"
                    style={{
                      backgroundColor: colors.black,
                      borderRadius: "32px",
                      display: "flex",
                      alignItems: "center",
                      padding: "32px",
                    }}
                  >
                    <img src={imgStepCircle} alt="" style={{ width: "64px", height: "64px", flexShrink: 0 }} />
                    <p className="w-full md:flex-1 md:w-auto md:min-w-0"
                      style={{
                        fontSize: "14px",
                        fontFamily: "var(--font-roboto)",
                        color: colors.text.bodyLight,
                        margin: 0,
                      }}
                    >
                      Passo 0{step}
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        fontFamily: "var(--font-roboto)",
                        color: colors.text.bodyLight,
                        margin: 0,
                      }}
                    >
                      [CONTEÚDO A PREENCHER] Descrição do passo {step}
                    </p>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Produtos Relacionados */}
            <div style={{ display: "flex", flexDirection: "column", gap: "64px", alignItems: "center" }}>
              <AnimatedTitle
                as="h2"
                className="text-3xl md:text-[56px]"
                style={{
                  fontWeight: 700,
                  fontFamily: "var(--font-linear-grotesk)",
                  color: colors.white,
                  margin: 0,
                  textAlign: "center",
                }}
              >
                Produtos relacionados
              </AnimatedTitle>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
                {/* Bloco 1: Conor Seguro */}
                <div className="flex flex-col md:flex-row gap-5" style={{ width: "100%" }}>
                  <CroppedIllustration
                    src={imgRelacionadosSeguro}
                    alt="Conor Seguro"
                    aspectRatio={737 / 638}
                    crop={{
                      widthFraction: 1419 / 737,
                      heightFraction: 792 / 638,
                      offsetXFraction: -582 / 737,
                      offsetYFraction: -141 / 638,
                    }}
                    borderRadius="32px"
                    className="w-full md:w-[737px] md:h-[638px] md:flex-shrink-0"
                    logo={{
                      src: imgRelacionadosSeguroLogo,
                      aspectRatio: 357 / 62,
                      widthFraction: 459 / 737,
                      boxAspectRatio: 459 / 128,
                      artWidthFraction: 357 / 459,
                      cornerRadius: "32px",
                    }}
                  />

                  <div className="w-full md:flex-1 md:w-auto md:min-w-0" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 w-full md:flex-1 md:w-auto md:min-w-0" style={{ gap: "20px" }}>
                      {seguroFeatures.slice(0, 2).map((feature, idx) => (
                        <FadeIn className="w-full md:flex-1 md:w-auto md:min-w-0" key={feature.title} delay={idx * 0.08} style={{  }}>
                          <RelatedFeatureCard title={feature.title} description={feature.description} style={{ height: "100%", justifyContent: "flex-end" }} />
                        </FadeIn>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 w-full md:flex-1 md:w-auto md:min-w-0" style={{ gap: "20px" }}>
                      {seguroFeatures.slice(2, 4).map((feature, idx) => (
                        <FadeIn className="w-full md:flex-1 md:w-auto md:min-w-0" key={feature.title} delay={idx * 0.08} style={{  }}>
                          <RelatedFeatureCard title={feature.title} description={feature.description} style={{ height: "100%" }} />
                        </FadeIn>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bloco 2: Conor Assist */}
                <div className="flex flex-col md:flex-row gap-5" style={{ width: "100%" }}>
                  <div className="order-2 md:order-1 w-full md:flex-1 md:w-auto md:min-w-0" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <FadeIn className="w-full md:flex-1 md:w-auto md:min-w-0" style={{  }}>
                      <RelatedFeatureCard
                        title={assistFeatures[0].title}
                        description={assistFeatures[0].description}
                        color="#996cfb"
                        style={{ height: "100%" }}
                      />
                    </FadeIn>
                    <div className="grid grid-cols-1 sm:grid-cols-2 w-full md:flex-1 md:w-auto md:min-w-0" style={{ gap: "20px" }}>
                      {assistFeatures.slice(1, 3).map((feature, idx) => (
                        <FadeIn className="w-full md:flex-1 md:w-auto md:min-w-0" key={feature.title} delay={idx * 0.08} style={{  }}>
                          <RelatedFeatureCard
                            title={feature.title}
                            description={feature.description}
                            color="#996cfb"
                            style={{ height: "100%" }}
                          />
                        </FadeIn>
                      ))}
                    </div>
                  </div>

                  <CroppedIllustration
                    src={imgRelacionadosAssist}
                    alt="Conor Assist"
                    aspectRatio={737 / 590}
                    crop={{
                      widthFraction: 1480 / 737,
                      heightFraction: 826 / 590,
                      offsetXFraction: -388 / 737,
                      offsetYFraction: -236 / 590,
                    }}
                    borderRadius="32px"
                    className="order-1 md:order-2 w-full md:w-[737px] md:h-[590px] md:flex-shrink-0"
                    logo={{
                      src: imgRelacionadosAssistLogo,
                      aspectRatio: 321 / 62,
                      widthFraction: 459 / 737,
                      boxAspectRatio: 459 / 128,
                      artWidthFraction: 321 / 459,
                      cornerRadius: "32px",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* CTA Final */}
            <div
              className="flex flex-col md:flex-row items-center justify-between px-0 pt-10 pb-0 md:pl-24 md:pr-0 md:py-24 gap-8 md:h-[480px]"
              style={{
                background: "linear-gradient(90deg, #54a8fd, #52a4ff 43.269%)",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <div className="px-6 md:px-0" style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "489px" }}>
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
                  Pronto para fidelizar seus clientes?
                </AnimatedTitle>
                <p
                  style={{
                    fontSize: "16px",
                    fontFamily: "var(--font-roboto)",
                    color: colors.white,
                    margin: 0,
                    lineHeight: "28px",
                    maxWidth: "453px",
                  }}
                >
                  Implemente nossos programas de benefícios e comece a fazer
                  a diferença na retenção de seus clientes hoje mesmo.
                </p>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "40px",
                    backgroundColor: colors.white,
                    color: colors.black,
                    border: "none",
                    borderRadius: "999px",
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer",
                    fontFamily: "var(--font-roboto)",
                    transition: "opacity 0.3s",
                    padding: "0 16px",
                    width: "fit-content",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Comece agora
                </button>
              </div>

              <img
                src={imgCtaIllustration}
                alt=""
                className="w-full h-auto aspect-[707/480] object-contain md:aspect-auto md:object-cover md:h-[480px] md:w-[707px]"
                style={{
                  flexShrink: 0,
                  maxWidth: "100%",
                }}
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Layout>
  );
}
