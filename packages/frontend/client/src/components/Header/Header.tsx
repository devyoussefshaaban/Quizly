import MenuIcon from "../../assets/icons/menu-icon.svg";
import CloseIcon from "../../assets/icons/close-icon.svg";
import { useState } from "react";
import logo from "../../assets/images/logo.png"

import "./Header.scss";
import Nav from "../Nav";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeNav, setActiveNav] = useState(false);

  // toggle nav
  const toggleNav = () => {
    setActiveNav((ps) => !ps);
  };
  return (
    <header>
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="Quizzly Logo" />
        </Link>
      </div>

      <Nav activeNav={activeNav} toggleNav={toggleNav} />

      <div className="buttons-container">
        <Link to="/login">
          <button>Sign In</button>
        </Link>
        <Link to="/login">
          <button className="with-linear-gradient">Register</button>
        </Link>
      </div>


      <div className="header__menu" onClick={toggleNav}>
        {activeNav ? <img src={CloseIcon} alt="Close Icon" /> : <img src={MenuIcon} alt="Menu Icon" />}
      </div>
    </header>
  );
};

export default Header;
