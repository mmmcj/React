import React, { useState, Component } from "react";
import EventsRandom from '../Event/EventsRandom';
import Form from './SearchForm';

export default function SearchInput() {


  return (
    <React.Fragment>
      <section className="hero_single version_2 start_bg_zoom">
        <div className="wrapper">
          <div className="container">
            <h3>Book unique experiences</h3>
            <p>Expolore top rated tours, hotels and restaurants around the world</p>
            <Form/>
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
      <EventsRandom />
    </React.Fragment>
  );
};