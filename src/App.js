import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import Facade from "./Datafacade/Datafacade";
import Search from "./Search/Search";
import EventSingle from "./Event/EventSingle";
import Events from "./Event/Events";
import Header from "./Header/Header";
import Footer from './Footer/Footer';

//css
import './css/custom.css';
import './css/style.css';
import './css/vendors.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      events: []
    };
  }

  setKeyword = (keyword) => {
    this.setState({ keyword });
  }

  setEvents = (events) => {
    this.setState({ events })
  }


  render() {
    return (
      <React.Fragment>
        <Router>
<<<<<<< HEAD
          <div className="App">
            <Header />

            <hr />

            <Route path={`/`} render={(props) => {
              return (
                <div>
                  <Search setKeyword={this.setKeyword} />
                </div>)
            }} />

            <Route path={`/events`} render={(props) => {
              return (
                <div>
                  <Events keyword={this.state.keyword} setKeyword={this.setKeyword} setEvents={this.setEvents} />
                </div>)
            }} />

            

            {/* <Route path={`/user/swapi`} render= {(props) => {
            return (<User {...props} persons= {this.state.persons} />)
=======
          <Header />
          <Route exact path={`/`} render={(props) => {
            return (<Search {...props} setKeyword={this.setKeyword} />)
          }} />

          <Route path={`/events`} render={(props) => {
            return (<Events keyword={this.state.keyword} setKeyword={this.setKeyword} setEvents={this.setEvents} />)
>>>>>>> html
          }} />

          <Route path={`/eventSingle/:id`} render={(props) => {
            return (<EventSingle {...props}/>)
          }} />

<<<<<<< HEAD

          </div>
=======
>>>>>>> html

        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}


export default App;