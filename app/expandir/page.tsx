"use client";

import { Layout } from "@/app/components/Layout";
import { Footer } from "@/app/components/Footer";
import { colors } from "@/app/styles/design-tokens";
import { AnimatedTitle } from "@/app/components/motion/AnimatedTitle";
import { FadeIn } from "@/app/components/motion/FadeIn";
import { CroppedIllustration } from "@/app/components/CroppedIllustration";

const imgLoupeLarge = "/icons/icon-loupe-large.svg";
const imgHeroIllustration = "/image-expandir-hero.svg";
const imgCtaIllustration = "/image-expandir-cta.svg";
const imgMegaphoneSimple = "/icons/icon-megaphone-simple.svg";
const imgBrowsers = "/icons/icon-browsers.svg";
const imgChartLineUp = "/icons/icon-chart-line-up.svg";
const imgHandshake = "/icons/icon-handshake.svg";
const imgMarketingIllustration = "/image-expandir-produto-relacionado.jpg";
const imgMarketingLogo = "/icon-expandir-produto-relacionado-logo.svg";
const imgWhatsappOrange = "/icons/icon-whatsapp-orange.svg";

const features = [
  {
    icon: imgMegaphoneSimple,
    title: "Marketing",
    description:
      "Estratégias de marketing digital comprovadas para aumentar sua visibilidade. Criação de conteúdo, branding e posicionamento de marca.",
    items: [
      "Estratégia de marketing digital",
      "Criação de conteúdo profissional",
      "Branding e identidade visual",
      "Planos de crescimento customizados",
    ],
  },
  {
    icon: imgBrowsers,
    title: "Página Web de Captura",
    description:
      "Landing pages otimizadas para conversão. Design profissional e copywriting persuasivo para capturar leads qualificados.",
    items: [
      "Design responsivo e moderno",
      "Otimizado para conversão",
      "Formulários de captura inteligentes",
      "Integração com CRM",
    ],
  },
  {
    icon: imgChartLineUp,
    title: "Tráfego pago",
    description:
      "Campanhas de publicidade digital com ROI comprovado. Google Ads, Facebook Ads e outras plataformas gerenciadas por especialistas.",
    items: [
      "Campanhas Google Ads",
      "Publicidade Facebook/Instagram",
      "Remarketing avançado",
      "Otimização contínua de resultados",
    ],
  },
  {
    icon: imgHandshake,
    title: "Consultoria & Vendas",
    description:
      "Consultoria estratégica 360° com especialistas em vendas. Treinamento de equipe, metodologia de vendas e acompanhamento de resultados.",
    items: [
      "Análise de mercado completa",
      "Treinamento de equipe comercial",
      "Metodologia de vendas comprovada",
      "Acompanhamento e otimização",
    ],
  },
];

const creatives = [
  {
    title: "Anúncios em vídeo",
    description:
      "Vídeos promocionais de alta qualidade para campanhas de tráfego pago e redes sociais",
  },
  {
    title: "Design Gráfico",
    description:
      "Peças visuais profissionais: banners, stories, carrosséis e materiais para impressão",
  },
  {
    title: "Copywriting",
    description:
      "Textos persuasivos que convertem visitantes em clientes. Desde anúncios até emails",
  },
];

const stats = [
  {
    number: "+250%",
    label: "Aumento de Leads",
    description: "Média de aumento em geração de leads qualificados com nossas estratégias",
  },
  {
    number: "+180%",
    label: "Taxa de Conversão",
    description: "Melhoria na conversão de visitantes em clientes com otimizações",
  },
  {
    number: "4.5x",
    label: "Retorno de Investimento",
    description: "Retorno médio para cada real investido em publicidade",
  },
];

const methodology = [
  {
    title: "Diagnóstico",
    description: "Análise completa do seu negócio, mercado e oportunidades de crescimento",
  },
  {
    title: "Estratégia",
    description: "Desenvolvimento de plano customizado com metas claras e mensuráveis",
  },
  {
    title: "Execução",
    description: "Implementação de campanhas, páginas e treinamento da equipe",
  },
  {
    title: "Análise & Otimização",
    description: "Acompanhamento de resultados com ajustes contínuos para maximizar ROI",
  },
];

