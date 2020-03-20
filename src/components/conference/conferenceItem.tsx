import React, {useState} from 'react';
import { Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Conference from '../../interfaces/conference';

interface Props {
    conference: Conference
}

function getMonth(d: Date): string {
    const months = ['Jan','Feb','Mar','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Des']
    return `${months[d.getMonth()]} ${d.getFullYear()}`
}

const ConferenceItem = (props: Props) => {
    const {conference} = props;
    const [open, setOpen] = useState(false);

    return (
        <button className="data-item" onClick={() => setOpen(!open)} aria-controls="example-collapse-text"
        aria-expanded={open}>
            <span className="conference-title">
                <h2>{conference.conferenceName}</h2>
                <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
            </span>
            <p className="data-content"> 
                {`${conference.country}, ${conference.city}, ${getMonth(conference.startDate)}` }
            </p>
            <Collapse in={open}>
                <p className="data-content conference-description" id="example-collapse-text">{conference.description}</p>
            </Collapse>
        </button>
    )
}

export default ConferenceItem;