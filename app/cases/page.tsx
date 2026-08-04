"use client";

import { Layout } from "@/app/components/Layout";
import { Footer } from "@/app/components/Footer";
import { colors } from "@/app/styles/design-tokens";
import { AnimatedTitle } from "@/app/components/motion/AnimatedTitle";
import { FadeIn } from "@/app/components/motion/FadeIn";

const imgCtaIllustration = "/image-quem-somos-cta.svg";

const casesData = [
  {
    id: 1,
    company: "Logística Express",
    industry: "Logística e Transportes",
    problem:
      "Perdia em média 3 veículos por mês para roubo. Não tinha visibilidade da frota e operação era desorganizada.",
    solution:
      "Implementamos Conor 4 em 1 com rastreamento em tempo real, telemetria avançada e associação veicular completa.",
    result: "3 veículos",
    metric: "Redução de 95% em roubos",
    impact: "+R$200 mil economizados ao ano",
    color: "#40c6ee",
  },
  {
    id: 2,
    company: "Central de Rastreamento RJ",
    industry: "Rastreamento Veicular",
    problem:
      "Dificuldade em capturar novos clientes e expandir a base. Marketing manual e sem estrutura.",
    solution:
      "Contratou Conor Marketing com estratégia digital completa, páginas de captura e campanhas de tráfego pago.",
    result: "+350 clientes",
    metric: "Crescimento de 250% em leads",
    impact: "+R$500 mil em receita nova",
    color: "#fa7a22",
  },
  {
    id: 3,
    company: "Frota de Ônibus Metropolitana",
    industry: "Transporte Público",
    problem:
      "Gestão administrativa complexa, sem controle de estoque de equipamentos e financeiro desorganizado.",
    solution:
      "Implementou Conor Admin com módulos de Financeiro, Administrativo e Estoque integrados.",
    result: "-40% em custos",
    metric: "Eficiência operacional +200%",
    impact: "Economia de R$150 mil/mês",
    color: "#20c4c3",
  },
];

