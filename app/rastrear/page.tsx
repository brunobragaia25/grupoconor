"use client";

import { Layout } from "@/app/components/Layout";
import { Footer } from "@/app/components/Footer";
import { colors } from "@/app/styles/design-tokens";
import { AnimatedTitle } from "@/app/components/motion/AnimatedTitle";
import { FadeIn } from "@/app/components/motion/FadeIn";

const imgEmergencyShareLarge = "/icons/icon-emergency-share-large.svg";
const imgHeroIllustration = "/image-rastrear-hero.svg";
const imgCtaLayer1 = "/image-rastrear-cta-layer1.svg";
const imgCtaLayer2 = "/image-rastrear-cta-layer2.svg";
const imgSpeedometer = "/icons/icon-speedometer.svg";
const imgShieldWarning = "/icons/icon-shield-warning.svg";
const imgCar = "/icons/icon-car.svg";
const imgMapPinLine = "/icons/icon-map-pin-line.svg";
const imgCompatCircle = "/icons/icon-compat-circle.svg";
const img4em1Bg = "/image-rastrear-4em1-bg.jpg";
const img4em1Fg = "/image-rastrear-4em1-fg.jpg";
const img4em1Logo = "/icon-rastrear-4em1-logo.svg";

const features = [
  {
    icon: imgSpeedometer,
    title: "Telemetria Avançada",
    description:
      "Monitoramento contínuo de dados técnicos do veículo. Acompanhe velocidade, combustível, temperatura e muito mais em tempo real.",
    items: [
      "Monitoramento 24/7 em tempo real",
      "Alertas de velocidade e comportamento",
      "Histórico completo de deslocamentos",
      "Integração com sistemas OBD",
    ],
  },
  {
    icon: imgShieldWarning,
    title: "Furto & Roubo",
    description:
      "Proteção máxima contra furto e roubo. Sistema de detecção de movimento com alertas instantâneos e localização precisa via satélite.",
    items: [
      "Detecção de movimento em repouso",
      "Alertas instantâneos por SMS/Email",
      "Localização por GPS/GNSS precisa",
      "Rastreamento contínuo 24/7",
    ],
  },
  {
    icon: imgCar,
    title: "Associação Veicular",
    description:
      "Associe múltiplos veículos à sua conta e gerencie frota completa. Controle de motoristas, rotas e conformidade regulatória.",
    items: [
      "Gestão de múltiplos veículos",
      "Controle de motoristas e permissões",
      "Análise de rotas e eficiência",
      "Relatórios de conformidade",
    ],
  },
  {
    icon: imgMapPinLine,
    title: "Recuperação Veicular",
    description:
      "Suporte humanizado 24/7 para recuperação rápida em caso de sinistro. Equipe especializada em localização e resgate.",
    items: [
      "Equipe de resposta rápida",
      "Localização precisa e contínua",
      "Suporte humanizado 24/7",
      "Protocolos estabelecidos de resgate",
    ],
  },
];

const compatibility = [
  { name: "Automóveis", percent: "100%", description: "Todos os modelos de passeio, sedans e utilitários" },
  { name: "Caminhões", percent: "100%", description: "Frota pesada, leve e média compatível" },
  { name: "Motos", percent: "95%", description: "Compatível com a maioria dos modelos" },
  { name: "Ônibus", percent: "100%", description: "Solução completa para transporte coletivo" },
];

const screenshots = [
  {
    title: "Mapa em tempo real",
    description:
      "Acompanhe todos os seus veículos em um mapa interativo. Localize, trace rotas e receba alertas em tempo real.",
  },
  {
    title: "Dashboard de Telemetria",
    description:
      "Monitore dados técnicos como velocidade, combustível, temperatura e muito mais para cada veículo.",
  },
];

const whyItems = [
  {
    title: "Tecnologia Satelital",
    description:
      "Cobertura global via satélite com precisão de até 5 metros. Funciona em qualquer lugar, sem dependência de rede celular.",
  },
  {
    title: "Suporte Humanizado",
    description:
      "Equipe treinada 24/7 pronta para ajudar com qualquer emergência ou dúvida sobre o sistema.",
  },
  {
    title: "Histório Detallhado",
    description:
      "Acesso ao histórico completo de movimentação, com mapas interativos e relatórios detalhados de cada deslocamento.",
  },
  {
    title: "Alertas Inteligentes",
    description:
      "Sistema de alertas customizável que notifica você em tempo real sobre eventos importantes do veículo.",
  },
];

export default function Rastrear() {
  return (
    <Layout>
      <div style={{ backgroundColor: colors.background.dark, paddingRight: "32px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
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
                alignItems: "flex-start",
                position: "relative",
                zIndex: 1,
              }}
            >
              <img
                src={imgEmergencyShareLarge}
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
                    { text: "Rastrear ", color: "#bcddfa" },
                    { text: "seu veículo.", color: colors.white },
                  ]}
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
                  Garantimos rastreamento em tempo real via satélite,
                  telemetria avançada e suporte humanizado para sua frota.
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
                  width: "1336.61px",
                  height: "998px",
                  left: "-506px",
                  top: "-199px",
                  backgroundImage: `url(${imgHeroIllustration})`,
                  backgroundSize: "1336.61px 998px",
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
            {/* Features 2x2 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[features.slice(0, 2), features.slice(2, 4)].map((row, rowIdx) => (
                <div key={rowIdx} style={{ display: "flex", gap: "20px" }}>
                  {row.map((feature, idx) => (
                    <FadeIn
                      key={feature.title}
                      delay={idx * 0.08}
                      style={{
                        backgroundColor: "#171717",
                        border: "1px solid #272727",
                        borderRadius: "32px",
                        flex: "1 0 0",
                        padding: "48px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "40px",
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
                        <img src={feature.icon} alt="" style={{ width: "32px", height: "32px" }} />
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
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
                            {feature.title}
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
                            {feature.description}
                          </p>
                        </div>

                        <div style={{ height: "1px", backgroundColor: "#333333", width: "100%" }} />

                        <ul
                          style={{
                            margin: 0,
                            paddingLeft: "18px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                            fontSize: "13px",
                            fontFamily: "var(--font-roboto)",
                          }}
                        >
                          {feature.items.map((item) => (
                            <li key={item} style={{ color: colors.text.bodyLight }}>
                              <span style={{ color: "#52a4ff" }}>✓</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              ))}
            </div>

            {/* Compatibilidade de Veículos */}
            <div style={{ display: "flex", gap: "64px", alignItems: "flex-start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "40px", width: "392px", flexShrink: 0 }}>
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
                  Compatibilidade de Veículos
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
                  Solução compatível com praticamente todos os tipos de veículos
                </p>
              </div>

              <div
                style={{
                  flex: "1 0 0",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                }}
              >
                {compatibility.map((item, idx) => (
                  <FadeIn
                    key={item.name}
                    delay={idx * 0.08}
                    style={{
                      backgroundColor: "#171717",
                      border: "1px solid #272727",
                      borderRadius: "32px",
                      padding: "64px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "26px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                        <img src={imgCompatCircle} alt="" style={{ width: "54px", height: "54px" }} />
                        <p
                          style={{
                            fontSize: "24px",
                            fontWeight: 700,
                            fontFamily: "var(--font-linear-grotesk)",
                            color: "#52a4ff",
                            margin: 0,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {item.name}
                        </p>
                      </div>
                      <p
                        style={{
                          fontSize: "32px",
                          fontWeight: 900,
                          fontFamily: "var(--font-linear-grotesk)",
                          color: "#52a4ff",
                          margin: 0,
                        }}
                      >
                        {item.percent}
                      </p>
                    </div>
                    <p
                      style={{
                        fontSize: "14px",
                        fontFamily: "var(--font-roboto)",
                        color: colors.text.bodyLight,
                        margin: 0,
                        lineHeight: "24px",
                      }}
                    >
                      {item.description}
                    </p>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Veja a plataforma em ação */}
            <div style={{ display: "flex", gap: "64px", alignItems: "center" }}>
              <div style={{ display: "flex", flex: "1 0 0", gap: "20px", alignItems: "center" }}>
                {screenshots.map((screenshot, idx) => (
                  <FadeIn
                    key={screenshot.title}
                    delay={idx * 0.08}
                    style={{
                      backgroundColor: "#d9d9d9",
                      border: "1px solid #272727",
                      borderRadius: "32px",
                      flex: "1 0 0",
                      height: "560px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#171717",
                        border: "1px solid #272727",
                        borderTop: "none",
                        borderBottomLeftRadius: "32px",
                        borderBottomRightRadius: "32px",
                        padding: "40px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "20px",
                          fontWeight: 700,
                          fontFamily: "var(--font-linear-grotesk)",
                          color: colors.white,
                          margin: 0,
                          lineHeight: "30px",
                        }}
                      >
                        {screenshot.title}
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
                        {screenshot.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "40px", width: "462px", flexShrink: 0, alignItems: "flex-end", textAlign: "right" }}>
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
                  Veja a plataforma em ação
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
                  Interface intuitiva para monitoramento em tempo real
                </p>
              </div>
            </div>

            {/* Porque escolher Conor 4 em 1 */}
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
                {[
                  "Porque escolher ",
                  { text: "Conor 4 em 1?", color: "#36c5f0", weight: 900 },
                ]}
              </AnimatedTitle>

              <div style={{ display: "flex", gap: "20px", width: "100%" }}>
                <div
                  style={{
                    flex: "1 0 0",
                    height: "590px",
                    position: "relative",
                    borderRadius: "32px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: "1744px",
                      height: "974px",
                      left: "-716px",
                      top: "-371px",
                      backgroundImage: `url(${img4em1Bg})`,
                      backgroundSize: "1744px 974px",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      width: "1183px",
                      height: "660px",
                      left: "-362px",
                      top: "-70px",
                      backgroundImage: `url(${img4em1Fg})`,
                      backgroundSize: "1183px 660px",
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
                    <img src={img4em1Logo} alt="Conor 4 em 1" style={{ width: "345px", height: "64px" }} />
                  </div>
                </div>

                <div
                  style={{
                    flex: "1 0 0",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                  }}
                >
                  {whyItems.map((item, idx) => (
                    <FadeIn
                      key={item.title}
                      delay={idx * 0.08}
                      style={{
                        backgroundColor: "#171717",
                        border: "1px solid #272727",
                        borderRadius: "32px",
                        padding: "64px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "26px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "24px",
                          fontWeight: 700,
                          fontFamily: "var(--font-linear-grotesk)",
                          color: "#36c5f0",
                          margin: 0,
                        }}
                      >
                        {item.title}
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
                        {item.description}
                      </p>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Final */}
            <div
              style={{
                background: "linear-gradient(90deg, #6ebbf8, #52a4ff 43.269%)",
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
                  Comece a rastrear sua frota agora.
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
                  Tenha visibilidade total da sua operação com tecnologia de
                  rastreamento em tempo real e suporte 24/7.
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

              <div style={{ width: "722px", height: "480px", flexShrink: 0, position: "relative", overflow: "hidden" }}>
                <img
                  src={imgCtaLayer1}
                  alt=""
                  style={{ position: "absolute", left: 0, top: 0, width: "707px", height: "480px" }}
                />
                <img
                  src={imgCtaLayer2}
                  alt=""
                  style={{ position: "absolute", left: 0, top: "-29.547px", width: "722px", height: "539.093px" }}
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
