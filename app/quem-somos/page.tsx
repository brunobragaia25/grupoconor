"use client";

import { Layout } from "@/app/components/Layout";
import { Footer } from "@/app/components/Footer";
import { colors } from "@/app/styles/design-tokens";
import { AnimatedTitle } from "@/app/components/motion/AnimatedTitle";
import { FadeIn } from "@/app/components/motion/FadeIn";

const imgFundadoresIllustration = "/image-quem-somos-cta.svg";
const imgHeroIllustration = "/image-banner-quemsomos.png";
const imgMapPinLine = "/icons/icon-map-pin-line.svg";
const imgHeadset = "/icons/icon-headset.svg";

const founders = [
  {
    name: "Fundador 01",
    role: "Cargo/Descrição",
    bio: "Breve bio e experiência profissional",
  },
  {
    name: "Fundador 02",
    role: "Cargo/Descrição",
    bio: "Breve bio e experiência profissional",
  },
  {
    name: "Fundador 03",
    role: "Cargo/Descrição",
    bio: "Breve bio e experiência profissional",
  },
];

export default function QuemSomos() {
  return (
    <Layout>
      <div style={{ backgroundColor: colors.background.dark }} className="px-4 md:pr-8 md:px-0">
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
            className="min-h-[500px] md:min-h-0"
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              borderRadius: "32px",
              overflow: "hidden",
              backgroundImage:
                "linear-gradient(106.39deg, rgb(0, 0, 0) 56.293%, rgb(82, 164, 255) 116.82%)",
            }}
          >
            <img
              src={imgHeroIllustration}
              alt=""
              className="opacity-30 md:opacity-100"
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                height: "100%",
                width: "auto",
                zIndex: 0,
              }}
            />

            <div
              className="px-6 py-12 md:px-20 md:py-16 w-full md:flex-1 md:w-auto md:min-w-0"
              style={{
                display: "flex",
                alignItems: "flex-start",
                position: "relative",
                zIndex: 1,
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
                  {["Nosso negócio é fazer nosso cliente", { text: " crescer.", color: "#52a4ff" }]}
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
                  Ajudamos empresários brasileiros a fidelizar, administrar,
                  rastrear, montar, e expandir uma empresa de rastreamento
                  veicular.
                </p>
              </div>
            </div>
          </div>

          {/* Sobre Nós */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            <div className="w-full md:flex-1 md:w-auto md:min-w-0"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <AnimatedTitle
                as="h2"
                className="text-3xl md:text-[48px]"
                style={{
                  fontWeight: 700,
                  fontFamily: "var(--font-linear-grotesk)",
                  color: colors.white,
                  margin: 0,
                  lineHeight: "1.2",
                }}
              >
                {[
                  "Somos a única empresa que ajuda de forma",
                  { text: " 360°", color: "#fec22d" },
                  " os empreendedores a crescerem.",
                ]}
              </AnimatedTitle>
              <p
                style={{
                  fontSize: "16px",
                  fontFamily: "var(--font-roboto)",
                  color: colors.text.bodyLight,
                  margin: 0,
                  lineHeight: "28px",
                }}
              >
                Com soluções completas e suporte humanizado, estamos ao lado
                de cada empreendedor em sua jornada de crescimento.
              </p>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "40px",
                  backgroundColor: "#52a4ff",
                  color: colors.white,
                  border: "none",
                  borderRadius: "999px",
                  fontSize: "14px",
                  fontWeight: 500,
                  cursor: "pointer",
                  fontFamily: "var(--font-roboto)",
                  transition: "opacity 0.3s",
                  padding: "0 16px",
                  width: "fit-content",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Converse com nosso consultor
              </button>
            </div>

            <div
              className="w-full md:w-[699px] h-[300px] md:h-[480px]"
              style={{
                backgroundColor: colors.black,
                borderRadius: "32px",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: colors.text.bodyLight,
                fontSize: "16px",
                fontFamily: "var(--font-roboto)",
              }}
            >
              [Imagem sobre a empresa - 600x400px]
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-col md:flex-row gap-5 text-center">
            {[
              { number: "+80 mil", label: "Veículos rastreados" },
              { number: "+350", label: "cliente em todo o Brasil" },
              { number: "Nota 10", label: "NPS para o suporte" },
            ].map((stat, idx) => (
              <FadeIn
                key={stat.label}
                delay={idx * 0.08}
                className="h-[220px] md:h-[320px] px-6 md:px-12 w-full md:flex-1 md:w-auto md:min-w-0"
                style={{
                  backgroundColor: "#52a4ff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "32px",
                }}
              >
                <p
                  className="text-4xl md:text-[72px]"
                  style={{
                    fontWeight: 900,
                    fontFamily: "var(--font-linear-grotesk)",
                    color: colors.white,
                    margin: 0,
                    width: "100%",
                  }}
                >
                  {stat.number}
                </p>
                <p
                  className="text-xl md:text-[40px]"
                  style={{
                    fontWeight: 700,
                    fontFamily: "var(--font-linear-grotesk)",
                    color: colors.white,
                    margin: 0,
                    width: "100%",
                  }}
                >
                  {stat.label}
                </p>
              </FadeIn>
            ))}
          </div>

          {/* Fundadores */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            <AnimatedTitle
              as="h2"
              className="text-3xl md:text-[48px]"
              style={{
                fontWeight: 900,
                fontFamily: "var(--font-linear-grotesk)",
                color: colors.white,
                margin: 0,
                textAlign: "center",
              }}
            >
              Nossos fundadores
            </AnimatedTitle>

            <div className="flex flex-col md:flex-row gap-5 md:h-[480px]">
              {founders.map((founder, idx) => (
                <FadeIn
                  key={founder.name}
                  delay={idx * 0.08}
                  className="p-10 md:p-16 w-full md:flex-1 md:w-auto md:min-w-0"
                  style={{
                    backgroundColor: "#171717",
                    border: "1px solid #272727",
                    borderRadius: "32px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    gap: "20px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "32px",
                      fontWeight: 900,
                      fontFamily: "var(--font-linear-grotesk)",
                      color: colors.white,
                      margin: 0,
                    }}
                  >
                    {founder.name}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      color: colors.text.bodyLight,
                      fontFamily: "var(--font-roboto)",
                    }}
                  >
                    <p style={{ fontSize: "16px", margin: 0, lineHeight: "21px" }}>
                      {founder.role}
                    </p>
                    <p style={{ fontSize: "13px", margin: 0, lineHeight: "20px" }}>
                      {founder.bio}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Localização */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            <AnimatedTitle
              as="h2"
              className="text-3xl md:text-[48px]"
              style={{
                fontWeight: 900,
                fontFamily: "var(--font-linear-grotesk)",
                color: colors.white,
                margin: 0,
                textAlign: "center",
              }}
            >
              Nossa localização
            </AnimatedTitle>

            <div className="flex flex-col md:flex-row gap-10 items-stretch md:items-center">
              <div className="min-h-[280px] w-full md:flex-1 md:w-auto md:min-w-0" style={{ alignSelf: "stretch" }}>
                <div
                  style={{
                    backgroundColor: colors.black,
                    borderRadius: "32px",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: colors.text.bodyLight,
                    fontSize: "16px",
                    fontFamily: "var(--font-roboto)",
                  }}
                >
                  [Mapa Google Maps ou similar]
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div
                  className="p-6 md:p-10"
                  style={{
                    backgroundColor: "#171717",
                    border: "1px solid #272727",
                    borderRadius: "32px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: "#52a4ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img src={imgMapPinLine} alt="" style={{ width: "24px", height: "24px" }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <p
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        fontFamily: "var(--font-linear-grotesk)",
                        color: colors.white,
                        margin: 0,
                        lineHeight: "27px",
                      }}
                    >
                      Endereço
                    </p>
                    <div
                      style={{
                        fontSize: "14px",
                        fontFamily: "var(--font-roboto)",
                        color: colors.text.bodyLight,
                      }}
                    >
                      <p style={{ margin: 0, lineHeight: "24px" }}>
                        Av. Pres. Tancredo Neves, Nº: 2640, 12º andar
                      </p>
                      <p style={{ margin: 0, lineHeight: "24px" }}>
                        Belo Horizonte, MG - CEP: 31.330-472
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="p-6 md:p-10"
                  style={{
                    backgroundColor: "#171717",
                    border: "1px solid #272727",
                    borderRadius: "32px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: "#52a4ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img src={imgHeadset} alt="" style={{ width: "24px", height: "24px" }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <p
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        fontFamily: "var(--font-linear-grotesk)",
                        color: colors.white,
                        margin: 0,
                        lineHeight: "27px",
                      }}
                    >
                      Contato
                    </p>
                    <div
                      style={{
                        fontSize: "14px",
                        fontFamily: "var(--font-roboto)",
                        color: colors.text.bodyLight,
                      }}
                    >
                      <p style={{ margin: 0, lineHeight: "24px" }}>
                        Tel: [CONTEÚDO A PREENCHER]
                      </p>
                      <p style={{ margin: 0, lineHeight: "24px" }}>
                        Email: contato@grupoconor.com.br
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div
            className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:pl-24 md:pt-24 md:pb-24 gap-8 md:gap-0"
            style={{
              backgroundColor: "#52a4ff",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <div
              className="max-w-[564px]"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <AnimatedTitle
                as="h2"
                className="text-3xl md:text-[48px]"
                style={{
                  fontWeight: 700,
                  fontFamily: "var(--font-linear-grotesk)",
                  color: colors.white,
                  margin: 0,
                  lineHeight: "1.2",
                  maxWidth: "554px",
                }}
              >
                Faça parte da nossa história e cresça conosco
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
                Junte-se aos mais de 350 clientes que já transformaram seus
                negócios com a Grupo Conor.
              </p>
              <button
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
                  transition: "opacity 0.3s",
                  padding: "0 16px",
                  width: "fit-content",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Começar agora
              </button>
            </div>

            <img
              src={imgFundadoresIllustration}
              alt=""
              className="w-full h-auto max-w-[300px] md:h-[536px] md:w-[718px]"
              style={{
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
          </div>
        </div>

        <Footer />
      </div>
    </Layout>
  );
}
