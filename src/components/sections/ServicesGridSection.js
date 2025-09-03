import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaBuilding, 
  FaLaptop, 
  FaIndustry, 
  FaGlobe, 
  FaChevronLeft, 
  FaChevronRight, 
  FaTimes,
  FaRocket,
  FaRecycle,
  FaCheckCircle,
  FaFileAlt,
  FaShieldAlt,
  FaSeedling,
  FaHome,
  FaTrophy,
  FaMobileAlt,
  FaDollarSign,
  FaTruck,
  FaBalanceScale,
  FaCog,
  FaHandshake
} from "react-icons/fa";

const services = [
  {
    key: "empresas",
    title: "Empresas Privadas, Públicas y ONGs",
    description: "Soluciones integrales para la gestión de residuos industriales con responsabilidad ambiental.",
    icon: <FaBuilding size={40} className="text-[#00B04E]" />,
    slides: [
      {
        id: 1,
        title: "Gestión Integral de Residuos",
        icon: <FaCheckCircle size={24} className="text-[#00B04E]" />,
        content: [
          "Gestión completa de residuos industriales",
          "Procesos certificados y seguros",
          "Manejo especializado por tipo de material"
        ]
      },
      {
        id: 2,
        title: "Reportes Personalizados",
        icon: <FaFileAlt size={24} className="text-[#00B04E]" />,
        content: [
          "Reportes ambientales detallados",
          "Documentación para auditorías",
          "Seguimiento de indicadores ambientales"
        ]
      },
      {
        id: 3,
        title: "Cumplimiento Normativo",
        icon: <FaShieldAlt size={24} className="text-[#00B04E]" />,
        content: [
          "Cumplimiento con normativas nacionales",
          "Certificaciones ambientales",
          "Asesoría legal especializada"
        ]
      },
      {
        id: 4,
        title: "Sostenibilidad Ambiental",
        icon: <FaSeedling size={24} className="text-[#00B04E]" />,
        content: [
          "Reducción de huella de carbono",
          "Economía circular implementada",
          "Impacto ambiental positivo medible"
        ]
      }
    ],
    finalMessage: "✨ Transformamos sus residuos en oportunidades ambientales",
    ctaText: "📩 Contáctenos para soluciones corporativas"
  },
  {
    key: "electronicos",
    title: "Pymes, Talleres y Hogares",
    description: "Recolección y gestión de residuos electrónicos y eléctricos, cuidando el medio ambiente.",
    icon: <FaLaptop size={40} className="text-[#F6AB00]" />,
    slides: [
      {
        id: 1,
        title: "Recolección Directa",
        icon: <FaHome size={24} className="text-[#F6AB00]" />,
        content: [
          "Recolección directa en domicilio o taller",
          "Servicio programado y puntual",
          "Sin costo mínimo de recolección"
        ]
      },
      {
        id: 2,
        title: "Seguridad de Datos",
        icon: <FaShieldAlt size={24} className="text-[#F6AB00]" />,
        content: [
          "Eliminación segura de datos personales",
          "Formateo profesional de dispositivos",
          "Certificado de destrucción de información"
        ]
      },
      {
        id: 3,
        title: "Certificación Responsable",
        icon: <FaTrophy size={24} className="text-[#F6AB00]" />,
        content: [
          "Certificado de disposición responsable",
          "Trazabilidad completa del proceso",
          "Cumplimiento de normas ambientales"
        ]
      },
      {
        id: 4,
        title: "Equipos Aceptados",
        icon: <FaMobileAlt size={24} className="text-[#F6AB00]" />,
        content: [
          "Laptops, computadoras y servidores",
          "Celulares y tablets",
          "Electrodomésticos grandes y pequeños"
        ]
      }
    ],
    finalMessage: "💫 Reciclaje responsable de tecnología para un futuro sostenible",
    ctaText: "📩 Solicite recolección ahora"
  },
  {
    key: "acopiadores",
    title: "Acopiadores Mayoristas y Minoristas",
    description: "Compra de chatarra por mayor y menor, con precios competitivos y logística confiable.",
    icon: <FaIndustry size={40} className="text-[#00B04E]" />,
    slides: [
      {
        id: 1,
        title: "Precios Competitivos",
        icon: <FaDollarSign size={24} className="text-[#00B04E]" />,
        content: [
          "Precios competitivos por volumen",
          "Cotizaciones actualizadas diariamente",
          "Bonificaciones por volumen constante"
        ]
      },
      {
        id: 2,
        title: "Compra Inmediata",
        icon: <FaCheckCircle size={24} className="text-[#00B04E]" />,
        content: [
          "Compra inmediata sin esperas",
          "Pagos seguros y puntuales",
          "Transferencias bancarias o efectivo"
        ]
      },
      {
        id: 3,
        title: "Logística Integral",
        icon: <FaTruck size={24} className="text-[#00B04E]" />,
        content: [
          "Recolección desde almacenes o depósitos",
          "Flota propia de transporte",
          "Servicio de carga y descarga incluido"
        ]
      },
      {
        id: 4,
        title: "Proceso Transparente",
        icon: <FaBalanceScale size={24} className="text-[#00B04E]" />,
        content: [
          "Clasificación y pesaje transparente",
          "Básculas certificadas y precisas",
          "Recibos detallados por categoría"
        ]
      }
    ],
    finalMessage: "🌟 Su mejor socio comercial para la venta de materiales reciclables",
    ctaText: "📩 Coordine la venta de su material"
  },
  {
    key: "exportacion",
    title: "Exportación y Comercio Internacional",
    description: "Clasificación y comercialización de metales bajo normas internacionales (ReMA / ISRI).",
    icon: <FaGlobe size={40} className="text-[#272724]" />,
    slides: [
      {
        id: 1,
        title: "Volúmenes Consistentes",
        icon: <FaCheckCircle size={24} className="text-[#272724]" />,
        content: [
          "300 TM mensuales de chatarra ferrosa",
          "80 TM mensuales de no ferrosos (UBC, aluminio, cobre, bronce, inox)",
          "Capacidad de crecimiento según condiciones"
        ]
      },
      {
        id: 2,
        title: "Calidad Estandarizada",
        icon: <FaCog size={24} className="text-[#272724]" />,
        content: [
          "Material bajo ReMA's ISRI Specifications",
          "Entregas limpias, listas para uso industrial",
          "Certificaciones internacionales de calidad"
        ]
      },
      {
        id: 3,
        title: "Relación Precio-Volumen",
        icon: <FaDollarSign size={24} className="text-[#272724]" />,
        content: [
          "Precios según mercado internacional",
          "Mayor volumen con mejores condiciones",
          "Garantía de suministro estable"
        ]
      },
      {
        id: 4,
        title: "Logística Internacional",
        icon: <FaTruck size={24} className="text-[#272724]" />,
        content: [
          "Puertos de Arica, Iquique y Antofagasta",
          "Documentación y aduanas ágiles",
          "Despachos puntuales y seguros"
        ]
      },
      {
        id: 5,
        title: "Confianza y Trayectoria",
        icon: <FaHandshake size={24} className="text-[#272724]" />,
        content: [
          "+20 años de experiencia comprobada",
          "Comunicación directa y transparente",
          "Relaciones comerciales duraderas"
        ]
      }
    ],
    finalMessage: "🚀 Recumet Bolivia SRL asegura volumen, calidad y continuidad",
    ctaText: "📩 Coordine su próximo embarque"
  },
];

