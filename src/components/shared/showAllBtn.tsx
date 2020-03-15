import React from 'react';
import Data from '../../types/data';

interface Props {
    allElements: Data[],
    filteredElements: Data[],
    setAll: () => void
}

const ShowAllBtn = (props: Props) => {
    const {allElements, filteredElements, setAll} = props
    return ( 
        <div className="showAllBtn">
            <button onClick={() => setAll()} disabled={allElements.length === filteredElements.length}>VIS ALLE</button>
        </div>
    )
}

export default ShowAllBtn