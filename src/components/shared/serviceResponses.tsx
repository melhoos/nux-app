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

export {onLoading, onError};