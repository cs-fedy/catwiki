import React, { useContext } from "react";
import { CatsContext } from "./CatsContext";
import ResetButton from "./ResetButton";

const SearchForm = () => {
  const { catName, handleInputChange, getCats } = useContext(CatsContext);
  return (
    <div className="cats-form">
      <form onSubmit={getCats} className="search-form">
        <input
          type="text"
          value={catName}
          required
          onChange={handleInputChange}
          className="cat-name-input"
          placeholder="your cat name..."
        />
        <button className="btn">search</button>
      </form>
      <ResetButton />
    </div>
  );
};

export default SearchForm;
