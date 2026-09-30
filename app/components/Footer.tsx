"use client";

import { colors } from "../styles/design-tokens";
import { whatsappHref } from "../lib/whatsapp";

const imgVector = "/icons/icon-conor.svg";
const imgWhatsapp = "/icons/icon-whatsapp-white.svg";
const imgYoutube = "/icons/youtube.svg";
const imgFacebook = "/icons/facebook.svg";
const imgInsta = "/icons/insta.svg";
const imgLinkedin = "/icons/linkedin.svg";

const socialLinks = [
  { label: "YouTube", icon: imgYoutube, href: "https://www.youtube.com/@grupoconor749" },
  { label: "Facebook", icon: imgFacebook, href: "https://www.facebook.com/grupoconor/" },
  { label: "Instagram", icon: imgInsta, href: "https://www.instagram.com/grupoconor/" },
  { label: "LinkedIn", icon: imgLinkedin, href: "https://br.linkedin.com/company/grupoconor" },
];
const imgLine2 =
  "https://www.figma.com/api/mcp/asset/96f7c149-8656-495d-84b1-08f02c15f823";
const imgLanguage =
  "https://www.figma.com/api/mcp/asset/5813f5ba-759a-4624-b1b6-8131460f5d72";

export function Footer() {
  return (
    <footer
      className="px-4 py-8 md:px-24 md:py-12"
      style={{
        backgroundColor: colors.background.grayUltraHigh,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
      }}
    >
      {/* Container */}
      <div
        className="mt-12 md:mt-24"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        {/* Footer Header - Logo */}
        <div
          className="pb-12 md:pb-24"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <img
            src={imgVector}
            alt="Logo"
            style={{
              width: "24px",
              height: "27px",
            }}
          />
        </div>

        {/* Menus */}
        <div
          className="flex-col md:flex-row gap-8 md:gap-0 py-6 md:py-8"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
            maxWidth: "1494px",
          }}
        >
          {/* Menu 1 - Empresa */}
          <div
            className="w-full md:w-[270px]"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              alignItems: "flex-start",
            }}
          >
            <div style={{ paddingBottom: "24px", width: "100%" }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: "18px",
                  fontWeight: 700,
                  fontFamily: "var(--font-linear-grotesk)",
                  color: colors.white,
                }}
              >
                Empresa
              </h3>
            </div>
            <a
              href="/quem-somos"
              style={{
                margin: 0,
                fontSize: "14px",
                fontWeight: 500,
                fontFamily: "var(--font-roboto)",
                color: colors.white,
                height: "40px",
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                cursor: "pointer",
                transition: "opacity 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Quem somos
            </a>
            {[
              { label: "Fidelizar", href: "/fidelizar" },
              { label: "Administrar", href: "/administrar" },
              { label: "Rastrear", href: "/rastrear" },
              { label: "Montar", href: "/montar" },
              { label: "Expandir", href: "/expandir" },
              { label: "Cases", href: "/cases" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  margin: 0,
                  fontSize: "14px",
                  fontWeight: 500,
                  fontFamily: "var(--font-roboto)",
                  color: colors.white,
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "opacity 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Menu 2 - Produtos */}
          <div
            className="w-full md:w-[268px]"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              alignItems: "flex-start",
            }}
          >
            <div style={{ paddingBottom: "24px", width: "100%" }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: "18px",
                  fontWeight: 700,
                  fontFamily: "var(--font-linear-grotesk)",
                  color: colors.white,
                }}
              >
                Produtos
              </h3>
            </div>
            {[
              { label: "Conor 4 em 1", href: "/rastrear#conor-4em1" },
              { label: "Conor Admin", href: "/administrar" },
              { label: "Conor Assist", href: "/fidelizar#conor-assist" },
              { label: "Conor Estoque", href: "/montar#conor-estoque" },
              { label: "Conor Seguro", href: "/fidelizar#conor-seguro" },
              { label: "Conor Marketing", href: "/expandir#conor-marketing" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  margin: 0,
                  fontSize: "14px",
                  fontWeight: 500,
                  fontFamily: "var(--font-roboto)",
                  color: colors.white,
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "opacity 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Menu 3 - Serviços */}
          <div
            className="w-full md:w-[268px]"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              alignItems: "flex-start",
            }}
          >
            <div style={{ paddingBottom: "24px", width: "100%" }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: "18px",
                  fontWeight: 700,
                  fontFamily: "var(--font-linear-grotesk)",
                  color: colors.white,
                }}
              >
                Serviços
              </h3>
            </div>
            {[
              "Venda de chips",
              "Venda & locações de rastreadores",
              "Seguros e benefícios",
              "Suporte humanizado",
              "Consultoria 360º",
            ].map((item) => (
              <p
                key={item}
                style={{
                  margin: 0,
                  fontSize: "14px",
                  fontWeight: 500,
                  fontFamily: "var(--font-roboto)",
                  color: colors.white,
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {item}
              </p>
            ))}
          </div>

          {/* Menu 4 - Tecnologia */}
          <div
            className="w-full md:w-[268px]"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              alignItems: "flex-start",
            }}
          >
            <div style={{ paddingBottom: "24px", width: "100%" }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: "18px",
                  fontWeight: 700,
                  fontFamily: "var(--font-linear-grotesk)",
                  color: colors.white,
                }}
              >
                Tecnologia
              </h3>
            </div>
            {[
              "Associação veicular",
              "Furto & Roubo",
              "Telemetria avançada",
              "Recuperação veicular",
            ].map((item) => (
              <p
                key={item}
                style={{
                  margin: 0,
                  fontSize: "14px",
                  fontWeight: 500,
                  fontFamily: "var(--font-roboto)",
                  color: colors.white,
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {item}
              </p>
            ))}
          </div>

          {/* Menu 5 - Seu Negócio */}
          <div
            className="w-full md:w-[268px]"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              alignItems: "flex-start",
            }}
          >
            <div style={{ paddingBottom: "24px", width: "100%" }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: "18px",
                  fontWeight: 700,
                  fontFamily: "var(--font-linear-grotesk)",
                  color: colors.white,
                }}
              >
                Seu Negócio
              </h3>
            </div>
            {[
              { label: "Começar Negócio", href: "/comecar-negocio" },
              { label: "Crescer Negócio", href: "/crescer-negocio" },
              { label: "Montar Combo", href: "/montar-combo" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  margin: 0,
                  fontSize: "14px",
                  fontWeight: 500,
                  fontFamily: "var(--font-roboto)",
                  color: colors.white,
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "opacity 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Social Media & Info Section */}
        <div
          className="gap-8 md:gap-12 pb-16 md:pb-[126px] pt-6 md:pt-8"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
            maxWidth: "1494px",
          }}
        >
          {/* Social Media Icons */}
          <div
            className="gap-8 md:gap-16"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                style={{ cursor: "pointer", opacity: 0.8 }}
              >
                <img
                  src={social.icon}
                  alt={social.label}
                  style={{ width: "16px", height: "16px" }}
                />
              </a>
            ))}
          </div>

          {/* Divider Line */}
          <div style={{ width: "100%", height: "1px", opacity: 0.2 }}>
            <img
              src={imgLine2}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Footer Info */}
          <div
            className="items-center md:items-start text-center md:text-left"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              width: "100%",
            }}
          >
            {/* Address + WhatsApp + Telefone */}
            <div
              className="flex-col md:flex-row items-center md:items-start justify-center md:justify-between"
              style={{
                display: "flex",
                gap: "16px",
                width: "100%",
              }}
            >
              {/* Address */}
              <div
                className="flex-col md:flex-row items-center md:items-start justify-center md:justify-start"
                style={{
                  display: "flex",
                  gap: "6px",
                }}
              >
                <img
                  src="/icons/icon-map-pin-line.svg"
                  alt="Location"
                  className="mt-0 md:mt-[2px]"
                  style={{
                    width: "14px",
                    height: "14px",
                    flexShrink: 0,
                  }}
                />
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    fontWeight: 400,
                    fontFamily: "var(--font-roboto)",
                    color: colors.text.bodyLight,
                    lineHeight: "18px",
                  }}
                >
                  R. Castelo de Alcazar, 125, Bairro Castelo, BH/MG - CEP:
                  31.330-310 | CNPJ: 29.808.063/0001-50
                </p>
              </div>

              {/* WhatsApp + Telefone */}
              <div
                className="flex-col md:flex-row items-center"
                style={{
                  display: "flex",
                  gap: "20px",
                  flexShrink: 0,
                }}
              >
              <a
                href={whatsappHref("Olá! Gostaria de falar com um consultor.")}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  textDecoration: "none",
                }}
              >
                <img
                  src={imgWhatsapp}
                  alt="WhatsApp"
                  style={{
                    width: "14px",
                    height: "14px",
                    flexShrink: 0,
                  }}
                />
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    fontWeight: 400,
                    fontFamily: "var(--font-roboto)",
                    color: colors.text.bodyLight,
                    lineHeight: "18px",
                  }}
                >
                  (31) 99293-7571
                </p>
              </a>

              <a
                href="tel:+553133479400"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  textDecoration: "none",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 256 256"
                  fill={colors.text.bodyLight}
                  style={{ flexShrink: 0 }}
                >
                  <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.13L97.54,33.63a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.89-48.92A16,16,0,0,0,222.37,158.46Z" />
                </svg>
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    fontWeight: 400,
                    fontFamily: "var(--font-roboto)",
                    color: colors.text.bodyLight,
                    lineHeight: "18px",
                  }}
                >
                  (31) 3347-9400
                </p>
              </a>
              </div>
            </div>

            {/* Bottom Footer */}
            <div
              className="flex-col md:flex-row items-center md:items-center gap-3 md:gap-0"
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                maxWidth: "1494px",
              }}
            >
              <div
                className="flex-col md:flex-row items-center md:items-center gap-1 md:gap-[6px]"
                style={{
                  display: "flex",
                  fontSize: "12px",
                  fontWeight: 400,
                  fontFamily: "var(--font-roboto)",
                  color: colors.text.bodyLight,
                  lineHeight: "18px",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span>Desenvolvido por</span>
                  <a
                    href="https://www.devzdesign.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Devz Design"
                    style={{ display: "flex", alignItems: "center", cursor: "pointer", transition: "opacity 0.3s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    <img
                      src="/icons/logo-devz-design.svg"
                      alt="Devz Design"
                      style={{ height: "16px", width: "auto", flexShrink: 0 }}
                    />
                  </a>
                </span>
                <span>© 2026 Grupo Conor. Todos os direitos reservados.</span>
              </div>
              <p
                className="text-[14px] md:text-[16px]"
                style={{
                  margin: 0,
                  fontWeight: 700,
                  fontFamily: "var(--font-linear-grotesk)",
                  color: colors.white,
                  lineHeight: "18px",
                }}
              >
                O essencial para o seu negócio de rastreamento
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
