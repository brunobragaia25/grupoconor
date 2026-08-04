"use client";

import { Layout } from "@/app/components/Layout";
import { Footer } from "@/app/components/Footer";
import { colors } from "@/app/styles/design-tokens";
import { AnimatedTitle } from "@/app/components/motion/AnimatedTitle";
import { FadeIn } from "@/app/components/motion/FadeIn";
import { CroppedIllustration } from "@/app/components/CroppedIllustration";

const brand = "#fa7a22";

const imgLogoWordmark = "/icons/logo-conor-marketing-wordmark-large.svg";
const imgHeroIllustration = "/image-conor-marketing-hero.svg";
const imgCtaIllustration = "/image-conor-marketing-cta.svg";

const iconCriativos = "/icons/icon-megaphone-simple.svg";
const iconTrafegoPago = "/icons/icon-chart-line-up.svg";
const iconPaginaDeVendas = "/icons/icon-browsers.svg";
const iconConsultoriaVendas = "/icons/icon-handshake.svg";

const stats = [
  { value: "360°", label: "Consultoria completa" },
  { value: "3x", label: "Média de crescimento em leads" },
  { value: "90", label: "Dias para primeiros resultados" },
  { value: "4", label: "Itens de combo disponíveis" },
];

const combos = [
  {
    title: "Criativos",
    icon: iconCriativos,
    price: "A partir de R$497/mês",
    description:
      "Peças visuais profissionais para redes sociais, anúncios e campanhas. Artes estáticas, vídeos curtos e banners otimizados para conversão.",
    items: [
      "Posts para Instagram e Facebook",
      "Vídeos para Reels e TikTok",
      "Banners para Google Ads",
      "Artes para WhatsApp",
    ],
  },
  {
    title: "Tráfego Pago",
    icon: iconTrafegoPago,
    price: "A partir de R$697/mês",
    description:
      "Gestão completa de campanhas pagas no Google, Meta e YouTube. Configuração, otimização e relatórios mensais de performance.",
    items: [
      "Campanhas no Google Ads",
      "Anúncios no Meta (Facebook/Instagram)",
      "YouTube Ads",
      "Relatórios mensais de ROI",
    ],
  },
  {
    title: "Página de Vendas",
    icon: iconPaginaDeVendas,
    price: "A partir de R$997/mês",
    description:
      "Landing pages de alta conversão para capturar leads e vender seus serviços. Desenvolvida, hospedada e otimizada pela Conor.",
    items: [
      "Design profissional",
      "Integração com WhatsApp e CRM",
      "SEO básico incluído",
      "Hospedagem inclusa",
    ],
  },
  {
    title: "Consultoria & Vendas",
    icon: iconConsultoriaVendas,
    price: "A partir de R$997/mês",
    description:
      "Mentoria e suporte comercial para ajudar sua central a vender mais. Estratégia de precificação, script de vendas e funil comercial.",
    items: [
      "Diagnóstico comercial",
      "Script de vendas",
      "Funil de captação",
      "Acompanhamento mensal",
    ],
  },
];

