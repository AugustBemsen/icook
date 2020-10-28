import React from "react";
import "../../App.css";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="Home">
      <div className="Top">
        <div className="Bottom">
          <Link to="/favorites">
            <FontAwesomeIcon className="HomeIcon" icon={faHeart} />
          </Link>
          <div className="TextDiv">
            <h1 className="Heading">
              iCook Recipe <br /> App
            </h1>
            <div className="FontDes">
              <p className="social">
                <Link
                  className="socialLink"
                  to="/search"
                >
                  <FontAwesomeIcon className="font" icon={faSearch} />
                  <span className="iconText">Search For Recipe</span>
                </Link>
              </p>
              <p className="social">
                <Link
                  className="socialLink"
                  to="/favorites"
                >
                  <FontAwesomeIcon className="font" icon={faHeart} />
                  <span className="iconText">View Saved Recipes</span>
                </Link>
              </p>
            </div>
            <div className="mainText">
              <p className="appIntro">
                Are you hungry and dont know what to eat or dont know how to
                cook it? iCook gat you covered search for a recipe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
