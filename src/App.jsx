import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaServer, FaDatabase, FaBars, FaTimes, FaLaravel, FaReact, FaNodeJs, FaWhatsapp, FaFilePdf } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';

const Portfolio = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const proyectos = [
    {
      id: 1,
      titulo: "Plataforma Web - Gestión Documentaria de Oficios",
      descripcion: "Sistema completo para la Oficina de Criminalística (OFICRI) con gestión documentaria, autenticación basada en roles y gráficos estadísticos dinámicos.",
      tecnologias: ["React", "Node.js", "MySQL", "Tailwind CSS", "JWT"],
      enlace: "#",
      fecha: "Sep 2025 - Nov 2025",
      cliente: "Oficina de Criminalística (OFICRI)",
      rol: "Líder de Desarrollo Full Stack",
      imagen: "/loginoficri.jpg"
    },
    {
      id: 2,
      titulo: "Plataforma Contigo Voy - Centro Psicológico",
      descripcion: "Optimización y desarrollo de plataforma web con panel de psicólogos, gráficos interactivos y mejoras en UX/UI.",
      tecnologias: ["React", "TypeScript", "Laravel", "Tailwind CSS", "REST API"],
      enlace: "https://centropsicologicocontigovoy.com/",
      fecha: "Jun 2025 - Ago 2025",
      cliente: "NEONHOUSELED SAC",
      rol: "Desarrollador Frontend/Backend",
      imagen: "/contigovoy.webp"
    },
    {
      id: 3,
      titulo: "Servicio de mensajería con WebSockets y WhatsApp",
      descripcion: "Plataforma de mensajería en tiempo real integrada con WhatsApp mediante WebSockets, permitiendo el envío y recepción instantánea de mensajes desde una interfaz web. El sistema incluye autenticación segura, gestión de sesiones con códigos QR, monitoreo del estado de conexión, y una API REST para la integración con sistemas externos. Diseñado para entornos empresariales, optimiza la comunicación con clientes y automatiza flujos de atención.",
      tecnologias: ["React", "Node.js", "WebSockets", "CSS3", "WhatsApp", "REST API"],
      enlace: "https://aaron-ccente.vercel.app/",
      fecha: "Jul 2025 - Ago 2025",
      cliente: "NEONHOUSELED SAC",
      rol: "Desarrollador Frontend / Backend",
      imagen: "/whatsApp-service.webp"
    },
    {
      id: 4,
      titulo: "KoreanMania Huancayo - Página Web",
      descripcion: "Página web desarrollada con React.js y optimizada para máximo rendimiento. Resultados Lighthouse: 100 en Performance, Accessibility, Best Practices y SEO.",
      tecnologias: ["React", "Tailwind CSS", "Figma", "WebP", "Firebase Hosting"],
      enlace: "https://koreanmania-huancayo.web.app/",
      fecha: "2025",
      cliente: "KoreanMania",
      rol: "Desarrollador Frontend",
      imagen: "/koreanmania.webp"
    },
    {
      id: 5,
      titulo: "Sistema de Inventario - OFICRI Huancayo",
      descripcion: "Sistema de inventario desarrollado con React.js y Node.js, optimizada para realizar consultas instantáneas, con validaciones en el frontend y backend para evitar errores de digitación.",
      tecnologias: ["React", "Tailwind CSS", "Figma", "Node", "MySQL"],
      enlace: "#",
      fecha: "2025",
      cliente: "Área de Inventario - OFICRI",
      rol: "Desarrollador Frontend/Backend",
      imagen: "/inventario.webp"
    },
    {
      id: 6,
      titulo: "Sistema de Películas - PELISUNCP",
      descripcion: "Sistema que muestra dinámicamente peliculas creadas por un usuario con rol de administrador. Utilicé PROCEDIMIENTOS ALMACENADOS en MySQL e integración con backend en Node.js y React con tailwindcss para el frontend.",
      tecnologias: ["React", "Tailwind CSS", "Figma", "Node", "MySQL", "Procedimientos Almacenados"],
      enlace: "https://netflix-front-woad.vercel.app/",
      fecha: "2024",
      cliente: "Proyecto Fullstack - Personal",
      rol: "Desarrollador Frontend/Backend",
      imagen: "/vistapelis.webp"
    },
    {
      id: 7,
      titulo: "Consultora SudoLabs",
      descripcion: "Sitio web corporativo desarrollado para SudoLabs, una consultora de software en crecimiento enfocada en brindar soluciones tecnológicas modernas. El proyecto se centró en una arquitectura frontend escalable, optimización SEO, alto rendimiento y una experiencia de usuario clara y profesional, orientada a la captación de clientes y presentación de servicios.",
      tecnologias: ["Next.js", "Tailwind CSS", "Figma", "SEO", "Optimización Web"],
      enlace: "https://www.sudolabs.space/",
      fecha: "2025",
      cliente: "SudoLabs",
      rol: "Desarrollador Frontend",
      imagen: "/sudolabs.webp"
    }
  ];

  const habilidadesTecnicas = [
    { 
      nombre: "Frontend", 
      icono: <FaCode />, 
      nivel: 95, 
      tecnologias: ["Next","React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"] 
    },
    { 
      nombre: "Backend", 
      icono: <FaServer />, 
      nivel: 85, 
      tecnologias: ["Node.js", "Laravel", "REST APIs", "Express"] 
    },
    { 
      nombre: "Bases de Datos", 
      icono: <FaDatabase />, 
      nivel: 80, 
      tecnologias: ["MySQL", "Firebase", "Diseño de BD"] 
    },
    { 
      nombre: "Herramientas", 
      icono: <FaLaravel />, 
      nivel: 90, 
      tecnologias: ["Git", "VS Code", "Figma", "Firebase Hosting"] 
    }
  ];

  const habilidadesBlandas = [
    "Aprendizaje continuo",
    "Gestión del tiempo",
    "Atención al detalle",
    "Pensamiento crítico",
    "Colaboración y trabajo en equipo",
    "Resolución de problemas",
    "Comunicación efectiva"
  ];

  const experiencia = [
    { 
      año: "Sep 2025 - Nov 2025", 
      puesto: "Líder de Desarrollo Full Stack", 
      empresa: "Oficina de Criminalística (OFICRI)",
      descripcion: "Lideré el desarrollo completo de la plataforma web de gestión documentaria. Diseñé arquitectura, backend con Node.js, frontend con React/Tailwind, autenticación JWT y gráficos estadísticos dinámicos.",
      tecnologias: ["Next","React", "Node.js", "MySQL", "Tailwind CSS", "JWT"]
    },
    { 
      año: "Jun 2025 - Ago 2025", 
      puesto: "Desarrollador Frontend/Backend", 
      empresa: "NEONHOUSELED SAC",
      descripcion: "Participé en desarrollo y optimización de plataforma psicológica. Mejoré UX/UI, desarrollé componentes con React/TypeScript, integré APIs REST y mantuve backend Laravel.",
      tecnologias: ["React", "TypeScript", "Laravel", "REST API", "Tailwind"]
    },
    { 
      año: "2025", 
      puesto: "Desarrollador Full Stack", 
      empresa: "KoreanMania Huancayo",
      descripcion: "Desarrollé página web completa con React.js, diseño UX/UI en Figma, optimicé imágenes a WebP, logrando 100/100 en Lighthouse.",
      tecnologias: ["React", "Figma", "WebP", "Firebase", "Tailwind"]
    }
  ];

  const educacion = {
    universidad: "Universidad Nacional del Centro del Perú (UNCP)",
    carrera: "Ingeniería de Sistemas",
    ubicacion: "Huancayo, Perú",
    estado: "Estudiante",
    fecha: ""
  };

