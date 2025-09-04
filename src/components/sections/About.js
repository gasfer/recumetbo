import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Eye, Recycle, X } from "lucide-react";

import image1 from "../../assets/images/about/history-2002.jpg";
import image2 from "../../assets/images/about/history-2006.jpg";
import image3 from "../../assets/images/about/history-2018.jpg";
import image4 from "../../assets/images/about/history-2021.jpg";

const timeline = [
  {
    year: "2002",
    title: "Nuestros inicios",
    text: "En Noviembre de este año arrancamos como una iniciativa familiar. Comenzamos acopiando y luego separando chatarra de fierro y derivados.",
    img: image1,
  },
  {
    year: "2006",
    title: "Primeras máquinas",
    text: "Fabricamos nuestras primeras compactadoras de chatarra y maquinaria especializada y contratamos más personal capacitado. Con ello, expandimos nuestro alcance a otras ciudades del país.",
    img: image2,
  },
  {
    year: "2018",
    title: "Gestión de RAEE",
    text: "Comenzamos a gestionar residuos eléctricos y electrónicos y nos certificamos como Operadores Autorizados para el reciclaje de residuos especiales.",
    img: image3,
  },
  {
    year: "2021",
    title: "Expansión en Santa Cruz",
    text: "Crecemos y abrimos dos nuevos patios de acopio en la ciudad de Santa Cruz para asegurar la cobertura de nuestros servicios empresariales.",
    img: image4,
  },
];

const AboutUs = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="text-[#000000] relative bg-gradient-to-r from-[#F6AB00]/20 via-[#FFFFFF] to-[#00B04E]/20 py-16">
      {/* Hero */}
      <div className="relative h-[20vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <Recycle className="w-14 h-14 mb-4 text-[#00B04E]" />
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-[#000000]">
            Nuestra Historia
          </h1>
        </motion.div>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl text-[#272724] leading-relaxed"
        >
          Nuestro sueño comenzó hace más de{" "}
          <span className="font-semibold text-[#00B04E]">20 años</span>{" "}
          trabajando con recolectores y acopiadores en Cochabamba. Hoy somos una
          empresa que gestiona residuos en todo el país para devolverlos como{" "}
          <span className="font-bold text-[#F6AB00]">
            materia prima metálica
          </span>
          .
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-12 py-16">
        {/* Tronco central */}
        <motion.div
          className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-[#00B04E] via-[#86B500] to-[#F6AB00] rounded-full z-0"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative flex flex-col gap-20">
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -150 : 150 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex relative w-full 
                  justify-center 
                  md:${isLeft ? "justify-end pr-[52%]" : "justify-start pl-[52%]"}`}
              >
                {/* Nodo */}
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#FFFFFF] border-4 border-[#00B04E] shadow-lg z-20"></div>

                {/* Bloque flotante */}
                <motion.div
                  className="flex flex-row md:flex-row flex-col md:items-center gap-6 bg-white rounded-md shadow-md border border-[#86B500]/50 p-4 w-full md:w-[100%] cursor-pointer hover:shadow-xl transition z-10"
                  whileHover={{ scale: 1.03 }}
                  animate={{ x: [0, 12, -12, 0] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Imagen */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-28 h-20 object-cover rounded-md shadow-md border border-[#F6AB00]/40 mx-auto md:mx-0"
                    onClick={() => setSelectedImage(item.img)}
                  />

                  {/* Texto */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-lg md:text-xl font-bold text-[#00B04E]">
                      {item.year} – {item.title}
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-[#272724] leading-snug">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              key={selectedImage}
              src={selectedImage}
              alt="preview"
              className="max-w-4xl w-[90%] max-h-[90%] rounded-lg shadow-lg"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 bg-[#F6AB00] text-white p-2 rounded-full hover:bg-[#00B04E] transition"
            >
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Misión y Visión */}
      <div className="">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg shadow-lg border border-[#86B500] bg-white hover:shadow-xl transition"
          >
            <Eye className="w-10 h-10 text-[#86B500] mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-[#272724]">Visión</h3>
            <p className="text-[#272724]">
              Transformar los residuos metálicos y no metálicos en materia prima
              de alta calidad a través de procesos eficientes, generando empleos
              y disminuyendo el impacto ambiental.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg shadow-lg border border-[#F6AB00] bg-white hover:shadow-xl transition"
          >
            <Target className="w-10 h-10 text-[#F6AB00] mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-[#272724]">Misión</h3>
            <p className="text-[#272724]">
              Consolidarnos como la empresa líder en la gestión de residuos a
              través de servicios de calidad para abastecer a mercados locales e
              internacionales, revalorizando siempre nuestro compromiso con la
              protección del medioambiente.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
