import React, {useState} from 'react';
import ConferenceList from './conferenceList';
import conferenceData from '../data/conferences.json';
import SearchInput from './searchInput';

function ConferenceWrapper() {
    const [conferances, setConferances] = useState(conferenceData);

    return (
        <>
            <SearchInput  conferences={conferenceData} filteredConferences={(c) => setConferances(c) } />
            <ConferenceList conferences={conferances}/>
        </>
    )
}

export default ConferenceWrapper