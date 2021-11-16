
import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import Navbar from "./components/Navbar"
import Aboutme from './components/Aboutme'
import Skills from "./components/Skills";
import ProjectContainer from "./components/ProjectContainer";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
library.add(fab)

function App() {
  return (
  <>
    <Navbar />
    <Aboutme/>
    <Skills/>
    <ProjectContainer/>
  </>


  );
}

export default App;
