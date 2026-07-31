"use client";

import type { CSSProperties } from "react";
import { Layout } from "@/app/components/Layout";
import { Footer } from "@/app/components/Footer";
import { colors } from "@/app/styles/design-tokens";
import { AnimatedTitle } from "@/app/components/motion/AnimatedTitle";
import { FadeIn } from "@/app/components/motion/FadeIn";

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
      <div style={{ backgroundColor: colors.background.dark, paddingRight: "32px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Hero Section */}
          <div
            style={{
              backgroundColor: "#52a4ff",
              minHeight: "620px",
              display: "flex",
              alignItems: "center",
              paddingLeft: "80px",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "40px",
                alignItems: "center",
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
                  style={{
                    fontSize: "56px",
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
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                bottom: 0,
                width: "740px",
                overflow: "hidden",
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "4077.83px",
                  height: "2276px",
                  left: "-1697px",
                  top: "-838px",
                  backgroundImage: `url(${imgHeroIllustration})`,
                  backgroundSize: "4077.83px 2276px",
                }}
              />
            </div>
          </div>

          <div
            style={{
              backgroundColor: "rgba(36, 36, 36, 0.75)",
              borderRadius: "12px",
              borderTopLeftRadius: 0,
              padding: "96px",
              display: "flex",
              flexDirection: "column",
              gap: "96px",
            }}
          >
            {/* Pilares */}
            <div style={{ display: "flex", gap: "20px" }}>
              {pillars.map((pillar, idx) => (
                <FadeIn
                  key={pillar.title}
                  delay={idx * 0.08}
                  style={{
                    backgroundColor: "#171717",
                    border: "1px solid #272727",
                    borderRadius: "32px",
                    flex: "1 0 0",
                    padding: "48px",
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
            <div style={{ display: "flex", gap: "64px", alignItems: "stretch" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "40px", width: "392px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                  <AnimatedTitle
                    as="h2"
                    style={{
                      fontSize: "56px",
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
                  style={{
                    backgroundColor: "#d9d9d9",
                    borderRadius: "32px",
                    flex: "1 0 0",
                  }}
                />
              </div>

              <div style={{ display: "flex", flex: "1 0 0", flexDirection: "column", gap: "20px", justifyContent: "center" }}>
                {steps.map((step, idx) => (
                  <FadeIn
                    key={step}
                    delay={idx * 0.08}
                    style={{
                      backgroundColor: colors.black,
                      borderRadius: "32px",
                      display: "flex",
                      gap: "40px",
                      alignItems: "center",
                      padding: "32px",
                    }}
                  >
                    <img src={imgStepCircle} alt="" style={{ width: "64px", height: "64px", flexShrink: 0 }} />
                    <p
                      style={{
                        fontSize: "14px",
                        fontFamily: "var(--font-roboto)",
                        color: colors.text.bodyLight,
                        margin: 0,
                        flex: "1 0 0",
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
                style={{
                  fontSize: "56px",
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
                <div style={{ display: "flex", gap: "20px", width: "100%" }}>
                  <FadeIn
                    style={{
                      width: "737px",
                      height: "638px",
                      flexShrink: 0,
                      position: "relative",
                      borderRadius: "32px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        width: "1419px",
                        height: "792px",
                        left: "-582px",
                        top: "-141px",
                        backgroundImage: `url(${imgRelacionadosSeguro})`,
                        backgroundSize: "1419px 792px",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        right: 0,
                        bottom: 0,
                        width: "459px",
                        height: "128px",
                        backgroundColor: colors.white,
                        borderTopLeftRadius: "32px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img src={imgRelacionadosSeguroLogo} alt="Conor Seguro" style={{ width: "357px", height: "62px" }} />
                    </div>
                  </FadeIn>

                  <div style={{ flex: "1 0 0", height: "638px", display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div style={{ flex: "1 0 0", display: "flex", gap: "20px" }}>
                      {seguroFeatures.slice(0, 2).map((feature, idx) => (
                        <FadeIn key={feature.title} delay={idx * 0.08} style={{ flex: "1 0 0" }}>
                          <RelatedFeatureCard title={feature.title} description={feature.description} style={{ height: "100%", justifyContent: "flex-end" }} />
                        </FadeIn>
                      ))}
                    </div>
                    <div style={{ flex: "1 0 0", display: "flex", gap: "20px" }}>
                      {seguroFeatures.slice(2, 4).map((feature, idx) => (
                        <FadeIn key={feature.title} delay={idx * 0.08} style={{ flex: "1 0 0" }}>
                          <RelatedFeatureCard title={feature.title} description={feature.description} style={{ height: "100%" }} />
                        </FadeIn>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bloco 2: Conor Assist */}
                <div style={{ display: "flex", gap: "20px", width: "100%" }}>
                  <div style={{ flex: "1 0 0", height: "590px", display: "flex", flexDirection: "column", gap: "20px" }}>
                    <FadeIn style={{ flex: "1 0 0" }}>
                      <RelatedFeatureCard
                        title={assistFeatures[0].title}
                        description={assistFeatures[0].description}
                        color="#996cfb"
                        style={{ height: "100%" }}
                      />
                    </FadeIn>
                    <div style={{ flex: "1 0 0", display: "flex", gap: "20px" }}>
                      {assistFeatures.slice(1, 3).map((feature, idx) => (
                        <FadeIn key={feature.title} delay={idx * 0.08} style={{ flex: "1 0 0" }}>
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

                  <FadeIn
                    style={{
                      width: "737px",
                      height: "590px",
                      flexShrink: 0,
                      position: "relative",
                      borderRadius: "32px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        width: "1480px",
                        height: "826px",
                        left: "-388px",
                        top: "-236px",
                        backgroundImage: `url(${imgRelacionadosAssist})`,
                        backgroundSize: "1480px 826px",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        right: 0,
                        bottom: 0,
                        width: "459px",
                        height: "128px",
                        backgroundColor: colors.white,
                        borderTopLeftRadius: "32px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img src={imgRelacionadosAssistLogo} alt="Conor Assist" style={{ width: "321px", height: "62px" }} />
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>

            {/* CTA Final */}
            <div
              style={{
                background: "linear-gradient(90deg, #54a8fd, #52a4ff 43.269%)",
                height: "480px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: "96px",
                paddingTop: "96px",
                paddingBottom: "96px",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "489px" }}>
                <AnimatedTitle
                  as="h2"
                  style={{
                    fontSize: "48px",
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
                style={{
                  height: "480px",
                  width: "707px",
                  objectFit: "cover",
                  flexShrink: 0,
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