export default function Expandir() {
  return (
    <Layout>
      <div style={{ backgroundColor: colors.background.dark }} className="md:pr-8">
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Hero Section */}
          <div
            className="flex flex-col md:flex-row items-start md:items-center overflow-hidden relative px-4 pt-10 pb-0 md:py-0 md:pl-20 gap-8 md:gap-0 md:min-h-[620px]"
            style={{
              backgroundColor: "#52a4ff",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
          >
            <div
              className="flex flex-col md:flex-row gap-5 md:gap-10"
              style={{
                alignItems: "flex-start",
                position: "relative",
                zIndex: 1,
              }}
            >
              <img
                src={imgLoupeLarge}
                alt=""
                style={{ width: "64px", height: "64px", flexShrink: 0 }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <AnimatedTitle
                  as="h1"
                  className="text-4xl md:text-[56px]"
                  style={{
                    fontWeight: 700,
                    fontFamily: "var(--font-linear-grotesk)",
                    margin: 0,
                    lineHeight: "normal",
                    maxWidth: "716px",
                  }}
                >
                  {[
                    { text: "Expandir ", color: "#bcddfa" },
                    { text: "seus negócios.", color: colors.white },
                  ]}
                </AnimatedTitle>
                <p
                  style={{
                    fontSize: "18px",
                    fontFamily: "var(--font-roboto)",
                    color: colors.white,
                    margin: 0,
                    lineHeight: "28px",
                    maxWidth: "512px",
                  }}
                >
                  Garantimos ferramentas de captura de leads, marketing,
                  tráfego pago e consultoria 360° para crescer sua base de
                  clientes
                </p>
              </div>
            </div>

            <div
              className="relative w-full h-[200px] md:absolute md:right-0 md:top-0 md:bottom-0 md:h-auto md:w-[740px] overflow-hidden pointer-events-none"
            >
              <div
                className="absolute inset-0 bg-contain bg-no-repeat bg-center md:bg-repeat md:w-[1405px] md:h-[1049.07px] md:left-[-299px] md:top-[-217px] md:bg-auto"
                style={{
                  backgroundImage: `url(${imgHeroIllustration})`,
                }}
              />
            </div>
          </div>

          <div
            className="px-4 py-10 md:p-[96px] flex flex-col gap-16 md:gap-24"
            style={{
              backgroundColor: "rgba(36, 36, 36, 0.75)",
              borderRadius: "12px",
              borderTopLeftRadius: 0,
            }}
          >
            {/* Features 2x2 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[features.slice(0, 2), features.slice(2, 4)].map((row, rowIdx) => (
                <div key={rowIdx} className="flex flex-col md:flex-row gap-5">
                  {row.map((feature, idx) => (
                    <FadeIn
                      key={feature.title}
                      delay={idx * 0.08}
                      className="p-6 md:p-12 w-full md:flex-1 md:w-auto md:min-w-0"
                      style={{
                        backgroundColor: "#171717",
                        border: "1px solid #272727",
                        borderRadius: "32px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "40px",
                      }}
                    >
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "12px",
                          backgroundColor: "#52a4ff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img src={feature.icon} alt="" style={{ width: "32px", height: "32px" }} />
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                          <p
                            style={{
                              fontSize: "24px",
                              fontWeight: 700,
                              fontFamily: "var(--font-linear-grotesk)",
                              color: "#52a4ff",
                              margin: 0,
                            }}
                          >
                            {feature.title}
                          </p>
                          <p
                            style={{
                              fontSize: "14px",
                              fontFamily: "var(--font-roboto)",
                              color: colors.text.bodyLight,
                              margin: 0,
                              lineHeight: "24px",
                            }}
                          >
                            {feature.description}
                          </p>
                        </div>

                        <div style={{ height: "1px", backgroundColor: "#333333", width: "100%" }} />

                        <ul
                          style={{
                            margin: 0,
                            paddingLeft: "18px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                            fontSize: "13px",
                            fontFamily: "var(--font-roboto)",
                          }}
                        >
                          {feature.items.map((item) => (
                            <li key={item} style={{ color: colors.text.bodyLight }}>
                              <span style={{ color: "#52a4ff" }}>✓</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              ))}
            </div>

            {/* Exemplos de criativos */}
            <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center", textAlign: "center" }}>
                <AnimatedTitle
                  as="h2"
                  className="text-3xl md:text-[56px]"
                  style={{
                    fontWeight: 700,
                    fontFamily: "var(--font-linear-grotesk)",
                    color: colors.white,
                    margin: 0,
                    lineHeight: "normal",
                  }}
                >
                  Exemplos de criativos
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
                  Interface intuitiva para monitoramento em tempo real
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-5">
                {creatives.map((item, idx) => (
                  <FadeIn
                    key={item.title}
                    delay={idx * 0.08}
                    className="w-full flex-none h-[360px] md:[flex:1_0_0] md:h-[560px]"
                    style={{
                      backgroundColor: "#d9d9d9",
                      border: "1px solid #272727",
                      borderRadius: "32px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                    }}
                  >
                    <div
                      className="p-6 md:p-10"
                      style={{
                        backgroundColor: "#171717",
                        border: "1px solid #272727",
                        borderTop: "none",
                        borderBottomLeftRadius: "32px",
                        borderBottomRightRadius: "32px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "20px",
                          fontWeight: 700,
                          fontFamily: "var(--font-linear-grotesk)",
                          color: colors.white,
                          margin: 0,
                          lineHeight: "30px",
                        }}
                      >
                        {item.title}
                      </p>
                      <p
                        style={{
                          fontSize: "14px",
                          fontFamily: "var(--font-roboto)",
                          color: colors.text.bodyLight,
                          margin: 0,
                          lineHeight: "24px",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-col md:flex-row gap-5 text-center">
              {stats.map((stat, idx) => (
                <FadeIn
                  key={stat.label}
                  delay={idx * 0.08}
                  className="px-6 md:px-12 py-10 md:py-0 md:h-[320px] w-full md:flex-1 md:w-auto md:min-w-0"
                  style={{
                    backgroundColor: "#52a4ff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "20px",
                    borderRadius: "32px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
                    <p
                      className="text-[36px] md:text-[72px]"
                      style={{
                        fontWeight: 900,
                        fontFamily: "var(--font-linear-grotesk)",
                        color: colors.white,
                        margin: 0,
                        lineHeight: "normal",
                      }}
                    >
                      {stat.number}
                    </p>
                    <p
                      className="text-[24px] md:text-[40px]"
                      style={{
                        fontWeight: 700,
                        fontFamily: "var(--font-linear-grotesk)",
                        color: colors.white,
                        margin: 0,
                        lineHeight: "normal",
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontFamily: "var(--font-roboto)",
                      color: colors.white,
                      margin: 0,
                      lineHeight: "24px",
                    }}
                  >
                    {stat.description}
                  </p>
                </FadeIn>
              ))}
            </div>

            {/* Metodologia da Consultoria */}
            <div style={{ display: "flex", flexDirection: "column", gap: "40px", alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center", textAlign: "center" }}>
                <AnimatedTitle
                  as="h2"
                  className="text-3xl md:text-[56px]"
                  style={{
                    fontWeight: 700,
                    fontFamily: "var(--font-linear-grotesk)",
                    color: colors.white,
                    margin: 0,
                    lineHeight: "normal",
                  }}
                >
                  Metodologia da Consultoria
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
                  Processo comprovado para garantir seu crescimento sustentável
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-5" style={{ width: "100%" }}>
                {methodology.map((step, idx) => (
                  <FadeIn
                    key={step.title}
                    delay={idx * 0.08}
                    className="p-8 md:p-16 w-full md:flex-1 md:w-auto md:min-w-0"
                    style={{
                      backgroundColor: "#171717",
                      border: "1px solid #272727",
                      borderRadius: "32px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "26px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "24px",
                        fontWeight: 700,
                        fontFamily: "var(--font-linear-grotesk)",
                        color: "#52a4ff",
                        margin: 0,
                      }}
                    >
                      {step.title}
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        fontFamily: "var(--font-roboto)",
                        color: colors.text.bodyLight,
                        margin: 0,
                        lineHeight: "24px",
                      }}
                    >
                      {step.description}
                    </p>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Produto Relacionado */}
            <div style={{ display: "flex", flexDirection: "column", gap: "64px", alignItems: "center" }}>
              <AnimatedTitle
                as="h2"
                className="text-3xl md:text-[56px]"
                style={{
                  fontWeight: 700,
                  fontFamily: "var(--font-linear-grotesk)",
                  color: colors.white,
                  margin: 0,
                  textAlign: "center",
                }}
              >
                Produto relacionado
              </AnimatedTitle>

              <div className="flex flex-col md:flex-row gap-5" style={{ width: "100%" }}>
                <CroppedIllustration
                  src={imgMarketingIllustration}
                  alt="Conor Marketing"
                  aspectRatio={737 / 433}
                  crop={{
                    widthFraction: 971 / 737,
                    heightFraction: 542 / 433,
                    offsetXFraction: -224 / 737,
                    offsetYFraction: -109 / 433,
                  }}
                  borderRadius="32px"
                  className="w-full md:flex-1 md:w-auto md:min-w-0"
                  logo={{
                    src: imgMarketingLogo,
                    aspectRatio: 366 / 53,
                    widthFraction: 459 / 737,
                    boxAspectRatio: 459 / 128,
                    artWidthFraction: 366.346 / 459,
                    cornerRadius: "32px",
                  }}
                />

                <div
                  className="p-8 md:p-16 w-full md:flex-1 md:w-auto md:min-w-0"
                  style={{
                    backgroundColor: "#171717",
                    border: "1px solid #272727",
                    borderRadius: "32px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "28px",
                    justifyContent: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      fontFamily: "var(--font-roboto)",
                      color: colors.text.bodyLight,
                      margin: 0,
                      lineHeight: "28px",
                    }}
                  >
                    Solução completa para crescimento digital. Inclui
                    estratégia de marketing, criação de conteúdo, páginas de
                    captura, campanhas de tráfego pago e consultoria de
                    vendas.
                  </p>

                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: "18px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      fontSize: "14px",
                      fontFamily: "var(--font-roboto)",
                    }}
                  >
                    {[
                      "Estratégia de marketing customizada",
                      "Criação de conteúdo profissional",
                      "Páginas de captura otimizadas",
                      "Gestão de campanhas de tráfego",
                      "Consultoria de vendas 360°",
                    ].map((item) => (
                      <li key={item} style={{ color: colors.text.bodyLight }}>
                        <span style={{ color: "#fa7a22" }}>✓</span> {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex-col md:flex-row items-stretch md:items-center" style={{ display: "flex", gap: "12px" }}>
                    <button
                      className="w-full md:w-auto"
                      style={{
                        backgroundColor: "#fa7a22",
                        color: colors.white,
                        border: "none",
                        height: "40px",
                        padding: "0 16px",
                        borderRadius: "4px",
                        fontSize: "14px",
                        fontWeight: 500,
                        fontFamily: "var(--font-roboto)",
                        cursor: "pointer",
                        transition: "opacity 0.3s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                      Saiba mais
                    </button>
                    <button
                      className="w-full md:w-auto justify-center md:justify-start"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fa7a22",
                        border: "1px solid #fa7a22",
                        height: "40px",
                        padding: "0 16px",
                        borderRadius: "4px",
                        fontSize: "14px",
                        fontWeight: 500,
                        fontFamily: "var(--font-roboto)",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        transition: "opacity 0.3s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                      <img src={imgWhatsappOrange} alt="" style={{ width: "16px", height: "16px" }} />
                      Falar com um vendedor
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Final */}
            <div
              className="flex flex-col md:flex-row items-center justify-between px-0 pt-10 pb-0 md:pl-24 md:pr-0 md:py-24 gap-8 md:h-[480px]"
              style={{
                background: "linear-gradient(90deg, #ffc196, #fa7a22 43.269%)",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <div className="px-6 md:px-0" style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "489px" }}>
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
                  Pronto para expandir o seu negócio?
                </AnimatedTitle>
                <p
                  style={{
                    fontSize: "16px",
                    fontFamily: "var(--font-roboto)",
                    color: colors.white,
                    margin: 0,
                    lineHeight: "28px",
                    maxWidth: "453px",
                  }}
                >
                  Comece agora com nossas estratégias de marketing e
                  consultoria de vendas comprovadas.
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
                  Comece agora
                </button>
              </div>

              <img
                src={imgCtaIllustration}
                alt=""
                className="w-full h-auto aspect-[722/539] object-contain md:aspect-auto md:object-cover md:h-[480px] md:w-[722px]"
                style={{
                  flexShrink: 0,
                  maxWidth: "100%",
                }}
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Layout>
  );
}
