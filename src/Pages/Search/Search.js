import React from "react";
import "../../App.css";
import "./Search.css";
import Title from "../../Components/Title/Title";
import Card from "../../Components/Card/Card";
import { details } from "../../data.js";

// Fetch local Data
// fetch("../../data.json")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch(err => console.log(err));
const Search = (props) => {
  const truncate = (str) => str.length > 20 ? str.substring(0, 16) + "..." : str;

  return (
    <div id="Search">
      <Title title="What to eat?" showIcon={true} />
      <div className="MainContent">
        <input type="text" name="search" id="find" placeholder="Search" />
        <div className="container">
          {details.map((detail) => (
            <Card
              Image={detail.Image}
              Title={detail.Title}
              Note={truncate(detail.Note)}
              Color={detail.Color}
              key={detail.Id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
