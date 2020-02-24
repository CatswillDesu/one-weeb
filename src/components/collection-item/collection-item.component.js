import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCollectionTitles } from '../../redux/collection/collection.selectors';
import { openEditModal } from '../../redux/collection/collection.actions';

import { ReactComponent as OptionsWheelIcon } from '../../assets/options-wheel.svg';

import './collection-item.styles.scss';

function CollectionItem({ item, openEditModal }) {
    let { posters: { small: posterUrl }, title, assesment, status, episodeCount, episodesWatched, id } = item;

    const posterStyles = {
        backgroundImage: `url(${posterUrl})`
    }

    episodesWatched = episodeCount ? episodesWatched : '0';
    episodeCount = episodeCount ? episodeCount : '—';

    return (
        <li className="collection-item">
            <Link className="sub-container" to={`/anime/${id}`}>
                <div className="poster" style={posterStyles} />
                <h4 className="title">{title}</h4>
            </Link>
            <span className="progress">{episodesWatched} / {episodeCount}</span>
            <span className="assesment">{assesment}</span>
            <span className="status">{status}</span>
            <button className="modal-button" onClick={() => openEditModal(item)} ><OptionsWheelIcon /></button>
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
        openEditModal: titleToEdit => dispatch(openEditModal(titleToEdit))
    }
}

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(CollectionItem));