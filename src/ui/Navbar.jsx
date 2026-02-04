import { useState } from "react";
import Theme from "../components/Theme";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {

  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setNavOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-text-blue">&lt;</span>
          <span className="text-white">Aaron</span>
          <span className="text-text-blue">Dev/&gt;</span>
        </div>

        {/* Navegación para desktop */}
        <div className="hidden md:flex space-x-8">
          {[
            "inicio",
            "proyectos",
            "habilidades",
            "experiencia",
            "contacto",
          ].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize hover:text-text-blue transition-colors ${
                activeSection === item
                  ? "text-text-blue border-b-2 border-border-blue"
                  : ""
              }`}
            >
              {item}
            </button>
          ))}
          <Theme />
        </div>

        {/* Botón menú móvil */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menú móvil */}
      {navOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-6">
          <div className="flex flex-col space-y-4">
            {[
              "inicio",
              "proyectos",
              "habilidades",
              "experiencia",
              "contacto",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize text-left py-2 hover:text-text-blue transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
