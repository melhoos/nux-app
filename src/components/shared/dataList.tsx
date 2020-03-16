import React, {ReactElement} from 'react';
import Data from '../../types/data';
import Buzzword from '../../interfaces/buzzword';
import Conference from '../../interfaces/conference';
import Podcast from '../../interfaces/podcast';
import Project from '../../interfaces/project';
import ConferenceItem from '../conference/conferenceItem';

interface Props {
    elements: Data[]
}

function instanceOfBuzzword(object: Data): object is Buzzword {
    return 'buzzwordName' in object;
}

function instanceOfConference(object: Data): object is Conference {
    return 'conferenceName' in object
}

function instanceOfPodcast(object: Data): object is Podcast {
    return 'podcastName' in object
}

function instanceOfProject(object: Data): object is Project {
    return 'projectName' in object
}

function renderBuzzword(buzzWord: Buzzword) {
    return (
        <div className="data-item">
            <h2>{buzzWord.buzzwordName}</h2>
            <p>{buzzWord.description}</p>
        </div>
    )
}

function formatData (data: Data, i: number): ReactElement {

    if (instanceOfBuzzword(data)) {
        return renderBuzzword(data)
    } else if (instanceOfConference(data)) {
        return (<ConferenceItem conference={data}/>)
        //return ( <p key={i}> <span><a href={data.link} target="_blank" rel="noopener noreferrer">{data.conferenceName}</a></span>, {data.location}, {getMonth(data.startDate)} </p>)
    } else if (instanceOfPodcast(data)) {
        return ( <p key={i}><span> <a href={data.link} target="_blank" rel="noopener noreferrer">{data.podcastName}</a></span> - {data.episodeName}</p> )
    } else if (instanceOfProject(data)) {
    return (<p key={i}><span>{data.projectName}</span>, {data.customer}, {data.kam}, {data.description}</p>)
    } else {
        return (<div key={i}></div>)
    }
}

const DataList = (props: Props) => {
    const {elements} = props
    return ( <> { elements.map((d: Data, i: number) => formatData(d, i) )} </> )
}

export default DataList