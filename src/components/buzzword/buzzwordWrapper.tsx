import React, {useEffect, useState} from 'react';
import BackBtn from '../shared/backBtn';
import BuzzwordItem from './buzzworItem';
import {getBuzzwords} from './buzzwordService';
import Buzzword from '../../interfaces/buzzword';
import {Service, ConnectionStatus} from '../../utility/service';
import {onLoading, onError} from '../shared/serviceResponses';
import '../../styles/buzzword.scss';

const onSuccess = (buzzwords: Buzzword[]) => {
    return (buzzwords.length) ? 
        (<div> {buzzwords.length && buzzwords.map((b: Buzzword, i: number) => <BuzzwordItem buzzword={b} key={i}/>)} </div>) : 
        onError();
}

const BuzzwordWrapper = () => {
    const [buzzwords, setBuzzwords] = useState<Service<Buzzword[]>>({status: ConnectionStatus.LOADING})

    useEffect(() => {
        getBuzzwords().then((bw) => setBuzzwords(bw))
    },[])

    return (
        <>
            <BackBtn url="/" name="Hjem"/>
            <h1>Faguttrykk</h1>
            <p>Vil du bli en skikkelig "besserwisser" på nye teknlogoier? Ingen problem. Her får du kortversjonene du kan briefe med i møter og middagsselskap.</p>
            {buzzwords.status === ConnectionStatus.LOADING  && onLoading()}
            {buzzwords.status === ConnectionStatus.SUCCESS && onSuccess(buzzwords.payload)} 
            {buzzwords.status === ConnectionStatus.ERROR && onError()} 
            <p className="tips">Tips oss: Savner du teknologier? Vi kjenner folk som kjenner folk. Og så finner vi ut av det.</p> 
        </>
    )
}

export default BuzzwordWrapper