import { createSelector } from 'reselect';

const selectCatalogPreview = state => state.catalogPreview;

export const selectPreviews = createSelector(
    selectCatalogPreview,
    catalogPreviews => catalogPreviews.previewsData
)

export const selectTopTrendingPreview = createSelector(
    selectPreviews,
    previewsData => previewsData.topTrending
)

export const selectTopRatedPreview = createSelector(
    selectPreviews,
    previewsData => previewsData.topRated
)

export const selectTopPopularPreview = createSelector(
    selectPreviews,
    previewsData => previewsData.topPopular
)

export const selectIsTopTrendingPreviewLoaded = createSelector(
    selectPreviews,
    previewsData => !!previewsData.topTrending
)

export const selectIsTopRatedPreviewLoaded = createSelector(
    selectPreviews,
    previewsData => !!previewsData.topRated
)

export const selectIsTopPopularPreviewLoaded = createSelector(
    selectPreviews,
    previewsData => !!previewsData.topPopular
)

export const selectPreviewsError = createSelector(
    selectCatalogPreview,
    catalogPreviews => catalogPreviews.previewsError
)