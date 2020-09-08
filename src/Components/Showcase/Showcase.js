import React from "react";
import "./Showcase.css";

const Showcase = (props) => {
  return (
    <div className="Showcase">
      <div className="ShowcaseItems">
        <img
          className="RecipeImg"
          src="https://cdn.loveandlemons.com/wp-content/uploads/2020/03/how-to-cook-rice.jpg"
          alt="Rice"
        />
        <div className="ShowcaseText">
          <h4 className="ShowcaseTitle">Rice</h4>
          <p className="ShowcaseDes">Learn to Cook rice</p>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
