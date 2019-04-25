import React from 'react';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import './App.css';

function App() {
  return (
      <Router>
      <div className="App">
        <Header/>  

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/user" component={User} />
        <Route path="/admin" component={Admin} />
      </div>
    </Router>    
  );
}

function Header(){
  return( 
  <ul className="header">
  <li>
    <NavLink exact to="/">Home</NavLink>
  </li>
  <li>
    <NavLink to="/user">User</NavLink>
  </li>
  <li>
    <NavLink to="/admin">Admin</NavLink>
  </li>
</ul>)
}

function User(){
  return (
    <div>
      <h2>User</h2>
    </div>
  );
}

function Admin(){
  return (
    <div>
      <h2>Admin</h2>
    </div>
  );
}

function Home(){
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
export default App;
