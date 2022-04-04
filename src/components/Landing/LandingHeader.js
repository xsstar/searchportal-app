import React from "react";
import Logo from "../../assets/images/tesodev-logo.png";

const LandingPageHeader = () => {
  return (
    <div>
      <img className="landing-header-logo" src={Logo} alt="Tesodev-Logo" />
      <p className="header-swa-p">Search web app</p>
    </div>
  );
};

export default LandingPageHeader;
