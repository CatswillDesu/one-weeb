import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchTitlesStart, setCatalogMode, setModeSubtype, clearCatalogTitles } from '../../redux/catalog/catalog.actions';
import { selectTitlesData, selectCurrentPage } from '../../redux/catalog/catalog.selectors';
import { defaultPaginationOffset } from '../../utils';

import Spinner from '../../components/spinner/spinner.component';
import CatalogPage from './catalog.component';

function CatalogContainer({ match, setCatalogMode, setModeSubtype, currentPage, fetchTitlesStart, clearCatalogTitles, titlesData, withSubtype }) {
    const { catalogMode, modeSubtype } = match.params;

    useEffect(() => {
        setCatalogMode(catalogMode);
        setModeSubtype(withSubtype ? modeSubtype :  null);

        return clearCatalogTitles
    }, [setCatalogMode, catalogMode, setModeSubtype, modeSubtype, withSubtype, clearCatalogTitles])

    useEffect(() => {
        fetchTitlesStart(catalogMode, modeSubtype, ((currentPage - 1) * defaultPaginationOffset));
    }, [fetchTitlesStart, catalogMode, modeSubtype, currentPage])


    return (
       !!titlesData ? 
       (<CatalogPage withSubtype={withSubtype} />)
       :
       (<Spinner />)
    )
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTitlesStart: (searchMode, modeSubtype, offset) => dispatch(fetchTitlesStart(searchMode, modeSubtype, offset)),
        setCatalogMode: newCatalogMode => dispatch(setCatalogMode(newCatalogMode)),
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