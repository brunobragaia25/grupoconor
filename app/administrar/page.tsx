"use client";

import { Layout } from "@/app/components/Layout";
import { Footer } from "@/app/components/Footer";
import { colors } from "@/app/styles/design-tokens";
import { AnimatedTitle } from "@/app/components/motion/AnimatedTitle";
import { FadeIn } from "@/app/components/motion/FadeIn";
import { CroppedIllustration } from "@/app/components/CroppedIllustration";
import { whatsappHref } from "@/app/lib/whatsapp";

const imgBookmarkLarge = "/icons/icon-bookmark-large.svg";
const imgHeroIllustration = "/image-administrar-hero.svg";
const imgCtaIllustration = "/image-administrar-cta.svg";
const imgChartBar = "/icons/icon-chart-bar.svg";
const imgFolderOpen = "/icons/icon-folder-open.svg";
const imgPackage = "/icons/icon-package-2.svg";
const imgWhyIllustration = "/image-administrar-why.jpg";
const imgHeroLogo = "/icon-administrar-hero-logo.svg";
const imgDashboardPrincipal = "/foto-dash-administrar.png";
const imgRelatorios = "/foto-relatorios-administrar.png";

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
    image: imgDashboardPrincipal,
  },
  {
    title: "Relatórios & Análises",
    description:
      "Gere relatórios detalhados e personalizados para análises profundas do seu negócio.",
    image: imgRelatorios,
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
      <div style={{ backgroundColor: colors.background.dark }}>
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
                src={imgBookmarkLarge}
                alt=""
                style={{ width: "64px", height: "64px", flexShrink: 0 }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <AnimatedTitle
                  as="h1"
                  className="text-4xl md:text-[44px] min-[1520px]:text-[56px]!"
                  style={{
                    fontWeight: 700,
                    fontFamily: "var(--font-linear-grotesk)",
                    margin: 0,
                    lineHeight: "1.05",
                    maxWidth: "clamp(320px, calc(100vw - 1124px), 716px)",
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
                    maxWidth: "clamp(280px, calc(100vw - 1124px), 512px)",
                  }}
                >
                  Garantimos ferramentas integradas à gestão administrativa,
                  financeira e controle de estoque para sua operação.
                </p>
              </div>
            </div>

            <div
              className="relative w-full h-[200px] md:absolute md:right-0 md:top-0 md:bottom-0 md:h-auto md:w-[var(--hero-illus-w)] overflow-hidden pointer-events-none"
              style={{ ["--hero-illus-w" as string]: "min(740px, max(475px, calc(100vw - 464px - clamp(320px, calc(100vw - 1124px), 716px))))" }}
            >
              <div
                className="absolute inset-0 bg-contain bg-no-repeat bg-center md:w-[calc(var(--hero-illus-w)*2129.464/740)] md:h-[calc(var(--hero-illus-w)*1590/740)] md:left-[calc(var(--hero-illus-w)*-695/740)] md:top-[calc(var(--hero-illus-w)*-604/740)] md:bg-[length:calc(var(--hero-illus-w)*2129.464/740)_calc(var(--hero-illus-w)*1590/740)]"
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
                  className="p-6 md:p-12 w-full md:flex-1 md:w-auto md:min-w-0"
                  style={{
                    backgroundColor: "#171717",
                    border: "1px solid #272727",
                    borderRadius: "32px",
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
            <div className="flex flex-col min-[1520px]:flex-row gap-10 min-[1520px]:gap-16 min-[1520px]:items-center">
              <div className="min-[1520px]:flex-[0_1_392px] min-[1520px]:min-w-[300px]" style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
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

              <div className="flex flex-col sm:flex-row gap-5 w-full min-[1520px]:flex-1 min-[1520px]:w-auto min-[1520px]:min-w-0" style={{ alignItems: "stretch" }}>
                {screenshots.map((screenshot, idx) => (
                  <FadeIn
                    key={screenshot.title}
                    delay={idx * 0.08}
                    className="w-full"
                    style={{
                      border: "1px solid #272727",
                      borderRadius: "32px",
                      overflow: "hidden",
                      flex: "1 1 auto",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#d9d9d9",
                        backgroundImage: screenshot.image ? `url(${screenshot.image})` : undefined,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        aspectRatio: screenshot.image ? "1241 / 945" : undefined,
                        height: screenshot.image ? undefined : "560px",
                        width: "100%",
                      }}
                    />
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

              <div className="flex flex-col min-[1700px]:flex-row gap-5" style={{ width: "100%" }}>
                <CroppedIllustration
                  src={imgWhyIllustration}
                  alt="Conor Admin"
                  aspectRatio={737 / 590}
                  crop={{
                    widthFraction: 1744 / 737,
                    heightFraction: 974 / 590,
                    offsetXFraction: -716 / 737,
                    offsetYFraction: -371 / 590,
                  }}
                  borderRadius="32px"
                  className="w-full max-h-[420px] min-[1700px]:max-h-none min-[1700px]:w-[737px] min-[1700px]:flex-shrink-0"
                  logo={{
                    src: imgHeroLogo,
                    aspectRatio: 345 / 62,
                    widthFraction: 459 / 737,
                    boxAspectRatio: 459 / 128,
                    artWidthFraction: 345 / 459,
                    cornerRadius: "32px",
                    maxWidth: "340px",
                  }}
                />

                <div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full min-[1700px]:flex-1 min-[1700px]:w-auto min-[1700px]:min-w-0"
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
              className="flex flex-col min-[1024px]:flex-row items-center justify-between px-0 pt-10 pb-0 min-[1024px]:pl-24 min-[1024px]:pr-0 min-[1024px]:py-0 gap-8 min-[1024px]:gap-12 min-[1024px]:h-[480px]"
              style={{
                background: "linear-gradient(90deg, #008382, #20c4c3 43.269%)",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <div className="px-6 min-[1024px]:px-0 min-[1024px]:flex-[0_1_489px] min-[1024px]:min-w-[300px]" style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "489px" }}>
                <AnimatedTitle
                  as="h2"
                  className="text-3xl md:text-[40px] min-[1520px]:text-[48px]"
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
                <a
                  href={whatsappHref("Olá! Tenho interesse no Conor Admin e gostaria de falar com um consultor.")}
                  target="_blank"
                  rel="noopener noreferrer"
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
                    transition: "transform 0.2s ease, filter 0.2s ease, opacity 0.2s ease",
                    padding: "0 16px",
                    width: "fit-content",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.03)";
                    e.currentTarget.style.filter = "brightness(1.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.filter = "brightness(1)";
                  }}
                >
                  Comece agora
                </a>
              </div>

              {/* Ilustração: o SVG tem preserveAspectRatio="none", então precisa de um
                  background-size explícito na proporção original para não achatar. */}
              <div
                aria-hidden
                className="w-full aspect-[722/539] bg-[length:100%_100%] bg-center bg-no-repeat min-[1024px]:aspect-auto min-[1024px]:h-full min-[1024px]:flex-[1_1_400px] min-[1024px]:min-w-0 min-[1024px]:max-w-[643px] min-[1024px]:bg-[length:643px_480px] min-[1024px]:bg-center"
                style={{
                  backgroundImage: `url(${imgCtaIllustration})`,
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
