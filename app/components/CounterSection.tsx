"use client";

import { useEffect, useRef, useState } from "react";
import { colors } from "../styles/design-tokens";
import { FadeIn } from "./motion/FadeIn";

export function CounterSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStarted]);

  // Counter 1: 350 clients
  useEffect(() => {
    if (!hasStarted) return;

    let count = 0;
    const target = 350;
    const increment = target / 50; // 50 steps

    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        setCounter1(target);
        clearInterval(interval);
      } else {
        setCounter1(Math.floor(count));
      }
    }, 30);

    return () => clearInterval(interval);
  }, [hasStarted]);

  // Counter 2: 80 mil
  useEffect(() => {
    if (!hasStarted) return;

    let count = 0;
    const target = 80000;
    const increment = target / 50; // 50 steps

    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        setCounter2(target);
        clearInterval(interval);
      } else {
        setCounter2(Math.floor(count));
      }
    }, 30);

    return () => clearInterval(interval);
  }, [hasStarted]);

  return (
    <section
      ref={sectionRef}
      className="px-4 py-10 md:px-12 md:py-12"
      style={{
        backgroundColor: colors.background.dark,
      }}
    >
      <div
        className="flex-col md:flex-row"
        style={{
          maxWidth: "1494px",
          margin: "0 auto",
          display: "flex",
          gap: "20px",
          alignItems: "stretch",
        }}
      >
        {/* Counter 1 */}
        <FadeIn
          className="h-[220px] md:h-[320px] px-4 w-full md:flex-1 md:w-auto md:min-w-0"
          style={{
            backgroundColor: "#52a4ff",
            borderRadius: "32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <p className="text-4xl md:text-[72px]" style={{ margin: 0, fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", lineHeight: "normal", color: colors.white }}>
            +{counter1}
          </p>
          <p className="text-xl md:text-[40px]" style={{ margin: 0, fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", lineHeight: "normal", color: colors.white }}>
            clientes em todo Brasil
          </p>
        </FadeIn>

        {/* Counter 2 */}
        <FadeIn
          delay={0.1}
          className="h-[220px] md:h-[320px] w-full md:flex-1 md:w-auto md:min-w-0"
          style={{
            backgroundColor: "#52a4ff",
            borderRadius: "32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <p className="text-4xl md:text-[72px]" style={{ margin: 0, fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", lineHeight: "normal", color: colors.white }}>
            +{counter2.toLocaleString("pt-BR")}
          </p>
          <p className="text-xl md:text-[40px]" style={{ margin: 0, fontWeight: 700, fontFamily: "var(--font-linear-grotesk)", lineHeight: "normal", color: colors.white }}>
            veículos rastreados
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
