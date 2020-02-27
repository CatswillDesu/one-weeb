import React from 'react';
import { Link } from 'react-router-dom';

import './genre-item.styles.scss';

function GenreItem({ name: title, slug }) {
    const illustrationStyles = {
        backgroundImage: `url(images/genre-illustrations/${slug}.jpg)` 
    }

    return (
        <li className="genre-item">
            <Link className="genre-link" to={`/catalog/genres|${slug}`}>
                <div style={illustrationStyles} className="illustration" alt={slug} >
                    <h3 className="title">{title}</h3>
                </div>
            </Link>
        </li>
    )
}

export default GenreItem;