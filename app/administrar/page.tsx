"use client";

import { Layout } from "@/app/components/Layout";
import { Footer } from "@/app/components/Footer";
import { colors } from "@/app/styles/design-tokens";
import { AnimatedTitle } from "@/app/components/motion/AnimatedTitle";
import { FadeIn } from "@/app/components/motion/FadeIn";
import { CroppedIllustration } from "@/app/components/CroppedIllustration";

const imgBookmarkLarge = "/icons/icon-bookmark-large.svg";
const imgHeroIllustration = "/image-administrar-hero.svg";
const imgCtaIllustration = "/image-administrar-cta.svg";
const imgChartBar = "/icons/icon-chart-bar.svg";
const imgFolderOpen = "/icons/icon-folder-open.svg";
const imgPackage = "/icons/icon-package-2.svg";
const imgWhyIllustration = "/image-administrar-why.jpg";
const imgHeroLogo = "/icon-administrar-hero-logo.svg";

const modules = [
  {
    icon: imgChartBar,
    title: "Financeiro",
    description:
      "Controle completo de receitas, despesas e fluxo de caixa em tempo real. Gere relatórios financeiros detalhados e acompanhe a saúde financeira do seu negócio.",
    checkColor: "#40c6ee",
    features: [
      "Controle de receitas e despesas",
      "Fluxo de caixa em tempo real",
      "Relatórios financeiros detalhados",
      "Análise de lucratividade",
    ],
  },
  {
    icon: imgFolderOpen,
    title: "Administrativo",
    description:
      "Organize seus processos administrativos, gerencie documentos e automatize tarefas rotineiras. Centralize informações e melhore a produtividade da equipe.",
    checkColor: "#52a4ff",
    features: [
      "Gestão de documentos",
      "Automatização de processos",
      "Controle de permissões",
      "Rastreamento de atividades",
    ],
  },
  {
    icon: imgPackage,
    title: "Estoque",
    description:
      "Monitore seu estoque em tempo real, controle entradas e saídas, e receba alertas de produtos em falta. Otimize sua gestão de inventário.",
    checkColor: "#52a4ff",
    features: [
      "Monitoramento em tempo real",
      "Alertas de baixo estoque",
      "Histórico de movimentações",
      "Relatórios de inventário",
    ],
  },
];

const screenshots = [
  {
    title: "Dashboard Principal",
    description:
      "Visualize todos os dados importantes da sua operação em uma única tela. Acompanhe métricas em tempo real.",
  },
  {
    title: "Relatórios & Análises",
    description:
      "Gere relatórios detalhados e personalizados para análises profundas do seu negócio.",
  },
];

const benefits = [
  {
    title: "Integração total",
    description:
      "Os três módulos trabalham juntos de forma integrada, compartilhando dados e oferecendo uma visão 360º do seu negócio.",
  },
  {
    title: "Fácil de usar",
    description:
      "Interface intuitiva que não requer treinamento extensivo. Sua equipe produz desde o primeiro dia.",
  },
  {
    title: "Relatórios Avançados",
    description:
      "Gere insights poderosos com relatórios customizáveis que ajudam na tomada de decisão estratégica.",
  },
  {
    title: "Suporte 24/7",
    description:
      "Nossa equipe está sempre disponível para ajudá-lo com qualquer dúvida ou problema técnico.",
  },
];

export default function Administrar() {
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
                src={imgBookmarkLarge}
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
                    { text: "Administrar ", color: "#bcddfa" },
                    { text: "seu negócio.", color: colors.white },
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
                  Garantimos ferramentas integradas à gestão administrativa,
                  financeira e controle de estoque para sua operação.
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
                  width: "2129.464px",
                  height: "1590px",
                  left: "-695px",
                  top: "-604px",
                  backgroundImage: `url(${imgHeroIllustration})`,
                  backgroundSize: "2129.464px 1590px",
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
            {/* Módulos */}
            <div style={{ display: "flex", gap: "20px" }}>
              {modules.map((module, idx) => (
                <FadeIn
                  key={module.title}
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
                    <img src={module.icon} alt="" style={{ width: "32px", height: "32px" }} />
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
                        {module.title}
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
                        {module.description}
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
                      {module.features.map((feature) => (
                        <li key={feature} style={{ color: colors.text.bodyLight }}>
                          <span style={{ color: module.checkColor }}>✓</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Veja como funciona */}
            <div style={{ display: "flex", gap: "64px", alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "40px", width: "392px", flexShrink: 0 }}>
                <AnimatedTitle
                  as="p"
                  style={{
                    fontSize: "56px",
                    fontWeight: 700,
                    fontFamily: "var(--font-linear-grotesk)",
                    color: colors.white,
                    margin: 0,
                    lineHeight: "normal",
                  }}
                >
                  Veja como funciona
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
                  Interface intuitiva e poderosa para gerenciar sua operação
                </p>
              </div>

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
            </div>

            {/* Porque escolher Conor Admin */}
            <div style={{ display: "flex", flexDirection: "column", gap: "64px", alignItems: "center" }}>
              <AnimatedTitle
                as="p"
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
                  { text: "Conor Admin?", color: "#20c4c3", weight: 900 },
                ]}
              </AnimatedTitle>

              <div style={{ display: "flex", gap: "20px", width: "100%" }}>
                <CroppedIllustration
                  src={imgWhyIllustration}
                  alt="Conor Admin"
                  aspectRatio={1744 / 974}
                  objectPosition="41% 38%"
                  borderRadius="32px"
                  className="flex-1"
                  logo={{ src: imgHeroLogo, aspectRatio: 345 / 62, widthFraction: 0.36 }}
                />

                <div
                  style={{
                    flex: "1 0 0",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                  }}
                >
                  {benefits.map((benefit, idx) => (
                    <FadeIn
                      key={benefit.title}
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
                          color: "#20c4c3",
                          margin: 0,
                        }}
                      >
                        {benefit.title}
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
                        {benefit.description}
                      </p>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Final */}
            <div
              style={{
                background: "linear-gradient(90deg, #008382, #20c4c3 43.269%)",
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
                  Pronto para organizar sua operação?
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
                  Comece agora mesmo com a solução integrada Conor Admin e
                  tenha controle total sobre sua gestão.
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
                  width: "722px",
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
