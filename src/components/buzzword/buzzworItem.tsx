import React, {useState} from 'react';
import {Collapse} from 'react-bootstrap';
import Buzzword from '../../interfaces/buzzword';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';

interface Props {
    buzzword: Buzzword
}

const BuzzwordItem = (props: Props) => {
    const [open, setOpen] = useState(false);
    const {buzzword} = props

    return (
        <button className="buzzword-item" onClick={() => setOpen(!open)} aria-controls="buzzword-item" aria-expanded={open}>
            <span className="buzzword-title">
                <h2>{buzzword.Title}</h2>
                <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
            </span>
            <Collapse in={open}>
                <p className="buzzword-description" id="buzzword-item">{buzzword.Description}</p>
            </Collapse>
        </button>
    )
}

export default BuzzwordItem