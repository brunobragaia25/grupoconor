# Guia de Desenvolvimento - Grupo Conor

## 📖 Referência Rápida

**Design System:** `DESIGN_SYSTEM.md`  
**Tokens:** `app/styles/design-tokens.ts`  
**Componentes Base:** `app/components/`

## 🚀 Desenvolvendo Novas Páginas

### 1. Estrutura Base
```tsx
import { Layout } from "@/app/components/Layout";
import { Footer } from "@/app/components/Footer";
import { colors } from "@/app/styles/design-tokens";

export default function PageName() {
  return (
    <Layout>
      <div style={{ backgroundColor: colors.background.dark }}>
        {/* Suas seções aqui */}
        <Footer />
      </div>
    </Layout>
  );
}
```

### 2. Paleta de Cores
Sempre use os tokens:
- **Fundo principal:** `colors.background.dark` (#000000)
- **Fundo de cards:** `colors.background.grayUltraHigh` (#242424)
- **Texto principal:** `colors.white` (#ffffff)
- **Texto secundário:** `colors.text.bodyLight` (#aaaaaa)
- **CTAs:** Use cores temáticas (green, orange, purple, etc)

### 3. Cards Padrão
```tsx
<div
  className="rounded-lg overflow-hidden"
  style={{
    backgroundColor: colors.background.grayUltraHigh,
    borderTop: `4px solid ${colors.green}`, // Mude a cor conforme necessário
  }}
>
  {/* Conteúdo */}
</div>
```

### 4. Seções
- Padding: `py-20 px-6`
- Container: `max-w-6xl mx-auto`
- Responsive grids: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

### 5. Comandos
```bash
npm run dev    # Servidor local (localhost:3000)
npm run build  # Build de produção
npm run lint   # ESLint
```

## 🎨 Cores Disponíveis
- Green: `#20c4c3` - Principal
- Orange: `#fa7a22` - Secundária
- Purple: `#996cfb` - Premium
- Cyan: `#40c6ee` - Info
- Magenta: `#dd245c` - Alert
- Yellow: `#fec22d` - Warning

## 📁 Como Criar Nova Página

```bash
# Exemplo: Criar página "Cases"
mkdir -p app/cases
touch app/cases/page.tsx
```

Edite `app/cases/page.tsx` seguindo a estrutura base acima.

## 🔄 Reutilizando Componentes

```tsx
import { Hero } from "@/app/components/Hero";
import { PromoSection } from "@/app/components/PromoSection";
import { Products } from "@/app/components/Products";

// Use direto na sua página
```

## 📋 Checklist
- [ ] Usa `<Layout>` como wrapper
- [ ] Cores vêm de `design-tokens.ts`
- [ ] Fonte é Roboto
- [ ] Seções têm `py-20 px-6` + `max-w-6xl mx-auto`
- [ ] Grids responsivos
- [ ] Footer no final da página

---

@AGENTS.md
