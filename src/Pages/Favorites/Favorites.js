import React, { useState, useEffect } from "react";
import "../../App.css";
import "./Favorites.css";

const Favorites = () => {

  const truncate = (str) =>
    str.length > 14 ? str.substring(0, 14) + "..." : str;

  useEffect(() => {
    getSavedHandler();
    // eslint-disable-next-line
  }, []);

  const [results, setResults] = useState([]);

  const getSavedHandler = () => {
    const test = JSON.parse(localStorage.getItem("savedRecipe"));
    setResults(test);
  };

  return (
    <div className="Favorites">
      <div className="FavoritesHero">
        <h2 className="FavoritesHeading">Saved Recipes</h2>
        <div className="HeadingDiv">
          <p className="FavoriteText">
            Here are some of you Favorites we've saved for you
          </p>
          <hr className="Divider" />
          <div className="TotalCounts">
            <h1 className="counts">{results.length}</h1>
            <p className="CountsRecipe">Recipes Saved</p>
          </div>
        </div>
      </div>

      <div className="FavoritesBody">
        <div className="RecentSaved">
          <img
            src="https://hips.hearstapps.com/vidthumb/images/delish-u-rice-2-1529079587.jpg"
            alt="recent saved"
            className="RecentImg"
          />
          <div className="RecentDiv">
            <h4 className="CardTitle">Yellow Papaya</h4>
            <p className="CardDes">zero calories</p>
          </div>
        </div>
        {results.map((result) => (
          <div className="OldSavedGroup">
            <div className="OldSaved">
              <img
                src={result.image}
                alt="recent saved"
                className="OldImg"
              />
              <div className="OldDiv">
                <h4 className="CardTitle">{truncate(result.title)}</h4>
                <p className="CardDes">{result.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
