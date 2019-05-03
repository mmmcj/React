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
      keyword: '',
      events: []
    };
  }

  setKeyword = (keyword) => {
    this.setState({keyword});
  }

  setEvents = (events) => {
    this.setState({events})
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
                  <Search setKeyword={this.setKeyword} />
                  <Events {...props} keyword={this.state.keyword} setKeyword={this.setKeyword} setEvents={this.setEvents}/>
                </div>)
            }} />

            {/* <Route path={`/user/swapi`} render= {(props) => {
            return (<User {...props} persons= {this.state.persons} />)
          }} />
          <Route path={`/admin/swapi`} render= {(props) => {
            return (<Admin {...props} persons= {this.state.persons} />)
          }} /> */}

            <Route path={`/eventSingle/:id`} render={(props) => {
              return (<EventSingle {...props} events={this.state.events} />)
            }} />

            
          </div>

        </Router>

      </React.Fragment>
    );
  }
}


export default App;