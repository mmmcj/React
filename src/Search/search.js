import React, { useState, Component } from "react";
import DatePicker from './Date';
import EventsRandom from '../Event/EventsRandom';

export default function SearchInput(props) {

  const [keyword, setKeyword] = useState('');

  const handleSubmit = () => {
    props.setKeyword(keyword);
    setKeyword('');
  };

  const handleKeywordInput = e => {
    setKeyword(e.target.value);
  };

  return (
    // <div className="container cTop">
    //   <div classNameName="row">
    //     <div classNameName="col-md-4">
    //       <InputGroup classNameName="mb-3">
    //         <FormControl
    //           type="text"
    //           onChange={handleKeywordInput}
    //           value={keyword}
    //           placeholder="Search"
    //         />
    //         <InputGroup.Append>
    //           <Button onClick={handleSubmit}>Search</Button>
    //         </InputGroup.Append>
    //       </InputGroup>
    //     </div>
    //   </div>
    // </div>

    <React.Fragment>
      <section className="hero_single version_2 start_bg_zoom">
        <div className="wrapper">
          <div className="container">
            <h3>Book unique experiences</h3>
            <p>Expolore top rated tours, hotels and restaurants around the world</p>
            <form>
              <div className="row no-gutters custom-search-input-2">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input className="form-control" type="text" placeholder="Event..." />
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form-group">
                    <input class="form-control" type="text" name="dates" placeholder="When.." />
<DatePicker/>
                  </div>
                </div>
                <div class="col-lg-2">
                  <input type="submit" class="btn_search" value="Search" />
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
      <EventsRandom />
    </React.Fragment>
  );
};