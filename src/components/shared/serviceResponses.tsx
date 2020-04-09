import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const onLoading = () => {
    return (
        <div className="loading">
            <Spinner animation="grow" /> 
        </div>
    )
}

const onError = () => {
    return (<div className="error">Error!</div>)
}

const notFound = () => {
    return (<div className="notfound">Oisann! Vi fant ingenting!</div>)
}

export {onLoading, notFound, onError};