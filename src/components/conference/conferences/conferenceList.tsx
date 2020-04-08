import React, {useEffect, useState} from 'react';
import BackBtn from '../../shared/backBtn';
import {getConferences} from './conferenceService';
import Conference from '../../../interfaces/conference';
import ConferenceItem from './conferenceItem';
import {onLoading, onError} from '../../shared/serviceResponses';
import {Service, ConnectionStatus} from '../../../utility/service';

const onSuccess = (conferences: Conference[]) => {
    return (conferences.length) ? 
        conferences.map((c: Conference, i: number) => (<ConferenceItem conference={c} key={i}/>)) :
        onError()
}

const ConferenceList = () => {
    const [conferences, setConferences] = useState<Service<Conference[]>>({status: ConnectionStatus.LOADING})

    useEffect(() => {
        getConferences().then((c) => setConferences(c))
    }, [])

    return (
        <>
            <BackBtn url="/conferences" name="Konferanser"/>
            <h1>Søk i konferanser</h1>
            {conferences.status === ConnectionStatus.LOADING && onLoading()}
            {conferences.status === ConnectionStatus.ERROR && onError()}
            {conferences.status === ConnectionStatus.SUCCESS && onSuccess(conferences.payload)}
        </>
    )
}

export default ConferenceList;