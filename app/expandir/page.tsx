"use client";

import { Layout } from "@/app/components/Layout";
import { Footer } from "@/app/components/Footer";
import { colors } from "@/app/styles/design-tokens";
import { AnimatedTitle } from "@/app/components/motion/AnimatedTitle";
import { FadeIn } from "@/app/components/motion/FadeIn";
import { CroppedIllustration } from "@/app/components/CroppedIllustration";
import { whatsappHref } from "@/app/lib/whatsapp";

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
    illustration: "/icons/illus-video-ad-v3.svg",
  },
  {
    title: "Design Gráfico",
    description:
      "Peças visuais profissionais: banners, stories, carrosséis e materiais para impressão",
    illustration: "/icons/illus-design-grafico-v3.svg",
  },
  {
    title: "Copywriting",
    description:
      "Textos persuasivos que convertem visitantes em clientes. Desde anúncios até emails",
    illustration: "/icons/illus-copywriting-v3.svg",
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

export default function Expandir() {
  return (
    <Layout>
      <div style={{ backgroundColor: colors.background.dark }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Hero Section */}
          <div
            className="flex flex-col md:flex-row items-start md:items-center overflow-hidden relative px-4 pt-10 pb-0 md:py-0 md:pl-20 gap-8 md:gap-0 md:min-h-[520px]"
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
                  className="text-4xl md:text-[44px] min-[1520px]:text-[56px]!"
                  style={{
                    fontWeight: 700,
                    fontFamily: "var(--font-linear-grotesk)",
                    margin: 0,
                    lineHeight: "1.05",
                    maxWidth: "clamp(320px, calc(100vw - 1124px), 716px)",
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
                    maxWidth: "clamp(280px, calc(100vw - 1124px), 512px)",
                  }}
                >
                  Garantimos ferramentas de captura de leads, marketing,
                  tráfego pago e consultoria 360° para crescer sua base de
                  clientes
                </p>
              </div>
            </div>

            <div
              className="relative w-full h-[200px] md:absolute md:right-0 md:top-0 md:bottom-0 md:h-auto md:w-[var(--hero-illus-w)] overflow-hidden pointer-events-none"
              style={{ ["--hero-illus-w" as string]: "min(740px, max(470px, calc(100vw - 464px - clamp(320px, calc(100vw - 1124px), 716px))))" }}
            >
              <div
                className="absolute inset-0 bg-contain bg-no-repeat bg-center md:w-[calc(var(--hero-illus-w)*1405/740)] md:h-[calc(var(--hero-illus-w)*1049.07/740)] md:left-[calc(var(--hero-illus-w)*-299/740)] md:top-[calc(var(--hero-illus-w)*-217/740)] md:bg-[length:calc(var(--hero-illus-w)*1405/740)_calc(var(--hero-illus-w)*1049.07/740)]"
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
                    className="w-full md:flex-1 md:w-auto md:min-w-0"
                    style={{
                      border: "1px solid #272727",
                      borderRadius: "32px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {item.illustration && (
                      <div style={{ flexShrink: 0, width: "100%", aspectRatio: "470 / 390" }}>
                        <img
                          src={item.illustration}
                          alt=""
                          style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
                        />
                      </div>
                    )}
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
                  className="px-6 md:px-8 py-10 md:py-8 md:min-h-[320px] w-full md:flex-1 md:w-auto md:min-w-0"
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
                      className="text-[36px] md:text-[40px] min-[1400px]:text-[56px]! min-[1700px]:text-[72px]!"
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
                      className="text-[24px] md:text-[24px] min-[1400px]:text-[32px]! min-[1700px]:text-[40px]!"
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

            {/* Produto Relacionado */}
            <div id="conor-marketing" style={{ display: "flex", flexDirection: "column", gap: "64px", alignItems: "center", scrollMarginTop: "100px" }}>
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
                    <a
                      href={whatsappHref("Olá! Tenho interesse no Conor Marketing e gostaria de falar com um consultor.")}
                      target="_blank"
                      rel="noopener noreferrer"
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
                        transition: "transform 0.2s ease, filter 0.2s ease, opacity 0.2s ease",
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
                      <img src={imgWhatsappOrange} alt="" style={{ width: "16px", height: "16px" }} />
                      Falar com um vendedor
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Final */}
            <div
              className="flex flex-col min-[1024px]:flex-row items-center justify-between px-0 pt-10 pb-0 min-[1024px]:pl-24 min-[1024px]:pr-0 min-[1024px]:py-0 gap-8 min-[1024px]:gap-12 min-[1024px]:h-[480px]"
              style={{
                background: "linear-gradient(90deg, #ffc196, #fa7a22 43.269%)",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <div className="px-6 min-[1024px]:px-0 min-[1024px]:flex-[0_1_489px] min-[1024px]:min-w-[300px]" style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "489px" }}>
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
                <a
                  href={whatsappHref("Olá! Tenho interesse nos serviços de marketing e expansão da Conor e gostaria de falar com um consultor.")}
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
                  Comece agora
                </a>
              </div>

              {/* Ilustração: o SVG tem preserveAspectRatio="none", então precisa de um
                  background-size explícito na proporção original para não achatar. */}
              <div
                aria-hidden
                className="w-full aspect-[722/539] bg-[length:100%_100%] bg-center bg-no-repeat min-[1024px]:aspect-auto min-[1024px]:h-full min-[1024px]:flex-[1_1_400px] min-[1024px]:min-w-0 min-[1024px]:max-w-[643px] min-[1024px]:bg-[length:643px_480px] min-[1024px]:bg-center"
                style={{
                  backgroundImage: `url(${imgCtaIllustration})`,
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
