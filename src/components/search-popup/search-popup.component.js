import React from 'react';

import PopupItem from '../popup-item/popup-item.component';

import './search-popup.styles.scss';

function SearchPopup({ filteredTitlesData: { data: filteredTitles } }) {
    // const popupItems = filteredTitles.map(item => console.log(item))
    const popupItems = filteredTitles.map(item => <PopupItem key={item.id} id={item.id} {...item.attributes} />)

    return (
        <div className="search-popup">
            {popupItems}
        </div>
    )
}

export default SearchPopup;