import React from "react";
import "../../App.css";
import "./Search.css";
import Title from "../../Components/Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import Card from "../../Components/Card/Card";

const Search = (props) => {
  return (
    <div id="Search">
      <Title title="What to eat?" showIcon={true} />
      <div className="MainContent">
          <input
            type="text"
            name="search"
            id="find"            
            placeholder="Search"
          />
          {/* <button type="submit">Cook</button> */}
          <div className="container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
      </div>
    </div>
  );
};

export default Search;
