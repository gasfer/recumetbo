import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: 'El Futuro del Reciclaje de Metales: Tecnologías Emergentes',
      excerpt: 'Descubre las últimas innovaciones en separación magnética y procesamiento automatizado que están revolucionando la industria del reciclaje.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
      author: 'Dr. María González',
      date: '15 Enero 2025',
      readTime: '5 min',
      category: 'Tecnología'
    },
    {
      id: 2,
      title: 'Impacto Ambiental: Cómo el Reciclaje Reduce la Huella de Carbono',
      excerpt: 'Análisis detallado de cómo cada tonelada de metal reciclado contribuye significativamente a la reducción de emisiones de CO2.',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400',
      author: 'Ing. Carlos Ruiz',
      date: '12 Enero 2025',
      readTime: '7 min',
      category: 'Sostenibilidad'
    },
    {
      id: 3,
      title: 'Guía Completa: Separación de Metales Ferrosos vs No Ferrosos',
      excerpt: 'Todo lo que necesitas saber sobre las diferencias, procesos de separación y aplicaciones industriales de cada tipo de metal.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400',
      author: 'Técnico Juan Pérez',
      date: '10 Enero 2025',
      readTime: '4 min',
      category: 'Educación'
    },
    {
      id: 4,
      title: 'Casos de Éxito: Empresas que Transformaron sus Residuos en Recursos',
      excerpt: 'Historias inspiradoras de compañías que implementaron programas de reciclaje exitosos y los beneficios económicos obtenidos.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
      author: 'Ana Martínez',
      date: '8 Enero 2025',
      readTime: '6 min',
      category: 'Casos de Éxito'
    },
    {
      id: 5,
      title: 'Normativas Ambientales 2025: Lo que Debes Saber',
      excerpt: 'Resumen de las nuevas regulaciones ambientales y cómo afectan a las empresas que manejan residuos metálicos.',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400',
      author: 'Lic. Roberto Silva',
      date: '5 Enero 2025',
      readTime: '8 min',
      category: 'Regulaciones'
    },
    {
      id: 6,
      title: 'Innovación en Logística: Optimizando la Recolección de Metales',
      excerpt: 'Cómo la tecnología IoT y la inteligencia artificial están mejorando la eficiencia en la recolección y transporte de materiales.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400',
      author: 'Ing. Laura Torres',
      date: '3 Enero 2025',
      readTime: '5 min',
      category: 'Logística'
    }
  ];

  const categories = ['Todos', 'Tecnología', 'Sostenibilidad', 'Educación', 'Casos de Éxito', 'Regulaciones', 'Logística'];

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#272724] mb-4">
            Blog RECUMET
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantente actualizado con las últimas tendencias, tecnologías y noticias 
            del mundo del reciclaje de metales y la sostenibilidad industrial
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className="px-6 py-2 rounded-full border-2 border-[#00B04E] text-[#00B04E] hover:bg-[#00B04E] hover:text-white transition-all duration-300 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#00B04E] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#272724] mb-3 group-hover:text-[#00B04E] transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <motion.button 
                  className="text-[#00B04E] font-semibold hover:text-[#86B500] transition-colors duration-300 flex items-center space-x-2 group-hover:translate-x-2"
                  whileHover={{ x: 5 }}
                >
                  <span>Leer Más</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="bg-[#00B04E] hover:bg-[#86B500] text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Cargar Más Artículos
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;