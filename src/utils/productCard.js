import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Download } from 'lucide-react';

const productCard = ({ product, index }) => {
  const categoryColors = {
    'Ferroso': { bg: 'bg-[#F6AB00]', text: 'text-white' },
    'No Ferroso': { bg: 'bg-[#00B04E]', text: 'text-white' },
  };

  const colors = categoryColors[product.category] || { bg: 'bg-gray-200', text: 'text-gray-800' };

  const handleDownload = () => {
    alert(`Descargando información de ${product.title}... ¡Imagina que ya lo tienes!`);
    // Aquí iría la lógica real para descargar el catálogo o la ficha técnica del producto
  };

  const handleViewDetails = () => {
    alert(`Mostrando detalles de ${product.title}: ${product.details || 'No hay detalles adicionales por ahora.'}`);
    // Aquí iría la lógica para abrir un modal o navegar a una página de detalles
  };

  return (
    <motion.div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.5 }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#272724]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-4">
            <motion.button 
              onClick={handleViewDetails}
              className="bg-white/90 text-[#272724] p-3 rounded-full hover:bg-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Ver detalles de ${product.title}`}
            >
              <Eye className="w-5 h-5" />
            </motion.button>
            <motion.button 
              onClick={handleDownload}
              className="bg-[#00B04E] text-white p-3 rounded-full hover:bg-[#86B500] transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Descargar información de ${product.title}`}
            >
              <Download className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Category Badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${colors.bg} ${colors.text}`}>
          {product.category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-[#272724] mb-2 group-hover:text-[#00B04E] transition-colors duration-300">
          {product.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {product.description}
        </p>
      </div>
    </motion.div>
  );
};

export default productCard;