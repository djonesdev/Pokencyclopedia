import React from "react";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <img
            className="header__logo"
            src="/Pokemon-Logo.png"
            alt="pokemon-logo"
          />
        </div>
        <p className="header__title">Pokedex</p>
      </div>
    </header>
  );
}

export default Header;
