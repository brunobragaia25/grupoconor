"use client";

import { Layout } from "@/app/components/Layout";
import { Footer } from "@/app/components/Footer";
import { colors } from "@/app/styles/design-tokens";
import { AnimatedTitle } from "@/app/components/motion/AnimatedTitle";
import { FadeIn } from "@/app/components/motion/FadeIn";
import { CroppedIllustration } from "@/app/components/CroppedIllustration";

const brand = "#40c6ee";

const imgLogoWordmark = "/icons/logo-conor-4em1-wordmark-large.svg";
const imgHeroIllustration = "/image-conor-4em1-hero.jpg";
const imgCtaIllustration = "/image-conor-4em1-cta.svg";

const iconRecuperacaoVeicular = "/icons/icon-map-pin-line.svg";
const iconTelemetriaAvancada = "/icons/icon-speedometer.svg";
const iconFurtoRoubo = "/icons/icon-shield-warning.svg";
const iconAssociacaoVeicular = "/icons/icon-shield-check.svg";

const stats = [
  { value: "4", label: "Funcionalidades incluídas" },
  { value: "30s", label: "Atualização de posição" },
  { value: "24h", label: "Monitoramento contínuo" },
  { value: "100%", label: "Telemedicina ilimitada" },
];

const funcionalidades = [
  {
    title: "Recuperação Veicular",
    icon: iconRecuperacaoVeicular,
    description:
      "Sistema integrado com autoridades para rastreamento e recuperação de veículos furtados ou roubados. Tempo médio de recuperação abaixo da média nacional.",
    items: [
      "Central de monitoramento 24h",
      "Integração com Polícia Civil e Militar",
      "Bloqueio remoto do veículo",
      "Histórico completo de percurso",
    ],
  },
  {
    title: "Telemetria Avançada",
    icon: iconTelemetriaAvancada,
    description:
      "Dados em tempo real sobre o comportamento do veículo e do motorista. Reduza acidentes, custos de manutenção e consumo de combustível.",
    items: [
      "Velocidade e aceleração em tempo real",
      "Monitoramento de frenagem brusca",
      "Consumo de combustível estimado",
      "Relatórios de comportamento do motorista",
    ],
  },
  {
    title: "Furto & Roubo",
    icon: iconFurtoRoubo,
    description:
      "Alertas imediatos em caso de movimentação suspeita, saída de cerca virtual ou acionamento do botão de pânico pelo motorista.",
    items: [
      "Alerta de cerca virtual",
      "Botão de pânico integrado",
      "Notificação imediata por SMS e app",
      "Rastreamento em modo emergência",
    ],
  },
  {
    title: "Associação Veicular",
    icon: iconAssociacaoVeicular,
    description:
      "Sua central pode se associar a redes de proteção veicular e oferecer esse serviço aos clientes como uma camada extra de cobertura.",
    items: [
      "Cobertura contra furto e roubo",
      "Indenização por sinistro",
      "Sem vistoria obrigatória",
      "Mensalidades a partir de R$59,90",
    ],
  },
];

