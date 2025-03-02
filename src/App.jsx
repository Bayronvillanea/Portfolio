import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './compontes/Header';
import Section from './compontes/Section';
import Projects from './compontes/Projects';
import Skills from './compontes/Skills';
import Footer from './compontes/Footer';
import AboutMe from './compontes/AboutMe';
import Home from './compontes/Home';
import Stack from './compontes/Stack';
import Works from './compontes/Works';
import Contact from './compontes/Contact';
import Certificaciones from './compontes/Certificaciones';

function App() {
  return (
   
    <Router className="bg-gray-900">
    <Header />
   
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Section />} />
      <Route path="/" element={<Skills />} />
      <Route path="/" element={<Projects />} />
      <Route path="/" element={<Footer />} />
      <Route path="/stack" element={<Stack />} />
      <Route path="/works" element={<Works />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/Certificaciones" element={<Certificaciones />} />
  
    </Routes>
  </Router>
  );
}

export default App;
