import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink, Link } from "react-router-dom";
import Menu from './Menu';


function Header() {
  return (
    <React.Fragment>
        <header className="header sticky sec-header mm-slideout">
        <div id="preloader" style={{display: 'none'}}>
            <div data-loader="circle-side" style={{display: 'none'}}></div>
        </div>
        <div id="logo">
            <h1>
                <Link to="/">TicketMaster</Link>
            </h1>
        </div>
        <a href="#menu" className="btn_mobile">
            <div className="hamburger hamburger--spin" id="hamburger">
                <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                </div>
            </div>
        </a>
        <Menu/>
    </header>
    </React.Fragment>


  )
}

export default Header;