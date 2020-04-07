import React from 'react';
import Page, {Pages} from '../../interfaces/page'; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const HomeWrapper = () => {
    return (
        <div className="home-wrapper">
            {Pages.map((p: Page, i: number) => (
                <a key={i} className="page-link" href={p.url}>
                    <FontAwesomeIcon icon={faSearch}/>
                    <span className="page-link-name">{p.name}</span>
                </a>
            ))}
        </div>
    )
}

export default HomeWrapper
