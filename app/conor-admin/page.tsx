"use client";

import { Layout } from "@/app/components/Layout";
import { Footer } from "@/app/components/Footer";
import { colors } from "@/app/styles/design-tokens";
import { AnimatedTitle } from "@/app/components/motion/AnimatedTitle";
import { FadeIn } from "@/app/components/motion/FadeIn";

const brand = "#01c4c4";
const brandAlt = "#20c4c3";

const imgLogoWordmark = "/icons/logo-conor-admin-wordmark-large.svg";
const imgHeroIllustration = "/image-conor-admin-hero.jpg";
const imgCtaIllustration = "/image-conor-admin-cta.jpg";

const imgIconCar = "/icons/icon-car.svg";
const imgIconWhatsapp = "/icons/icon-whatsapp-white.svg";
const imgIconChartBar = "/icons/icon-chart-bar.svg";
const imgIconFolderOpen = "/icons/icon-folder-open.svg";
const imgIconBrowsers = "/icons/icon-browsers.svg";
const imgIconGearSix = "/icons/icon-gear-six.svg";
const imgIconHandshake = "/icons/icon-handshake.svg";
const imgIconHeadset = "/icons/icon-headset.svg";
const imgIconChartLineUp = "/icons/icon-chart-line-up.svg";

const stats = [
  { value: "3", label: "Módulos integrados" },
  { value: "R$0", label: "Taxa de entrada" },
  { value: "R$0,75", label: "Por item rastreado" },
  { value: "∞", label: "Usuários incluídos" },
];

const modulos = [
  {
    number: "01",
    title: "Módulo Financeiro",
    description:
      "Controle total das finanças da sua central. Receitas, despesas, fluxo de caixa e relatórios gerenciais em tempo real.",
    items: [
      "Lançamento de receitas e despesas",
      "Fluxo de caixa diário e mensal",
      "Contas a pagar e a receber",
      "DRE simplificado automático",
      "Relatórios de lucratividade por cliente",
      "Exportação para contabilidade",
    ],
  },
  {
    number: "02",
    title: "Módulo Administrativo",
    description:
      "Gerencie contratos, clientes e toda a operação da sua central em um único lugar. Automatize processos e elimine planilhas.",
    items: [
      "Cadastro completo de clientes",
      "Gestão de contratos e renovações",
      "Alertas de vencimento automáticos",
      "Histórico de atendimentos",
      "Gestão de equipe e permissões",
      "Painel de indicadores operacionais",
    ],
  },
  {
    number: "03",
    title: "Módulo Estoque",
    description:
      "Controle cada rastreador e chip da sua operação. Saiba exatamente o que está instalado, em estoque ou em manutenção.",
    items: [
      "Inventário de rastreadores e chips",
      "Controle de instalações por cliente",
      "Alertas de estoque mínimo",
      "Histórico de movimentações",
      "Relatório de equipamentos por status",
      "Integração com Conor 4 em 1",
    ],
  },
];

const integracoes = [
  { title: "Conor 4 em 1", description: "Integração nativa com o sistema de rastreamento", icon: imgIconCar },
  { title: "Whatsapp", description: "Envio automático de cobranças e alertas", icon: imgIconWhatsapp },
  { title: "PIX & Boleto", description: "Cobrança automatizada via API bancária", icon: imgIconChartBar },
  { title: "Exportação Contábil", description: "Arquivos compatíveis com sistemas contábeis", icon: imgIconFolderOpen },
  { title: "E-mail", description: "Notificações automáticas para clientes", icon: imgIconBrowsers },
  { title: "API Aberta", description: "Conecte com qualquer sistema via REST API", icon: imgIconGearSix },
];

const suporte = [
  {
    title: "Onboarding guiado",
    description: "Nossa equipe configura o sistema junto com você. Treinamento incluso para toda a equipe.",
    icon: imgIconHandshake,
  },
  {
    title: "Suporte por Whatsapp",
    description: "Canal direto com nossa equipe de suporte para tirar dúvidas e resolver problemas rapidamente.",
    icon: imgIconHeadset,
  },
  {
    title: "Vídeos Tutoriais",
    description: "Biblioteca completa de tutoriais em vídeo para cada funcionalidade do sistema.",
    icon: imgIconFolderOpen,
  },
  {
    title: "Atualizações Gratuitas",
    description: "Novas funcionalidades e melhorias entregues automaticamente sem custo adicional.",
    icon: imgIconChartLineUp,
  },
];

