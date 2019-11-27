import React from 'react';

import './summary.styles.scss';

import AnimeInformation from '../../components/anime-information/anime-information.component';

function SummaryPage(props) {
    const { posterImage: { medium: posterUrl }, canonicalTitle: title, subtype: type, status, episodeCount, episodeLength, ageRating, averageRating } = props;

    const ratingScore = (+averageRating / 10).toFixed(2);
    const scoreClass = ratingScore < 5 ? 'bad' : (ratingScore < 7 ? 'neutral' : 'good');

    console.log(props);

    const informationData = {
        type,
        status,
        episodeCount,
        episodeLength,
        ageRating,
        averageRating
    }

    console.log(informationData)

    const posterStyles = {
        backgroundImage: `url(${posterUrl})`
    }

    return (
        <div className="anime">
            <h2 className="title">{title}</h2>
            <div className="summary-container">
                <div className="poster" style={posterStyles} >
                    <span className={`rating-score ${scoreClass}`}>{ratingScore}</span>
                </div>
                <AnimeInformation {...informationData} />
            </div>
        </div>
    )
}

export default SummaryPage;