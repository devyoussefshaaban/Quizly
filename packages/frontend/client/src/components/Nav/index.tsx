import type { FC } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../routes/config";
import "./index.scss"

interface IProps {
  activeNav: boolean;
  toggleNav: () => void;
}

const Nav: FC<IProps> = ({ activeNav, toggleNav }) => {
  console.log(activeNav);
  return (
    <nav className={`${activeNav && "active"}`}>
      <ul>
        {
          navLinks.map((link, index) => (
            <li key={index} onClick={toggleNav} className="nav__link">
              <NavLink to={link.path}>
                {link.name}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default Nav;
