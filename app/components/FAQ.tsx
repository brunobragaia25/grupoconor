"use client";

import { useState } from "react";
import { colors } from "../styles/design-tokens";
import { AnimatedTitle } from "./motion/AnimatedTitle";
import { FadeIn } from "./motion/FadeIn";


interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "O que tenho que comprar para abrir uma central de rastreamento?",
    answer:
      "Para abrir a central de rastreamento, você vai precisar de plataforma, chip e equipamentos (rastreadores).",
  },
  {
    id: 2,
    question:
      "Qual é o investimento necessário para abrir uma central de rastreamento veicular?",
    answer:
      "Você começa a partir de R$500. Esse valor já cobre o essencial para operar: rastreador, chip Vivo com 20Mb de dados e acesso à plataforma. Conforme sua base de clientes cresce, você escala o volume de equipamentos — de lotes de 1 a 10 unidades até mais de 100.",
  },
  {
    id: 3,
    question: "Tenho que repassar algum lucro para o Grupo Conor?",
    answer:
      "Não. Todo o lucro da sua operação é seu. Você paga apenas pelos produtos e serviços que contratar do Grupo Conor, sem royalties, taxa de franquia ou qualquer percentual sobre o seu faturamento.",
  },
  {
    id: 4,
    question: "Em quanto tempo terei retorno sobre o meu investimento?",
    answer:
      "Com investimento inicial de R$500 e faturamento médio de R$50 por item rastreado, 10 itens instalados já geram cerca de R$500 por mês. Na prática, o retorno acontece logo nos primeiros meses de operação, com lucro médio em torno de R$420 mensais, já descontando o imposto do MEI.",
  },
  {
    id: 5,
    question: "Qual é a margem de lucro de uma central de rastreamento?",
    answer:
      "A margem é alta porque o custo por item rastreado é baixo e previsível: na projeção com 10 itens, o lucro médio fica em torno de R$420 sobre R$500 faturados, já com o imposto MEI descontado. O resultado varia conforme o volume instalado e os serviços agregados, como seguro, assistência 24h e marketing.",
  },
];

function FAQCard({ item, isExpanded, onToggle, delay = 0 }: { item: FAQItem; isExpanded: boolean; onToggle: () => void; delay?: number }) {
  return (
    <FadeIn
      delay={delay}
      style={{
        backgroundColor: colors.background.grayUltraHigh,
        borderRadius: "32px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div
        className="gap-6 md:gap-12 p-6 md:p-12"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="gap-6 md:gap-12"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "26px",
              flex: 1,
              minWidth: 0,
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: "20px",
                fontWeight: 700,
                fontFamily: "var(--font-linear-grotesk)",
                color: colors.white,
                lineHeight: "normal",
                maxWidth: "600px",
              }}
            >
              {item.question}
            </h3>

            <div
              style={{
                maxHeight: isExpanded && item.answer ? "200px" : "0px",
                overflow: "hidden",
                transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                opacity: isExpanded && item.answer ? 1 : 0,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  fontFamily: "var(--font-roboto)",
                  color: colors.text.bodyLight,
                  lineHeight: "18px",
                  maxWidth: "600px",
                }}
              >
                {item.answer}
              </p>
            </div>
          </div>

          <button
            onClick={onToggle}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "40px",
              width: "40px",
              minWidth: "40px",
              backgroundColor: "transparent",
              border: `1px solid #52a4ff`,
              borderRadius: "999px",
              padding: "0",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.filter = "brightness(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.filter = "brightness(1)";
            }}
          >
            <span
              style={{
                position: "relative",
                width: "16px",
                height: "16px",
                display: "inline-block",
                transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: isExpanded && item.answer ? "rotate(45deg)" : "rotate(0deg)",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#52a4ff",
                  transform: "translateY(-50%)",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 0,
                  height: "100%",
                  width: "2px",
                  backgroundColor: "#52a4ff",
                  transform: "translateX(-50%)",
                }}
              />
            </span>
          </button>
        </div>
      </div>
    </FadeIn>
  );
}

export function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <section
      className="px-4 py-10 md:px-12 md:py-12"
      style={{
        backgroundColor: colors.background.dark,
      }}
    >
      <div
        style={{
          maxWidth: "1494px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "48px",
          alignItems: "center",
        }}
      >
        {/* Title */}
        <AnimatedTitle
          as="h2"
          className="text-3xl md:text-[48px]"
          style={{
            margin: 0,
            fontWeight: 700,
            fontFamily: "var(--font-linear-grotesk)",
            lineHeight: "normal",
            color: colors.white,
            textAlign: "center",
          }}
        >
          {["Ainda está com ", { text: "dúvidas?", color: "#52a4ff" }]}
        </AnimatedTitle>

        {/* FAQ Cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: "100%",
          }}
        >
          {faqItems.map((item, idx) => (
            <FAQCard
              key={item.id}
              item={item}
              isExpanded={expandedId === item.id}
              delay={idx * 0.06}
              onToggle={() =>
                setExpandedId(expandedId === item.id ? null : item.id)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
