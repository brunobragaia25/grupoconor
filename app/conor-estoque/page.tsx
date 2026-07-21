"use client";

import { Layout } from "@/app/components/Layout";
import { Footer } from "@/app/components/Footer";
import { colors } from "@/app/styles/design-tokens";
import { AnimatedTitle } from "@/app/components/motion/AnimatedTitle";
import { FadeIn } from "@/app/components/motion/FadeIn";

const brand = "#dd245c";

const imgLogoWordmark = "/icons/logo-conor-estoque-wordmark-large.svg";
const imgHeroIllustration = "/image-conor-estoque-hero.jpg";
const imgCtaIllustration = "/image-conor-estoque-cta.png";

const stats = [
  { value: "4G", label: "Tecnologia disponível" },
  { value: "12m", label: "Garantia dos equipamentos" },
  { value: "48h", label: "Troca por defeito" },
  { value: "100%", label: "Cobertura nacional" },
];

const pricingTiers = [
  {
    title: "1 – 9 un.",
    price: "R$189,90/un.",
    highlight: false,
    rows: [
      { label: "Rastreador 2G:", value: "R$129,90/un." },
      { label: "Chip Vivo 20Mb:", value: "R$19,90/mês" },
    ],
  },
  {
    title: "10 – 49 un.",
    price: "R$174,90/un.",
    highlight: true,
    badge: "MAIS VENDIDO",
    rows: [
      { label: "Rastreador 2G:", value: "R$114,90/un." },
      { label: "Chip Vivo 20Mb:", value: "R$17,90/mês" },
    ],
  },
  {
    title: "50 – 99 un.",
    price: "R$159,90/un.",
    highlight: false,
    rows: [
      { label: "Rastreador 2G:", value: "R$99,90/un." },
      { label: "Chip Vivo 20Mb:", value: "R$15,90/mês" },
    ],
  },
  {
    title: "100+ un.",
    price: "Sob consulta",
    highlight: false,
    rows: [
      { label: "Rastreador 2G:", value: "Sob consulta" },
      { label: "Chip Vivo 20Mb:", value: "Sob consulta" },
    ],
  },
];

const hardware = [
  {
    badge: "Mais vendido",
    label: "SUNTECH · Rastreador 4G",
    name: "ST4215U",
    description:
      "Rastreador 4G de alta performance com comunicação LTE, ideal para frotas que exigem dados em tempo real com alta precisão.",
    specs: [
      "Rede 4G LTE",
      "GPS de alta precisão",
      "Antena interna",
      "Entrada para backup de bateria",
      "Compatível com veículos leves e pesados",
    ],
  },
  {
    badge: "Econômico",
    label: "SUNTECH · Rastreador 2G",
    name: "ST310UC2",
    description:
      "Rastreador 2G robusto e econômico, ideal para regiões com cobertura 2G e operações que não exigem transmissão em alta velocidade.",
    specs: [
      "Rede 2G GSM",
      "GPS integrado",
      "Baixo consumo energético",
      "Ideal para frotas em expansão",
      "Custo-benefício superior",
    ],
  },
  {
    badge: "Cobertura nacional",
    label: "VIVO · Chip M2M",
    name: "Chip Vivo 20Mb",
    description:
      "Chip M2M da Vivo com 20Mb de dados mensais, homologado para uso comercial em todo o Brasil.",
    specs: [
      "20Mb de dados/mês",
      "Cobertura nacional Vivo",
      "M2M homologado",
      "Sem fidelidade mínima",
      "Ativação imediata",
    ],
  },
];

const logistica = [
  {
    title: "Prazo de entrega",
    description: "5 a 10 dias úteis para todo o Brasil via transportadora rastreável.",
  },
  {
    title: "Garantia",
    description: "12 meses de garantia contra defeitos de fabricação em todos os equipamentos.",
  },
  {
    title: "Suporte de Instalação",
    description: "Em caso de defeito dentro da garantia, realizamos a troca em até 48 horas úteis.",
  },
  {
    title: "Troca em até 48h",
    description: "Em caso de defeito dentro da garantia, realizamos a troca em até 48 horas úteis.",
  },
];

