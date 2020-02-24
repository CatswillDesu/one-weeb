import { createSelector } from 'reselect';

const selectSearchField = state => state.searchField

export const selectIsSearchPopupHidden = createSelector(
    selectSearchField,
    searchField => searchField.hidden
)

export const selectFilterText = createSelector(
    selectSearchField,
    searchField => searchField.filterText
)

export const selectFilteredTitlesData = createSelector(
    selectSearchField,
    searchField => searchField.filteredTitlesData
)

export const selectSearchFieledError = createSelector(
    selectSearchField,
    searchField => searchField.searchFieldError
)

export const selectIsFilteredTitlesDataLoaded = createSelector(
    selectSearchField,
    searchField => !!searchField.filteredTitlesData
)

export const selectIsSearchPopupLoading = createSelector(
    selectSearchField,
    searchField => searchField.isLoading
)