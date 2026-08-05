"use client";

import { colors } from "../styles/design-tokens";
import { AnimatedTitle } from "./motion/AnimatedTitle";

const imgIllustration = "/image-promo-banner-02-final.png";

export function PromoBanner02() {
  return (
    <section
      className="px-4 py-10 md:px-12 md:py-12"
      style={{
        backgroundColor: colors.background.dark,
      }}
    >
      <div
        className="flex-col md:flex-row"
        style={{
          maxWidth: "1494px",
          margin: "0 auto",
          display: "flex",
          alignItems: "stretch",
          backgroundColor: colors.yellow,
          borderRadius: "32px",
          overflow: "hidden",
          minHeight: "320px",
        }}
      >
        {/* Lado esquerdo - Conteúdo */}
        <div
          className="p-6 md:p-12 w-full md:w-auto"
          style={{
            flex: "1 1 auto",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            alignItems: "flex-start",
            justifyContent: "center",
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
            className="text-xl md:text-[28px] w-full md:w-[600px]"
            style={{
              margin: 0,
              fontWeight: 700,
              fontFamily: "var(--font-linear-grotesk)",
              lineHeight: "normal",
              maxWidth: "600px",
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
          className="h-[200px] md:h-auto w-full md:w-auto"
          style={{
            flex: "1 1 auto",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={imgIllustration}
            alt=""
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
