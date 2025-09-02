import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";

const contacts = [
  { icon: FaWhatsapp, text: "CBBA: 69422892" },
  { icon: FaWhatsapp, text: "SCZ: 69422891" },
];

const socialLinks = [
  { href: "https://www.facebook.com/recumetbolivia", icon: Facebook, label: "Facebook" },
  { href: "https://www.instagram.com/recumetbolivia", icon: Instagram, label: "Instagram" },
  { href: "https://www.linkedin.com/company/recumet", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.tiktok.com/@recumetbolivia", icon: FaTiktok, label: "TikTok" },
];

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full z-[9999] bg-[#272724] text-white shadow-lg"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-2 sm:py-3">

        {/* Contacto visible SOLO en mobile */}
        <div className="flex md:hidden items-center space-x-2 text-sm">
          <FaWhatsapp className="w-5 h-5 text-[#00B04E]" />
          <span>{contacts[0].text}</span>
        </div>

        {/* Contactos (desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          {contacts.map((c, idx) => (
            <motion.div
              key={idx}
              className="flex items-center space-x-2 cursor-pointer text-sm"
              whileHover={{ scale: 1.1, color: "#F6AB00" }}
            >
              <c.icon className="w-5 h-5 text-[#00B04E]" />
              <span>{c.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Redes Sociales (desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00B04E]"
              whileHover={{ scale: 1.2, color: "#F6AB00" }}
            >
              <social.icon className="w-5 h-5 md:w-6 md:h-6" />
            </motion.a>
          ))}
        </div>

        {/* Botón Hamburguesa (mobile) */}
        <div className="flex md:hidden items-center">
          <button
            onClick={toggleMenu}
            aria-label="Abrir menú"
            className="p-2 rounded-md hover:bg-[#00B04E]/30 transition"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="white"
                strokeWidth="2"
                className="w-6 h-6"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú desplegable Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-[#272724]/95 p-5 space-y-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Contactos */}
            <div className="flex flex-col items-center space-y-3">
              {contacts.map((c, idx) => (
                <motion.div
                  key={idx}
                  onClick={closeMenu}
                  className="flex items-center space-x-2 cursor-pointer"
                  whileHover={{ scale: 1.1, color: "#F6AB00" }}
                >
                  <c.icon className="w-5 h-5 text-[#00B04E]" />
                  <span className="text-white text-sm">{c.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Redes Sociales */}
            <div className="flex justify-center items-center space-x-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  onClick={closeMenu}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00B04E]"
                  whileHover={{ scale: 1.2, color: "#F6AB00" }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TopBar;
