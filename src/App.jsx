import "./App.css";

function App() {
  return (
    <>
      <nav>
        <div className="menu wrapper">
          <p className="logo">DEAN LANE</p>
          <ul>
            <li>
              <a href="#about_me">about me</a>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>
            <li>
              <a href="#tech_stack">tech stack</a>
            </li>
            <li>
              <a href="#contact_me">contact me</a>
            </li>
          </ul>
        </div>
      </nav>

			<header className="wrapper">
      <div className="header_hero">
        <div className="intro">
          <h1>Hi, My name is Dean</h1>
          <p>Front-end Developer</p>
          <p>Critical Thinker</p>
          <p>Creative Genius...</p>
        </div>

        <div className="hero_image">
          <div className="hire_me">HIRE ME</div>
          <div className="img imgP"></div>
        </div>
      </div>

      </header>

      <main>
        <section className="wrapper about_me" id="about_me">
          <h2>about me</h2>
          <p>I am a person who is eager to take on new and exciting challenges. Im a front-end developer. I build webpages and applications for the internet that are engaging, responsive and most importantly accessible. One of my favorite passions is learning and acquiring new skill sets that I can apply into my life and career.</p>
        </section>

        <section className="wrapper projects" id="projects">
          <h2>projects</h2>
        </section>

        <section className="wrapper tech_stack" id="tech_stack">
          <h2>tech stacks</h2>
        </section>

        <section className="wrapper contact_me" id="contact_me">
          <h2>contact me</h2>
        </section>     
        
      </main>
      <footer>

      </footer>

    </>
  
  )

}

export default App;

// todo - import all images to asset folder - look at battle rockets for correct import code

