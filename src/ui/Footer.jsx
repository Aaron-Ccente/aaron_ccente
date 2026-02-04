
export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-700">
      <div className="container mx-auto text-center">
        <div className="text-2xl font-bold mb-4">
          <span className="text-text-blue">&lt;</span>
          <span className="text-white">Aaron</span>
          <span className="text-text-blue">Dev/&gt;</span>
        </div>
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Juan Aarón Ccente Rojas.
          Desarrollador Web Full Stack.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Huancayo, Perú · Desarrollado con React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
