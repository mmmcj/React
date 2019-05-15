import React, { useState, Component } from "react";
import EventsRandom from '../Event/EventsRandom';
import Form from './SearchForm';
import DatePicker from './Date';
import { Button, InputGroup, FormControl } from 'react-bootstrap'

import EventsSearch from '../Event/EventsSearch';


export default class SearchInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleKeywordInput = e => {
    const searchTerm = e.target.value
    this.setState({ keyword: searchTerm })
  };

  render() {
    return (
      <React.Fragment>
        <section className="hero_single version_2 start_bg_zoom">
          <div className="wrapper">
            <div className="container">
              <h3>Book unique experiences</h3>
              <p>Expolore top rated tours, hotels and restaurants around the world</p>
              <form>
                <div className="row no-gutters custom-search-input-2">
                  <div className="col-lg-8">
                    <div className="form-group">
                      <FormControl
                        type="text"
                        onChange={this.handleKeywordInput}
                        value={this.state.k}
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="form-group">
                      <DatePicker />
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <input type="submit" onClick={this.handleSubmit} className="btn_search" value="Search" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <div className="tickets-block" style={{ background_color: '#393f47' }}>
          <div className="container-fluid">
            <p className="text-center "><b>The fastest way to get your</b></p>
            <p className="text-center small">Check out our events and book your flight at the same time</p>
          </div>
        </div>

        <div className="container">
          <div className="main_title_2">
            <span>
              <em></em>
            </span>
            <h2>Our Popular Tours</h2>
            <p>Cum doctus civibus efficiantur imperdiet deterruisset.</p>
          </div>
        </div>
        {this.state.keyword.length === 0 ? <EventsRandom /> : <EventsSearch keyword={this.state.keyword} />}
      </React.Fragment>

    );
  }
};