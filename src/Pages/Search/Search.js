import React, { useEffect, useState } from "react";
import "../../App.css";
import "./Search.css";
import Title from "../../Components/Title/Title";
import Card from "../../Components/Card/Card";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const Search = (props) => {
  const API_KEY = process.env.REACT_APP_Key;
  const APP_ID = process.env.REACT_APP_ID;
  const colors = [
    "#FAA795",
    "#D2AFDF",
    "#7ED9BE",
    "#FBE397",
    "#BBE4FB",
    "#FAA795",
    "#D2AFDF",
    "#7ED9BE",
    "#FBE397",
    "#BBE4FB",
  ];
  // Shorten Words from API
  const truncate = (str) =>
    str.length > 14 ? str.substring(0, 14) + "..." : str;

  //  States Managements
  const [results, setResults] = useState([]);
  const [words, setWords] = useState("");
  const [recipe, setRecipe] = useState("");

  useEffect(() => {
    fetchRecipe();
    // eslint-disable-next-line
  }, [recipe]);

  const fetchRecipe = () => {
    fetch(
      `https://api.edamam.com/search?q=${recipe}&app_id=${APP_ID}&app_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setResults(data.hits))
      .catch((err) => console.log(err));
  };

  const wordsHandler = (event) => {
    setWords(event.target.value);
  };

  const recipeHandler = (event) => {
    event.preventDefault();
    setRecipe(words);
    setWords("");
  };

  return (
    <div id="Search">
      <Title
        title="What to eat?"
        showTitle={true}
        showIcon={true}
        icon={faFilter}
      />
      <div className="MainContent">
        <form
          className="MainForm"
          onSubmit={recipeHandler}
        >
          <input
            type="text"
            name="search"
            id="find"
            placeholder="Search"
            value={words}
            onChange={wordsHandler}
          />
        </form>
        <div className="container">
          {results.map((result, index) => (
            <Card
              Image={result.recipe.image}
              Title={truncate(result.recipe.label)}
              Note={truncate(result.recipe.healthLabels[0])}
              Color={colors[index]}
              key={result.recipe.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
