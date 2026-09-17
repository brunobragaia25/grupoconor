"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
const imgHeadset = "/icons/icon-headset.svg";
const imgGift = "/icons/icon-gift.svg";
const imgRelacionadosSeguro = "/image-fidelizar-relacionados-seguro.jpg";
const imgRelacionadosSeguroLogo = "/icon-fidelizar-relacionados-seguro-logo2.svg";
const imgRelacionadosAssist = "/image-fidelizar-relacionados-assist.jpg";
const imgRelacionadosAssistLogo = "/icon-fidelizar-relacionados-assist-logo.svg";

const imgHandshake = "/icons/icon-handshake.svg";
const imgShieldWarning = "/icons/icon-shield-warning.svg";
const imgCoins = "/icons/icon-coins.svg";
const imgCar = "/icons/icon-car.svg";
const imgDrop = "/icons/icon-drop.svg";
const imgHouse = "/icons/icon-house.svg";
const imgHeartOutline = "/icons/icon-heart-outline.svg";
const imgTruck = "/icons/icon-truck.svg";
const imgTowTruck = "/icons/icon-tow-truck.svg";
const imgLightning = "/icons/icon-lightning.svg";
const imgFuel = "/icons/icon-fuel.svg";
const imgBed = "/icons/icon-bed.svg";

const pillars = [
  {
    icon: imgShieldCheck,
    title: "Seguro",
    description: "Detalhamento sobre o programa de seguro",
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
  { title: "Seguro Furto e Roubo", icon: imgShieldCheck },
  { title: "Seguro RCFV (Seguro de Terceiros)", icon: imgHandshake },
  { title: "Seguro APP", icon: imgShieldWarning },
  { title: "Lucros Cessantes", icon: imgCoins },
  { title: "Carro Reserva", icon: imgCar },
  { title: "Assistência Vidro", icon: imgDrop },
  { title: "Assistência Residencial", icon: imgHouse },
  { title: "Assistência Funeral", icon: imgHeartOutline },
];

const assistFeatures = [
  { title: "Guincho", icon: imgTowTruck },
  { title: "Reboque", icon: imgTruck },
  { title: "Pane Elétrica", icon: imgLightning },
  { title: "Pane Seca", icon: imgFuel },
  { title: "Taxi", icon: imgCar },
  { title: "Hospedagem Hotel", icon: imgBed },
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
  icon,
  color = "#ffc301",
  style,
}: {
  title: string;
  icon?: string;
  color?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className="p-8 md:p-12"
      style={{
        backgroundColor: "#171717",
        border: "1px solid #272727",
        borderRadius: "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "16px",
        ...style,
      }}
    >
      {icon && (
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            backgroundColor: color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <img src={icon} alt="" style={{ width: "32px", height: "32px" }} />
        </div>
      )}
      <p
        className="text-[16px] sm:text-[20px]"
        style={{ margin: 0, fontWeight: 400, fontFamily: "var(--font-roboto)", color: colors.text.bodyLight }}
      >
        {title}
      </p>
    </div>
  );
}

/** Setinha circular usada na navegação dos carrosséis de produtos relacionados.
 *  O SVG usa fill/stroke "currentColor", então é aplicado via mask para poder
 *  ser tingido com qualquer cor de destaque sem precisar de um arquivo por cor. */
function CarouselArrow({
  direction,
  color,
  onClick,
  label,
}: {
  direction: "left" | "right";
  color: string;
  onClick: () => void;
  label: string;
}) {
  const src = direction === "left" ? "/icons/icon-caret-circle-left.svg" : "/icons/icon-caret-circle-right.svg";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      style={{
        width: "52px",
        height: "52px",
        flexShrink: 0,
        border: "none",
        background: "none",
        padding: 0,
        cursor: "pointer",
        transition: "transform 0.2s ease, opacity 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: color,
          maskImage: `url(${src})`,
          maskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskImage: `url(${src})`,
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
        }}
      />
    </button>
  );
}

/** Carrossel dos produtos relacionados: mostra 3 cards por vez, com setas
 *  circulares para navegar entre as páginas (cíclico). */
