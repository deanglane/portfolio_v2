// About.jsx

import junoLogo from "../assets/juno.png";

const About = () => {
  return (
    <section className="about_me" id="about_me">
          <div className="wrapper aboutContent">
            <h2>about</h2>
            <div className="about">
              <p>Hi there! I'm a Web and App Developer with a unique background in food & beverage manufacturing and leadership.</p> 

              <p>My journey has been an exciting blend of culinary arts and tech innovation, resulting in a distinctive, yet vast, skill set that I bring to the table.</p> 

              <p>What truly distinguishes me is my capacity for refining my skills through relentless self-improvement and an insatiable thirst for acquiring new and exciting abilities.</p>
              <div className="aboutImage">
                <img src={junoLogo} alt="Juno College logo" />
              </div>
            </div>
          </div>
        </section>
  )
}

export default About