import React, { useState, useEffect } from "react";
import "../../App.css";
import "./Favorites.css";

const Favorites = () => {

  const truncate = (str) =>
    str.length > 20 ? str.substring(0, 19) + "..." : str;



  const [results, setResults] = useState([]);

  const getSavedHandler = () => {
    const test = JSON.parse(localStorage.getItem("savedRecipe"));
    setResults(test);
  };
  useEffect(() => {
    getSavedHandler();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="Favorites">
      {results.length !== 0 ?       <div className="FavoritesHero">
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
      </div>  : null }
      {results.length !== 0 ? 
      <div className="FavoritesBody">
        <div className="RecentSaved">
        {console.log(results[results.length - 1])}
          <img
            src={results[results.length - 1] ? results[results.length - 1].image : "https://hips.hearstapps.com/vidthumb/images/delish-u-rice-2-1529079587.jpg"}
            alt="recent saved"
            className="RecentImg"
          />
          <div className="RecentDiv">
            <h4 className="CardTitle">{results[results.length - 1] ? truncate(results[results.length - 1].title) : null}</h4>
            <p className="CardDes">{results[results.length - 1] ? results[results.length - 1].time + "min cooking" : null}</p>
          </div>
        </div> 
        {results.map((result) => (
          <div className="OldSavedGroup" key={result.title}>
            <div className="OldSaved">
              <img
                src={result.image}
                alt="recent saved"
                className="OldImg"
              />
              <div className="OldDiv">
                <h4 className="CardTitle">{truncate(result.title)}</h4>
                <p className="CardDes">{result.time}min cooking</p>
              </div>
            </div>
          </div>
        ))}
      </div> : null}
    </div>
  );
};

export default Favorites;
