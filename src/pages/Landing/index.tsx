import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import api from '../../services/api';

import LogoImg from '../../assets/images/logo.svg'
import LandingImg from '../../assets/images/landing.svg'

import StudyIcon from '../../assets/images/icons/study.svg'
import GiveClassesIcon from '../../assets/images/icons/give-classes.svg'
import PurpleHearIcon from '../../assets/images/icons/purple-heart.svg'

import './style.css'

function Landing() {

    const [totalConnections, setTotalConnections] = useState(0)

    useEffect(() => {

        api.get('connections').then(response => {
            const {total} = response.data

            setTotalConnections(total)
        })

    }, [])

    return (
        <section id="page-landing">
            <section id="page-landing-content" className="container">
                <header className="logo-container">
                    <img src={LogoImg} alt="Logo Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </header>

                <img
                    src={LandingImg}
                    alt="Plataforma de estudos"
                    className="hero-image"
                />
                <nav className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={StudyIcon} alt="Estudar"/>
                        <span>Estudar</span>
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={GiveClassesIcon} alt="Dar aulas"/>
                        <span>Dar aulas</span>
                    </Link>

                </nav>
                <span className="total-connections">total de {totalConnections} conexões já realizadas <img src={PurpleHearIcon} alt="Coração Roxo"/></span>


            </section>
        </section>
    );
}

export default Landing;