import React, { useState } from "react";

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
    <div>
      <input
        type="text"
        onChange={handleKeywordInput}
        value={keyword}
        placeholder="Keyword"
      />
      <button onClick={handleSubmit}> Keyword </button>
    </div>
  );
};