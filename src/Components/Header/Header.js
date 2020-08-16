import React from "react";
import "../../App.css";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav className="Header">
      <Link to="/">
        <FontAwesomeIcon className="navLinks" icon={faHamburger} />
      </Link>
      <Link to="/search">
        <FontAwesomeIcon className="navLinks" icon={faSearch} />
      </Link>
      <Link to="/recipe">
        <FontAwesomeIcon className="navLinks" icon={faBookOpen} />
      </Link>
      <Link to="/favorites">
        <FontAwesomeIcon className="navLinks" icon={faHeart} />
      </Link>
    </nav>
  );
};

export default Header;
