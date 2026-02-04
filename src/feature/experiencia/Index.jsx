
import { educacion, experiencia } from "./data/data";

export default function Experiencia() {
  return (
    <section id="experiencia" className="py-16 px-4 bg-gray-800/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Experiencia <span className="text-text-blue">& Educación</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Experiencia */}
          <h3 className="text-2xl font-bold mb-8">Experiencia Profesional</h3>
          {experiencia.map((exp, index) => (
            <div
              key={index}
              className="relative mb-10 pl-8 border-l border-blue-500"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{exp.puesto}</h3>
                  <span className="text-text-blue font-medium">{exp.año}</span>
                </div>
                <p className="text-gray-300 font-medium mb-3">{exp.empresa}</p>
                <p className="text-gray-400 mb-4">{exp.descripcion}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tecnologias.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-700 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Educación */}
          <h3 className="text-2xl font-bold mb-8 mt-16">Formación Académica</h3>
          <div className="relative pl-8 border-l border-green-500">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold">{educacion.carrera}</h3>
                <span className="text-green-400 font-medium">
                  {educacion.fecha}
                </span>
              </div>
              <p className="text-gray-300 font-medium mb-3">
                {educacion.universidad}
              </p>
              <p className="text-gray-400">Ubicación: {educacion.ubicacion}</p>
              <p className="text-gray-400 mt-2">Estado: {educacion.estado}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
