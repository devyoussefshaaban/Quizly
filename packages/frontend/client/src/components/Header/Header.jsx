// Modules & Hooks
import { IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { useState } from "react";
import Nav from "../Nav/Nav.jsx";
// Styles
import "./Header.scss";

const Header = () => {
  const [activeNav, setActiveNav] = useState(false);

  // toggle nav
  const toggleNav = () => {
    setActiveNav((ps) => !ps);
  };
  return (
    <header>
      <div className="header__logo">
        <h1>MCQ</h1>
      </div>
      <Nav activeNav={activeNav} toggleNav={toggleNav} />
      <div className="header__menu" onClick={toggleNav}>
        <IconButton>
          <Menu className="mui-icon" />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
