"use client";

import { Layout } from "@/app/components/Layout";
import { Footer } from "@/app/components/Footer";
import { colors } from "@/app/styles/design-tokens";
import { AnimatedTitle } from "@/app/components/motion/AnimatedTitle";
import { FadeIn } from "@/app/components/motion/FadeIn";
import { CroppedIllustration } from "@/app/components/CroppedIllustration";
import { whatsappHref } from "@/app/lib/whatsapp";

const imgRocketLarge = "/icons/icon-rocket-large.svg";
const imgHeroIllustration = "/image-montar-hero.svg";
const imgCtaIllustration = "/image-montar-cta.svg";
const imgMapPinLine = "/icons/icon-map-pin-line-2.svg";
const imgGearSix = "/icons/icon-gear-six.svg";
const imgWifiHigh = "/icons/icon-wifi-high.svg";
const imgEstoqueIllustration = "/image-montar-produto-relacionado.jpg";
const imgEstoqueLogo = "/icon-montar-produto-relacionado-logo.svg";
const imgPackage = "/icons/icon-package.svg";
const imgPackage2 = "/icons/icon-package-2.svg";
const imgChartLineUp = "/icons/icon-chart-line-up.svg";
const imgHandshake = "/icons/icon-handshake.svg";
const imgFotoJ16 = "/foto-j16.png";
const imgFotoChip = "/foto-chip.png";
const imgFotoTag = "/foto-tag.png";

function WhatsappIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.648 9.588C11.45 9.48867 10.476 9.01 10.2947 8.94333C10.1127 8.87733 9.98067 8.84467 9.848 9.04333C9.71667 9.24133 9.33667 9.68733 9.22133 9.81933C9.106 9.952 8.99 9.968 8.792 9.86933C8.594 9.76933 7.95533 9.56067 7.19867 8.886C6.61 8.36067 6.212 7.712 6.09667 7.51333C5.98133 7.31533 6.08467 7.208 6.18333 7.10933C6.27267 7.02067 6.382 6.878 6.48067 6.76267C6.58 6.64667 6.61267 6.564 6.67933 6.43133C6.74533 6.29933 6.71267 6.184 6.66267 6.08467C6.61267 5.98533 6.21667 5.01 6.052 4.61333C5.89067 4.22733 5.72733 4.28 5.606 4.27333C5.49067 4.268 5.35867 4.26667 5.226 4.26667C5.094 4.26667 4.87933 4.316 4.698 4.51467C4.51667 4.71267 4.00467 5.192 4.00467 6.16733C4.00467 7.142 4.71467 8.084 4.81333 8.21667C4.91267 8.34867 6.21067 10.35 8.198 11.208C8.67067 11.412 9.03933 11.534 9.32733 11.6247C9.802 11.776 10.234 11.7547 10.5747 11.7033C10.9553 11.6467 11.7467 11.224 11.912 10.7613C12.0773 10.2987 12.0773 9.902 12.0273 9.81933C11.978 9.73667 11.8467 9.68733 11.648 9.588ZM8.03333 14.5233H8.03067C6.85051 14.5234 5.69205 14.2061 4.67667 13.6047L4.436 13.462L1.942 14.1167L2.60733 11.6847L2.45067 11.4353C1.79096 10.3848 1.44196 9.16913 1.444 7.92867C1.44467 4.29533 4.40133 1.33933 8.036 1.33933C9.796 1.33933 11.4507 2.026 12.6947 3.27133C13.3085 3.88241 13.7949 4.60915 14.126 5.4095C14.4571 6.20984 14.6261 7.06789 14.6233 7.934C14.6213 11.5673 11.6653 14.5233 8.03333 14.5233ZM13.642 2.32533C12.9075 1.58595 12.0335 0.999691 11.0707 0.600534C10.108 0.201376 9.07556 -0.00274482 8.03333 0C3.66333 0 0.106667 3.55667 0.104667 7.928C0.104667 9.32533 0.469333 10.6893 1.16333 11.8913L0.038 16L4.24133 14.8973C5.40373 15.5306 6.70629 15.8625 8.03 15.8627H8.03333C12.4027 15.8627 15.96 12.306 15.962 7.934C15.9652 6.89218 15.7618 5.86007 15.3636 4.89736C14.9654 3.93464 14.3802 3.06045 13.642 2.32533Z"
        fill={color}
      />
    </svg>
  );
}

