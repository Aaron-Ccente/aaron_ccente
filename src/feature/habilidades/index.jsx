import { habilidadesBlandas, habilidadesTecnicas } from "./data/data";

export default function Habilidades() {
  return (
    <section id="habilidades" className="py-16 px-4 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        Mis <span className="text-text-blue">Habilidades</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {habilidadesTecnicas.map((habilidad, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl border border-gray-700"
          >
            <div className="flex items-center mb-4">
              <div className="text-2xl text-text-blue mr-3">
                {habilidad.icono}
              </div>
              <h3 className="text-xl font-bold">{habilidad.nombre}</h3>
              <div className="ml-auto text-lg font-bold">
                {habilidad.nivel}%
              </div>
            </div>

            <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
              <div
                className="bg-linear-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
                style={{ width: `${habilidad.nivel}%` }}
              ></div>
            </div>

            <div className="flex flex-wrap gap-2">
              {habilidad.tecnologias.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Habilidades Blandas */}
      <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
        <h3 className="text-2xl font-bold mb-6 text-center">
          Habilidades <span className="text-text-blue">Blandas</span>
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {habilidadesBlandas.map((habilidad, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-700 px-4 py-3 rounded-lg"
            >
              <div className="w-2 h-2 bg-text-green rounded-full mr-3"></div>
              <span>{habilidad}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
