import React, { useState } from "react";

import "./SearchBar.css";

export const SearchBar = ({ onSearch }) => {
  const [searchString, setSearchString] = useState("");

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        placeholder="Search for movies..."
      />
      <button onClick={() => onSearch(searchString)}>Search</button>
    </div>
  );
};
