import React from "react";
import "../../App.css";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  return (
    <nav className="Header">
      <NavLink className="navLinks" exact to="/" activeClassName="ActiveHome">
        <FontAwesomeIcon icon={faHamburger} />
      </NavLink>
      <NavLink className="navLinks" exact to="/search" activeClassName="ActiveSearch">
        <FontAwesomeIcon icon={faSearch} />
      </NavLink>
      <NavLink className="navLinks" exact to="/recipe" activeClassName="ActiveBook">
        <FontAwesomeIcon icon={faBookOpen} />
      </NavLink>
      <NavLink className="navLinks" exact to="/favorites" activeClassName="ActiveFav">
        <FontAwesomeIcon icon={faHeart} />
      </NavLink>
    </nav>
  );
};

export default Header;
