import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const BackBtn = () => {
    return (
        <div className="back-btn">
            <FontAwesomeIcon icon={faArrowLeft}/>
            <a href="/" className="back-link">Hjem</a>
        </div>
    )
}

export default BackBtn;