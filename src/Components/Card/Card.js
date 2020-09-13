import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="Card" style={{background: `${props.Color}`}}>
      <div className="CardItems">
        <img
          className="RecipeImg"
          src={props.Image}
          alt="RecipeImg"
        />
        <div className="CardText">
          <h4 className="CardTitle">{props.Title}</h4>
          <p className="CardDes">{props.Note}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
