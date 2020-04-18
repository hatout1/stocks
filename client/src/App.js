import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

import "./App.css";

export const UserContext = React.createContext([]);

function App(props) {
  return (
    <Router>
      <div>
        <div className="backGround">
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
