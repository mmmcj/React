import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import './App.css';
import User from './User';
import Admin from './Admin';
import facade from "./datafacade";
import Login from "./LoginComponent";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { persons: [] };
  }

  getUsers = async () => {
    try {
      const persons = await facade.getApi();

      this.setState({ persons });
    } catch (err) {
      if (err.status) {
        const fullError = await err.fullError;
        this.setState({ error: fullError.msg });
      }
      else { this.setState({ error: "Server is Down" }); }

    }
  }



  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <hr />

          <Route exact path="/" component={Home} />

          <Route path={`/user/swapi`} render= {(props) => {
            return (<User {...props} persons= {this.state.persons} />)
          }} />
          <Route path={`/admin/swapi`} render= {(props) => {
            return (<Admin {...props} persons= {this.state.persons} />)
          }} />

        </div>
      </Router>
    );
  }
}

function Header() {
  return (
    <ul className="header">
      <li>
        <NavLink exact to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/user/swapi">User</NavLink>
      </li>
      <li>
        <NavLink to="/admin/swapi">Admin</NavLink>
      </li>
    </ul>)
}


function Home() {
  return (
    <div>
      {<h2>Home</h2>}
      <Login/>
    </div>
  );
}


export default App;