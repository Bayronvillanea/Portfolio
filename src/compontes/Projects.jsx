import Cards from "./Cards";
import start from '../img/start.jpg'
import poke from '../img/poke.png'
import form2 from '../img/form2.png'
import gast from '../img/gast.png'
import POK from '../img/POK.png'
import roofing from '../img/roofing.png'
import marketing from '../img/marketing.png'
import clinica from '../img/clinica.png'
import {motion} from 'framer-motion'

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
    {
      title: 'Pokemón App',
      image: POK ,
      description: 'You can search for your favorite pokemon and see its statistics.',
      technologies: 'React , Tailwind  ',
      githubLink: 'https://github.com/Bayronvillanea/PokeApiReact',
      demoLink: 'https://poke-api-react-psi.vercel.app/',
    },
    {
      title: 'American Roofing Solutions',
      image: roofing ,
      description: 'We carry out installation and maintenance of roofs and exteriors. More than 20 years of experience backs our dedication to quality and customer service in New Jersey.',
      technologies: 'React , Tailwind  ',
      githubLink: '#',
      demoLink: 'https://americanroofingsolutionsnj.com/',
    },
    {
      title: 'Agency Marketing',
      image: marketing ,
      description: 'Creating a website for a digital marketing company for better visibility on the internet.',
      technologies: 'React , Tailwind  ',
      githubLink: 'https://github.com/Bayronvillanea/agencymarketing',
      demoLink: 'https://agencymarketing-seven.vercel.app/',
    },
    {
      title: 'Dental Clinic',
      image: clinica ,
      description: 'Creation of a website for a dental clinic for better visibility on the internet and services offered to its clients showing results.',
      technologies: 'React , Tailwind  ',
      githubLink: 'https://github.com/Bayronvillanea/dentista',
      demoLink: 'https://dentista-beta.vercel.app/',
    },
    
    // Agrega más proyectos según sea necesario
  ];
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12 mt-10">
          <h2 className="text-3xl md:text-5xl md:pb-5 font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-5 pb-2">
            My Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work showcasing various technologies and solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Cards 
                {...project} 
                className="hover:transform hover:-translate-y-2 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
