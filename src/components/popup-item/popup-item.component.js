import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearSearchField } from '../../redux/search-field/search-field.actions';

import './popup-item.styles.scss';

function PopupItem({ id, canonicalTitle: fullTitle, posterImage, averageRating, ageRating, startDate: releaseDate, episodeCount, subtype, clearSearchField }) {
    const shortTitle = fullTitle.length > 16 ? (fullTitle.slice(0, 14) + '...') : fullTitle;
    const mediumTitle = fullTitle.length > 24 ? (fullTitle.slice(0, 22) + '...') : fullTitle;
    const posterUrl = posterImage ? posterImage.tiny : 'not found';
    const rating = (averageRating / 10).toFixed(2);
    const releaseYear = releaseDate ? releaseDate.slice(0, 4) : '???';
    const episodesText =  episodeCount !== null ? `${episodeCount} ${+episodeCount > 1 ? 'episodes' : 'episode'}` : 'episodes count is unknown'; 

    return (
        <Link to={`/summary/${id}`} className="popup-item" onClick={clearSearchField} >
            <h3 className="title">{mediumTitle}</h3>
            <div className="sub-container">
                <img className="poster" src={posterUrl} alt={shortTitle} />
                <div className="details">
                    <span className="detail-item release-date">{releaseYear}</span>
                    <span className="detail-item rating">{rating}</span>
                    <span className="detail-item episodes-count">{episodesText}</span>
                    <span className="detail-item subtype">{subtype}</span>
                    <span className="detail-item age-rating">{ageRating}</span>
                </div>
            </div>
        </Link>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        clearSearchField: () => dispatch(clearSearchField())
    }
}

export default connect(null, mapDispatchToProps)(PopupItem);