export default function ConorEstoque() {
  return (
    <Layout>
      <div style={{ backgroundColor: colors.background.dark, paddingRight: "32px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Hero */}
          <div
            style={{
              backgroundImage:
                "linear-gradient(108deg, #1b1b1b 14.965%, #000000 48.897%, #dd245c 106.9%)",
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
              <img src={imgLogoWordmark} alt="Conor Estoque" style={{ height: "53px" }} />
              <p
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
                Hardware essencial para montar ou expandir seu negócio de
                rastreamento. Compre na quantidade que precisa ou alugue
                para começar sem investimento alto.
              </p>
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
            {/* Já tenho central / Estou começando + Stats */}
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
                    gap: "20px",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid #272727",
                      borderRadius: "20px",
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                      flex: "1 0 0",
                      justifyContent: "center",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        fontFamily: "var(--font-roboto)",
                        color: brand,
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                        margin: 0,
                      }}
                    >
                      Já tenho central
                    </p>
                    <div style={{ height: "1px", backgroundColor: "#333333", width: "100%" }} />
                    <p style={{ fontSize: "15px", fontWeight: 500, fontFamily: "var(--font-roboto)", color: colors.white, margin: 0 }}>
                      Compre rastreadores e chips na quantidade que precisa
                    </p>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#151515",
                      border: "1px solid #272727",
                      borderRadius: "20px",
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                      flex: "1 0 0",
                      justifyContent: "center",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        fontFamily: "var(--font-roboto)",
                        color: brand,
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                        margin: 0,
                      }}
                    >
                      Estou começando
                    </p>
                    <div style={{ height: "1px", backgroundColor: "#333333", width: "100%" }} />
                    <p style={{ fontSize: "15px", fontWeight: 500, fontFamily: "var(--font-roboto)", color: colors.white, margin: 0 }}>
                      Alugue 10 rastreadores e chips prontos para uso
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "rgba(221, 36, 92, 0.2)",
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
                      borderLeft: idx > 0 ? "1px solid rgba(221, 36, 92, 0.2)" : "none",
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
                    <span style={{ fontSize: "14px", fontFamily: "var(--font-roboto)", color: colors.text.bodyLight }}>
                      {s.label}
                    </span>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Tabela de preços - Compra avulsa */}
            <div
              style={{
                backgroundColor: colors.black,
                borderRadius: "32px",
                padding: "80px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "64px",
              }}
            >
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
                  Compra avulsa
                </p>
                <AnimatedTitle as="h2" style={{ fontSize: "48px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.white, margin: 0 }}>
                  Tabela de preços
                </AnimatedTitle>
                <p style={{ fontSize: "16px", fontFamily: "var(--font-roboto)", color: colors.text.bodyLight, margin: 0 }}>
                  Quanto mais você compra, menor o preço por unidade.
                </p>
              </div>

              <div style={{ display: "flex", gap: "20px", width: "100%" }}>
                {pricingTiers.map((tier, idx) => (
                  <FadeIn
                    key={tier.title}
                    delay={idx * 0.08}
                    style={{
                      backgroundColor: "#1b1b1b",
                      border: tier.highlight ? `1px solid ${brand}` : "1px solid #2a2a2a",
                      borderRadius: "16px",
                      flex: "1 0 0",
                      padding: "33px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "8px",
                          backgroundColor: "rgba(221, 36, 92, 0.13)",
                          border: "1px solid rgba(221, 36, 92, 0.27)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div style={{ width: "16px", height: "16px", borderRadius: "3px", backgroundColor: brand, opacity: 0.8 }} />
                      </div>
                      {tier.badge && (
                        <span
                          style={{
                            backgroundColor: "#2a2a2a",
                            border: "1px solid #3a3a3a",
                            borderRadius: "999px",
                            padding: "5px 13px",
                            fontSize: "10px",
                            color: colors.text.bodyLight,
                            fontFamily: "var(--font-roboto)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          ★ {tier.badge}
                        </span>
                      )}
                    </div>

                    <p style={{ fontSize: "18px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.white, margin: 0 }}>
                      {tier.title}
                    </p>

                    <div>
                      <p
                        style={{
                          fontSize: "11px",
                          fontFamily: "var(--font-roboto)",
                          color: colors.text.bodyLight,
                          margin: "0 0 4px 0",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                        }}
                      >
                        Rastreador 4G
                      </p>
                      <p style={{ fontSize: "32px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.white, margin: 0 }}>
                        {tier.price}
                      </p>
                    </div>

                    <button
                      style={{
                        height: "44px",
                        borderRadius: "8px",
                        fontSize: "14px",
                        fontWeight: 600,
                        fontFamily: "var(--font-roboto)",
                        cursor: "pointer",
                        transition: "opacity 0.3s",
                        backgroundColor: tier.highlight ? colors.white : "transparent",
                        color: tier.highlight ? colors.black : colors.white,
                        border: tier.highlight ? "none" : "1px solid #3a3a3a",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                      Montar pedido
                    </button>

                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ flex: 1, height: "1px", backgroundColor: "#2a2a2a" }} />
                      <span style={{ fontSize: "10px", letterSpacing: "1.5px", color: colors.text.bodyLight, fontFamily: "var(--font-roboto)", whiteSpace: "nowrap" }}>
                        DESTAQUES DO PLANO
                      </span>
                      <div style={{ flex: 1, height: "1px", backgroundColor: "#2a2a2a" }} />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      {tier.rows.map((row) => (
                        <p key={row.label} style={{ fontSize: "13px", fontFamily: "var(--font-roboto)", color: brand, margin: 0 }}>
                          <span>✓ {row.label}</span> <span style={{ color: colors.white }}>{row.value}</span>
                        </p>
                      ))}
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Hardware disponível */}
            <div style={{ display: "flex", flexDirection: "column", gap: "64px", alignItems: "center" }}>
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
                  Hardware disponível
                </p>
                <AnimatedTitle as="h2" style={{ fontSize: "48px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.white, margin: 0 }}>
                  Equipamentos
                </AnimatedTitle>
                <p style={{ fontSize: "16px", fontFamily: "var(--font-roboto)", color: colors.text.bodyLight, margin: 0 }}>
                  Rastreadores e chips homologados para uso comercial em todo o Brasil.
                </p>
              </div>

              <div style={{ display: "flex", gap: "20px", width: "100%" }}>
                {hardware.map((h, idx) => (
                  <FadeIn
                    key={h.name}
                    delay={idx * 0.08}
                    style={{
                      backgroundColor: colors.black,
                      border: "1px solid rgba(221, 36, 92, 0.2)",
                      borderRadius: "16px",
                      flex: "1 0 0",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ borderBottom: "1px solid rgba(221, 36, 92, 0.13)", padding: "32px", display: "flex", flexDirection: "column", gap: "0" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                        <div style={{ width: "56px", height: "56px", borderRadius: "12px", backgroundColor: "rgba(221, 36, 92, 0.13)" }} />
                        <span
                          style={{
                            backgroundColor: "rgba(221, 36, 92, 0.13)",
                            border: "1px solid rgba(221, 36, 92, 0.27)",
                            borderRadius: "999px",
                            padding: "5px 12px",
                            fontSize: "11px",
                            fontWeight: 700,
                            color: brand,
                            fontFamily: "var(--font-roboto)",
                          }}
                        >
                          {h.badge}
                        </span>
                      </div>
                      <div style={{ width: "40px", height: "3px", backgroundColor: brand, borderRadius: "2px", marginTop: "20px" }} />
                      <p
                        style={{
                          fontSize: "12px",
                          fontFamily: "var(--font-roboto)",
                          color: colors.text.bodyLight,
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          margin: "19px 0 0 0",
                        }}
                      >
                        {h.label}
                      </p>
                      <p style={{ fontSize: "28px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.white, margin: "4px 0 0 0" }}>
                        {h.name}
                      </p>
                      <p style={{ fontSize: "14px", fontFamily: "var(--font-roboto)", color: colors.text.bodyLight, margin: "12px 0 0 0", lineHeight: "22px" }}>
                        {h.description}
                      </p>
                    </div>
                    <div style={{ padding: "24px 32px 32px", display: "flex", flexDirection: "column", gap: "12px" }}>
                      <p style={{ fontSize: "11px", fontWeight: 600, fontFamily: "var(--font-roboto)", color: brand, textTransform: "uppercase", letterSpacing: "1px", margin: 0 }}>
                        Especificações
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {h.specs.map((spec) => (
                          <div key={spec} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                            <span style={{ color: brand, fontSize: "13px", fontWeight: 700 }}>✓</span>
                            <span style={{ fontSize: "13px", fontFamily: "var(--font-roboto)", color: colors.white }}>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Kit iniciante */}
            <div style={{ display: "flex", gap: "96px", alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "40px", flex: "1 0 0" }}>
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
                  Para iniciantes
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <AnimatedTitle
                    as="h2"
                    style={{
                      fontSize: "40px",
                      fontWeight: 700,
                      fontFamily: "var(--font-linear-grotesk)",
                      color: colors.white,
                      margin: 0,
                      lineHeight: "1.1",
                    }}
                  >
                    Kit com 10 rastreadores prontos para usar
                  </AnimatedTitle>
                  <p style={{ fontSize: "16px", fontFamily: "var(--font-roboto)", color: colors.text.bodyLight, margin: 0, lineHeight: "28px" }}>
                    Comece seu negócio de rastreamento sem precisar comprar cada item separadamente.
                  </p>
                </div>
                <button
                  style={{
                    backgroundColor: brand,
                    color: colors.white,
                    border: "none",
                    borderRadius: "999px",
                    padding: "14px 32px",
                    fontSize: "14px",
                    fontWeight: 700,
                    fontFamily: "var(--font-roboto)",
                    cursor: "pointer",
                    width: "fit-content",
                    transition: "opacity 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  QUERO O KIT INICIANTE
                </button>
              </div>

              <div
                style={{
                  flex: "1 0 0",
                  backgroundColor: "#1b1b1b",
                  border: "1px solid #2a2a2a",
                  borderRadius: "16px",
                  padding: "33px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <span
                  style={{
                    backgroundColor: "#2a2a2a",
                    border: "1px solid #3a3a3a",
                    borderRadius: "999px",
                    padding: "5px 13px",
                    fontSize: "10px",
                    color: colors.text.bodyLight,
                    fontFamily: "var(--font-roboto)",
                    width: "fit-content",
                  }}
                >
                  ★ KIT INICIANTE
                </span>

                <p style={{ fontSize: "18px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.white, margin: 0 }}>
                  10 Rastreadores + Chips
                </p>

                <div>
                  <p style={{ fontSize: "13px", fontFamily: "var(--font-roboto)", color: colors.text.bodyLight, margin: "0 0 4px 0" }}>
                    Entrada
                  </p>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
                    <span style={{ fontSize: "32px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.white }}>
                      R$2.500
                    </span>
                    <span style={{ fontSize: "14px", fontFamily: "var(--font-roboto)", color: colors.text.bodyLight }}>
                      + R$35,90/rastreador/mês
                    </span>
                  </div>
                </div>

                <button
                  style={{
                    backgroundColor: brand,
                    color: colors.white,
                    border: "none",
                    height: "44px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: 600,
                    fontFamily: "var(--font-roboto)",
                    cursor: "pointer",
                    transition: "opacity 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Quero o kit iniciante
                </button>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ flex: 1, height: "1px", backgroundColor: "#2a2a2a" }} />
                  <span style={{ fontSize: "10px", letterSpacing: "1.5px", color: colors.text.bodyLight, fontFamily: "var(--font-roboto)", whiteSpace: "nowrap" }}>
                    DESTAQUES DO KIT
                  </span>
                  <div style={{ flex: 1, height: "1px", backgroundColor: "#2a2a2a" }} />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    "Kit inicial: 10 rastreadores + 10 chips",
                    "Entrada: R$2.500",
                    "Mensalidade: R$35,90 por rastreador",
                    "Prazo mínimo: 12 meses",
                    "Manutenção: Inclusa no plano",
                    "Suporte técnico: Incluso 24h",
                  ].map((item) => {
                    const [label, value] = item.split(": ");
                    return (
                      <p key={item} style={{ fontSize: "13px", fontFamily: "var(--font-roboto)", color: brand, margin: 0 }}>
                        <span>✓ {label}:</span> <span style={{ color: colors.white }}>{value}</span>
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Logística e Suporte */}
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
                  Logística e suporte
                </p>
                <AnimatedTitle as="h2" style={{ fontSize: "48px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.white, margin: 0 }}>
                  Entrega, garantia e suporte técnico
                </AnimatedTitle>
              </div>

              <div style={{ display: "flex", gap: "20px", width: "100%" }}>
                {logistica.map((item, idx) => (
                  <FadeIn
                    key={item.title}
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
                        <p style={{ fontSize: "24px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: brand, margin: 0 }}>
                          {item.title}
                        </p>
                        <p style={{ fontSize: "14px", fontFamily: "var(--font-roboto)", color: colors.text.bodyLight, margin: 0, lineHeight: "24px" }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div
            style={{
              background: "linear-gradient(90deg, #dd245c, #dd245c)",
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
                <AnimatedTitle
                  as="h2"
                  style={{
                    fontSize: "48px",
                    fontWeight: 700,
                    fontFamily: "var(--font-linear-grotesk)",
                    color: colors.white,
                    margin: 0,
                    lineHeight: "1.1",
                  }}
                >
                  {["Monte seu combo e ", { text: "comece a rastrear", weight: 900 }]}
                </AnimatedTitle>
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
                  Compre na quantidade que precisa ou alugue o kit
                  iniciante. Hardware de qualidade com suporte técnico
                  incluído.
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
                MONTAR PEDIDO
              </button>
            </div>

            <img
              src={imgCtaIllustration}
              alt=""
              style={{
                height: "480px",
                width: "904px",
                objectFit: "cover",
                objectPosition: "60% center",
                flexShrink: 0,
              }}
            />
          </div>
        </div>

        <Footer />
      </div>
    </Layout>
  );
}