export default function Conor4Em1() {
  return (
    <Layout>
      <div style={{ backgroundColor: colors.background.dark }} className="md:pr-8">
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Hero */}
          <div
            style={{
              backgroundImage:
                "linear-gradient(108deg, #1b1b1b 14.965%, #000000 48.897%, #40c6ee 106.9%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
            className="px-6 py-16 md:px-20 md:py-[120px]"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                alignItems: "center",
                maxWidth: "1182px",
              }}
            >
              <img src={imgLogoWordmark} alt="Conor 4 em 1" style={{ height: "59px", maxWidth: "100%" }} />
              <p
                style={{
                  fontWeight: 700,
                  fontFamily: "var(--font-linear-grotesk)",
                  color: colors.white,
                  margin: 0,
                  lineHeight: "normal",
                  textAlign: "center",
                }}
                className="text-3xl md:text-[64px]"
              >
                Garantimos rastreamento em tempo real via satélite,
                telemetria avançada e suporte humanizado para sua central de
                monitoramento.
              </p>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "rgba(36, 36, 36, 0.75)",
              borderTopRightRadius: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "96px",
            }}
            className="px-6 py-16 md:px-24 md:py-24"
          >
            {/* Investimento + Stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div className="flex flex-col md:flex-row gap-5">
                <div
                  style={{
                    borderRadius: "32px",
                    overflow: "hidden",
                    backgroundImage: `url(${imgHeroIllustration})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    flexShrink: 0,
                  }}
                  className="w-full md:w-[45%] h-64 md:h-auto"
                />

                <div
                  style={{
                    backgroundColor: colors.black,
                    borderRadius: "32px",
                    flex: "1 0 auto", width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "24px",
                  }}
                  className="p-8 md:p-16"
                >
                  <p
                    style={{
                      fontSize: "14px",
                      fontFamily: "var(--font-roboto)",
                      color: colors.text.bodyLight,
                      margin: 0,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Plano padrão
                  </p>

                  <div style={{ height: "1px", backgroundColor: "#333333", width: "100%" }} />

                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <p
                        style={{
                          fontWeight: 700,
                          fontFamily: "var(--font-linear-grotesk)",
                          color: brand,
                          margin: 0,
                          lineHeight: "normal",
                        }}
                        className="text-4xl md:text-[64px]"
                      >
                        R$3.000
                      </p>
                      <p
                        style={{
                          fontSize: "20px",
                          fontFamily: "var(--font-roboto)",
                          color: colors.text.bodyLight,
                          margin: 0,
                        }}
                      >
                        de entrada
                      </p>
                    </div>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                      <p
                        style={{
                          fontSize: "32px",
                          fontWeight: 600,
                          fontFamily: "var(--font-linear-grotesk)",
                          color: colors.white,
                          margin: 0,
                        }}
                      >
                        + R$600
                      </p>
                      <p
                        style={{
                          fontSize: "20px",
                          fontFamily: "var(--font-roboto)",
                          color: colors.text.bodyLight,
                          margin: 0,
                        }}
                      >
                        por mês
                      </p>
                    </div>
                  </div>

                  <p style={{ fontSize: "13px", fontFamily: "var(--font-roboto)", color: colors.text.bodyLight, margin: 0 }}>
                    * Tabela diferenciada disponível para parceiros e volumes acima de 50 unidades.
                  </p>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "rgba(64, 198, 238, 0.2)",
                  borderRadius: "32px",
                  overflow: "hidden",
                  display: "flex",
                }}
                className="flex-col sm:flex-row"
              >
                {stats.map((s, idx) => (
                  <FadeIn
                    key={s.label}
                    delay={idx * 0.08}
                    style={{
                      backgroundColor: colors.black,
                      flex: "1 0 auto", width: "100%",
                      padding: "40px 32px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      alignItems: "center",
                      textAlign: "center",
                      borderLeft: idx > 0 ? "1px solid rgba(64, 198, 238, 0.2)" : "none",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        fontFamily: "var(--font-linear-grotesk)",
                        color: brand,
                        lineHeight: "normal",
                      }}
                      className="text-3xl md:text-[48px]"
                    >
                      {s.value}
                    </span>
                    <span
                      style={{
                        fontSize: "14px",
                        fontFamily: "var(--font-roboto)",
                        color: colors.text.bodyLight,
                      }}
                    >
                      {s.label}
                    </span>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Planos */}
            <div className="flex flex-col md:flex-row gap-10">
              <div
                style={{
                  flex: "1 0 auto", width: "100%",
                  backgroundColor: colors.black,
                  border: "1px solid rgba(64, 198, 238, 0.2)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    backgroundImage:
                      "linear-gradient(115deg, #1b1b1b 14.965%, #000000 48.897%, #3f3f3f 106.9%)",
                    padding: "32px 40px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <p style={{ margin: 0, fontSize: "32px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.white }}>
                    Plano Padrão
                  </p>
                  <p style={{ margin: 0, fontSize: "14px", color: colors.text.bodyLight, fontFamily: "var(--font-roboto)", textTransform: "uppercase" }}>
                    Para centrais já estabelecidas que querem o sistema completo.
                  </p>
                </div>
                <div style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "40px", flex: "1 0 auto", width: "100%" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <p style={{ margin: 0, fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: brand, lineHeight: "normal" }} className="text-4xl md:text-[56px]">
                      R$3.000
                    </p>
                    <p style={{ margin: 0, fontSize: "18px", fontFamily: "var(--font-roboto)", color: colors.white }}>
                      R$600/mês
                    </p>
                  </div>
                  <button
                    style={{
                      width: "100%",
                      height: "48px",
                      backgroundColor: "transparent",
                      color: colors.white,
                      border: `1px solid ${brand}`,
                      borderRadius: "999px",
                      fontSize: "14px",
                      fontWeight: 700,
                      cursor: "pointer",
                      fontFamily: "var(--font-roboto)",
                      letterSpacing: "1px",
                      transition: "opacity 0.3s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    COMPRAR AGORA
                  </button>
                </div>
              </div>

              <div
                style={{
                  flex: "1 0 auto", width: "100%",
                  backgroundColor: colors.black,
                  border: "1px solid rgba(64, 198, 238, 0.2)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    backgroundImage:
                      "linear-gradient(115deg, #1b1b1b 14.965%, #000000 48.897%, #40c6ee 106.9%)",
                    padding: "32px 40px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <p style={{ margin: 0, fontSize: "32px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.white }}>
                    Combo Iniciante
                  </p>
                  <p style={{ margin: 0, fontSize: "14px", color: colors.text.bodyLight, fontFamily: "var(--font-roboto)", textTransform: "uppercase" }}>
                    Inclui 10 rastreadores + chips + software. Ideal para quem está começando.
                  </p>
                </div>
                <div style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "40px", flex: "1 0 auto", width: "100%" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <p style={{ margin: 0, fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: brand, lineHeight: "normal" }} className="text-4xl md:text-[56px]">
                      R$2.500
                    </p>
                    <p style={{ margin: 0, fontSize: "18px", fontFamily: "var(--font-roboto)", color: colors.white }}>
                      R$35,90/rastreador/mês
                    </p>
                  </div>
                  <button
                    style={{
                      width: "100%",
                      height: "48px",
                      backgroundColor: brand,
                      color: colors.black,
                      border: "none",
                      borderRadius: "999px",
                      fontSize: "14px",
                      fontWeight: 700,
                      cursor: "pointer",
                      fontFamily: "var(--font-roboto)",
                      letterSpacing: "1px",
                      transition: "opacity 0.3s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    COMPRAR COMBO
                  </button>
                </div>
              </div>
            </div>

            {/* As 4 funcionalidades */}
            <div style={{ display: "flex", flexDirection: "column", gap: "40px", alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center", textAlign: "center" }}>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    fontFamily: "var(--font-roboto)",
                    color: brand,
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    margin: 0,
                  }}
                >
                  Tudo em um único sistema
                </p>
                <div className="text-3xl md:text-[48px]">
                  <AnimatedTitle
                    as="h2"
                    style={{
                      fontWeight: 900,
                      fontFamily: "var(--font-linear-grotesk)",
                      color: colors.white,
                      margin: 0,
                    }}
                  >
                    As 4 funcionalidades
                  </AnimatedTitle>
                </div>
                <p
                  style={{
                    fontSize: "16px",
                    fontFamily: "var(--font-roboto)",
                    color: colors.text.bodyLight,
                    margin: 0,
                  }}
                >
                  Cada funcionalidade foi desenvolvida para atender as
                  principais demandas do mercado de rastreamento.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[funcionalidades.slice(0, 2), funcionalidades.slice(2, 4)].map((row, rowIdx) => (
                  <div key={rowIdx} className="flex flex-col sm:flex-row gap-5">
                    {row.map((f, idx) => (
                      <FadeIn
                        key={f.title}
                        delay={idx * 0.08}
                        style={{
                          backgroundColor: "#171717",
                          border: "1px solid #272727",
                          borderRadius: "32px",
                          flex: "1 0 auto", width: "100%",
                          padding: "48px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          gap: "40px",
                        }}
                      >
                        <div
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "12px",
                            backgroundColor: brand,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img src={f.icon} alt="" style={{ width: "26px", height: "26px" }} />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            <p
                              style={{
                                fontSize: "24px",
                                fontWeight: 700,
                                fontFamily: "var(--font-linear-grotesk)",
                                color: brand,
                                margin: 0,
                              }}
                            >
                              {f.title}
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
                              {f.description}
                            </p>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "10px",
                              borderTop: "1px solid rgba(255, 255, 255, 0.07)",
                              paddingTop: "21px",
                            }}
                          >
                            {f.items.map((item) => (
                              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                <span style={{ color: brand, fontSize: "13px", fontWeight: 700 }}>✓</span>
                                <span style={{ fontSize: "13px", fontFamily: "var(--font-roboto)", color: colors.white }}>
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div
            style={{
              backgroundColor: brand,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
            }}
            className="flex-col md:flex-row px-6 py-10 md:px-24 md:py-0 md:h-[480px] gap-8 md:gap-0"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div className="text-3xl md:text-[48px]">
                  <AnimatedTitle
                    as="h2"
                    style={{
                      fontWeight: 700,
                      fontFamily: "var(--font-linear-grotesk)",
                      color: colors.white,
                      margin: 0,
                      lineHeight: "1.1",
                    }}
                  >
                    {["O essencial do rastreamento em ", { text: "um único sistema", weight: 900 }]}
                  </AnimatedTitle>
                </div>
                <p
                  style={{
                    fontSize: "16px",
                    fontFamily: "var(--font-roboto)",
                    color: colors.white,
                    margin: 0,
                    lineHeight: "28px",
                    maxWidth: "468px",
                  }}
                >
                  R$3.000 de entrada + R$600 por mês. Ou monte o combo
                  iniciante com hardware incluso.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-5">
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "56px",
                    backgroundColor: "transparent",
                    color: colors.white,
                    border: `1px solid ${colors.white}`,
                    borderRadius: "999px",
                    fontSize: "15px",
                    fontWeight: 700,
                    cursor: "pointer",
                    fontFamily: "var(--font-roboto)",
                    transition: "opacity 0.3s",
                    padding: "0 49px",
                    letterSpacing: "1.5px",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  COMPRAR AGORA
                </button>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "56px",
                    backgroundColor: colors.white,
                    color: brand,
                    border: "none",
                    borderRadius: "999px",
                    fontSize: "15px",
                    fontWeight: 700,
                    cursor: "pointer",
                    fontFamily: "var(--font-roboto)",
                    transition: "opacity 0.3s",
                    padding: "0 48px",
                    letterSpacing: "1.5px",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  COMPRAR COMBO
                </button>
              </div>
            </div>

            <CroppedIllustration
              src={imgCtaIllustration}
              alt=""
              aspectRatio={904 / 480}
              objectPosition="31% 28%"
              className="w-full md:absolute md:right-0 md:top-0 md:bottom-0 md:w-[904px] md:h-full"
              style={{ pointerEvents: "none" }}
            />
          </div>
        </div>

        <Footer />
      </div>
    </Layout>
  );
}
