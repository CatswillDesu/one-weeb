import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchTitleGenresStart } from '../../redux/summary/summary.actions';
import { selectGenresData, selectIsGenresDataLoaded } from '../../redux/summary/summary.selectors';

import TitleGenres from './title-genres.component';
import Spinner from '../spinner/spinner.component';

function TitleGenresContainer({ url, fetchTitleGenresStart, genresData, isGenresDataLoaded }) {

    useEffect(() => {
        fetchTitleGenresStart(url);
    }, [fetchTitleGenresStart, url])

    return (isGenresDataLoaded ? 
        <TitleGenres genresData={genresData.data} />
        :
        <Spinner />)
}

function mapStateToProps() {
    return createStructuredSelector({
        genresData: selectGenresData,
        isGenresDataLoaded: selectIsGenresDataLoaded
    })
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTitleGenresStart: url => dispatch(fetchTitleGenresStart(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleGenresContainer);