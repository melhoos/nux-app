import React, {useState} from 'react';
import Data from '../../types/data';
import DataList from '../shared/dataList';
import ShowAllBtn from '../shared/showAllBtn';
import SearchInput from '../shared/searchInput';
import conferenceData from '../../data/conferences.json';
import ConferenceJson from '../../interfaces/conferenceJson';

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
            <h1>Kurs og konferanser</h1>
            <p>Kurs og konferanser der du kan lære mer om NUX.</p>
            <SearchInput label="Hva vil du lære om? Hvor vil du dra? Når vil du dra? Prøv lykken!"  data={mappedConferences} filteredData={(c) => setConferances(c) } />
            <ShowAllBtn allElements={mappedConferences} filteredElements={conferances} setAll={() => setConferances(mappedConferences)}/>
            <DataList elements={conferances}/>
            <p className="tips"><span>Tips oss:</span> Har du vært et sted? Kjenner du til kurs og konferanser? Du vet hvor du finner oss.</p>
        </>
    )
}

export default ConferenceWrapper;