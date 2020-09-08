import React from 'react';
import { CatsContext } from './CatsContext';

const RenderButton = ({ handleClick }) => {
    return (
        <button onClick={handleClick}
        className="btn">
            <i className="fas fa-window-restore"></i>
        </button>
    );
}

const ResetButton = () => {
    return (
        <CatsContext.Consumer>
            {({handleClick}) => <RenderButton handleClick={handleClick} />}
        </CatsContext.Consumer>
    );
}

export default ResetButton;