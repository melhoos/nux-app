import React, {ReactElement} from 'react';
import Data from '../../types/data';
import Buzzword from '../../interfaces/buzzword';
import Conference from '../../interfaces/conference';
import Podcast from '../../interfaces/podcast';
import Project from '../../interfaces/project';

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

function getMonth(d: Date): string {
    const months = ['Jan','Feb','Mar','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Des']
    return `${months[d.getMonth()]} ${d.getFullYear()}`
}

function formatData (data: Data, i: number): ReactElement {

    if (instanceOfBuzzword(data)) {
        return (<p key={i}><span>{data.buzzwordName}:</span> {data.description}</p>)
    } else if (instanceOfConference(data)) {
        return (
            <p key={i}>
                <span>{data.conferenceName}</span>, {data.location}, {getMonth(data.startDate)}, <a href={data.link} target="_blank" rel="noopener noreferrer">(link)</a>
            </p>)
    } else if (instanceOfPodcast(data)) {
        return ( <p key={i}><span>{data.podcastName}</span> - {data.episodeName} <a href={data.link} target="_blank" rel="noopener noreferrer">(link)</a></p> )
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