"use client";

import { colors } from "../styles/design-tokens";
import { AnimatedTitle } from "./motion/AnimatedTitle";
import { FadeIn } from "./motion/FadeIn";

interface ProductCard {
  id: number;
  logo: string;
  logoWidth: number;
  image: string;
  color: string;
  whatsapp: string;
  eyebrow: string;
  href: string;
  features: { label?: string; value: string }[];
}

const products: ProductCard[] = [
  {
    id: 1,
    logo: "/icons/product-logos/4em1.svg",
    logoWidth: 174,
    image: "/image-product-4em1.jpg",
    color: "#40c6ee",
    whatsapp: "/icons/product-whatsapp/4em1.svg",
    eyebrow: "Ative seu software",
    href: "/conor-4em1",
    features: [
      { label: "Software 1:", value: "Recuperação veicular;" },
      { label: "Software 2:", value: "Telemetria avançada;" },
      { label: "Software 3:", value: "Homologação STC;" },
      { label: "Software 4:", value: "Associação veicular." },
    ],
  },
  {
    id: 2,
    logo: "/icons/product-logos/admin.svg",
    logoWidth: 178,
    image: "/image-product-admin.jpg",
    color: "#01c4c4",
    whatsapp: "/icons/product-whatsapp/admin.svg",
    eyebrow: "Zero de entrada",
    href: "/conor-admin",
    features: [
      { label: "Gestão 1:", value: "Financeira" },
      { label: "Gestão 2:", value: "Administrativa" },
      { label: "Gestão 3:", value: "Estoque" },
    ],
  },
  {
    id: 3,
    logo: "/icons/product-logos/estoque.svg",
    logoWidth: 195,
    image: "/image-product-estoque.jpg",
    color: "#e01e5a",
    whatsapp: "/icons/product-whatsapp/estoque.svg",
    eyebrow: "Compre rastreadores e chips na quantidade que precisa",
    href: "/conor-estoque",
    features: [
      { label: "Rastreadores:", value: "Modelo FMB920, TELTONIKA;" },
      { label: "Chips:", value: "Cartão micro-SD 32GB." },
    ],
  },
  {
    id: 4,
    logo: "/icons/product-logos/seguro.svg",
    logoWidth: 184,
    image: "/image-product-seguro.jpg",
    color: "#ffc301",
    whatsapp: "/icons/product-whatsapp/seguro.svg",
    eyebrow: "Ative seu seguro",
    href: "/conor-seguro",
    features: [{ value: "Preço fixo" }, { value: "Sem carência" }, { value: "Sem mínimo" }],
  },
  {
    id: 5,
    logo: "/icons/product-logos/assist.svg",
    logoWidth: 166,
    image: "/image-product-assist.jpg",
    color: "#996cfb",
    whatsapp: "/icons/product-whatsapp/assist.svg",
    eyebrow: "Ative sua assistência",
    href: "/conor-assist",
    features: [
      { value: "Preço fixo" },
      { value: "Atendimento em todo Brasil" },
      { value: "Para Centrais de Rastreamento" },
    ],
  },
  {
    id: 6,
    logo: "/icons/product-logos/marketing.svg",
    logoWidth: 221,
    image: "/image-product-marketing.jpg",
    color: "#fa7a22",
    whatsapp: "/icons/product-whatsapp/marketing.svg",
    eyebrow: "Ative o seu marketing e monte o seu combo",
    href: "/conor-marketing",
    features: [{ value: "Criativos" }, { value: "Tráfego pago" }, { value: "Página de vendas" }],
  },
];

function ProductCardView({ product, delay = 0 }: { product: ProductCard; delay?: number }) {
  return (
    <FadeIn
      delay={delay}
      className="w-full md:flex-1 md:w-auto md:min-w-0"
      style={{
        borderRadius: "32px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <a
        href={product.href}
        style={{
          display: "block",
          height: "271px",
          backgroundImage: `url(${product.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="p-6 md:px-12 md:py-16"
        style={{
          backgroundColor: colors.black,
          display: "flex",
          flexDirection: "column",
          gap: "28px",
          flex: "1 0 0",
        }}
      >
        <img src={product.logo} alt="" style={{ width: `${product.logoWidth}px`, height: "32px" }} />
        <div style={{ height: "1px", backgroundColor: "#333333", width: "100%" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "24px", flex: "1 0 0", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "16px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: product.color, margin: 0 }}>
              {product.eyebrow}
            </p>

            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                fontSize: "14px",
                fontFamily: "var(--font-roboto)",
              }}
            >
              {product.features.map((feature) => (
                <li key={feature.value} style={{ display: "flex", gap: "8px", color: colors.text.bodyLight, lineHeight: "18px" }}>
                  <span style={{ color: product.color, fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <span>
                    {feature.label && <span style={{ color: product.color, fontWeight: 700 }}>{feature.label} </span>}
                    {feature.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-col md:flex-row items-start md:items-center" style={{ display: "flex", gap: "12px" }}>
            <a
              href={product.href}
              style={{
                backgroundColor: product.color,
                color: colors.white,
                border: "none",
                height: "40px",
                padding: "0 16px",
                borderRadius: "4px",
                fontSize: "14px",
                fontWeight: 500,
                fontFamily: "var(--font-roboto)",
                cursor: "pointer",
                transition: "opacity 0.3s",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Saiba mais
            </a>
            <button
              style={{
                backgroundColor: "transparent",
                color: product.color,
                border: `1px solid ${product.color}`,
                height: "40px",
                padding: "0 16px",
                borderRadius: "4px",
                fontSize: "14px",
                fontWeight: 500,
                fontFamily: "var(--font-roboto)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                transition: "opacity 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <img src={product.whatsapp} alt="" style={{ width: "16px", height: "16px" }} />
              Falar com um vendedor
            </button>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export function Products() {
  return (
    <section
      className="px-4 py-10 md:px-12 md:py-12"
      style={{
        backgroundColor: colors.background.dark,
      }}
    >
      <div style={{ maxWidth: "1494px", margin: "0 auto 40px" }}>
        <AnimatedTitle
          as="h2"
          className="text-3xl md:text-[48px]"
          style={{
            fontWeight: 900,
            fontFamily: "var(--font-linear-grotesk)",
            color: colors.white,
            margin: 0,
            textAlign: "center",
          }}
        >
          Nossos produtos
        </AnimatedTitle>
      </div>

      <div style={{ maxWidth: "1494px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "20px" }}>
        {[products.slice(0, 3), products.slice(3, 6)].map((row, rowIdx) => (
          <div key={rowIdx} className="flex-col md:flex-row" style={{ display: "flex", gap: "20px" }}>
            {row.map((product, idx) => (
              <ProductCardView key={product.id} product={product} delay={idx * 0.08} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
