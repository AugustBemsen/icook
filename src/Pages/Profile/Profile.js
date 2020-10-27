import React from "react";
import "./Profile.css";
import Me from "./Profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Profile = () => {
  return (
    <div className="Profile">
      <div className="DevHero">
        <img src={Me} alt="Daniel Bemsen" />
      </div>
      <div className="AboutCard">
        <div className="AboutMe">
          <h2 className="MyName">Daniel Bemsen</h2>
          <h6 className="Title">Software Engineer</h6>
        </div>
        <div className="SocialLinks">
          <a
            className="MySocial"
            href="http://github.com/augustbemsen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="MyIcons" icon={faGithub} />
          </a>
          <a
            className="MySocial"
            href="http://twitter.com/dani_reptor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="MyIcons" icon={faTwitter} />
          </a>
          <a
            className="MySocial"
            href="https://www.linkedin.com/in/daniel-bemsen-960b60171/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="MyIcons" icon={faLinkedin} />
          </a>
        </div>
        <a className="Contact" href="mailto:danireptor7@gmail.com">
          Contact Me
        </a>
      </div>
      <div className="AppDetails">
        <h5 className="AboutHeading">About App</h5>
        <p className="MeetMe">
          <strong>iCook</strong> is a mobile only web application. Users can
          search for recipes and learn how to cook their favorite meal. The app
          can also save some of your favorite recipes for you, so you can
          revisit them later.
        </p>
        <h5 className="AboutHeading">About Developer</h5>
        <p className="MeetMe">
          Hello, <span role="img" aria-label="smile">😊</span> i'm Daniel Bemsen, iCode for fun.
          I'm Software Developer, build web apps with love.
          Thats all i have, the rest are recipes, just search 
        </p>
      </div>
    </div>
  );
};

export default Profile;
