import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTopRatedPreview, selectTopTrendingPreview, selectTopPopularPreview, selectIsTopTrendingPreviewLoaded, selectIsTopRatedPreviewLoaded, selectIsTopPopularPreviewLoaded } from '../../redux/catalog-preview/catalog-preview.selectors';
import { fetchPreviewsStart, clearPreviewTitles } from '../../redux/catalog-preview/catalog-preview.actions';

import CatalogPreview from './catalog-preview.component';
import Spinner from '../spinner/spinner.component';

function CatalogPreviewContainer({ previewType, topRatedPreview, topTrendingPreview, topPopularPreview,  fetchPreviewsStart, isTopTrendingPreviewLoaded, isTopRatedPreviewLoaded, isTopPopularPreviewLoaded, clearPreviewTitles }) {

    useEffect(() => {
        fetchPreviewsStart(previewType);

        return (previewType === 'top-popular' ? clearPreviewTitles : undefined)
    }, [previewType, fetchPreviewsStart, clearPreviewTitles])

    switch (previewType) {
        case 'top-trending':
            return (isTopTrendingPreviewLoaded ? 
                <CatalogPreview type="top-trending" previewItems={topTrendingPreview} />
                :
                <Spinner />)
        case 'top-rated': 
            return (isTopRatedPreviewLoaded ?
                <CatalogPreview type="top-rated" previewItems={topRatedPreview} />
                :
                <Spinner />)
        case 'top-popular':
            return (isTopPopularPreviewLoaded ?
                <CatalogPreview type="top-popular" previewItems={topPopularPreview} />
                :
                <Spinner />)
        default: 
                return <Spinner />
    }
}




function mapStateToProps() {
    return createStructuredSelector({
        topRatedPreview: selectTopRatedPreview,
        topTrendingPreview: selectTopTrendingPreview,
        topPopularPreview: selectTopPopularPreview,
        isTopRatedPreviewLoaded: selectIsTopRatedPreviewLoaded,
        isTopTrendingPreviewLoaded: selectIsTopTrendingPreviewLoaded,
        isTopPopularPreviewLoaded: selectIsTopPopularPreviewLoaded
    })
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPreviewsStart: previewType => dispatch(fetchPreviewsStart(previewType)),
        clearPreviewTitles: () => dispatch(clearPreviewTitles())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogPreviewContainer);