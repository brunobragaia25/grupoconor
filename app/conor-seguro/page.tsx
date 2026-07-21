"use client";

import { Layout } from "@/app/components/Layout";
import { Footer } from "@/app/components/Footer";
import { colors } from "@/app/styles/design-tokens";
import { AnimatedTitle } from "@/app/components/motion/AnimatedTitle";
import { FadeIn } from "@/app/components/motion/FadeIn";

const brand = "#fec22d";

const imgLogoWordmark = "/icons/logo-conor-seguro-wordmark-large.svg";
const imgHeroIllustration = "/image-conor-seguro-hero.jpg";
const imgCtaIllustration = "/image-conor-seguro-cta.svg";

const stats = [
  { value: "24h", label: "Assistência disponível" },
  { value: "100%", label: "Digital e sem papel" },
  { value: "R$0", label: "Franquia nos acionamentos" },
  { value: "∞", label: "Telemedicina ilimitada" },
];

const planoItens = [
  "Seguro de vida em grupo",
  "Seguro contra acidentes pessoais",
  "Cobertura por invalidez permanente",
  "Cobertura por morte acidental",
  "Auxílio funeral",
  "Assistência residencial 24h",
  "Assistência veicular 24h",
  "Telemedicina ilimitada",
];

const coberturas = [
  {
    title: "Morte Acidental",
    description: "Indenização à família do segurado em caso de morte causada por acidente.",
  },
  {
    title: "Invalidez Permanente",
    description: "Cobertura para invalidez total ou parcial decorrente de acidente.",
  },
  {
    title: "Auxilio Funeral",
    description: "Cobertura das despesas funerárias do segurado e dependentes.",
  },
  {
    title: "Doenças Graves",
    description: "Proteção financeira em diagnósticos de doenças graves previamente listadas.",
  },
];

const assistencia = [
  {
    title: "Assistência Veicular",
    description: "Guincho, pane seca, troca de pneu, chaveiro e socorro mecânico em qualquer lugar do Brasil.",
  },
  {
    title: "Assistência Residencial",
    description: "Eletricista, encanador, chaveiro e vidraceiro para emergências no imóvel do segurado.",
  },
  {
    title: "Telemedicina",
    description: "Consultas médicas por videochamada com clínicos gerais e especialistas, sem limite de uso.",
  },
  {
    title: "Orientação Jurídica",
    description: "Suporte jurídico por telefone para tirar dúvidas legais sem sair de casa.",
  },
];

