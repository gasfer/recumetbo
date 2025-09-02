import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Download, Search } from "lucide-react";

import productsData from "../../data/productsData.js"; 
import ProductCard from "../../utils/productCard.js"; 
import ProductFilters from "../../utils/ProductFilters.js";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");

  // Extraer categorías únicas
  const categories = useMemo(() => {
    return [...new Set(productsData.map((p) => p.category))];
  }, []);

  // Extraer tipos de material únicos
  const materialTypes = useMemo(() => {
    return [...new Set(productsData.map((p) => p.materialType))];
  }, []);

  // Filtrar productos
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "" || product.category === selectedCategory;
      const matchesMaterial =
        selectedMaterial === "" || product.materialType === selectedMaterial;
      return matchesSearch && matchesCategory && matchesMaterial;
    });
  }, [searchTerm, selectedCategory, selectedMaterial]);

  // Descargar catálogo
  const handleDownloadCatalog = () => {
    const catalogText = filteredProducts
      .map(
        (p) =>
          `Producto: ${p.title}\nCategoría: ${p.category}\nMaterial: ${p.materialType}\nDescripción: ${p.description}\nDetalles: ${
            p.details || "N/A"
          }\n---`
      )
      .join("\n\n");

    const blob = new Blob([catalogText], {
      type: "text/plain;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "catalogo_productos.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    alert(
      "¡Catálogo descargado! Ahora tienes todos los detalles de nuestros metales en tus manos. ¡Qué emoción!"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <section id="productos" className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Encabezado */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-[#272724] mb-4">
              Nuestros Productos Brillantes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metales reciclados de la más alta calidad, listos para su
              reutilización en diversas industrias con certificación de
              sostenibilidad. ¡Pura joya!
            </p>
          </motion.div>

          {/* Filtros */}
          <ProductFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedMaterial={selectedMaterial}
            onMaterialChange={setSelectedMaterial}
            categories={categories}
            materialTypes={materialTypes}
          />

          {/* Resultados */}
          {filteredProducts.length === 0 ? (
            <motion.div
              className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-12 text-center shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                ¡Vaya, no encontramos ese metal!
              </h3>
              <p className="text-gray-500 font-medium">
                Intenta ajustar tus filtros o buscar otro nombre. ¡Seguro que
                tenemos lo que buscas!
              </p>
            </motion.div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}

          {/* Botón de descarga */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.button
              onClick={handleDownloadCatalog}
              className="bg-[#00B04E] hover:bg-[#86B500] text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 flex items-center justify-center mx-auto gap-3 shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-6 h-6" />
              Descargar Catálogo Completo
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
