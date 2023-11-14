
import jsNode from '../pdf/js,node.pdf';
import mys from '../pdf/mys.pdf';
import reacSoftware from '../pdf/ReactSoftware.pdf';

export default function Certificaciones() {
  const descargarPDF = (archivo) => {
    // Crea un enlace temporal
    const link = document.createElement('a');
    link.href = archivo;
    link.download = 'certificacion.pdf';

    // Simula un clic en el enlace para iniciar la descarga
    document.body.appendChild(link);
    link.click();

    // Elimina el enlace temporal
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4 text-center text-white">Certificate</h1>

      <div className="flex flex-wrap justify-center">
        <div className="bg-fondo p-4 m-4 rounded shadow-md w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <h2 className="text-xl font-bold mb-2 text-textcards">Certificate Node and Js</h2>
          <p className="text-textcards mb-4">
            Learning Javascript Em9, Html, Css, Node Js from scratch.
          </p>
          <button
            className="bg-black text-white px-4 py-2 rounded hover:text-gray-400"
            onClick={() => descargarPDF(jsNode)}
          >
            Download PDF
          </button>
        </div>

        <div className="bg-fondo p-4 m-4 rounded shadow-md w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <h2 className="text-xl font-bold mb-2 text-textcards">Certificate MySQL</h2>
          <p className="text-textcards mb-4">
            Introduction to relational database with MySQL.
          </p>
          <button
            className="bg-black text-white px-4 py-2 rounded hover:text-gray-400"
            onClick={() => descargarPDF(mys)}
          >
            Download PDF
          </button>
        </div>

        <div className="bg-fondo p-4 m-4 rounded shadow-md w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <h2 className="text-xl font-bold mb-2 text-textcards">Certificate React Software</h2>
          <p className="text-textcards mb-4">React Software Architecture.</p>
          <button
            className="bg-black text-white px-4 py-2 rounded hover:text-gray-400"
            onClick={() => descargarPDF(reacSoftware)}
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
