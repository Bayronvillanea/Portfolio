
   import Header from './Componentes/Header.jsx' 
   import Main from './Componentes/Main.jsx';
   import About from './Componentes/About.jsx';
   import Skills  from './Componentes/Skills.jsx';
   import Portfolio from './Componentes/Portfolio.jsx';
   import ContactMe from './Componentes/ContactMe.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Skills />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

export default App;
