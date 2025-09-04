import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ImageCarousel = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      title: 'Reciclaje de Aluminio',
      description: 'Procesamiento eficiente de metales no ferrosos'
    },
    {
      url: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800',
      title: 'Separación de Metales',
      description: 'Tecnología avanzada para clasificación'
    },
    {
      url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800',
      title: 'Procesamiento Industrial',
      description: 'Instalaciones de última generación'
    },
    {
      url: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800',
      title: 'Metales Ferrosos',
      description: 'Reciclaje especializado en hierro y acero'
    }
  ];

  return (
    <section className="relative bg-gradient-to-r from-[#F6AB00]/20 via-[#FFFFFF] to-[#00B04E]/20 py-16">
      <div className="container mx-auto px-4">
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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre cómo transformamos los desechos metálicos en recursos valiosos
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active'
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <img 
                      src={image.url} 
                      alt={image.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#272724]/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageCarousel;