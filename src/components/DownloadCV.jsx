import { FaFilePdf } from "react-icons/fa";

const handleDownloadCV = () => {

  const link = document.createElement("a");
  link.href = "/CV_CCENTE ROJAS JUAN AARON.pdf";
  link.download = "Aaron_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

};

export default function DownloadCV() {
  return (
    <button
      className="fixed top-20 right-20 px-6 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 z-50 hover:cursor-pointer flex justify-center items-center gap-2"
      onClick={handleDownloadCV}
    >
      <FaFilePdf />
      <span>Descargar CV</span>
    </button>
  );
}
