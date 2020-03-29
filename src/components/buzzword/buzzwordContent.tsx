import React, {useState} from 'react';
import Data from '../../types/data';
import DataList from '../shared/dataList';
import ShowAllBtn from '../shared/showAllBtn';
import SearchInput from '../shared/searchInput';
import Buzzword from '../../interfaces/buzzword';

interface Props {
    buzzwords: Buzzword[]
}

function buzzwordMapper(buzzwords: Buzzword[]): Data[] {
    return buzzwords.map(b => {return {...b}})
}

const BuzzwordContent = (props: Props) => {
    const {buzzwords} = props
    const buzzwordAsData = buzzwordMapper(buzzwords);
    const [filteredBuzzwords, setFilteredBuzzwords] = useState<Data[]>(buzzwordAsData)
    return (
        <>
            <SearchInput label="Hva vil du briefe med?" data={buzzwordAsData} filteredData={(b) => setFilteredBuzzwords(b) } />
            <ShowAllBtn allElements={buzzwordAsData} filteredElements={buzzwords} setAll={() => setFilteredBuzzwords(buzzwordAsData)}/>
            <DataList elements={filteredBuzzwords}/>
        </>
    )
}

export default BuzzwordContent