import {
  FaEnvelope,
  FaGithub,
  FaLaravel,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Inicio() {
  return (
    <section id="inicio" className="pt-24 pb-16 px-4 container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hola, soy{" "}
            <span className="text-text-blue">Juan Aarón Ccente Rojas</span>
          </h1>
          <h2 className="text-2xl text-text-description mb-4">
            Desarrollador Web Full Stack
          </h2>
          <p className="text-lg text-text-description mb-6">
            Estudiante de Ingeniería de Sistemas en la UNCP con experiencia en
            desarrollo web frontend y sólidos conocimientos en integración
            backend. Especializado en crear interfaces modernas, accesibles y
            optimizadas con React, TypeScript y Tailwind CSS.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center">
              <FaReact className="text-text-blue mr-2" />
              <span>React</span>
            </div>
            <div className="flex items-center">
              <SiTypescript className="text-text-blue mr-2" />
              <span>TypeScript</span>
            </div>
            <div className="flex items-center">
              <SiTailwindcss className="text-text-blue mr-2" />
              <span>Tailwind CSS</span>
            </div>
            <div className="flex items-center">
              <FaNodeJs className="text-text-green mr-2" />
              <span>Node.js</span>
            </div>
            <div className="flex items-center">
              <FaLaravel className="text-text-red mr-2" />
              <span>Laravel</span>
            </div>
          </div>

          <div className="flex space-x-4">
            <a
              href="#contacto"
              className="bg-button-blue hover:bg-button-blue-hover px-6 py-3 rounded-lg font-medium transition-colors text-white"
            >
              Contáctame
            </a>
            <a
              href="#proyectos"
              className="border border-border-blue text-text-blue hover:bg-blue-400/10 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Ver Proyectos
            </a>
          </div>
          <div className="flex space-x-4 mt-8">
            <a
              href="https://github.com/Aaron-Ccente"
              className="text-2xl hover:text-text-blue transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/aar%C3%B3n-ccente-rojas-a41478272/"
              target="_blank"
              className="text-2xl hover:text-text-blue transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:aronccente@gmail.com"
              className="text-2xl hover:text-text-blue transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center select-none">
          <div className="relative w-64 h-64 md:w-80 md:h-80 pointer-events-none select-none">
            <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl pointer-events-none select-none"></div>
            <div className="relative w-full h-full bg-linear-to-br from-gray-800 to-gray-900 rounded-full border-4 border-gray-700 flex items-center justify-center select-none">
              <div className="text-center select-none">
                <img
                  src="/imagen-gif.gif"
                  width={256}
                  height={256}
                  draggable="false"
                  className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover select-none pointer-events-none"
                  alt="Juan Aarón Ccente Rojas"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
