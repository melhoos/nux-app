import React, {useState} from 'react';
import DataList from './dataList';
import conferenceData from '../data/conferences.json';
import SearchInput from './searchInput';
import ConferenceJson from '../interfaces/conferenceJson';
import Data from '../types/data';

function conferenceMapper(conferenceJson: ConferenceJson[]): Data[] {
    return conferenceJson.map( (conferenceJ) => {
        return {...conferenceJ, startDate: new Date(conferenceJ.startDate), endDate: new Date(conferenceJ.endDate)}
    })
}

function tableHeaders(): string[] { // todo: add "hide-on-mobile" value for each table header
    return ['name', 'startDate', 'endDate', 'tags']
}

function ConferenceWrapper() {
    const mappedConferences = conferenceMapper(conferenceData)
    const [conferances, setConferances] = useState(mappedConferences)
    return (
        <>
            <SearchInput data={mappedConferences} filteredData={(c) => setConferances(c) } />
            <DataList data={conferances} tableHeaders={tableHeaders()}/>
        </>
    )
}

export default ConferenceWrapper