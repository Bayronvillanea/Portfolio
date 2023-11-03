import links from "../img/links.svg";
import githubicon from '../img/githulink.svg'

export default function Cards({ image, title, description, technologies, githubLink, demoLink }) {
  return (
    <div className="w-72 mx-2 mb-5 bg-fondo rounded-lg shadow-lg text-textcards">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-2">
        <h2 className="text-2xl font-semibold text-ccc">{title}</h2>
        <p className="text-textcards">{description}</p>
        <p className="mt-2 text-sm">Tecnologías: {technologies}</p>
        <div className="mt-4 flex items-center space-x-2">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text- hover:text-gray-400">
            <img src={githubicon} alt="GitHub" className="w-4 h-4 mr-2" />
            View Code
          </a>
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-gray-400 ">
            <img src={links} alt="Demo" className="w-4 h-4 mr-2" />
            Live Preview
          </a>
        </div>
      </div>
    </div>
  );
}
