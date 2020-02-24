import React from 'react';

import GenreItem from '../../components/genre-item/genre-item.component';

import './genres.styles.scss';

function GenresPage({ genresData }) {
    const genresArr = genresData.data;
    const mappedGenreItems = genresArr.map(({ id, attributes }) => <GenreItem key={id} id={id} {...attributes} />)
    
    return (
        <div className="genres-page">
            <h1 className="title">Popular Genres</h1>
            <ul className="genres-list">{mappedGenreItems}</ul>
        </div>
    )
}

export default GenresPage;