import "../styles/LandingPage.css"

import { Link } from "react-router-dom";
import { useState } from "react";

import HeaderGlobal from "./HeaderGlobal"
import translations from "../data/translations.json"

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Images from "../assets/imagesMaps";


function LandingPage() {
  const [language, setLanguage] = useState('pt');

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    
  };

  return(
    <>
      <main  className="flex display-flex-column main-landingPage">
        <HeaderGlobal language={language} setLanguage={handleLanguageChange} />
        <div className="row flex justify-content-md-center row-fullpage">
          <div className="col-9">
            <div className="fullPage homePage" id="homePage">
            <section>
              <h4> {translations[language].greeting} <span>{translations[language].name}</span></h4>
              <div className="border-line"></div>
              <div className="animation-txt">
                <p> {translations[language].professional} <span>{translations[language].fullstack}</span></p>
                <p> {translations[language].professional} <span>{translations[language].frontend}</span></p>
                <p> {translations[language].professional} <span>{translations[language].backend}</span></p>
              </div>
            </section>
            </div>
            <div className="fullPage aboutMe" id="aboutMe">

              <div className="row">
                <div className="col-3">

                </div>

                <div className="col col-txt-aboutMe">
                  <h1>{translations[language].about}</h1>
                  <div className="border-line"></div>
                  <p>{translations[language].about_me_one}</p>
                  <p>{translations[language].about_me_two}</p>
                  <footer>
                    <button 
                    className="see-more"
                    onClick={() => window.location.href = '/about'}
                    >                
                      {translations[language].button_experience}                
                    </button>
                    <button 
                      className="see-projects"
                      onClick={() => window.location.hash = '#projectsPage'}
                    >
                      {translations[language].button_projects}                
                    </button>
                  </footer>

                </div>
              </div>
              


            </div>
            <div className="fullPage projectsPage" id="projectsPage">
              Projects
            </div>
          </div>
        </div>
        {/*

        <div className="row flex">
          <div className="col principal-container">

          </div>
          <div className="col-1 nav-principal">
            <nav className="display-flex-column">
              <Link to={"/"} className="tooltip-container">
                <i className="bi bi-house"></i>
                <i className="bi bi-house-check-fill icon-hover"></i>
                <span className="tooltip-text">{translations[language].home}</span>
              </Link>
              <Link to={"/about"} className="tooltip-container">
                <i className="bi bi-person"></i>
                <i className="bi bi-person-fill-check icon-hover"></i>
                <span className="tooltip-text">{translations[language].about}</span>
              </Link>
              <Link to={"/project"} className="tooltip-container">
                <i className="bi bi-columns"></i>
                <i className="bi bi-columns-gap icon-hover"></i>
                <span className="tooltip-text">{translations[language].project}</span>
              </Link>
              <Link to={"/contact"} className="tooltip-container">
                <i className="bi bi-envelope"></i>
                <i className="bi bi-envelope-check-fill icon-hover"></i>
                <span className="tooltip-text">{translations[language].contact}</span>
              </Link>
            </nav>
          </div>
        </div>
        */}

      </main>
    </>
  );
}

export default LandingPage;