"use client";

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
const imgLogoSeguro = "/icons/logo-conor-seguro-wordmark.svg";
const imgLogoAssist = "/icons/logo-conor-assist-wordmark.svg";
const imgProductSeguro = "/image-fidelizar-seguro.jpg";
const imgProductAssist = "/image-fidelizar-assist.jpg";

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

const products = [
  {
    color: "#ffc301",
    image: imgProductSeguro,
    logo: imgLogoSeguro,
    logoWidth: "184px",
    entrada: "R$3.000",
    mensal: "+ R$600",
    features: [
      { label: "Software 1:", value: "Recuperação veicular;" },
      { label: "Software 2:", value: "Telemetria avançada;" },
      { label: "Software 3:", value: "Homologação STC;" },
      { label: "Software 4:", value: "Associação veicular." },
    ],
  },
  {
    color: "#996cfb",
    image: imgProductAssist,
    logo: imgLogoAssist,
    logoWidth: "166px",
    entrada: "R$3.000",
    mensal: "+ R$600",
    features: [
      { label: "Gestão 1:", value: "Financeira" },
      { label: "Gestão 2:", value: "Administrativa" },
      { label: "Gestão 3:", value: "Estoque" },
    ],
  },
];

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

              <div style={{ display: "flex", gap: "20px", width: "100%" }}>
                {products.map((product, idx) => (
                  <FadeIn
                    key={product.color}
                    delay={idx * 0.08}
                    style={{
                      flex: "1 0 0",
                      borderRadius: "32px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        height: "271px",
                        backgroundImage: `url(${product.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: colors.black,
                        padding: "64px 48px",
                        display: "flex",
                        flex: "1 0 0",
                        flexDirection: "column",
                        gap: "28px",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                        <img src={product.logo} alt="" style={{ width: product.logoWidth, height: "32px" }} />
                        <div style={{ height: "1px", backgroundColor: "#333333", width: "100%" }} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                          <p
                            style={{
                              fontSize: "16px",
                              fontWeight: 700,
                              fontFamily: "var(--font-linear-grotesk)",
                              color: product.color,
                              margin: 0,
                            }}
                          >
                            Ative seu software
                          </p>
                          <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                              <span
                                style={{
                                  fontSize: "32px",
                                  fontWeight: 900,
                                  fontFamily: "var(--font-linear-grotesk)",
                                  color: colors.white,
                                }}
                              >
                                {product.entrada}
                              </span>
                              <span
                                style={{
                                  fontSize: "24px",
                                  fontWeight: 700,
                                  fontFamily: "var(--font-linear-grotesk)",
                                  color: product.color,
                                }}
                              >
                                de entrada
                              </span>
                            </div>
                            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                              <span
                                style={{
                                  fontSize: "32px",
                                  fontWeight: 900,
                                  fontFamily: "var(--font-linear-grotesk)",
                                  color: colors.white,
                                }}
                              >
                                {product.mensal}
                              </span>
                              <span
                                style={{
                                  fontSize: "24px",
                                  fontWeight: 700,
                                  fontFamily: "var(--font-linear-grotesk)",
                                  color: product.color,
                                }}
                              >
                                por mês
                              </span>
                            </div>
                          </div>
                        </div>

                        <ul
                          style={{
                            margin: 0,
                            paddingLeft: "21px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                            fontSize: "14px",
                            fontFamily: "var(--font-roboto)",
                          }}
                        >
                          {product.features.map((feature) => (
                            <li key={feature.label} style={{ color: colors.text.bodyLight, lineHeight: "18px" }}>
                              <span style={{ color: product.color, fontWeight: 700 }}>{feature.label}</span>{" "}
                              {feature.value}
                            </li>
                          ))}
                        </ul>

                        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                          <button
                            style={{
                              backgroundColor: product.color,
                              color: colors.white,
                              border: "none",
                              height: "40px",
                              padding: "0 16px",
                              borderRadius: "4px",
                              fontSize: "14px",
                              fontWeight: 500,
                              fontFamily: "var(--font-roboto)",
                              cursor: "pointer",
                              transition: "opacity 0.3s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                          >
                            Saiba mais
                          </button>
                          <button
                            style={{
                              backgroundColor: "transparent",
                              color: product.color,
                              border: `1px solid ${product.color}`,
                              height: "40px",
                              padding: "0 16px",
                              borderRadius: "4px",
                              fontSize: "14px",
                              fontWeight: 500,
                              fontFamily: "var(--font-roboto)",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                              transition: "opacity 0.3s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                          >
                            <WhatsappIcon color={product.color} />
                            Falar com um vendedor
                          </button>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
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
