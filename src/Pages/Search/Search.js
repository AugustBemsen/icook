import React from "react";
import "../../App.css";
import "./Search.css";
import Title from "../../Components/Title/Title";
import Card from "../../Components/Card/Card";

const Search = (props) => {
  return (
    <div id="Search">
      <Title title="What to eat?" showIcon={true} />
      <div className="MainContent">
        <input type="text" name="search" id="find" placeholder="Search" />
        <div className="container">
          <Card color="#FBE397" />
          <Card color="#BBE4FB"/>
          <Card color="#FAA795"/>
          <Card color="#D2AFDF"/>
          <Card color="#7ED9BE"/>
          <Card color="#FBE397" />
          <Card color="#BBE4FB"/>
          <Card color="#FAA795"/>
          <Card color="#D2AFDF"/>
          <Card color="#7ED9BE"/>
        </div>
      </div>
    </div>
  );
};

export default Search;
