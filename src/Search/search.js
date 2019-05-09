import React, { useState } from "react";
import { Button, InputGroup, FormControl } from 'react-bootstrap'


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
    <div className="container cTop">
      <div classNameName="row">
        <div classNameName="col-md-4">
          <InputGroup classNameName="mb-3">
            <FormControl
              type="text"
              onChange={handleKeywordInput}
              value={keyword}
              placeholder="Search"
            />
            <InputGroup.Append>
              <Button onClick={handleSubmit}>Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};