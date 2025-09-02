import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, Mail, ArrowUp } from "lucide-react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const TopContactBar = () => {
  const socialLinks = [
    { href: "https://www.facebook.com/recumetbolivia", icon: Facebook, label: "Facebook" },
    { href: "https://www.instagram.com/recumetbolivia", icon: Instagram, label: "Instagram" },
    { href: "https://www.linkedin.com/company/recumet", icon: Linkedin, label: "LinkedIn" },
    { href: "https://www.tiktok.com/@recumetbolivia", icon: FaTiktok, label: "TikTok" },
  ];

  return (
    <div className="fixed top-0 w-full bg-black text-white text-xs sm:text-sm py-1 sm:py-2 z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Teléfono y Correo */}
        <div className="flex items-center space-x-3 sm:space-x-6">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Phone className="w-3 sm:w-4 h-3 sm:h-4 text-[#00B04E]" />
            <span>+591 69422892</span>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Mail className="w-3 sm:w-4 h-3 sm:h-4 text-[#F6AB00]" />
            <span>contacto@recumet.com</span>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon className="w-4 sm:w-5 h-4 sm:h-5 hover:text-[#00B04E] active:text-[#F6AB00]" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Navigation = ({ activeSection, onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const menuItems = [
    { id: "inicio", label: "Inicio" },
    { id: "nosotros", label: "Nosotros" },
    { id: "servicios", label: "Servicios" },
    { id: "productos", label: "Nuestros Productos" },
    { id: "contacto", label: "Contacto" },
    { id: "blog", label: "Blog" },
    { id: "faqs", label: "FAQs" },
  ];

  // Detectar scroll para botón "Top"
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <TopContactBar />

      {/* NAVBAR */}
      <motion.nav
        className="fixed top-[36px] w-full z-40 bg-[#00B04E] shadow-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3 sm:py-4">
            
          {/* LOGO */}
<motion.div
  className="flex items-center cursor-pointer"
  whileHover={{ scale: 1.05 }}
  onClick={() => onSectionChange("inicio")}
>
  <div className="flex items-center space-x-2">
    {/* Imagen logo */}
    <div className="w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] rounded-full bg-black border-2 border-white flex items-center justify-center overflow-hidden">
      <img
        src="recumet.png"
        alt="RECUMET"
        className="w-10 sm:w-12 h-10 sm:h-12 object-contain"
      />
    </div>

    {/* Texto y slogan solo desktop */}
    <div className="hidden lg:flex flex-col">
      <span className="text-white font-bold text-lg">RECUMET BOLIVIA SRL</span>
      <span className="text-white text-sm font-light">Especialista en reciclaje</span>
    </div>

    {/* Texto pequeño para mobile */}
    <span className="text-white font-bold text-sm sm:hidden">
      RECUMET BOLIVIA SRL
    </span>
  </div>
</motion.div>


            {/* Menú Desktop + buscador estático */}
            <div className="hidden lg:flex items-center space-x-6">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`relative font-medium px-4 py-2 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-[#86B500] text-white shadow-lg scale-105"
                      : "text-white hover:text-[#F6AB00]"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}

              {/* Buscador estático sin funcionalidad */}
              <div className="w-64">
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="w-full px-4 py-2 rounded-lg bg-white text-black border border-gray-300 focus:outline-none"
                  disabled
                />
              </div>
            </div>

            {/* Botón Menú Hamburguesa (mobile) */}
            <motion.button
              className="lg:hidden text-white p-2 rounded-md hover:bg-black/20"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* MENU MOBILE */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center space-y-6 backdrop-blur-md bg-[#00B04E]/95 lg:hidden"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.4 }}
        >
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => {
                onSectionChange(item.id);
                setIsOpen(false);
              }}
              className={`text-white text-xl sm:text-2xl font-bold px-6 py-3 rounded-lg transition-colors duration-300 ${
                activeSection === item.id ? "bg-[#86B500] shadow-md" : "hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </motion.div>
      )}

      {/* BOTÓN FLOTANTE "TOP" */}
      {showScrollTop && (
        <motion.button
          className="fixed bottom-6 left-6 bg-[#00B04E] text-white p-3 rounded-full shadow-lg hover:bg-[#86B500] z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </>
  );
};

export default Navigation;