const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "/CV_CCENTE ROJAS JUAN AARON.pdf";
  link.download = "Aaron_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setNavOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
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
    const numeroWhatsApp = '+51959085189';
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
    window.open(urlWhatsApp, '_blank');

    setFormData({
      nombre: '',
      email: '',
      asunto: '',
      mensaje: ''
    });
    
    // Opcional: Mostrar mensaje de confirmación
    alert('Redirigiendo a WhatsApp para enviar tu mensaje...');
  };

  return (
    <div className="relative min-h-screen bg-linear-to-br from-gray-900 to-gray-800 text-white">
      {/* Navegación */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-blue-400">&lt;</span>
            <span className="text-white">Aaron</span>
            <span className="text-blue-400">Dev/&gt;</span>
          </div>
          
          {/* Navegación para desktop */}
          <div className="hidden md:flex space-x-8">
            {['inicio', 'proyectos', 'habilidades', 'experiencia', 'contacto'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize hover:text-blue-400 transition-colors ${
                  activeSection === item ? 'text-blue-400 border-b-2 border-blue-400' : ''
                }`}
              >
                {item}
              </button>
            ))}
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
              {['inicio', 'proyectos', 'habilidades', 'experiencia', 'contacto'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-left py-2 hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
      
      {/* Boton para descarga CV */}
      <button className='fixed top-20 right-20 px-6 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 z-50 hover:cursor-pointer flex justify-center items-center gap-2' onClick={handleDownloadCV}>
          <FaFilePdf/>
          <span>Descargar CV</span>
      </button>

      {/* Sección de Inicio */}
      <section id="inicio" className="pt-24 pb-16 px-4 container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hola, soy <span className="text-blue-400">Juan Aarón Ccente Rojas</span>
            </h1>
            <h2 className="text-2xl text-gray-300 mb-4">Desarrollador Web Full Stack</h2>
            <p className="text-lg text-gray-300 mb-6">
              Estudiante de Ingeniería de Sistemas en la UNCP con experiencia en desarrollo web frontend 
              y sólidos conocimientos en integración backend. Especializado en crear interfaces modernas, 
              accesibles y optimizadas con React, TypeScript y Tailwind CSS.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center">
                <FaReact className="text-blue-400 mr-2" />
                <span>React</span>
              </div>
              <div className="flex items-center">
                <SiTypescript className="text-blue-400 mr-2" />
                <span>TypeScript</span>
              </div>
              <div className="flex items-center">
                <SiTailwindcss className="text-blue-400 mr-2" />
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center">
                <FaNodeJs className="text-green-400 mr-2" />
                <span>Node.js</span>
              </div>
              <div className="flex items-center">
                <FaLaravel className="text-red-400 mr-2" />
                <span>Laravel</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#contacto" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors">
                Contáctame
              </a>
              <a href="#proyectos" className="border border-blue-400 text-blue-400 hover:bg-blue-400/10 px-6 py-3 rounded-lg font-medium transition-colors">
                Ver Proyectos
              </a>
            </div>
            <div className="flex space-x-4 mt-8">
              <a href="https://github.com/Aaron-Ccente" className="text-2xl hover:text-blue-400 transition-colors">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/aar%C3%B3n-ccente-rojas-a41478272/" target='_blank' className="text-2xl hover:text-blue-400 transition-colors">
                <FaLinkedin />
              </a>
              <a href="mailto:aronccente@gmail.com" className="text-2xl hover:text-blue-400 transition-colors">
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

      {/* Sección de Proyectos */}
      <section id="proyectos" className="py-16 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Mis <span className="text-blue-400">Proyectos</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectos.map((proyecto) => (
              <div key={proyecto.id} className="relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:-translate-y-1 select-none">
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
                  <div className="
                    absolute inset-0
                    bg-black/0
                    transition-colors duration-500
                    group-hover:bg-black/50
                  "></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{proyecto.titulo}</h3>
                    <span className="text-sm text-blue-400 bg-blue-400/10 px-2 py-1 rounded">{proyecto.fecha}</span>
                  </div>
                  
                  <div className="mb-3">
                    <p className="text-sm text-gray-400">Cliente: {proyecto.cliente}</p>
                    <p className="text-sm text-gray-400">Rol: {proyecto.rol}</p>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm">{proyecto.descripcion}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proyecto.tecnologias.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-700 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={proyecto.enlace} target='_blank' className="text-blue-400 hover:text-blue-300 font-medium flex items-center text-sm">
                    Ver detalles del proyecto <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Habilidades */}
      <section id="habilidades" className="py-16 px-4 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Mis <span className="text-blue-400">Habilidades</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {habilidadesTecnicas.map((habilidad, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="text-2xl text-blue-400 mr-3">
                  {habilidad.icono}
                </div>
                <h3 className="text-xl font-bold">{habilidad.nombre}</h3>
                <div className="ml-auto text-lg font-bold">{habilidad.nivel}%</div>
              </div>
              
              <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                <div 
                  className="bg-linear-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" 
                  style={{ width: `${habilidad.nivel}%` }}
                ></div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {habilidad.tecnologias.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Habilidades Blandas */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h3 className="text-2xl font-bold mb-6 text-center">Habilidades <span className="text-blue-400">Blandas</span></h3>
          <div className="flex flex-wrap justify-center gap-4">
            {habilidadesBlandas.map((habilidad, index) => (
              <div key={index} className="flex items-center bg-gray-700 px-4 py-3 rounded-lg">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span>{habilidad}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Experiencia y Educación */}
      <section id="experiencia" className="py-16 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Experiencia <span className="text-blue-400">& Educación</span></h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Experiencia */}
            <h3 className="text-2xl font-bold mb-8">Experiencia Profesional</h3>
            {experiencia.map((exp, index) => (
              <div key={index} className="relative mb-10 pl-8 border-l border-blue-500">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{exp.puesto}</h3>
                    <span className="text-blue-400 font-medium">{exp.año}</span>
                  </div>
                  <p className="text-gray-300 font-medium mb-3">{exp.empresa}</p>
                  <p className="text-gray-400 mb-4">{exp.descripcion}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tecnologias.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-700 rounded-full text-xs">
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
                  <span className="text-green-400 font-medium">{educacion.fecha}</span>
                </div>
                <p className="text-gray-300 font-medium mb-3">{educacion.universidad}</p>
                <p className="text-gray-400">Ubicación: {educacion.ubicacion}</p>
                <p className="text-gray-400 mt-2">Estado: {educacion.estado}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contacto" className="py-16 px-4 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contáct<span className="text-blue-400">ame</span></h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">¿Tienes un proyecto en mente?</h3>
            <p className="text-gray-300 mb-6">
              Estoy disponible para oportunidades freelance y empleo a tiempo completo. 
              Si necesitas un desarrollador para tu equipo o tienes una idea para un proyecto, 
              no dudes en contactarme.
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
                Al hacer clic en "Enviar por WhatsApp" se abrirá la aplicación con tu mensaje listo para enviar.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-700">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold mb-4">
            <span className="text-blue-400">&lt;</span>
            <span className="text-white">Aaron</span>
            <span className="text-blue-400">Dev/&gt;</span>
          </div>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Juan Aarón Ccente Rojas. Desarrollador Web Full Stack.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Huancayo, Perú · Desarrollado con React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;