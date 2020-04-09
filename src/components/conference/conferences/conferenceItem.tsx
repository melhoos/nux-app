import React, {useState} from 'react';
import {Collapse} from 'react-bootstrap';
import Conference from '../../../interfaces/conference';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {months, days} from '../../../utility/datetime';
import {faChevronUp, faChevronDown, faMapMarkerAlt, faCalendarAlt, faClock} from '@fortawesome/free-solid-svg-icons';

interface Props {
    conference: Conference
}

const formatDays = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    if (start === end) {
        const day: number = startDate.getDay();
        return (<>{days[day]}</>)
    } else {
        const startDay: number = startDate.getDay();
        const endDay: number = endDate.getDay();
        const numberOfDays = (Math.floor((endDate.getTime() - startDate.getTime())/(1000*60*60*24))) + 1;
        return (<>{`${days[startDay]} - ${days[endDay]} (${numberOfDays} dager)`}</>)
    }
}

const formatMonthYear = (start: string) => {
    const startDate = new Date(start);
    const month: number = startDate.getMonth();
    const year: number = startDate.getFullYear();
    return (<>{`${months[month]} ${year}`}</>)
}

const ConferenceItem = (props: Props) => {
    const [open, setOpen] = useState(false);
    const {conference} = props;
    return (
        <button className="conference-item" onClick={() => setOpen(!open)} aria-controls="conference-item" aria-expanded={open}>
            <span className="conference-head">
                <h2>{conference.Name}</h2>
                <p className="conference-location"><FontAwesomeIcon icon={faMapMarkerAlt} className="conference-icon"/> {conference.City}, {conference.Country} </p>
                <p className="conference-month-year"><FontAwesomeIcon icon={faCalendarAlt} className="conference-icon"/> {formatMonthYear(conference.StartDate)} </p>
                <p className="conference-days"><FontAwesomeIcon icon={faClock} className="conference-icon"/> {formatDays(conference.StartDate, conference.EndDate)} </p>
                <p className="chevron-icon">
                    <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
                </p>
            </span>
            <Collapse in={open}>
                <div id="conference-item">
                    <p className="conference-description">{conference.Description}</p>
                    <a className="conference-link" href={conference.URL} target="_blank" rel="noopener noreferrer">Gå til hjemmesiden</a>
                </div>
            </Collapse>
        </button>
    )
}

export default ConferenceItem;