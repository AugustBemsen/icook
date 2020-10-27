import React from "react";
import "./Profile.css";
import Me from "./Profile.png";

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
            <a href="http://github.com/augustbemsen" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="http://twitter.com/dani_reptor" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.linkedin.com/in/daniel-bemsen-960b60171/" target="_blank" rel="noopener noreferrer">Linkdin</a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
