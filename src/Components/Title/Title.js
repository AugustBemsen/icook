import React from "react";
import "../../App.css";
import "./Title.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Title = (props) => {
  return (
    <div className="title-component">
      <h3 className="title text">
        {props.showTitle ? (
          <span className="text-title">{props.title}</span>
        ) : null}
        {props.showIcon ? (
          <span className="icon" style={{color: `${props.color}`}}>
            <FontAwesomeIcon className="navLinks" icon={props.icon} />
          </span>
        ) : null}
      </h3>
    </div>
  );
};
export default Title;
