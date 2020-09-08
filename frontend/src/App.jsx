import React from 'react';
import SearchForm from './components/SearchForm';
import Cats from './components/Cats';
import { CatsProvider } from './components/CatsContext';

const App = () => {
  return (
    <div className="container">
      <CatsProvider>
        <h1 className="title">CAT WIKI</h1>
        <SearchForm /> 
        <Cats /> 
      </CatsProvider>      
    </div>
  );
}

export default App;
