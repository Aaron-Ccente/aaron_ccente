import { proyectos } from "./data/data";

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-16 px-4 bg-gray-800/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Mis <span className="text-blue-400">Proyectos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto) => (
            <div
              key={proyecto.id}
              className="relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:-translate-y-1 select-none"
            >
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="
                          w-full h-full object-cover
                          transition-transform duration-500
                          group-hover:scale-110
                        "
                />
                <div
                  className="
                        absolute inset-0
                        bg-black/0
                        transition-colors duration-500
                        group-hover:bg-black/50
                      "
                ></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{proyecto.titulo}</h3>
                  <span className="text-sm text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
                    {proyecto.fecha}
                  </span>
                </div>

                <div className="mb-3">
                  <p className="text-sm text-gray-400">
                    Cliente: {proyecto.cliente}
                  </p>
                  <p className="text-sm text-gray-400">Rol: {proyecto.rol}</p>
                </div>

                <p className="text-gray-300 mb-4 text-sm">
                  {proyecto.descripcion}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {proyecto.tecnologias.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={proyecto.enlace}
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 font-medium flex items-center text-sm"
                >
                  Ver detalles del proyecto <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
