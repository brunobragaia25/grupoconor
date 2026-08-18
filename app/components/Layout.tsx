"use client";

import { ReactNode, useState } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { FloatingWhatsapp } from "./FloatingWhatsapp";
import { layout } from "../styles/design-tokens";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar onMenuClick={() => setMobileMenuOpen((v) => !v)} menuOpen={mobileMenuOpen} />

      {/* Main Content Wrapper */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar open={mobileMenuOpen} onNavigate={() => setMobileMenuOpen(false)} />

        {/* Main Content */}
        <main
          className="min-w-0 flex-1 md:ml-[200px]"
          style={{
            marginTop: layout.navbar.height,
          }}
        >
          {children}
        </main>
      </div>
      <FloatingWhatsapp />
    </div>
  );
}
