import React, {useState} from 'react';
import Data from '../../types/data';
import DataList from '../shared/dataList';
import Podcast from '../../interfaces/podcast';
import SearchInput from '../shared/searchInput';
import podcastData from '../../data/podcasts.json';

function mappedPodcasts(podcasts: Podcast[]): Data[] {
    return podcasts.map(p => {
        return {...p}
    })
}

function InspirationWrapper() {
    const [podcasts, setPodcasts] = useState(mappedPodcasts(podcastData))
    return (
        <>
            <p>Ikke akkurat lett å finne igjen innlegg på Slack! Og enda værre er det å finne det på SharePoint. Så derfor har vi samlet noen her.</p>
            <SearchInput data={podcastData} filteredData={(c) => setPodcasts(c) } />
            <DataList elements={podcasts}/>
            <p className="tips"><span>Tips oss:</span> Har du lest noe skikkelig bra? Eller hørt om en god podcast?</p>
        </>
    )
}

export default InspirationWrapper