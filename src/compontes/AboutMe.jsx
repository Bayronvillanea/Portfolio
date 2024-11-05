import  { useEffect } from 'react';
export default function AboutMe() {
  useEffect(() => {
    // Desplaza la página al principio cuando se carga
    window.scrollTo(0, 0);
  }, []);
  const titleStyles = {
    fontSize: '2rem',
    fontWeight: 'bold',
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 max-w-screen-lg mx-auto">
      <div className="p-8">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-textcards" style={titleStyles}>
            About Me
          </h1>
          <p className="text-enlace ">
          <p className="mb-5">👋 Greetings, I am Bayron Villanea, a Software Engineering. My focus is on self-taught exploration of technology, with a firm commitment to continuous improvement, both personally and professionally. </p>
          <p className="mb-5">
          👨‍💻 Currently, I am immersed in my Software Engineering studies, pursuing the goal of expanding my knowledge in this discipline. I aspire to be part of an organization that shares my values and gives me the opportunity to learn through solid internships and professional challenges.</p>

          My dedication and focus on constant learning are fundamental pillars that drive my growth, and I am willing to take on new challenges with enthusiasm and determination.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-4xl font-bold mb-4 text-textcards" style={titleStyles}>
            Work Experience
          </h2>
          <p className="text-l font-bold  text-enlace">Web developer</p>
          <p className="text-l font-bold mb-4 text-enlace">American Roofing Solutions(Company)</p>
          <p className="text-enlace mb-4">
          Create the website from start to finish using a clean structure for the company and the client's needs as a web developer using technologies on the current market such as React.js and Tailwind.
          </p>



          <p className="text-l font-bold  text-enlace">Professional experience</p>
          <p className="text-l font-bold mb-4 text-enlace">Tienda Vargas(Company)</p>
          <p className="text-enlace">
            Make the operation of Moodle implementing the languages HTML, CSS which used a database to manage internal users. Implement the realization of a video game using C# programming language and Unity engine.
          </p>
          <p className="text-l font-bold mt-4 text-enlace">Academic experience</p>
          <p className="text-enlace">
        
          Creation of a real estate website: Using Html, css, js, php and sql
          technologies.<br/>
          Creation of a bank: Using technologies with Java.<br/>
          Creation of videogames: Creation of the Hollow Knight using C#
          and unity.

          </p>
        </div>

        <div className="mt-5">
          <h2 className="text-4xl font-bold mb-4 text-textcards" style={titleStyles}>
            Education
          </h2>
          <ul className="text-enlace">
            <li>International University of the Americas (started in 2022)</li>
            <li>CTP Santo Cristo de Esquipulas High School (Graduated in 2021)</li>
            <li>Escuela presbítero Manuel Bernardo Gómez (Primary finished in 2014)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
