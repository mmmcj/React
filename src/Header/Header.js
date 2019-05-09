import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'


function Header() {
  return (
    <React.Fragment>
      {/* <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Tickets</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link><Link exact to="/">Home</Link></Nav.Link>
          <Nav.Link><Link exact to="/events">Events</Link></Nav.Link>
        </Nav>
        </Navbar> */}
      



        <header className="header home-header mm-slideout">
        <div id="preloader" style={{display: 'none'}}>
            <div data-loader="circle-side" style={{display: 'none'}}></div>
        </div>
        <div id="logo">
            <h1>
                <Link exact to="/">Tickmaster</Link>
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

// <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
// <div className="container">
//   <ul className="navbar-nav mr-auto">
//     <li>
//       <NavLink exact to="/">Home</NavLink>
//     </li>
//     <li>
//       <NavLink exact to="/events">Events</NavLink>
//     </li>
//   </ul>
// </div>
// </nav>

export default Header;