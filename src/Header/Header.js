import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'


function Header() {
  return (
    <React.Fragment>
        <header className="header sticky sec-header mm-slideout">
        <div id="preloader" style={{display: 'none'}}>
            <div data-loader="circle-side" style={{display: 'none'}}></div>
        </div>
        <div id="logo">
            <h1>
                <Link exact to="/">TickeMaster</Link>
            </h1>
        </div>
        <a href="#menu" className="btn_mobile">
            <div className="hamburger hamburger--spin" id="hamburger">
                <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                </div>
            </div>
        </a>
        <nav id="menu" className="main-menu">
            <ul>
                <li>
                    <span>
                        <Link exact to="/">Home</Link>
                    </span>
                </li>
                <li>
                    <span>
                    <Link exact to="/events">Events</Link>
                    </span>
                </li>
            </ul>
        </nav>
    </header>
    </React.Fragment>


  )
}

export default Header;