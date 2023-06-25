import React from "react";
import { Link } from "react-router-dom";

import "../../styles/About/About.scss";

const About = () => {

  return (
    <>
      <div className="about" id="about">
        <div className="about__container">
          <div className="about__header" id="about__heading">
            <h1 data-aos="fade-down" data-aos-delay="0" data-aos-offset="20">
              <span
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-offset="200"
              >
                A
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-offset="200"
              >
                B
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                O
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                U
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="800"
                data-aos-offset="200"
              >
                T
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-offset="200"
              >
                .
              </span>
            </h1>
            <p></p>
          </div>

          <div className="about__details-container">
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="50"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <Link to="/about/internships">
                <h1>
                  0<span>1</span>
                </h1>
                <h2>
                  I<span>nternships</span>
                </h2>
                <p>
                  <li>
                    <span>Profilo Payment Systems</span><br/> &nbsp; -Intern Embedded Software Engineer
                  </li>
                  <br />
                  <div style={{ display: "flex", justifyContent: "left" }}>
                <button>
                  Click For more info
                  </button>
                  </div>
                </p>
              </Link>
            </div>
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="-180"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <Link to="/about/experience">
                <h1>
                  0<span>3</span>
                </h1>
                <h2>
                  E<span>xperience</span>
                </h2>
                <p>
                  <li><span>Profilo Payment Systems</span> <br/> &nbsp; R&D Embedded Software Enginner </li>
                  <br />
                  <div style={{ display: "flex", justifyContent: "left" }}>
                <button>
                  Click For more info
                  </button>
                  </div>
                </p>
              </Link>
            </div>

            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="-180"
              data-aos-delay="700"
              data-aos-once="true"
            >
              <Link to="/about/graduation">
                <h1>
                  0<span>2</span>
                </h1>
                <h2>
                  C<span>ollage</span>
                </h2>
                <p>
                <li><span>Maltepe University</span>&nbsp; Computer Engineering(English)  </li>
                <li><span>TH Köln</span> &nbsp; Informatic(German)  </li>
                <div style={{ display: "flex", justifyContent: "left" }}>
                <button>
                  Click For more info
                  </button>
                </div>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
