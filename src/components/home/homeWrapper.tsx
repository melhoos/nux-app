import React from 'react';
import Page, {Pages} from '../../interfaces/page'; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import '../../styles/home.scss';

const HomeWrapper = () => {
    return (
        <div className="home-wrapper">
            {Pages.map((p: Page, i: number) => (
                <a key={i} className="home-link" href={p.url}>
                    <FontAwesomeIcon icon={faSearch}/>
                    <span className="home-link-name">{p.name}</span>
                </a>
            ))}
        </div>
    )
}

export default HomeWrapper
