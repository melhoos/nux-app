import React from 'react';
import BuzzwordService from './buzzwordService';
import BuzzwordContent from './buzzwordContent';

const loading = () => {
    return (<div className="loading"> Loading .. </div>)
}

const error = () => {
    return (<div className="error">Errror!</div>)
}

const BuzzwordWrapper = () => {
    const bs = BuzzwordService();

    return (
        <>
            <h1>Buzzwords</h1>
            <p>Vil du bli en skikkelig "besserwisser" på nye teknlogoier? Ingen problem. Her får du kortversjonene du kan briefe med i møter og middagsselskap.</p>
            {bs.status === 'loading' && loading()}
            {bs.status === 'loaded' && <BuzzwordContent buzzwords={bs.payload}/>} 
            {bs.status === 'error' && error()}
            <p className="tips"><span>Tips oss:</span> Savner du teknologier? Vi kjenner folk som kjenner folk. Og så finner vi ut av det.</p> 
        </>
    )
}

export default BuzzwordWrapper