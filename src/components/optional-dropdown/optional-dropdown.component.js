import React, { useState } from 'react';

import './optional-dropdown.styles.scss';

function OptionalDropdown({ selectOptions, defaultOption, extraClass, onChange }) {
    const [ currentOption, setCurrentOption ] = useState(defaultOption);
    const [ isOpen, setIsOpen ] = useState(false);

    const mappedSelectOptions = selectOptions.filter(option => option !== currentOption).map(option => <div key={option} onClick={() => {setCurrentOption(option); onChange(option)}} className="select-option">{option}</div>)

    return (
        <div className={`optional-dropdown ${extraClass}`}  onClick={() => setIsOpen(!isOpen)}>
            <div className={`current-option ${isOpen ? 'opened' : 'closed'}`}>{currentOption}</div>
            { isOpen && <div className="select-options">{mappedSelectOptions}</div> }
        </div>
    )
}

export default OptionalDropdown;