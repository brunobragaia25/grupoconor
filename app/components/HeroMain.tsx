"use client";

import { AnimatedTitle } from "./motion/AnimatedTitle";

const imgArrow = "/icons/keyboard_double_arrow_down.svg";

export function HeroMain() {
  return (
    <section
      className="px-4 py-10 md:pl-20 md:py-0 md:h-[620px]"
      style={{
        backgroundColor: "#ffffff",
        width: "100%",
        display: "flex",
        alignItems: "center",
        borderRadius: "12px 12px 0 0",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <div
        className="flex-col md:flex-row gap-8 md:gap-20 md:h-full"
        style={{
          display: "flex",
          alignItems: "center",
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
              className="text-3xl md:text-[56px] w-full md:max-w-[716px]"
              style={{
                margin: 0,
                fontFamily: "var(--font-linear-grotesk)",
                fontWeight: 700,
                lineHeight: "1.1",
                color: "#484848",
                wordBreak: "break-word",
              }}
            >
              {[
                "Soluções completas que impulsionam a ",
                { text: "performance e os resultados da sua central de rastreamento.", color: "#52a4ff" },
              ]}
            </AnimatedTitle>

            <p
              className="w-full md:max-w-[592px]"
              style={{
                margin: 0,
                fontFamily: "var(--font-roboto)",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "28px",
                color: "#484848",
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
          className="w-full h-[280px] md:flex-1 md:max-w-[740px] md:min-w-0 md:h-full"
          style={{
            backgroundColor: "#d9d9d9",
            borderRadius: "0 12px 0 64px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src="/image-home-hero.svg"
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "right center",
            }}
          />
        </div>
      </div>
    </section>
  );
}
