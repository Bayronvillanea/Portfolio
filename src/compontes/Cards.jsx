import links from "../img/links.svg";
import githubicon from '../img/githulink.svg'

// Container para las cards (debes envolver las Cards con este componente)
export function CardsContainer({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  );
}

// Componente Card individual
export default function Cards({ image, title, description, technologies, githubLink, demoLink }) {
  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02] group">
      <div className="overflow-hidden rounded-t-xl h-52">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
          {title}
        </h2>
        
        <p className="text-gray-300 mb-4 leading-relaxed flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.split(', ').map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-700 rounded-full text-sm text-blue-200 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-gray-700 pt-4">
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300 flex-1 mr-2 text-center"
          >
            <img src={githubicon} alt="GitHub" className="w-5 h-5 mr-2 inline" />
            <span className="text-sm font-medium">Code</span>
          </a>
          
          <a 
            href={demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-all duration-300 flex-1 ml-2 text-center"
          >
            <img src={links} alt="Demo" className="w-5 h-5 mr-2 inline filter brightness-0 invert" />
            <span className="text-sm font-medium">Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}