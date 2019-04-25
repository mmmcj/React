import React, {Component} from 'react';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import './App.css';
import User from './User';
import Admin from './Admin';

class App extends Component {
  render(){
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


function Home(){
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}


export default App;
