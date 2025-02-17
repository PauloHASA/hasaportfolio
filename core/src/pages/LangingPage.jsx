import "../styles/LandingPage.css"

import { Link } from "react-router-dom";
import { useState } from "react";

import HeaderGlobal from "./HeaderGlobal"
import translations from "../data/translations.json"

function LandingPage() {
  const [language, setLanguege] = useState('pt');

  return(
    <>
      <HeaderGlobal />
      <main  className="flex display-flex-column main-landingPage">
        <div className="row flex">
          <div className="col principal-container">
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
      </main>
    </>
  );
}

export default LandingPage;