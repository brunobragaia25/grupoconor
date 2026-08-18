"use client";

import { colors } from "../styles/design-tokens";
import { AnimatedTitle } from "./motion/AnimatedTitle";

const imgIllustration = "/image-ctahome-02.png";

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
          className="p-6 md:p-12 w-full md:flex-1 md:w-auto md:min-w-0"
          style={{
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

          {/* Button Tertiary — preto */}
          <a
            href="/cases"
            className="text-[12px] md:text-[14px] px-3 md:px-5 w-full md:w-auto"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              height: "40px",
              backgroundColor: colors.black,
              color: colors.white,
              border: `1px solid ${colors.black}`,
              borderRadius: "999px",
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "var(--font-roboto)",
              textDecoration: "none",
              transition: "transform 0.2s ease, filter 0.2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.filter = "brightness(1.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.filter = "brightness(1)";
            }}
          >
            <span>Veja o que nossos clientes estão dizendo</span>
            <img
              src="/icons/keyboard_double_arrow_right.svg"
              alt="arrow"
              style={{ width: "16px", height: "16px", flexShrink: 0 }}
            />
          </a>
        </div>

        {/* Lado direito - Ilustração */}
        <div
          className="h-[200px] md:h-auto w-full md:w-1/2 md:flex-none md:min-w-0"
          style={{
            overflow: "hidden",
            position: "relative",
            aspectRatio: "747 / 320",
          }}
        >
          <img
            src={imgIllustration}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
}
