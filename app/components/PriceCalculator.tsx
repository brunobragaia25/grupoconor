"use client";

import { useMemo, useState } from "react";
import { colors } from "@/app/styles/design-tokens";
import { AnimatedTitle } from "@/app/components/motion/AnimatedTitle";
import { FadeIn } from "@/app/components/motion/FadeIn";
import { whatsappHref } from "@/app/lib/whatsapp";

const J16_PARCELADO = 160;
const J16_A_VISTA = 140;

function chipUnitPrice(quantity: number): number {
  if (quantity <= 10) return 5.0;
  if (quantity <= 50) return 4.5;
  if (quantity <= 100) return 3.9;
  return 3.4;
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
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "8px",
          border: "1px solid #3a3a3a",
          backgroundColor: "transparent",
          color: colors.white,
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        −
      </button>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => {
          const next = parseInt(e.target.value, 10);
          onChange(Number.isNaN(next) ? min : Math.min(max, Math.max(min, next)));
        }}
        style={{
          width: "64px",
          height: "36px",
          textAlign: "center",
          borderRadius: "8px",
          border: "1px solid #3a3a3a",
          backgroundColor: "#111111",
          color: colors.white,
          fontFamily: "var(--font-roboto)",
          fontSize: "16px",
        }}
      />
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "8px",
          border: "1px solid #3a3a3a",
          backgroundColor: "transparent",
          color: colors.white,
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        +
      </button>
    </div>
  );
}

export function PriceCalculator() {
  const [trackerQty, setTrackerQty] = useState(1);
  const [chipQty, setChipQty] = useState(1);
  const [trackerPayment, setTrackerPayment] = useState<"parcelado" | "vista">("vista");

  const trackerUnitPrice = trackerPayment === "vista" ? J16_A_VISTA : J16_PARCELADO;
  const chipUnit = useMemo(() => chipUnitPrice(chipQty), [chipQty]);

  const trackerTotal = trackerQty * trackerUnitPrice;
  const chipTotal = chipQty * chipUnit;
  const grandTotal = trackerTotal + chipTotal;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px", alignItems: "center" }}>
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
            backgroundColor: "#111111",
            border: "1px solid #2a2a2a",
            borderRadius: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          {/* Rastreador J16 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between" style={{ gap: "12px" }}>
              <p style={{ fontSize: "18px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.white, margin: 0 }}>
                Rastreador J16
              </p>
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
                    border: `1px solid ${trackerPayment === "vista" ? "#52a4ff" : "#3a3a3a"}`,
                    backgroundColor: trackerPayment === "vista" ? "#52a4ff" : "transparent",
                    color: colors.white,
                  }}
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
                    border: `1px solid ${trackerPayment === "parcelado" ? "#52a4ff" : "#3a3a3a"}`,
                    backgroundColor: trackerPayment === "parcelado" ? "#52a4ff" : "transparent",
                    color: colors.white,
                  }}
                >
                  Parcelado (R$160)
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between" style={{ gap: "12px" }}>
              <QuantityStepper value={trackerQty} onChange={setTrackerQty} min={1} max={10} />
              <p style={{ fontSize: "20px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: "#52a4ff", margin: 0 }}>
                {formatBRL(trackerTotal)}
              </p>
            </div>
          </div>

          <div style={{ height: "1px", backgroundColor: "#2a2a2a" }} />

          {/* Chip Vivo */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "18px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.white, margin: 0 }}>
              Chip Vivo 20Mb
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between" style={{ gap: "12px" }}>
              <QuantityStepper value={chipQty} onChange={setChipQty} min={1} max={500} />
              <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: "12px", fontFamily: "var(--font-roboto)", color: colors.text.bodyLight, margin: 0 }}>
                  {formatBRL(chipUnit)} / chip
                </p>
                <p style={{ fontSize: "20px", fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: "#52a4ff", margin: 0 }}>
                  {formatBRL(chipTotal)}
                </p>
              </div>
            </div>
          </div>

          <div style={{ height: "1px", backgroundColor: "#2a2a2a" }} />

          {/* Total */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <p style={{ fontSize: "16px", fontFamily: "var(--font-roboto)", color: colors.text.bodyLight, margin: 0 }}>
              Total estimado
            </p>
            <p style={{ fontSize: "32px", fontWeight: 900, fontFamily: "var(--font-linear-grotesk)", color: colors.white, margin: 0 }}>
              {formatBRL(grandTotal)}
            </p>
          </div>

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
              backgroundColor: colors.white,
              color: colors.black,
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
              e.currentTarget.style.filter = "brightness(0.92)";
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
            backgroundColor: "#111111",
            border: "1px solid #2a2a2a",
            borderRadius: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "36px",
            justifyContent: "center",
          }}
        >
          <p className="text-[18px] md:text-[24px]" style={{ fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", color: colors.white, margin: 0 }}>
            Tabela de preços por dispositivo
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p className="text-[12px] md:text-[15px]" style={{ fontWeight: 700, fontFamily: "var(--font-roboto)", color: "#52a4ff", margin: 0, textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Rastreador J16
            </p>
            <div className="text-[14px] md:text-[18px]" style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-roboto)", color: colors.text.bodyLight }}>
              <span>À vista</span>
              <span style={{ color: colors.white, fontWeight: 700 }}>{formatBRL(J16_A_VISTA)}</span>
            </div>
            <div className="text-[14px] md:text-[18px]" style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-roboto)", color: colors.text.bodyLight }}>
              <span>Parcelado</span>
              <span style={{ color: colors.white, fontWeight: 700 }}>{formatBRL(J16_PARCELADO)}</span>
            </div>
          </div>

          <div style={{ height: "1px", backgroundColor: "#2a2a2a" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p className="text-[12px] md:text-[15px]" style={{ fontWeight: 700, fontFamily: "var(--font-roboto)", color: "#52a4ff", margin: 0, textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Chip Vivo 20Mb
            </p>
            {[
              { label: "0 – 10 chips", price: 5.0 },
              { label: "11 – 50 chips", price: 4.5 },
              { label: "51 – 100 chips", price: 3.9 },
              { label: "Acima de 100 chips", price: 3.4 },
            ].map((row) => (
              <div key={row.label} className="text-[14px] md:text-[18px]" style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-roboto)", color: colors.text.bodyLight }}>
                <span>{row.label}</span>
                <span style={{ color: colors.white, fontWeight: 700 }}>{formatBRL(row.price)}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
