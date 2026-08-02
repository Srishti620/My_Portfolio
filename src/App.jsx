import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"
import Intro from "./Intro"
import BackgroundDecor from "./BackgroundDecor"


function App() {

  return (
    <>
      <Intro/>
      <BackgroundDecor/>
      <Navbar/>
       <Home/>
       < About/>
       <Skills/>
      <Projects/>
      <Contact/>
     
    </>
  )
}

export default App
