"use client";

import { colors } from "../styles/design-tokens";
import { AnimatedTitle } from "./motion/AnimatedTitle";
import { FadeIn } from "./motion/FadeIn";

const imgImageIniciando = "/image-primaria-conor-assist 1.png";
const imgImageMercado = "/image-primaria-conor-rastreio 1.png";
const imgImagePersonalizado = "/image-primaria-conor-rastreio 2.png";
const imgArrow = "/icons/keyboard_double_arrow_right.svg";
const imgVectorMercado = "https://www.figma.com/api/mcp/asset/f07a764e-6e7e-4162-bd99-b5e7a2fff464";
const imgVectorPersonalizado = "https://www.figma.com/api/mcp/asset/8f006150-89ab-4bae-8bda-3b504ca03603";

const cards = [
  {
    id: 1,
    label: "PRA QUEM ESTÁ INICIANDO",
    title: "Começar um negócio de com apenas R$500?",
    description: "O mercado rastreia menos de 5% da frota brasileira. Isso significa que, nos dias de hoje, cerca de 117,8 milhões de veículos ainda não possuem rastreamento no país.",
    buttonText: "Começar a empreender",
    color: "#20c4c3",
    imgType: "iniciando" as const,
  },
  {
    id: 2,
    label: "PRA QUEM ESTÁ NO MERCADO",
    title: "Aumentar a base atual em +100 novos clientes?",
    description: "Segundo o IBGE, a cada hora, 64 veículos são roubados por dia e, em média, 373 mil carros são levados por criminosos no Brasil. Ainda existem oportunidades para expandir.",
    buttonText: "Vamos juntos crescer",
    color: "#fa7a22",
    imgType: "mercado" as const,
  },
  {
    id: 3,
    label: "PERSONALIZADO",
    title: "Montar combo de rastreamento veicular.",
    description: "Monte o combo ideal de Rastreamento Veicular de forma simples, rápida e totalmente personalizada para a sua necessidade. Escolha os recursos certos.",
    buttonText: "Clique e monte seu combo agora",
    color: "#996cfb",
    imgType: "personalizado" as const,
  },
];

export function HeroSection() {
  return (
    <section
      style={{
        backgroundColor: colors.background.dark,
        padding: "96px 96px",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        alignItems: "center",
      }}
    >
      {/* Título */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          maxWidth: "1400px",
        }}
      >
        <AnimatedTitle
          as="p"
          style={{
            margin: 0,
            fontFamily: "var(--font-linear-grotesk)",
            fontWeight: 900,
            fontSize: "48px",
            lineHeight: 1,
            color: colors.white,
            width: "100%",
          }}
        >
          Como podemos te ajudar?
        </AnimatedTitle>
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-roboto)",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "18px",
            color: colors.white,
            maxWidth: "600px",
          }}
        >
          Nosso negócio é fazer nosso cliente crescer no mercado de rastreamento veicular.
        </p>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "stretch",
          width: "100%",
        }}
      >
        {cards.map((card, idx) => (
          <FadeIn
            key={card.id}
            delay={idx * 0.1}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              borderRadius: "8px",
              overflow: "hidden",
              minWidth: 0,
            }}
          >
            {/* Imagem topo */}
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "32px 32px 0 0",
                aspectRatio: "711 / 524",
                flexShrink: 0,
              }}
            >
              {card.imgType === "iniciando" && (
                <img
                  src={imgImageIniciando}
                  alt=""
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 30%",
                  }}
                />
              )}
              {card.imgType === "mercado" && (
                <img
                  src={imgImageMercado}
                  alt=""
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 30%",
                  }}
                />
              )}
              {card.imgType === "personalizado" && (
                <img
                  src={imgImagePersonalizado}
                  alt=""
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center center",
                  }}
                />
              )}
            </div>

            {/* Conteúdo */}
            <div
              style={{
                backgroundColor: "#000000",
                borderRadius: "0 0 32px 32px",
                padding: "48px",
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                alignItems: "flex-start",
                flex: 1,
              }}
            >
              {/* Badge */}
              <div
                style={{
                  border: `1px solid ${card.color}`,
                  borderRadius: "300px",
                  padding: "6px 12px",
                  display: "inline-flex",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-roboto)",
                    fontWeight: 400,
                    fontSize: "10px",
                    color: colors.white,
                    whiteSpace: "nowrap",
                  }}
                >
                  {card.label}
                </span>
              </div>

              {/* Heading */}
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-linear-grotesk)",
                  fontWeight: 900,
                  fontSize: "36px",
                  lineHeight: "1.2",
                  color: card.color,
                  width: "100%",
                }}
              >
                {card.title}
              </p>

              {/* Descrição */}
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-roboto)",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "18px",
                  color: colors.text.bodyLight,
                  width: "100%",
                }}
              >
                {card.description}
              </p>

              {/* Botão */}
              <div
                style={{
                  backgroundColor: card.color,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  height: "40px",
                  padding: "0 16px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-roboto)",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: colors.white,
                    whiteSpace: "nowrap",
                  }}
                >
                  {card.buttonText}
                </span>
                <img src={imgArrow} alt="" style={{ width: "16px", height: "16px", display: "block" }} />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
