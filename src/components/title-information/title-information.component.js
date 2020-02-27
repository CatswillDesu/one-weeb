import React from 'react';

import './title-information.styles.scss';

function TitleInformation({ type, status, episodeLength, episodeCount, ageRating, averageRating }) {
    type = type === 'TV' ? 'TV Series' : type;
    episodeLength = `${episodeLength} min.` 
    averageRating = (+averageRating / 10).toFixed(2);
    episodeCount = episodeCount === null ? '—' : episodeCount;


    return (
        <div className="information">
            <strong className="header">Details</strong>
            <div className="detail-line">
                <span className="type">Type</span>
                <span className="value">{type}</span>
            </div>
            <div className="detail-line">
                <span className="type">Status</span>
                <span className="value">{status}</span>
            </div>
            <div className="detail-line">
                <span className="type">Rating</span>
                <span className="value">{ageRating}</span>
            </div>
            <div className="detail-line">
                <span className="type">Episodes</span>
                <span className="value">{episodeCount}</span>
            </div>
            <div className="detail-line">
                <span className="type">Episode length</span>
                <span className="value">{episodeLength}</span>
            </div>
            <div className="detail-line">
                <span className="type">Community approval</span>
                <span className="value">{averageRating}</span>
            </div>
        </div>
    )
}

export default TitleInformation;