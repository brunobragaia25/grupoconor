# Design System - Grupo Conor

**Extraído do Figma:** grupoconnor.com.br  
**Data:** 2026-04-09  
**Framework:** Next.js 16 + CSS-in-JS Inline Styles  
**Status:** Implementação em produção

---

## 📐 Dimensões do Layout

### Estrutura Principal
```
┌──────────────────────────────────────────────────┐
│ NAVBAR (72px, height)                            │
├────────────────┬────────────────────────────────┤
│ SIDEBAR        │ CONTEÚDO PRINCIPAL             │
│ 200px (width)  │ max-width: 1494px              │
│ Fixed Left     │ padding: 48px                  │
├────────────────┴────────────────────────────────┤
│ FOOTER                                           │
│ margin-top: 96px, padding: 96px                 │
└──────────────────────────────────────────────────┘
```

### Dimensões Críticas
| Elemento | Valor | Notas |
|----------|-------|-------|
| Navbar Height | 72px | Fixed no topo |
| Sidebar Width | 200px | Fixed à esquerda |
| Container Max-width | 1494px | Padrão de todas as seções |
| Section Padding | 48px | Padding horizontal |
| First Section Top Padding | 96px | Alinha com sidebar |
| Footer Margin Top | 96px | Espaçamento antes do footer |
| Footer Padding | 96px | Padding horizontal |

---

## 🎨 Paleta de Cores

### Cores Primárias (Interação)
| Nome | Hex | Uso |
|------|-----|-----|
| **Link Light (Blue)** | `#52a4ff` | CTAs, Links, Buttons |
| **Yellow** | `#fec22d` | Destaque de texto |
| **Cyan** | `#40c6ee` | Borders de cards |
| **Orange** | `#fa7a22` | Cards temáticos |
| **Purple** | `#996cfb` | Cards temáticos |
| **Magenta** | `#dd245c` | Cards temáticos |
| **Green (Cyan)** | `#20c4c3` | Cards temáticos |

### Cores de Fundo
| Nome | Hex | Uso |
|------|-----|-----|
| **Dark (Background Principal)** | `#1b1b1b` | Background de seções |
| **Gray Ultra High (Cards)** | `#000000` | Background de cards |
| **White** | `#ffffff` | Texto principal |
| **Body Light (Texto Secundário)** | `#aaaaaa` | Texto descritivo |

### Referência de Tokens Atualizados
```typescript
// Localização: app/styles/design-tokens.ts
export const colors = {
  white: "#ffffff",
  black: "#000000",
  green: "#20c4c3",
  orange: "#fa7a22",
  purple: "#996cfb",
  yellow: "#fec22d",
  cyan: "#40c6ee",
  magenta: "#dd245c",

  background: {
    dark: "#1b1b1b",        // Background principal de seções
    light: "#ffffff",
    offWhite: "#f6f6f4",
    grayLight: "#aaaaaa",
    grayUltraHigh: "#000000", // Background de cards
  },

  text: {
    bodyLight: "#aaaaaa",    // Texto secundário
    identity: "#7a7d81",
  },

  interaction: {
    linkLight: "#52a4ff",    // Blue para CTAs
  },
};

export const layout = {
  navbar: { height: "72px" },
  sidebar: { width: "200px" },
  container: { maxWidth: "1494px" },
};
```

---

## 🔤 Tipografia

### Fontes Utilizadas
- **Raleway** - Títulos e destaques (Bold 700)
- **Roboto** - Corpo e textos (Regular 400, Medium 500, Bold 700)

### Escalas de Texto por Componente

#### Títulos Principais
```typescript
{
  fontFamily: "var(--font-raleway)",
  fontSize: "72px",
  fontWeight: 700,
  lineHeight: "normal",
  color: colors.white,
}
```

#### Títulos de Seção
```typescript
{
  fontFamily: "var(--font-raleway)",
  fontSize: "48px",
  fontWeight: 700,
  lineHeight: "normal",
  color: colors.white,
}
```

#### Títulos de Card
```typescript
{
  fontFamily: "var(--font-raleway)",
  fontSize: "24px",
  fontWeight: 700,
  lineHeight: "normal",
  color: colors.white,
}
```

#### Label/Overline
```typescript
{
  fontFamily: "var(--font-roboto)",
  fontSize: "12px",
  fontWeight: 600,
  textTransform: "uppercase",
  color: colors.text.bodyLight,
}
```

#### Corpo (Descrição)
```typescript
{
  fontFamily: "var(--font-roboto)",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "18px",
  color: colors.text.bodyLight,
}
```

#### Button Text
```typescript
{
  fontFamily: "var(--font-roboto)",
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "normal",
}
```

