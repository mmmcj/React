import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
//import './css/App.css';
//import User from './User';
//import Admin from './Admin';
import facade from "./datafacade";
//import Login from "./LoginComponent";
import Search from "./search";
import EventSingle from "./EventSingle";
import Events from "./Events";
import Header from "./Header";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }

  componentDidMount = async () => {
    const events = await facade.getEvents();
    this.setState({ events });
  }

  setEvents = (events) => {
    this.setState({ events })
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="App">
            <Header />

            <hr />

            <Route path={`/`} render={(props) => {
              return (
                <div>
                  <Search {...props} setEvents={this.setEvents} />
                  <Events events={this.state.events} />
                </div>)
            }} />

            {/* <Route path={`/user/swapi`} render= {(props) => {
            return (<User {...props} persons= {this.state.persons} />)
          }} />
          <Route path={`/admin/swapi`} render= {(props) => {
            return (<Admin {...props} persons= {this.state.persons} />)
          }} /> */}

            <Route path={`/evenSingle/:id`} render={(props) => {
              return (<EventSingle {...props} events={this.state.events} />)
            }} />

            <Route path="/events" render={(props) => {
              return (<Events {...props} events={this.state.events} />)
            }} />
          </div>

        </Router>

      </React.Fragment>
    );
  }
}


export default App;