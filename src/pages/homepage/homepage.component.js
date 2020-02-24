import React from 'react';

import { default as CatalogPreview } from '../../components/catalog-preview/catalog-preview.container';

import './homepage.styles.scss';

function Homepage() {
    return (
        <div className="homepage">
            <CatalogPreview previewType={'top-trending'} />
            <CatalogPreview previewType={'top-rated'} />
            <CatalogPreview previewType={'top-popular'} />
        </div>
    )
}

export default Homepage;