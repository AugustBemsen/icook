import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div id="Card">
      <div className="CardItems">
        <img
          className="RecipeImg"
          src="https://cdn.loveandlemons.com/wp-content/uploads/2020/03/how-to-cook-rice.jpg"
          alt="Rice"
        />
        <div className="CardText">
          <h4 className="CardTitle">Rice</h4>
          <p className="CardDes">Learn to Cook rice</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
