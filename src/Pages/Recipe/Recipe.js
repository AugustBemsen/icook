import React, { useState, useEffect } from "react";
import "../../App.css";
import "./Recipe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";

const Recipe = ({ match }) => {
  const API_KEY = process.env.REACT_APP_Key;

  useEffect(() => {
    fetchSingleRecipe();
    // eslint-disable-next-line
  }, []);

  const [results, setResults] = useState({});

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

  return (
    <div className="Recipe">
      <div className="RecipeHeader">
        <img className="RecipeImage" src={results.image} alt="Pizza" />
      </div>
      <div className="RecipeIntro">
        <div className="Save">
          <h2 className="RecipeTitle">{results.title}</h2>
          <FontAwesomeIcon className="RecipeSave" icon={faHeart} />
        </div>
        <p className="SmallTitle">{`${results.readyInMinutes} Minutes for ${results.servings} Servings`}</p>
        <p className="RecipeBrief">{results.summary}</p>
      </div>
      <div className="RecipeHealth">
        <h4 className="SmallHeading">Health and Diet Labels</h4>
        {/* {results.diets.map((diet) => (
          <p key={diet} className="HealthText">
            {diet}
          </p>
        ))} */}
      </div>
      <div className="RecipeIngredients">
        <h4 className="SmallHeading">Ingredients</h4>
        <ul className="IngredientList">
          {/* {results.extendedIngredients.map((extendedIngredient) => (
            <li key={extendedIngredient.originalString} className="lists">
              {extendedIngredient.originalString}
            </li>
          ))} */}
        </ul>
        {results.instructions}
      </div>
    </div>
  );
};

export default Recipe;
