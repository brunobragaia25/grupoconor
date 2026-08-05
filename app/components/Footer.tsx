"use client";

import { colors } from "../styles/design-tokens";

const imgVector = "/icons/icon-conor.svg";
const imgYoutube = "/icons/youtube.svg";
const imgFacebook = "/icons/facebook.svg";
const imgInsta = "/icons/insta.svg";
const imgLinkedin = "/icons/linkedin.svg";
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
            <p
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
              Manual do colaborador
            </p>
            <p
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
              Trabalhe conosco
            </p>
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
              { label: "Conor 4 em 1", href: "/conor-4em1" },
              { label: "Conor Admin", href: "/conor-admin" },
              { label: "Conor Assist", href: "/conor-assist" },
              { label: "Conor Estoque", href: "/conor-estoque" },
              { label: "Conor Seguro", href: "/conor-seguro" },
              { label: "Conor Marketing", href: "/conor-marketing" },
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
              "Consultoria 360º",
              "Seguros & Benefícios",
              "Suporte 24hrs",
              "Venda & Locação de chips",
              "Venda & Locação de rastreadores",
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
            <a href="#" style={{ cursor: "pointer", opacity: 0.8 }}>
              <img
                src={imgYoutube}
                alt="YouTube"
                style={{ width: "16px", height: "16px" }}
              />
            </a>
            <a href="#" style={{ cursor: "pointer", opacity: 0.8 }}>
              <img
                src={imgFacebook}
                alt="Facebook"
                style={{ width: "16px", height: "16px" }}
              />
            </a>
            <a href="#" style={{ cursor: "pointer", opacity: 0.8 }}>
              <img
                src={imgInsta}
                alt="Instagram"
                style={{ width: "16px", height: "16px" }}
              />
            </a>
            <a href="#" style={{ cursor: "pointer", opacity: 0.8 }}>
              <img
                src={imgLinkedin}
                alt="LinkedIn"
                style={{ width: "16px", height: "16px" }}
              />
            </a>
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
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            {/* Address */}
            <div
              style={{
                display: "flex",
                gap: "6px",
                alignItems: "flex-start",
              }}
            >
              <img
                src="/icons/icon-map-pin-line.svg"
                alt="Location"
                style={{
                  width: "14px",
                  height: "14px",
                  marginTop: "2px",
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
                Av. Pres. Tancredo Neves, Nº: 2640, 12º andar, BH/MG - CEP:
                31.330-472 | CNPJ: 29.808.063/0001-50
              </p>
            </div>

            {/* Bottom Footer */}
            <div
              className="flex-col md:flex-row items-start md:items-center gap-3 md:gap-0"
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                maxWidth: "1494px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "12px",
                  fontWeight: 400,
                  fontFamily: "var(--font-roboto)",
                  color: colors.text.bodyLight,
                  lineHeight: "18px",
                }}
              >
                <span>Desenvolvido por</span>
                <img
                  src="/icons/logo-devz-design.svg"
                  alt="Devz Design"
                  style={{ height: "16px", width: "auto", flexShrink: 0 }}
                />
                <span>© 2026 Grupo Conor. Todos os direitos reservados.</span>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: "16px",
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
