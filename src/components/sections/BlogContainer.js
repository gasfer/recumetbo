import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

import BlogFilters from "../../utils/BlogFilters";
import { newsData } from "../../data/newsData";
import BlogCard from "./BlogCard"; // ajusta la ruta
import { imagesByFolder } from "../../utils/imagesByFolder.js"; // import actualizado

const BlogContainer = () => {
  const [filters, setFilters] = useState({
    searchTerm: "",
    startDate: null,
    endDate: null,
    categories: { type: [], source: [] },
    years: [],
  });

  // 🔍 Filtrado de noticias
  const filteredNews = newsData.filter((news) => {
    const matchesSearch =
      filters.searchTerm === "" ||
      news.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
      news.description.toLowerCase().includes(filters.searchTerm.toLowerCase());

    const matchesDate =
      (!filters.startDate || news.date >= filters.startDate) &&
      (!filters.endDate || news.date <= filters.endDate);

    const matchesCategories =
      (filters.categories.type.length === 0 ||
        filters.categories.type.includes(news.type)) &&
      (filters.categories.source.length === 0 ||
        filters.categories.source.includes(news.source));

    const matchesYears =
      filters.years.length === 0 || filters.years.includes(news.date.getFullYear());

    return matchesSearch && matchesDate && matchesCategories && matchesYears;
  });

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const clearFilters = () => {
    setFilters({
      searchTerm: "",
      startDate: null,
      endDate: null,
      categories: { type: [], source: [] },
      years: [],
    });
  };

  return (
    <section className="relative bg-gradient-to-r from-[#F6AB00]/20 via-[#FFFFFF] to-[#00B04E]/20 py-16">
      {/* Encabezado */}
      <div className="bg-[#F6AB00] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Noticias y Actualidad
          </h2>
          <p className="mt-3 text-lg opacity-90">
            Explora las últimas noticias filtrando por categorías, fechas o palabras clave.
          </p>
        </div>
      </div>

      {/* Contenedor de filtros */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <BlogFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={clearFilters}
        />
      </div>

      {/* Grid de noticias */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {filteredNews.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredNews.map((news, idx) => {
                // 🔗 asignamos imágenes solo si existen en la carpeta correspondiente
                const folder = news.type?.toLowerCase();
                const images = folder ? imagesByFolder[folder] : [];
                const image = images?.[idx % images.length]; // undefined si no hay imágenes

                return (
                  <motion.div
                    key={news.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BlogCard news={{ ...news, image }} />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        ) : (
          <p className="text-center text-gray-600 py-20 text-lg">
            No se encontraron resultados con los filtros aplicados.
          </p>
        )}
      </div>
    </section>
  );
};

export default BlogContainer;
