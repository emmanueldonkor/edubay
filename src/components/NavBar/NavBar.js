
import { useState, useEffect } from "react";
import { navLinks } from "../../data";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

function NavBar() {
  const [toggle, setToggle] = useState(true);
  const [navColor, setNavColor] = useState("transparent");

  const toggling = () => {
    setToggle((oldState) => !oldState);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY > 0) {
        setNavColor("window-scroll");
      } else {
        setNavColor("transparent");
      }
    };
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <nav className={navColor}>
      <div className="container nav__container">
        <NavLink to="/">
          <h4>EduBay</h4>
        </NavLink>
        <div className="hamburger" onClick={toggling}>
          {!toggle ? (
            <button id="close-menu-btn">
              <FaTimes />
            </button>
          ) : (
            <button id="open-menu-btn">
              <FaBars />
            </button>
          )}
        </div>
        <ul className={toggle ? "nav__menu active " : "nav__menu"}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.text === "home" ? "/" : `/${link.text}`}
                onClick={toggling}
                
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;