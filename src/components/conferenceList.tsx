import React from 'react';

interface Conference {
    id: number,
    name: string,
    location: string,
    startDate: string,
    endDate: string, 
    link: string,
    description: string
}

interface Props {
    conferences: Conference[]
}

const ConferenceList = (props: Props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th> Name </th>
                    <th> Date </th>
                </tr>
            </thead>
            <tbody>
                { props.conferences.map(c => (<tr key={c.id}>
                    <td>{c.name}</td>
                    <td>{c.startDate} - {c.endDate}</td>
                </tr>))}
            </tbody>
        </table>
    )
}

export default ConferenceList;