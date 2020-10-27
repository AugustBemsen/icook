import React from "react";
import "../../App.css";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faUser, faHeart , faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  return (
    <nav className="Header">
      <NavLink className="navLinks" exact to="/" activeClassName="ActiveHome">
        <FontAwesomeIcon icon={faHamburger} />
      </NavLink>
      <NavLink className="navLinks" exact to="/search" activeClassName="ActiveSearch">
        <FontAwesomeIcon icon={faSearch} />
      </NavLink>
      <NavLink className="navLinks" exact to="/favorites" activeClassName="ActiveFav">
        <FontAwesomeIcon icon={faHeart} />
      </NavLink>
      <NavLink className="navLinks" exact to="/dev" activeClassName="ActiveDev">
        <FontAwesomeIcon icon={faUser} />
      </NavLink>
    </nav>
  );
};

export default Header;
