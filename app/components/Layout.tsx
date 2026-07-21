import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { layout } from "../styles/design-tokens";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Wrapper */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main
          className="flex-1"
          style={{
            marginLeft: layout.sidebar.width,
            marginTop: layout.navbar.height,
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
