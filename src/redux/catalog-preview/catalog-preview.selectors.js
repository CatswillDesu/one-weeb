import { createSelector } from 'reselect';

const selectCatalogPreview = state => state.catalogPreview;

export const selectPreviewsCollection = createSelector(
    selectCatalogPreview,
    catalogPreviews => catalogPreviews.previewsCollection
)

export const selectPreviewTypes = createSelector(
    selectCatalogPreview,
    catalogPreviews => catalogPreviews.previewTypes
)

export const selectPreviewCollectionItem = (type) => createSelector(
    selectPreviewsCollection,
    previewsCollection => previewsCollection.find(preview => preview.previewType === type)
)

export const selectIsPreviewsLoaded = createSelector(
    [selectPreviewsCollection, selectPreviewTypes],
    (previewsCollection, previewTypes) => previewsCollection.length === previewTypes.length
)


export const selectPreviewsError = createSelector(
    selectCatalogPreview,
    catalogPreviews => catalogPreviews.previewsError
)