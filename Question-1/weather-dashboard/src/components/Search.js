import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { useSearch } from '../context/weatherContext';

const Search = () => {
    const [searchText, setSearchText] = useState('');
    const { updateSearchQuery } = useSearch();

    const handleInputChange = (e) => {
        setSearchText(e.target.value);
    }

    return (
        <div className="search-container">
            <input 
                className="input-field" 
                placeholder="Search for your preferred city..."
                value={searchText}
                onChange={handleInputChange} />
            <CiSearch className="search-icon" onClick={() => updateSearchQuery(searchText)} />
        </div>
    )
}

export default Search