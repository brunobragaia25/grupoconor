/**
 * Design System - Grupo Conor
 * Extraído do Figma: grupoconnor.com.br
 * Data: 2026-04-09
 */

export const colors = {
  // Identity Colors
  white: "#ffffff",
  black: "#000000",
  green: "#20c4c3",
  orange: "#fa7a22",
  purple: "#996cfb",
  yellow: "#fec22d",
  cyan: "#40c6ee",
  magenta: "#dd245c",

  // Background Colors
  background: {
    dark: "#1b1b1b",
    light: "#ffffff",
    offWhite: "#f6f6f4",
    grayLight: "#aaaaaa",
    grayUltraHigh: "#000000",
  },

  // Light Backgrounds
  backgrounds: {
    greenLight: "#bceeee",
    orangeLight: "#fed8bd",
    purpleLight: "#e1d3fe",
    cyanLight: "#c6eefa",
    magentaLight: "#f5becf",
    yellowLight: "#feedc0",
  },

  // Text Colors
  text: {
    bodyLight: "#aaaaaa",
    identity: "#7a7d81",
  },

  // Interactive
  interaction: {
    linkLight: "#52a4ff",
  },
} as const;

export const typography = {
  overline: {
    base: {
      fontFamily: "Roboto",
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "16px",
      letterSpacing: "0px",
    },
    large: {
      fontFamily: "Roboto",
      fontSize: "12px",
      fontWeight: 600,
      lineHeight: "100%",
      letterSpacing: "0px",
    },
  },
  label: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "100%",
    letterSpacing: "0px",
  },
} as const;

export const spacing = {
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  xxl: "32px",
  xxxl: "48px",
} as const;

export const layout = {
  navbar: {
    height: "72px",
  },
  sidebar: {
    width: "200px",
  },
  contentWidth: "1720px",
  maxWidth: "1920px",
} as const;

export const designSystem = {
  colors,
  typography,
  spacing,
  layout,
} as const;
