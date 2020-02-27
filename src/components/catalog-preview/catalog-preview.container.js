import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPreviewTypes, selectIsPreviewsLoaded, selectPreviewsCollection } from '../../redux/catalog-preview/catalog-preview.selectors';
import { fetchPreviewsStart } from '../../redux/catalog-preview/catalog-preview.actions';

import CatalogPreview from './catalog-preview.component';
import Spinner from '../spinner/spinner.component';

function CatalogPreviewContainer({ fetchPreviewsStart, previewTypes, isPreviewsLoaded, previewsCollection }) {
    const mappedCatalogPreviews = isPreviewsLoaded && previewsCollection.map((preview, index) => <CatalogPreview key={preview.previewType} previewType={`${previewTypes[index]}`} />)

    useEffect(() => {
        if (!isPreviewsLoaded) previewTypes.forEach(previewType => fetchPreviewsStart(previewType));
    }, [previewTypes, isPreviewsLoaded, fetchPreviewsStart])

    return (
        isPreviewsLoaded ?
        <div className="previews-collection">
            {mappedCatalogPreviews}
        </div>
        :
        <Spinner />
    )
}

function mapStateToProps() {
    return createStructuredSelector({
        previewTypes: selectPreviewTypes,
        isPreviewsLoaded: selectIsPreviewsLoaded,
        previewsCollection: selectPreviewsCollection
    })
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPreviewsStart: previewType => dispatch(fetchPreviewsStart(previewType))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogPreviewContainer);