import React from "react";
import { motion } from "framer-motion";

const BlogCard = ({ news }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
      whileHover={{ y: -6 }}
    >
      {/* Imagen o fondo sólido si no hay imagen */}
      <div
        className={`relative h-48 w-full flex items-center justify-center ${
          news.image ? "" : "bg-[#00B04E]"
        }`}
      >
        {news.image && (
          <img
            src={news.image}
            alt={news.title}
            className="h-full w-full object-cover"
          />
        )}
        {!news.image && (
          <span className="text-white font-bold text-xl">
            {news.title.slice(0, 20)}...
          </span>
        )}

        {/* Categoría */}
        {news.categories?.length > 0 && (
          <span className="absolute top-3 left-3 bg-[#F6AB00] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
            {news.categories[0]}
          </span>
        )}
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-[#272724] mb-2 line-clamp-2">
          {news.title}
        </h3>
        <p className="text-gray-600 text-sm flex-1 mb-4 line-clamp-3">
          {news.description}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{news.date.toLocaleDateString()}</span>
          <span className="font-medium text-[#00B04E]">{news.source}</span>
        </div>

        {/* Botón con color sólido */}
        <button className="mt-4 w-full px-4 py-2 bg-[#00B04E] text-white text-sm font-medium rounded-lg shadow hover:bg-[#86B500] transition-all">
          Leer más
        </button>
      </div>
    </motion.div>
  );
};

export default BlogCard;
