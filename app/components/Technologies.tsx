"use client";

import { colors } from "../styles/design-tokens";
import { AnimatedTitle } from "./motion/AnimatedTitle";
import { FadeIn } from "./motion/FadeIn";

const imgBroadcast = "/icons/icon-segment-broadcast.svg";
const imgShieldCheck = "/icons/icon-segment-shield-check.svg";
const imgCarBadge = "/icons/icon-segment-car-badge.svg";
const imgUserCircleCheck = "/icons/icon-segment-user-circle-check.svg";

interface Segment {
  id: number;
  title: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  icon: string;
  iconSize: number;
  /** When true, the icon asset already includes its own gradient square background. */
  flatIcon?: boolean;
}

const segments: Segment[] = [
  {
    id: 1,
    title: "Centrais de Rastreamento",
    color: "#52a4ff",
    gradientFrom: "#52a4ff",
    gradientTo: "#0079ff",
    icon: imgBroadcast,
    iconSize: 40,
  },
  {
    id: 2,
    title: "Associações de Proteção Veicular - PPM",
    color: "#fa7a22",
    gradientFrom: "#fa7a22",
    gradientTo: "#c04e00",
    icon: imgShieldCheck,
    iconSize: 48,
  },
  {
    id: 3,
    title: "Locadoras de veículos e transportadoras",
    color: "#996cfb",
    gradientFrom: "#996cfb",
    gradientTo: "#996cfb",
    icon: imgCarBadge,
    iconSize: 72,
    flatIcon: true,
  },
  {
    id: 4,
    title: "Empreendedores que querem iniciar",
    color: "#dd245c",
    gradientFrom: "#dd245c",
    gradientTo: "#c4003b",
    icon: imgUserCircleCheck,
    iconSize: 48,
  },
];

export function Technologies() {
  return (
    <section
      className="px-4 py-10 md:px-12 md:py-12"
      style={{
        backgroundColor: colors.background.dark,
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
          className="text-3xl md:text-[48px]"
          style={{
            fontWeight: 900,
            fontFamily: "var(--font-linear-grotesk)",
            color: colors.white,
            margin: "0 0 12px 0",
          }}
        >
          Nossos segmentos
        </AnimatedTitle>
        <p
          style={{
            fontSize: "16px",
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
        className="flex-col md:flex-row"
        style={{
          maxWidth: "1494px",
          margin: "0 auto",
          display: "flex",
          gap: "20px",
        }}
      >
        {segments.map((segment, idx) => (
          <FadeIn
            key={segment.id}
            delay={idx * 0.08}
            className="w-full md:flex-1 md:w-auto md:min-w-0"
            style={{
              backgroundColor: "#171717",
              border: "1px solid #272727",
              borderRadius: "32px",
              minHeight: "397px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "40px",
            }}
          >
            {/* Icon badge */}
            <div
              style={{
                alignSelf: "flex-start",
                padding: "1px",
                borderRadius: "24px",
                background: `linear-gradient(180deg, ${segment.color}ff, ${segment.color}00)`,
                boxShadow: `0 0 19px 0 ${segment.color}26`,
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px",
                  borderRadius: "23px",
                  backgroundColor: `${segment.color}1f`,
                }}
              >
                {segment.flatIcon ? (
                  <img src={segment.icon} alt="" style={{ width: `${segment.iconSize}px`, height: `${segment.iconSize}px` }} />
                ) : (
                  <div
                    style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "12px",
                      background: `linear-gradient(to bottom, ${segment.gradientFrom}, ${segment.gradientTo})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img src={segment.icon} alt="" style={{ width: `${segment.iconSize}px`, height: `${segment.iconSize}px` }} />
                  </div>
                )}
              </div>
            </div>

            {/* Title */}
            <h3
              style={{
                margin: 0,
                fontSize: "28px",
                fontWeight: 700,
                fontFamily: "var(--font-linear-grotesk)",
                color: colors.white,
                lineHeight: "1.2",
              }}
            >
              {segment.title}
            </h3>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
