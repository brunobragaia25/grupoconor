"use client";

import { colors } from "../styles/design-tokens";

export function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
      style={{
        height: "72px",
        paddingLeft: "32px",
        paddingRight: "32px",
        backgroundColor: "#000000",
        borderBottom: "1px solid #242424",
      }}
    >
      {/* Logo */}
      <a
        href="/"
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
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "12px 16px",
          backgroundColor: "transparent",
          color: colors.white,
          border: `1px solid ${colors.text.bodyLight}`,
          borderRadius: "999px",
          fontWeight: 500,
          fontSize: "14px",
          cursor: "pointer",
          fontFamily: "var(--font-roboto)",
          transition: "all 0.3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = colors.white;
          e.currentTarget.style.opacity = "0.8";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = colors.text.bodyLight;
          e.currentTarget.style.opacity = "1";
        }}
      >
        <img
          src="/icons/whatsapp-icon.svg"
          alt="WhatsApp"
          style={{ width: "16px", height: "16px", flexShrink: 0 }}
        />
        Falar agora no WhatsApp
      </button>
    </nav>
  );
}
