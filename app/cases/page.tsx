"use client";

import { Layout } from "@/app/components/Layout";
import { Footer } from "@/app/components/Footer";
import { colors } from "@/app/styles/design-tokens";
import { AnimatedTitle } from "@/app/components/motion/AnimatedTitle";
import { FadeIn } from "@/app/components/motion/FadeIn";
import { whatsappHref } from "@/app/lib/whatsapp";

const imgCtaIllustration = "/image-quem-somos-cta.svg";

const casesData = [
  {
    id: 1,
    company: "Falcon Sat",
    industry: "",
    video: "/case-falcon-sat.mp4",
    color: "#40c6ee",
  },
  {
    id: 2,
    company: "Brastek Rastreadores",
    industry: "",
    video: "/case-brastek.mp4",
    color: "#fa7a22",
  },
];

export default function Cases() {
  return (
    <Layout>
      <div style={{ backgroundColor: colors.background.dark }} className="px-4 md:px-0">
        <div
          className="px-6 py-12 md:p-24"
          style={{
            backgroundColor: "rgba(36, 36, 36, 0.75)",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "96px",
          }}
        >
          {/* Hero Section */}
          <div
            className="flex items-center px-6 py-12 md:px-20 md:py-[120px]"
            style={{
              borderRadius: "32px",
              backgroundImage:
                "linear-gradient(106.39deg, rgb(0, 0, 0) 56.293%, rgb(82, 164, 255) 116.82%)",
            }}
          >
            <div className="w-full md:flex-1 md:w-auto md:min-w-0"
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <AnimatedTitle
                  as="h1"
                  className="text-4xl md:text-[72px]"
                  style={{
                    fontWeight: 700,
                    fontFamily: "var(--font-linear-grotesk)",
                    color: colors.white,
                    margin: 0,
                    lineHeight: "normal",
                    maxWidth: "768px",
                  }}
                >
                  {["Cases de", { text: " Sucesso.", color: "#52a4ff" }]}
                </AnimatedTitle>
                <p
                  style={{
                    fontSize: "18px",
                    fontFamily: "var(--font-roboto)",
                    color: colors.text.bodyLight,
                    margin: 0,
                    lineHeight: "28px",
                    maxWidth: "548px",
                  }}
                >
                  Veja como empresas reais usam as soluções Conor para
                  crescer, economizar e eliminar o roubo de frotas.
                </p>
              </div>
            </div>
          </div>

          {/* Cases */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-6" style={{ maxWidth: "760px", margin: "0 auto", width: "100%" }}>
              {casesData.map((caseItem, idx) => (
                <FadeIn
                  key={caseItem.id}
                  delay={idx * 0.08}
                  style={{
                    backgroundColor: "#171717",
                    border: "1px solid #272727",
                    borderRadius: "32px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    maxWidth: "360px",
                    height: "100%",
                    margin: "0 auto",
                  }}
                >
                  {/* Vídeo — formato stories (retrato) */}
                  <div
                    className="aspect-[9/16] w-full"
                    style={{ backgroundColor: colors.black, border: "1px solid #272727", flexShrink: 0 }}
                  >
                    <video
                      src={caseItem.video}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Info */}
                  <div
                    className="p-6"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: "4px",
                      border: "1px solid #272727",
                      borderTop: "none",
                      flex: 1,
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: 700,
                        fontFamily: "var(--font-linear-grotesk)",
                        color: colors.white,
                        margin: 0,
                        lineHeight: "1.2",
                      }}
                    >
                      {caseItem.company}
                    </h3>
                    {caseItem.industry && (
                      <p
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          color: caseItem.color,
                          margin: 0,
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {caseItem.industry}
                      </p>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* CTA Final */}
          <div
            className="flex flex-col min-[1024px]:flex-row items-center justify-between px-0 pt-10 pb-0 min-[1024px]:pl-24 min-[1024px]:pr-0 min-[1024px]:py-0 gap-8 min-[1024px]:gap-12 min-[1024px]:h-[480px]"
            style={{
              backgroundColor: "#52a4ff",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <div
              className="px-6 min-[1024px]:px-0 min-[1024px]:flex-[0_1_489px] min-[1024px]:min-w-[300px]"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                maxWidth: "489px",
              }}
            >
              <AnimatedTitle
                as="h2"
                className="text-3xl md:text-[40px] min-[1520px]:text-[48px]"
                style={{
                  fontWeight: 700,
                  fontFamily: "var(--font-linear-grotesk)",
                  color: colors.white,
                  margin: 0,
                  lineHeight: "1.2",
                }}
              >
                Sua empresa pode ser o próximo case de sucesso
              </AnimatedTitle>
              <p
                style={{
                  fontSize: "16px",
                  fontFamily: "var(--font-roboto)",
                  color: colors.white,
                  margin: 0,
                  lineHeight: "28px",
                  maxWidth: "374px",
                }}
              >
                Comece agora com as soluções Conor e transforme sua operação
                de rastreamento veicular.
              </p>
              <a
                href={whatsappHref("Olá! Vi os cases de sucesso da Conor e gostaria de falar com um consultor.")}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "40px",
                  backgroundColor: colors.white,
                  color: colors.black,
                  border: "none",
                  borderRadius: "999px",
                  fontSize: "14px",
                  fontWeight: 500,
                  cursor: "pointer",
                  fontFamily: "var(--font-roboto)",
                  transition: "transform 0.2s ease, filter 0.2s ease, opacity 0.2s ease",
                  padding: "0 16px",
                  width: "fit-content",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.filter = "brightness(1.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.filter = "brightness(1)";
                }}
              >
                Falar com especialista
              </a>
            </div>

            <img
              src={imgCtaIllustration}
              alt=""
              className="w-full h-auto aspect-[718/536] object-contain min-[1024px]:aspect-auto min-[1024px]:object-cover min-[1024px]:h-[480px] min-[1024px]:w-[643px]"
              style={{
                flexShrink: 0,
                maxWidth: "100%",
              }}
            />
          </div>
        </div>

        <Footer />
      </div>
    </Layout>
  );
}
