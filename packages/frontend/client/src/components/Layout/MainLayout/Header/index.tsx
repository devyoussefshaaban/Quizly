import MenuIcon from "/icons/menu-icon.svg"
import CloseIcon from "/icons/close-icon.svg";
import { useState } from "react";
import Logo from "/images/logo.svg"
import { Link } from "react-router-dom";

import "./index.scss";
import Nav from "../../../Nav";


const Header = () => {
  const [activeNav, setActiveNav] = useState(false);

  const toggleNav = () => {
    setActiveNav((ps) => !ps);
  };

  return (
    <header>
      <div className="header__logo">
        <Link to="/">
          <img src={Logo} alt="Quizly Logo" style={{ width: "200px", height: "200px", objectFit: "contain" }} />
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
