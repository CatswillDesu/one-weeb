import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectFilterText, selectFilteredTitlesData, selectIsFilteredTitlesDataLoaded, selectIsSearchPopupLoading } from '../../redux/search-field/search-field.selectors';
import { fetchFilteredTitlesStart, clearFilteredTitles } from '../../redux/search-field/search-field.actions';

import SearchPopup from './search-popup.component';
import Spinner from '../spinner/spinner.component';

function SearchPopupContainer({ filterText, filteredTitlesData, isFilteredTitlesDataLoaded, fetchFilteredTitlesStart, isSearchPopupLoading, clearFilteredTitles }) {
    useEffect(() => {
        if (filterText.length > 2) {
            fetchFilteredTitlesStart(filterText);
        } else {
            clearFilteredTitles()
        };
    }, [filterText, fetchFilteredTitlesStart, clearFilteredTitles])

    return (
        <div className="search-popup-container" >
             {isSearchPopupLoading ? 
                <Spinner size="small" />
                :
                isFilteredTitlesDataLoaded ?
                    filteredTitlesData.data.length ?
                    <SearchPopup filteredTitlesData={filteredTitlesData} />
                    :
                    <p className="not-found-alert">No matches found</p>  
                :
                <p className="instruction">Eneter the title of anime you're looking for</p>}
        </div>
    )
}

function mapStateToProps() {
    return createStructuredSelector({
        filterText: selectFilterText,
        filteredTitlesData: selectFilteredTitlesData,
        isFilteredTitlesDataLoaded: selectIsFilteredTitlesDataLoaded,
        isSearchPopupLoading: selectIsSearchPopupLoading
    })
}

function mapDispatchToProps(dispatch) {
    return {
        fetchFilteredTitlesStart: filterText => dispatch(fetchFilteredTitlesStart(filterText)),
        clearFilteredTitles: () => dispatch(clearFilteredTitles())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPopupContainer);