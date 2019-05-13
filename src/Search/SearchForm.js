import React, { useState, Component } from "react";
import {Link} from "react-router-dom";
import DatePicker from './Date';
import { Button, InputGroup, FormControl } from 'react-bootstrap'
export default function SearchForm(props) {


    const [keyword, setKeyword] = useState('');

    const handleSubmit = () => {
        console.log("hej")
        props.setKeyword(keyword);
        console.log(keyword);
        setKeyword('');
    };

    const handleKeywordInput = e => {
        setKeyword(e.target.value);
    };

    return (
        <React.Fragment>
            <form>
                <div className="row no-gutters custom-search-input-2">
                    <div className="col-lg-8">
                        <div className="form-group">
                            <FormControl
                                type="text"
                                onChange={handleKeywordInput}
                                value={keyword}
                                placeholder="Search"
                            />
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="form-group">
                            <DatePicker />
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <input type="submit" onClick={handleSubmit} class="btn_search" value="Search" />
                        <Link to={`events/`}>
                            <button className="btn btn-primary">Search</button>
                        </Link>

                    </div>
                </div>
            </form>
        </React.Fragment>
    )
}