"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { Layout } from "@/app/components/Layout";
import { Footer } from "@/app/components/Footer";
import { colors } from "@/app/styles/design-tokens";
import { AnimatedTitle } from "@/app/components/motion/AnimatedTitle";
import { FadeIn } from "@/app/components/motion/FadeIn";
import { CroppedIllustration } from "@/app/components/CroppedIllustration";
import { whatsappHref } from "@/app/lib/whatsapp";

const imgHeartSmileLarge = "/icons/icon-heart-smile-large.svg";
const imgHeroIllustration = "/image-fidelizar-hero.svg";
const imgCtaIllustration = "/image-fidelizar-cta.svg";
const imgShieldCheck = "/icons/icon-shield-check.svg";
const imgPackage = "/icons/icon-package.svg";
const imgHeadset = "/icons/icon-headset.svg";
const imgGift = "/icons/icon-gift.svg";
const imgRelacionadosSeguro = "/image-fidelizar-relacionados-seguro.jpg";
const imgRelacionadosSeguroLogo = "/icon-fidelizar-relacionados-seguro-logo2.svg";
const imgRelacionadosAssist = "/image-fidelizar-relacionados-assist.jpg";
const imgRelacionadosAssistLogo = "/icon-fidelizar-relacionados-assist-logo.svg";

const pillars = [
  {
    icon: imgShieldCheck,
    title: "Seguro",
    description: "Detalhamento sobre o programa de seguro",
  },
  {
    icon: imgPackage,
    title: "Estoque",
    description: "Como funciona o programa de estoque",
  },
  {
    icon: imgHeadset,
    title: "Assistência 24h",
    description: "Detalhes sobre a assistência humanizada",
  },
  {
    icon: imgGift,
    title: "Benefícios",
    description: "Benefícios adicionais para seus clientes",
  },
];

const steps = [
  {
    title: "Diagnóstico da sua base",
    description:
      "Entendemos o perfil dos seus clientes, o tamanho da base e onde estão as maiores perdas — cancelamento, inadimplência ou falta de diferencial frente à concorrência.",
  },
  {
    title: "Montagem do programa",
    description:
      "Definimos juntos quais benefícios entram na sua oferta: seguro, assistência 24h, estoque de equipamentos e vantagens exclusivas, no formato e no preço que fazem sentido para o seu negócio.",
  },
  {
    title: "Ativação",
    description:
      "Cuidamos de contrato, configuração e liberação dos serviços. Você não precisa desenvolver nada: a estrutura já está pronta e roda por trás da sua marca.",
  },
  {
    title: "Treinamento do seu time",
    description:
      "Preparamos quem vende e quem atende, com material de apoio e argumentos prontos para apresentar o programa à base atual e aos novos clientes.",
  },
  {
    title: "Acompanhamento e resultados",
    description:
      "Suporte consultivo contínuo, com acompanhamento de retenção e ajustes no programa conforme os números da sua operação.",
  },
];

const seguroFeatures = [
  {
    title: "Recuperação Veicular",
    description:
      "Em caso de furto ou roubo, o acionamento é imediato: equipe especializada trabalha junto com o rastreamento para localizar e recuperar o veículo do seu cliente.",
  },
  {
    title: "Telemetria avançada",
    description:
      "Dados de rota, velocidade e comportamento de condução em tempo real. Mais informação para reduzir riscos, orientar o cliente e diminuir sinistros na sua base.",
  },
  {
    title: "Homologação STC",
    description:
      "Equipamentos homologados no padrão exigido por seguradoras e gerenciadoras de risco — sua porta de entrada para frotas e cargas.",
  },
  {
    title: "Associação Veicular",
    description:
      "Alternativa ao seguro tradicional, com mensalidade acessível e proteção por rateio. Amplia o leque de opções que a sua central oferece a cada perfil de cliente.",
  },
];

const assistFeatures = [
  {
    title: "Financeira",
    description:
      "Cobrança recorrente, controle de inadimplência e conciliação das mensalidades da sua base — o financeiro da central rodando sem planilha e sem retrabalho.",
  },
  {
    title: "Administrativa",
    description:
      "Contratos, cadastros e rotinas do dia a dia centralizados em um só lugar, com apoio da nossa equipe para o seu time focar em vender e atender.",
  },
  {
    title: "Estoque",
    description:
      "Controle de rastreadores e chips por status: em estoque, instalado, em manutenção ou retornado. Você sabe exatamente onde está cada equipamento.",
  },
];

const accent = "#52a4ff";

function StepsTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  /** Pausa o ciclo automático assim que o visitante escolhe um passo. */
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setActiveStep((current) => (current + 1) % steps.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [autoPlay]);

  const selectStep = (idx: number) => {
    setAutoPlay(false);
    setActiveStep(idx);
  };

  return (
    <div className="w-full md:flex-1 md:w-auto md:min-w-0" style={{ display: "flex", flexDirection: "column" }}>
      {steps.map((step, idx) => {
        const isActive = idx === activeStep;
        const isLast = idx === steps.length - 1;

        return (
          <FadeIn key={step.title} delay={idx * 0.08} style={{ display: "flex", gap: "20px" }}>
            {/* Coluna da numeração */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
              <button
                onClick={() => selectStep(idx)}
                aria-label={`Passo 0${idx + 1}`}
                aria-current={isActive}
                className="w-[44px] h-[44px] md:w-[56px] md:h-[56px]"
                style={{
                  borderRadius: "999px",
                  border: `2px solid ${accent}`,
                  backgroundColor: isActive ? accent : "#171717",
                  color: isActive ? colors.black : colors.white,
                  fontFamily: "var(--font-linear-grotesk)",
                  fontWeight: 700,
                  fontSize: "16px",
                  cursor: "pointer",
                  flexShrink: 0,
                  transition: "background-color 0.3s, color 0.3s",
                }}
              >
                0{idx + 1}
              </button>
              {!isLast && (
                <div
                  style={{
                    width: "2px",
                    flex: 1,
                    minHeight: "20px",
                    backgroundColor: `${accent}4d`,
                  }}
                />
              )}
            </div>

            {/* Card do passo */}
            <button
              onClick={() => selectStep(idx)}
              className="p-5 md:px-8 md:py-6"
              style={{
                flex: 1,
                minWidth: 0,
                marginBottom: isLast ? 0 : "20px",
                textAlign: "left",
                borderRadius: "16px",
                border: `1px solid ${isActive ? accent : "#272727"}`,
                backgroundColor: isActive ? `${accent}26` : colors.black,
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: isActive ? "8px" : 0,
                transition: "background-color 0.3s, border-color 0.3s",
              }}
            >
              <span
                className="text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "var(--font-linear-grotesk)",
                  fontWeight: 700,
                  color: isActive ? colors.white : colors.text.bodyLight,
                  transition: "color 0.3s",
                }}
              >
                {step.title}
              </span>
              {isActive && (
                <span
                  style={{
                    fontFamily: "var(--font-roboto)",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: colors.white,
                  }}
                >
                  {step.description}
                </span>
              )}
            </button>
          </FadeIn>
        );
      })}
    </div>
  );
}

