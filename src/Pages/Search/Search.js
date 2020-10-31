import React, { useEffect, useState } from "react";
import "../../App.css";
import "./Search.css";
import Title from "../../Components/Title/Title";
import Card from "../../Components/Card/Card";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Search = (props) => {
  const API_KEY = process.env.REACT_APP_Key;

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
  const [placeholder, setPlaceholder] = useState(true);

  useEffect(() => {
    fetchRecipe();
    // eslint-disable-next-line
  }, [recipe]);

  const fetchRecipe = () => {
    if (recipe !== "") {
      fetch(
        `https://api.spoonacular.com/recipes/search?query=${recipe}&apiKey=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => setResults(data.results))
        .catch((err) => console.log(err));
    }
  };

  const wordsHandler = (event) => {
    setWords(event.target.value);
    if (words === "") {
      setPlaceholder(false);
    }
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
        <form className="MainForm" onSubmit={recipeHandler}>
          <input
            type="text"
            name="search"
            id="find"
            placeholder="Search"
            value={words}
            onChange={wordsHandler}
            autoComplete="off"
            autoCorrect="off"
          />
        </form>
        {results.length !== 0 ? (
          <div className="container">
            {results.map((result, index) => (
              <Link
                key={result.id}
                className="CardLink"
                to={`/recipe/${result.id}`}
              >
                <Card
                  Image={"https://spoonacular.com/recipeImages/" + result.image}
                  Title={truncate(result.title)}
                  Note={`${result.readyInMinutes}Min Cooking`}
                  Color={colors[index]}
                />
              </Link>
            ))}
          </div>
        ) : (
          <div
            className={placeholder ? "EmptySearch Show" : "EmptySearch Hide"}
          >
            <h2 className="EmptyHeading">Your Search Result will show here</h2>
            <ul className="IngredientList">
              <li className="lists">Type Recipe Name</li>
              <li className="lists">Hit Enter</li>
              <li className="lists">
                Be Happy
                <span role="img" aria-label="smile">
                  😊
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
