import React from 'react';
import {Link} from "react-router-dom"

function Navbar () {
    
        return (
        <div className="navBarDiv">           
            <div className="navBarTag">
            <Link to="/login">Login</Link>
           </div>
            <div className="navBarTag">
            <Link to="/home">home</Link>
           </div>
            <div className="navBarTag">
            <Link to="/register">Register</Link>
           </div>
            <div className="navBarTag">
            <Link to="/watch-list">Watch List</Link>
           </div>
            <div className="navBarTag">
            <Link to="/alerts">Alerts</Link>
           </div>
            <div className="navBarTag">
            <Link to="/indicators">Indicators</Link>
           </div>
            <div className="navBarTag">
            <Link to="/big-moves">Big Moves</Link>
            </div>
        </div>
        );
    
}

export default Navbar;