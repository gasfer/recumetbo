import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: '¿Qué tipos de metales aceptan para reciclaje?',
      answer: 'Aceptamos una amplia gama de metales ferrosos (hierro, acero, hierro fundido) y no ferrosos (aluminio, cobre, bronce, latón, plomo, zinc). También procesamos metales preciosos y aleaciones especiales. Nuestro equipo puede evaluar cualquier material metálico que tengas.'
    },
    {
      question: '¿Cómo determinan el precio de los metales?',
      answer: 'Nuestros precios se basan en las cotizaciones internacionales del mercado de metales, actualizadas diariamente. Consideramos factores como pureza, cantidad, tipo de metal y condiciones del mercado. Ofrecemos precios competitivos y transparentes con cotizaciones gratuitas.'
    },
    {
      question: '¿Ofrecen servicio de recolección?',
      answer: 'Sí, contamos con una flota especializada para recolección programada. Ofrecemos este servicio para volúmenes grandes (mínimo 500kg) sin costo adicional en un radio de 50km. Para distancias mayores o volúmenes menores, aplicamos tarifas preferenciales.'
    },
    {
      question: '¿Qué certificaciones ambientales proporcionan?',
      answer: 'Emitimos certificados de reciclaje que detallan el tipo y cantidad de material procesado, así como el impacto ambiental positivo (reducción de CO2, ahorro energético). Cumplimos con ISO 14001 y todas las normativas ambientales locales e internacionales.'
    },
    {
      question: '¿Cuál es el proceso de reciclaje que utilizan?',
      answer: 'Nuestro proceso incluye: 1) Recepción y clasificación inicial, 2) Separación magnética y por densidad, 3) Limpieza y preparación, 4) Fundición o procesamiento según el metal, 5) Control de calidad, 6) Certificación del producto final. Todo con tecnología de vanguardia.'
    },
    {
      question: '¿Manejan residuos industriales peligrosos?',
      answer: 'Sí, tenemos licencias especiales para manejar residuos metálicos con componentes peligrosos. Contamos con protocolos de seguridad estrictos, personal capacitado y instalaciones especializadas. Cumplimos con todas las regulaciones de manejo de materiales peligrosos.'
    },
    {
      question: '¿Qué volumen mínimo requieren para procesar?',
      answer: 'No tenemos volumen mínimo para recepción en nuestras instalaciones. Para servicio de recolección, el mínimo es 500kg. Aceptamos desde pequeñas cantidades de particulares hasta grandes volúmenes industriales, adaptándonos a las necesidades de cada cliente.'
    },
    {
      question: '¿Cuánto tiempo toma el proceso de reciclaje?',
      answer: 'El tiempo varía según el tipo y volumen de material. Generalmente: clasificación (1-2 días), procesamiento (3-7 días), y entrega del producto final (7-14 días). Para proyectos urgentes, ofrecemos procesamiento express con tiempos reducidos.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faqs" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#272724] mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros 
            servicios de reciclaje y procesos industriales
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <motion.button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                  onClick={() => toggleFAQ(index)}
                  whileTap={{ scale: 0.99 }}
                >
                  <h3 className="text-lg font-semibold text-[#272724] pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-[#00B04E]" />
                    ) : (
                      <Plus className="w-6 h-6 text-[#00B04E]" />
                    )}
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">
            ¿No encuentras la respuesta que buscas?
          </p>
          <motion.button 
            className="bg-[#00B04E] hover:bg-[#86B500] text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contáctanos Directamente
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;