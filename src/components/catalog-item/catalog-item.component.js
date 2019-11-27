import React from 'react';
import { Link } from 'react-router-dom';

import './catalog-item.styes.scss';

function CatalogItem(props) {
    const { canonicalTitle: fullTitle, posterImage: { small: imageUrl }, startDate: releaseDate, averageRating, titleId } = props;
    const shortTitle = fullTitle.length > 16 ? (fullTitle.slice(0, 14) + '...') : fullTitle;
    const releaseYear = releaseDate.slice(0, 4);
    const rating = (+averageRating / 10).toFixed(2);

    console.log(props);
    
    const styles = {
        backgroundImage: `url(${imageUrl})`
    }

    return (
        <li className="catalog-item">
            <Link to={`/anime/${titleId}`} class="summary-link">
                <div style={styles} className="poster"></div>
                <div className="footer">
                    <h4 className="title">{shortTitle}</h4>
                    <div className="details">
                        <span className="release-date">{releaseYear}</span>
                        <span className="type">{rating}</span>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default CatalogItem;