"use client";

import { AnimatedTitle } from "./motion/AnimatedTitle";

const imgArrow = "/icons/keyboard_double_arrow_down.svg";

export function HeroMain() {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        width: "100%",
        height: "620px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "80px",
        borderRadius: "12px 12px 0 0",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "80px",
          height: "100%",
          width: "100%",
          minWidth: 0,
        }}
      >
        {/* Coluna esquerda — texto */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            alignItems: "flex-start",
            minWidth: 0,
          }}
        >
          {/* Headline + parágrafo */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "flex-start",
            }}
          >
            <AnimatedTitle
              as="p"
              style={{
                margin: 0,
                fontFamily: "var(--font-linear-grotesk)",
                fontWeight: 700,
                fontSize: "56px",
                lineHeight: "1.1",
                color: "#484848",
                width: "716px",
                wordBreak: "break-word",
              }}
            >
              {[
                "Soluções completas que impulsionam a ",
                { text: "performance e os resultados da sua central de rastreamento.", color: "#52a4ff" },
              ]}
            </AnimatedTitle>

            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-roboto)",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "28px",
                color: "#484848",
                width: "592px",
              }}
            >
              Oferecemos tecnologias avançadas, suporte consultivo e benefícios exclusivos para ajudar você a atingir o máximo potencial do seu negócio de rastreamento e segurança patrimonial.
            </p>
          </div>

          {/* CTA */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}
            onClick={() => window.scrollBy({ top: 620, behavior: "smooth" })}
          >
            <span
              style={{
                fontFamily: "var(--font-roboto)",
                fontWeight: 500,
                fontSize: "14px",
                color: "#484848",
                whiteSpace: "nowrap",
                letterSpacing: "0px",
              }}
            >
              CONHEÇA MAIS ABAIXO
            </span>
            <div
              style={{
                width: "16px",
                height: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <img
                src={imgArrow}
                alt=""
                style={{ width: "16px", height: "16px", display: "block" }}
              />
            </div>
          </div>
        </div>

        {/* Coluna direita — ilustração */}
        <div
          style={{
            width: "740px",
            height: "100%",
            flexShrink: 0,
            backgroundColor: "#d9d9d9",
            borderRadius: "0 12px 0 64px",
            backgroundImage: "url(/image-home-hero.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    </section>
  );
}
