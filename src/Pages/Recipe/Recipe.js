import React from "react";
import "../../App.css";
import "./Recipe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
const Recipe = () => {
  return (
    <div className="Recipe">
      <div className="RecipeHeader">
        <img
          className="RecipeImage"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_om8bPxd814bccjOWrgDBqqBbZqlzTXQj7g&usqp=CAU"
          alt="Pizza"
        />
      </div>
      <div className="RecipeIntro">
        <div className="Save">
          <h2 className="RecipeTitle">Banana Pizza</h2>
          <FontAwesomeIcon className="RecipeSave" icon={faHeart} />
        </div>
        <p className="SmallTitle">Diet Based</p>
        <p className="RecipeBrief">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio deleniti
          sunt cum at voluptatem reprehenderit ducimus nemo aperiam. Ratione
          vero sed, tempora quo atque doloremque ducimus nam et minus labore.
        </p>
      </div>
      <div className="RecipeHealth">
        <h4 className="SmallHeading">Health and Diet Labels</h4>
        <p className="HealthText">
          Calories - <span> 2000</span>
        </p>
        <p className="HealthText">
          Fats - <span> 2000</span>
        </p>
        <p className="HealthText">
          Sugars - <span> 2000</span>
        </p>
        <p className="HealthText">
          Protein - <span> 2000</span>
        </p>
        <p className="HealthText">
          Energy - <span> 2000</span>
        </p>
      </div>
      <div className="RecipeIngredients">
        <h4 className="SmallHeading">Ingredients</h4>
        <ul className="IngredientList">
          <li className="lists">Lorem ipsum dolor sit amet.</li>
          <li className="lists">Lorem ipsum dolor sit amet.</li>
          <li className="lists">Lorem ipsum dolor sit amet.</li>
          <li className="lists">Lorem ipsum dolor sit amet.</li>
          <li className="lists">Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>
    </div>
  );
};

export default Recipe;
