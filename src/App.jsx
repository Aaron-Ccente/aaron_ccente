import Experiencia from "./feature/experiencia";
import Habilidades from "./feature/habilidades";
import Proyectos from "./feature/proyectos";
import Inicio from "./feature/inicio";
import DownloadCV from "./components/DownloadCV";
import Contacto from "./feature/contacto";
import Navbar from "./ui/Navbar";

const Portfolio = () => {
  return (
    <div className="relative min-h-screen bg-linear-to-br from-bg-linear-background-left to-bg-linear-background-right text-text-primary">
      {/* Navegación */}
      <Navbar />

      {/* Boton para descarga CV */}
      <DownloadCV />

      {/* Sección de Inicio */}
      <Inicio />

      {/* Sección de Proyectos */}
      <Proyectos />

      {/* Sección de Habilidades */}
      <Habilidades />

      {/* Sección de Experiencia y Educación */}
      <Experiencia />

      {/* Sección de Contacto */}
      <Contacto />

      {/* Footer */}
      <footer />
    </div>
  );
};

export default Portfolio;
