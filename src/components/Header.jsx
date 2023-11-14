// Header.jsx

// Library Imports 

import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';



const Header = () => {

  const [textColor, setTextColor] = useState('')

  return (
    <header>
      <div className="wrapper header_hero">
          <div 
            className="intro"
            style={{fontSize: '2em'}}
          >
            <TypeAnimation 
              sequence={[
                'I\'m a Thinker',
                1000,
                'I\'m a Designer',
                1000,
                'I\'m a Planner',
                1000,
                'I\'m a Life Long Learner',
                1000,
                'Hello, I\'m '
              ]}
              repeat={0}
              speed={50}
              cursor={false}
              />
              <span
                style={{ color: textColor}}
              >
                <TypeAnimation
                  sequence={[
                    9500,
                    () => {
                      setTextColor('orange');
                    },
                    'Dean Lane',
                  ]}
                repeat={0}
                speed={40}
                cursor={false} 
                />
              </span>
                <div>
                  <TypeAnimation 
                sequence={[
                  11000,
                  'I\'m a ',
                ]}
                repeat={0}
                speed={40}
                cursor={false}
                />
                  <span
                    style={{ color: textColor}}
                  >
                    <TypeAnimation
                      sequence={[
                        11400,
                        () => {
                          setTextColor('orange');
                        },
                        'Front-End Developer',
                      ]}
                      cursor={false}
                      repeat={0}
                      speed={40}
                    />
                  </span>
                </div>

          </div>        
      </div>
    </header>
  )
}

export default Header