import React, {useState} from 'react';
import Data from '../../types/data';
import SearchInput from '../shared/searchInput';
import DataList from '../shared/dataList';
import Buzzword from '../../interfaces/buzzword';
import buzzwordData from '../../data/buzzwords.json';

function buzzwordMapper(buzzwordData: Buzzword[]): Data[] {
    return buzzwordData.map(b => {return {...b}})
}

const BuzzwordWrapper = () => {
    const mappedBuzzwords = buzzwordMapper(buzzwordData)
    const [buzzwords, setBuzzwords] = useState(mappedBuzzwords)
    return (
        <div className="buzzwordWrapper">
            <p>Vil du bli en skikkelig "besserwisser" på nye teknlogoier? Ingen problem. Her får du kortversjonene du kan briefe med i møter og middagsselskap.</p>
            <SearchInput label="Hva vil du briefe med?" data={mappedBuzzwords} filteredData={(b) => setBuzzwords(b) } />
            <DataList elements={buzzwords}/>
            <p className="tips"><span>Tips oss:</span> Savner du teknologier? Vi kjenner folk som kjenner folk. Og så finner vi ut av det.</p>
        </div>
    )
}

export default BuzzwordWrapper