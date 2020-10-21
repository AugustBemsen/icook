import React from "react";
import "../../App.css";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
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
                <a
                  className="socialLink"
                  href="https://www.twitter.com/dani_reptor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className="font" icon={faTwitter} />
                  <span className="iconText">Follow me on Twitter</span>
                </a>
              </p>
              <p className="social">
                <a
                  className="socialLink"
                  href="https://github.com/AugustBemsen/icook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className="font" icon={faGithub} />
                  <span className="iconText">View Source Code</span>
                </a>
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
