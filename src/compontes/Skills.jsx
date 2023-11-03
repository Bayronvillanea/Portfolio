import css from '../img/css.svg';
import html from '../img/html.svg';
import js from '../img/js.svg';
import git from '../img/git.svg';
import react from '../img/react.svg';
import typescript from '../img/typescript.svg';
import tailwind from '../img/tailwind.svg';
import mysql from '../img/mysql.svg';

export default function Skills() {
  return (
    <section className="mt-[-15rem] p-6 w-1193">
      <h2 className="text-2xl font-semibold text-center mb-4 text-yellow-50">My Tech Stack</h2>
      <h3 className="text-lg font-normal text-center text-gray-600 mb-6">Technologies I’ve been working with recently</h3>
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
            <div className='mt-20'>
               <h2 className="text-3xl font-semibold text-white mt-4 text-center">Projects</h2>
               <h3 className="text-lg text-gray-600 mt-2 text-center">Things I’ve built so far</h3>
            </div>
    </section>
  );
}
