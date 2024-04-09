import React from "react";
import headerLogo from "../../../assets/images/header-logo.svg";

const NavBar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29}></img>
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
