import React from 'react';
import Data from '../types/data';
import '../styles/searchInput.scss';

interface Props {
    data: Data[],
    label?: string,
    filteredData: (data: Data[]) => void
}

function SearchInput(props: Props) {
    const {data, label, filteredData} = props;

    const filter = (event: React.FormEvent<HTMLInputElement>) => {
        const input = event.currentTarget.value.toLowerCase()
        const splittedInput = input.split(" ").filter(i => i)

        const filtered = data.filter( (c: Data) => {
            const stringify = JSON.stringify(c).toLowerCase()
            return splittedInput.every((word: string) => {
                return stringify.includes(word)
            })
        })
        filteredData(filtered)
    }

    return (
        <div className="searchInput">
            <label>{label}</label>
            <input type="text" placeholder="Søk..." name="search-input" onKeyUp={filter} />
        </div>
    )
}

export default SearchInput