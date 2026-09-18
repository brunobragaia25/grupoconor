"use client";

import { motion } from "framer-motion";

const imgVennSeguro = "/icon-venn-seguro.svg";
const imgVennAssist = "/icon-venn-assist.svg";
const imgVennAdmin = "/icon-venn-admin.svg";
const imgVenn4em1 = "/icon-venn-4em1.svg";
const imgVennMarketingIcon = "/icon-venn-marketing-icon.svg";
const imgVennMarketingWordmark = "/icon-venn-marketing-wordmark.svg";
const imgVennEstoque = "/icon-venn-estoque.svg";
const imgVennCenter = "/icon-venn-center.svg";

type ComboGroup = "iniciante" | "existente";

/** Diagrama de Venn dos produtos Conor. O grupo passado em `activeGroup` fica
 *  com borda sólida (em destaque); o outro grupo fica tracejado/neutro.
 *  Passe "todos" para destacar os 5 produtos com borda sólida. */
export function ComboVenn({ activeGroup }: { activeGroup: ComboGroup | "todos" }) {
  const activeColor = "#996cfb";
  const inactiveColor = "#d1d1d1";

  const getCircleStyle = (group: ComboGroup): React.CSSProperties => {
    const isActive = activeGroup === "todos" || group === activeGroup;
    return {
      border: isActive ? `2px solid ${activeColor}` : `2px dashed ${inactiveColor}`,
      backgroundColor: isActive ? "#ffffff" : "transparent",
    };
  };

  const circleVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: (delay: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
    }),
  };

  return (
    <div className="overflow-x-auto max-w-full">
    <motion.div
      style={{ position: "relative", width: "560px", height: "480px", flexShrink: 0 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* Seguro + Assist */}
      <motion.div
        custom={0.1}
        variants={circleVariants}
        style={{
          ...getCircleStyle("existente"),
          position: "absolute",
          left: "43px",
          top: "100px",
          width: "210px",
          height: "210px",
          borderRadius: "300px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={imgVennSeguro} alt="" style={{ width: "118px", height: "19.175px" }} />
        <img src={imgVennAssist} alt="" style={{ width: "118px", height: "21.159px" }} />
      </motion.div>

      {/* Admin */}
      <motion.div
        custom={0.2}
        variants={circleVariants}
        style={{
          ...getCircleStyle("iniciante"),
          position: "absolute",
          left: "180px",
          top: "5px",
          width: "200px",
          height: "200px",
          borderRadius: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={imgVennAdmin} alt="" style={{ width: "118px", height: "19.793px" }} />
      </motion.div>

      {/* 4 em 1 */}
      <motion.div
        custom={0.3}
        variants={circleVariants}
        style={{
          ...getCircleStyle("iniciante"),
          position: "absolute",
          left: "307px",
          top: "100px",
          width: "210px",
          height: "210px",
          borderRadius: "105px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={imgVenn4em1} alt="" style={{ width: "118px", height: "20.453px" }} />
      </motion.div>

      {/* Marketing */}
      <motion.div
        custom={0.4}
        variants={circleVariants}
        style={{
          ...getCircleStyle("existente"),
          position: "absolute",
          left: "92px",
          top: "265px",
          width: "210px",
          height: "210px",
          borderRadius: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
        }}
      >
        <img src={imgVennMarketingIcon} alt="" style={{ width: "15.087px", height: "16.147px" }} />
        <img src={imgVennMarketingWordmark} alt="" style={{ width: "98.028px", height: "11.268px" }} />
      </motion.div>

      {/* Estoque */}
      <motion.div
        custom={0.5}
        variants={circleVariants}
        style={{
          ...getCircleStyle("iniciante"),
          position: "absolute",
          left: "257px",
          top: "265px",
          width: "210px",
          height: "210px",
          borderRadius: "105px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={imgVennEstoque} alt="" style={{ width: "118px", height: "18.047px" }} />
      </motion.div>

      {/* Center logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: "absolute", left: "252px", top: "219px", width: "56px", height: "56px" }}
      >
        <img src={imgVennCenter} alt="" style={{ width: "100%", height: "100%" }} />
      </motion.div>
    </motion.div>
    </div>
  );
}
