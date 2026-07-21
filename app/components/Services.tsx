"use client";

import { colors } from "../styles/design-tokens";
import { AnimatedTitle } from "./motion/AnimatedTitle";
import { FadeIn } from "./motion/FadeIn";

const imgWhatsapp1 = "/icons/whatsapp-icon.svg";
const imgWhatsapp2 = "/icons/whatsapp-icon.svg";
const imgWhatsapp3 = "/icons/whatsapp-icon.svg";
const imgWhatsapp4 = "/icons/whatsapp-icon.svg";
const imgWhatsapp5 = "/icons/whatsapp-icon.svg";

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  whatsappIcon: string;
}

const servicesFirstRow: ServiceCard[] = [
  {
    id: 1,
    title: "Venda de chips",
    description:
      "O mercado rastreia menos de 5% da frota brasileira. Isso significa que, nos dias de hoje, cerca de 117,8 milhões de veículos ainda não possuem rastreamento no país.",
    
    whatsappIcon: imgWhatsapp1,
  },
  {
    id: 2,
    title: "Venda & locações de rastreadores",
    description:
      "O mercado rastreia menos de 5% da frota brasileira. Isso significa que, nos dias de hoje, cerca de 117,8 milhões de veículos ainda não possuem rastreamento no país.",
    
    whatsappIcon: imgWhatsapp2,
  },
];

const servicesSecondRow: ServiceCard[] = [
  {
    id: 3,
    title: "Seguros e benefícios",
    description:
      "O mercado rastreia menos de 5% da frota brasileira. Isso significa que, nos dias de hoje, cerca de 117,8 milhões de veículos ainda não possuem rastreamento no país.",
    
    whatsappIcon: imgWhatsapp3,
  },
  {
    id: 4,
    title: "Suporte humanizado",
    description:
      "O mercado rastreia menos de 5% da frota brasileira. Isso significa que, nos dias de hoje, cerca de 117,8 milhões de veículos ainda não possuem rastreamento no país.",
    
    whatsappIcon: imgWhatsapp4,
  },
  {
    id: 5,
    title: "Consultoria 360º",
    description:
      "O mercado rastreia menos de 5% da frota brasileira. Isso significa que, nos dias de hoje, cerca de 117,8 milhões de veículos ainda não possuem rastreamento no país.",
    
    whatsappIcon: imgWhatsapp5,
  },
];

function ServiceCard({ service, delay = 0 }: { service: ServiceCard; delay?: number }) {
  return (
    <FadeIn
      delay={delay}
      style={{
        backgroundColor: "#171717",
        border: "1px solid #272727",
        borderRadius: "32px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
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
            width: "80px",
            height: "80px",
            borderRadius: "999px",
            backgroundColor: "#52a4ff",
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
            {service.title}
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
            {service.description}
          </p>
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          {/* Primary Button */}
          <button
            style={{
              backgroundColor: "#52a4ff",
              color: colors.white,
              border: "none",
              height: "40px",
              padding: "0 16px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "var(--font-roboto)",
              transition: "opacity 0.3s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Saiba mais
          </button>

          {/* Secondary Button */}
          <button
            style={{
              backgroundColor: "transparent",
              color: "#52a4ff",
              border: "1px solid #52a4ff",
              height: "40px",
              padding: "0 16px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "var(--font-roboto)",
              transition: "opacity 0.3s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <img
              src={service.whatsappIcon}
              alt="WhatsApp"
              style={{
                width: "16px",
                height: "16px",
              }}
            />
            <span>Falar com um consultor</span>
          </button>
        </div>
      </div>
    </FadeIn>
  );
}

export function Services() {
  return (
    <section
      style={{
        backgroundColor: colors.background.dark,
        padding: "48px 48px",
      }}
    >
      {/* Title */}
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
            margin: 0,
          }}
        >
          Nossos serviços
        </AnimatedTitle>
      </div>

      {/* Grid Container */}
      <div
        style={{
          maxWidth: "1494px",
          margin: "0 auto",
        }}
      >
        {/* First Row - 2 cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "36px",
            marginBottom: "36px",
          }}
        >
          {servicesFirstRow.map((service, idx) => (
            <ServiceCard key={service.id} service={service} delay={idx * 0.08} />
          ))}
        </div>

        {/* Second Row - 3 cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "36px",
          }}
        >
          {servicesSecondRow.map((service, idx) => (
            <ServiceCard key={service.id} service={service} delay={idx * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
