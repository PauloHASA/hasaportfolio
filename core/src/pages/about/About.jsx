import React from "react";

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";


import HeaderGlobal from "../HeaderGlobal"
import translations from "../../data/translations.json"
import images from "../../assets/imagesMaps"


import "../../styles/About.css"


function About(){
    const [language, setLanguege] = useState('pt');
    const location = useLocation();
    const isMyExperience = location.hash === '#my-experience';
  
  return(
    <>
      <HeaderGlobal />
      <div className="flex display-flex-column body-aboutMe">
        <div className="back-to-pages">
          <Link to={"/"}>
            {translations[language].home}
          </Link>

          <Link onClick={() => window.location.hash = '#about-me'}>
            <p>/</p>
            {translations[language].about}
          </Link>

          {isMyExperience && (            
            <Link onClick={() => window.location.hash = '#about-me'}>
              <p>/</p>
              {translations[language].button_experience}
            </Link>
          )}          
        </div>

        <div className="body-page-aboutMe">

          <div className="row full-page" id="about-me">
            <div className="col">

            </div>
            <div className="col display-flex-column  col-txt-aboutMe">
              <h1>{translations[language].about}</h1>
              <div className="border-line"></div>
              <p>{translations[language].about_me_one}</p>
              <p>{translations[language].about_me_two}</p>
              <footer>
                <button 
                  className="see-more"
                  onClick={() => window.location.hash = '#my-experience'}
                >
                  {translations[language].button_experience}                
                </button>
                <button 
                  className="see-projects"
                  onClick={() => window.location.href = '/project'}
                >
                  {translations[language].button_projects}                
                </button>
              </footer>
            </div>
          </div>

          <div className="row justify-content-md-center full-page" id="my-experience">
            <div className="col-8">
              <div className="my-skills">
                <h1 className="title-aboutMe">{translations[language].title_tecnologies}</h1>
                <div className="body-mySkills">
                  <main>
                    <div className="box background-glass">
                      <img src={images.logos.vite} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.react} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.html5} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.css3} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.javascript} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.typescript} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.nextjs} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.bootstrap} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.tailwind} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.python} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.docker} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.git} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.kubernetes} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.github} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.bitbucket} alt="" />
                    </div>
                  </main>
                </div>
              </div>

              <h1 className="title-aboutMe" >{translations[language].title_experience}</h1>

              <div className="row experience-professional">                
                <div className="col">
                  <div className="display-flex-column background-glass experience-box">
                    <header>
                      <div className="logo">
                        <img src={images.logos.on_icon} alt="" />
                      </div>
                      <div className="name logo-ouronova">
                        <img src={images.logos.logo_ouronova} alt="" />
                      </div>
                    </header>
                    <main className="flex">
                      {translations[language].description_on}
                    </main>
                    <footer className="row">
                      <div className="col-3">
                        <p>{translations[language].skills}</p>
                      </div>
                      <div className="col">
                        <p>Python · Django · Bootstrap5 · CSS3 · React.js · Vite · JavaScript · GitHub · Docker</p>
                      </div>
                    </footer>
                  </div>
                </div>
                <div className="col">
                  <div className="display-flex-column background-glass experience-box">
                    <header>
                      <div className="logo">
                        <img src={images.logos.plusoft_logo} alt="" />
                      </div>
                      <div className="name">
                        <img src={images.logos.logo_plusoft} alt="" />
                      </div>
                    </header>
                    <main className="flex">
                      {translations[language].description_plusoft}

                    </main>
                    <footer className="row">
                      <div className="col-3">
                        <p>{translations[language].skills}</p>
                      </div>
                      <div className="col">
                        <p>Django · Docker · Git · Desenvolvimento de API · Django REST Framework · Python · Kubernetes · Social Media API</p>
                      </div>
                    </footer>
                  </div>
                </div>
              </div>

              <div className="row experience-professional">                
                <div className="col">
                  <div className="display-flex-column background-glass experience-box">
                    <header className="roma-experience">
                      <div className="name logo-ouronova">
                        <img src={images.logos.logo_gruporomap} alt="" />
                      </div>
                    </header>
                    <main className="flex">
                      <p>{translations[language].description_roma}</p>

                    </main>
                    <footer className="row">
                      <div className="col-3">
                        <p>{translations[language].skills}</p>
                      </div>
                      <div className="col">
                      <p>Python · VBA · HTML5 · CSS3 </p>
                      </div>
                    </footer>
                  </div>
                </div>

                <div className="col">
                  <div className="display-flex-column background-glass experience-box">
                    <header>
                      <div className="">
                        <h2>Freelancer</h2>
                      </div>
                      <div className="">
                        
                      </div>
                    </header>
                    <main className="flex">
                      <p>{translations[language].description_freelancer}</p>

                    </main>
                    <footer className="row">
                      <div className="col-3">
                        <p>{translations[language].skills}</p>
                      </div>
                      <div className="col">
                      Bootstrap · CSS3 · Docker · Git · GitHub · HTML5 · JavaScript · Kubernetes · Python · React · TypeScript · Tailwind · Vite · Bitbucket · Next.js
                      </div>
                    </footer>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default About;