import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchGenresStart } from '../../redux/catalog/catalog.actions';
import { selectGenresData, selectIsGenresDataLoaded } from '../../redux/catalog/catalog.selectors';

import GenresPage from './genres.component';
import Spinner from '../../components/spinner/spinner.component';

import './genres.styles.scss';

function GenresPageContainer({ genresData, isGenresDataLoaded, fetchGenresStart }) {
    useEffect(() => {
        fetchGenresStart();
    }, [fetchGenresStart])

    return (
        isGenresDataLoaded ?
        <GenresPage genresData={genresData} />
        :
        <Spinner />
    )
}

function mapStateToProps() {
    return createStructuredSelector({
        genresData: selectGenresData,
        isGenresDataLoaded: selectIsGenresDataLoaded
    })
}

function mapDispatchToProps(dispatch) {
    return {
        fetchGenresStart: () => dispatch(fetchGenresStart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenresPageContainer)