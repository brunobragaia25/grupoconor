"use client";

import { Layout } from "@/app/components/Layout";
import { Footer } from "@/app/components/Footer";
import { colors } from "@/app/styles/design-tokens";
import { AnimatedTitle } from "@/app/components/motion/AnimatedTitle";
import { FadeIn } from "@/app/components/motion/FadeIn";

const imgFundadoresIllustration = "/image-quem-somos-cta.svg";

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
      <div style={{ backgroundColor: colors.background.dark, paddingRight: "32px" }}>
        <div
          style={{
            backgroundColor: "rgba(36, 36, 36, 0.75)",
            borderRadius: "12px",
            padding: "96px",
            display: "flex",
            flexDirection: "column",
            gap: "96px",
          }}
        >
          {/* Hero Section */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "120px 80px",
              borderRadius: "32px",
              backgroundImage:
                "linear-gradient(106.39deg, rgb(0, 0, 0) 56.293%, rgb(82, 164, 255) 116.82%)",
            }}
          >
            <div
              style={{
                display: "flex",
                flex: "1 0 0",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <AnimatedTitle
                  as="h1"
                  style={{
                    fontSize: "72px",
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
          <div style={{ display: "flex", gap: "64px", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                flex: "1 0 0",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <AnimatedTitle
                as="h2"
                style={{
                  fontSize: "48px",
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
              style={{
                backgroundColor: colors.black,
                borderRadius: "32px",
                height: "480px",
                width: "699px",
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
          <div style={{ display: "flex", gap: "20px", textAlign: "center" }}>
            {[
              { number: "+80 mil", label: "Veículos rastreados" },
              { number: "+350", label: "cliente em todo o Brasil" },
              { number: "Nota 10", label: "NPS para o suporte" },
            ].map((stat, idx) => (
              <FadeIn
                key={stat.label}
                delay={idx * 0.08}
                style={{
                  backgroundColor: "#52a4ff",
                  flex: "1 0 0",
                  height: "320px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 48px",
                  borderRadius: "32px",
                }}
              >
                <p
                  style={{
                    fontSize: "72px",
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
                  style={{
                    fontSize: "40px",
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
              style={{
                fontSize: "48px",
                fontWeight: 900,
                fontFamily: "var(--font-linear-grotesk)",
                color: colors.white,
                margin: 0,
                textAlign: "center",
              }}
            >
              Nossos fundadores
            </AnimatedTitle>

            <div style={{ display: "flex", gap: "20px", height: "480px" }}>
              {founders.map((founder, idx) => (
                <FadeIn
                  key={founder.name}
                  delay={idx * 0.08}
                  style={{
                    backgroundColor: "#171717",
                    border: "1px solid #272727",
                    borderRadius: "32px",
                    flex: "1 0 0",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    gap: "20px",
                    padding: "64px",
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
              style={{
                fontSize: "48px",
                fontWeight: 900,
                fontFamily: "var(--font-linear-grotesk)",
                color: colors.white,
                margin: 0,
                textAlign: "center",
              }}
            >
              Nossa localização
            </AnimatedTitle>

            <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
              <div style={{ flex: "1 0 0", alignSelf: "stretch" }}>
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
                  style={{
                    backgroundColor: "#171717",
                    border: "1px solid #272727",
                    borderRadius: "32px",
                    padding: "40px",
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
                    }}
                  />
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
                  style={{
                    backgroundColor: "#171717",
                    border: "1px solid #272727",
                    borderRadius: "32px",
                    padding: "40px",
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
                    }}
                  />
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
            style={{
              backgroundColor: "#52a4ff",
              height: "480px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: "96px",
              paddingTop: "96px",
              paddingBottom: "96px",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                width: "564px",
              }}
            >
              <AnimatedTitle
                as="h2"
                style={{
                  fontSize: "48px",
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
              style={{
                height: "536px",
                width: "718px",
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
