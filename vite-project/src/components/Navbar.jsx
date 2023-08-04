import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import CloseMenu from "../assets/close.svg";
import BurgerMenu from "../assets/burger.svg";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const links = [
    "Acasa",
    "Despre",
    "Servicii",
    "Produse",
    "Cariere",
    "Contact",
  ];

  const renderLinks = links.map((link, index) => (
    <li
      key={index}
      className={
        link === "Cariere"
          ? "navbar__link navbar__link--orange"
          : "navbar__link"
      }
    >
      <Link to={`/${link.toLowerCase()}`}>{link}</Link>
    </li>
  ));

  const handleLogoClick = () => {
    console.log("Logo clicked!");
    // Add Route to homepage
  };

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="navbar">
      <div className="navbar__container">
        <p className="navbar__logo" onClick={handleLogoClick}>
          Logo
        </p>
        <div className="menu__icon" onClick={handleClick}>
          <img
            className="menu__icon__img"
            src={click ? CloseMenu : BurgerMenu}
            alt=""
          />
        </div>
        <ul className={`navbar__menu ${click ? "active" : ""}`}>
          {renderLinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
