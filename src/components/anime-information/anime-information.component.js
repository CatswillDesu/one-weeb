import React from 'react';

import './anime-information.styles.scss';

import DetailLine from '../detail-line/detail-line.component';

function AnimeInformation({ type, status, episodeLength, episodeCount, ageRating, averageRating }) {
    type = type === 'TV' ? 'TV Series' : type;
    episodeLength = `${episodeLength} min.` 
    averageRating = (+averageRating / 10).toFixed(2);

    return (
        <div className="information">
            <strong className="header">Information</strong>
            <DetailLine type="Type" value={type} />
            <DetailLine type="Status" value={status} />
            <DetailLine type="Age rating" value={ageRating} />
            <DetailLine type="Episodes" value={episodeCount} />
            <DetailLine type="Episode length" value={episodeLength} />
            <DetailLine type="Rating" value={averageRating} />
        </div>
    )
}

export default AnimeInformation;