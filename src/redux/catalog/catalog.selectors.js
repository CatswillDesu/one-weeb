import { createSelector } from 'reselect';

const selectCatalog = state => state.catalog;

export const selectCurrentPage = createSelector(
    selectCatalog,
    catalog => catalog.currentPage
)

export const selectTitlesData = createSelector(
    selectCatalog,
    catalog => catalog.titlesData
)

export const selectGenresData = createSelector(
    selectCatalog,
    catalog => catalog.genresData
)

export const selectGenresError = createSelector(
    selectCatalog,
    catalog => catalog.genresError
)

export const selectIsGenresDataLoaded = createSelector(
    selectCatalog,
    catalog => !!catalog.genresData
)

export const selectCatalogError = createSelector(
    selectCatalog,
    catalog => catalog.catalogError
)

export const selectIsTitlesLoaded = createSelector(
    selectCatalog,
    catalog => catalog.isTitlesLoaded
)

export const selectCatalogMode = createSelector(
    selectCatalog,
    catalog => catalog.catalogMode
)

export const selectModeSubtype = createSelector(
    selectCatalog,
    catalog => catalog.modeSubtype
)