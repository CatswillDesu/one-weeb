import React from 'react';

import './title-information.styles.scss';

import DetailLine from '../detail-line/detail-line.component';

function TitleInformation({ type, status, episodeLength, episodeCount, ageRating, averageRating }) {
    type = type === 'TV' ? 'TV Series' : type;
    episodeLength = `${episodeLength} min.` 
    averageRating = (+averageRating / 10).toFixed(2);
    episodeCount = episodeCount === null ? '—' : episodeCount;


    return (
        <div className="information">
            <strong className="header">Details</strong>
            <DetailLine type="Type" value={type} />
            <DetailLine type="Status" value={status} />
            <DetailLine type="Rating" value={ageRating} />
            <DetailLine type="Episodes" value={episodeCount} />
            <DetailLine type="Episode length" value={episodeLength} />
            <DetailLine type="Community approval" value={averageRating} />
        </div>
    )
}

export default TitleInformation;