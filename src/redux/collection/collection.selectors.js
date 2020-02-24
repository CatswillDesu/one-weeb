import { createSelector } from 'reselect';

const selectCollection = state => state.collection;

export const selectCollectionTitles = createSelector(
    selectCollection,
    collection => collection.collectionTitles
)

export const selectIsModalHidden = createSelector(
    selectCollection,
    collection => collection.isModalHidden
)

export const selectTitleToEdit = createSelector(
    selectCollection,
    collection => collection.titleToEdit
)
