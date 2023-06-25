import React from 'react'


import '../../../styles/About/Route/Graduation.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Graduation = () => {
    return (
        <>
            <div className="graduation">
                <div className="graduation__container">
                    <div className="graduation__header">
                        <h2 className="graduation__number">0<span>4</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">E<span>ngineering</span>.</h1>
                    </div>

                    <div className="graduation__description">
                        <h1>Maltepe University</h1>
                        <h2><FontAwesomeIcon icon={faCalendarDays} className="internships__calendar" />&nbsp;&nbsp;19/08/2019 - 31/07/2022</h2>
                        <p>Bachelor Degree in Computer Engineering.</p>
                    </div>
                    <div className="graduation__description">
                        <h1>TH Köln (FachhochSchule Köln)</h1>
                        <h2><FontAwesomeIcon icon={faCalendarDays} className="internships__calendar" />&nbsp;&nbsp;01/03/2021 - 31/08/2021</h2>
                        <p> <span>Erasmus+ Learning</span> as an Exchange Student in 'TH Köln (FachhochSchule Köln)'.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Graduation