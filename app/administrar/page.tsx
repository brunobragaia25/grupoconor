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
      <div style={{ backgroundColor: colors.background.dark }} className="md:pr-8">
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Hero Section */}
          <div
            className="flex items-center overflow-hidden relative px-4 md:pl-20 min-h-[420px] md:min-h-[620px]"
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
                src={imgBookmarkLarge}
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
              className="absolute right-0 top-0 bottom-0 w-[220px] md:w-[740px] overflow-hidden pointer-events-none"
            >
              <div
                className="absolute inset-0 bg-cover bg-center md:w-[2129.464px] md:h-[1590px] md:left-[-695px] md:top-[-604px] md:bg-auto"
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
            {/* Módulos */}
            <div className="flex flex-col md:flex-row gap-5">
              {modules.map((module, idx) => (
                <FadeIn
                  key={module.title}
                  delay={idx * 0.08}
                  className="p-6 md:p-12"
                  style={{
                    backgroundColor: "#171717",
                    border: "1px solid #272727",
                    borderRadius: "32px",
                    flex: "1 0 0",
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
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 md:items-center">
              <div className="md:w-[392px]" style={{ display: "flex", flexDirection: "column", gap: "40px", flexShrink: 0 }}>
                <AnimatedTitle
                  as="p"
                  className="text-3xl md:text-[56px]"
                  style={{
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

              <div className="flex flex-col md:flex-row gap-5" style={{ flex: "1 0 0", alignItems: "center" }}>
                {screenshots.map((screenshot, idx) => (
                  <FadeIn
                    key={screenshot.title}
                    delay={idx * 0.08}
                    className="w-full"
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
                  { text: "Conor Admin?", color: "#20c4c3", weight: 900 },
                ]}
              </AnimatedTitle>

              <div className="flex flex-col md:flex-row gap-5" style={{ width: "100%" }}>
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
                  className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                  style={{
                    flex: "1 0 0",
                  }}
                >
                  {benefits.map((benefit, idx) => (
                    <FadeIn
                      key={benefit.title}
                      delay={idx * 0.08}
                      className="p-8 md:p-16"
                      style={{
                        backgroundColor: "#171717",
                        border: "1px solid #272727",
                        borderRadius: "32px",
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
              className="flex flex-col md:flex-row items-center justify-between px-6 py-10 md:pl-24 md:py-24 gap-8 md:h-[480px]"
              style={{
                background: "linear-gradient(90deg, #008382, #20c4c3 43.269%)",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "489px" }}>
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
                className="w-full h-auto md:h-[480px] md:w-[722px]"
                style={{
                  objectFit: "cover",
                  flexShrink: 0,
                  maxWidth: "100%",
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
