import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, Tag, X } from "lucide-react";
import { categories, years } from "../data/newsData.js";

const BlogFilters = ({ filters, onFilterChange, onClearFilters }) => {
  const [showCategories, setShowCategories] = useState(false);
  const [showYears, setShowYears] = useState(false);

  const handleCategoryChange = (type, value) => {
    const currentCategories = filters.categories[type] || [];
    const newCategories = currentCategories.includes(value)
      ? currentCategories.filter((cat) => cat !== value)
      : [...currentCategories, value];
    onFilterChange("categories", {
      ...filters.categories,
      [type]: newCategories,
    });
  };

  const handleYearChange = (year) => {
    const newYears = filters.years.includes(year)
      ? filters.years.filter((y) => y !== year)
      : [...filters.years, year];
    onFilterChange("years", newYears);
  };

  return (
    <div className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-20">
      <motion.div
        className="max-w-7xl mx-auto px-4 py-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Campos principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Búsqueda */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar palabra clave..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B04E] focus:border-[#00B04E] transition text-gray-800"
              value={filters.searchTerm}
              onChange={(e) => onFilterChange("searchTerm", e.target.value)}
            />
          </div>

          {/* Fecha inicio */}
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="date"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B04E] focus:border-[#00B04E] transition text-gray-800"
              value={filters.startDate ? filters.startDate.toISOString().split("T")[0] : ""}
              onChange={(e) =>
                onFilterChange("startDate", e.target.value ? new Date(e.target.value) : null)
              }
            />
          </div>

          {/* Fecha fin */}
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="date"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B04E] focus:border-[#00B04E] transition text-gray-800"
              value={filters.endDate ? filters.endDate.toISOString().split("T")[0] : ""}
              onChange={(e) =>
                onFilterChange("endDate", e.target.value ? new Date(e.target.value) : null)
              }
            />
          </div>
        </div>

        {/* Botones de filtros */}
        <div className="flex flex-wrap gap-4">
          {/* Categorías */}
          <div className="relative">
            <motion.button
              onClick={() => {
                setShowCategories(!showCategories);
                setShowYears(false);
              }}
              className="flex items-center px-4 py-2 bg-[#00B04E] text-white rounded-lg shadow hover:bg-[#00B04E]/90 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Tag className="w-4 h-4 mr-2" />
              Categorías
              {(filters.categories.type?.length > 0 || filters.categories.source?.length > 0) && (
                <span className="ml-2 bg-[#F6AB00] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {(filters.categories.type?.length || 0) + (filters.categories.source?.length || 0)}
                </span>
              )}
            </motion.button>

            <AnimatePresence>
              {showCategories && (
                <motion.div
                  className="absolute z-10 mt-3 w-72 bg-white rounded-lg shadow-lg p-5 border border-gray-100"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <h4 className="font-semibold text-[#272724] mb-2">Tipo de Material:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {categories.type.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => handleCategoryChange("type", cat)}
                        className={`px-3 py-1.5 text-sm rounded-full transition ${
                          filters.categories.type?.includes(cat)
                            ? "bg-[#00B04E] text-white shadow"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  <h4 className="font-semibold text-[#272724] mb-2">Fuente:</h4>
                  <div className="flex flex-wrap gap-2">
                    {categories.source.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => handleCategoryChange("source", cat)}
                        className={`px-3 py-1.5 text-sm rounded-full transition ${
                          filters.categories.source?.includes(cat)
                            ? "bg-[#86B500] text-white shadow"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Años */}
          <div className="relative">
            <motion.button
              onClick={() => {
                setShowYears(!showYears);
                setShowCategories(false);
              }}
              className="flex items-center px-4 py-2 bg-[#86B500] text-white rounded-lg shadow hover:bg-[#86B500]/90 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Años
              {filters.years?.length > 0 && (
                <span className="ml-2 bg-[#F6AB00] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {filters.years.length}
                </span>
              )}
            </motion.button>

            <AnimatePresence>
              {showYears && (
                <motion.div
                  className="absolute z-10 mt-3 w-56 bg-white rounded-lg shadow-lg p-4 border border-gray-100"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="grid grid-cols-3 gap-2">
                    {years.map((year) => (
                      <button
                        key={year}
                        onClick={() => handleYearChange(year)}
                        className={`px-3 py-1.5 text-sm rounded-full transition ${
                          filters.years?.includes(year)
                            ? "bg-[#00B04E] text-white shadow"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Limpiar filtros */}
          {(filters.searchTerm ||
            filters.startDate ||
            filters.endDate ||
            filters.years?.length > 0 ||
            Object.values(filters.categories || {}).some((arr) => arr?.length > 0)) && (
            <motion.button
              onClick={onClearFilters}
              className="flex items-center px-4 py-2 bg-[#F6AB00] text-white rounded-lg shadow hover:bg-[#F6AB00]/90 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-4 h-4 mr-2" />
              Limpiar Filtros
            </motion.button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default BlogFilters;
