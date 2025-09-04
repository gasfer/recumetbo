// src/components/sections/GallerySection.js
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

import materialsDescriptions from "../../data/materialDescriptions.js"; 
import { imagesByFolder } from "../../utils/importImages.js"; 

const materials = materialsDescriptions.map((item) => ({
  ...item,
  images: imagesByFolder[item.key] || [],
}));

const GallerySection = () => {
  const [selected, setSelected] = useState(null);
  const [swiperMain, setSwiperMain] = useState(null);
  const [swiperModal, setSwiperModal] = useState(null);
  const [hoveredCarousel, setHoveredCarousel] = useState(false);
  const [hoveredModal, setHoveredModal] = useState(false);

  return (
    <section className="relative bg-gradient-to-r from-[#F6AB00]/20 via-[#FFFFFF] to-[#00B04E]/20 py-16">
      <div className="container mx-auto px-4 relative">
        {/* Título */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#272724] mb-4">
            Nuestro Proceso de Reciclaje
          </h2>
          <p className="text-xl text-[#272724] max-w-2xl mx-auto">
            Transformamos metales ferrosos y no ferrosos en recursos valiosos
            mediante tecnología de punta y procesos sostenibles.
          </p>
        </motion.div>

        {/* Carrusel */}
        <div
          className="relative custom-swiper"
          onMouseEnter={() => setHoveredCarousel(true)}
          onMouseLeave={() => setHoveredCarousel(false)}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            onSwiper={setSwiperMain}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {materials.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelected(item)}
                >
                  {item.images.length > 0 ? (
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-64 flex items-center justify-center bg-gray-200 text-[#272724]">
                      Sin imagen
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#272724]/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90 line-clamp-3">
                      {item.description}
                    </p>
                    <div className="mt-2 w-16 h-1 bg-[#00B04E] rounded-full"></div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botones de navegación del carrusel */}
          {hoveredCarousel && (
            <>
              <motion.button
                onClick={() => swiperMain?.slidePrev()}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute top-1/2 -translate-y-1/2 z-40 -left-6 w-12 h-12 flex items-center justify-center rounded-full shadow-lg cursor-pointer bg-[#272724] hover:bg-[#F6AB00] text-white"
              >
                ❮
              </motion.button>
              <motion.button
                onClick={() => swiperMain?.slideNext()}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute top-1/2 -translate-y-1/2 z-40 -right-6 w-12 h-12 flex items-center justify-center rounded-full shadow-lg cursor-pointer bg-[#272724] hover:bg-[#F6AB00] text-white"
              >
                ❯
              </motion.button>
            </>
          )}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl relative overflow-hidden flex flex-col border-4 border-[#00B04E]"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={() => setHoveredModal(true)}
              onMouseLeave={() => setHoveredModal(false)}
            >
              {/* Botón cerrar siempre encima */}
              <motion.button
                onClick={() => setSelected(null)}
                whileHover={{ scale: 1.2 }}
                className="absolute top-4 right-4 text-white bg-[#272724] hover:bg-[#F6AB00] rounded-full p-2 transition duration-300 shadow-lg z-50"
              >
                ✕
              </motion.button>

              {/* Slider interno con autoplay */}
              <div className="relative custom-swiper">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  onSwiper={setSwiperModal}
                  autoplay={{ delay: 2500, disableOnInteraction: true }}
                  pagination={{ clickable: true }}
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px]"
                >
                  {selected.images.length > 0 ? (
                    selected.images.map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <img
                          src={img}
                          alt={selected.title}
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                    ))
                  ) : (
                    <SwiperSlide>
                      <div className="w-full h-full flex items-center justify-center bg-gray-200 text-[#272724]">
                        Sin imágenes disponibles
                      </div>
                    </SwiperSlide>
                  )}
                </Swiper>

                {/* Botones modal solo al hover */}
                {hoveredModal && (
                  <>
                    <motion.button
                      onClick={() => swiperModal?.slidePrev()}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute top-1/2 -translate-y-1/2 z-50 -left-4 w-12 h-12 flex items-center justify-center rounded-full shadow-lg cursor-pointer bg-[#272724] hover:bg-[#F6AB00] text-white"
                    >
                      ❮
                    </motion.button>
                    <motion.button
                      onClick={() => swiperModal?.slideNext()}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute top-1/2 -translate-y-1/2 z-50 -right-4 w-12 h-12 flex items-center justify-center rounded-full shadow-lg cursor-pointer bg-[#272724] hover:bg-[#F6AB00] text-white"
                    >
                      ❯
                    </motion.button>
                  </>
                )}
              </div>

              {/* Descripción */}
              <div className="p-6 max-h-[250px] overflow-y-auto border-t border-[#86B500]">
                <h3 className="text-2xl font-bold text-[#272724] mb-2">
                  {selected.title}
                </h3>
                <p className="text-[#272724] leading-relaxed">
                  {selected.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Styles */}
      <style jsx>{`
        .custom-swiper .swiper-pagination-bullet {
          background-color: #86B500;
          opacity: 1;
          width: 12px;
          height: 12px;
          transition: all 0.3s ease;
        }
        .custom-swiper .swiper-pagination-bullet-active {
          background-color: #00B04E;
          transform: scale(1.3);
        }

        /* Barra de progreso */
        .custom-swiper .swiper-pagination {
          bottom: 8px !important;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;