export default function ConorSeguro() {
  return (
    <Layout>
      <div style={{ backgroundColor: colors.background.dark, paddingRight: "32px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Hero */}
          <div
            style={{
              backgroundImage:
                "linear-gradient(108deg, #1b1b1b 14.965%, #000000 48.897%, #fec22d 106.9%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "120px 80px",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
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
              <img src={imgLogoWordmark} alt="Conor Seguro" style={{ height: "56px" }} />
              <AnimatedTitle
                as="p"
                style={{
                  fontSize: "64px",
                  fontWeight: 700,
                  fontFamily: "var(--font-linear-grotesk)",
                  color: colors.white,
                  margin: 0,
                  lineHeight: "normal",
                  textAlign: "center",
                }}
              >
                Garantimos programas de benefícios, serviços de seguro e
                assistência 24h para a sua empresa.
              </AnimatedTitle>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "rgba(36, 36, 36, 0.75)",
              borderTopRightRadius: "12px",
              padding: "96px",
              display: "flex",
              flexDirection: "column",
              gap: "96px",
            }}
          >
            {/* Investimento + Stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", gap: "20px" }}>
                <div
                  style={{
                    borderRadius: "32px",
                    overflow: "hidden",
                    backgroundImage: `url(${imgHeroIllustration})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "45%",
                    flexShrink: 0,
                  }}
                />

                <div
                  style={{
                    backgroundColor: colors.black,
                    borderRadius: "32px",
                    flex: "1 0 0",
                    padding: "64px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "24px",
                  }}
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
                          fontSize: "64px",
                          fontWeight: 700,
                          fontFamily: "var(--font-linear-grotesk)",
                          color: brand,
                          margin: 0,
                          lineHeight: "normal",
                        }}
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
                        + R$350
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
                    {["Preço fixo", "Sem carência", "Sem mínimo"].map((b) => (
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
                  backgroundColor: "rgba(254, 194, 45, 0.2)",
                  borderRadius: "32px",
                  overflow: "hidden",
                  display: "flex",
                }}
              >
                {stats.map((s, idx) => (
                  <FadeIn
                    key={s.label}
                    delay={idx * 0.08}
                    style={{
                      backgroundColor: colors.black,
                      flex: "1 0 0",
                      padding: "40px 32px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      alignItems: "center",
                      textAlign: "center",
                      borderLeft: idx > 0 ? "1px solid rgba(254, 194, 45, 0.2)" : "none",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "48px",
                        fontWeight: 700,
                        fontFamily: "var(--font-linear-grotesk)",
                        color: brand,
                        lineHeight: "normal",
                      }}
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
                padding: "80px",
                display: "flex",
                gap: "40px",
              }}
            >
              <div style={{ flex: "1 0 0", display: "flex", flexDirection: "column", gap: "40px" }}>
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
                      fontSize: "48px",
                      fontWeight: 700,
                      fontFamily: "var(--font-linear-grotesk)",
                      color: colors.white,
                      margin: 0,
                      lineHeight: "1.1",
                    }}
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
                    Tudo que seus clientes precisam em uma única contratação,
                    sem surpresas.
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
                          backgroundColor: "rgba(254, 194, 45, 0.13)",
                          border: `1px solid ${brand}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <span style={{ color: brand, fontSize: "13px", fontWeight: 700 }}>✓</span>
                      </div>
                      <span style={{ fontSize: "16px", fontFamily: "var(--font-roboto)", color: colors.white }}>
                        {item}
                      </span>
                    </FadeIn>
                  ))}
                </div>
              </div>

              <div
                style={{
                  flex: "1 0 0",
                  backgroundColor: colors.black,
                  border: "1px solid rgba(254, 194, 45, 0.2)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    backgroundImage:
                      "linear-gradient(115deg, #1b1b1b 14.965%, #000000 48.897%, #fec22d 106.9%)",
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
                    Conor Seguro
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
                    Plano Completo
                  </p>
                </div>
                <div
                  style={{
                    padding: "40px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    flex: "1 0 0",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ margin: 0, fontSize: "13px", color: colors.text.bodyLight, fontFamily: "var(--font-roboto)", textAlign: "center" }}>
                    A partir de
                  </p>
                  <p style={{ margin: 0, fontSize: "36px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: brand, textAlign: "center" }}>
                    R$350<span style={{ fontSize: "16px", color: colors.text.bodyLight, fontWeight: 400, fontFamily: "var(--font-roboto)" }}>/mês</span>
                  </p>
                  <p style={{ margin: 0, fontSize: "14px", color: colors.text.bodyLight, fontFamily: "var(--font-roboto)", textAlign: "center" }}>
                    + R$3.000 de entrada
                  </p>

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

            {/* Coberturas do seguro */}
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
                  Proteção completa
                </p>
                <AnimatedTitle
                  as="h2"
                  style={{
                    fontSize: "48px",
                    fontWeight: 900,
                    fontFamily: "var(--font-linear-grotesk)",
                    color: colors.white,
                    margin: 0,
                  }}
                >
                  Coberturas do seguro
                </AnimatedTitle>
              </div>

              <div style={{ display: "flex", gap: "20px", width: "100%" }}>
                {coberturas.map((c, idx) => (
                  <FadeIn
                    key={c.title}
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
                      gap: "40px",
                    }}
                  >
                    <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: brand }} />
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

          {/* Assistência 24h */}
          <div style={{ backgroundColor: colors.black, padding: "96px 96px 96px 96px" }}>
            <div style={{ display: "flex", gap: "96px", alignItems: "flex-start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "462px", flexShrink: 0 }}>
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
                  Disponível todos os dias
                </p>
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
                  {["Assistência ", { text: "24h", color: brand }]}
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
                  Suporte completo para seus clientes, a qualquer hora, em
                  qualquer lugar do Brasil. Uma ligação resolve tudo.
                </p>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    backgroundColor: "rgba(254, 194, 45, 0.13)",
                    border: "1px solid rgba(254, 194, 45, 0.27)",
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

              <div style={{ flex: "1 0 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {assistencia.map((a, idx) => (
                  <FadeIn
                    key={a.title}
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
                    <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "rgba(254, 194, 45, 0.13)" }} />
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
                        {a.title}
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
                        {a.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div
            style={{
              backgroundColor: brand,
              height: "480px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: "96px",
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <h2
                  style={{
                    fontSize: "48px",
                    fontWeight: 700,
                    fontFamily: "var(--font-linear-grotesk)",
                    color: colors.black,
                    margin: 0,
                    lineHeight: "1.1",
                  }}
                >
                  Proteja seus clientes
                  <br />
                  com o <span style={{ fontWeight: 900 }}>melhor seguro</span>
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    fontFamily: "var(--font-roboto)",
                    color: colors.black,
                    margin: 0,
                    lineHeight: "28px",
                    width: "300px",
                  }}
                >
                  R$3.000 de entrada + R$350 por mês. Preço fixo, sem
                  carência, sem mínimo.
                </p>
              </div>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "56px",
                  backgroundColor: "transparent",
                  color: colors.black,
                  border: `1px solid ${colors.black}`,
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
                MONTAR PEDIDO
              </button>
            </div>

            <div
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                bottom: 0,
                width: "904px",
                overflow: "hidden",
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "969.214px",
                  height: "723.68px",
                  left: "-33px",
                  top: "-122px",
                  backgroundImage: `url(${imgCtaIllustration})`,
                  backgroundSize: "969.214px 723.68px",
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
