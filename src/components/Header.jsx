import React from "react";
import Logo from "../assets/images/GIC_BONUS_LOGO.png";
import LogoT from "../assets/images/GIC_BONUS_LOGO.png";

function Header() {
  return (
    <div>
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div>Nav</div>
      <div>login</div>
    </div>
  );
}

export default Header;
