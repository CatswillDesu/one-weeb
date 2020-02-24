import React from 'react';

import PopupItem from '../popup-item/popup-item.component';

import './search-popup.styles.scss';

function SearchPopup({ filteredTitlesData: { data: filteredTitles } }) {
    const popupItems = filteredTitles.map(({ id, attributes }) => <PopupItem key={id} id={id} {...attributes} />)

    return (
        <div className="search-popup">
            {popupItems}
        </div>
    )
}

export default SearchPopup;