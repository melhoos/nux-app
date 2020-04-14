import React, {useState} from 'react';
import {getConferencesBySearch} from './conferenceService';
import {isNumeric, removeItemFromArray} from '../../../utility/helpers';
import {months, monthsLongName} from '../../../utility/datetime';
import {Service} from '../../../utility/service';
import Conference from '../../../interfaces/conference';


interface Props {
    showOnlyFutureConfs: boolean,
    searchResponse: (cs: Service<Conference[]>) => void
}

const findYear = (searchValues: string[]) => {
    return searchValues.find((searchWord: string) => 
        searchWord.length === 4 && isNumeric(searchWord) && parseInt(searchWord) > 1990)
}

const findMonth = (searchValues: string[]) => {
    const possibleMonths: string[] = [...months, ...monthsLongName];
    return searchValues.find((searchWord: string) => possibleMonths.includes(searchWord.toLowerCase()) )
}


const SearchForm = (props: Props) => {
    const {showOnlyFutureConfs, searchResponse} = props;
    const [searchValue, setSearchValue] = useState("");

    const onSearch = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        let splitted = searchValue.split(" ").filter(function(i){return i}) // to not get empty values in array
        const month = findMonth(splitted);
        const year = findYear(splitted);
        splitted = (month !== undefined) ? removeItemFromArray(splitted, month) : splitted;
        splitted = (year !== undefined) ? removeItemFromArray(splitted, year) : splitted;
        getConferencesBySearch(showOnlyFutureConfs, splitted, month, year).then((response) => {
            searchResponse(response);
        })
    }

    return (
        <form className="search-form">
            <label>
                <span>Søk i alt!</span>
                <input type="text" placeholder="Land, måned, navn på konferanse" value={searchValue} onChange={e => setSearchValue(e.target.value) }/>
            </label>
            <button className="search-btn" type="submit" onClick={(e: React.MouseEvent<HTMLElement>) => onSearch(e)}>SØK!</button>
        </form>
    )
}

export default SearchForm;