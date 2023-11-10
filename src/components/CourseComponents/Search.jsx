import React from "react";

function Search({ setQuery }) {
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="ui action input" style={{ marginBottom: "1em" }}>
      <input
        type="text"
        placeholder="Search courses..."
        onChange={handleSearch}
        style={{ borderRadius: "0" }}
      />
      <button className="ui button primary">Search</button>
    </div>
  );
}

export default Search;
