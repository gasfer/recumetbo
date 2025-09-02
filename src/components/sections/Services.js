import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, Truck, Factory, Shield, Zap, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Recycle,
      title: 'Reciclaje de Metales Ferrosos',
      description: 'Procesamiento especializado de hierro, acero y otros metales magnéticos con tecnología de separación magnética avanzada.',
      color: 'from-[#00B04E] to-[#86B500]'
    },
    {
      icon: Zap,
      title: 'Metales No Ferrosos',
      description: 'Recuperación eficiente de aluminio, cobre, bronce, latón y otros metales preciosos mediante procesos de separación por densidad.',
      color: 'from-[#F6AB00] to-[#00B04E]'
    },
    {
      icon: Truck,
      title: 'Recolección y Transporte',
      description: 'Servicio de recolección programada con flota especializada y contenedores certificados para diferentes tipos de metales.',
      color: 'from-[#86B500] to-[#F6AB00]'
    },
    {
      icon: Factory,
      title: 'Procesamiento Industrial',
      description: 'Instalaciones de última generación con capacidad para procesar grandes volúmenes manteniendo los más altos estándares de calidad.',
      color: 'from-[#00B04E] to-[#272724]'
    },
    {
      icon: Shield,
      title: 'Certificación Ambiental',
      description: 'Todos nuestros procesos cumplen con normativas ambientales internacionales y proporcionamos certificados de reciclaje.',
      color: 'from-[#272724] to-[#86B500]'
    },
    {
      icon: Globe,
      title: 'Consultoría Sostenible',
      description: 'Asesoramiento especializado para empresas que buscan implementar programas de reciclaje y reducir su huella de carbono.',
      color: 'from-[#F6AB00] to-[#272724]'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#272724] mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales de reciclaje con tecnología de vanguardia 
            y un compromiso inquebrantable con la sostenibilidad ambiental
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-[#272724] mb-4 group-hover:text-[#00B04E] transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <motion.button 
                className="text-[#00B04E] font-semibold hover:text-[#86B500] transition-colors duration-300 flex items-center space-x-2 group-hover:translate-x-2"
                whileHover={{ x: 5 }}
              >
                <span>Saber Más</span>
                <span>→</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;