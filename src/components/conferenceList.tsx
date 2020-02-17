import React, { ReactElement } from 'react';
import Conference from '../interfaces/conference';

interface Props {
    conferences: Conference[]
}

function formatTags(tags: string[]): ReactElement {
    return ( <> {tags.map( (tag: string, i:number) => (<span key={i} className="tag"> {tag} </span>))} </> )
}

function formatDate(d: string): string {
    const date = new Date(d);
    const months = ['Jan','Feb','Mar','Apr','Mai','Jun','Jul','Aug','Sept','Okt','Nov','Des']
    return `${date.getDate()}.${months[date.getMonth()]}`;
}

const ConferenceList = (props: Props) => {
    return (
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Start Date </th>
                        <th> End Date </th>
                        <th> Tags </th>
                    </tr>
                </thead>
                <tbody>
                    { props.conferences.map(c => (
                    <tr key={c.id}>
                        <td className="conference-name">{c.name}</td>
                        <td>{formatDate(c.startDate)}</td>
                        <td>{formatDate(c.endDate)}</td>
                        <td>{formatTags(c.tags)}</td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default ConferenceList;