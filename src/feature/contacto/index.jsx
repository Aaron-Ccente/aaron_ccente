import { useState } from "react";
import { FaEnvelope, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mensajeWhatsApp = `
    Hola Aarón, te contacto desde tu portafolio:
    
    Nombre: ${formData.nombre}
    Email: ${formData.email}
    Asunto: ${formData.asunto}
    
    *Mensaje:*
    ${formData.mensaje}
    
    ---
    Mensaje enviado desde el portafolio web.
        `.trim();
    const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);
    const numeroWhatsApp = "+51959085189";
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
    window.open(urlWhatsApp, "_blank");

    setFormData({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    });

    // Opcional: Mostrar mensaje de confirmación
    alert("Redirigiendo a WhatsApp para enviar tu mensaje...");
  };

  return (
    <section id="contacto" className="py-16 px-4 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        Contáct<span className="text-blue-400">ame</span>
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-6">
            ¿Tienes un proyecto en mente?
          </h3>
          <p className="text-gray-300 mb-6">
            Estoy disponible para oportunidades freelance y empleo a tiempo
            completo. Si necesitas un desarrollador para tu equipo o tienes una
            idea para un proyecto, no dudes en contactarme.
          </p>

          <div className="space-y-4">
            <div className="flex items-center">
              <FaEnvelope className="text-blue-400 text-xl mr-3" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-300">aronccente@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaGithub className="text-blue-400 text-xl mr-3" />
              <div>
                <p className="font-medium">GitHub</p>
                <p className="text-gray-300">github.com/Aaron-Ccente</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaWhatsapp className="text-green-400 text-xl mr-3" />
              <div>
                <p className="font-medium">WhatsApp</p>
                <p className="text-gray-300">+51 959 085 189</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-blue-400 text-xl mr-3">📍</span>
              <div>
                <p className="font-medium">Ubicación</p>
                <p className="text-gray-300">Huancayo, Perú</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2 font-medium">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="tu@email.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Asunto</label>
              <input
                type="text"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="¿En qué puedo ayudarte?"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Mensaje</label>
              <textarea
                rows="4"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Describe tu proyecto o consulta..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-xl" />
              Enviar por WhatsApp
            </button>
            <p className="text-gray-400 text-sm text-center mt-2">
              Al hacer clic en "Enviar por WhatsApp" se abrirá la aplicación con
              tu mensaje listo para enviar.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
