import Projects from "./Projects"
import { useEffect } from "react";
export default function Works() {
  useEffect(() => {
    // Desplaza la página al principio cuando se carga
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <div className='mt-20'>
               <h2 className="text-3xl font-semibold text-white mt-4 text-center">Projects</h2>
               <h3 className="text-lg text-gray-400 font-bold mt-2 text-center">Things I’ve built so far</h3>
            </div>
      <Projects />
    </div>
  )
}
