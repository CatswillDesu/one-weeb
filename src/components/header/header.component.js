import React from 'react';
import { Link } from 'react-router-dom';

import SearchField from '../search-field/search-field.component';

import './header.styles.scss';

function Header() {
    return (
        <header className="page-header">
            <div className="sub-container">
                <Link to="/" className="logo">OneWeeb</Link>
                <div className="options">
                    <Link to="/genres" className="option">Genres</Link>
                    <Link to="/collection" className="option">Your Collection</Link>
                </div>
            </div>
            <SearchField />
        </header>
    )
}

export default Header;