"use client";

import { colors } from "../styles/design-tokens";
import { AnimatedTitle } from "./motion/AnimatedTitle";
import { FadeIn } from "./motion/FadeIn";

const imgCpu = "/icons/icon-service-cpu.svg";
const imgCrosshair = "/icons/icon-service-crosshair.svg";
const imgLockOpen = "/icons/icon-service-lock-open.svg";
const imgHeadset = "/icons/icon-service-headset.svg";
const imgArrowClockwise = "/icons/icon-service-arrow-clockwise.svg";

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const servicesFirstRow: ServiceCard[] = [
  {
    id: 1,
    title: "Venda de chips",
    description:
      "O mercado rastreia menos de 5% da frota brasileira. Isso significa que, nos dias de hoje, cerca de 117,8 milhões de veículos ainda não possuem rastreamento no país.",
    icon: imgCpu,
  },
  {
    id: 2,
    title: "Venda & locações de rastreadores",
    description:
      "O mercado rastreia menos de 5% da frota brasileira. Isso significa que, nos dias de hoje, cerca de 117,8 milhões de veículos ainda não possuem rastreamento no país.",
    icon: imgCrosshair,
  },
];

const servicesSecondRow: ServiceCard[] = [
  {
    id: 3,
    title: "Seguros e benefícios",
    description:
      "O mercado rastreia menos de 5% da frota brasileira. Isso significa que, nos dias de hoje, cerca de 117,8 milhões de veículos ainda não possuem rastreamento no país.",
    icon: imgLockOpen,
  },
  {
    id: 4,
    title: "Suporte humanizado",
    description:
      "O mercado rastreia menos de 5% da frota brasileira. Isso significa que, nos dias de hoje, cerca de 117,8 milhões de veículos ainda não possuem rastreamento no país.",
    icon: imgHeadset,
  },
  {
    id: 5,
    title: "Consultoria 360º",
    description:
      "O mercado rastreia menos de 5% da frota brasileira. Isso significa que, nos dias de hoje, cerca de 117,8 milhões de veículos ainda não possuem rastreamento no país.",
    icon: imgArrowClockwise,
  },
];

function ServiceCard({ service, delay = 0 }: { service: ServiceCard; delay?: number }) {
  return (
    <FadeIn
      delay={delay}
      className="h-auto md:h-[480px]"
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
        className="p-6 md:p-16 gap-8 md:gap-0"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Icon badge */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "40px",
            backgroundColor: "rgba(82, 164, 255, 0.2)",
            border: "1px solid #52a4ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "28px",
              backgroundColor: "#52a4ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={service.icon} alt="" style={{ width: "32px", height: "32px" }} />
          </div>
        </div>

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
      </div>
    </FadeIn>
  );
}

export function Services() {
  return (
    <section
      className="px-4 py-10 md:px-12 md:py-12"
      style={{
        backgroundColor: colors.background.dark,
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
          className="text-3xl md:text-[48px]"
          style={{
            fontWeight: 900,
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
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* First Row - 2 cards */}
        <div
          className="flex-col md:flex-row"
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          {servicesFirstRow.map((service, idx) => (
            <div key={service.id} className="w-full md:flex-1 md:w-auto md:min-w-0">
              <ServiceCard service={service} delay={idx * 0.08} />
            </div>
          ))}
        </div>

        {/* Second Row - 3 cards */}
        <div
          className="flex-col md:flex-row"
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          {servicesSecondRow.map((service, idx) => (
            <div key={service.id} className="w-full md:flex-1 md:w-auto md:min-w-0">
              <ServiceCard service={service} delay={idx * 0.08} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
