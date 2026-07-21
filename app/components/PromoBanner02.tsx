"use client";

import { colors } from "../styles/design-tokens";
import { AnimatedTitle } from "./motion/AnimatedTitle";

const imgIllustration = "/image-promo-banner-02.svg";

export function PromoBanner02() {
  return (
    <section
      style={{
        backgroundColor: colors.background.dark,
        padding: "48px 48px",
      }}
    >
      <div
        style={{
          maxWidth: "1494px",
          margin: "0 auto",
          display: "flex",
          alignItems: "stretch",
          backgroundColor: colors.yellow,
          borderRadius: "32px",
          overflow: "hidden",
          minHeight: "254px",
        }}
      >
        {/* Lado esquerdo - Conteúdo */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "48px",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "12px",
              fontWeight: 600,
              color: colors.black,
              textTransform: "uppercase",
              letterSpacing: "0px",
              fontFamily: "var(--font-roboto)",
              whiteSpace: "nowrap",
            }}
          >
            MERCADO DE RASTREAMENTO VEICULAR
          </p>

          <AnimatedTitle
            as="h2"
            style={{
              margin: 0,
              fontSize: "28px",
              fontWeight: 700,
              fontFamily: "var(--font-linear-grotesk)",
              lineHeight: "normal",
              maxWidth: "600px",
              width: "600px",
              color: colors.black,
            }}
          >
            Somos a única empresa que ajuda de forma 360º os empreendedores
            brasileiros a crescerem.
          </AnimatedTitle>

          {/* Button Tertiary — branco */}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              height: "40px",
              backgroundColor: "transparent",
              color: colors.white,
              border: `1px solid ${colors.white}`,
              borderRadius: "999px",
              fontWeight: 500,
              fontSize: "14px",
              cursor: "pointer",
              fontFamily: "var(--font-roboto)",
              transition: "opacity 0.3s",
              padding: "0 20px",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <span>Veja o que nossos clientes estão dizendo</span>
            <img
              src="/icons/keyboard_double_arrow_right.svg"
              alt="arrow"
              style={{ width: "16px", height: "16px", flexShrink: 0 }}
            />
          </button>
        </div>

        {/* Lado direito - Ilustração */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={imgIllustration}
            alt="Decoração"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </div>
    </section>
  );
}
