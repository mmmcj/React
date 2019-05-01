import React, { Component } from 'react';
import B from 'react-bootstrap';
import { HashRouter as Router, Route, NavLink, Link } from "react-router-dom";
import './App.css';
//import User from './User';
//import Admin from './Admin';
import facade from "./datafacade";
//import Login from "./LoginComponent";
import Search from "./search";

function EventSingle({match, events}){
  const id = match.params.id;

  const single_event = events.filter(e=>e.id == id)[0];
  console.table(single_event);
  
  return (
    <React.Fragment>
      <div className="container">
        <h2>{single_event.title}</h2>
        <p>{single_event.price}Kr,-</p>
        <p>{single_event.long_desc}</p>
        <p>TILFØJ dvs ting her under.</p>
      </div>
    </React.Fragment>
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
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
    <ul className="navbar-nav mr-auto">
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
    </ul>  
    </div>    
    </nav>
    )
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