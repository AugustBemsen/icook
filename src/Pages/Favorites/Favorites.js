import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./Favorites.css";

const Favorites = () => {
  const truncate = (str) =>
    str.length > 20 ? str.substring(0, 19) + "..." : str;

  const [results, setResults] = useState([]);

  const getSavedHandler = () => {
    const getSaved = JSON.parse(localStorage.getItem("savedRecipe"));
    setResults(getSaved);
  };
  useEffect(() => {
    getSavedHandler();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="Favorites">
      {results.length !== 0 ? (
        <div className="FavoritesHero">
          <h2 className="FavoritesHeading">Saved Recipes</h2>
          <div className="HeadingDiv">
            <p className="FavoriteText">
              Here are some of you Favorites we've saved for you
            </p>
            <hr className="Divider" />
            <div className="TotalCounts">
              <h1 className="counts">{results.length}</h1>
              <p className="CountsRecipe">Saved Recipe</p>
            </div>
          </div>
        </div>
      ) : null}
      {results.length !== 0 ? (
        <div className="FavoritesBody">
          <div className="RecentSaved">
            <img
              src={
                results[results.length - 1]
                  ? results[results.length - 1].image
                  : "https://hips.hearstapps.com/vidthumb/images/delish-u-rice-2-1529079587.jpg"
              }
              alt="recent saved"
              className="RecentImg"
            />
            <div className="RecentDiv">
              <h4 className="CardTitle">
                {results[results.length - 1]
                  ? truncate(results[results.length - 1].title)
                  : null}
              </h4>
              <p className="CardDes">
                {results[results.length - 1]
                  ? results[results.length - 1].readyInMinutes + "min cooking"
                  : null}
              </p>
            </div>
          </div>
          {results.map((result, index) => (
            <Link
              key={result.title}
              className="CardLink"
              to={`/saved/${index}`}
            >
              <div className="OldSavedGroup">
                <div className="OldSaved">
                  <img
                    src={result.image}
                    alt="recent saved"
                    className="OldImg"
                  />
                  <div className="OldDiv">
                    <h4 className="CardTitle">{truncate(result.title)}</h4>
                    <p className="CardDes">
                      {result.readyInMinutes}min cooking
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Favorites;
