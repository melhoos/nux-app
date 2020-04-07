import React, {useEffect, useState} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import {getBuzzwords} from './buzzwordService';
import BuzzwordItem from './buzzworItem';
import Buzzword from '../../interfaces/buzzword';
import { Service, ConnectionStatus } from '../../utility/service';
import '../../styles/buzzword.scss';

const onLoading = () => {
    return (
        <div className="loading">
            <Spinner animation="grow" /> 
        </div>
    )
}

const onError = () => {
    return (<div className="error">Errror!</div>)
}

const onSuccess = (buzzwords: Buzzword[]) => {
    return (
        <div> {buzzwords.map((b: Buzzword) => <BuzzwordItem buzzword={b}/>)} </div>
    )
}

const BuzzwordWrapper = () => {
    const [buzzwords, setBuzzwords] = useState<Service<Buzzword[]>>({status: ConnectionStatus.LOADING})

    useEffect(() => {
        getBuzzwords().then((bw) => setBuzzwords(bw))
    },[])

    return (
        <>
            <h1>Buzzwords</h1>
            <p>Vil du bli en skikkelig "besserwisser" på nye teknlogoier? Ingen problem. Her får du kortversjonene du kan briefe med i møter og middagsselskap.</p>
            {buzzwords.status === ConnectionStatus.LOADING  && onLoading()}
            {buzzwords.status === ConnectionStatus.SUCCESS && onSuccess(buzzwords.payload)} 
            {buzzwords.status === ConnectionStatus.ERROR && onError()} 
            <p className="tips">Tips oss: Savner du teknologier? Vi kjenner folk som kjenner folk. Og så finner vi ut av det.</p> 
        </>
    )
}

export default BuzzwordWrapper