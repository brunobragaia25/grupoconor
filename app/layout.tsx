import type { Metadata } from "next";
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

const siteUrl = "https://www.grupoconor.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Grupo Conor - Soluções para Centrais de Rastreamento Veicular",
    template: "%s | Grupo Conor",
  },
  description:
    "Tecnologia, gestão e suporte consultivo para quem monta, administra, fideliza e expande uma central de rastreamento veicular.",
  keywords:
    "rastreamento veicular, gestão de frota, telemetria, central de rastreamento, seguro veicular, assistência 24h",
  authors: [{ name: "Grupo Conor" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Grupo Conor",
    title: "Grupo Conor - Soluções para Centrais de Rastreamento Veicular",
    description:
      "Tecnologia, gestão e suporte consultivo para quem monta, administra, fideliza e expande uma central de rastreamento veicular.",
    url: siteUrl,
    images: [{ url: "/icon.png", width: 512, height: 512, alt: "Grupo Conor" }],
  },
  twitter: {
    card: "summary",
    title: "Grupo Conor - Soluções para Centrais de Rastreamento Veicular",
    description:
      "Tecnologia, gestão e suporte consultivo para quem monta, administra, fideliza e expande uma central de rastreamento veicular.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Grupo Conor",
    url: siteUrl,
    logo: `${siteUrl}/icon.png`,
    description:
      "Tecnologia, gestão e suporte consultivo para quem monta, administra, fideliza e expande uma central de rastreamento veicular.",
  };

  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${linearGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col text-white" style={{ backgroundColor: "#1b1b1b" }}>
        {children}
      </body>
    </html>
  );
}
