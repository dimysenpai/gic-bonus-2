import React from "react";
import Logo from "../assets/images/GIC_BONUS_LOGO.png";
import LogoT from "../assets/images/GIC_BONUS_TEXT.png";

function Header() {
  return (
    <div className="p-10 bg-black">
      <div>
        <img src={Logo} alt="Logo" />
        <img src={LogoT} alt="Logo" />
      </div>
      <div>
        <ul>
          <a href="">
            <li>Accueil</li>
          </a>
          <a href="">
            <li>Services</li>
          </a>
          <a href="">
            <li>Formations</li>
          </a>
          <a href="">
            <li>A Propos</li>
          </a>
        </ul>
      </div>
      <div>
        <button>Inscription</button>
        <button>Connexion</button>
      </div>
    </div>
  );
}

export default Header;
