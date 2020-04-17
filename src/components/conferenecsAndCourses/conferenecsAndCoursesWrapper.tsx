import React from 'react';
import BackBtn from '../shared/backBtn';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faHeart} from '@fortawesome/free-solid-svg-icons';

const ConferenceWrapper = () => {
    return (
        <>
            <BackBtn url="/" name="Hjem"/>
            <h1>Konferanser og kurs</h1>
            <p>Vi har har gjort den harde jobben for deg, nemlig sett på alle kurs og konferanser for deg - slik at du slipper å se gjennom all ræl som finnes der ute. Håper du finner noe du liker.</p>
            <a className="page-link" href={"/conferenecs-and-courses/confs"}>
                <FontAwesomeIcon icon={faSearch}/>
                <span className="page-link-name">{"Finn konferanse"}</span>
            </a>
            <a className="page-link" href={"/conferenecs-and-courses/courses"}>
                <FontAwesomeIcon icon={faSearch}/>
                <span className="page-link-name">{"Finn kurs"}</span>
            </a>
            <a className="page-link" href={"/conferenecs-and-courses/feedback"}>
                <FontAwesomeIcon icon={faHeart}/>
                <span className="page-link-name">{"Skriv en tilbakemedling fra konferanse eller kurs"}</span>
            </a>
        </>
    )
}

export default ConferenceWrapper;