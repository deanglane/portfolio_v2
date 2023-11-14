import "./App.css";

import StickyNavbar from "./components/StickyNavbar";

function App() {
   
  return (
    <>
      <StickyNavbar />

			<header>
        <div className="wrapper header_hero">
          <div className="intro">
            <h1>Hi, My name is Dean</h1>
            <p>Front-end Developer</p>
            <p>Critical Thinker</p>
            <p>Creative Genius...</p>
          </div>

        </div>
      </header>

      <main>
        <section className="about_me" id="about_me">
          <div className="wrapper">
            <h2>about</h2>
            <p>Hi there! I'm a Web and App Developer with a unique background in food & beverage manufacturing and leadership. My journey has been an exciting blend of culinary arts and tech innovation, resulting in a distinctive, yet vast, skill set that I bring to the table.</p> 

            <p>What truly distinguishes me is my capacity for refining my skills through relentless self-improvement and an insatiable thirst for acquiring new and exciting abilities.</p>
          </div>
        </section>

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