export default function ConorMarketing() {
  return (
    <Layout>
      <div style={{ backgroundColor: colors.background.dark }} className="md:pr-8">
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Hero */}
          <div
            style={{
              backgroundImage:
                "linear-gradient(108deg, #1b1b1b 14.965%, #000000 48.897%, #fa7a22 106.9%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
            className="px-6 py-16 md:px-20 md:py-[120px]"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                alignItems: "center",
                maxWidth: "1182px",
              }}
            >
              <img src={imgLogoWordmark} alt="Conor Marketing" style={{ height: "46px", maxWidth: "100%" }} />
              <AnimatedTitle
                as="p"
                style={{
                  fontWeight: 700,
                  fontFamily: "var(--font-linear-grotesk)",
                  color: colors.white,
                  margin: 0,
                  lineHeight: "normal",
                  textAlign: "center",
                }}
                className="text-3xl md:text-[64px]"
              >
                Garantimos ferramentas de captura de leads, marketing,
                tráfego pago e consultoria 360° para sua central crescer de
                forma previsível.
              </AnimatedTitle>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "rgba(36, 36, 36, 0.75)",
              borderTopRightRadius: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "96px",
            }}
            className="px-6 py-16 md:px-24 md:py-24"
          >
            {/* Investimento + Stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div className="flex flex-col md:flex-row gap-5">
                <CroppedIllustration
                  src={imgHeroIllustration}
                  alt=""
                  aspectRatio={4 / 3}
                  objectPosition="39% 13%"
                  borderRadius="32px"
                  className="w-full md:w-[45%] flex-shrink-0"
                />

                <div
                  style={{
                    backgroundColor: colors.black,
                    borderRadius: "32px",
                    flex: "1 0 0",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "24px",
                  }}
                  className="p-8 md:p-16"
                >
                  <p
                    style={{
                      fontSize: "14px",
                      fontFamily: "var(--font-roboto)",
                      color: colors.text.bodyLight,
                      margin: 0,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Investimento
                  </p>

                  <div style={{ height: "1px", backgroundColor: "#333333", width: "100%" }} />

                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <p
                      style={{
                        fontWeight: 700,
                        fontFamily: "var(--font-linear-grotesk)",
                        color: brand,
                        margin: 0,
                        lineHeight: "normal",
                      }}
                      className="text-3xl md:text-[48px]"
                    >
                      Montado por combo
                    </p>
                    <p
                      style={{
                        fontSize: "24px",
                        fontWeight: 600,
                        fontFamily: "var(--font-linear-grotesk)",
                        color: colors.white,
                        margin: 0,
                        lineHeight: "30px",
                      }}
                    >
                      Escolha os itens que sua central precisa e monte seu
                      pacote personalizado. Sem preço fixo — você paga só
                      pelo que usar.
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "rgba(250, 122, 34, 0.2)",
                  borderRadius: "32px",
                  overflow: "hidden",
                  display: "flex",
                }}
                className="flex-col sm:flex-row"
              >
                {stats.map((s, idx) => (
                  <FadeIn
                    key={s.label}
                    delay={idx * 0.08}
                    style={{
                      backgroundColor: colors.black,
                      flex: "1 0 0",
                      padding: "40px 32px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      alignItems: "center",
                      textAlign: "center",
                      borderLeft: idx > 0 ? "1px solid rgba(250, 122, 34, 0.2)" : "none",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        fontFamily: "var(--font-linear-grotesk)",
                        color: brand,
                        lineHeight: "normal",
                      }}
                      className="text-3xl md:text-[48px]"
                    >
                      {s.value}
                    </span>
                    <span
                      style={{
                        fontSize: "14px",
                        fontFamily: "var(--font-roboto)",
                        color: colors.text.bodyLight,
                      }}
                    >
                      {s.label}
                    </span>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Itens disponíveis */}
            <div
              style={{
                backgroundColor: colors.black,
                borderRadius: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "40px",
              }}
              className="p-8 md:p-20"
            >
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    fontFamily: "var(--font-roboto)",
                    color: brand,
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    margin: "0 0 10px 0",
                  }}
                >
                  Monte o seu combo
                </p>
                <AnimatedTitle
                  as="h2"
                  style={{
                    fontWeight: 700,
                    fontFamily: "var(--font-linear-grotesk)",
                    color: colors.white,
                    margin: 0,
                  }}
                  className="text-3xl md:text-[48px]"
                >
                  Itens disponíveis
                </AnimatedTitle>
                <p
                  style={{
                    fontSize: "16px",
                    fontFamily: "var(--font-roboto)",
                    color: colors.text.bodyLight,
                    margin: "12px 0 0 0",
                    lineHeight: "24px",
                  }}
                >
                  Escolha um ou mais itens e monte o pacote ideal para sua
                  central.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[combos.slice(0, 2), combos.slice(2, 4)].map((row, rowIdx) => (
                  <div key={rowIdx} className="flex flex-col sm:flex-row gap-5">
                    {row.map((combo, comboIdx) => (
                      <FadeIn
                        key={combo.title}
                        delay={(rowIdx * 2 + comboIdx) * 0.08}
                        style={{
                          backgroundColor: "#171717",
                          border: "1px solid #272727",
                          borderRadius: "32px",
                          flex: "1 0 0",
                          padding: "48px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          gap: "40px",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <div
                            style={{
                              width: "48px",
                              height: "48px",
                              borderRadius: "12px",
                              backgroundColor: brand,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <img
                              src={combo.icon}
                              alt=""
                              style={{ width: "26px", height: "26px" }}
                            />
                          </div>
                          <span
                            style={{
                              backgroundColor: "rgba(250, 122, 34, 0.13)",
                              border: "1px solid rgba(250, 122, 34, 0.27)",
                              borderRadius: "999px",
                              padding: "8px 16px",
                              fontSize: "13px",
                              fontWeight: 700,
                              fontFamily: "var(--font-roboto)",
                              color: brand,
                              whiteSpace: "nowrap",
                            }}
                          >
                            {combo.price}
                          </span>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            <p
                              style={{
                                fontSize: "24px",
                                fontWeight: 700,
                                fontFamily: "var(--font-linear-grotesk)",
                                color: brand,
                                margin: 0,
                              }}
                            >
                              {combo.title}
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
                              {combo.description}
                            </p>
                          </div>

                          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            {combo.items.map((item) => (
                              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                <span style={{ color: brand, fontSize: "14px", fontWeight: 700 }}>✓</span>
                                <span style={{ fontSize: "14px", fontFamily: "var(--font-roboto)", color: colors.white }}>
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                ))}
              </div>

              <button
                style={{
                  backgroundColor: brand,
                  color: colors.white,
                  border: "none",
                  borderRadius: "999px",
                  padding: "14px 49px",
                  fontSize: "15px",
                  fontWeight: 700,
                  fontFamily: "var(--font-roboto)",
                  letterSpacing: "1.5px",
                  cursor: "pointer",
                  width: "fit-content",
                  transition: "opacity 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                MONTAR MEU COMBO
              </button>
            </div>
          </div>

          {/* CTA Final */}
          <div
            style={{
              backgroundColor: brand,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
            }}
            className="flex-col md:flex-row px-6 py-10 md:px-24 md:py-0 md:h-[480px] gap-8 md:gap-0"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <h2
                  style={{
                    fontWeight: 700,
                    fontFamily: "var(--font-linear-grotesk)",
                    color: colors.white,
                    margin: 0,
                    lineHeight: "1.1",
                  }}
                  className="text-3xl md:text-[48px]"
                >
                  Monte seu combo e
                  <br />
                  <span style={{ fontWeight: 900 }}>comece a crescer</span>
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    fontFamily: "var(--font-roboto)",
                    color: colors.white,
                    margin: 0,
                    lineHeight: "28px",
                    maxWidth: "468px",
                  }}
                >
                  Criativos, tráfego pago, página de vendas ou consultoria.
                  Escolha o que faz sentido para sua central agora.
                </p>
              </div>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "56px",
                  backgroundColor: "transparent",
                  color: colors.white,
                  border: `1px solid ${colors.white}`,
                  borderRadius: "999px",
                  fontSize: "15px",
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "var(--font-roboto)",
                  transition: "opacity 0.3s",
                  padding: "0 49px",
                  letterSpacing: "1.5px",
                  width: "fit-content",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                COMPRAR AGORA
              </button>
            </div>

            <CroppedIllustration
              src={imgCtaIllustration}
              alt=""
              aspectRatio={904 / 480}
              objectPosition="0% 21%"
              className="w-full md:absolute md:right-0 md:top-0 md:bottom-0 md:w-[904px] md:h-full"
              style={{ pointerEvents: "none" }}
            />
          </div>
        </div>

        <Footer />
      </div>
    </Layout>
  );
}
