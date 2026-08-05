"use client";

import { Layout } from "@/app/components/Layout";
import { Footer } from "@/app/components/Footer";
import { colors } from "@/app/styles/design-tokens";
import { AnimatedTitle } from "@/app/components/motion/AnimatedTitle";
import { FadeIn } from "@/app/components/motion/FadeIn";
import { CroppedIllustration } from "@/app/components/CroppedIllustration";

const brand = "#996cfb";

const imgLogoWordmark = "/icons/logo-conor-assist-wordmark-large.svg";
const imgHeroIllustration = "/image-conor-assist-hero.jpg";
const imgCtaIllustration = "/image-conor-assist-cta.svg";

const iconCar = "/icons/icon-car.svg";
const iconGearSix = "/icons/icon-gear-six.svg";
const iconHeadset = "/icons/icon-headset.svg";
const iconGift = "/icons/icon-gift.svg";
const iconServiceHeadset = "/icons/icon-service-headset.svg";
const iconWhatsapp = "/icons/icon-whatsapp-orange.svg";
const iconCompatCircle = "/icons/icon-compat-circle.svg";
const iconBrowsers = "/icons/icon-browsers.svg";

const stats = [
  { value: "24h", label: "Atendimento contínuo" },
  { value: "100%", label: "Digital e sem papel" },
  { value: "R$0", label: "Franquia nos acionamentos" },
  { value: "∞", label: "Telemedicina ilimitada" },
];

const planoItens = [
  "Assistência veicular 24h para os clientes da sua central",
  "Assistência residencial para os segurados",
  "Telemedicina ilimitada para toda a família",
  "Orientação jurídica por telefone",
  "Clube de benefícios e descontos exclusivos",
  "Programa de pontos e recompensas",
  "Suporte técnico para sua equipe operacional",
  "Relatórios mensais de utilização",
];

const escopo = [
  {
    title: "Assistência Veicular",
    description:
      "Guincho, pane seca, troca de pneu, chaveiro e socorro mecânico para os veículos rastreados pelos seus clientes.",
    icon: iconCar,
  },
  {
    title: "Assistência Residencial",
    description:
      "Eletricista, encanador, chaveiro e vidraceiro para emergências no imóvel dos segurados.",
    icon: iconGearSix,
  },
  {
    title: "Telemedicina",
    description:
      "Consultas por videochamada com médicos especialistas, sem limite de uso, para o segurado e dependentes.",
    icon: iconHeadset,
  },
  {
    title: "Clube de Benefícios",
    description:
      "Descontos em farmácias, academias, restaurantes e lojas parceiras em todo o Brasil.",
    icon: iconGift,
  },
];

const canais = [
  {
    title: "Central Telefônica",
    description:
      "Atendimento via 0800 disponível 24h por dia, 7 dias por semana, para seus clientes acionarem qualquer serviço.",
    icon: iconServiceHeadset,
  },
  {
    title: "WhatsApp",
    description:
      "Canal direto via WhatsApp para solicitação rápida de assistência e acompanhamento em tempo real.",
    icon: iconWhatsapp,
  },
  {
    title: "Aplicativo Mobile",
    description:
      "App disponível para iOS e Android onde o cliente aciona serviços, acompanha o status e acessa o clube de benefícios.",
    icon: iconCompatCircle,
  },
  {
    title: "Portal Web",
    description:
      "Painel exclusivo para gestores da central acompanhar acionamentos, relatórios e performance do serviço.",
    icon: iconBrowsers,
  },
];

const sla = [
  { label: "Acionamento veicular urbano", value: "Até 60 min" },
  { label: "Acionamento veicular rodovia", value: "Até 90 min" },
  { label: "Acionamento residencial", value: "Até 2 horas" },
  { label: "Consulta médica telemedicina", value: "Imediato" },
  { label: "Retorno de atendimento", value: "Até 10 min" },
  { label: "Relatório mensal", value: "Todo dia 5" },
];

