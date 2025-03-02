import { motion } from 'framer-motion';
import jsNode from '../pdf/js,node.pdf';
import mys from '../pdf/mys.pdf';
import reacSoftware from '../pdf/ReactSoftware.pdf';
import { FiDownload } from 'react-icons/fi';

export default function Certificaciones() {
  const descargarPDF = (archivo) => {
    const link = document.createElement('a');
    link.href = archivo;
    link.download = 'certificacion.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mt-10">
          Certifications
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Certificado 1 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-blue-400 transition-all"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">JavaScript & Node.js</h3>
              <p className="text-gray-300 flex-grow mb-6">
                Mastered core concepts including ES6+ features, DOM manipulation, and server-side development with Node.js
              </p>
              <button
                onClick={() => descargarPDF(jsNode)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
              >
                <FiDownload className="text-xl" />
                Download Certificate
              </button>
            </div>
          </motion.div>

          {/* Certificado 2 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-teal-400 transition-all"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-bold text-teal-400 mb-4">MySQL Database</h3>
              <p className="text-gray-300 flex-grow mb-6">
                Gained expertise in relational database design, SQL queries, and database optimization techniques
              </p>
              <button
                onClick={() => descargarPDF(mys)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-all"
              >
                <FiDownload className="text-xl" />
                Download Certificate
              </button>
            </div>
          </motion.div>

          {/* Certificado 3 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-purple-400 transition-all"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">React Architecture</h3>
              <p className="text-gray-300 flex-grow mb-6">
                Advanced patterns including state management, component composition, and performance optimization
              </p>
              <button
                onClick={() => descargarPDF(reacSoftware)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all"
              >
                <FiDownload className="text-xl" />
                Download Certificate
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}