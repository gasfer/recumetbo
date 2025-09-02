// src/components/DonutSection.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Circle } from "lucide-react";

const MATERIAL_COLORS = [
  "#BDBDBD",
  "#B0BEC5",
  "#90A4AE",
  "#CFD8DC",
  "#ECEFF1",
  "#B0BEC5",
  "#90A4AE",
  "#BDBDBD",
  "#D7CCC8",
  "#FF8A65",
  "#78909C",
  "#546E7A",
  "#607D8B",
];
const COMPANIES_COLORS = [
  "#81C784",
  "#64B5F6",
  "#FFB74D",
  "#BA68C8",
  "#4DB6AC",
  "#A1887F",
  "#AED581",
  "#FFD54F",
  "#7986CB",
];
const EMPLOYEES_COLORS = [
  "#8BC34A",
  "#64B5F6",
  "#FFB74D",
  "#BA68C8",
  "#4DB6AC",
];

const materialData = [
  { label: "Acero Inox", value: 50, tooltipColor: "#BDBDBD" },
  { label: "Aluminio Cable", value: 30, tooltipColor: "#B0BEC5" },
  { label: "Aluminio Duro", value: 20, tooltipColor: "#90A4AE" },
  { label: "Aluminio Radiadores", value: 10, tooltipColor: "#CFD8DC" },
  { label: "Aluminio Perfil", value: 15, tooltipColor: "#ECEFF1" },
  { label: "Aluminio Ollas", value: 15, tooltipColor: "#B0BEC5" },
  { label: "Aluminio Troma", value: 10, tooltipColor: "#90A4AE" },
  { label: "Aluminio UBC", value: 20, tooltipColor: "#BDBDBD" },
  { label: "Bronce Piezas", value: 10, tooltipColor: "#D7CCC8" },
  { label: "Cobre Piezas", value: 20, tooltipColor: "#FF8A65" },
  { label: "Fierro Liviano", value: 50, tooltipColor: "#78909C" },
  { label: "Fierro Pesado", value: 50, tooltipColor: "#546E7A" },
  { label: "RAEE", value: 100, tooltipColor: "#607D8B" },
];
const companiesData = [
  { label: "Santa Cruz", value: 120 },
  { label: "Cochabamba", value: 100 },
  { label: "La Paz", value: 100 },
  { label: "Sucre", value: 50 },
  { label: "Oruro", value: 30 },
  { label: "Potosí", value: 20 },
  { label: "Tarija", value: 20 },
  { label: "Beni", value: 30 },
  { label: "Pando", value: 30 },
];
const employeesData = [
  { label: "Empresas privadas", value: 700 },
  { label: "Empresas públicas", value: 200 },
  { label: "Acopiadores", value: 300 },
  { label: "Talleres", value: 400 },
  { label: "Domiciliarios", value: 400 },
];

const describeArc = (x, y, radius, startAngle, endAngle) => {
  const rad = Math.PI / 180;
  const x1 = x + radius * Math.cos(startAngle * rad);
  const y1 = y + radius * Math.sin(startAngle * rad);
  const x2 = x + radius * Math.cos(endAngle * rad);
  const y2 = y + radius * Math.sin(endAngle * rad);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${x} ${y} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;
};

const DonutChart = ({
  segments,
  totalLabel,
  title,
  colors,
  tooltipColorLogic,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const totalValue = segments.reduce((sum, s) => sum + s.value, 0);

  let startAngle = 0;
  const getTooltipColor = (i) =>
    tooltipColorLogic === "material"
      ? segments[i].tooltipColor || "#333"
      : colors[i % colors.length];

  const centerText =
    hoveredIndex !== null
      ? `${segments[hoveredIndex].value} (${(
          (segments[hoveredIndex].value / totalValue) *
          100
        ).toFixed(1)}%)`
      : totalLabel;

  const handleMouseMove = (e) => {
    setTooltipPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="flex flex-col items-center justify-start w-full max-w-sm mx-auto p-4 
                 bg-white rounded-3xl shadow-xl relative transition hover:shadow-2xl"
    >
      {/* Título arriba centrado */}
      <h3 className="text-xl font-bold text-[#272724] text-center mb-3">
        {title}
      </h3>

      {/* Donut */}
      <div className="relative w-60 h-60 mb-3">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {segments.map((seg, i) => {
            const angle = (seg.value / totalValue) * 360;
            const endAngle = startAngle + angle;
            const path = describeArc(100, 100, 90, startAngle, endAngle);
            startAngle = endAngle;
            return (
              <motion.path
                key={i}
                d={path}
                fill={colors[i % colors.length]}
                stroke="#fff"
                strokeWidth="2"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                onMouseMove={handleMouseMove}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  cursor: "pointer",
                  filter:
                    hoveredIndex === i
                      ? "drop-shadow(0px 0px 6px rgba(0,0,0,0.5))"
                      : "none",
                }}
              />
            );
          })}
          <circle
            cx="100"
            cy="100"
            r="50"
            fill="white"
            stroke="#E5E7EB"
            strokeWidth="2"
          />
          <text
            x="100"
            y="100"
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-bold text-[#00B04E]"
            style={{ fontSize: "15px" }}
          >
            {centerText}
          </text>
        </svg>
      </div>

      {/* Tooltip que sigue al cursor */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            className="fixed text-white text-sm px-3 py-2 rounded-lg shadow-lg z-50 pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.1 }}
            style={{
              backgroundColor: getTooltipColor(hoveredIndex),
              top: tooltipPos.y + 15,
              left: tooltipPos.x + 15,
            }}
          >
            <p className="font-bold">{segments[hoveredIndex].label}</p>
            <p>
              {segments[hoveredIndex].value} (
              {((segments[hoveredIndex].value / totalValue) * 100).toFixed(1)}
              %)
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Leyenda */}
      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 max-w-xs">
        {segments.map((seg, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <Circle
              className="w-3.5 h-3.5"
              style={{
                color: colors[i % colors.length],
                fill: colors[i % colors.length],
              }}
            />
            <span className="text-gray-700 text-sm">{seg.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const DonutSection = () => {
  return (
    <div className="min-h-screen  py-10 flex items-center justify-center bg-gradient-to-r from-[#F6AB00]/60 to-[#00B04E]/90 text-white "> 
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-5">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide mb-4 drop-shadow">
            Nuestro Impacto Sostenible
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto drop-shadow">
“Nuestro trabajo diario impulsa un impacto positivo en empresas privadas y públicas, talleres, negocios, acopiadores, hogares y, sobre todo, en el cuidado del medio ambiente.”</p>
        </div>

        {/* Grid con menor separación */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DonutChart
            segments={materialData}
            totalLabel=" +500 ton"
            title="Material procesado mensualmente"
            colors={MATERIAL_COLORS}
            tooltipColorLogic="material"
          />
          <DonutChart
            segments={companiesData}
            totalLabel="+ 2.000 Empleos"
            title="Empresas por ciudad"
            colors={COMPANIES_COLORS}
            tooltipColorLogic="segment"
          />
          <DonutChart
            segments={employeesData}
            totalLabel="+2000"
            title="Tipos de proveedores"
            colors={EMPLOYEES_COLORS}
            tooltipColorLogic="segment"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default DonutSection;
