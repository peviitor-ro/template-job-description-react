import "../App.css";
import BurgerMenu from "../assets/burger.svg";
import CloseMenu from "../assets/close.svg";
import Navbar from "./Navbar";
import { useState } from "react";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <header>
      <div className="header__wrapper">
        <a href="/" className="logo__anchor">
          <p className="logo">Logo</p>
        </a>
        <div className="menu__icon" onClick={handleClick}>
          <img
            className="menu__img"
            src={click ? CloseMenu : BurgerMenu}
            alt=""
          />
        </div>
        <Navbar click={click} />
      </div>
    </header>
  );
};

export default Header;
