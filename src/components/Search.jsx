import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchnote }) => {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3rem" />
      <input
        type="text"
        placeholder="Search notes..."
        onChange={(event) => handleSearchnote(event.target.value)}
      />
    </div>
  );
};

export default Search;
