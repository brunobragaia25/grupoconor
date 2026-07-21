import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const linearGrotesk = localFont({
  src: [
    { path: "./fonts/LinearGrotesk-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/LinearGrotesk-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/LinearGrotesk-SemiBold.otf", weight: "600", style: "normal" },
    { path: "./fonts/LinearGrotesk-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-linear-grotesk",
  fallback: ["Inter", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Grupo Conor - Soluções em Rastreamento Veicular",
  description:
    "Plataforma completa de rastreamento veicular e gestão de frota com tecnologia integrada",
  keywords:
    "rastreamento veicular, gestão de frota, telemetria, logística",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${linearGrotesk.variable} h-full antialiased`}
    >
      <head>
        <Script
          src="https://mcp.figma.com/mcp/html-to-design/capture.js"
          async
        />
      </head>
      <body className="min-h-full flex flex-col text-white" style={{ backgroundColor: "#1b1b1b" }}>
        {children}
      </body>
    </html>
  );
}
