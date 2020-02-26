import React from 'react';
import { connect } from 'react-redux';
import { closeSearchPopup } from '../../redux/search-field/search-field.actions';
import { Link } from 'react-router-dom';

import SearchField from '../search-field/search-field.component';

import './header.styles.scss';

function Header({ closeSearchPopup }) {
    return (
        <header className="page-header">
            <div className="sub-container">
                <Link to="/" onClick={closeSearchPopup} className="logo">OneWeeb</Link>
                <div className="options">
                    <Link to="/genres" onClick={closeSearchPopup} className="option">Genres</Link>
                    <Link to="/collection" onClick={closeSearchPopup} className="option">Your Collection</Link>
                </div>
            </div>
            <SearchField />
        </header>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        closeSearchPopup: () => dispatch(closeSearchPopup())
    }
}

export default connect(null, mapDispatchToProps)(Header);