function RelatedFeatureCard({
  title,
  description,
  color = "#fec22d",
  style,
}: {
  title: string;
  description: string;
  color?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className="p-16"
      style={{
        backgroundColor: "#171717",
        border: "1px solid #272727",
        borderRadius: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "26px",
        ...style,
      }}
    >
      <p style={{ margin: 0, fontSize: "24px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color }}>
        {title}
      </p>
      <p style={{ margin: 0, fontSize: "14px", fontFamily: "var(--font-roboto)", color: colors.text.bodyLight, lineHeight: "24px" }}>
        {description}
      </p>
    </div>
  );
}

export default function Fidelizar() {
  return (
    <Layout>
      <div style={{ backgroundColor: colors.background.dark }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
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
              className="flex flex-col md:flex-row gap-5 md:gap-10 items-start md:items-center"
              style={{
                position: "relative",
                zIndex: 1,
              }}
            >
              <img
                src={imgHeartSmileLarge}
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
                    { text: "Fidelizar ", color: "#bcddfa" },
                    { text: "seus clientes.", color: colors.white },
                  ]}
                </AnimatedTitle>
                <p
                  style={{
                    fontSize: "18px",
                    fontFamily: "var(--font-roboto)",
                    color: colors.white,
                    margin: 0,
                    lineHeight: "28px",
                    maxWidth: "474px",
                  }}
                >
                  Garantimos programas de benefícios, serviços de seguro e
                  assistência 24h para a sua empresa
                </p>
              </div>
            </div>

            <div
              className="relative w-full h-[200px] md:absolute md:right-0 md:top-0 md:bottom-0 md:h-auto md:w-[740px] overflow-hidden pointer-events-none"
            >
              <div
                className="absolute inset-0 bg-contain bg-no-repeat bg-center md:bg-repeat md:w-[4077.83px] md:h-[2276px] md:left-[-1697px] md:top-[-838px] md:bg-auto"
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
            {/* Pilares */}
            <div className="flex flex-col md:flex-row gap-5">
              {pillars.map((pillar, idx) => (
                <FadeIn
                  key={pillar.title}
                  delay={idx * 0.08}
                  className="p-6 md:p-12 w-full md:flex-1 md:w-auto md:min-w-0"
                  style={{
                    backgroundColor: "#171717",
                    border: "1px solid #272727",
                    borderRadius: "32px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "260px",
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
                    <img src={pillar.icon} alt="" style={{ width: "32px", height: "32px" }} />
                  </div>
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
                      {pillar.title}
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
                      {pillar.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Como funciona */}
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-stretch">
              <div className="md:w-[392px]" style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
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
                    Como funciona o programa
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
                    Do primeiro diagnóstico até o acompanhamento dos
                    resultados, cuidamos da estrutura para que você ofereça
                    seguro, assistência 24h e benefícios exclusivos aos seus
                    clientes — sem precisar montar nada do zero.
                  </p>
                </div>
              </div>

              <StepsTimeline />
            </div>

            {/* Produtos Relacionados */}
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
                Produtos relacionados
              </AnimatedTitle>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
                {/* Bloco 1: Conor Seguro */}
                <div className="flex flex-col md:flex-row gap-5" style={{ width: "100%" }}>
                  <CroppedIllustration
                    src={imgRelacionadosSeguro}
                    alt="Conor Seguro"
                    aspectRatio={737 / 638}
                    crop={{
                      widthFraction: 1419 / 737,
                      heightFraction: 792 / 638,
                      offsetXFraction: -582 / 737,
                      offsetYFraction: -141 / 638,
                    }}
                    borderRadius="32px"
                    className="w-full md:w-[737px] md:h-[638px] md:flex-shrink-0"
                    logo={{
                      src: imgRelacionadosSeguroLogo,
                      aspectRatio: 357 / 62,
                      widthFraction: 459 / 737,
                      boxAspectRatio: 459 / 128,
                      artWidthFraction: 357 / 459,
                      cornerRadius: "32px",
                    }}
                  />

                  <div className="w-full md:flex-1 md:w-auto md:min-w-0" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 w-full md:flex-1 md:w-auto md:min-w-0" style={{ gap: "20px" }}>
                      {seguroFeatures.slice(0, 2).map((feature, idx) => (
                        <FadeIn className="w-full md:flex-1 md:w-auto md:min-w-0" key={feature.title} delay={idx * 0.08} style={{ height: "100%" }}>
                          <RelatedFeatureCard title={feature.title} description={feature.description} style={{ height: "100%" }} />
                        </FadeIn>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 w-full md:flex-1 md:w-auto md:min-w-0" style={{ gap: "20px" }}>
                      {seguroFeatures.slice(2, 4).map((feature, idx) => (
                        <FadeIn className="w-full md:flex-1 md:w-auto md:min-w-0" key={feature.title} delay={idx * 0.08} style={{ height: "100%" }}>
                          <RelatedFeatureCard title={feature.title} description={feature.description} style={{ height: "100%" }} />
                        </FadeIn>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bloco 2: Conor Assist */}
                <div className="flex flex-col md:flex-row gap-5" style={{ width: "100%" }}>
                  <div className="order-2 md:order-1 w-full md:flex-1 md:w-auto md:min-w-0" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <FadeIn className="w-full md:flex-1 md:w-auto md:min-w-0" style={{  }}>
                      <RelatedFeatureCard
                        title={assistFeatures[0].title}
                        description={assistFeatures[0].description}
                        color="#996cfb"
                        style={{ height: "100%" }}
                      />
                    </FadeIn>
                    <div className="grid grid-cols-1 sm:grid-cols-2 w-full md:flex-1 md:w-auto md:min-w-0" style={{ gap: "20px" }}>
                      {assistFeatures.slice(1, 3).map((feature, idx) => (
                        <FadeIn className="w-full md:flex-1 md:w-auto md:min-w-0" key={feature.title} delay={idx * 0.08} style={{  }}>
                          <RelatedFeatureCard
                            title={feature.title}
                            description={feature.description}
                            color="#996cfb"
                            style={{ height: "100%" }}
                          />
                        </FadeIn>
                      ))}
                    </div>
                  </div>

                  <CroppedIllustration
                    src={imgRelacionadosAssist}
                    alt="Conor Assist"
                    aspectRatio={737 / 590}
                    crop={{
                      widthFraction: 1480 / 737,
                      heightFraction: 826 / 590,
                      offsetXFraction: -388 / 737,
                      offsetYFraction: -236 / 590,
                    }}
                    borderRadius="32px"
                    className="order-1 md:order-2 w-full md:w-[737px] md:h-[590px] md:flex-shrink-0"
                    logo={{
                      src: imgRelacionadosAssistLogo,
                      aspectRatio: 321 / 62,
                      widthFraction: 459 / 737,
                      boxAspectRatio: 459 / 128,
                      artWidthFraction: 321 / 459,
                      cornerRadius: "32px",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* CTA Final */}
            <div
              className="flex flex-col md:flex-row items-center justify-between px-0 pt-10 pb-0 md:pl-24 md:pr-0 md:py-24 gap-8 md:h-[480px]"
              style={{
                background: "linear-gradient(90deg, #54a8fd, #52a4ff 43.269%)",
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
                  Pronto para fidelizar seus clientes?
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
                  Implemente nossos programas de benefícios e comece a fazer
                  a diferença na retenção de seus clientes hoje mesmo.
                </p>
                <a
                  href={whatsappHref("Olá! Tenho interesse no programa de fidelização Conor e gostaria de falar com um consultor.")}
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

              <img
                src={imgCtaIllustration}
                alt=""
                className="w-full h-auto aspect-[707/480] object-contain md:aspect-auto md:object-cover md:h-[480px] md:w-[707px]"
                style={{
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
