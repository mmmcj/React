import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import Facade from "./Datafacade/Datafacade";
import Search from "./Search/Search";
import EventSingle from "./Event/EventSingle";
import Events from "./Event/Events";
import Header from "./Header/Header";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      events: [],
      keyword: ''
    };
  }


  setEvents = (events) => {
    this.setState({ events });
  }

  setKeyword = (keyword) => {
    this.setState({keyword});
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
                  <Search setEvents={this.setEvents} setKeyword={this.setKeyword} keyword={this.state.keyword} />
                  <Events {...props} keyword={this.state.keyword} events={this.state.events} setEvents={this.setEvents}/>
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

            
          </div>

        </Router>

      </React.Fragment>
    );
  }
}


export default App;