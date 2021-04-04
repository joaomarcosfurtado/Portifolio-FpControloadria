import logoIMG from '../../assets/images/logo.png'
import landingIMG from '../../assets/images/landing.png'

import { Link } from 'react-router-dom'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'

import './styles.css'
import { useState } from 'react'


function Landing() {
 
  return (
    <div id="page-landing">
      
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoIMG} alt="" />
          <h2>Sua empresa de consultorias</h2>

        </div>

        <img 
          src={landingIMG} 
          alt="Plataforma de Estudos" 
          className="hero-image"
        />
 
        <div className="buttons-container">
          <Link to="/home-page" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Página Inicial
          </Link>
          
          <Link to="carrer" className="give-classes">
            <img src={giveClassesIcon} alt="Estudar"/>
            Nossa História
          </Link>

        </div>

        <span className="total-connections">
          <Link to="accounting-information">Clique e saiba mais sobre nossas atuações</Link>
        </span>
      </div>
    </div>
  );
}

export default Landing;