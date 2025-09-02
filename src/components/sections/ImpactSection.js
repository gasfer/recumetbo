// src/components/sections/ImpactSection.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaIndustry, FaBuilding, FaUsers } from "react-icons/fa";
import managerPhoto from "../../assets/images/gerente.jpg"; // reemplaza con la foto real

const statistics = [
  {
    key: "material",
    value: +500,
    unit: "ton",
    label: "Material procesado mensualmente",
    icon: <FaIndustry size={32} className="text-[#00B04E]" />,
  },
  {
    key: "empresas",
    value: +500,
    unit: "",
    label: "Empresas atendidas",
    icon: <FaBuilding size={32} className="text-[#00B04E]" />,
  },
  {
    key: "empleos",
    value: +2000,
    unit: "",
    label: "Empleos directos e indirectos generados",
    icon: <FaUsers size={32} className="text-[#00B04E]" />,
  },
];

const ImpactSection = () => {
  // Estado para animar contadores
  const [counters, setCounters] = useState(statistics.map(() => 0));

  useEffect(() => {
    statistics.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 1500; // 1.5s
      const increment = end / (duration / 30); // 30ms interval
      const counterInterval = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counterInterval);
        }
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(start);
          return newCounters;
        });
      }, 30);
    });
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-[#F6AB00]/20 via-[#FFFFFF] to-[#00B04E]/20 py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Columna 1: Gerente */}
  <motion.div
    className="flex flex-col items-center text-center bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {/* Foto con animación hover */}
    <motion.div
      className="w-64 h-64 rounded-full overflow-hidden shadow-xl border-4 border-[#00B04E] mb-6"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <img
        src={managerPhoto}
        alt="Daniel Mercado F."
        className="w-full h-full object-cover"
      />
    </motion.div>

    {/* Nombre y cargo */}
    <h3 className="text-3xl font-bold text-[#272724] mb-1">
      Daniel Mercado F.
    </h3>
    <p className="text-xl text-[#86B500] font-semibold mb-6">
      Gerente General
    </p>

    {/* Mensaje */}
    <motion.blockquote
      className="relative text-[#272724] text-lg italic leading-relaxed max-w-xl text-justify px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <span className="absolute -left-10 -top-10 text-[#F6AB00] text-8xl font-serif drop-shadow-md opacity-40 select-none">
        “
      </span>
      En Recumet, cada día trabajamos con compromiso y pasión para generar un
      impacto positivo a través del reciclaje. Nuestro esfuerzo no solo
      beneficia a nuestros clientes y colaboradores, sino también a la
      comunidad, que es parte esencial de nuestra industria y de este camino
      hacia un futuro más sostenible.
      <span className="absolute -right-10 -bottom-10 text-[#F6AB00] text-8xl font-serif drop-shadow-md opacity-40 select-none">
        ”
      </span>
    </motion.blockquote>
  </motion.div>




        {/* Columna 2: Estadísticas */}
        <motion.div
          className="grid grid-cols-1 gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.key}
              className="flex items-center gap-4 bg-white rounded-2xl shadow-2xl p-6 border-l-4 border-[#00B04E] hover:shadow-3xl transition-shadow duration-500"
              whileHover={{ scale: 1.05 }}
            >
              <div>{stat.icon}</div>
              <div>
                <p className="text-4xl font-bold text-[#272724] mb-1">
                  {counters[index].toLocaleString()}{" "}
                  <span className="text-[#86B500]">{stat.unit}</span>
                </p>
                <p className="text-[#272724] text-lg">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
