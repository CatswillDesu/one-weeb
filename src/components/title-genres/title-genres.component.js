import React from 'react';
import { Link } from 'react-router-dom';

import './title-genres.styles.scss';

function TitleGenres({ genresData }) {
    const mappedGenreItems = genresData.map(({ id, attributes: { name, slug } }) => {
        return (
            <li key={id} className="genre-item">
                <Link to={`/catalog/genres/${slug}`} className="genre-link">{name}</Link>
            </li>
        )
    })

    return (
        <ul className="title-genres">
            {mappedGenreItems}
        </ul>
    )
}

export default TitleGenres;