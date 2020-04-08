import React from 'react';

const SearchForm = () => {
    return (
        <form className="search-form">
            <label>
                <span>Søk i alt!</span>
                <input type="text" placeholder="Land, måned, navn på konferanse"/>
            </label>
            <button className="search-btn" type="submit">SØK!</button>
        </form>
    )
}

export default SearchForm;