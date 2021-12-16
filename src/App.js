
import "bootstrap/dist/css/bootstrap.css"
import Navbar from "./components/Navbar"
import Aboutme from './components/Aboutme'
import Skills from "./components/Skills";
import ProjectContainer from "./components/ProjectContainer";
import ContactMe from "./components/ContactMe"
import Footer from "./components/Footer";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import './App.css';
library.add(fab)

function App() {
  return (
  <>
    <Navbar />
    <Aboutme/>
    <Skills/>
    <ProjectContainer/>
    <ContactMe/>
    <Footer />
  </>


  );
}

export default App;
