import React from "react";

const SearchItem = ({ searchItem, setSearchItem }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="">Enter search item</label>
      <input
        type="text"
        placeholder="Search item"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
