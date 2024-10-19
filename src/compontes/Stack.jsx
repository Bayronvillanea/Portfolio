import css from '../img/css.svg';
import html from '../img/html.svg';
import js from '../img/js.svg';
import git from '../img/git.svg';
import react from '../img/react.svg';
import typescript from '../img/typescript.svg';
import tailwind from '../img/tailwind.svg';
import mysql from '../img/mysql.svg';
import { useEffect } from 'react';
export default function Stack() {
  useEffect(() => {
    // Desplaza la página al principio cuando se carga
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center mt-[-10]">
      <section className="p-6 w-11/12 max-w-screen-md">
        <h2 className="text-2xl font-semibold text-center mb-4 text-yellow-50">My Tech Stack</h2>
        <h3 className="text-lg font-normal text-center  text-gray-200 mb-6">Technologies I’ve been working with recently</h3>
        <div className="flex flex-wrap justify-center gap-6">
          <img src={css} alt="css" className="w-16 h-16" />
          <img src={html} alt="html" className="w-16 h-16" />
          <img src={js} alt="js" className="w-16 h-16" />
          <img src={git} alt="git" className="w-16 h-16" />
          <img src={react} alt="react" className="w-16 h-16" />
          <img src={typescript} alt="typescript" className="w-16 h-16" />
          <img src={tailwind} alt="tailwind" className="w-16 h-16" />
          <img src={mysql} alt="mysql" className="w-16 h-16" />
        </div>
      </section>
    </div>
  );
}
