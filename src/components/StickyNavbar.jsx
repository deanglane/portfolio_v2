// StickyNavbar
// Component for top navigation menu
import { useState, useEffect } from 'react';

const StickyNavbar = () => {

  const [isSticky, setIsSticky] = useState(false);

  console.log("scroll position in px", window.scrollY );
  console.log( 'inner HEight', window.innerHeight );
  useEffect(() => {


    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // conditional to change isSticky state to either true or false based on the scrollY position being grater than the innerHeight of the window
      setIsSticky(scrollPosition > window.innerHeight || isSticky);
    }; 

    // Adding event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Removing event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  },[isSticky]);

  // Navigation Menu
  return (
    // Ternary Expression to apply the "sticky" label to the nav className
     <nav className={isSticky ? 'sticky' : ''}>
        <div className="navigation wrapper">
          <div className="logo">
            <h1 className="firstName">DEAN <span className="lastName">LANE</span></h1>
          </div>
          <ul className="menu">
            <li>
              <a href="#about_me">about</a>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>
            <li>
              <a href="#tech_stack">stack</a>
            </li>
            <li>
              <a href="#contact_me">contact</a>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default StickyNavbar