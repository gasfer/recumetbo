import React from "react";
import { motion } from "framer-motion";

// Iconos de lucide-react
import { Facebook, Instagram, Linkedin, Link as LinkIcon, Mail, Phone, MapPin } from "lucide-react";

// Iconos externos (TikTok)
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Productos", href: "#productos" },
  ];

  const services = [
    { name: "Reciclaje Ferroso", href: "#" },
    { name: "Reciclaje No Ferroso", href: "#" },
    { name: "Recolección Industrial", href: "#" },
    { name: "Consultoría Ambiental", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-[#1877F2]" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]" },
    { icon: FaTiktok, href: "#", label: "TikTok", color: "hover:bg-[#010101]" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-[#0A66C2]" },
    { icon: LinkIcon, href: "#", label: "TreeLink", color: "hover:bg-[#00B04E]" },
  ];

  const goToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#272724] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div
              className="flex items-center space-x-4 mb-4 cursor-pointer"
              onClick={goToTop}
            >
              {/* Logo */}
              <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-black border-2 border-white flex items-center justify-center overflow-hidden">
                <img
                  src="recumet.png"
                  alt="RECUMET"
                  className="w-10 sm:w-12 h-10 sm:h-12 object-contain"
                />
              </div>

              {/* Texto slogan */}
              <div className="hidden lg:flex flex-col">
                <span className="text-2xl font-bold">RECUMET BOLIVIA SRL</span>
                <span className="text-sm font-light text-gray-300">
                  Especialistas en reciclaje
                </span>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              Líderes en reciclaje inteligente de metales ferrosos y no ferrosos. 
              Transformamos residuos en recursos valiosos para un futuro sostenible.
            </p>

            {/* Redes sociales */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-300 hover:text-[#00B04E] transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <motion.a
                    href={service.href}
                    className="text-gray-300 hover:text-[#00B04E] transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {service.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#00B04E] mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Industrial Ave <br />
                  Zona Industrial Norte <br />
                  Ciudad, País
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#00B04E] flex-shrink-0" />
                <span className="text-gray-300">+(591) 69422892</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#00B04E] flex-shrink-0" />
                <span className="text-gray-300">info@recumetbolivia.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 RECUMET BOLIVIA · Powered by CloudPC Smart Technology
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#00B04E] text-sm transition-colors duration-300">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00B04E] text-sm transition-colors duration-300">
              Términos de Servicio
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
