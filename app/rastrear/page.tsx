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
      <div style={{ backgroundColor: colors.background.dark }} className="md:pr-8">
        <div style={{ display: "flex", flexDirection: "column" }}>
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
              className="flex flex-col md:flex-row gap-5 md:gap-10"
              style={{
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
              className="relative w-full h-[200px] md:absolute md:right-0 md:top-0 md:bottom-0 md:h-auto md:w-[740px] overflow-hidden pointer-events-none"
            >
              <div
                className="absolute inset-0 bg-contain bg-no-repeat bg-center md:bg-repeat md:w-[1336.61px] md:h-[998px] md:left-[-506px] md:top-[-199px] md:bg-auto"
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
            {/* Features 2x2 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[features.slice(0, 2), features.slice(2, 4)].map((row, rowIdx) => (
                <div key={rowIdx} className="flex flex-col md:flex-row gap-5">
                  {row.map((feature, idx) => (
                    <FadeIn
                      key={feature.title}
                      delay={idx * 0.08}
                      className="p-6 md:p-12 w-full md:flex-1 md:w-auto md:min-w-0"
                      style={{
                        backgroundColor: "#171717",
                        border: "1px solid #272727",
                        borderRadius: "32px",
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
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
              <div className="md:w-[392px]" style={{ display: "flex", flexDirection: "column", gap: "40px", flexShrink: 0 }}>
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
                className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full md:flex-1 md:w-auto md:min-w-0"
                style={{
                }}
              >
                {compatibility.map((item, idx) => (
                  <FadeIn
                    key={item.name}
                    delay={idx * 0.08}
                    className="p-6 md:p-16"
                    style={{
                      backgroundColor: "#171717",
                      border: "1px solid #272727",
                      borderRadius: "32px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "26px",
                    }}
                  >
                    <div
                      className="flex-wrap md:flex-nowrap gap-x-3 gap-y-2 md:gap-0"
                      style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                    >
                      <div className="gap-3 md:gap-5 min-w-0" style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={imgCompatCircle}
                          alt=""
                          className="w-[40px] h-[40px] md:w-[54px] md:h-[54px]"
                          style={{ flexShrink: 0 }}
                        />
                        <p
                          className="text-[20px] md:text-[24px] whitespace-normal md:whitespace-nowrap"
                          style={{
                            fontWeight: 700,
                            fontFamily: "var(--font-linear-grotesk)",
                            color: "#52a4ff",
                            margin: 0,
                          }}
                        >
                          {item.name}
                        </p>
                      </div>
                      <p
                        className="text-[24px] md:text-[32px]"
                        style={{
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
            <div className="flex flex-col md:flex-row gap-6 md:gap-16 md:items-center">
              <div className="order-2 md:order-1 flex flex-col md:flex-row gap-5 w-full md:flex-1 md:w-auto md:min-w-0" style={{ alignItems: "center" }}>
                {screenshots.map((screenshot, idx) => (
                  <FadeIn
                    key={screenshot.title}
                    delay={idx * 0.08}
                    className="w-full flex-none h-[360px] md:[flex:1_0_0] md:h-[560px]"
                    style={{
                      backgroundColor: "#d9d9d9",
                      border: "1px solid #272727",
                      borderRadius: "32px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                    }}
                  >
                    <div
                      className="p-6 md:p-10"
                      style={{
                        backgroundColor: "#171717",
                        border: "1px solid #272727",
                        borderTop: "none",
                        borderBottomLeftRadius: "32px",
                        borderBottomRightRadius: "32px",
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

              <div className="order-1 md:order-2 md:w-[462px] items-center md:items-end text-center md:text-right gap-3 md:gap-10" style={{ display: "flex", flexDirection: "column", flexShrink: 0 }}>
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
                className="text-3xl md:text-[56px]"
                style={{
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

              <div className="flex flex-col md:flex-row gap-5" style={{ width: "100%" }}>
                {/* Crop do Figma (176:9774): viewport 737x590 sobre duas camadas */}
                <div
                  className="w-full md:w-[737px] md:h-[590px] md:flex-shrink-0"
                  style={{
                    position: "relative",
                    aspectRatio: `${737 / 590}`,
                    borderRadius: "32px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={img4em1Bg}
                    alt=""
                    style={{
                      position: "absolute",
                      left: `${(-716 / 737) * 100}%`,
                      top: `${(-371 / 590) * 100}%`,
                      width: `${(1744 / 737) * 100}%`,
                      height: "auto",
                      maxWidth: "none",
                      display: "block",
                    }}
                  />
                  <img
                    src={img4em1Fg}
                    alt=""
                    style={{
                      position: "absolute",
                      left: `${(-362 / 737) * 100}%`,
                      top: `${(-70 / 590) * 100}%`,
                      width: `${(1183 / 737) * 100}%`,
                      height: "auto",
                      maxWidth: "none",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      right: 0,
                      bottom: 0,
                      width: `${(459 / 737) * 100}%`,
                      aspectRatio: `${459 / 128}`,
                      backgroundColor: colors.white,
                      borderTopLeftRadius: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={img4em1Logo}
                      alt="Conor 4 em 1"
                      style={{ width: `${(345 / 459) * 100}%`, height: "auto", display: "block" }}
                    />
                  </div>
                </div>

                <div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full md:flex-1 md:w-auto md:min-w-0"
                  style={{
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
              className="flex flex-col md:flex-row items-center justify-between px-0 pt-10 pb-0 md:pl-24 md:pr-0 md:py-24 gap-8 md:h-[480px]"
              style={{
                background: "linear-gradient(90deg, #6ebbf8, #52a4ff 43.269%)",
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

              <div className="w-full aspect-[722/480] md:aspect-auto md:w-[722px] md:h-[480px]" style={{ flexShrink: 0, position: "relative", overflow: "hidden" }}>
                <img
                  src={imgCtaLayer1}
                  alt=""
                  className="w-[97.92%] h-full top-0 md:w-[707px] md:h-[480px]"
                  style={{ position: "absolute", left: 0, objectFit: "cover" }}
                />
                <img
                  src={imgCtaLayer2}
                  alt=""
                  className="w-full h-[112.31%] top-[-6.16%] md:w-[722px] md:h-[539.093px] md:top-[-29.547px]"
                  style={{ position: "absolute", left: 0, objectFit: "cover" }}
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
