import React, {useState} from 'react';
import Data from '../../types/data';
import DataList from '../shared/dataList';
import SearchInput from '../shared/searchInput';
import conferenceData from '../../data/conferences.json';
import ConferenceJson from '../../interfaces/conferenceJson';
import '../../styles/conference.scss';

function conferenceMapper(conferenceJson: ConferenceJson[]): Data[] {
    return conferenceJson.map( (conferenceJ) => {
        return {...conferenceJ, startDate: new Date(conferenceJ.startDate), endDate: new Date(conferenceJ.endDate)}
    })
}

const ConferenceWrapper = () => {
    const mappedConferences = conferenceMapper(conferenceData)
    const [conferances, setConferances] = useState(mappedConferences)
    return (
        <>
            <p>Kurs og konferanser der du kan lære mer om NUX.</p>
            <SearchInput label="Hva vil du lære om? Hvor vil du dra? Når vil du dra? Prøv lykken!"  data={mappedConferences} filteredData={(c) => setConferances(c) } />
            <DataList elements={conferances}/>
            <p className="tips"><span>Tips oss:</span> Har du vært et sted? Kjenner du til kurs og konferanser? Du vet hvor du finner oss.</p>
        </>
    )
}

export default ConferenceWrapper;