export default function ConorAssist() {
  return (
    <Layout>
      <div style={{ backgroundColor: colors.background.dark }} className="md:pr-8">
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Hero */}
          <div
            style={{
              backgroundImage:
                "linear-gradient(108deg, #1b1b1b 14.965%, #000000 48.897%, #996cfb 106.9%)",
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
              <img src={imgLogoWordmark} alt="Conor Assist" style={{ height: "62px", maxWidth: "100%" }} />
              <div className="text-3xl md:text-[64px]">
                <AnimatedTitle
                  as="p"
                  style={{
                    fontWeight: 700,
                    fontFamily: "var(--font-linear-grotesk)",
                    color: colors.white,
                    margin: 0,
                    lineHeight: "normal",
                    textAlign: "center",
                  }}
                >
                  Assistência 24h + Benefícios para sua empresa de
                  rastreamento. Ofereça mais valor aos seus clientes sem
                  aumentar sua estrutura.
                </AnimatedTitle>
              </div>
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
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "24px",
                  }}
                  className="p-8 md:p-16 w-full md:flex-1 md:w-auto md:min-w-0"
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
                    Investimento
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
                        R$1.000
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
                        + R$550
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

                  <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                    {["Preço fixo", "Para centrais de rastreamento", "Atendimento em todo Brasil"].map((b) => (
                      <span
                        key={b}
                        style={{
                          fontSize: "14px",
                          fontFamily: "var(--font-roboto)",
                          color: colors.white,
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <span style={{ color: brand, fontWeight: 700 }}>✓</span> {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "rgba(153, 108, 251, 0.2)",
                  borderRadius: "32px",
                  overflow: "hidden",
                  display: "flex",
                }}
                className="flex-col sm:flex-row"
              >
                {stats.map((s, idx) => (
                  <FadeIn className="w-full md:flex-1 md:w-auto md:min-w-0"
                    key={s.label}
                    delay={idx * 0.08}
                    style={{
                      backgroundColor: colors.black,
                      padding: "40px 32px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      alignItems: "center",
                      textAlign: "center",
                      borderLeft: idx > 0 ? "1px solid rgba(153, 108, 251, 0.2)" : "none",
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

            {/* O que está incluído no plano */}
            <div
              style={{
                backgroundColor: colors.black,
                borderRadius: "32px",
                display: "flex",
                gap: "40px",
              }}
              className="flex-col md:flex-row p-8 md:p-20"
            >
              <div className="w-full md:flex-1 md:w-auto md:min-w-0" style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                <div>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      fontFamily: "var(--font-roboto)",
                      color: brand,
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      margin: "0 0 10px 0",
                    }}
                  >
                    Plano completo
                  </p>
                  <h2
                    style={{
                      fontWeight: 700,
                      fontFamily: "var(--font-linear-grotesk)",
                      color: colors.white,
                      margin: 0,
                      lineHeight: "1.1",
                    }}
                    className="text-3xl md:text-[48px]"
                  >
                    O que está
                    <br />
                    incluído no plano
                  </h2>
                  <p
                    style={{
                      fontSize: "16px",
                      fontFamily: "var(--font-roboto)",
                      color: colors.text.bodyLight,
                      margin: "12px 0 0 0",
                      lineHeight: "26px",
                    }}
                  >
                    Tudo que sua central precisa para oferecer um serviço
                    completo e diferenciado aos seus clientes.
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  {planoItens.map((item, idx) => (
                    <FadeIn
                      key={item}
                      delay={idx * 0.08}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        padding: "12px 0",
                      }}
                    >
                      <div
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "14px",
                          backgroundColor: "rgba(153, 108, 251, 0.13)",
                          border: `1px solid ${brand}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <span style={{ color: brand, fontSize: "13px", fontWeight: 700 }}>✓</span>
                      </div>
                      <span style={{ fontSize: "15px", fontFamily: "var(--font-roboto)", color: colors.white }}>
                        {item}
                      </span>
                    </FadeIn>
                  ))}
                </div>
              </div>

              <div className="w-full md:flex-1 md:w-auto md:min-w-0"
                style={{
                  backgroundColor: colors.black,
                  border: "1px solid rgba(153, 108, 251, 0.2)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    backgroundImage:
                      "linear-gradient(115deg, #1b1b1b 14.965%, #000000 48.897%, #996cfb 106.9%)",
                    padding: "32px 40px",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: "12px",
                      color: colors.text.bodyLight,
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      fontFamily: "var(--font-roboto)",
                    }}
                  >
                    Conor ASSIST
                  </p>
                  <p
                    style={{
                      margin: "8px 0 0 0",
                      fontSize: "32px",
                      fontWeight: 700,
                      fontFamily: "var(--font-linear-grotesk)",
                      color: colors.white,
                    }}
                  >
                    Plano Centrais de Rastreamento
                  </p>
                </div>
                <div className="w-full md:flex-1 md:w-auto md:min-w-0"
                  style={{
                    padding: "40px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "center" }}>
                    <p style={{ margin: 0, fontSize: "13px", color: colors.text.bodyLight, fontFamily: "var(--font-roboto)" }}>
                      A partir de
                    </p>
                    <p style={{ margin: 0, fontSize: "36px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: brand }}>
                      R$350<span style={{ fontSize: "16px", color: colors.text.bodyLight, fontWeight: 400, fontFamily: "var(--font-roboto)" }}>/mês</span>
                    </p>
                    <p style={{ margin: 0, fontSize: "14px", color: colors.text.bodyLight, fontFamily: "var(--font-roboto)" }}>
                      + R$1.000 de entrada
                    </p>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {["Sem carência", "Sem mínimo de vidas", "Preço fixo mensal", "Suporte dedicado"].map((f) => (
                      <div key={f} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ color: brand, fontWeight: 700 }}>✓</span>
                        <span style={{ fontSize: "14px", fontFamily: "var(--font-roboto)", color: colors.white }}>{f}</span>
                      </div>
                    ))}
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
                    MONTAR PEDIDO
                  </button>
                </div>
              </div>
            </div>

            {/* Escopo do atendimento */}
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
                  Escopo do atendimento
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
                    O que sua central oferece
                  </AnimatedTitle>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 w-full">
                {escopo.map((c, idx) => (
                  <FadeIn className="w-full md:flex-1 md:w-auto md:min-w-0"
                    key={c.title}
                    delay={idx * 0.08}
                    style={{
                      backgroundColor: "#171717",
                      border: "1px solid #272727",
                      borderRadius: "32px",
                      padding: "48px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: "40px",
                    }}
                  >
                    <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: brand, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img src={c.icon} alt="" style={{ width: "26px", height: "26px" }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                      <div style={{ width: "40px", height: "3px", backgroundColor: brand, borderRadius: "2px" }} />
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
                          {c.title}
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
                          {c.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>

          {/* Canais de Suporte */}
          <div style={{ backgroundColor: colors.black }} className="px-6 py-16 md:p-24">
            <div className="flex flex-col md:flex-row gap-10 md:gap-24 md:items-start">
              <div style={{ display: "flex", flexDirection: "column", gap: "24px", flexShrink: 0 }} className="md:w-[462px]">
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
                  Múltiplos canais
                </p>
                <AnimatedTitle
                  as="h2"
                  style={{
                    fontWeight: 700,
                    fontFamily: "var(--font-linear-grotesk)",
                    color: colors.white,
                    margin: 0,
                  }}
                  className="text-3xl md:text-[48px]"
                >
                  {["Canais de ", { text: "Suporte", color: brand }]}
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
                  Seus clientes escolhem como querem ser atendidos. Todos os
                  canais integrados em um único sistema de gestão.
                </p>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    backgroundColor: "rgba(153, 108, 251, 0.13)",
                    border: "1px solid rgba(153, 108, 251, 0.27)",
                    borderRadius: "999px",
                    padding: "11px 21px",
                    width: "fit-content",
                  }}
                >
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: brand, display: "inline-block" }} />
                  <span style={{ fontSize: "13px", fontFamily: "var(--font-roboto)", color: brand, fontWeight: 600 }}>
                    Central disponível 24h / 7 dias
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:flex-1 md:w-auto md:min-w-0">
                {canais.map((c, idx) => (
                  <FadeIn
                    key={c.title}
                    delay={idx * 0.08}
                    style={{
                      backgroundColor: "#0c0c0c",
                      border: "1px solid #212121",
                      borderRadius: "32px",
                      padding: "33px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "rgba(153, 108, 251, 0.13)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img src={c.icon} alt="" style={{ width: "26px", height: "26px" }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <p
                        style={{
                          fontSize: "18px",
                          fontWeight: 700,
                          fontFamily: "var(--font-linear-grotesk)",
                          color: colors.white,
                          margin: 0,
                        }}
                      >
                        {c.title}
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
                        {c.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>

          {/* SLA de atendimento */}
          <div style={{ backgroundColor: colors.black, display: "flex", flexDirection: "column", gap: "64px" }} className="px-6 py-16 md:p-24">
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", textAlign: "center" }}>
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
                Acordo de nível de serviço
              </p>
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
                SLA de atendimento
              </AnimatedTitle>
              <p
                style={{
                  fontSize: "16px",
                  fontFamily: "var(--font-roboto)",
                  color: colors.text.bodyLight,
                  margin: 0,
                }}
              >
                Prazos garantidos contratualmente para cada tipo de acionamento.
              </p>
            </div>

            <div
              style={{
                backgroundColor: colors.black,
                border: "1px solid rgba(153, 108, 251, 0.2)",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              {sla.map((row, idx) => (
                <FadeIn
                  key={row.label}
                  delay={idx * 0.06}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: idx % 2 === 1 ? "rgba(255, 255, 255, 0.02)" : "transparent",
                    borderBottom: idx < sla.length - 1 ? "1px solid rgba(255, 255, 255, 0.07)" : "none",
                  }}
                  className="px-6 py-6 md:px-10"
                >
                  <p style={{ margin: 0, fontSize: "16px", fontFamily: "var(--font-roboto)", color: colors.white }}>
                    {row.label}
                  </p>
                  <span
                    style={{
                      backgroundColor: "rgba(153, 108, 251, 0.13)",
                      border: "1px solid rgba(153, 108, 251, 0.27)",
                      borderRadius: "999px",
                      padding: "6px 16px",
                      fontSize: "14px",
                      fontWeight: 700,
                      fontFamily: "var(--font-roboto)",
                      color: brand,
                    }}
                  >
                    {row.value}
                  </span>
                </FadeIn>
              ))}
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
                <h2
                  style={{
                    fontWeight: 700,
                    fontFamily: "var(--font-linear-grotesk)",
                    color: colors.white,
                    margin: 0,
                    lineHeight: "1.1",
                  }}
                  className="text-3xl md:text-[48px]"
                >
                  Eleve o nível da sua central
                  <br />
                  com a <span style={{ fontWeight: 900 }}>Conor Assist</span>
                </h2>
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
                  R$1.000 de entrada + R$550 por mês. Preço fixo, cobertura
                  nacional, para centrais de rastreamento.
                </p>
              </div>
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
                  width: "fit-content",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                COMPRAR AGORA
              </button>
            </div>

            <CroppedIllustration
              src={imgCtaIllustration}
              alt=""
              aspectRatio={904 / 480}
              objectPosition="0% 33%"
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
