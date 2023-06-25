import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faInstagram,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import '../../styles/Contact/Contact.scss';
const Contact = () => {

    return (
        <>
            <div className="contact" id='contact'>
                <div className="contact__header">
                    <h1>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="0"
                            data-aos-offset="200"
                        >
                            C
                        </span>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="200"
                            data-aos-offset="200"
                        >
                            O
                        </span>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="400"
                            data-aos-offset="200"
                        >
                            N
                        </span>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="600"
                            data-aos-offset="200"
                        >
                            T
                        </span>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="800"
                            data-aos-offset="200"
                        >
                            A
                        </span>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="1000"
                            data-aos-offset="200"
                        >
                            C
                        </span>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="1200"
                            data-aos-offset="200"
                        >
                            T
                        </span>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="1400"
                            data-aos-offset="200"
                        >
                            .
                        </span>
                    </h1>
                </div>
                <div className="contact__container">
                    <div className="contact__info" data-aos="fade-up">
                        <h3 className="contact__info-title">Let's Connect</h3>
                        <div className="contact__info-details">
                            <ul>
                                <li> <FontAwesomeIcon icon={faLocationDot} size="2x" /><p><span>Address:&nbsp;&nbsp;</span>Istanbul,Turkey</p></li>
                                <li> <FontAwesomeIcon icon={faEnvelope} size="2x" /><p><span>Email:&nbsp;&nbsp;</span>    <span
      style={{ color: "white", textDecoration: "underline", cursor: "pointer" }}
      onClick={() => window.open("mailto:yavuzgokmene@hotmail.com")}
    >
      yavuzgokmene@hotmail.com
    </span></p></li>
                            </ul>
                        </div>
                        <div className="contact__social">
                            <p className="contact__linkedin">
                                <a href="https://www.linkedin.com/in/myavuzgokmen/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                            </p>

                            <p className='contact__github'>
                                <a href="https://github.com/AbyssWatcher-17" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                            </p>
                            <p className='contact__instagram'>
                                <a href="https://www.instagram.com/yavuz.gokmen17/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                            </p>
                            <p className='contact__twitter'>
                                <a href="https://twitter.com/MYavuzGkmn_17" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
