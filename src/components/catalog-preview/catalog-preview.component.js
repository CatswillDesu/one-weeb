import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectPreviewCollectionItem } from '../../redux/catalog-preview/catalog-preview.selectors';
import { getTypeTitle } from '../../utils';

import CatalogItem from '../catalog-item/catalog-item.component';

import './catalog-preview.styles.scss';

function CatalogPreview({ previewType, previewData }) {
    const previewsArray = previewData.previewsArray; 
    const catalogItems = previewsArray.map(item => <CatalogItem key={item.id} item={{...item.attributes, id: item.id, itemSize: 'small' }} />);
    const catalogTitle = getTypeTitle(previewType);
   
    return (
        <div className="catalog-preview">
            <Link to={`/catalog/${previewType}`}><h2 className="title">{catalogTitle.toUpperCase()}</h2></Link>
            <ul className="list">{catalogItems}</ul>
        </div> 
    )
}

function mapStateToProps(state, ownProps) {
    return {
        previewData: selectPreviewCollectionItem(ownProps.previewType)(state)
    }
}

export default connect(mapStateToProps)(CatalogPreview);