const features = [
  {
    icon: imgMapPinLine,
    title: "Rastreadores",
    description:
      "Escolha entre as melhores marcas do mercado. Rastreador J16 Original e Tag BLE com tecnologia de ponta e confiabilidade comprovada.",
    checkColor: "#40c6ee",
    items: [
      "Rastreador J16 Original - 4G",
      "Tag BLE - identificação por Bluetooth",
      "Tecnologia GPS/GNSS de alta precisão",
      "Compatível com todos os veículos",
    ],
  },
  {
    icon: imgGearSix,
    title: "Configuração",
    description:
      "Configuração completa e profissional do seu rastreador. Nossa equipe garante instalação correta e testes de funcionamento.",
    checkColor: "#52a4ff",
    items: [
      "Instalação profissional incluída",
      "Testes de funcionamento garantidos",
      "Suporte técnico pós-instalação",
      "Documentação e treinamento",
    ],
  },
  {
    icon: imgWifiHigh,
    title: "Conectividade",
    description:
      "Chip Vivo 20Mb com cobertura nacional garantida. Acesso ilimitado à plataforma de rastreamento com dados contínuos.",
    checkColor: "#52a4ff",
    items: [
      "Chip Vivo 20Mb de dados",
      "Cobertura nacional completa",
      "Acesso 24/7 à plataforma",
      "Suporte técnico dedicado",
    ],
  },
];

const hardware = [
  {
    label: "Rastreador 4G",
    name: "Rastreador J16",
    image: imgFotoJ16,
    description: "Tecnologia pronta para sua operação",
    items: [
      "Chipset SIMCOM A7670SA (CAT1) com firmware customizado",
      "Comunicação 4G estável com fallback em 2G",
      "Módulo GNSS Quectel — alta precisão de localização",
      "Estável com multioperadoras — troca de operadora remota",
      "Sentinela via Lara e configurador exclusivo",
      "Manutenção nacional — garantia e suporte em todo o Brasil",
    ],
  },
  {
    label: "Rastreamento Bluetooth",
    name: "Tag BLE",
    image: imgFotoTag,
    description: "Rastreamento por Bluetooth de longo alcance",
    items: [
      "Ideal para motos, equipamentos e ativos sem porta OBD",
      "Bluetooth Low Energy — bateria de longa duração",
      "Localização precisa em áreas urbanas e confinadas",
      "Discreto e de fácil instalação em qualquer superfície",
      "Integrado ao mesmo painel da plataforma OBD",
      "Alertas de movimentação e saída de cerca virtual",
    ],
  },
  {
    label: "Conectividade 20Mb",
    name: "Chip Vivo",
    image: imgFotoChip,
    description:
      "Plano de dados de 20Mb com cobertura nacional. Acesso sem limitações à plataforma Conor e sistemas integrados.",
    items: [
      "20Mb de dados mensais",
      "Cobertura 4G onde disponível",
      "Cobertura 3G/2G em todo Brasil",
      "Sem franquia adicional",
    ],
  },
];

const pricingTiers = [
  {
    title: "1-10 unidades",
    icon: imgPackage,
    description:
      "Ideal para quem está começando a montar sua central de rastreamento e precisa de um lote inicial de equipamentos.",
    buttonLabel: "Falar com consultor",
    buttonStyle: "outline" as const,
    popular: false,
    rows: [
      { label: "Quantidade:", value: "1-10 unidades" },
      { label: "Prazo:", value: "7 dias úteis" },
      { label: "Garantia:", value: "12 meses" },
      { label: "Rast. J16:", value: "R$160 parcelado ou R$140 à vista" },
      { label: "Chip Vivo 20Mb:", value: "R$5,00 por chip" },
    ],
  },
  {
    title: "11-50 unidades",
    icon: imgPackage2,
    description:
      "Para operações em crescimento que já têm uma base de clientes e precisam escalar a instalação de rastreadores.",
    buttonLabel: "Falar com consultor",
    buttonStyle: "solid" as const,
    popular: true,
    rows: [
      { label: "Quantidade:", value: "11-50 unidades" },
      { label: "Prazo:", value: "5 dias úteis" },
      { label: "Garantia:", value: "12 meses" },
      { label: "Rast. J16:", value: "R$160 parcelado ou R$140 à vista" },
      { label: "Chip Vivo 20Mb:", value: "R$4,50 por chip" },
    ],
  },
  {
    title: "51-100 unidades",
    icon: imgChartLineUp,
    description:
      "Para centrais de rastreamento consolidadas que precisam de um volume maior de equipamentos com prazo reduzido.",
    buttonLabel: "Falar com consultor",
    buttonStyle: "outline" as const,
    popular: false,
    rows: [
      { label: "Quantidade:", value: "51-100 unidades" },
      { label: "Prazo:", value: "3 dias úteis" },
      { label: "Garantia:", value: "12 meses" },
      { label: "Rast. J16:", value: "R$160 parcelado ou R$140 à vista" },
      { label: "Chip Vivo 20Mb:", value: "R$3,90 por chip" },
    ],
  },
  {
    title: "+100 unidades",
    icon: imgHandshake,
    description:
      "Para grandes operações e parceiros que precisam de um volume sob medida. Fale com nosso time comercial.",
    buttonLabel: "Falar com consultor",
    buttonStyle: "outline" as const,
    popular: false,
    rows: [
      { label: "Quantidade:", value: "+100 unidades" },
      { label: "Prazo:", value: "Sob demanda" },
      { label: "Garantia:", value: "12 meses" },
      { label: "Rast. J16:", value: "R$160 parcelado ou R$140 à vista" },
      { label: "Chip Vivo 20Mb:", value: "R$3,40 por chip" },
    ],
  },
];

