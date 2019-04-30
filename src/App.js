import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink, Link } from "react-router-dom";
import './App.css';
import User from './User';
import Admin from './Admin';
import facade from "./datafacade";
import Login from "./LoginComponent";
import Search from "./search";

function EventSingle({match, events}){
  //console.log(match.params.id);
  // const id = match.params.id;
  // console.log(id);
  // const event = events.find(item => item.id === id)
  // console.log(event)

  const event = events.find(e => e.id == match.params.id)

  console.log(event);

  return (
    <h2>Hej</h2>
  );
}


function Events({events}) {
  const lis = events.map(e => <li key={e.id}><Link to={`/evenSingle/${e.id}`}>{e.title}</Link></li>)
  return(
    <React.Fragment>
      <ul>
        {lis}
      </ul>

      
    </React.Fragment>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }

  componentDidMount = async () => {
    const events = await facade.getEvents();
    this.setState({events});
}

  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <hr />

          <Route exact path="/" component={Home} />

          {/* <Route path={`/user/swapi`} render= {(props) => {
            return (<User {...props} persons= {this.state.persons} />)
          }} />
          <Route path={`/admin/swapi`} render= {(props) => {
            return (<Admin {...props} persons= {this.state.persons} />)
          }} /> */}

          <Route path={`/evenSingle/:id`} render= {(props) => {
            return (<EventSingle {...props} events= {this.state.events} />)
          }}/>

          <Route path="/events" render= {(props) => {
            return (<Events {...props} events= {this.state.events} />)
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
      {/* <li>
        <NavLink to="/user/swapi">User</NavLink>
      </li>
      <li>
        <NavLink to="/admin/swapi">Admin</NavLink>
        </li>*/}
      <li>
        <NavLink to="/events">Events</NavLink>
      </li>
    </ul>)
}


function Home() {
  return (
    <div>
      {<h2>Home</h2>}
      <Search/>
    </div>
  );
}


export default App;