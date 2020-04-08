import React, {useEffect, useState} from 'react';
import BackBtn from '../../shared/backBtn';
import {getConferences, getConferencesFromToday} from './conferenceService';
import Conference from '../../../interfaces/conference';
import ConferenceItem from './conferenceItem';
import SearchForm from './searchForm';
import {onLoading, onError} from '../../shared/serviceResponses';
import {Service, ConnectionStatus} from '../../../utility/service';
import '../../../styles/conference.scss';


const onSuccess = (conferences: Conference[]) => {
    return (
        <>
            {
               conferences.length ? 
               conferences.map((c: Conference, i: number) => (<ConferenceItem conference={c} key={i}/>)) :
               onError() 
            }
        </>
    )
}

const ConferenceList = () => {
    const [conferences, setConferences] = useState<Service<Conference[]>>({status: ConnectionStatus.LOADING})
    const [showOnlyFutureConfs, setShowOnlyFutureConfs] = useState(true);
    useEffect(() => {
        showOnlyFutureConfs ? 
            getConferencesFromToday().then((c) => setConferences(c)) :
            getConferences().then((c) => setConferences(c));
    }, [showOnlyFutureConfs])

    return (
        <>
            <BackBtn url="/conferences" name="Konferanser"/>
            <h1>Søk i konferanser</h1>
            <SearchForm/>
            <label className="conference-checkbox-wrapper">
                <input className="conference-checkbox" type="checkbox" aria-label="Checkbox for following text input" checked={showOnlyFutureConfs} onChange={() => setShowOnlyFutureConfs(!showOnlyFutureConfs)} />
                <span className="conference-checkbox-label"> Vis kun fremtidige konferanser. </span>
            </label>
            {conferences.status === ConnectionStatus.LOADING && onLoading()}
            {conferences.status === ConnectionStatus.ERROR && onError()}
            {conferences.status === ConnectionStatus.SUCCESS && onSuccess(conferences.payload)}
        </>
    )
}

export default ConferenceList;