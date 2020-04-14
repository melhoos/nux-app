import React from 'react';
import BackBtn from '../../shared/backBtn';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';

const CoursesWrapper = () => {
    return (
        <>
            <BackBtn url="/conferenecs-and-courses" name="Konferanser og kurs"/>
            <h1>Finn kurs!</h1>
            <p>Her har vi funnet noen nyttige linker til kursoversikter. Håper du liker dem.</p>
            <a className="page-link" target="_blank" rel="noopener noreferrer" href={"https://www.coursera.org/"}>
                <FontAwesomeIcon icon={faExternalLinkAlt}/>
                <span className="page-link-name">{"Coursera"}</span>
            </a>
            <a className="page-link" target="_blank" rel="noopener noreferrer" href={"https://www.ideou.com/"}>
                <FontAwesomeIcon icon={faExternalLinkAlt}/>
                <span className="page-link-name">{"Ideou"}</span>
            </a>
            <a className="page-link" target="_blank" rel="noopener noreferrer" href={"https://www.kursguiden.no/"}>
                <FontAwesomeIcon icon={faExternalLinkAlt}/>
                <span className="page-link-name">{"Kursguiden"}</span>
            </a>
            <a className="page-link" target="_blank" rel="noopener noreferrer" href={"https://www.nngroup.com/"}>
                <FontAwesomeIcon icon={faExternalLinkAlt}/>
                <span className="page-link-name">{"NN Group"}</span>
            </a>
            <a className="page-link" target="_blank" rel="noopener noreferrer" href={"https://www.meetup.com/"}>
                <FontAwesomeIcon icon={faExternalLinkAlt}/>
                <span className="page-link-name">{"Meetup"}</span>
            </a>
            <a className="page-link" target="_blank" rel="noopener noreferrer" href={"https://www.udemy.com/"}>
                <FontAwesomeIcon icon={faExternalLinkAlt}/>
                <span className="page-link-name">{"Udemy"}</span>
            </a>
        </>
    )
}

export default CoursesWrapper;