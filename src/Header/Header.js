import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'

function Header() {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Tickets</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link><Link exact to="/">Home</Link></Nav.Link>
          <Nav.Link><Link exact to="/events">Events</Link></Nav.Link>
        </Nav>
        </Navbar>
      
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