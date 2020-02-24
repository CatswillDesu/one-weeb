import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { addTitleToCollection, removeTitleFromCollection } from '../../redux/collection/collection.actions';
import { selectCollectionTitles } from '../../redux/collection/collection.selectors';

import TitleInformation from '../../components/title-information/title-information.component';
import { default as TitleGenres } from '../../components/title-genres/title-genres.container';

import './summary.styles.scss';

function SummaryPage({ title, genresLink, collectionTitles, addTitleToCollection, removeTitleFromCollection }) {
    const { posterImage, canonicalTitle, subtype: type, status, startDate: releaseDate, episodeCount, episodeLength, ageRating, averageRating, synopsis, id } = title;
    const ratingScore = (+averageRating / 10).toFixed(2);
    const scoreClass = ratingScore < 5 ? 'bad' : (ratingScore < 7 ? 'neutral' : 'good');
    const posterUrl = posterImage ? posterImage.medium : 'not found';
    const releaseYear = releaseDate ? releaseDate.slice(0, 4) : '';
    const isInCollection = !!collectionTitles.find(title => title.id === id);

    const informationData = {
        type,
        status,
        episodeCount,
        episodeLength,
        ageRating,
        averageRating
    }

    const posterStyles = {
        backgroundImage: `url(${posterUrl})`
    }

    return (
        <div className="anime-summary">
            <div className="sub-container">
                <h1 className="title">{canonicalTitle} <span className="release-year">{releaseYear}</span></h1>
                { !isInCollection ? 
                    <button className="collection-button" onClick={() => addTitleToCollection({collectionTitles, titleToAdd: title})} >Add to collection</button>
                    :
                    <button className="collection-button" onClick={() => removeTitleFromCollection({collectionTitles, titleToRemove: title})} >Remove from collection</button>
                }
            </div>
            <div className="sub-container">
                <div className="poster" style={posterStyles} >
                    <span className={`rating-score ${scoreClass}`}>{ratingScore}</span>
                </div>
                <div className="sub-container">
                    <p className="synopsis">{synopsis}</p>
                    <TitleGenres url={genresLink} />
                </div>
            </div>
            <TitleInformation {...informationData} />
        </div>
    )
}

function mapStateToProps() {
    return createStructuredSelector({
        collectionTitles: selectCollectionTitles
    })
}

function mapDispatchToProps(dispatch) {
    return {
        addTitleToCollection: collectionData => dispatch(addTitleToCollection(collectionData)),
        removeTitleFromCollection: collectionData => dispatch(removeTitleFromCollection(collectionData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryPage);