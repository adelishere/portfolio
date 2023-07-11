import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import "./style/phoneView.css"


function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      {/* the footer is in the contact page */}
    </div>
  );
}

export default App;
