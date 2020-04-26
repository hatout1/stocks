import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Header from "./Components/Header/Header";
import Portfolio from "./Components/Portfolio/Portfolio";
import WatchList from "./Components/WatchList/WatchList";

import "./App.css";
import BottomBar from "./Components/BottomBar/BottomBar";

export const UserContext = React.createContext([]);

function App(props) {
  return (
    <Router>
      <div className="theWholeApp">
        <Header />
        <div className="wholeDiv">
          <div className="leftNav">
            <h3>HHH HHHHHH</h3>
          </div>
          <div className="backGround">
            <Route exact path="/WatchList" component={WatchList} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </div>
          <div className="righttNav">
            <h3>HHHHHHHHHH HHHHHHHH</h3>
          </div>
        </div>
        <div>
          <BottomBar />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
