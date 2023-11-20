// Styling CSS
import "./App.css";

// Components
import StickyNavbar from "./components/StickyNavbar.jsx";
import About from "./components/About.jsx";
import Header from "./components/Header.jsx";
import Projects from "./components/Projects.jsx";
import TechStack from "./components/TechStack.jsx";
import Contact from "./components/Contact.jsx";

function App() {
   
  return (
    <>
      <StickyNavbar />

			<Header />
      
      <main>
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <footer>

      </footer>

    </>
  
  )

}

export default App;

// todo - import all images to asset folder - look at battle rockets for correct import code

