import React from "react";

const SearchFilter = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search books..."
    />
  );
};

export default SearchFilter;
