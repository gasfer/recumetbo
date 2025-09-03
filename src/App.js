import React, { useState, useEffect } from "react";
//Este proyecto está desarrollado con React + Vite

// Componentes
import TopBar from "./components/TopBar";
import Navigation from "./components/Navigation";
import Hero from "./components/sections/Hero";
import ImageCarousel from "./components/sections/ImageCarousel";
import GallerySection from "./components/sections/GallerySection";
import ImpactCircleSection from "./components/sections/ImpactCircleSection";
import ImpactSection from "./components/sections/ImpactSection";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Products from "./components/sections/Products";
import Contact from "./components/sections/Contact";
import Blog from "./components/sections/Blog";
import FAQ from "./components/sections/FAQ";
import Footer from "./components/Footer";
import ChatAssistant from "./components/ChatAssistant";
import ServicesGridSection from "./components/sections/ServicesGridSection";


const App = () => {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "inicio",
        "nosotros",
        "servicios",
        "productos",
        "contacto",
        "blog",
        "faqs",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      <main>
        <section id="inicio">
          <Hero />
          <ServicesGridSection />
        </section>
        <section id="nosotros">
          <ImpactSection />
          <ImpactCircleSection />
          <About />
        </section>
        <section id="servicios">
          <Services />
          <GallerySection />
        </section>
        <section id="productos">
          <Products />
        </section>
        <section id="contacto">
          <Contact />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <section id="faqs">
          <FAQ />
        </section>
      </main>

      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default App;
