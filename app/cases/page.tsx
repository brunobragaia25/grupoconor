"use client";

import { Layout } from "@/app/components/Layout";
import { Footer } from "@/app/components/Footer";
import { colors } from "@/app/styles/design-tokens";

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
  {
    id: 4,
    company: "StartUp Rastreamento SP",
    industry: "Empresa Emergente",
    problem:
      "Começava do zero com orçamento limitado. Precisava de solução completa para inicial operações.",
    solution:
      "Começou com Conor Montar (rastreadores + configuração + chip) por apenas R$500.",
    result: "Operação full",
    metric: "Primeira frota em 2 semanas",
    impact: "Faturamento em 30 dias",
    color: "#40c6ee",
  },
  {
    id: 5,
    company: "Seguradora de Seguros Auto",
    industry: "Seguros e Rastreamento",
    problem:
      "Clientes queriam mais benefícios e fidelização. Taxas de renovação caindo a cada ano.",
    solution:
      "Implementou Conor Fidelizar com programas de benefícios, seguro e assistência 24h integrados.",
    result: "+85% fidelização",
    metric: "Retenção de clientes",
    impact: "+R$750 mil em receita retida",
    color: "#996cfb",
  },
  {
    id: 6,
    company: "Companhia de Táxis e Uber",
    industry: "Mobilidade Urbana",
    problem:
      "Motoristas frequentemente roubavam veículos. Sem controle de rotas e comportamento de condução.",
    solution:
      "Rastrear com telemetria avançada e alertas inteligentes. Recuperação veicular com suporte 24/7.",
    result: "0 roubos",
    metric: "6 meses sem sinistros",
    impact: "Confiança 100% recuperada",
    color: "#dd245c",
  },
  {
    id: 7,
    company: "Empresa de Aluguel de Frotas",
    industry: "Aluguel de Veículos",
    problem:
      "Clientes alugavam veículos e desapareciam. Recuperação de frotas era cara e lenta.",
    solution:
      "Conor 4 em 1 com rastreamento contínuo, recuperação veicular e suporte humanizado especializado.",
    result: "98% recuperação",
    metric: "Tempo médio 2 horas",
    impact: "Prejuízos reduzidos em 90%",
    color: "#40c6ee",
  },
  {
    id: 8,
    company: "Transportadora Regional",
    industry: "Transporte de Cargas",
    problem:
      "Desvio de carga, rotas ineficientes e falta de comunicação com motoristas em tempo real.",
    solution:
      "Rastrear com telemetria, administrar com controle financeiro e expandir com consultoria de vendas.",
    result: "-60% desvio",
    metric: "Eficiência de rotas +45%",
    impact: "+R$300 mil em economia",
    color: "#fa7a22",
  },
];

const benefitsData = [
  {
    title: "Redução de Roubo",
    description: "Rastreamento em tempo real reduz roubos em até 95%",
  },
  {
    title: "Aumento de Eficiência",
    description: "Otimização de rotas e processos aumenta produtividade",
  },
  {
    title: "Economia Significativa",
    description: "Redução de custos operacionais e sinistros",
  },
  {
    title: "Crescimento de Receita",
    description: "Novas estratégias de marketing geram mais clientes",
  },
];

