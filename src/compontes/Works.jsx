import Projects from "./Projects"
import { useEffect } from "react";
export default function Works() {
  useEffect(() => {
    // Desplaza la página al principio cuando se carga
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        
      <Projects />
    </div>
  )
}
