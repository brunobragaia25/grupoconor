"use client";

import { colors } from "../styles/design-tokens";
import { AnimatedTitle } from "./motion/AnimatedTitle";

const imgFrame321 = "/image-ctahome-01.png";
const imgKeyboardDoubleArrowRight =
  "/icons/keyboard_double_arrow_right.svg";

export function PromoSection() {
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
          backgroundColor: "#000000",
          borderRadius: "32px",
          overflow: "hidden",
          minHeight: "254px",
        }}
      >
        {/* Lado esquerdo - Ilustração */}
        <div
          className="h-[200px] md:h-auto w-full md:flex-1 md:w-auto md:min-w-0"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={imgFrame321}
            alt="Decoração"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>

        {/* Lado direito - Conteúdo */}
        <div
          className="p-6 md:p-12 w-full md:flex-1 md:w-auto md:min-w-0"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          {/* Label */}
          <p
            style={{
              margin: 0,
              fontSize: "12px",
              fontWeight: 600,
              color: colors.text.bodyLight,
              textTransform: "uppercase",
              letterSpacing: "0px",
              fontFamily: "var(--font-roboto)",
              whiteSpace: "nowrap",
            }}
          >
            MERCADO DE RASTREAMENTO VEICULAR
          </p>

          {/* Título com highlight amarelo */}
          <AnimatedTitle
            as="h2"
            className="text-xl md:text-[28px] w-full md:w-[600px]"
            style={{
              margin: 0,
              fontWeight: 700,
              fontFamily: "var(--font-linear-grotesk)",
              lineHeight: "normal",
              maxWidth: "600px",
              color: colors.white,
            }}
          >
            {[
              "Somos a única empresa que ajuda de forma 360º os ",
              { text: "empreendedores brasileiros ", color: colors.yellow },
              "a crescerem.",
            ]}
          </AnimatedTitle>

          {/* Button Tertiary */}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              height: "40px",
              backgroundColor: "transparent",
              color: "#fec22d",
              border: "1px solid #fec22d",
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
              src="/icons/keyboard_double_arrow_right_yellow.svg"
              alt="arrow"
              style={{ width: "16px", height: "16px", flexShrink: 0 }}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
