import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchTitlesStart, setSearchMode, setModeSubtype, clearCatalogTitles } from '../../redux/catalog/catalog.actions';
import { selectTitlesData, selectCurrentPage } from '../../redux/catalog/catalog.selectors';
import { defaultPaginationOffset, getTypeTitle } from '../../utils';

import Spinner from '../../components/spinner/spinner.component';
import CatalogPage from './catalog.component';

function CatalogContainer({ location, setSearchMode, setModeSubtype, currentPage, fetchTitlesStart, clearCatalogTitles, titlesData }) {
    const pathname = location.pathname;
    const pathSlugs = pathname.split('/').slice(2);
    const searchMode = pathSlugs[0];
    const modeTitle =  searchMode === 'genres' ? searchMode.slice(0, -1) : getTypeTitle(searchMode).toUpperCase();
    const modeSubtype = pathSlugs[1];
    const subtypeTitle =  modeSubtype ? modeSubtype.split('-').map(str => str.charAt(0).toUpperCase() + str.slice(1)).join(' ') : '';

    useEffect(() => {
        setSearchMode(searchMode);
        setModeSubtype(modeSubtype);

        return clearCatalogTitles;
    }, [setSearchMode, searchMode, setModeSubtype, modeSubtype, clearCatalogTitles])

    useEffect(() => {
        fetchTitlesStart(searchMode, modeSubtype, ((currentPage - 1) * defaultPaginationOffset));
    }, [fetchTitlesStart, clearCatalogTitles, searchMode, modeSubtype, currentPage])


    return (
       !!titlesData ? 
       (<CatalogPage catalogTitles={{ modeTitle, subtypeTitle }} {...titlesData} />)
       :
       (<Spinner />)
    )
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTitlesStart: (searchMode, modeSubtype, offset) => dispatch(fetchTitlesStart(searchMode, modeSubtype, offset)),
        setSearchMode: newSearchMode => dispatch(setSearchMode(newSearchMode)),
        setModeSubtype: newModeSubtype => dispatch(setModeSubtype(newModeSubtype)),
        clearCatalogTitles: () => dispatch(clearCatalogTitles())
    }
}

function mapStateToProps() {
    return createStructuredSelector({
        currentPage: selectCurrentPage,
        titlesData: selectTitlesData
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogContainer);