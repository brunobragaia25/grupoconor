"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { colors } from "@/app/styles/design-tokens";
import { AnimatedTitle } from "@/app/components/motion/AnimatedTitle";
import { FadeIn } from "@/app/components/motion/FadeIn";
import { whatsappHref } from "@/app/lib/whatsapp";

const HIDE_NUMBER_SPINNER = `
  .no-spinner::-webkit-outer-spin-button,
  .no-spinner::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const J16_PARCELADO = 160;
const J16_A_VISTA = 140;

const CHIP_TIERS = [
  { max: 10, price: 5.0 },
  { max: 50, price: 4.5 },
  { max: 100, price: 3.9 },
  { max: Infinity, price: 3.4 },
];

function chipUnitPrice(quantity: number): number {
  return CHIP_TIERS.find((tier) => quantity <= tier.max)!.price;
}

/** Units left to unlock the next (cheaper) chip price tier, or null if already at the best price. */
function chipsUntilNextTier(quantity: number): { unitsLeft: number; nextPrice: number } | null {
  const tierIdx = CHIP_TIERS.findIndex((tier) => quantity <= tier.max);
  const nextTier = CHIP_TIERS[tierIdx + 1];
  if (!nextTier) return null;
  return { unitsLeft: CHIP_TIERS[tierIdx].max - quantity + 1, nextPrice: nextTier.price };
}

function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 999,
}: {
  value: number;
  onChange: (next: number) => void;
  min?: number;
  max?: number;
}) {
  const stepperButtonStyle = (): React.CSSProperties => ({
    width: "36px",
    height: "36px",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.35)",
    backgroundColor: "rgba(255,255,255,0.08)",
    color: colors.white,
    fontSize: "18px",
    cursor: "pointer",
    transition: "transform 0.15s ease, border-color 0.15s ease, background-color 0.15s ease",
  });

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        style={stepperButtonStyle()}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)";
          e.currentTarget.style.transform = "scale(1.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        −
      </button>
      <div style={{ position: "relative", width: "64px", height: "36px" }}>
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.input
            key={value}
            type="number"
            value={value}
            min={min}
            max={max}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onChange={(e) => {
              const next = parseInt(e.target.value, 10);
              onChange(Number.isNaN(next) ? min : Math.min(max, Math.max(min, next)));
            }}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              textAlign: "center",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.6)",
              backgroundColor: "rgba(255,255,255,0.12)",
              color: colors.white,
              fontFamily: "var(--font-roboto)",
              fontSize: "16px",
              fontWeight: 700,
              MozAppearance: "textfield",
            }}
            className="no-spinner"
          />
        </AnimatePresence>
      </div>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        style={stepperButtonStyle()}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)";
          e.currentTarget.style.transform = "scale(1.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        +
      </button>
    </div>
  );
}

/** Animated price: pops with a scale bounce whenever the formatted value changes. */
function AnimatedPrice({ value, style }: { value: number; style?: React.CSSProperties }) {
  const formatted = formatBRL(value);
  return (
    <span style={{ position: "relative", display: "inline-block", overflow: "hidden", lineHeight: 1, verticalAlign: "top" }}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={formatted}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "inline-block", ...style }}
        >
          {formatted}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/** Pulses a subtle glow ring around its children whenever `pulseKey` changes. */
function PulseOnChange({ pulseKey, color, children }: { pulseKey: string | number; color: string; children: React.ReactNode }) {
  const isFirstRender = useRef(true);
  const [pulsing, setPulsing] = useState(false);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setPulsing(true);
    const timeout = setTimeout(() => setPulsing(false), 500);
    return () => clearTimeout(timeout);
  }, [pulseKey]);

  return (
    <div style={{ position: "relative" }}>
      {children}
      <AnimatePresence>
        {pulsing && (
          <motion.div
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{ opacity: 0, scale: 1.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              position: "absolute",
              inset: "-8px",
              borderRadius: "16px",
              border: `2px solid ${color}`,
              pointerEvents: "none",
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export function PriceCalculator() {
  const [trackerQty, setTrackerQty] = useState(1);
  const [chipQty, setChipQty] = useState(1);
  const [trackerPayment, setTrackerPayment] = useState<"parcelado" | "vista">("vista");

  const trackerUnitPrice = trackerPayment === "vista" ? J16_A_VISTA : J16_PARCELADO;
  const chipUnit = useMemo(() => chipUnitPrice(chipQty), [chipQty]);
  const nextTier = useMemo(() => chipsUntilNextTier(chipQty), [chipQty]);

  const trackerTotal = trackerQty * trackerUnitPrice;
  const chipTotal = chipQty * chipUnit;
  const grandTotal = trackerTotal + chipTotal;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px", alignItems: "center" }}>
      <style>{HIDE_NUMBER_SPINNER}</style>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center", textAlign: "center" }}>
        <AnimatedTitle
          as="h2"
          className="text-3xl md:text-[56px]"
          style={{
            fontWeight: 700,
            fontFamily: "var(--font-linear-grotesk)",
            color: colors.white,
            margin: 0,
            lineHeight: "normal",
          }}
        >
          Monte seu pedido
        </AnimatedTitle>
        <p
          style={{
            fontSize: "16px",
            fontFamily: "var(--font-roboto)",
            color: colors.text.bodyLight,
            margin: 0,
            lineHeight: "28px",
          }}
        >
          Escolha a quantidade de rastreadores e chips e veja o valor total na hora.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-5" style={{ width: "100%" }}>
        {/* Calculadora */}
        <FadeIn
          className="p-6 md:p-12 w-full md:flex-1 md:w-auto md:min-w-0"
          style={{
            background: "linear-gradient(160deg, #52a4ff, #2f7fe0)",
            borderRadius: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            boxShadow: "0 16px 40px 0 rgba(47, 127, 224, 0.35)",
          }}
        >
          {/* Rastreador J16 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between" style={{ gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(255,255,255,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <img src="/icons/icon-map-pin-line.svg" alt="" style={{ width: "18px", height: "18px" }} />
                </div>
                <p style={{ fontSize: "18px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.white, margin: 0 }}>
                  Rastreador J16
                </p>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  type="button"
                  onClick={() => setTrackerPayment("vista")}
                  style={{
                    height: "32px",
                    padding: "0 12px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    fontFamily: "var(--font-roboto)",
                    cursor: "pointer",
                    border: `1px solid ${trackerPayment === "vista" ? colors.white : "rgba(255,255,255,0.35)"}`,
                    backgroundColor: trackerPayment === "vista" ? colors.white : "transparent",
                    color: trackerPayment === "vista" ? "#2f7fe0" : colors.white,
                    fontWeight: trackerPayment === "vista" ? 700 : 400,
                    transition: "transform 0.15s ease, background-color 0.2s ease, border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  À vista (R$140)
                </button>
                <button
                  type="button"
                  onClick={() => setTrackerPayment("parcelado")}
                  style={{
                    height: "32px",
                    padding: "0 12px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    fontFamily: "var(--font-roboto)",
                    cursor: "pointer",
                    border: `1px solid ${trackerPayment === "parcelado" ? colors.white : "rgba(255,255,255,0.35)"}`,
                    backgroundColor: trackerPayment === "parcelado" ? colors.white : "transparent",
                    color: trackerPayment === "parcelado" ? "#2f7fe0" : colors.white,
                    fontWeight: trackerPayment === "parcelado" ? 700 : 400,
                    transition: "transform 0.15s ease, background-color 0.2s ease, border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  Parcelado (R$160)
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between" style={{ gap: "12px" }}>
              <QuantityStepper value={trackerQty} onChange={setTrackerQty} min={1} max={10} />
              <PulseOnChange pulseKey={trackerTotal} color={colors.white}>
                <p style={{ fontSize: "20px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.white, margin: 0 }}>
                  <AnimatedPrice value={trackerTotal} />
                </p>
              </PulseOnChange>
            </div>
          </div>

          <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.25)" }} />

          {/* Chip Vivo */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(255,255,255,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <img src="/icons/icon-service-sim-card.svg" alt="" style={{ width: "18px", height: "18px" }} />
              </div>
              <p style={{ fontSize: "18px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.white, margin: 0 }}>
                Chip Vivo 20Mb
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between" style={{ gap: "12px" }}>
              <QuantityStepper value={chipQty} onChange={setChipQty} min={1} max={500} />
              <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: "12px", fontFamily: "var(--font-roboto)", color: "rgba(255,255,255,0.75)", margin: 0 }}>
                  {formatBRL(chipUnit)} / chip
                </p>
                <PulseOnChange pulseKey={chipTotal} color={colors.white}>
                  <p style={{ fontSize: "20px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.white, margin: 0 }}>
                    <AnimatedPrice value={chipTotal} />
                  </p>
                </PulseOnChange>
              </div>
            </div>

            <AnimatePresence>
              {nextTier && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.14)",
                    border: "1px solid rgba(255,255,255,0.4)",
                    borderRadius: "8px",
                    padding: "10px 12px",
                    fontSize: "12px",
                    fontFamily: "var(--font-roboto)",
                    color: colors.white,
                  }}
                >
                  Faltam <strong>{nextTier.unitsLeft}</strong> chip(s) para o próximo preço:{" "}
                  <strong>{formatBRL(nextTier.nextPrice)}</strong> / chip
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.25)" }} />

          {/* Total */}
          <motion.div
            layout
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: colors.white,
              borderRadius: "12px",
              padding: "16px 20px",
            }}
          >
            <p style={{ fontSize: "16px", fontFamily: "var(--font-roboto)", color: colors.text.bodyLight, margin: 0 }}>
              Total estimado
            </p>
            <p style={{ fontSize: "32px", fontWeight: 900, fontFamily: "var(--font-linear-grotesk)", color: "#2f7fe0", margin: 0, lineHeight: 1 }}>
              <AnimatedPrice value={grandTotal} style={{ lineHeight: 1 }} />
            </p>
          </motion.div>

          <a
            href={whatsappHref(
              `Olá! Quero montar um pedido com ${trackerQty} Rastreador(es) J16 (${trackerPayment === "vista" ? "à vista" : "parcelado"}) e ${chipQty} Chip(s) Vivo 20Mb. Total estimado: ${formatBRL(grandTotal)}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "48px",
              backgroundColor: colors.black,
              color: colors.white,
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "var(--font-roboto)",
              textDecoration: "none",
              transition: "transform 0.2s ease, filter 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.filter = "brightness(1.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.filter = "brightness(1)";
            }}
          >
            Fechar pedido com um consultor
          </a>
        </FadeIn>

        {/* Tabela de preços por dispositivo */}
        <FadeIn
          delay={0.08}
          className="p-6 md:p-12 w-full md:flex-1 md:w-auto md:min-w-0"
          style={{
            background: "linear-gradient(160deg, #52a4ff, #2f7fe0)",
            borderRadius: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "36px",
            justifyContent: "center",
            boxShadow: "0 16px 40px 0 rgba(47, 127, 224, 0.35)",
          }}
        >
          <p className="text-[18px] md:text-[24px]" style={{ fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.white, margin: 0 }}>
            Tabela de preços por dispositivo
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p className="text-[12px] md:text-[15px]" style={{ fontWeight: 700, fontFamily: "var(--font-roboto)", color: "rgba(255,255,255,0.85)", margin: 0, textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Rastreador J16
            </p>
            <div className="text-[14px] md:text-[18px]" style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-roboto)", color: "rgba(255,255,255,0.75)" }}>
              <span>À vista</span>
              <span style={{ color: colors.white, fontWeight: 700 }}>{formatBRL(J16_A_VISTA)}</span>
            </div>
            <div className="text-[14px] md:text-[18px]" style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-roboto)", color: "rgba(255,255,255,0.75)" }}>
              <span>Parcelado</span>
              <span style={{ color: colors.white, fontWeight: 700 }}>{formatBRL(J16_PARCELADO)}</span>
            </div>
          </div>

          <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.25)" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p className="text-[12px] md:text-[15px]" style={{ fontWeight: 700, fontFamily: "var(--font-roboto)", color: "rgba(255,255,255,0.85)", margin: 0, textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Chip Vivo 20Mb
            </p>
            {[
              { label: "0 – 10 chips", price: 5.0, min: 0, max: 10 },
              { label: "11 – 50 chips", price: 4.5, min: 11, max: 50 },
              { label: "51 – 100 chips", price: 3.9, min: 51, max: 100 },
              { label: "Acima de 100 chips", price: 3.4, min: 101, max: Infinity },
            ].map((row) => {
              const isActive = chipQty >= row.min && chipQty <= row.max;
              return (
                <motion.div
                  key={row.label}
                  animate={{
                    backgroundColor: isActive ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0)",
                  }}
                  transition={{ duration: 0.25 }}
                  className="text-[14px] md:text-[18px]"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontFamily: "var(--font-roboto)",
                    color: isActive ? colors.white : "rgba(255,255,255,0.75)",
                    borderRadius: "8px",
                    padding: "6px 10px",
                    margin: "0 -10px",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    {isActive && (
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: colors.white, flexShrink: 0 }} />
                    )}
                    {row.label}
                  </span>
                  <span style={{ color: colors.white, fontWeight: 700 }}>{formatBRL(row.price)}</span>
                </motion.div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
