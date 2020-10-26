import React, { useState, useEffect } from "react";
import "../../App.css";
import "./Recipe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import parse from "html-react-parser";

const Recipe = ({ match }) => {
  const API_KEY = process.env.REACT_APP_Key;

  // const truncateSummary = (str, url) =>
  // str.length > 100 ? `${str.substring(0, 95)} <a href=${url}>Read More</a>`  : str;
  useEffect(() => {
    fetchSingleRecipe();
    // eslint-disable-next-line
  }, []);

  const [results, setResults] = useState({});
  const [preventClick, setPreventClick] = useState(false);

  const fetchSingleRecipe = async () => {
    await axios
      .get(
        `https://api.spoonacular.com/recipes/${match.params.id}/information?apiKey=${API_KEY}&includeNutrition=false`
      )
      .then(async (data) => {
        await setResults(data.data);
      })
      .catch((err) => console.log(err));
  };

  const saveHandler = () => {
    const favorite = JSON.parse(localStorage.getItem("savedRecipe")) || [];
    const data = {
      image: results.image,
      title: results.title,
      time: results.readyInMinutes
    };
    favorite.push(data);
    localStorage.setItem("savedRecipe", JSON.stringify(favorite));
    setPreventClick(true);
  };
  return (
    <div className="Recipe">
      <div className="RecipeHeader">
        <img className="RecipeImage" src={results.image} alt="Pizza" />
      </div>
      <div className="RecipeIntro">
        <div className="Save">
          <h2 className="RecipeTitle">{results.title}</h2>
          {!preventClick ? (
            <FontAwesomeIcon
              className="RecipeSave"
              icon={faHeart}
              onClick={saveHandler}
            />
          ) : (
            "saved!"
          )}
        </div>
        <p className="SmallTitle">{`${results.readyInMinutes} Minutes for ${results.servings} Servings`}</p>
        <p className="RecipeBrief">{parse(String(results.summary))}</p>
      </div>
      <div className="RecipeHealth">
        <h4 className="SmallHeading">Health and Diet Labels</h4>
        {results.diets
          ? results.diets.map((diet) => (
              <p key={diet} className="HealthText">
                {diet}
              </p>
            ))
          : "Loading......"}
      </div>
      <div className="RecipeIngredients">
        <h4 className="SmallHeading">Ingredients</h4>
        <ul className="IngredientList">
          {results.extendedIngredients
            ? results.extendedIngredients.map((extendedIngredient) => (
                <li key={extendedIngredient.originalString} className="lists">
                  {extendedIngredient.originalString}
                </li>
              ))
            : "Loading......"}
        </ul>
        <>{parse(String(results.instructions))}</>
      </div>
    </div>
  );
};

export default Recipe;
