import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

function Header() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <ul className="navbar-nav mr-auto">
                <li>
                <NavLink exact to="/">Home</NavLink>
                </li>
                <li>
                <NavLink exact to="/events">Events</NavLink>
                </li>
                {/* <li>
                <NavLink to="/user/swapi">User</NavLink>
                </li>
                <li>
                <NavLink to="/admin/swapi">Admin</NavLink>
                </li>
                <li>
                <NavLink to="/events">Events</NavLink>
                </li>*/}
            </ul>  
        </div>    
      </nav>
      )
  }

export default Header;