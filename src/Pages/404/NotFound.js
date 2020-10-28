import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="EmptySearch">
      <div className="ImgDiv">
        <img
          src="https://img.freepik.com/free-vector/404-error-page-found-with-donut_114341-54.jpg"
          alt="Not Found"
          className="NFImg"
        />
      </div>
      <div className="TextOwn">
        <Link className="NotLink" to="/">Go Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
