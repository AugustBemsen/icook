import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div id="Card">
      <img
      className="RecipeImg"
        src="https://cdn.loveandlemons.com/wp-content/uploads/2020/03/how-to-cook-rice.jpg"
        alt="Rice"
      />
      <h4 className="CardTitle">
          Rice
      </h4>
      <p className="CardDes">
          How to Cook rice very well
      </p>
    </div>
  );
};

export default Card;
