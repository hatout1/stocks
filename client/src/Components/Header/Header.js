import React from "react";

import Navbar from "../Navbar/Navbar";

function Header(props) {
  console.log(props.user);
  return (
    <div className="jumbotron jumbotron-fluid" id="headerNav">
      <div className="container">
        <h1 className="display-4">Stock market</h1>
        <Navbar />
        <p className="lead"></p>
      </div>
    </div>
  );
}
export default Header;
