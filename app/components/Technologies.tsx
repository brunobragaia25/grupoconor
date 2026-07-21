"use client";

import { colors } from "../styles/design-tokens";
import { AnimatedTitle } from "./motion/AnimatedTitle";
import { FadeIn } from "./motion/FadeIn";

const imgWhatsapp1 = "/icons/whatsapp-icon.svg";
const imgWhatsapp2 = "/icons/whatsapp-icon.svg";
const imgWhatsapp3 = "/icons/whatsapp-icon.svg";
const imgWhatsapp4 = "/icons/whatsapp-icon.svg";

interface TechCard {
  id: number;
  title: string;
  description: string;
  color: string;
  whatsappIcon: string;
}

const technologies: TechCard[] = [
  {
    id: 1,
    title: "Associação veicular",
    description:
      "O mercado rastreia menos de 5% da frota brasileira. Isso significa que, nos dias de hoje, cerca de 117,8 milhões de veículos ainda não possuem rastreamento no país. O mercado rastreia menos de 5% da frota brasileira. Isso significa que, nos dias de hoje, cerca de 117,8 milhões de veículos ainda não possuem rastreamento no país.",
    color: "#52a4ff",
    whatsappIcon: imgWhatsapp1,
  },
  {
    id: 2,
    title: "Furto & Roubo",
    description:
      "O mercado rastreia menos de 5% da frota brasileira. Isso significa que, nos dias de hoje, cerca de 117,8 milhões de veículos ainda não possuem rastreamento no país. O mercado rastreia menos de 5% da frota brasileira. Isso significa que, nos dias de hoje, cerca de 117,8 milhões de veículos ainda não possuem rastreamento no país.",
    color: "#fa7a22",
    whatsappIcon: imgWhatsapp2,
  },
  {
    id: 3,
    title: "Telemetria Avançada",
    description:
      "O mercado rastreia menos de 5% da frota brasileira. Isso significa que, nos dias de hoje, cerca de 117,8 milhões de veículos ainda não possuem rastreamento no país. O mercado rastreia menos de 5% da frota brasileira. Isso significa que, nos dias de hoje, cerca de 117,8 milhões de veículos ainda não possuem rastreamento no país.",
    color: "#996cfb",
    whatsappIcon: imgWhatsapp3,
  },
  {
    id: 4,
    title: "Recuperação Veicular",
    description:
      "O mercado rastreia menos de 5% da frota brasileira. Isso significa que, nos dias de hoje, cerca de 117,8 milhões de veículos ainda não possuem rastreamento no país. O mercado rastreia menos de 5% da frota brasileira. Isso significa que, nos dias de hoje, cerca de 117,8 milhões de veículos ainda não possuem rastreamento no país.",
    color: "#dd245c",
    whatsappIcon: imgWhatsapp4,
  },
];

export function Technologies() {
  return (
    <section
      style={{
        backgroundColor: colors.background.dark,
        padding: "48px 48px",
      }}
    >
      {/* Header */}
      <div
        style={{
          maxWidth: "1494px",
          margin: "0 auto 48px",
          textAlign: "center",
        }}
      >
        <AnimatedTitle
          as="h2"
          style={{
            fontSize: "48px",
            fontWeight: 700,
            fontFamily: "var(--font-linear-grotesk)",
            color: colors.white,
            margin: "0 0 12px 0",
          }}
        >
          Nossas tecnologias
        </AnimatedTitle>
        <p
          style={{
            fontSize: "14px",
            fontFamily: "var(--font-roboto)",
            color: colors.text.bodyLight,
            margin: 0,
            lineHeight: "18px",
          }}
        >
          Nossas tecnologias são usadas para os seguintes segmentos.
        </p>
      </div>

      {/* Grid */}
      <div
        style={{
          maxWidth: "1494px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "48px",
        }}
      >
        {technologies.map((tech, idx) => (
          <FadeIn
            key={tech.id}
            delay={idx * 0.08}
            style={{
              backgroundColor: "#171717",
              border: "1px solid #272727",
              borderRadius: "32px",
              overflow: "hidden",
              minHeight: "454px",
              display: "flex",
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "48px",
                padding: "48px",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  backgroundColor: tech.color,
                  flexShrink: 0,
                }}
              />

              {/* Content */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "26px",
                }}
              >
                {/* Title */}
                <h3
                  style={{
                    margin: 0,
                    fontSize: "24px",
                    fontWeight: 700,
                    fontFamily: "var(--font-linear-grotesk)",
                    color: colors.white,
                    lineHeight: "normal",
                  }}
                >
                  {tech.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    margin: 0,
                    fontSize: "14px",
                    fontFamily: "var(--font-roboto)",
                    color: colors.text.bodyLight,
                    lineHeight: "18px",
                  }}
                >
                  {tech.description}
                </p>
              </div>

              {/* Button */}
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  height: "40px",
                  backgroundColor: "transparent",
                  color: tech.color,
                  border: `1px solid ${tech.color}`,
                  borderRadius: "999px",
                  fontSize: "14px",
                  fontWeight: 500,
                  cursor: "pointer",
                  fontFamily: "var(--font-roboto)",
                  transition: "opacity 0.3s",
                  padding: "0 16px",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <img
                  src={tech.whatsappIcon}
                  alt="WhatsApp"
                  style={{
                    width: "16px",
                    height: "16px",
                  }}
                />
                <span>Falar com um consultor</span>
              </button>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
