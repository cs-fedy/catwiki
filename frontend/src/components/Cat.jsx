import React from 'react';

const Cat = ({ name, des, cfa, wiki, imageURL }) => {
    return (
        <li className="cat-item">
            <a href={cfa? cfa: wiki}><h3 className="cat-name">{name}</h3></a>
            <img alt={name} src={imageURL}  className="cat-image"/>
            <p className="cat-des">{des}</p>
        </li>
    );
}

export default Cat;