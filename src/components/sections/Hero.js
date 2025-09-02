import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";

// Cargar dinámicamente las imágenes
import image1 from "../../assets/images/slider/image1.jpg";
import image2 from "../../assets/images/slider/image2.jpg";
import image3 from "../../assets/images/slider/image3.jpg";
import image4 from "../../assets/images/slider/image4.jpg";
import image5 from "../../assets/images/slider/image5.jpg";
import image7 from "../../assets/images/slider/image7.jpg";
import image8 from "../../assets/images/slider/image8.jpg";
import image9 from "../../assets/images/slider/image9.jpg";


const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image7,
  image8,
  image9,
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Cambiar imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const handleSelect = (index) => {
    setCurrent(index);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
  {/* Slider de imágenes */}
  <AnimatePresence>
    {images.map((img, index) =>
      index === current ? (
        <motion.div
          key={index}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={img}
            alt={`slider ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F6AB00]/30 to-[#00904E]/60"></div>
        </motion.div>
      ) : null
    )}
  </AnimatePresence>

  {/* Flechas navegación */}
  <div className="absolute inset-0 flex justify-between items-center px-2 md:px-4 z-20">
    <button
      onClick={handlePrev}
      className="p-2 md:p-3 bg-black/50 rounded-full hover:bg-[#00B04E]/70 transition-colors"
    >
      <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
    </button>
    <button
      onClick={handleNext}
      className="p-2 md:p-3 bg-black/50 rounded-full hover:bg-[#00B04E]/70 transition-colors"
    >
      <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
    </button>
  </div>

  {/* Indicadores */}
  <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
    {images.map((_, index) => (
      <button
        key={index}
        onClick={() => handleSelect(index)}
        className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all ${
          index === current ? "bg-[#F6AB00]" : "bg-white/50"
        }`}
      ></button>
    ))}
  </div>

  {/* Contenido central */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center text-white min-h-screen px-4 max-w-4xl mx-auto">
    <motion.h1
      className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Recuperadora de Metales Bolivia S.R.L.
    </motion.h1>

    <motion.p
      className="text-lg sm:text-xl md:text-2xl mb-8 font-light"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      Reciclaje inteligente de metales ferrosos y no ferrosos
    </motion.p>

    <motion.div
      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <motion.button
        className="bg-[#00B04E] hover:bg-[#86B500] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-colors duration-300 flex items-center space-x-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Conoce Nuestros Servicios</span>
        <Play className="w-4 h-4 md:w-5 md:h-5" />
      </motion.button>

      <motion.button
        className="border-2 border-white text-white hover:bg-white hover:text-[#F6AB00] px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Contactar Ahora
      </motion.button>
    </motion.div>
  </div>

  {/* Flecha scroll */}
  <motion.div
    className="absolute bottom-14 md:bottom-20 left-1/2 transform -translate-x-1/2 text-white z-20"
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 2, repeat: Infinity }}
  >
    <ArrowDown className="w-5 h-5 md:w-6 md:h-6" />
  </motion.div>
</section>

  );
};

export default Hero;
