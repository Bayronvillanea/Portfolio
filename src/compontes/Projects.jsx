import Cards from "./Cards";
import start from '../img/start.jpg'
import poke from '../img/poke.png'
import form2 from '../img/form2.png'
import gast from '../img/gast.png'
export default function Projects() {
  const projects = [
    {
      title: 'Pokemón App',
      image: poke,
      description: 'It is a pokemon search engine that shows the statistics.',
      technologies: 'HTML, CSS, JavaScript',
      githubLink: 'https://github.com/Bayronvillanea/Pokemon-api',
      demoLink: 'https://pokemon-api-bay.vercel.app/',
    },
    {
      title: 'StarWars',
      image: start,
      description: 'Clon the website practice',
      technologies: 'React, CSS',
      githubLink: 'https://github.com/Bayronvillanea/StarWars',
      demoLink: 'https://star-wars-kohl-eta.vercel.app/',
    }, {
      title: 'Form',
      image: form2 ,
      description: 'This form is designed for the practice of different technologies for personal improvement.',
      technologies: 'React, Tailwind',
      githubLink: 'https://github.com/Bayronvillanea/Formulario',
      demoLink: 'https://formulario-taupe.vercel.app/',
    }, {
      title: 'Expense Control',
      image: gast ,
      description: 'This Expense Control project is developed with React. It allows you to keep track of your monthly expenses and shows the percentage of spending in a progress bar..',
      technologies: 'React',
      githubLink: 'https://github.com/Bayronvillanea/control-gastos',
      demoLink: 'https://control-gastos-ten.vercel.app/',
    },
    
    // Agrega más proyectos según sea necesario
  ];
  return (
    <div className="flex flex-wrap      >
    justify-center m-2 ">
 
    {projects.map((project, index) => (
      <Cards key={index} {...project} />
    ))}
  </div>
  )
}
