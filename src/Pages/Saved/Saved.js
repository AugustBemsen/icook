import React, { useState, useEffect } from "react";
import "../../App.css";
import "../Recipe/Recipe.css";
import parse from "html-react-parser";

const Recipe = ({ match }) => {
  useEffect(() => {
    fetchSingleRecipe();
    // eslint-disable-next-line
  }, []);

  const [results, setResults] = useState({});

  const fetchSingleRecipe = () => {
    const getSaved = JSON.parse(localStorage.getItem("savedRecipe"));
    const getClicked = getSaved[match.params.index];
    setResults(getClicked);
  };

  return (
    <div className="Recipe">
      <div className="RecipeHeader">
        <img className="RecipeImage" src={results.image} alt="Pizza" />
      </div>
      <div className="RecipeIntro">
        <div className="Save">
          <h2 className="RecipeTitle">{results.title}</h2>
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
