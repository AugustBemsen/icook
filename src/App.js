import React, { useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Favorites from "./Pages/Favorites/Favorites";
import Recipe from "./Pages/Recipe/Recipe";
import Header from "./Components/Header/Header";
import Search from "./Pages/Search/Search";
import Profile from "./Pages/Profile/Profile";
import NotFound from "./Pages/404/NotFound";
import Particles from "react-particles-js";

const config = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
  },
  opacity: {
    value: 0.5,
    anim: {
      enable: true,
    },
  },
  move: {
    direction: "right",
    speed: 0.05,
  },
  size: {
    value: 7,
    random: true,
    anim: {
      enable: true,
      speed: 3,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
  },
  repulse: {
    distance: 10,
    duration: 0.01,
  },
};

const App = () => {
  const mouseRef = useRef(null);

  const mouseHandler = () => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX - mouseRef.current.clientWidth / 2;
      const mouseY = clientY - mouseRef.current.clientHeight / 2;
      mouseRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });
  };

  useEffect(() => mouseHandler(), []);

  return (
    <>
      <div className="WebApp">
        <div className="customMouse" ref={mouseRef}>
          <img
            src="https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4135.png"
            alt="Mouse"
            className="mouseImg"
          />
        </div>
        <Particles className="particles" params={config} />
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
            <Route path="/recipe/:id" component={Recipe} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/dev" component={Profile} />
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
          <Header />
        </Router>
      </div>
    </>
  );
};

export default App;
