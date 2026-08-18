"use client";

import { colors } from "../styles/design-tokens";
import { AnimatedTitle } from "./motion/AnimatedTitle";
import { whatsappHref } from "@/app/lib/whatsapp";

const imgIllustration = "/image-ctahome-03.png";
const imgWhatsapp = "/icons/whatsapp-icon.svg";
const imgKeyboardDoubleArrowRight = "/icons/keyboard_double_arrow_right.svg";

export function PromoBanner03() {
  return (
    <section
      className="px-4 py-10 md:px-12 md:py-12"
      style={{
        backgroundColor: colors.background.dark,
        marginBottom: "96px",
      }}
    >
      <div
        className="flex-col md:flex-row h-auto"
        style={{
          maxWidth: "1494px",
          margin: "0 auto",
          display: "flex",
          alignItems: "stretch",
          backgroundColor: "#dd245c",
          borderRadius: "32px",
          overflow: "hidden",
        }}
      >
        {/* Left side - Illustration */}
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
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Right side - Content */}
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
              color: colors.white,
              textTransform: "uppercase",
              letterSpacing: "0px",
              fontFamily: "var(--font-roboto)",
              whiteSpace: "nowrap",
            }}
          >
            SOLUÇÕES QUE GERAM CONFIANÇA
          </p>

          <AnimatedTitle
            as="h2"
            style={{
              margin: 0,
              fontSize: "24px",
              fontWeight: 700,
              fontFamily: "var(--font-linear-grotesk)",
              lineHeight: "normal",
              maxWidth: "478px",
              color: colors.white,
            }}
          >
            {[
              "Estamos aqui para ajudar você a construir sua história no setor de ",
              { text: "rastreamento veicular", color: colors.yellow },
              ".",
            ]}
          </AnimatedTitle>

          <a
            href={whatsappHref("Olá! Gostaria de falar com um consultor da Conor.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] md:text-[14px] px-3 md:px-5 w-full md:w-auto"
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
              cursor: "pointer",
              fontFamily: "var(--font-roboto)",
              transition: "transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease",
              minWidth: "fit-content",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#25D366";
              e.currentTarget.style.backgroundColor = "rgba(37, 211, 102, 0.15)";
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = colors.white;
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img src={imgWhatsapp} alt="WhatsApp" style={{ width: "16px", height: "16px" }} />
            <span>Converse com nosso consultor</span>
            <img src={imgKeyboardDoubleArrowRight} alt="arrow" style={{ width: "16px", height: "16px" }} />
          </a>
        </div>
      </div>
    </section>
  );
}
