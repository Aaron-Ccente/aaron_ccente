import { FaCode, FaDatabase, FaLaravel, FaServer } from "react-icons/fa";

export const habilidadesTecnicas = [
  {
    nombre: "Frontend",
    icono: <FaCode />,
    nivel: 95,
    tecnologias: [
      "Next",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    nombre: "Backend",
    icono: <FaServer />,
    nivel: 85,
    tecnologias: ["Node.js", "Laravel", "REST APIs", "Express"],
  },
  {
    nombre: "Bases de Datos",
    icono: <FaDatabase />,
    nivel: 80,
    tecnologias: ["MySQL", "Firebase", "Diseño de BD"],
  },
  {
    nombre: "Herramientas",
    icono: <FaLaravel />,
    nivel: 90,
    tecnologias: ["Git", "VS Code", "Figma", "Firebase Hosting"],
  },
];

export const habilidadesBlandas = [
  "Aprendizaje continuo",
  "Gestión del tiempo",
  "Atención al detalle",
  "Pensamiento crítico",
  "Colaboración y trabajo en equipo",
  "Resolución de problemas",
  "Comunicación efectiva",
];
