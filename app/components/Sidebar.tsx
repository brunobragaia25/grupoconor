"use client";

import { motion, AnimatePresence } from "framer-motion";
import { colors, layout } from "../styles/design-tokens";

const imgHeartSmile = "/icon-heart-smile.svg";
const imgBookmarkCheck = "/icon-bookmark-check.svg";
const imgEmergencyShare = "/icon-emergency-share.svg";
const imgRocket = "/icon-rocket.svg";
const imgLoupe = "/icon-loupe.svg";

interface NavItem {
  label: string;
  href: string;
  icon: string;
}

const needsItems: NavItem[] = [
  { label: "Fidelizar", href: "/fidelizar", icon: imgHeartSmile },
  { label: "Administrar", href: "/administrar", icon: imgBookmarkCheck },
  { label: "Rastrear", href: "/rastrear", icon: imgEmergencyShare },
  { label: "Montar", href: "/montar", icon: imgRocket },
  { label: "Expandir", href: "/expandir", icon: imgLoupe },
];

const institutionalItems: NavItem[] = [
  { label: "Quem somos", href: "/quem-somos", icon: imgLoupe },
  { label: "Cases", href: "/cases", icon: imgLoupe },
];

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0 },
};

interface SidebarProps {
  open: boolean;
  onNavigate: () => void;
}

function SidebarNav({ onNavigate }: { onNavigate: () => void }) {
  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.045, delayChildren: 0.1 } },
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        padding: "32px 32px 24px 32px",
      }}
      className="md:!pt-24"
    >
      {/* Section Header: O QUE VOCÊ PRECISA? */}
      <motion.div
        variants={itemVariants}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          height: "40px",
          display: "flex",
          alignItems: "center",
          paddingLeft: 0,
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "12px",
            fontWeight: 600,
            color: colors.text.bodyLight,
            textTransform: "uppercase",
            fontFamily: "var(--font-roboto)",
            letterSpacing: "0.5px",
          }}
        >
          O que você precisa?
        </p>
      </motion.div>

      {/* Navigation Items: Needs */}
      {needsItems.map((item) => (
        <motion.a
          key={item.label}
          href={item.href}
          onClick={onNavigate}
          variants={itemVariants}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: "40px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            paddingLeft: 0,
            textDecoration: "none",
            color: colors.white,
            cursor: "pointer",
            transition: "opacity 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <img
            src={item.icon}
            alt=""
            style={{
              width: "20px",
              height: "20px",
              flexShrink: 0,
            }}
          />
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              fontWeight: 500,
              fontFamily: "var(--font-roboto)",
              whiteSpace: "nowrap",
            }}
          >
            {item.label}
          </p>
        </motion.a>
      ))}

      {/* Section Header: INSTITUCIONAL */}
      <motion.div
        variants={itemVariants}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          height: "40px",
          display: "flex",
          alignItems: "center",
          paddingLeft: 0,
          marginTop: "12px",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "12px",
            fontWeight: 600,
            color: colors.text.bodyLight,
            textTransform: "uppercase",
            fontFamily: "var(--font-roboto)",
            letterSpacing: "0.5px",
          }}
        >
          Institucional
        </p>
      </motion.div>

      {/* Navigation Items: Institutional */}
      {institutionalItems.map((item) => (
        <motion.a
          key={item.label}
          href={item.href}
          onClick={onNavigate}
          variants={itemVariants}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: "40px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            paddingLeft: 0,
            textDecoration: "none",
            color: colors.white,
            cursor: "pointer",
            transition: "opacity 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <img
            src={item.icon}
            alt=""
            style={{
              width: "20px",
              height: "20px",
              flexShrink: 0,
            }}
          />
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              fontWeight: 500,
              fontFamily: "var(--font-roboto)",
              whiteSpace: "nowrap",
            }}
          >
            {item.label}
          </p>
        </motion.a>
      ))}
    </motion.nav>
  );
}

export function Sidebar({ open, onNavigate }: SidebarProps) {
  return (
    <>
      {/* Desktop: permanent fixed sidebar */}
      <aside
        className="hidden md:block"
        style={{
          position: "fixed",
          left: 0,
          top: "72px",
          width: layout.sidebar.width,
          height: "calc(100vh - 72px)",
          backgroundColor: "#000000",
          borderRight: "1px solid #242424",
          overflowY: "auto",
        }}
      >
        <SidebarNav onNavigate={onNavigate} />
      </aside>

      {/* Mobile: slide-in drawer + backdrop */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              className="md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onNavigate}
              style={{
                position: "fixed",
                inset: 0,
                top: "72px",
                backgroundColor: "rgba(0,0,0,0.6)",
                zIndex: 40,
              }}
            />
            <motion.aside
              key="drawer"
              className="md:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "fixed",
                left: 0,
                top: "72px",
                width: "min(280px, 80vw)",
                height: "calc(100vh - 72px)",
                backgroundColor: "#000000",
                borderRight: "1px solid #242424",
                overflowY: "auto",
                zIndex: 50,
              }}
            >
              <SidebarNav onNavigate={onNavigate} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
