import React, { Fragment } from 'react';

import MiniCatalog from '../../components/mini-catalog/mini-catalog.component';

import './homepage.styles.scss';

function Homepage() {
    return (
        <Fragment>
            <MiniCatalog type={'top-trending'} />
            <MiniCatalog type={'top-rated'} />
            <MiniCatalog type={'top-popular'} />
        </Fragment>
    )
}

export default Homepage;