export default function Cases() {
  return (
    <Layout>
      <div style={{ backgroundColor: colors.background.dark }}>
        {/* Hero Section */}
        <section
          style={{
            backgroundColor: colors.background.dark,
            padding: "96px 48px 48px 48px",
          }}
        >
          <div style={{ maxWidth: "1494px", margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <h1
                style={{
                  fontSize: "72px",
                  fontWeight: 700,
                  fontFamily: "var(--font-linear-grotesk)",
                  color: colors.white,
                  margin: 0,
                  lineHeight: "normal",
                  maxWidth: "900px",
                }}
              >
                Cases de
                <span style={{ color: "#52a4ff" }}> Sucesso</span>
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  fontFamily: "var(--font-roboto)",
                  color: colors.text.bodyLight,
                  margin: 0,
                  lineHeight: "28px",
                  maxWidth: "800px",
                }}
              >
                Veja como empresas reais usam as soluções Conor para crescer, economizar e eliminar roubo de frotas
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          style={{
            backgroundColor: colors.background.dark,
            padding: "48px 48px",
            marginBottom: "96px",
          }}
        >
          <div style={{ maxWidth: "1494px", margin: "0 auto" }}>
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "48px",
                  fontWeight: 700,
                  fontFamily: "var(--font-linear-grotesk)",
                  color: colors.white,
                  margin: 0,
                }}
              >
                Resultados em Números
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "48px",
              }}
            >
              {benefitsData.map((benefit, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: colors.background.grayUltraHigh,
                    borderRadius: "8px",
                    padding: "48px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      fontFamily: "var(--font-linear-grotesk)",
                      color: colors.white,
                      margin: 0,
                    }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      fontFamily: "var(--font-roboto)",
                      color: colors.text.bodyLight,
                      margin: 0,
                      lineHeight: "24px",
                    }}
                  >
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cases Grid */}
        <section
          style={{
            backgroundColor: colors.background.dark,
            padding: "48px 48px",
            marginBottom: "96px",
          }}
        >
          <div style={{ maxWidth: "1494px", margin: "0 auto" }}>
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "48px",
                  fontWeight: 700,
                  fontFamily: "var(--font-linear-grotesk)",
                  color: colors.white,
                  margin: 0,
                }}
              >
                Histórias de Clientes
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "48px",
              }}
            >
              {casesData.map((caseItem) => (
                <div
                  key={caseItem.id}
                  style={{
                    backgroundColor: colors.background.grayUltraHigh,
                    borderRadius: "8px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    borderTop: `4px solid ${caseItem.color}`,
                  }}
                >
                  {/* Company Header */}
                  <div
                    style={{
                      padding: "48px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      borderBottom: "1px solid #242424",
                    }}
                  >
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "8px",
                        backgroundColor: "#1b1b1b",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: colors.text.bodyLight,
                        fontSize: "32px",
                        fontWeight: 700,
                      }}
                    >
                      {caseItem.company.substring(0, 2)}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "24px",
                          fontWeight: 700,
                          fontFamily: "var(--font-linear-grotesk)",
                          color: colors.white,
                          margin: "0 0 4px 0",
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

                  {/* Case Content */}
                  <div
                    style={{
                      padding: "48px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                      flex: 1,
                    }}
                  >
                    {/* Problem */}
                    <div>
                      <p
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          color: colors.text.bodyLight,
                          margin: "0 0 8px 0",
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
                          lineHeight: "24px",
                        }}
                      >
                        {caseItem.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <p
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          color: colors.text.bodyLight,
                          margin: "0 0 8px 0",
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
                          lineHeight: "24px",
                        }}
                      >
                        {caseItem.solution}
                      </p>
                    </div>

                    {/* Results */}
                    <div
                      style={{
                        backgroundColor: "#1b1b1b",
                        borderRadius: "8px",
                        padding: "24px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
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
                          fontSize: "28px",
                          fontWeight: 700,
                          fontFamily: "var(--font-linear-grotesk)",
                          color: caseItem.color,
                          margin: 0,
                        }}
                      >
                        {caseItem.result}
                      </div>
                      <p
                        style={{
                          fontSize: "14px",
                          fontFamily: "var(--font-roboto)",
                          color: colors.text.bodyLight,
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
                          fontWeight: 500,
                        }}
                      >
                        {caseItem.impact}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section
          style={{
            backgroundColor: colors.background.dark,
            padding: "48px 48px",
            marginBottom: "96px",
          }}
        >
          <div
            style={{
              maxWidth: "1494px",
              margin: "0 auto",
              backgroundColor: colors.background.grayUltraHigh,
              borderRadius: "8px",
              padding: "96px 48px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "48px",
                fontWeight: 700,
                fontFamily: "var(--font-linear-grotesk)",
                color: colors.white,
                margin: 0,
                maxWidth: "700px",
              }}
            >
              Sua empresa pode ser o próximo case de sucesso
            </h2>
            <p
              style={{
                fontSize: "16px",
                fontFamily: "var(--font-roboto)",
                color: colors.text.bodyLight,
                margin: 0,
                maxWidth: "600px",
                lineHeight: "28px",
              }}
            >
              Comece agora com as soluções Conor e transforme sua operação de rastreamento veicular
            </p>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                height: "40px",
                backgroundColor: "#52a4ff",
                color: colors.white,
                border: "none",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "var(--font-roboto)",
                transition: "opacity 0.3s",
                padding: "0 16px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Falar com especialista
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </Layout>
  );
}
