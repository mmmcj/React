import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'



export default function Menu(){

    return (
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
    )
}