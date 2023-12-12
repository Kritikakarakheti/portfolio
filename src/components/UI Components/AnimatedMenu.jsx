import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../App.css";
import { Link } from "react-router-dom";

const AnimatedMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="menu-container">
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes className="text-blue-500" />
          ) : (
            <FaBars className="text-blue-500" />
          )}

          <CSSTransition
            in={menuOpen}
            timeout={300}
            classNames="menu-slide"
            unmountOnExit
          >
            <div className="menu text-center">
              <ul className="space-y-5">
                <li>
                  <Link to="/">Home</Link>
                </li>
                {/*  */}
                <li>
                  <Link to="/biography">Biography</Link>
                </li>
                {/*  */}
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                {/*  */}
                <li>
                  <Link to="/research">Research</Link>
                </li>
                {/*  */}
                <li>
                  <Link to="/honors">Honors</Link>
                </li>
                {/*  */}
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                {/*  */}
                <li>
                  <Link to="/gallary">Gallary</Link>
                </li>
              </ul>
            </div>
          </CSSTransition>
        </div>
      </div>
    </>
  );
};

export default AnimatedMenu;