export default function Cases() {
  return (
    <Layout>
      <div style={{ backgroundColor: colors.background.dark }} className="px-4 md:pr-8 md:px-0">
        <div
          className="px-6 py-12 md:p-24"
          style={{
            backgroundColor: "rgba(36, 36, 36, 0.75)",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "96px",
          }}
        >
          {/* Hero Section */}
          <div
            className="flex items-center px-6 py-12 md:px-20 md:py-[120px]"
            style={{
              borderRadius: "32px",
              backgroundImage:
                "linear-gradient(106.39deg, rgb(0, 0, 0) 56.293%, rgb(82, 164, 255) 116.82%)",
            }}
          >
            <div
              style={{
                display: "flex",
                flex: "1 0 0",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <AnimatedTitle
                  as="h1"
                  className="text-4xl md:text-[72px]"
                  style={{
                    fontWeight: 700,
                    fontFamily: "var(--font-linear-grotesk)",
                    color: colors.white,
                    margin: 0,
                    lineHeight: "normal",
                    maxWidth: "768px",
                  }}
                >
                  {["Cases de", { text: " Sucesso.", color: "#52a4ff" }]}
                </AnimatedTitle>
                <p
                  style={{
                    fontSize: "18px",
                    fontFamily: "var(--font-roboto)",
                    color: colors.text.bodyLight,
                    margin: 0,
                    lineHeight: "28px",
                    maxWidth: "548px",
                  }}
                >
                  Veja como empresas reais usam as soluções Conor para
                  crescer, economizar e eliminar o roubo de frotas.
                </p>
              </div>
            </div>
          </div>

          {/* Cases */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {casesData.map((caseItem, idx) => (
                <FadeIn
                  key={caseItem.id}
                  delay={idx * 0.08}
                  style={{
                    backgroundColor: "#171717",
                    border: "1px solid #272727",
                    borderRadius: "32px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Vídeo - full width */}
                  <div
                    className="h-[280px] md:h-[640px]"
                    style={{
                      width: "100%",
                      backgroundColor: colors.black,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: colors.text.bodyLight,
                      fontSize: "16px",
                      fontFamily: "var(--font-roboto)",
                    }}
                  >
                    [Vídeo do case — {caseItem.company}]
                  </div>

                  {/* Info */}
                  <div
                    className="flex flex-col md:flex-row md:items-stretch"
                    style={{
                      borderTop: "1px solid #272727",
                    }}
                  >
                    {/* Company */}
                    <div
                      className="w-full md:w-[300px] p-6 md:p-10"
                      style={{
                        flexShrink: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                        justifyContent: "center",
                        borderRight: "1px solid #272727",
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            fontSize: "24px",
                            fontWeight: 700,
                            fontFamily: "var(--font-linear-grotesk)",
                            color: colors.white,
                            margin: "0 0 4px 0",
                            lineHeight: "1.2",
                          }}
                        >
                          {caseItem.company}
                        </h3>
                        <p
                          style={{
                            fontSize: "12px",
                            fontWeight: 600,
                            color: caseItem.color,
                            margin: 0,
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {caseItem.industry}
                        </p>
                      </div>
                    </div>

                    {/* Challenge + Solution */}
                    <div
                      className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 p-6 md:p-10"
                      style={{
                        flex: 1,
                        minWidth: 0,
                        borderRight: "1px solid #272727",
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <p
                          style={{
                            fontSize: "12px",
                            fontWeight: 600,
                            color: colors.text.bodyLight,
                            margin: "0 0 6px 0",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                          }}
                        >
                          O Desafio
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
                          {caseItem.problem}
                        </p>
                      </div>

                      <div style={{ flex: 1 }}>
                        <p
                          style={{
                            fontSize: "12px",
                            fontWeight: 600,
                            color: colors.text.bodyLight,
                            margin: "0 0 6px 0",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                          }}
                        >
                          A Solução
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
                          {caseItem.solution}
                        </p>
                      </div>
                    </div>

                    {/* Result */}
                    <div
                      className="w-full md:w-[280px] p-6 md:p-10"
                      style={{
                        flexShrink: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                        justifyContent: "center",
                        backgroundColor: "#1b1b1b",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          color: colors.text.bodyLight,
                          margin: 0,
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        Resultado
                      </p>
                      <div
                        style={{
                          fontSize: "32px",
                          fontWeight: 700,
                          fontFamily: "var(--font-linear-grotesk)",
                          color: caseItem.color,
                          margin: 0,
                          lineHeight: "1.1",
                        }}
                      >
                        {caseItem.result}
                      </div>
                      <p
                        style={{
                          fontSize: "14px",
                          fontFamily: "var(--font-roboto)",
                          color: colors.white,
                          margin: 0,
                        }}
                      >
                        {caseItem.metric}
                      </p>
                      <p
                        style={{
                          fontSize: "13px",
                          fontFamily: "var(--font-roboto)",
                          color: colors.text.bodyLight,
                          margin: 0,
                        }}
                      >
                        {caseItem.impact}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* CTA Final */}
          <div
            className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:pl-24 md:pt-24 md:pb-24 gap-8 md:gap-0"
            style={{
              backgroundColor: "#52a4ff",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <div
              className="max-w-[564px]"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <AnimatedTitle
                as="h2"
                className="text-3xl md:text-[48px]"
                style={{
                  fontWeight: 700,
                  fontFamily: "var(--font-linear-grotesk)",
                  color: colors.white,
                  margin: 0,
                  lineHeight: "1.2",
                  maxWidth: "554px",
                }}
              >
                Sua empresa pode ser o próximo case de sucesso
              </AnimatedTitle>
              <p
                style={{
                  fontSize: "16px",
                  fontFamily: "var(--font-roboto)",
                  color: colors.white,
                  margin: 0,
                  lineHeight: "28px",
                  maxWidth: "374px",
                }}
              >
                Comece agora com as soluções Conor e transforme sua operação
                de rastreamento veicular.
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
                Falar com especialista
              </button>
            </div>

            <img
              src={imgCtaIllustration}
              alt=""
              className="w-full h-auto max-w-[300px] md:h-[536px] md:w-[718px]"
              style={{
                objectFit: "cover",
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
