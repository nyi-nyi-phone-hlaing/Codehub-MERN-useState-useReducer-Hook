import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div className='search'>
      <h1>Search</h1>
      <div className='search-box'>
        <input
          type='text'
          placeholder='Type here'
          onChange={(e) => setSearch(e.target.value)}
        />
        <p>
          Your search query is <span>{search}</span>
        </p>
      </div>
    </div>
  );
};

export default Search;
