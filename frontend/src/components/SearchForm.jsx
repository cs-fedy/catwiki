import React from 'react';
import { CatsContext } from './CatsContext';
import ResetButton from './ResetButton';

const RenderForm = ({ catName, handleInputChange, getCats }) => {
    return (
        <div className="cats-form">
            <form
                onSubmit={getCats}
                className="search-form">
                <input
                    type="text"
                    value={catName}
                    onChange={handleInputChange}
                    className="cat-name-input"
                    placeholder="your cat name..." />
                <button className="btn">search</button>
            </form>
            <ResetButton />
        </div>
    );
}
const SearchForm = () => {
    return (
        <CatsContext.Consumer>
            {({ catName, handleInputChange, getCats }) => <RenderForm
                handleInputChange={handleInputChange}
                catName={catName}
                getCats={getCats} />}
        </CatsContext.Consumer>
    );
}

export default SearchForm;