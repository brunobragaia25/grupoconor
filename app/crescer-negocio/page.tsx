"use client";

import { Layout } from "@/app/components/Layout";
import { Footer } from "@/app/components/Footer";
import { colors } from "@/app/styles/design-tokens";
import { AnimatedTitle } from "@/app/components/motion/AnimatedTitle";
import { FadeIn } from "@/app/components/motion/FadeIn";

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
      <div style={{ backgroundColor: colors.background.dark, paddingRight: "32px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Hero */}
          <div
            style={{
              backgroundColor: "#fa7a22",
              minHeight: "560px",
              display: "flex",
              alignItems: "center",
              paddingLeft: "80px",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div style={{ display: "flex", gap: "80px", alignItems: "center", width: "100%", position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", gap: "40px", alignItems: "flex-start", flex: "1 0 0" }}>
                <img src={imgLoupeLarge} alt="" style={{ width: "64px", height: "64px", flexShrink: 0 }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "20px", flex: "1 0 0" }}>
                  <AnimatedTitle
                    as="h1"
                    style={{
                      fontSize: "56px",
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

              <div style={{ width: "740px", height: "620px", flexShrink: 0, overflow: "hidden", position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    width: "742px",
                    height: "742px",
                    left: "-2px",
                    top: "-96px",
                    backgroundImage: `url(${imgHeroIllustration})`,
                    backgroundSize: "742px 742px",
                  }}
                />
              </div>
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
            {/* Oportunidades de negócio */}
            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", textAlign: "center", alignItems: "center" }}>
                <AnimatedTitle
                  as="h2"
                  style={{
                    fontSize: "48px",
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

              <div style={{ display: "flex", gap: "20px" }}>
                {opportunityStats.map((stat, idx) => (
                  <FadeIn
                    key={stat.label}
                    delay={idx * 0.08}
                    style={{
                      flex: 1,
                      backgroundColor: "#171717",
                      border: "1px solid #272727",
                      borderRadius: "32px",
                      padding: "48px",
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
                  style={{
                    fontSize: "48px",
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

              <div style={{ display: "flex", gap: "20px" }}>
                {pillars.map((pillar, idx) => (
                  <FadeIn
                    key={pillar.title}
                    delay={idx * 0.06}
                    style={{
                      flex: 1,
                      backgroundColor: pillar.highlight ? "#fa7a22" : "#171717",
                      border: pillar.highlight ? "none" : "1px solid #272727",
                      borderRadius: "24px",
                      padding: "32px 24px",
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
                  style={{
                    fontSize: "48px",
                    fontWeight: 700,
                    fontFamily: "var(--font-linear-grotesk)",
                    color: colors.white,
                    margin: 0,
                  }}
                >
                  {["Cresça. Fidelize. ", { text: "Lucre.", color: "#fa7a22" }]}
                </AnimatedTitle>
              </div>

              <div style={{ display: "flex", gap: "20px" }}>
                {products.map((product, idx) => (
                  <FadeIn
                    key={product.title}
                    delay={idx * 0.08}
                    style={{
                      flex: 1,
                      borderRadius: "32px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        height: "180px",
                        backgroundImage: `url(${product.cardImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: colors.black,
                        padding: "40px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        flex: 1,
                      }}
                    >
                      <img src={product.logo} alt="" style={{ width: `${product.logoWidth}px`, height: "32px" }} />
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
                          transition: "opacity 0.3s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                      >
                        {product.buttonLabel}
                      </button>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Prova social */}
            <div style={{ display: "flex", gap: "20px" }}>
              <FadeIn
                style={{
                  flex: 1,
                  backgroundColor: "#fa7a22",
                  borderRadius: "32px",
                  height: "260px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ margin: 0, fontSize: "56px", fontWeight: 900, fontFamily: "var(--font-linear-grotesk)", color: colors.white }}>
                  +80 mil
                </p>
                <p style={{ margin: 0, fontSize: "24px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.white }}>
                  veículos rastreados
                </p>
              </FadeIn>
              <FadeIn
                delay={0.08}
                style={{
                  flex: 1,
                  backgroundColor: "#fa7a22",
                  borderRadius: "32px",
                  height: "260px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ margin: 0, fontSize: "56px", fontWeight: 900, fontFamily: "var(--font-linear-grotesk)", color: colors.white }}>
                  +350
                </p>
                <p style={{ margin: 0, fontSize: "24px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.white }}>
                  clientes em todo Brasil
                </p>
              </FadeIn>
              <FadeIn
                delay={0.16}
                style={{
                  flex: 1,
                  backgroundColor: "#fa7a22",
                  borderRadius: "32px",
                  height: "260px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ margin: 0, fontSize: "56px", fontWeight: 900, fontFamily: "var(--font-linear-grotesk)", color: colors.white }}>
                  Nota 10
                </p>
                <p style={{ margin: 0, fontSize: "24px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.white }}>
                  NPS para o suporte
                </p>
              </FadeIn>
            </div>

            {/* CTA Final */}
            <div
              style={{
                backgroundColor: "#fa7a22",
                height: "480px",
                boxSizing: "border-box",
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
                <div style={{ display: "flex", gap: "16px" }}>
                  <button
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
                    Vamos juntos crescer
                  </button>
                  <button
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

              <div style={{ width: "722px", height: "480px", flexShrink: 0, position: "relative", overflow: "hidden" }}>
                <div
                  style={{
                    position: "absolute",
                    width: "722px",
                    height: "539.093px",
                    left: 0,
                    top: "-29.547px",
                    backgroundImage: `url(${imgCtaIllustrationBack})`,
                    backgroundSize: "722px 539.093px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    width: "722px",
                    height: "722px",
                    left: 0,
                    top: "-68.688px",
                    backgroundImage: `url(${imgCtaIllustrationFront})`,
                    backgroundSize: "722px 722px",
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
