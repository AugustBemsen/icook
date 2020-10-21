import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Favorites from "./Pages/Favorites/Favorites";
import Recipe from "./Pages/Recipe/Recipe";
import Header from "./Components/Header/Header";
import Search from "./Pages/Search/Search";

const App = () => {
  return (
    <>
      <div className="WebApp">
        <div className="WebContainer">
          <div className="WebAppContent">
            <h1 className="WebAppWarning">
              Ops! This App cant be viewed on Large Screens, Please use a mobile
              phone.....
            </h1>
          </div>
        </div>
      </div>
      <div className="MobileApp">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/recipe" component={Recipe} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
          <Header />
        </Router>
      </div>
    </>
  );
};

export default App;
