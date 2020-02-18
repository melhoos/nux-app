import React, {useState} from 'react';
import podcastData from '../data/podcasts.json';
import DataList from './dataList';
import Podcast from '../interfaces/podcast';
import Data from '../types/data';
import SearchInput from './searchInput';

function tableHeaders(): string[] {
    return ['podcastName', 'episodeName', 'tags']
}

function mappedPodcasts(podcasts: Podcast[]): Data[] {
    return podcasts.map(p => {
        return {...p}
    })
}

function PodcastWrapper() {
    const [podcasts, setPodcasts] = useState(mappedPodcasts(podcastData))
    return (
        <>
            <SearchInput data={podcastData} filteredData={(c) => setPodcasts(c) } />
            <DataList data={podcasts} tableHeaders={tableHeaders()}/>
        </>
    )
}

export default PodcastWrapper