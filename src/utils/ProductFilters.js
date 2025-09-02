import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';

const ProductFilters = ({ 
  searchTerm, 
  onSearchChange, 
  selectedCategory, 
  onCategoryChange, 
  selectedMaterial, 
  onMaterialChange,
  categories,
  materialTypes
}) => {
  return (
    <motion.div 
      className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-6 mb-12 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="flex flex-col md:flex-row md:items-end gap-6">
        {/* Search Input */}
        <div className="flex-1 relative">
          <label htmlFor="search-product" className="sr-only">Buscar producto por nombre</label>
          <input
            id="search-product"
            type="text"
            placeholder="Buscar por nombre..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-50/80 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500 font-medium"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        {/* Category Filter */}
        <div className="relative w-full md:w-auto">
          <label htmlFor="filter-category" className="sr-only">Filtrar por categoría</label>
          <select
            id="filter-category"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="appearance-none w-full pl-12 pr-4 py-3 bg-gray-50/80 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300 text-gray-900 font-medium cursor-pointer"
          >
            <option value="">Todas las Categorías</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        {/* Material Type Filter */}
        <div className="relative w-full md:w-auto">
          <label htmlFor="filter-material" className="sr-only">Filtrar por tipo de material</label>
          <select
            id="filter-material"
            value={selectedMaterial}
            onChange={(e) => onMaterialChange(e.target.value)}
            className="appearance-none w-full pl-12 pr-4 py-3 bg-gray-50/80 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300 text-gray-900 font-medium cursor-pointer"
          >
            <option value="">Todos los Materiales</option>
            {materialTypes.map(material => (
              <option key={material} value={material}>{material}</option>
            ))}
          </select>
          <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductFilters;