import React from "react";
import { Link } from "react-router-dom";

import "../styles/HeaderGlobal.css"

function HeaderGlobal() {
  return(
    <>
      <header className="header-landingPage">
        <div className="icons-socialmedia">
          <Link>
            <i className="bi bi-github"></i>
          </Link>
          <Link>
            <i className="bi bi-linkedin"></i>
          </Link>
          <Link>
            <i className="bi bi-pinterest"></i>
          </Link>
          <Link>
            <i className="bi bi-whatsapp"></i>
          </Link>
        </div>
      </header>

    </>
  );
}

export default HeaderGlobal;