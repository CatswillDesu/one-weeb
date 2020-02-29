import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectFilterText, selectIsSearchPopupHidden } from '../../redux/search-field/search-field.selectors';
import { changeFilterText, openSearchPopup, closeSearchPopup, clearSearchField, changeRouteLocation } from '../../redux/search-field/search-field.actions';

import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import { ReactComponent as CrossIcon } from '../../assets/cross.svg';
import { default as SearchPopup} from '../search-popup/search-popup.container';

import './search-field.styles.scss';

function SearchField({ filterText, changeFilterText, openSearchPopup, closeSearchPopup, isSearchPopupHidden, clearSearchField, location, changeRouteLocation }) {
    useEffect(() => {
        changeRouteLocation(location.pathname)
    }, [location, changeRouteLocation])

    function handleChange(event) {
        const { value } = event.target;
        changeFilterText(value);
    }

    function clearField() {
        clearSearchField();
        closeSearchPopup();
    }

    return (
        <div className={`search-field-container ${!isSearchPopupHidden ? 'active' : ''}`}>
            <SearchIcon className={`search-icon`} />
            <input
                className={`search-field`}
                placeholder="Search..."
                onFocus={openSearchPopup}
                value={filterText}
                onChange={handleChange}
            />
            { !isSearchPopupHidden ? 
                <button onClick={clearField} className="clear-button">
                    <CrossIcon className="clear-icon" />
                </button>
                : 
                null}
            { !isSearchPopupHidden && <SearchPopup />}
        </div>
    )
}

function mapStateToProps() {
    return createStructuredSelector({
        filterText: selectFilterText,
        isSearchPopupHidden: selectIsSearchPopupHidden
    })
}

function mapDispatchToProps(dispatch) {
    return {
        changeFilterText: newFilterText => dispatch(changeFilterText(newFilterText)),
        openSearchPopup: () => dispatch(openSearchPopup()),
        closeSearchPopup: () => dispatch(closeSearchPopup()),
        clearSearchField: () => dispatch(clearSearchField()),
        changeRouteLocation: locationPathname => dispatch(changeRouteLocation(locationPathname))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchField));