import React, {useState} from 'react';
import ConferenceList from './conferenceList';
import conferenceData from '../data/conferences.json';

function ConferenceWrapper() {
    const [conferances, setConferances] = useState(conferenceData);

    const filter = (event: React.FormEvent<HTMLInputElement>) => {
        const input = event.currentTarget.value.toLowerCase();
        const filtered = conferenceData.filter(c => {
            const stringify = JSON.stringify(c).toLowerCase();
            return stringify.includes(input)
        })
        setConferances(filtered)
    }

    return (
        <>
            <input type="text" name="conferance-search" onKeyUp={filter} />
            <ConferenceList conferences={conferances}/>
        </>
    )
}

export default ConferenceWrapper