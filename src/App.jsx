// Styling CSS
import "./App.css";

// Components
import StickyNavbar from "./components/StickyNavbar.jsx";
import About from "./components/About.jsx";
import Header from "./components/Header.jsx";

function App() {
   
  return (
    <>
      <StickyNavbar />

			<Header />
      
      <main>
        <About />

        <section className="projects" id="projects">
          <div className="wrapper">
            <h2>projects</h2>

          </div>
        </section>

        <section className="tech_stack" id="tech_stack">
          <div className="wrapper">
            <h2>skills</h2>

          </div>
        </section>

        <section className="wrapper contact_me" id="contact_me">
          <h2>contact</h2>
        </section>     
        
      </main>
      <footer>

      </footer>

    </>
  
  )

}

export default App;

// todo - import all images to asset folder - look at battle rockets for correct import code

