import React, { useState } from 'react';

import './search-field.styles.scss';

function SearchField() {
    function handleChange(event) {
        const { value } = event.target;
        setSearchInput(value);
    }

    const [searchInput, setSearchInput] = useState('');

    return (
        <input
            className="search-field" 
            placeholder="Search..."
            value={searchInput}
            onChange={handleChange}
        />
    )
}

export default SearchField;