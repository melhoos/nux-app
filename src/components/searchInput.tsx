import React from 'react';
import Conference from '../interfaces/conference';

interface Props {
    conferences: Conference[],
    filteredConferences: (conferences: Conference[]) => void
}

function SearchInput(props: Props) {
    const {conferences, filteredConferences} = props;

    const filter = (event: React.FormEvent<HTMLInputElement>) => {
        const input = event.currentTarget.value.toLowerCase();
        const splittedInput = input.split(" ").filter(i => i);

        const filtered = conferences.filter( (c: Conference) => {
            const stringify = JSON.stringify(c).toLowerCase();
            return splittedInput.every((word: string) => {
                return stringify.includes(word)
            })
        })
        filteredConferences(filtered)
    }

    return (
        <input type="text" name="conferance-search" onKeyUp={filter} />
    )
}

export default SearchInput;