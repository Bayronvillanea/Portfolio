import links from "../img/links.svg";
import githubicon from '../img/githulink.svg'

export default function Cards({ image, title, description, technologies, githubLink, demoLink }) {
  return (
    <div className="w-72 mx-2 mb-5 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 text-white">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
    <div className="p-4">
      <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
      <p className="text-gray-300 mb-2">{description}</p>
      <p className="text-sm text-gray-400">Technologies: <span className="text-gray-200">{technologies}</span></p>
      <div className="mt-4 flex items-center space-x-4">
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition duration-200">
          <img src={githubicon} alt="GitHub" className="w-5 h-5 mr-2" />
          <span className="text-sm">View Code</span>
        </a>
        <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition duration-200">
          <img src={links} alt="Demo" className="w-5 h-5 mr-2" />
          <span className="text-sm">Live Preview</span>
        </a>
      </div>
    </div>
  </div>
  );
}
