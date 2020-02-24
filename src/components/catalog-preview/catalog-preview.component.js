import React from 'react';
import { Link } from 'react-router-dom';

import { getTypeTitle } from '../../utils';
import CatalogItem from '../catalog-item/catalog-item.component';

import './catalog-preview.styles.scss';

function CatalogPreview({ type, previewItems }) {
    const previewData = previewItems.data;

    const catalogItems = previewData.map(({ id, attributes }) => <CatalogItem key={id} item={{...attributes, id, itemSize: 'small'}} />);
    const catalogTitle = getTypeTitle(type);

    return (
        <div className="catalog-preview">
            <Link to={`/catalog/${type}`}><h2 className="title">{catalogTitle.toUpperCase()}</h2></Link>
            <ul className="list">{catalogItems}</ul>
        </div>
    )
}

export default CatalogPreview;