const ServicesGridSection = () => {
  const [selected, setSelected] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Estado para la animación de carga

  useEffect(() => {
    // Simular una carga de datos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simula 1 segundo de carga

    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => {
    if (selected) {
      setCurrentSlide((prev) => (prev + 1) % selected.slides.length);
    }
  };

  const prevSlide = () => {
    if (selected) {
      setCurrentSlide((prev) => (prev - 1 + selected.slides.length) % selected.slides.length);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleModalOpen = (service) => {
    setSelected(service);
    setCurrentSlide(0);
  };

  // Get primary color
  const getPrimaryColor = (serviceKey) => {
    switch (serviceKey) {
      case "empresas": return "#00B04E";
      case "electronicos": return "#F6AB00";
      case "acopiadores": return "#00B04E";
      case "exportacion": return "#272724";
      default: return "#00B04E";
    }
  };

  return (
      <section className="relative bg-white py-12 sm:py-16 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00B04E]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#F6AB00]/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <FaRecycle size={60} className="text-[#00B04E] mx-auto mb-5 drop-shadow-lg" />
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#272724] mb-3 sm:mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Nuestros Servicios de Reciclaje y Gestión de Metales
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-[#272724]/80 max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Conectamos sostenibilidad con eficiencia en cada etapa: residuos
            industriales, electrónicos, compra local y comercio internacional.
          </motion.p>
        </motion.div>

        {/* Grid con animación de carga */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center h-64"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-t-4 border-[#00B04E] border-t-transparent rounded-full"
              ></motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            >
              {services.map((item, index) => (
                <motion.div
                  key={item.key}
                  className="relative group bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 sm:p-8 border border-gray-100 flex flex-col items-center text-center transition-all duration-300 ease-in-out"
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1, type: "spring", bounce: 0.3 }}
                  whileHover={{ y: -5, scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4 sm:mb-6">{item.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#272724] mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-[#272724]/70 text-sm sm:text-base line-clamp-3 mb-4 sm:mb-6">{item.description}</p>
                  <motion.button
                    onClick={() => handleModalOpen(item)}
                    className="relative overflow-hidden bg-[#00B04E] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-bold text-sm sm:text-base shadow-md hover:bg-[#86B500] transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver beneficios
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md md:max-w-xl lg:max-w-3xl relative flex flex-col max-h-[90vh] overflow-hidden border border-gray-200" // Ajustes para responsive
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              style={{ borderTop: `8px solid ${getPrimaryColor(selected.key)}` }}
            >
              {/* Header */}
              <div className={`text-white p-6 sm:p-8 relative flex-shrink-0`} style={{ backgroundColor: getPrimaryColor(selected.key) }}>
                <motion.button
                  onClick={() => setSelected(null)}
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 sm:p-3 transition-all duration-200"
                >
                  <FaTimes size={18} className="text-white" />
                </motion.button>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                  {selected.icon}
                  <div className="text-center sm:text-left">
                    <h2 className="text-2xl sm:text-3xl font-black mb-1">{selected.title}</h2>
                    <p className="text-white/90 text-sm sm:text-base font-medium">{selected.description}</p>
                  </div>
                </div>

                {/* Paginador superior */}
                <div className="flex justify-center gap-2 mt-4">
                  {selected.slides.map((_, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? "w-6 bg-white" : "w-2 bg-white/50"}`}
                      whileHover={{ scale: 1.2 }}
                      animate={{ opacity: currentSlide === idx ? 1 : 0.6 }}
                    />
                  ))}
                </div>
              </div>

              {/* Contenido */}
              <div className="relative p-6 sm:p-8 flex-grow overflow-y-auto"> {/* Scroll interno */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#272724] mb-4 flex items-center justify-center gap-2">
                        {selected.slides[currentSlide].icon}
                        {selected.slides[currentSlide].title}
                      </h3>
                    </div>
                    <ul className="space-y-3 max-w-md mx-auto">
                      {selected.slides[currentSlide].content.map((point, i) => (
                        <motion.li
                          key={i}
                          className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-100 text-left text-sm sm:text-base"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <span className="text-[#00B04E]"><FaCheckCircle size={16} /></span>
                          <span className="text-[#272724]/90">{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>

                {/* Botones de navegación */}
                <motion.button
                  onClick={prevSlide}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-[#00B04E] hover:bg-[#86B500] text-white rounded-full p-2 sm:p-3 shadow-md transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaChevronLeft size={20} className="text-white" />
                </motion.button>
                <motion.button
                  onClick={nextSlide}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-[#F6AB00] hover:bg-[#FFA500] text-white rounded-full p-2 sm:p-3 shadow-md transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaChevronRight size={20} className="text-white" />
                </motion.button>
              </div>

              {/* Footer */}
              <div className="bg-gray-100 border-t border-gray-200 px-6 py-4 sm:px-8 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-4 flex-shrink-0">
                <p className="text-sm sm:text-base font-medium text-[#272724] text-center sm:text-left">{selected.finalMessage}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-[#00B04E] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-bold text-sm sm:text-base shadow-md hover:bg-[#86B500] transition-all duration-300"
                >
                  <FaRocket size={16} className="text-white" />
                  {selected.ctaText}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesGridSection;