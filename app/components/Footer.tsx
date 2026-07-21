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
      style={{
        backgroundColor: colors.background.grayUltraHigh,
        paddingLeft: "96px",
        paddingRight: "96px",
        paddingTop: "48px",
        paddingBottom: "48px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
      }}
    >
      {/* Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          marginTop: "96px",
        }}
      >
        {/* Footer Header - Logo */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingBottom: "96px",
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
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            paddingTop: "32px",
            paddingBottom: "32px",
            width: "100%",
            maxWidth: "1494px",
          }}
        >
          {/* Menu 1 - Empresa */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              alignItems: "flex-start",
              width: "270px",
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
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              alignItems: "flex-start",
              width: "268px",
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
              "Conor 4 em 1",
              "Conor Admin",
              "Conor Assist",
              "Conor Estoque",
              "Conor Seguro",
              "Conor Marketing",
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

          {/* Menu 3 - Serviços */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              alignItems: "flex-start",
              width: "268px",
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
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              alignItems: "flex-start",
              width: "268px",
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
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "48px",
            alignItems: "flex-start",
            paddingBottom: "126px",
            paddingTop: "32px",
            width: "100%",
            maxWidth: "1494px",
          }}
        >
          {/* Social Media Icons */}
          <div
            style={{
              display: "flex",
              gap: "64px",
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
                src={imgLanguage}
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
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                maxWidth: "1494px",
              }}
            >
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
                © 2025 Grupo Conor. Todos os direitos reservados.
              </p>
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
