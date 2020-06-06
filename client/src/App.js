import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import BottomBar from "./Components/BottomBar/BottomBar";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import LeftSideMenu from "./Components/LeftSideMenu/LeftSideMenu";
import Login from "./Components/Login/Login";
import Portfolio from "./Components/Portfolio/Portfolio";
import Register from "./Components/Register/Register";
import RightSideMenu from "./Components/RightSideMenu/RightSideMenu";
import WatchList from "./Components/WatchList/WatchList";

import "./App.css";

export const UserContext = React.createContext([]);

function App(props) {
  return (
    <Router>
      <div className="theWholeApp">
        <Header />
        <div className="wholeDiv">
          <div className="leftNav">
            <LeftSideMenu />
          </div>
          <div className="backGround">
            <Home />
            <Route exact path="/home" component={Home} />
            <Route exact path="/WatchList" component={WatchList} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </div>
          <div className="rightNav">
            <RightSideMenu />
          </div>
        </div>
        <div>
          <BottomBar />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