function RelatedFeatureCarousel({
  features,
  color,
  align,
}: {
  features: { title: string; icon: string }[];
  color: string;
  align: "start" | "end";
}) {
  const pageSize = 3;
  const pageCount = Math.ceil(features.length / pageSize);
  const [page, setPage] = useState(0);
  /** +1 ao avançar, -1 ao voltar — decide de que lado o slide entra. */
  const [direction, setDirection] = useState(1);

  // A última página trava no final da lista (em vez de sobrar só 1-2 itens),
  // então sempre aparecem exatamente 3 cards, mesmo quando o total não é
  // múltiplo de 3.
  const maxStart = Math.max(0, features.length - pageSize);
  const start = Math.min(page * pageSize, maxStart);
  const visible = features.slice(start, start + pageSize);

  const goTo = (nextPage: number, dir: 1 | -1) => {
    setDirection(dir);
    setPage(nextPage);
  };

  return (
    <div
      className="w-full min-[1700px]:flex-1 min-[1700px]:w-auto min-[1700px]:min-w-0"
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      {/* Mobile: sem carrossel — os cards já empilham em coluna, então faz
          mais sentido listar todos de uma vez do que escondê-los atrás de
          setas. */}
      <div className="flex sm:hidden flex-col gap-5 w-full">
        {features.map((feature) => (
          <RelatedFeatureCard key={feature.title} title={feature.title} icon={feature.icon} color={color} />
        ))}
      </div>

      {/* Do sm pra cima: carrossel de 3 cards por página, com setas. */}
      <div className="hidden sm:flex flex-col gap-5 w-full">
        {pageCount > 1 && (
          <div style={{ display: "flex", gap: "12px", justifyContent: align === "end" ? "flex-end" : "flex-start" }}>
            <CarouselArrow
              direction="left"
              color={color}
              label="Página anterior"
              onClick={() => goTo((page - 1 + pageCount) % pageCount, -1)}
            />
            <CarouselArrow
              direction="right"
              color={color}
              label="Próxima página"
              onClick={() => goTo((page + 1) % pageCount, 1)}
            />
          </div>
        )}
        {/* min-height fixa: sem ela, títulos mais longos (2-3 linhas) fariam
            a altura dos cards — e da ilustração ao lado, via stretch —
            mudar a cada troca de página. */}
        <div className="relative w-full min-h-[240px] overflow-hidden" style={{ flex: 1 }}>
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={page}
              custom={direction}
              initial={{ x: direction > 0 ? 40 : -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -40 : 40, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex flex-row gap-5 w-full"
            >
              {visible.map((feature) => (
                <div className="w-full h-full" key={feature.title}>
                  <RelatedFeatureCard title={feature.title} icon={feature.icon} color={color} style={{ height: "100%" }} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
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
              className="flex flex-col md:flex-row gap-5 md:gap-10 items-start"
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
                  className="text-4xl md:text-[44px] min-[1300px]:text-[56px]!"
                  style={{
                    fontWeight: 700,
                    fontFamily: "var(--font-linear-grotesk)",
                    margin: 0,
                    lineHeight: "normal",
                    maxWidth: "clamp(320px, calc(100vw - 1124px), 716px)",
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
                    maxWidth: "clamp(280px, calc(100vw - 1124px), 474px)",
                  }}
                >
                  Garantimos programas de benefícios, serviços de seguro e
                  assistência 24h para a sua empresa
                </p>
              </div>
            </div>

            <div
              className="relative w-full h-[200px] md:absolute md:right-0 md:top-0 md:bottom-0 md:h-auto md:w-[var(--hero-illus-w)] overflow-hidden pointer-events-none"
              style={{ ["--hero-illus-w" as string]: "min(740px, max(330px, calc(100vw - 424px - clamp(320px, calc(100vw - 1124px), 716px))))" }}
            >
              <div
                className="absolute inset-0 bg-contain bg-no-repeat bg-center md:w-[calc(var(--hero-illus-w)*4077.83/740)] md:h-[calc(var(--hero-illus-w)*2276/740)] md:left-[calc(var(--hero-illus-w)*-1697/740)] md:top-[calc(var(--hero-illus-w)*-838/740)] md:bg-[length:calc(var(--hero-illus-w)*4077.83/740)_calc(var(--hero-illus-w)*2276/740)]"
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
                <div id="conor-seguro" className="flex flex-col min-[1700px]:flex-row gap-5" style={{ width: "100%", scrollMarginTop: "100px" }}>
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
                    className="w-full max-h-[420px] min-[1700px]:max-h-none min-[1700px]:w-[737px] min-[1700px]:flex-shrink-0 min-[1700px]:aspect-auto!"
                    logo={{
                      src: imgRelacionadosSeguroLogo,
                      aspectRatio: 357 / 62,
                      widthFraction: 459 / 737,
                      boxAspectRatio: 459 / 128,
                      artWidthFraction: 357 / 459,
                      cornerRadius: "32px",
                    }}
                  />

                  <RelatedFeatureCarousel features={seguroFeatures} color="#ffc301" align="end" />
                </div>

                {/* Bloco 2: Conor Assist */}
                <div id="conor-assist" className="flex flex-col min-[1700px]:flex-row gap-5" style={{ width: "100%", scrollMarginTop: "100px" }}>
                  <div className="order-2 min-[1700px]:order-1 w-full min-[1700px]:flex-1 min-[1700px]:w-auto min-[1700px]:min-w-0" style={{ display: "flex" }}>
                    <RelatedFeatureCarousel features={assistFeatures} color="#996cfb" align="start" />
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
                    className="order-1 min-[1700px]:order-2 w-full max-h-[420px] min-[1700px]:max-h-none min-[1700px]:w-[737px] min-[1700px]:flex-shrink-0 min-[1700px]:aspect-auto!"
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
              className="flex flex-col min-[1024px]:flex-row items-center justify-between px-0 pt-10 pb-0 min-[1024px]:pl-24 min-[1024px]:pr-0 min-[1024px]:py-0 gap-8 min-[1024px]:gap-12 min-[1024px]:h-[480px]"
              style={{
                background: "linear-gradient(90deg, #54a8fd, #52a4ff 43.269%)",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <div className="px-6 min-[1024px]:px-0 min-[1024px]:flex-[0_1_489px] min-[1024px]:min-w-[300px]" style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "489px" }}>
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

              {/* Ilustração: o SVG tem preserveAspectRatio="none", então precisa de um
                  background-size explícito na proporção original para não achatar. */}
              <div
                aria-hidden
                className="w-full aspect-[707/480] bg-[length:100%_100%] bg-center bg-no-repeat min-[1024px]:aspect-auto min-[1024px]:h-full min-[1024px]:flex-[1_1_400px] min-[1024px]:min-w-0 min-[1024px]:max-w-[707px] min-[1024px]:bg-[length:707px_480px] min-[1024px]:bg-center"
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
