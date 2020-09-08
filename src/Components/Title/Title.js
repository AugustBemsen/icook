import React from "react";
import "../../App.css";
import "./Title.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const Title = (props) => {

  return (
    <div className="title-component">
      <h3 className="title text">
        <span className="text-title">{props.title}</span>
        {props.showIcon ? (
          <span className="icon">
            <FontAwesomeIcon className="navLinks" icon={faFilter} />
          </span>
        ) : null}
      </h3>
    </div>
  );
};
export default Title;