export default function Montar() {
  return (
    <Layout>
      <div style={{ backgroundColor: colors.background.dark }}>
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
                src={imgRocketLarge}
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
                    { text: "Montar ", color: "#bcddfa" },
                    { text: "seu negócio por apenas R$500.", color: colors.white },
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
                  Temos tudo que é essencial para começar: rastreadores,
                  configuração profissional e conectividade inclusos
                </p>
              </div>
            </div>

            <div
              className="relative w-full h-[200px] md:absolute md:right-0 md:top-0 md:bottom-0 md:h-auto md:w-[740px] overflow-hidden pointer-events-none"
            >
              <div
                className="absolute inset-0 bg-contain bg-no-repeat bg-center md:bg-repeat md:w-[1141.07px] md:h-[852px] md:left-[-200.536px] md:top-[-116px] md:bg-auto"
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
            {/* 3 Feature Cards */}
            <div className="flex flex-col md:flex-row gap-5">
              {features.map((feature, idx) => (
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
                          <span style={{ color: feature.checkColor }}>✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Hardware Incluído */}
            <div style={{ display: "flex", flexDirection: "column", gap: "64px", alignItems: "center" }}>
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
                  Hardware Incluído
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
                  Equipamentos de qualidade profissional já configurados e testados
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-5" style={{ width: "100%" }}>
                {hardware.map((product, idx) => (
                  <FadeIn className="w-full md:flex-1 md:w-auto md:min-w-0"
                    key={product.name}
                    delay={idx * 0.08}
                    style={{
                      backgroundColor: "#171717",
                      border: "1px solid #272727",
                      borderRadius: "32px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      className="h-[180px] md:h-[358px]"
                      style={{
                        backgroundColor: "image" in product && product.image ? colors.white : "#d9d9d9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        flexShrink: 0,
                      }}
                    >
                      {"image" in product && product.image && (
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                        />
                      )}
                    </div>
                    <div className="p-6 md:p-12" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      <p
                        style={{
                          fontSize: "12px",
                          fontWeight: 700,
                          fontFamily: "var(--font-roboto)",
                          color: "#40c6ee",
                          margin: 0,
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                        }}
                      >
                        {product.label}
                      </p>
                      <p
                        style={{
                          fontSize: "24px",
                          fontWeight: 700,
                          fontFamily: "var(--font-linear-grotesk)",
                          color: colors.white,
                          margin: 0,
                        }}
                      >
                        {product.name}
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
                        {product.description}
                      </p>
                      <ul
                        style={{
                          margin: 0,
                          paddingLeft: "18px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                          fontSize: "13px",
                          fontFamily: "var(--font-roboto)",
                        }}
                      >
                        {product.items.map((item) => (
                          <li key={item} style={{ color: colors.text.bodyLight }}>
                            <span style={{ color: "#40c6ee" }}>•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Tabela de preços */}
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
                  Escolha a quantidade ideal
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
                  Escolha a faixa de quantidade ideal para o seu negócio. Todos incluem garantia de 12 meses.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row gap-5" style={{ width: "100%" }}>
                {pricingTiers.map((tier, idx) => (
                  <FadeIn className="w-full md:flex-1 md:w-auto md:min-w-0"
                    key={tier.title}
                    delay={idx * 0.08}
                    style={{
                      backgroundColor: tier.popular ? "#151b24" : "#111111",
                      border: tier.popular ? "1px solid #52a4ff" : "1px solid #2a2a2a",
                      borderRadius: "16px",
                      padding: "33px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                      position: "relative",
                      boxShadow: tier.popular ? "0 0 32px 0 rgba(82, 164, 255, 0.25)" : undefined,
                      transform: tier.popular ? "scale(1.03)" : undefined,
                      zIndex: tier.popular ? 1 : undefined,
                    }}
                  >
                    {tier.popular && (
                      <div
                        style={{
                          position: "absolute",
                          top: "20px",
                          right: "20px",
                          backgroundColor: "#52a4ff",
                          borderRadius: "999px",
                          padding: "5px 13px",
                          fontSize: "10px",
                          fontWeight: 700,
                          color: colors.white,
                          fontFamily: "var(--font-roboto)",
                          boxShadow: "0 0 12px 0 rgba(82, 164, 255, 0.5)",
                        }}
                      >
                        ★ POPULAR
                      </div>
                    )}

                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        backgroundColor: "#52a4ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img src={tier.icon} alt="" style={{ width: "20px", height: "20px" }} />
                    </div>

                    <p
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        fontFamily: "var(--font-linear-grotesk)",
                        color: colors.white,
                        margin: 0,
                      }}
                    >
                      {tier.title}
                    </p>

                    <p
                      style={{
                        fontSize: "14px",
                        fontFamily: "var(--font-roboto)",
                        color: colors.text.bodyLight,
                        margin: 0,
                        lineHeight: "22px",
                      }}
                    >
                      {tier.description}
                    </p>

                    <a
                      href={whatsappHref(`Olá! Quero montar um pedido na faixa de ${tier.title} e gostaria de falar com um consultor.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        height: "44px",
                        borderRadius: "8px",
                        fontSize: "14px",
                        fontWeight: 600,
                        fontFamily: "var(--font-roboto)",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "transform 0.2s ease, filter 0.2s ease, opacity 0.2s ease",
                        ...(tier.buttonStyle === "solid"
                          ? { backgroundColor: colors.white, color: colors.black, border: "none" }
                          : { backgroundColor: "transparent", color: colors.white, border: "1px solid #3a3a3a" }),
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
                      {tier.buttonLabel}
                    </a>

                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ flex: 1, height: "1px", backgroundColor: "#2a2a2a" }} />
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "1.5px",
                          color: colors.text.bodyLight,
                          fontFamily: "var(--font-roboto)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        DESTAQUES DO PLANO
                      </span>
                      <div style={{ flex: 1, height: "1px", backgroundColor: "#2a2a2a" }} />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      {tier.rows.map((row) => (
                        <p
                          key={row.label}
                          style={{
                            fontSize: "13px",
                            fontFamily: "var(--font-roboto)",
                            color: "#40c6ee",
                            margin: 0,
                          }}
                        >
                          <span>✓ {row.label}</span>{" "}
                          <span style={{ color: colors.white }}>{row.value}</span>
                        </p>
                      ))}
                    </div>
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
                  src={imgEstoqueIllustration}
                  alt="Conor Estoque"
                  aspectRatio={737 / 400}
                  crop={{
                    widthFraction: 1003 / 737,
                    heightFraction: 560 / 400,
                    offsetXFraction: -246 / 737,
                    offsetYFraction: -160 / 400,
                  }}
                  borderRadius="32px"
                  className="w-full md:w-[737px] md:h-[400px] md:flex-shrink-0"
                  logo={{
                    src: imgEstoqueLogo,
                    aspectRatio: 387 / 64,
                    widthFraction: 459 / 737,
                    boxAspectRatio: 459 / 128,
                    artWidthFraction: 387 / 459,
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
                    Gerencie seu inventário de rastreadores, chips e
                    equipamentos. Controle de entrada/saída, alertas de falta
                    de estoque e relatórios detalhados.
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
                      "Monitoramento em tempo real",
                      "Alertas de baixo estoque",
                      "Histórico completo de movimentações",
                      "Relatórios de inventário customizados",
                    ].map((item) => (
                      <li key={item} style={{ color: colors.text.bodyLight }}>
                        <span style={{ color: "#e01e5a" }}>✓</span> {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex-col md:flex-row items-stretch md:items-center" style={{ display: "flex", gap: "12px" }}>
                    <a
                      href={whatsappHref("Olá! Tenho interesse no Conor Estoque e gostaria de falar com um consultor.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto justify-center md:justify-start"
                      style={{
                        backgroundColor: "transparent",
                        color: "#e01e5a",
                        border: "1px solid #e01e5a",
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
                      <WhatsappIcon color="#e01e5a" />
                      Falar com um vendedor
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Final */}
            <div
              className="flex flex-col md:flex-row items-center justify-between px-0 pt-10 pb-0 md:pl-24 md:pr-0 md:py-24 gap-8 md:h-[480px]"
              style={{
                background: "linear-gradient(90deg, #670a24, #e01e5a 43.269%)",
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
                  Comece seu negócio de rastreamento hoje.
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
                  Tudo o que você precisa por apenas R$500,00. Hardware,
                  configuração e conectividade inclusos.
                </p>
                <a
                  href={whatsappHref("Olá! Quero montar meu negócio de rastreamento com a Conor por R$500 e gostaria de falar com um consultor.")}
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
