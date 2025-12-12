import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Nav = ({ activeNav, toggleNav }) => {
  // selectors
  const user = useSelector((state) => state.main.user);
  return (
    <div className={`${activeNav && "active"} header__nav`}>
      <nav>
        <ul>
          <li onClick={toggleNav}>
            <NavLink activeclassname="is-active" to="/exam">
              Exam
            </NavLink>
          </li>
          <li onClick={toggleNav}>
            <NavLink activeclassname="is-active" to="/result">
              Result
            </NavLink>
          </li>
          {!user ? (
            <li onClick={toggleNav}>
              <NavLink activeclassname="is-active" to="/">
                Login
              </NavLink>
            </li>
          ) : (
            <li onClick={toggleNav}>
              <NavLink activeclassname="is-active" to="/">
                Logout
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
