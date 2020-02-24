import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectFilterText, selectIsSearchPopupHidden, selectIsFilteredTitlesDataLoaded } from '../../redux/search-field/search-field.selectors';
import { changeFilterText, toggleSearchPopupHidden, clearSearchField } from '../../redux/search-field/search-field.actions';

import { ReactComponent as CrossIcon } from '../../assets/cross.svg';
import { default as SearchPopup} from '../search-popup/search-popup.container';

import './search-field.styles.scss';

function SearchField({ filterText, changeFilterText, toggleSearchPopupHidden, isSearchPopupHidden, clearSearchField, isFilteredTitlesDataLoaded }) {
    function handleChange(event) {
        const { value } = event.target;
        changeFilterText(value);
    }

    function clearField() {
        toggleSearchPopupHidden();
        clearSearchField();
    }

    return (
        <div className="search-field-container">
            <input
                className={`search-field ${!isSearchPopupHidden ? 'loading-mode' : ''}`}
                placeholder="Search..."
                onFocus={toggleSearchPopupHidden}
                value={filterText}
                onChange={handleChange}
            />
            { !isSearchPopupHidden ? 
                <button onClick={clearField} className="clear-button">
                    <CrossIcon className="clear-icon" />
                </button>
                : 
                null}
            { isSearchPopupHidden ? null : <SearchPopup />}
        </div>
    )
}

function mapStateToProps() {
    return createStructuredSelector({
        filterText: selectFilterText,
        isSearchPopupHidden: selectIsSearchPopupHidden,
        isFilteredTitlesDataLoaded: selectIsFilteredTitlesDataLoaded
    })
}

function mapDispatchToProps(dispatch) {
    return {
        changeFilterText: newFilterText => dispatch(changeFilterText(newFilterText)),
        toggleSearchPopupHidden: () => dispatch(toggleSearchPopupHidden()),
        clearSearchField: () => dispatch(clearSearchField())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);