export default function ConorAdmin() {
  return (
    <Layout>
      <div style={{ backgroundColor: colors.background.dark, paddingRight: "32px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Hero */}
          <div
            style={{
              backgroundImage:
                "linear-gradient(108deg, #1b1b1b 14.965%, #000000 48.897%, #01c4c4 106.9%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "120px 80px",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
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
              <img src={imgLogoWordmark} alt="Conor Admin" style={{ height: "58px" }} />
              <p
                style={{
                  fontSize: "64px",
                  fontWeight: 700,
                  fontFamily: "var(--font-linear-grotesk)",
                  color: colors.white,
                  margin: 0,
                  lineHeight: "normal",
                  textAlign: "center",
                }}
              >
                Assistência 24h + Benefícios para sua empresa de
                rastreamento. Ofereça mais valor aos seus clientes sem
                aumentar sua estrutura.
              </p>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "rgba(36, 36, 36, 0.75)",
              borderTopRightRadius: "12px",
              padding: "96px",
              display: "flex",
              flexDirection: "column",
              gap: "96px",
            }}
          >
            {/* Investimento + Stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", gap: "20px" }}>
                <div
                  style={{
                    borderRadius: "32px",
                    overflow: "hidden",
                    backgroundImage: `url(${imgHeroIllustration})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "45%",
                    flexShrink: 0,
                  }}
                />

                <div
                  style={{
                    backgroundColor: colors.black,
                    borderRadius: "32px",
                    flex: "1 0 0",
                    padding: "64px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "24px",
                  }}
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
                        fontSize: "64px",
                        fontWeight: 700,
                        fontFamily: "var(--font-linear-grotesk)",
                        color: brand,
                        margin: 0,
                        lineHeight: "normal",
                      }}
                    >
                      Zero de entrada
                    </p>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                      <p
                        style={{
                          fontSize: "32px",
                          fontWeight: 600,
                          fontFamily: "var(--font-linear-grotesk)",
                          color: colors.white,
                          margin: 0,
                        }}
                      >
                        + R$0,75
                      </p>
                      <p
                        style={{
                          fontSize: "20px",
                          fontFamily: "var(--font-roboto)",
                          color: colors.text.bodyLight,
                          margin: 0,
                        }}
                      >
                        por item rastreado/mês
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      backgroundColor: "rgba(32, 196, 195, 0.07)",
                      border: "1px solid rgba(1, 196, 196, 0.2)",
                      borderRadius: "8px",
                      padding: "13px 17px",
                    }}
                  >
                    <p style={{ fontSize: "13px", fontFamily: "var(--font-roboto)", color: colors.text.bodyLight, margin: 0 }}>
                      Preço especial ao adquirir o <strong style={{ color: colors.white }}>Conor 4 em 1</strong>. Pague apenas pelos itens que você rastreia.
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "rgba(1, 196, 196, 0.2)",
                  borderRadius: "32px",
                  overflow: "hidden",
                  display: "flex",
                }}
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
                      borderLeft: idx > 0 ? "1px solid rgba(1, 196, 196, 0.2)" : "none",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "48px",
                        fontWeight: 700,
                        fontFamily: "var(--font-linear-grotesk)",
                        color: brand,
                        lineHeight: "normal",
                      }}
                    >
                      {s.value}
                    </span>
                    <span style={{ fontSize: "14px", fontFamily: "var(--font-roboto)", color: colors.text.bodyLight }}>
                      {s.label}
                    </span>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Os 3 módulos em detalhes */}
            <div
              style={{
                backgroundColor: "#1b1b1b",
                borderRadius: "32px",
                padding: "96px 0",
                display: "flex",
                flexDirection: "column",
                gap: "64px",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", textAlign: "center" }}>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    fontFamily: "var(--font-roboto)",
                    color: brandAlt,
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    margin: 0,
                  }}
                >
                  Tudo integrado
                </p>
                <AnimatedTitle as="h2" style={{ fontSize: "48px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.white, margin: 0 }}>
                  Os 3 módulos em detalhes
                </AnimatedTitle>
                <p style={{ fontSize: "16px", fontFamily: "var(--font-roboto)", color: colors.text.bodyLight, margin: 0 }}>
                  Cada módulo foi desenvolvido para as necessidades reais de uma central de rastreamento.
                </p>
              </div>

              <div style={{ display: "flex", gap: "24px", width: "100%", padding: "0 96px" }}>
                {modulos.map((m, idx) => (
                  <FadeIn
                    key={m.number}
                    delay={idx * 0.08}
                    style={{
                      backgroundColor: colors.black,
                      borderRadius: "20px",
                      flex: "1 0 0",
                      padding: "40px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <p style={{ fontSize: "13px", fontWeight: 700, fontFamily: "var(--font-roboto)", color: brandAlt, letterSpacing: "1px", margin: 0 }}>
                      {m.number}
                    </p>
                    <p style={{ fontSize: "24px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.white, margin: 0 }}>
                      {m.title}
                    </p>
                    <p style={{ fontSize: "14px", fontFamily: "var(--font-roboto)", color: colors.text.bodyLight, margin: 0, lineHeight: "24px" }}>
                      {m.description}
                    </p>
                    <div style={{ height: "1px", backgroundColor: "rgba(255, 255, 255, 0.08)", width: "100%" }} />
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      {m.items.map((item) => (
                        <div key={item} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                          <span style={{ color: brandAlt, fontSize: "13px", fontWeight: 700 }}>✓</span>
                          <span style={{ fontSize: "13px", fontFamily: "var(--font-roboto)", color: colors.text.bodyLight }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Integrações Nativas */}
            <div style={{ display: "flex", flexDirection: "column", gap: "40px", alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center", textAlign: "center" }}>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      fontFamily: "var(--font-roboto)",
                      color: brandAlt,
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      margin: 0,
                    }}
                  >
                    Conectado com o que você já usa
                  </p>
                  <AnimatedTitle as="h2" style={{ fontSize: "48px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.white, margin: 0 }}>
                    Integrações Nativas
                  </AnimatedTitle>
                  <p style={{ fontSize: "16px", fontFamily: "var(--font-roboto)", color: colors.text.bodyLight, margin: 0, lineHeight: "28px" }}>
                    O Conor Admin se conecta às principais ferramentas do mercado para centralizar toda a operação da sua central.
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: "rgba(32, 196, 195, 0.13)",
                    border: "1px solid rgba(32, 196, 195, 0.27)",
                    borderRadius: "999px",
                    padding: "11px 21px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: brandAlt, display: "inline-block" }} />
                  <span style={{ fontSize: "13px", fontWeight: 600, fontFamily: "var(--font-roboto)", color: brandAlt }}>
                    API aberta para integrações personalizadas
                  </span>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
                {[integracoes.slice(0, 3), integracoes.slice(3, 6)].map((row, rowIdx) => (
                  <div key={rowIdx} style={{ display: "flex", gap: "20px" }}>
                    {row.map((item, idx) => (
                      <FadeIn
                        key={item.title}
                        delay={idx * 0.08}
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
                          minHeight: "260px",
                        }}
                      >
                        <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: brandAlt, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <img src={item.icon} alt="" style={{ width: "26px", height: "26px" }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                          <div style={{ width: "40px", height: "3px", backgroundColor: brandAlt, borderRadius: "2px" }} />
                          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            <p style={{ fontSize: "24px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: brandAlt, margin: 0 }}>
                              {item.title}
                            </p>
                            <p style={{ fontSize: "14px", fontFamily: "var(--font-roboto)", color: colors.text.bodyLight, margin: 0, lineHeight: "20px" }}>
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Suporte Completo */}
          <div style={{ backgroundColor: colors.black, padding: "96px" }}>
            <div style={{ display: "flex", gap: "96px", alignItems: "flex-start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "462px", flexShrink: 0 }}>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    fontFamily: "var(--font-roboto)",
                    color: brand,
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    margin: 0,
                  }}
                >
                  Incluso no plano
                </p>
                <AnimatedTitle as="h2" style={{ fontSize: "48px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.white, margin: 0 }}>
                  {["Suporte ", { text: "Completo", color: brand }]}
                </AnimatedTitle>
                <p style={{ fontSize: "16px", fontFamily: "var(--font-roboto)", color: colors.text.bodyLight, margin: 0, lineHeight: "24px" }}>
                  Você não fica sozinho. Do onboarding ao dia a dia, nossa equipe está com você.
                </p>
              </div>

              <div style={{ flex: "1 0 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {suporte.map((s, idx) => (
                  <FadeIn
                    key={s.title}
                    delay={idx * 0.08}
                    style={{
                      backgroundColor: "#0c0c0c",
                      border: "1px solid #212121",
                      borderRadius: "32px",
                      padding: "33px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "rgba(1, 196, 196, 0.13)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img src={s.icon} alt="" style={{ width: "26px", height: "26px" }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <p style={{ fontSize: "18px", fontWeight: 600, fontFamily: "var(--font-linear-grotesk)", color: colors.white, margin: 0 }}>
                        {s.title}
                      </p>
                      <p style={{ fontSize: "14px", fontFamily: "var(--font-roboto)", color: colors.text.bodyLight, margin: 0, lineHeight: "24px" }}>
                        {s.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div
            style={{
              backgroundColor: brand,
              height: "480px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: "96px",
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <AnimatedTitle
                  as="h2"
                  style={{
                    fontSize: "48px",
                    fontWeight: 700,
                    fontFamily: "var(--font-linear-grotesk)",
                    color: colors.white,
                    margin: 0,
                    lineHeight: "1.1",
                  }}
                >
                  {["Gerencie sua central ", { text: "com inteligência", weight: 900 }]}
                </AnimatedTitle>
                <p
                  style={{
                    fontSize: "16px",
                    fontFamily: "var(--font-roboto)",
                    color: colors.white,
                    margin: 0,
                    lineHeight: "28px",
                    maxWidth: "345px",
                  }}
                >
                  Zero de entrada + R$0,75 por item rastreado. Adquirindo
                  com o Conor 4 em 1.
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

            <img
              src={imgCtaIllustration}
              alt=""
              style={{
                height: "480px",
                width: "904px",
                objectFit: "cover",
                objectPosition: "center",
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
