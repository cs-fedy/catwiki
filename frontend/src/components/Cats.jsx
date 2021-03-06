import React, { useContext } from 'react';
import { CatsContext } from './CatsContext';
import Cat from './Cat';

const RenderCats = ({ cats }) => {
    return (
        <ul className="cats-list">
            {cats.map(({ id, name, description, cfa_url ,wikipedia_url, imageURL }) => 
            <Cat 
                key={id} 
                name={name} 
                des={description} 
                imageURL={imageURL}
                cfa={cfa_url} 
                wiki={wikipedia_url}/>
            )}
        </ul>
    );
}

const Cats = () => {
    const { cats, catsByName, isBreedsMode } = useContext(CatsContext);
    return isBreedsMode? <RenderCats cats={cats}/>: <RenderCats cats={catsByName}/>;
}

export default Cats;