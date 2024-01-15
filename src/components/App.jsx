import Navbar from './navbar/Navbar'
import Competences from './competence/Competences'
import pythonProject from './projet/listProjects'
import { phpProject } from './projet/listProjects'
import Project from './projet/Project'
import Footer from './footer/Footer'
import Presentation from './presentation/Presentation'
import Header from './header/Header'
import "./App.css"



function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Presentation />
      <Competences />
      <Project python={pythonProject} php={phpProject}/>
      <Footer />
    </div>
  )
}

export default App