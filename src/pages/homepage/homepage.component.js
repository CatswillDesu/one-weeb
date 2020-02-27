import React from 'react';

import CatalogPreviewContainer from '../../components/catalog-preview/catalog-preview.container';

import './homepage.styles.scss';

function Homepage() {
    return (
        <div className="homepage">
            <CatalogPreviewContainer />
        </div>
    )
}


export default Homepage;