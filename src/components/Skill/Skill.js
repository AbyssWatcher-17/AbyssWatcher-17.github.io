import React, { useEffect } from 'react';

// Importing TagCloud for  3D Rotating Text Sphere
import TagCloud from 'TagCloud';

import '../../styles/Skill/Skill.scss';

const Skill = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    const container = '.tagcloud';
    let radii;

    // If 3D Text Sphere is not showing up after deployment remove the return (i.e, return() =>{}) function from below code
    return () => {
      const texts = [
        'C',
        'C++',
        'C#',
        'Python',
        'MicroPython',
        'Streamlit',
        'MS SQLServer',
        'SQLite',
        'GIT',
        'GITHUB',
        'Linux'
      ];


      // Decrasing 'radius' value for small screen devices  
      function radiusValue() {
        if (window.screen.width <= 778) {
          radii = 150;
        } else {
          radii = 290;
        }
        return radii;
      }

      const options = {
        radius: radiusValue(),
        maxSpeed: 'normal',
        initSpeed: 'normal',
        keep: true,
      };

      TagCloud(container, texts, options);
    }
  }, []);
  return (
    <>
      <div className="skill">
        <div className="skill__main-container">
          <div className="skill__header" id="skill__heading">
            <h1>
              <span
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-offset="200"
              >
                S
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-offset="200"
              >
                K
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                I
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                L
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="800"
                data-aos-offset="200"
              >
                L
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-offset="200"
              >
                .
              </span>
            </h1>
          </div>
          <div className="skill__inner-container">
            <div className="skill__info">
              <div className="skill__details-container">
                <div className="skill__details">
                  <h4>Microcontrollers</h4>
                  <ul>
                    <li>
                      <span>Raspberry Pi</span>
                    </li>
                    <li>
                      <span>STM32</span>
                    </li>
                    <li>
                      <span>Arduino</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Python</h4>
                  <ul>
                    <li>
                      <span>
                        <b>Frameworks & Libraries:</b> &nbsp;<br/>Nupmy <br/>Pandas <br/>Scikit-Learn <br/>Seaborn <br/>Boosting Algorithms <br/>Flask
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>C#</h4>
                  <ul>
                    <li>
                      <span>
                        <b>Frameworks & Libraries:</b> &nbsp;<br/>DLL <br/>Winform
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Version Control Systems</h4>
                  <ul>
                    <li>
                      <span>GIT</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Deployment Platform</h4>
                  <ul>
                    <li>
                      <span>Streamlit</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>DataBase</h4>
                  <ul>
                    <li>
                      <span>MS SqlServer</span>
                    </li>
                    <li>
                      <span>SqLite</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3D Text Cloud  */}
            <div className="skill__cloud">
              <div className="tagcloud" data-aos="zoom-in-up" data-aos-offset="200"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