---

## 🧩 Componentes Implementados

### 1. HeroSection
**Layout:** 3 cards em flex horizontal com gap 50px  
**Cards:** Imagem + Label + Título + Descrição + 2 Botões  
**Padding Top:** 96px (alinha com sidebar)

```tsx
<div style={{
  backgroundColor: colors.background.grayUltraHigh,
  borderRadius: "8px",
  overflow: "hidden",
  display: "flex",
  gap: "50px",
}}>
  <img src={imagemURL} width="171px" height="171px" />
  <div>
    <p style={{ fontSize: "12px" }}>Label</p>
    <h3 style={{ fontSize: "24px", fontWeight: 700 }}>Título</h3>
    <p style={{ fontSize: "14px" }}>Descrição</p>
  </div>
</div>
```

---

### 2. PromoSection
**Layout:** 2 colunas (imagem esquerda, conteúdo direita)  
**Card Style:** Black background, rounded 8px  
**Destaque:** Título com trecho em amarelo (#fec22d)

---

### 3. Products
**Layout:** Grid 3 colunas com gap 48px  
**Cards:** 6 produtos (Conor 4 em 1, Admin, Assist, Estoque, Seguro, Marketing)  
**Card Structure:** Imagem (171px) + Título + Features List + 2 Botões

---

### 4. PromoBanner02
**Layout:** 2 colunas (conteúdo esquerda, imagem direita)  
**Largura:** max-width 1494px  
**Altura:** min-height 254px

---

### 5. Technologies
**Layout:** Grid 2 colunas com gap 48px  
**Cards:** 4 tecnologias com cores temáticas
- Associação veicular (Cyan #40c6ee)
- Furto & Roubo (Orange #fa7a22)
- Telemetria avançada (Purple #996cfb)
- Recuperação veicular (Magenta #dd245c)

**Card Structure:** Icon circle (96px, border 2px, #1b1b1b bg) + Título + Descrição + Button

---

### 6. CounterSection
**Layout:** 2 colunas com gap 48px  
**Funcionalidade:** Contadores animados com IntersectionObserver  
- +350 clientes em todo Brasil
- +80.000 veículos rastreados

**Animação:** 50 steps em 1500ms, trigger ao 50% visibilidade

---

### 7. Services
**Layout:** Grid 2+3 (2 cards primeira linha, 3 segunda)  
**Gap:** 36px  
**Cards:** Icon circle + Título + Descrição + 2 Botões

---

### 8. FAQ
**Layout:** 2 colunas (título esquerda, accordion direita)  
**Accordion:** Expandível/colapsável com animações
- Max-height transition para descrição
- Rotação 180° do ícone
- Easing: cubic-bezier(0.4, 0, 0.2, 1)

---

### 9. PromoBanner03
**Layout:** 2 colunas (conteúdo esquerda, imagem direita)  
**Altura:** 254px  
**Margin Bottom:** 96px

---

### 10. Footer
**Layout:** 4 colunas de menu + social icons + info  
**Menus:**
- Empresa (Quem somos, Manual do colaborador, Trabalhe conosco)
- Produtos (6 itens Conor)
- Serviços (5 itens)
- Tecnologia (4 itens)

**Social:** YouTube, Facebook, Instagram, LinkedIn (gap 64px)  
**Info:** Endereço com ícone + Copyright + Tagline

---

## 🎯 Padrões de Design

### Padrão de Seção
```tsx
<section
  style={{
    backgroundColor: colors.background.dark,
    padding: "48px 48px",
  }}
>
  <div
    style={{
      maxWidth: "1494px",
      margin: "0 auto",
    }}
  >
    {/* Conteúdo */}
  </div>
</section>
```

### Padrão de Card com Ícone Circular
```tsx
<div
  style={{
    width: "96px",
    height: "96px",
    borderRadius: "999px",
    border: `2px solid ${colors.cyan}`,
    backgroundColor: "#1b1b1b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <img src={icon} width="48px" height="48px" />
</div>
```

### Padrão de Botão CTA Azul
```tsx
<button
  style={{
    backgroundColor: "#52a4ff",
    color: colors.white,
    border: "none",
    height: "40px",
    padding: "0 16px",
    borderRadius: "999px",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
    transition: "opacity 0.3s",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
>
  Texto do Botão
</button>
```

### Padrão de Botão Outline
```tsx
<button
  style={{
    backgroundColor: "transparent",
    color: "#52a4ff",
    border: "1px solid #52a4ff",
    height: "40px",
    padding: "0 16px",
    borderRadius: "999px",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
    transition: "opacity 0.3s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
>
  <img src={icon} width="16px" height="16px" />
  <span>Texto do Botão</span>
</button>
```

---

## 📁 Estrutura de Componentes

```
app/
├── components/
│   ├── Layout.tsx           # Wrapper (Navbar + Sidebar + Main)
│   ├── Navbar.tsx           # Barra superior (72px)
│   ├── Sidebar.tsx          # Menu lateral (200px)
│   ├── HeroSection.tsx      # 3 cards iniciais
│   ├── PromoSection.tsx     # Banner promo 01
│   ├── Products.tsx         # 6 produtos em grid 3x2
│   ├── PromoBanner02.tsx    # Banner promo 02
│   ├── Technologies.tsx     # 4 tecnologias em grid 2x2
│   ├── CounterSection.tsx   # Contadores animados
│   ├── Services.tsx         # 5 serviços em grid 2+3
│   ├── FAQ.tsx              # Accordion de perguntas
│   ├── PromoBanner03.tsx    # Banner promo 03
│   └── Footer.tsx           # Rodapé com 4 menus
├── styles/
│   ├── design-tokens.ts     # Tokens de design
│   └── globals.css          # Estilos globais
├── page.tsx                 # Homepage
├── layout.tsx               # Layout raiz
└── favicon.ico
```

---

## 🚀 Como Criar Novas Páginas

### 1. Estrutura Base
```typescript
import { Layout } from "@/app/components/Layout";
import { Footer } from "@/app/components/Footer";
import { colors } from "@/app/styles/design-tokens";

export default function NewPage() {
  return (
    <Layout>
      <div style={{ backgroundColor: colors.background.dark }}>
        {/* Seções da página */}
        <Footer />
      </div>
    </Layout>
  );
}
```

### 2. Criar Seções
```typescript
<section
  style={{
    backgroundColor: colors.background.dark,
    padding: "48px 48px",
  }}
>
  <div style={{ maxWidth: "1494px", margin: "0 auto" }}>
    {/* Conteúdo */}
  </div>
</section>
```

### 3. Reutilizar Componentes
- Importe componentes já criados (HeroSection, PromoSection, etc)
- Customize conforme necessário mantendo os tokens de design

---

## ✅ Checklist para Novas Páginas

- [ ] Usa `<Layout>` como wrapper
- [ ] Background da página: `colors.background.dark` (#1b1b1b)
- [ ] Background de cards: `colors.background.grayUltraHigh` (#000000)
- [ ] Tipografia: Raleway para títulos, Roboto para corpo
- [ ] Cores de texto: `colors.white` (principal), `colors.text.bodyLight` (secundário)
- [ ] Container max-width: 1494px
- [ ] Section padding: 48px horizontal
- [ ] Primeira seção: padding-top 96px (alinha com sidebar)
- [ ] Botões CTAs: cor #52a4ff com border-radius 999px
- [ ] Footer no final com margin-top 96px
- [ ] Transições: opacity 0.3s em interações
- [ ] Fontes importadas: Raleway, Roboto (via next/font)

---

## 📊 Grid Patterns

### 2 Colunas (50/50)
```tsx
style={{
  display: "flex",
  gap: "48px",
  alignItems: "center",
}}
```

### 3 Colunas Iguais
```tsx
style={{
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "48px",
}}
```

### 2+3 Grid (2 primeira linha, 3 segunda)
```tsx
{/* Primeira linha */}
<div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "36px" }}>
  {/* 2 items */}
</div>

{/* Segunda linha */}
<div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "36px" }}>
  {/* 3 items */}
</div>
```

---

## 🎨 Exemplos de Cards Implementados

### Card com Icon Circle (Technologies/Services)
- Icon circle: 96px, border 2px colorida, bg #1b1b1b
- Título: Raleway 24px bold
- Descrição: Roboto 14px
- Button: Outline com cor temática
- Altura dinâmica baseada em conteúdo

### Card com Imagem (Products)
- Imagem: 171px width/height
- Título com word-break para 2 linhas
- Features list
- 2 botões (fill + outline)

### Card Accordion (FAQ)
- Transição suave em max-height
- Ícone rotatório (180°)
- Easing: cubic-bezier(0.4, 0, 0.2, 1)

---

## 🔗 Referências

- **Figma Design:** https://www.figma.com/design/64C5jnh0ekbU06yOfUmrEi/grupoconnor.com.br
- **Design Tokens:** `app/styles/design-tokens.ts`
- **Homepage:** `app/page.tsx`
- **Layout Component:** `app/components/Layout.tsx`

---

**Última atualização:** 2026-04-09  
**Responsável:** Claude Code  
**Versão:** 2.0 - Layout Homepage Completo
