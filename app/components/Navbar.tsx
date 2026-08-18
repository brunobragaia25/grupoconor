"use client";

import { colors } from "../styles/design-tokens";
import { whatsappHref } from "@/app/lib/whatsapp";

interface NavbarProps {
  onMenuClick: () => void;
  menuOpen: boolean;
}

export function Navbar({ onMenuClick, menuOpen }: NavbarProps) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8"
      style={{
        height: "72px",
        backgroundColor: "#000000",
        borderBottom: "1px solid #242424",
      }}
    >
      {/* Hamburger (mobile only) */}
      <button
        className="flex md:hidden items-center justify-center order-1"
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        onClick={onMenuClick}
        style={{
          width: "40px",
          height: "40px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          flexShrink: 0,
        }}
      >
        <div style={{ position: "relative", width: "20px", height: "16px" }}>
          <span
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: "2px",
              backgroundColor: colors.white,
              top: menuOpen ? "7px" : "0px",
              transform: menuOpen ? "rotate(45deg)" : "rotate(0deg)",
              transition: "top 0.2s, transform 0.2s",
            }}
          />
          <span
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: "2px",
              backgroundColor: colors.white,
              top: "7px",
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.2s",
            }}
          />
          <span
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: "2px",
              backgroundColor: colors.white,
              top: menuOpen ? "7px" : "14px",
              transform: menuOpen ? "rotate(-45deg)" : "rotate(0deg)",
              transition: "top 0.2s, transform 0.2s",
            }}
          />
        </div>
      </button>

      {/* Logo */}
      <a
        href="/"
        className="order-2 md:order-1"
        style={{
          height: "26px",
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          cursor: "pointer",
          transition: "opacity 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        <img
          src="/brand-grupo-conor.png"
          alt="Grupo Conor"
          style={{ height: "24px", width: "auto" }}
        />
      </a>

      {/* CTA Button */}
      <a
        href={whatsappHref("Olá! Gostaria de falar com um consultor da Conor.")}
        target="_blank"
        rel="noopener noreferrer"
        className="order-3 md:order-2"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "10px 12px",
          backgroundColor: "transparent",
          color: colors.white,
          border: `1px solid ${colors.text.bodyLight}`,
          borderRadius: "999px",
          fontWeight: 500,
          fontSize: "14px",
          cursor: "pointer",
          fontFamily: "var(--font-roboto)",
          transition: "all 0.2s ease",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#25D366";
          e.currentTarget.style.backgroundColor = "rgba(37, 211, 102, 0.12)";
          e.currentTarget.style.transform = "scale(1.03)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = colors.text.bodyLight;
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <img
          src="/icons/whatsapp-icon.svg"
          alt="WhatsApp"
          style={{ width: "16px", height: "16px", flexShrink: 0 }}
        />
        <span className="hidden sm:inline">Falar agora no WhatsApp</span>
      </a>
    </nav>
  );
}
