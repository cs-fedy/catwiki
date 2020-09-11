import React, { createContext, useState, useEffect } from "react";

export const CatsContext = createContext([]);

export const CatsProvider = ({ children }) => {
  const [cats, setCats] = useState([]);
  const [catsByName, setCatsByName] = useState([]);
  const [catName, setCatName] = useState("");
  const [isBreedsMode, setBreedsMode] = useState(true);
  const apiURL = "http://localhost:4000/api/breeds";

  useEffect(() => {
    fetch(apiURL)
        .then(catsRes => catsRes.json())
        .then(({ catsList }) => setCats(catsList));
  }, []);

  const handleInputChange = (event) => {
    setCatName(event.target.value);
  };

  const getCats = async (event) => {
    event.preventDefault();
    const res = await fetch(`${this.apiURL}/${this.state.catName}`);
    const data = await res.json();
    setCatsByName(data.catsList);
    setBreedsMode(false);
  };

  const handleClick = () => {
    if (!isBreedsMode) {
      setBreedsMode(true);
      setCatsByName([]);
    }
  };

  return (
    <CatsContext.Provider
      value={{
        cats,
        catName,
        catsByName,
        isBreedsMode,
        handleInputChange,
        getCats,
        handleClick,
      }}>
      { children }
    </CatsContext.Provider>
  );
};