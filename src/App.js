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
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/recipe" component={Recipe} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
