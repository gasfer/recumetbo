
// src/components/sections/ServicesGridSection.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    key: "empresas",
    title: "PARA EMPRESAS",
    description: "GESTIÓN DE RESIDUOS INDUSTRIALES",
  },
  {
    key: "electronicos",
    title: "PARA EMPRESAS Y DOMICILIOS",
    description: "GESTIÓN DE RESIDUOS ELECTRÓNICOS Y ELÉCTRICOS",
  },
  {
    key: "acopiadores",
    title: "PARA ACOPIADORES",
    description: "COMPRA DE CHATARRA POR MAYOR Y MENOR",
  },
  {
    key: "exportacion",
    title: "PARA EXPORTACIÓN",
    description: "NUESTROS PRODUCTOS",
  },
];

const ServicesGridSection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="relative bg-gradient-to-r from-[#F6AB00]/20 via-[#FFFFFF] to-[#00B04E]/20 py-16">
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#272724] mb-4">
            Nuestros Servicios y Productos
          </h2>
          <p className="text-xl text-[#272724] max-w-2xl mx-auto">
            Transformamos residuos en oportunidades y soluciones sostenibles.
          </p>
        </motion.div>

        {/* Grid de 4 columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
          {services.map((item) => (
            <motion.div
              key={item.key}
              className="relative group cursor-pointer bg-[#272724] text-white flex flex-col justify-center items-center h-64 overflow-hidden border-[1px] border-[#86B500]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelected(item)}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#272724]/90 via-[#00B04E]/20 to-transparent"
              />
              <div className="relative z-10 text-center px-4">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
                <div className="mt-2 w-16 h-1 bg-[#00B04E] rounded-full mx-auto"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl relative p-6 border-4 border-[#00B04E]"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón cerrar */}
              <motion.button
                onClick={() => setSelected(null)}
                whileHover={{ scale: 1.2 }}
                className="absolute top-4 right-4 text-white bg-[#272724] hover:bg-[#F6AB00] rounded-full p-2 transition duration-300 shadow-lg z-50"
              >
                ✕
              </motion.button>

              {/* Contenido del modal */}
              <h3 className="text-2xl font-bold text-[#272724] mb-4">
                {selected.title}
              </h3>
              <p className="text-[#272724] leading-relaxed text-lg">
                {selected.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesGridSection;
