import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { selectCollectionTitles } from '../../redux/collection/collection.selectors';
import { addTitleToCollection } from '../../redux/collection/collection.actions';

import './catalog-item.styes.scss';

function CatalogItem({ item, collectionTitles, addTitleToCollection }) {
    let { canonicalTitle: fullTitle, posterImage, startDate: releaseDate, averageRating, id, itemSize } = item;
    const shortTitle = fullTitle.length > 16 ? (fullTitle.slice(0, 14) + '...') : fullTitle;
    const mediumTitle = fullTitle.length > 24 ? (fullTitle.slice(0, 22) + '...') : fullTitle;
    const releaseYear = releaseDate ? releaseDate.slice(0, 4) : '???';
    const rating = (+averageRating / 10).toFixed(2);
    const imageUrl = posterImage ? posterImage.small : 'not found';

    const isButtonHidden = !!collectionTitles[id];
    
    const styles = {
        backgroundImage: `url(${imageUrl})`
    }

    return (
        <li className={`catalog-item ${itemSize === 'small' ? 'sm-size' : 'md-size'}`}>
        { !isButtonHidden && <button className="to-collection-button" onClick={() => {addTitleToCollection({collectionTitles, titleToAdd: item});}}>Add to collection</button>}
            <Link to={`/summary/${id}`} className="summary-link">
                <div style={styles} className="poster"></div>
                <div className="footer">
                    <h4 className="title">{itemSize === 'small' ? shortTitle : mediumTitle}</h4>
                    <div className="details">
                        <span className="release-date">{releaseYear}</span>
                        <span className="type">{rating}</span>
                    </div>
                </div>
            </Link>
        </li>
    )
}

function mapStateToProps() {
    return createStructuredSelector({
        collectionTitles: selectCollectionTitles
    })
}

function mapDispatchToProps(dispatch) {
    return {
        addTitleToCollection: collectionData => dispatch(addTitleToCollection(collectionData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogItem);