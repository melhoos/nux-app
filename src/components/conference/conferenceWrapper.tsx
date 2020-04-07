import React from 'react';
import BackBtn from '../backBtn';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faHeart} from '@fortawesome/free-solid-svg-icons';

const ConferenceWrapper = () => {
    return (
        <>
            <BackBtn/>
            <h1>Konferanser</h1>
            <p>Vi har har gjort den harde jobben for deg, nemlig sett på alle kurs, konferanser og sertifiseringer for deg - slik at du slipper å se gjennom all ræl som finnes der ute. Håper du finner noe du liker.</p>
            <a className="page-link" href={"/"}>
                <FontAwesomeIcon icon={faSearch}/>
                <span className="page-link-name">{"Finn konferanse"}</span>
            </a>
            <a className="page-link" href={"/"}>
                <FontAwesomeIcon icon={faHeart}/>
                <span className="page-link-name">{"Skriv en tilbakemedling fra konferanse"}</span>
            </a>
        </>
    )
}

export default ConferenceWrapper;